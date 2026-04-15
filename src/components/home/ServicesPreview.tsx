import { Link } from "react-router-dom";
import { Truck, Banknote, Scale, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const verticals = [
  {
    icon: Truck,
    title: "Transportation",
    description: "Full Load lorry transport across Tamil Nadu. 43+ years of trusted service with our own fleet of 12+ lorries. Coimbatore, Tiruppur, Chennai, Salem, Madurai routes.",
    features: ["Full Load Transport", "Return Loads", "Factory Shifting", "24/7 Service"],
    href: "/transportation",
    badge: "Since 1982"
  },
  {
    icon: Banknote,
    title: "Financial Services",
    description: "Government scheme loans — MSME, Mudra, PMAY, Startup India. Private bank loans — business, home, vehicle, personal. Lowest processing fees in Coimbatore.",
    features: ["MSME Loans", "Mudra Scheme", "Home Loans", "Business Loans"],
    href: "/financial-services",
    badge: "Govt Schemes"
  },
  {
    icon: Scale,
    title: "Legal Services",
    description: "Comprehensive legal solutions for individuals, businesses, and corporates. Property documentation, company registration, litigation, IP — across all 38 districts of Tamil Nadu.",
    features: ["Property Docs", "Company Formation", "Litigation", "Contracts"],
    href: "/legal-services",
    badge: "All 38 Districts"
  }
];

export function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">Our Business Verticals</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Business Solutions in Coimbatore & Tamil Nadu
          </h2>
          <p className="text-muted-foreground text-lg">
            Three integrated business verticals serving individuals and enterprises with the lowest commission rates in the Indian market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {verticals.map((vertical, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent overflow-hidden"
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all">
                    <vertical.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {vertical.badge}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {vertical.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {vertical.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {vertical.features.map((feature, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground">
                      {feature}
                    </span>
                  ))}
                </div>

                <Link to={vertical.href} className="inline-flex items-center text-sm font-medium text-accent hover:underline">
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/contact">
            <Button variant="default" size="lg" className="gap-2">
              Get Started Today <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
