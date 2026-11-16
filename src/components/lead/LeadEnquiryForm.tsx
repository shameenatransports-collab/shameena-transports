import { Children, cloneElement, isValidElement, useId, useRef, useState, type ReactElement, type ReactNode } from "react";
import { z } from "zod";
import { Phone, MessageCircle, Truck } from "lucide-react";
import { useLocation } from "react-router-dom";
import { enquirySchema, transportEnquiryUrl } from "@/lib/transport-enquiry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { trackContactFormSubmit, trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

type EnquiryForm = z.infer<typeof enquirySchema>;

const initialForm: EnquiryForm = { name: "", phone: "", route: "", service: "", details: "" };

const MIN_FILL_MS = 3000; // human users almost never fill faster than 3s
const SUBMIT_THROTTLE_MS = 60_000; // 1 submission per minute per browser
const LAST_SUBMIT_KEY = "sta_lead_last_submit";

export function LeadEnquiryForm({ city, route = "", service = "" }: { city?: string; route?: string; service?: string }) {
  const { toast } = useToast();
  const location = useLocation();
  const [form, setForm] = useState<EnquiryForm>({ ...initialForm, route, service });
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryForm, string>>>({});
  // Honeypot — invisible to humans, bots auto-fill anything labelled "company"
  const [honeypot, setHoneypot] = useState("");
  const mountedAt = useRef<number>(Date.now());

  const context = city ? `${city} enquiry` : "Coimbatore enquiry";

  const update = (field: keyof EnquiryForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const parsed = enquirySchema.safeParse(form);
    if (parsed.success) return parsed.data;
    const nextErrors: Partial<Record<keyof EnquiryForm, string>> = {};
    parsed.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof EnquiryForm;
      nextErrors[field] = issue.message;
    });
    setErrors(nextErrors);
    return null;
  };

  const passesAntiBot = (): boolean => {
    // 1. Honeypot must remain empty
    if (honeypot.trim().length > 0) return false;
    // 2. Min fill-time gate
    if (Date.now() - mountedAt.current < MIN_FILL_MS) return false;
    // 4. Per-browser throttle
    try {
      const last = Number(localStorage.getItem(LAST_SUBMIT_KEY) || 0);
      if (last && Date.now() - last < SUBMIT_THROTTLE_MS) return false;
    } catch { /* localStorage blocked → allow */ }
    return true;
  };

  const handleSubmit = () => {
    const data = validate();
    if (!data) return;

    if (!passesAntiBot()) {
      // Silent no-op for bots; benign UX nudge for humans hitting the throttle.
      toast({ title: "Just a moment", description: "Please wait a few seconds before submitting again." });
      return;
    }

    try { localStorage.setItem(LAST_SUBMIT_KEY, String(Date.now())); } catch { /* noop */ }

    trackContactFormSubmit({
      service_type: data.service,
      source_city: city || data.route,
      destination_city: data.route,
    });

    trackWhatsAppClick(`lead_form_${context}`);
    window.open(transportEnquiryUrl(data, location.pathname), "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="overflow-hidden border-border/60 bg-card/85 shadow-xl backdrop-blur-xl">
      <CardContent className="p-5 md:p-7">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Truck className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Quick Enquiry</h2>
          </div>
        </div>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} noValidate>
          {/* Honeypot — visually & assistive-tech hidden, but visible to naive bots */}
          <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden" tabIndex={-1}>
            <label htmlFor="sta-company-website">Company website (leave blank)</label>
            <input
              id="sta-company-website"
              name="company_website"
              type="text"
              autoComplete="off"
              tabIndex={-1}
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FieldError label="Name" error={errors.name}>
              <Input value={form.name} onChange={(e) => update("name", e.target.value)} maxLength={100} autoComplete="name" />
            </FieldError>
            <FieldError label="Mobile" error={errors.phone}>
              <Input value={form.phone} onChange={(e) => update("phone", e.target.value.replace(/[^0-9+\s-]/g, ""))} maxLength={15} inputMode="tel" autoComplete="tel" />
            </FieldError>
          </div>
          <FieldError label="Route / City" error={errors.route}>
            <Input value={form.route} onChange={(e) => update("route", e.target.value)} maxLength={140} placeholder={city ? `${city} to Pollachi` : "Coimbatore to Pollachi"} />
          </FieldError>
          <FieldError label="Service needed" error={errors.service}>
            <Input value={form.service} onChange={(e) => update("service", e.target.value)} maxLength={120} placeholder="Full load lorry, factory shifting" />
          </FieldError>
          <FieldError label="Details" error={errors.details} optional>
            <Textarea value={form.details} onChange={(e) => update("details", e.target.value)} maxLength={500} rows={3} placeholder="Goods, weight, date, or preferred callback time" />
          </FieldError>

          <div className="grid gap-3 sm:grid-cols-3">
            <Button type="submit" className="h-12 rounded-full sm:col-span-2">
              <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
            </Button>
            <a href="tel:+919443033055" onClick={() => trackPhoneClick("+919443033055", `lead_form_${context}`)}>
              <Button type="button" variant="secondary" className="h-12 w-full rounded-full">
                <Phone className="h-4 w-4" /> Call
              </Button>
            </a>
          </div>
          <p className="text-[11px] text-muted-foreground/70 text-center">
            By submitting you consent to STA Corporate Solutions contacting you about this enquiry, under the DPDP Act 2023. Withdraw anytime via{" "}
            <a href="/data-request" className="underline hover:text-foreground">Data Request</a>.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

function FieldError({ label, error, optional, children }: { label: string; error?: string; optional?: boolean; children: ReactNode }) {
  const reactId = useId();
  const id = `enquiry-${label.toLowerCase().replace(/\s+/g, "-")}-${reactId}`;
  const only = Children.only(children);
  const child = isValidElement(only)
    ? cloneElement(only as ReactElement<{ id?: string }>, { id })
    : only;
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-sm font-medium text-foreground">
        {label} {!optional && <span className="text-destructive">*</span>}
      </Label>
      {child}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
