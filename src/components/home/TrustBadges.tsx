import { Factory, HardHat, Shirt, Package, Warehouse, Building2 } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/scroll-reveal";

const industries = [
  { icon: Shirt, name: "Textile", description: "Tiruppur · Coimbatore" },
  { icon: Factory, name: "Manufacturing", description: "Industrial Cargo" },
  { icon: HardHat, name: "Construction", description: "Building Materials" },
  { icon: Package, name: "FMCG & Retail", description: "Consumer Goods" },
  { icon: Warehouse, name: "Warehousing", description: "Storage Solutions" },
  { icon: Building2, name: "Corporate", description: "Office Relocation" },
];

export function TrustBadges() {
  return (
    <section className="py-20 md:py-24 bg-background border-b border-border/40" aria-label="Industries we serve">
      <div className="container mx-auto px-4">
        <ScrollReveal stagger>
          <ScrollRevealItem>
            <p className="text-eyebrow text-muted-foreground/70 text-center mb-12">
              Trusted by industries across Tamil Nadu
            </p>
          </ScrollRevealItem>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-10">
            {industries.map((industry) => (
              <ScrollRevealItem key={industry.name}>
                <article className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-foreground/[0.04] flex items-center justify-center mb-3 transition-all duration-500 ease-apple group-hover:bg-primary/10 group-hover:scale-105">
                    <industry.icon className="h-5 w-5 md:h-5.5 md:w-5.5 text-foreground/70 group-hover:text-primary transition-colors" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-[13px] md:text-sm font-medium text-foreground tracking-tight">
                    {industry.name}
                  </h3>
                  <p className="text-[11px] md:text-xs text-muted-foreground/70 mt-0.5 hidden sm:block">
                    {industry.description}
                  </p>
                </article>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
