import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CITY_DATA } from "@/lib/city-data";

const FEATURED: Array<keyof typeof CITY_DATA> = ["coimbatore", "chennai", "tiruppur", "madurai"];

export function CitiesWeServe() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Regional Enquiries
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            City Enquiries Across South India
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Headquartered in Coimbatore. Transportation since 1982; financial, legal and education practices launched mid-2025. Confirm availability for your location.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {FEATURED.map((slug) => {
            const city = CITY_DATA[slug];
            return (
              <Link
                key={slug}
                to={`/${slug}`}
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
                aria-label={`STA Corporate Solutions in ${city.name}`}
              >
                <Card className="h-full transition-opacity duration-300 hover:opacity-90 border-border/60">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        Tamil Nadu
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{city.name}</h3>
                    <p className="text-sm text-muted-foreground/80 mb-3" lang="ta">
                      {city.nameTamil}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                      Transport, business funding assistance, legal documentation and education guidance.
                    </p>
                    <span className="inline-flex items-center text-sm font-semibold text-primary">
                      Explore {city.name}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link to="/service-areas" className="inline-flex items-center gap-2 text-primary font-semibold mb-4">Explore Tamil Nadu, Karnataka, Telangana, Andhra Pradesh & Kerala <ArrowRight className="h-4 w-4 shrink-0" /></Link>
          <p className="text-sm text-muted-foreground">
            Also serving{" "}
            <Link to="/erode" className="text-primary hover:underline font-medium">Erode</Link>,{" "}
            <Link to="/salem" className="text-primary hover:underline font-medium">Salem</Link>,{" "}
            <Link to="/trichy" className="text-primary hover:underline font-medium">Trichy</Link>, and{" "}
            <Link to="/tirunelveli" className="text-primary hover:underline font-medium">Tirunelveli</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
