import { Link } from "react-router-dom";
import { Truck, Banknote, Scale, ArrowUpRight } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/scroll-reveal";

const verticals = [
  {
    num: "01",
    icon: Truck,
    eyebrow: "Logistics",
    title: "Transportation",
    headline: "Move what matters, when it matters.",
    description:
      "Full Load lorry transport across Tamil Nadu. 43 years. Our own fleet of 12+ vehicles. Routes spanning Coimbatore, Tiruppur, Chennai, Salem, Madurai.",
    features: ["Full Load Transport", "Return Loads", "Factory Shifting", "Route Support"],
    href: "/transportation",
    badge: "Since 1982",
  },
  {
    num: "02",
    icon: Banknote,
    eyebrow: "Capital",
    title: "Financial Services",
    headline: "From government schemes to bank loans.",
    description:
      "MSME, Mudra, Startup India, business, industrial and government funding scheme assistance. Strictly not for personal loans.",
    features: ["MSME Loans", "Mudra Scheme", "Govt Funding", "Business Loans"],
    href: "/financial-services",
    badge: "Govt Schemes",
  },
  {
    num: "03",
    icon: Scale,
    eyebrow: "Counsel",
    title: "Legal Services",
    headline: "Confidence at every signature.",
    description:
      "Property, company, litigation, IP and compliance documentation support for businesses and individuals across Tamil Nadu.",
    features: ["Property Docs", "Company Formation", "Litigation", "Contracts"],
    href: "/legal-services",
    badge: "Tamil Nadu",
  },
];

export function ServicesPreview() {
  return (
    <section className="relative bg-background py-section">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
            <p className="text-eyebrow text-primary mb-5">Three Verticals · One Partner</p>
            <h2 className="text-display-xl text-foreground mb-6">
              Complete business solutions, refined over four decades.
            </h2>
            <p className="text-headline text-muted-foreground max-w-2xl mx-auto">
              Three integrated practices serving individuals and enterprises across Tamil Nadu with
              transparent, practical assistance.
            </p>
          </div>
        </ScrollReveal>

        {/* Cinematic vertical-by-vertical reveal */}
        <div className="space-y-16 md:space-y-20 max-w-6xl mx-auto">
          {verticals.map((v, idx) => (
            <ScrollReveal key={v.num} stagger>
              <article
                className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Number + visual */}
                <ScrollRevealItem className="lg:col-span-4">
                  <div className="relative aspect-square max-w-[280px] mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-muted via-background to-muted/50 border border-border/50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <v.icon
                        className="w-20 h-20 text-primary/15"
                        strokeWidth={1}
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="text-4xl font-bold text-primary/20 tabular-nums leading-none">
                        {v.num}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-2.5 py-1 text-[9px] font-semibold tracking-[0.16em] uppercase rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                        {v.badge}
                      </span>
                    </div>
                  </div>
                </ScrollRevealItem>

                {/* Content */}
                <ScrollRevealItem className="lg:col-span-8">
                  <p className="text-eyebrow text-secondary mb-4">{v.eyebrow}</p>
                  <h3 className="text-display-md text-foreground mb-2">{v.headline}</h3>
                  <p className="text-sm font-medium text-muted-foreground/80 mb-5 tracking-tight">
                    {v.title}
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                    {v.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {v.features.map((f) => (
                      <span
                        key={f}
                        className="text-[12px] px-3 py-1.5 bg-foreground/[0.04] rounded-full text-foreground/70 tracking-tight"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={v.href}
                    className="group inline-flex items-center gap-2 text-[14px] font-semibold text-foreground hover:text-primary transition-colors duration-500 ease-apple"
                  >
                    Learn more about {v.title}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-apple group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </ScrollRevealItem>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
