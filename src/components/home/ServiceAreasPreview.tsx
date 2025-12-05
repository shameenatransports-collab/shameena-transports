import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const areas = [
  "Coimbatore",
  "Tiruppur",
  "Erode",
  "Salem",
  "Karur",
  "Chennai",
  "Madurai",
  "Trichy",
  "Dindigul",
  "Pollachi",
];

export function ServiceAreasPreview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serving All Over Tamil Nadu
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              From Coimbatore to Chennai, Salem to Madurai – we provide reliable lorry transport services across every major city and town in Tamil Nadu.
            </p>
            <Link to="/service-areas">
              <Button variant="default" size="lg" className="gap-2">
                View All Service Areas <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {areas.map((area, index) => (
              <Link
                key={index}
                to={`/service-areas#${area.toLowerCase()}`}
                className="flex items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-accent hover:shadow-md transition-all"
              >
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="font-medium text-foreground">{area}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
