import { Factory, HardHat, Shirt, Package, Warehouse, Building2 } from "lucide-react";

const industries = [
  {
    icon: Shirt,
    name: "Textile Industry",
    description: "Tiruppur & Coimbatore",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Industrial Cargo",
  },
  {
    icon: HardHat,
    name: "Construction",
    description: "Building Materials",
  },
  {
    icon: Package,
    name: "FMCG & Retail",
    description: "Consumer Goods",
  },
  {
    icon: Warehouse,
    name: "Warehousing",
    description: "Storage Solutions",
  },
  {
    icon: Building2,
    name: "Corporate",
    description: "Office Relocation",
  },
];

export function TrustBadges() {
  return (
    <section className="py-8 md:py-12 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
          Trusted by Industries Across Tamil Nadu
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <span className="text-xs md:text-sm font-medium text-foreground">
                {industry.name}
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground hidden sm:block">
                {industry.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
