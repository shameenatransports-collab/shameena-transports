import { Link } from "react-router-dom";
import { Truck, Banknote, Scale, GraduationCap, Building2, ArrowUpRight } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/scroll-reveal";
import serviceTransportation from "@/assets/service-transportation.jpg";
import serviceFinancial from "@/assets/service-financial.jpg";
import serviceLegal from "@/assets/service-legal.jpg";
import serviceEdu from "@/assets/service-edu.jpg";

const verticals = [
  {
    num: "01",
    icon: Truck,
    eyebrow: "Logistics",
    title: "Transportation",
    headline: "Move what matters, when it matters.",
    description:
      "Full Load lorry transport across South India. 43 years. Our own fleet of 12+ vehicles. Routes spanning Coimbatore, Tiruppur, Chennai, Salem, Madurai, Bengaluru, Kochi.",
    features: ["Full Load Transport", "Return Loads", "Factory Shifting", "Route Corridors"],
    href: "/transportation",
    badge: "Since 1982",
    image: serviceTransportation,
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
    image: serviceFinancial,
  },
  {
    num: "03",
    icon: Scale,
    eyebrow: "Counsel",
    title: "Legal Services",
    headline: "Confidence at every signature.",
    description:
      "Property, company, litigation, IP and compliance documentation support for businesses and individuals across South India.",
    features: ["Property Docs", "Company Formation", "Litigation", "Registrations"],
    href: "/legal-services",
    badge: "Five States",
    image: serviceLegal,
  },
  {
    num: "04",
    icon: GraduationCap,
    eyebrow: "Pathways",
    title: "Edu Consultancy",
    headline: "Academic mobility, localized.",
    description:
      "Localized pathways for degree transfer, credit migration, bachelor-completion and academic-mobility candidates across South India.",
    features: ["Degree Transfer", "Credit Mapping", "Study Abroad", "Adult Learners"],
    href: "/edu-consultancy",
    badge: "1,000+ Pathways",
    image: serviceEdu,
  },
];


export function ServicesPreview() {
  return (
    <section className="relative bg-background py-section">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
            <p className="text-eyebrow text-primary mb-5">Four Practices · One Partner</p>
            <h2 className="text-display-xl text-foreground mb-6">
              Complete business solutions, refined over four decades.
            </h2>
            <p className="text-headline text-muted-foreground max-w-2xl mx-auto">
              Four integrated practices serving individuals and enterprises across Tamil Nadu, Karnataka, Telangana, Andhra Pradesh and Kerala — with transparent, practical assistance.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-20 md:space-y-28 max-w-6xl mx-auto">
          {verticals.map((v, idx) => (
            <ScrollReveal key={v.num} stagger>
              <article
                className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Imagery card */}
                <ScrollRevealItem className="lg:col-span-6">
                  <div className="group relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-border/60 shadow-xl">
                    <img
                      src={v.image}
                      alt={`${v.title} — ${v.headline}`}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-apple group-hover:scale-[1.04]"
                    />
                    {/* Gradient veil */}
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-primary/0"
                    />
                    {/* Number — top left */}
                    <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                      <span className="text-5xl md:text-6xl font-bold text-primary-foreground/90 tabular-nums leading-none tracking-tight">
                        {v.num}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] uppercase rounded-full bg-primary-foreground/10 backdrop-blur-md text-primary-foreground ring-1 ring-primary-foreground/25">
                        <span className="h-1 w-1 rounded-full bg-secondary" />
                        {v.badge}
                      </span>
                    </div>
                    {/* Icon + title — bottom */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                      <div>
                        <div className="w-12 h-12 rounded-2xl bg-secondary/95 flex items-center justify-center mb-4 shadow-lg">
                          <v.icon className="h-5 w-5 text-secondary-foreground" strokeWidth={2} />
                        </div>
                        <p className="text-eyebrow text-secondary mb-1">{v.eyebrow}</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight">
                          {v.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </ScrollRevealItem>

                {/* Content */}
                <ScrollRevealItem className="lg:col-span-6">
                  <h4 className="text-display-md text-foreground mb-6">{v.headline}</h4>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                    {v.description}
                  </p>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10 max-w-md">
                    {v.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5 text-[13.5px] text-foreground/80">
                        <span className="h-1 w-1 rounded-full bg-secondary flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <Link
                    to={v.href}
                    className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-[13.5px] font-semibold tracking-tight hover:bg-primary transition-colors duration-500 ease-apple"
                  >
                    Explore {v.title}
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
