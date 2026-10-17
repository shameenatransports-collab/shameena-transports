import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Sparkles, Square, MessageCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  qualifications: z.string().trim().min(5, "Add your qualification and subject.").max(1200),
  goals: z.string().trim().min(5, "Tell us what you want to study or achieve.").max(1200),
  destination: z.string().trim().min(2, "Add your preferred state, city or country.").max(150),
  consent: z.literal(true, { errorMap: () => ({ message: "Please consent to AI processing." }) }),
  adult: z.literal(true, { errorMap: () => ({ message: "This AI service is for adults aged 18 or over." }) }),
});

export function EducationPathwayFinder() {
  const [profile, setProfile] = useState({ qualifications: "", goals: "", destination: "", consent: false, adult: false });
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [complete, setComplete] = useState(false);
  const [submitted, setSubmitted] = useState<typeof profile | null>(null);
  const active = useRef<AbortController | null>(null);
  useEffect(() => () => active.current?.abort(), []);
  const update = (field: "qualifications" | "goals" | "destination", value: string) => setProfile(p => ({ ...p, [field]: value }));

  async function suggest(event: React.FormEvent) {
    event.preventDefault();
    if (busy) return;
    const parsed = schema.safeParse(profile);
    if (!parsed.success) { setError(parsed.error.issues[0]?.message || "Check your details."); return; }
    const url = import.meta.env.VITE_SUPABASE_URL;
    const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    if (!url || !key) { setError("AI guidance is not configured yet. Please contact STA on WhatsApp."); return; }
    const controller = new AbortController();
    active.current = controller;
    setBusy(true); setComplete(false); setAnswer(""); setError(""); setSubmitted({ ...profile, ...parsed.data });
    try {
      const response = await fetch(`${url}/functions/v1/education-pathways`, {
        method: "POST", headers: { "Content-Type": "application/json", apikey: key },
        body: JSON.stringify(parsed.data), signal: controller.signal,
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || data.message || "AI guidance is temporarily unavailable. Please contact STA on WhatsApp.");
      }
      if (!response.body) throw new Error("No education suggestions were returned.");
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let pending = "";
      let finished = false;
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        pending += decoder.decode(value, { stream: true });
        const events = pending.split("\n\n");
        pending = events.pop() || "";
        for (const item of events) {
          if (!item.startsWith("data: ")) continue;
          const data = JSON.parse(item.slice(6));
          if (data.type === "text") setAnswer(current => current + data.text);
          if (data.type === "error") { await reader.cancel(); throw new Error(data.message); }
          if (data.type === "done") finished = true;
        }
      }
      if (!finished) throw new Error("The suggestions were interrupted. Please contact STA on WhatsApp.");
      setComplete(true);
    } catch (err) {
      if (controller.signal.aborted) setError("Stopped. Any partial suggestions are incomplete.");
      else setError(err instanceof Error ? err.message : "AI guidance is unavailable.");
    } finally { setBusy(false); active.current = null; }
  }

  const whatsapp = submitted ? `https://wa.me/919443033055?text=${encodeURIComponent(`Education consultancy enquiry\nQualifications: ${submitted.qualifications}\nGoals: ${submitted.goals}\nPreferred destination: ${submitted.destination}${complete ? `\n\nAI starting points (not verified):\n${answer.slice(0, 4000)}` : ""}`)}` : "https://wa.me/919443033055";

  return (
    <section id="education-pathways" className="bg-muted/40 py-16 md:py-24 scroll-mt-28" aria-labelledby="pathway-title">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-10">
          <p className="text-sm font-semibold text-primary mb-3 flex items-center gap-2"><Sparkles className="h-4 w-4" /> AI education guidance</p>
          <h2 id="pathway-title" className="text-3xl md:text-4xl font-bold text-foreground">Find your next education pathway</h2>
          <p className="text-muted-foreground mt-4">AI suggestions are starting points, not verified courses or admission offers. Eligibility, recognition and credit acceptance must be confirmed with the institution.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <form onSubmit={suggest} className="space-y-5">
            <fieldset disabled={busy} className="space-y-5">
              <div className="space-y-2"><Label htmlFor="education-qualifications">Your qualifications</Label><Textarea id="education-qualifications" required minLength={5} maxLength={1200} value={profile.qualifications} onChange={e => update("qualifications", e.target.value)} placeholder="e.g. Diploma in mechanical engineering, completed in 2024" className="min-h-28" /></div>
              <div className="space-y-2"><Label htmlFor="education-goals">Your education and career goals</Label><Textarea id="education-goals" required minLength={5} maxLength={1200} value={profile.goals} onChange={e => update("goals", e.target.value)} placeholder="e.g. Complete a degree while working and move into manufacturing management" className="min-h-28" /></div>
              <div className="space-y-2"><Label htmlFor="education-destination">Preferred destination</Label><Input id="education-destination" required minLength={2} maxLength={150} value={profile.destination} onChange={e => update("destination", e.target.value)} placeholder="e.g. Coimbatore, Tamil Nadu" /></div>
              <p className="text-xs text-muted-foreground">Do not include your name, phone number, marksheets or identity documents. Your inputs are sent to Lovable AI to generate suggestions; STA does not save them in its student records.</p>
              <label className="flex gap-3 items-start text-sm text-foreground"><input type="checkbox" checked={profile.adult} onChange={e => setProfile(p => ({ ...p, adult: e.target.checked }))} className="mt-1 accent-primary" />I am aged 18 or over.</label>
              <label className="flex gap-3 items-start text-sm text-foreground"><input type="checkbox" checked={profile.consent} onChange={e => setProfile(p => ({ ...p, consent: e.target.checked }))} className="mt-1 accent-primary" /><span>I consent to AI processing of these academic details for this request. <Link to="/privacy" className="underline text-primary">Privacy policy</Link></span></label>
            </fieldset>
            <div className="flex flex-wrap gap-3">
              <Button type="submit" disabled={busy} className="h-11"><Sparkles />{busy ? "Preparing suggestions…" : "Suggest pathways"}</Button>
              {busy && <Button type="button" variant="outline" onClick={() => active.current?.abort()}><Square />Stop</Button>}
            </div>
            {error && <p role="alert" className="text-sm text-destructive break-words">{error}</p>}
          </form>
          <div className="border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-10 min-w-0">
            <h3 className="font-semibold text-xl text-foreground mb-4">Your pathway suggestions</h3>
            <div aria-busy={busy} className="min-h-52">
              {answer ? <p className="whitespace-pre-wrap break-words text-sm leading-7 text-foreground">{answer}</p> : <p role="status" className="text-muted-foreground text-sm">{busy ? "Reviewing your qualifications, goals and preferred destination…" : "No suggestions yet."}</p>}
            </div>
            <div className="border-t border-border mt-6 pt-6">
              {complete && <p role="status" className="text-sm text-muted-foreground mb-4">Suggestions ready. A counsellor can help you verify the next steps.</p>}
              <Button variant="outline" asChild><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle />Discuss on WhatsApp<ArrowUpRight /></a></Button>
              <p className="text-xs text-muted-foreground mt-3">Opens a draft to 94430 33055. Nothing is sent until you send it in WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}