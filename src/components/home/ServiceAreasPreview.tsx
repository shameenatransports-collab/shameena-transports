import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const areas = [
  "Coimbatore",
  "Pollachi",
  "Mettupalayam",
  "Sulur",
  "Annur",
  "Madukkarai",
  "Kinathukadavu",
];

export function ServiceAreasPreview() {
  return (
    <section className="py-16 md:py-24 bg-background" aria-label="Service areas">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <header>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Coimbatore District
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              From Coimbatore to the district towns around them, we provide Full Load lorry transport for businesses.
            </p>
            <Link to="/service-areas">
              <Button variant="default" size="lg" className="gap-2">
                View All Service Areas <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </header>

          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-3" aria-label="Service area links">
            {areas.map((area, index) => (
              <Link
                key={index}
                to={`/service-areas#${area.toLowerCase()}`}
                className="flex items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-accent hover:shadow-md transition-all"
              >
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                <span className="font-medium text-foreground">{area}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
