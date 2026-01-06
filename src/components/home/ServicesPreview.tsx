import { Link } from "react-router-dom";
import { Truck, Package, Factory, Building2, Warehouse, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Truck,
    title: "Full Load Transport",
    description: "Dedicated truck for your exclusive cargo across Tamil Nadu. Complete control, faster delivery.",
    isPrimary: true,
  },
  {
    icon: Package,
    title: "Return Load Transport",
    description: "Cost-effective transport when trucks return on available routes. Subject to route availability.",
    isPrimary: true,
    badge: "Route Availability",
  },
  {
    icon: Factory,
    title: "Textile & Industrial Cargo",
    description: "Specialized handling for textile bales and industrial equipment.",
  },
  {
    icon: Building2,
    title: "Construction Material",
    description: "Heavy-duty transport for sand, cement, steel, and building materials.",
  },
  {
    icon: Warehouse,
    title: "Factory Shifting",
    description: "End-to-end relocation services for factories and warehouses.",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Full Load & Return Load Transport Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Tamil Nadu's trusted logistics partner since 1982. Full Load for dedicated transport, Return Load for cost savings on available routes.
          </p>
        </div>

        {/* Primary Services - Full Load & Return Load */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {services.filter(s => s.isPrimary).map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 border-accent/30 hover:border-accent bg-gradient-to-br from-accent/5 to-transparent"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  {service.badge && (
                    <Badge variant="secondary" className="gap-1 text-xs">
                      <Clock className="h-3 w-3" />
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secondary Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.filter(s => !s.isPrimary).map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <service.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="default" size="lg" className="gap-2">
              View All Services <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
