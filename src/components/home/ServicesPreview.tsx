import { Link } from "react-router-dom";
import { Truck, Repeat, Container, Factory, Wrench, Shirt, ArrowUpRight } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/scroll-reveal";
import serviceTransportation from "@/assets/service-transportation.jpg";

const services = [
  { icon: Truck, title: "Full Load Transport", desc: "A dedicated truck for your cargo, door to door across Coimbatore and Tiruppur districts.", href: "/transportation/services/full-load" },
  { icon: Repeat, title: "Return Loads", desc: "Lower freight on trucks returning along your route, subject to route availability.", href: "/transportation/services/return-load" },
  { icon: Shirt, title: "Textile & Yarn Cargo", desc: "Careful bale, carton and yarn movement along the Tiruppur–Coimbatore corridor.", href: "/transportation/services/textile-cargo" },
  { icon: Factory, title: "Factory & Warehouse Shifting", desc: "Planned relocation of plants and warehouses with multi-vehicle coordination.", href: "/transportation/services/factory-shifting" },
  { icon: Wrench, title: "Heavy Machinery", desc: "Low-bed and ODC movement for presses, CNCs, generators and transformers.", href: "/transportation/services/heavy-machinery" },
  { icon: Container, title: "Containerised Cargo", desc: "20ft and 40ft container movement linked to ICD/CFS and port-bound cargo.", href: "/transportation/services/containerized" },
];

export function ServicesPreview() {
  return (
    <section className="relative bg-background py-section">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <p className="text-eyebrow text-primary mb-5">Transportation · Since 1982</p>
            <h2 className="text-display-xl text-foreground mb-6">Move what matters, when it matters.</h2>
            <p className="text-headline text-muted-foreground max-w-2xl mx-auto">
              Full Load lorry transport from our own 12+ vehicle fleet, serving businesses in Coimbatore and Tiruppur districts.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
          <ScrollRevealItem className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-border/60 shadow-xl">
              <img
                src={serviceTransportation}
                alt="STA Corporate Solutions lorry transport fleet"
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-primary/0" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-eyebrow text-secondary mb-1">Logistics</p>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight">Transportation</h3>
              </div>
            </div>
          </ScrollRevealItem>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="group rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-500 ease-apple"
              >
                <div className="w-11 h-11 rounded-xl bg-secondary/90 flex items-center justify-center mb-4">
                  <s.icon className="h-5 w-5 text-secondary-foreground" strokeWidth={2} />
                </div>
                <h4 className="text-base font-semibold text-foreground mb-2 flex items-center justify-between gap-2">
                  {s.title}
                  <ArrowUpRight className="h-4 w-4 opacity-50 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/transportation"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-foreground text-background text-[13.5px] font-semibold tracking-tight hover:bg-primary transition-colors duration-500 ease-apple"
          >
            Explore all transport services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
