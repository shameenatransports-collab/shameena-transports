import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Package,
  User,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  MessageCircle,
  Truck,
} from "lucide-react";

const loadTypes = [
  "Full Load – General Cargo",
  "Textile Bales",
  "Construction Material",
  "Industrial Equipment",
  "Factory Shifting",
  "Agricultural Produce",
  "Other",
];

const tamilNaduCities = [
  "Coimbatore",
  "Chennai",
  "Tiruppur",
  "Erode",
  "Salem",
  "Madurai",
  "Trichy",
  "Karur",
  "Namakkal",
  "Dindigul",
  "Pollachi",
  "Palani",
  "Hosur",
  "Vellore",
  "Thanjavur",
  "Other",
];

interface FormData {
  pickupLocation: string;
  deliveryLocation: string;
  loadType: string;
  name: string;
  phone: string;
  company: string;
}

const STEPS = ["Route", "Cargo", "Contact"] as const;

export const GetQuoteModal = ({ trigger }: { trigger?: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>({
    pickupLocation: "",
    deliveryLocation: "",
    loadType: "",
    name: "",
    phone: "",
    company: "",
  });

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const canNext = () => {
    if (step === 0) return form.pickupLocation && form.deliveryLocation;
    if (step === 1) return form.loadType;
    if (step === 2) return form.name.trim() && form.phone.trim().length >= 10;
    return false;
  };

  const handleWhatsApp = () => {
    const message = `🚛 *STA Corporate Solutions – Transport Quote Request*

Hello! I'd like to get a quote for transportation.

📍 *Pickup:* ${form.pickupLocation}
📍 *Delivery:* ${form.deliveryLocation}
📦 *Load Type:* ${form.loadType}

👤 *Name:* ${form.name}
📞 *Phone:* ${form.phone}${form.company ? `\n🏢 *Company:* ${form.company}` : ""}

Please share the best rate and availability. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919443033055?text=${encoded}`, "_blank");
    setOpen(false);
    setStep(0);
    setForm({ pickupLocation: "", deliveryLocation: "", loadType: "", name: "", phone: "", company: "" });
  };

  const resetAndClose = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setStep(0);
    }
  };

  return (
    <Dialog open={open} onOpenChange={resetAndClose}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" className="gap-2 text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Truck className="h-5 w-5" />
            Get a Quote
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">Get a Transport Quote</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill in the details and connect with us on WhatsApp
          </DialogDescription>
        </DialogHeader>

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 py-2">
          {STEPS.map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  i < step
                    ? "bg-accent text-accent-foreground"
                    : i === step
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {i < step ? <CheckCircle className="h-4 w-4" /> : i + 1}
              </div>
              <span className="text-xs text-muted-foreground hidden sm:inline">{label}</span>
              {i < STEPS.length - 1 && <div className="w-8 h-px bg-border" />}
            </div>
          ))}
        </div>

        {/* Step 0: Route */}
        {step === 0 && (
          <div className="space-y-4 py-2">
            <Badge variant="outline" className="gap-1">
              <MapPin className="h-3 w-3" /> Pickup & Delivery
            </Badge>
            <div className="space-y-2">
              <Label htmlFor="pickup">Pickup Location *</Label>
              <Select value={form.pickupLocation} onValueChange={(v) => update("pickupLocation", v)}>
                <SelectTrigger id="pickup">
                  <SelectValue placeholder="Select pickup city" />
                </SelectTrigger>
                <SelectContent>
                  {tamilNaduCities.map((city) => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="delivery">Delivery Location *</Label>
              <Select value={form.deliveryLocation} onValueChange={(v) => update("deliveryLocation", v)}>
                <SelectTrigger id="delivery">
                  <SelectValue placeholder="Select delivery city" />
                </SelectTrigger>
                <SelectContent>
                  {tamilNaduCities.map((city) => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Step 1: Cargo */}
        {step === 1 && (
          <div className="space-y-4 py-2">
            <Badge variant="outline" className="gap-1">
              <Package className="h-3 w-3" /> Cargo Details
            </Badge>
            <div className="space-y-2">
              <Label htmlFor="loadType">Load Type *</Label>
              <Select value={form.loadType} onValueChange={(v) => update("loadType", v)}>
                <SelectTrigger id="loadType">
                  <SelectValue placeholder="Select load type" />
                </SelectTrigger>
                <SelectContent>
                  {loadTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Step 2: Contact */}
        {step === 2 && (
          <div className="space-y-4 py-2">
            <Badge variant="outline" className="gap-1">
              <User className="h-3 w-3" /> Your Details
            </Badge>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value.replace(/[^0-9+\s-]/g, ""))}
                maxLength={15}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company (Optional)</Label>
              <Input
                id="company"
                placeholder="Company name"
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                maxLength={100}
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between pt-2">
          <Button
            variant="ghost"
            onClick={() => setStep((s) => s - 1)}
            disabled={step === 0}
            className="gap-1"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>

          {step < 2 ? (
            <Button onClick={() => setStep((s) => s + 1)} disabled={!canNext()} className="gap-1">
              Next <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleWhatsApp}
              disabled={!canNext()}
              className="gap-2 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Send via WhatsApp
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
