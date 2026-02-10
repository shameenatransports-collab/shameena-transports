import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MessageCircle, Send, CheckCircle } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(10, "Phone number required").max(15),
  propertyType: z.string().min(1, "Select a property type"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().trim().max(1000).optional(),
});

const propertyOptions = [
  "Luxury Villa",
  "Premium Apartment",
  "Penthouse",
  "Off-Plan Project",
  "Commercial Property",
];

const budgetOptions = [
  "AED 500K - 1M",
  "AED 1M - 2M",
  "AED 2M - 5M",
  "AED 5M - 10M",
  "AED 10M+",
];

export function DubaiContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast.success("Enquiry submitted! We'll contact you within 24 hours.");
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  if (submitted) {
    return (
      <Card className="border-accent/30 shadow-2xl">
        <CardContent className="p-8 md:p-12 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-6">
            <CheckCircle className="h-10 w-10 text-accent" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            Our Dubai real estate expert will contact you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919443033055">
              <Button variant="default" className="gap-2">
                <Phone className="h-4 w-4" /> Call Now
              </Button>
            </a>
            <a
              href={`https://wa.me/919443033055?text=${encodeURIComponent("Hi, I'm interested in Dubai real estate investment.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-accent/30 shadow-2xl">
      <CardContent className="p-8 md:p-12">
        <Badge variant="outline" className="mb-4">Free Consultation</Badge>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Enquire About Dubai Properties
        </h3>
        <p className="text-muted-foreground mb-8">
          Fill in your details and our expert will guide you through the best options.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
            {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label>Property Type *</Label>
              <Select onValueChange={(v) => updateField("propertyType", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.propertyType && <p className="text-sm text-destructive">{errors.propertyType}</p>}
            </div>
            <div className="space-y-2">
              <Label>Budget Range *</Label>
              <Select onValueChange={(v) => updateField("budget", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  {budgetOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.budget && <p className="text-sm text-destructive">{errors.budget}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Requirements</Label>
            <Textarea
              id="message"
              placeholder="Any specific location, size, or feature preferences..."
              value={formData.message}
              onChange={(e) => updateField("message", e.target.value)}
              rows={3}
            />
          </div>

          <Button type="submit" size="lg" className="w-full gap-2 text-lg py-6">
            <Send className="h-5 w-5" /> Submit Enquiry
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
