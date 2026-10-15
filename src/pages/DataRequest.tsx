import { Helmet } from "react-helmet-async";
import { useMemo, useRef, useState } from "react";
import { z } from "zod";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Shield, MessageCircle, Phone } from "lucide-react";
import { isLikelyBot } from "@/lib/analytics";

const REQUEST_TYPES = [
  { value: "access", label: "Access — get a copy of my data" },
  { value: "correction", label: "Correction — fix inaccurate data" },
  { value: "erasure", label: "Erasure — delete my data" },
  { value: "withdraw", label: "Withdraw consent" },
  { value: "nomination", label: "Nominate someone to exercise my rights" },
  { value: "grievance", label: "Grievance / complaint" },
] as const;

const dprSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(120),
  mobile: z.string().trim().regex(/^(?:\+91[\s-]?)?[6-9]\d{9}$/, "Enter a valid Indian mobile"),
  requestType: z.enum(["access", "correction", "erasure", "withdraw", "nomination", "grievance"]),
  reference: z.string().trim().max(200).optional(),
  message: z.string().trim().min(10, "Describe your request (min 10 chars)").max(1500, "Keep under 1500 characters"),
  consent: z.literal(true, { errorMap: () => ({ message: "You must confirm identity to proceed" }) }),
});

type DPRForm = z.infer<typeof dprSchema>;
type DPRErrors = Partial<Record<keyof DPRForm, string>>;

const initial: Partial<DPRForm> = {
  name: "",
  mobile: "",
  requestType: "access",
  reference: "",
  message: "",
};

const MIN_FILL_MS = 4000;

const DataRequest = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<Partial<DPRForm>>(initial);
  const [errors, setErrors] = useState<DPRErrors>({});
  const [honeypot, setHoneypot] = useState("");
  const mountedAt = useRef(Date.now());

  const set = <K extends keyof DPRForm>(k: K, v: DPRForm[K] | string | boolean) =>
    setForm((p) => ({ ...p, [k]: v as any }));

  const validate = (): DPRForm | null => {
    const parsed = dprSchema.safeParse(form);
    if (parsed.success) return parsed.data;
    const next: DPRErrors = {};
    parsed.error.issues.forEach((i) => {
      const k = i.path[0] as keyof DPRForm;
      next[k] = i.message;
    });
    setErrors(next);
    return null;
  };

  const buildMessage = (d: DPRForm) =>
    `STA DPDP — Data Principal Request\n` +
    `Type: ${REQUEST_TYPES.find((r) => r.value === d.requestType)?.label}\n` +
    `Name: ${d.name}\nMobile: ${d.mobile}\n` +
    (d.reference ? `Reference: ${d.reference}\n` : "") +
    `\nRequest:\n${d.message}\n\n— Submitted via sta-corporate.in/data-request`;

  const whatsappHref = useMemo(() => {
    const parsed = dprSchema.safeParse(form);
    const data = parsed.success ? parsed.data : (form as DPRForm);
    return `https://wa.me/919443033055?text=${encodeURIComponent(buildMessage(data))}`;
  }, [form]);

  const submit = () => {
    const data = validate();
    if (!data) return;

    // Anti-bot gates
    if (honeypot.trim().length > 0 || isLikelyBot() || Date.now() - mountedAt.current < MIN_FILL_MS) {
      toast({ title: "Please wait a moment", description: "Try again in a few seconds." });
      return;
    }

      window.open(whatsappHref, "_blank", "noopener,noreferrer");
    toast({
      title: "Request submitted",
      description: "Our Grievance Officer will respond within 30 days as required by the DPDP Act.",
    });
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sta-corporate.in/" },
      { "@type": "ListItem", position: 2, name: "Privacy", item: "https://sta-corporate.in/privacy" },
      { "@type": "ListItem", position: 3, name: "Data Request", item: "https://sta-corporate.in/data-request" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Data Principal Request | DPDP Act 2023 | STA Corporate Solutions</title>
        <meta name="description" content="Exercise your DPDP Act 2023 rights — access, correction, erasure, withdraw consent, nomination or grievance. STA Corporate Solutions responds within 30 days." />
        <link rel="canonical" href="https://sta-corporate.in/data-request" />
        <meta name="robots" content="noindex, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>
      <Layout>
        <section className="relative py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-foreground/10 text-primary-foreground">
                  <Shield className="h-6 w-6" />
                </div>
                <p className="text-eyebrow text-primary-foreground/70">DPDP Act 2023</p>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Data Principal Request
              </h1>
              <p className="text-lg text-primary-foreground/85">
                Exercise your right to access, correct, erase, withdraw consent, nominate or
                file a grievance. We respond within 30 days.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6 md:p-8 space-y-5">
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()} noValidate>
                    {/* Honeypot */}
                    <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden" tabIndex={-1}>
                      <label htmlFor="dpr-website">Website</label>
                      <input id="dpr-website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="dpr-name">Full name *</Label>
                        <Input id="dpr-name" value={form.name || ""} onChange={(e) => set("name", e.target.value)} maxLength={120} autoComplete="name" />
                        {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                      </div>
                      
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="dpr-mobile">Mobile *</Label>
                        <Input id="dpr-mobile" inputMode="tel" value={form.mobile || ""} onChange={(e) => set("mobile", e.target.value.replace(/[^0-9+\s-]/g, ""))} maxLength={15} autoComplete="tel" />
                        {errors.mobile && <p className="text-xs text-destructive">{errors.mobile}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="dpr-ref">Reference (optional)</Label>
                        <Input id="dpr-ref" placeholder="Booking / invoice / LR no." value={form.reference || ""} onChange={(e) => set("reference", e.target.value)} maxLength={200} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Type of request *</Label>
                      <RadioGroup value={form.requestType} onValueChange={(v) => set("requestType", v as DPRForm["requestType"])} className="grid sm:grid-cols-2 gap-2">
                        {REQUEST_TYPES.map((r) => (
                          <label key={r.value} htmlFor={`dpr-${r.value}`} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-3 cursor-pointer hover:border-primary/40 transition-colors">
                            <RadioGroupItem id={`dpr-${r.value}`} value={r.value} className="mt-0.5" />
                            <span className="text-sm leading-snug">{r.label}</span>
                          </label>
                        ))}
                      </RadioGroup>
                      {errors.requestType && <p className="text-xs text-destructive">{errors.requestType}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="dpr-msg">Describe your request *</Label>
                      <Textarea id="dpr-msg" rows={5} maxLength={1500} value={form.message || ""} onChange={(e) => set("message", e.target.value)} placeholder="Tell us what data, which service, and any specifics that help us verify identity." />
                      {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                    </div>

                    <label className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
                      <input type="checkbox" checked={!!form.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-1" />
                      <span>
                        I confirm I am the Data Principal (or their authorised representative) and the
                        information above is accurate. STA may verify identity before acting on this request,
                        as permitted by the DPDP Act 2023.
                      </span>
                    </label>
                    {errors.consent && <p className="text-xs text-destructive">{errors.consent}</p>}

                    <div className="grid gap-3 pt-2">
                      <Button type="button" className="h-12 rounded-full" onClick={() => submit()}>
                        <MessageCircle className="h-4 w-4" /> Submit via WhatsApp
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 md:p-8 space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">Grievance Officer</h2>
                  <p className="text-sm text-muted-foreground">
                    No.302/2A7, VK Road, Peelamedu, Coimbatore – 641004, Tamil Nadu
                  </p>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <a href="tel:+919443033055"><Button variant="outline" size="sm"><Phone className="h-3.5 w-3.5" /> +91 94430 33055</Button></a>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">
                    Unresolved after 30 days? Escalate to the Data Protection Board of India once notified
                    under DPDP §18.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default DataRequest;
