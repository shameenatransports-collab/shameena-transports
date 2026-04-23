import { useMemo, useState } from "react";
import { z } from "zod";
import { Phone, MessageCircle, Send, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { trackContactFormSubmit, trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100, "Name is too long"),
  phone: z.string().trim().regex(/^(?:\+91[\s-]?)?[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  route: z.string().trim().min(2, "Enter pickup and delivery city").max(140, "Route is too long"),
  service: z.string().trim().min(2, "Enter the service needed").max(120, "Service is too long"),
  details: z.string().trim().max(500, "Details must be under 500 characters").optional(),
});

type EnquiryForm = z.infer<typeof enquirySchema>;

const initialForm: EnquiryForm = { name: "", phone: "", route: "", service: "", details: "" };

export function LeadEnquiryForm({ city }: { city?: string }) {
  const { toast } = useToast();
  const [form, setForm] = useState<EnquiryForm>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryForm, string>>>({});

  const context = city ? `${city} enquiry` : "Tamil Nadu enquiry";
  const whatsappHref = useMemo(() => {
    const parsed = enquirySchema.safeParse(form);
    const data = parsed.success ? parsed.data : form;
    const message = `STA Corporate Solutions enquiry\nName: ${data.name}\nPhone: ${data.phone}\nRoute/City: ${data.route}\nService: ${data.service}${data.details ? `\nDetails: ${data.details}` : ""}`;
    return `https://wa.me/919443033055?text=${encodeURIComponent(message)}`;
  }, [form]);

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

  const handleSubmit = (action: "whatsapp" | "form") => {
    const data = validate();
    if (!data) return;

    trackContactFormSubmit({
      service_type: data.service,
      source_city: city || data.route,
      destination_city: data.route,
    });

    if (action === "whatsapp") {
      trackWhatsAppClick(`lead_form_${context}`);
      window.open(whatsappHref, "_blank", "noopener,noreferrer");
    } else {
      toast({ title: "Enquiry ready", description: "Tap WhatsApp or Call Now for the fastest response." });
    }
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
            <p className="text-sm text-muted-foreground">Fast callback for transport, loans, and legal support.</p>
          </div>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <FieldError label="Name" error={errors.name}>
              <Input value={form.name} onChange={(e) => update("name", e.target.value)} maxLength={100} autoComplete="name" />
            </FieldError>
            <FieldError label="Mobile" error={errors.phone}>
              <Input value={form.phone} onChange={(e) => update("phone", e.target.value.replace(/[^0-9+\s-]/g, ""))} maxLength={15} inputMode="tel" autoComplete="tel" />
            </FieldError>
          </div>
          <FieldError label="Route / City" error={errors.route}>
            <Input value={form.route} onChange={(e) => update("route", e.target.value)} maxLength={140} placeholder={city ? `${city} to Chennai` : "Coimbatore to Chennai"} />
          </FieldError>
          <FieldError label="Service needed" error={errors.service}>
            <Input value={form.service} onChange={(e) => update("service", e.target.value)} maxLength={120} placeholder="Full load lorry, MSME loan, legal service" />
          </FieldError>
          <FieldError label="Details" error={errors.details} optional>
            <Textarea value={form.details} onChange={(e) => update("details", e.target.value)} maxLength={500} rows={3} placeholder="Goods, weight, date, or preferred callback time" />
          </FieldError>

          <div className="grid gap-3 sm:grid-cols-3">
            <Button type="button" className="h-12 rounded-full sm:col-span-2" onClick={() => handleSubmit("whatsapp")}>
              <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
            </Button>
            <a href="tel:+919443033055" onClick={() => trackPhoneClick("+919443033055", `lead_form_${context}`)}>
              <Button type="button" variant="secondary" className="h-12 w-full rounded-full">
                <Phone className="h-4 w-4" /> Call
              </Button>
            </a>
          </div>
          <Button type="button" variant="ghost" className="h-11 w-full rounded-full" onClick={() => handleSubmit("form")}>
            <Send className="h-4 w-4" /> Validate enquiry details
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function FieldError({ label, error, optional, children }: { label: string; error?: string; optional?: boolean; children: React.ReactNode }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-sm font-medium text-foreground">
        {label} {!optional && <span className="text-destructive">*</span>}
      </Label>
      <div id={id}>{children}</div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}