import { Link } from "react-router-dom";
import { Truck, Package, Factory, Building2, Warehouse, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Truck,
    title: "Full Load Transport",
    description: "Complete truck booking for large shipments across Tamil Nadu.",
  },
  {
    icon: Package,
    title: "Part Load Transport",
    description: "Cost-effective shared transport for smaller cargo requirements.",
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
            Our Transport Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive logistics solutions for all your goods transport needs in Tamil Nadu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
