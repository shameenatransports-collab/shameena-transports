import { Truck, Banknote, Scale, Clock } from "lucide-react";
import { ScrollReveal, ScrollRevealItem } from "@/components/ui/scroll-reveal";

const stats = [
  {
    icon: Clock,
    value: "43+",
    label: "Years in transport",
    description: "STA Transport since 1982",
  },
  {
    icon: Truck,
    value: "12+",
    label: "Fleet vehicles",
    description: "Trailers & lorries",
  },
  {
    icon: Banknote,
    value: "5",
    label: "Integrated practices",
    description: "Four new verticals since mid-2025",
  },
  {
    icon: Scale,
    value: "5",
    label: "South India states",
    description: "TN · KA · TS · AP · KL",
  },
];

export function StatsSection() {
  return (
    <section className="relative py-20 md:py-24 bg-primary text-primary-foreground overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary-glow)/0.22),_transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: "hsl(var(--secondary))" }}
      />

      <div className="container mx-auto px-4 relative">
        <ScrollReveal stagger>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-x divide-primary-foreground/10 md:divide-y-0 border border-primary-foreground/10 rounded-3xl overflow-hidden">
            {stats.map((stat) => (
              <ScrollRevealItem key={stat.label}>
                <article className="p-7 md:p-9 h-full flex flex-col items-start text-left transition-colors duration-500 ease-apple hover:bg-primary-foreground/[0.04]">
                  <div className="w-11 h-11 rounded-xl bg-secondary/15 flex items-center justify-center mb-6">
                    <stat.icon className="h-5 w-5 text-secondary" strokeWidth={2} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2 tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold tracking-tight mb-1">{stat.label}</div>
                  <div className="text-xs text-primary-foreground/60">{stat.description}</div>
                </article>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
