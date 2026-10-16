import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createResponsesCall } from "./responses.ts";
import { educationInput, educationInstructions, pauseForStatus } from "./policy.ts";

const headers = { ...corsHeaders, "Cache-Control": "no-store" };
const json = (status: number, message: string) => new Response(JSON.stringify({ error: message }), { status, headers: { ...headers, "Content-Type": "application/json" } });

// Public by design: no accounts, saved student data, or privileged student operations.
Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response(null, { headers });
  if (request.method !== "POST") return json(405, "Use the education guidance form to request suggestions.");
  if (Number(request.headers.get("content-length") || 0) > 12000) return json(400, "Please shorten your academic details.");
  let input;
  try {
    const raw = await request.text();
    if (raw.length > 12000) return json(400, "Please shorten your academic details.");
    input = educationInput.safeParse(JSON.parse(raw));
  } catch { return json(400, "Please provide valid academic details."); }
  if (!input.success) return json(400, "Complete qualifications, goals and destination, and confirm both consent choices.");
  const key = Deno.env.get("LOVABLE_API_KEY");
  const url = Deno.env.get("SUPABASE_URL");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!key || !url || !serviceKey) return json(401, "AI guidance is not configured. Please contact STA on WhatsApp.");
  const db = createClient(url, serviceKey, { auth: { persistSession: false } });
  const { data: paused, error: stateError } = await db.from("education_ai_availability").select("status_code,safe_message").eq("feature", "education-pathways").maybeSingle();
  if (stateError) return json(503, "AI guidance is temporarily unavailable. Please contact STA on WhatsApp.");
  if (paused) return json(paused.status_code, paused.safe_message);
  let upstreamStatus = 200;
  let upstreamMessage = "";
  const controller = new AbortController();
  request.signal.addEventListener("abort", () => controller.abort(), { once: true });
  try {
    const { result, gateway } = createResponsesCall(request, {
      baseURL: "https://ai.gateway.lovable.dev/v1", apiKey: key, model: "openai/gpt-6-astra", signal: controller.signal,
      onErrorResponse: async (response) => {
        upstreamStatus = response.status;
        let body;
        try { body = await response.clone().json(); } catch { body = {}; }
        upstreamMessage = body.message || body.error?.message || "AI guidance is unavailable. Please contact STA on WhatsApp.";
        if (pauseForStatus(response.status)) {
          const { error } = await db.from("education_ai_availability").upsert({ feature: "education-pathways", status_code: response.status, safe_message: upstreamMessage });
          if (error) throw new Error("Unable to persist AI access status");
        }
      },
    }, [{ role: "user", content: JSON.stringify(input.data) }], educationInstructions);
    const iterator = result.fullStream[Symbol.asyncIterator]();
    // Wait for the first provider event so access failures preserve their HTTP status.
    const first = await iterator.next();
    await gateway.waitForRunId();
    if (upstreamStatus >= 400) return json(upstreamStatus, upstreamMessage);
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(out) {
        const send = (event: object) => out.enqueue(encoder.encode(`data: ${JSON.stringify(event)}\n\n`));
        let hasText = false;
        try {
          let part = first;
          while (!part.done) {
            const event = part.value;
            if (event.type === "text-delta") { hasText = true; send({ type: "text", text: event.text }); }
            if (event.type === "error") { send({ type: "error", message: upstreamMessage || "AI could not complete this request. Please contact STA on WhatsApp." }); out.close(); return; }
            part = await iterator.next();
          }
          send(hasText ? { type: "done" } : { type: "error", message: "No education suggestions were returned. Please contact STA on WhatsApp." });
          out.close();
        } catch {
          if (!controller.signal.aborted) { send({ type: "error", message: upstreamMessage || "AI guidance was interrupted. Your details are still in the form." }); out.close(); }
        }
      },
      cancel() { controller.abort(); },
    });
    const streamHeaders = new Headers({ ...headers, "Content-Type": "text/event-stream" });
    const runId = gateway.getRunId();
    if (runId) { streamHeaders.set("X-Lovable-AIG-Run-ID", runId); streamHeaders.set("Access-Control-Expose-Headers", "X-Lovable-AIG-Run-ID"); }
    return new Response(stream, { headers: streamHeaders });
  } catch {
    if (controller.signal.aborted) return json(499, "Education guidance stopped.");
    return json(upstreamStatus >= 400 ? upstreamStatus : 500, upstreamMessage || "AI guidance could not complete this request. Please contact STA on WhatsApp.");
  }
});