import { Truck, Users, MapPin, Clock } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "43+",
    label: "Years of Service",
    description: "Since 1982",
  },
  {
    icon: Truck,
    value: "10,000+",
    label: "Successful Deliveries",
    description: "And counting",
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
    description: "Trusted partners",
  },
  {
    icon: MapPin,
    value: "50+",
    label: "Service Locations",
    description: "Across Tamil Nadu",
  },
];

export function StatsSection() {
  return (
    <section className="py-12 md:py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <article key={index} className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full bg-primary-foreground/10 flex items-center justify-center mb-3">
                <stat.icon className="h-7 w-7 md:h-8 md:w-8 text-secondary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-primary-foreground">
                {stat.label}
              </div>
              <div className="text-xs text-primary-foreground/70 mt-1">
                {stat.description}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}