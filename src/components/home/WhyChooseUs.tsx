import { Shield, Clock, Headphones, Award, MapPin, Banknote } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/scroll-reveal";

const features = [
  { icon: Shield, title: "Fully insured", description: "Damage protection coverage on every shipment, every route." },
  { icon: Clock, title: "On-time, on principle", description: "98% on-time delivery — measured, not marketed." },
  { icon: Banknote, title: "Lowest commission", description: "Best-in-market pricing for transport, loans, and legal services." },
  { icon: Award, title: "43+ years", description: "Trusted by 500+ businesses in Coimbatore & Tamil Nadu since 1982." },
  { icon: MapPin, title: "Pan Tamil Nadu", description: "All 38 districts — Coimbatore, Tiruppur, Chennai, Salem, Madurai." },
  { icon: Headphones, title: "24/7 support", description: "Always reachable for bookings, loan queries, legal consultations." },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-section bg-primary text-primary-foreground overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: "hsl(var(--primary-glow))" }}
      />

      <div className="container mx-auto px-4 relative">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <p className="text-eyebrow text-secondary mb-5">Why STA</p>
            <h2 className="text-display-xl mb-6">
              Four decades of trust,
              <br />
              <span className="text-primary-foreground/60">measured in deliveries.</span>
            </h2>
            <p className="text-headline text-primary-foreground/70 max-w-2xl mx-auto">
              The lowest commission rates in the Indian market with 43 years of proven excellence.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/10 rounded-3xl overflow-hidden border border-primary-foreground/10">
            {features.map((f) => (
              <ScrollRevealItem key={f.title}>
                <div className="bg-primary p-8 md:p-10 h-full transition-colors duration-500 ease-apple hover:bg-primary-foreground/[0.04]">
                  <div className="w-11 h-11 rounded-xl bg-secondary/15 flex items-center justify-center mb-5">
                    <f.icon className="h-5 w-5 text-secondary" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight mb-2">{f.title}</h3>
                  <p className="text-sm text-primary-foreground/65 leading-relaxed">{f.description}</p>
                </div>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
