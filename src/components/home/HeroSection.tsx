import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundPicture } from "@/components/ui/picture";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  "Return Loads at Cheaper Rates",
  "24/7 Service Available",
  "Fully Insured Transport",
];

export function HeroSection() {
  return (
    <BackgroundPicture
      src={heroBg}
      alt="Shameena Transports Fleet"
      className="min-h-[90vh] flex items-center pb-32 sm:pb-28 md:pb-24"
      overlayClassName="bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"
      priority
    >
      <section className="relative z-10 w-full" aria-label="Hero section">
        <div className="container mx-auto px-4 pt-16 sm:pt-0">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-accent text-accent-foreground text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6 animate-fade-in">
              🚚 Since 1982 – 43 Years of Heritage in Logistics
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-4 sm:mb-6">
              Most Reliable Lorry Service in Coimbatore & Tamil Nadu
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-4 sm:mb-6 max-w-2xl">
              Customer satisfaction is our priority. Fast, Safe & Reliable Goods Transport across Tamil Nadu. Full Load, Part Load – We deliver on time, every time.
            </p>

            {/* Highlights */}
            <ul className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-2 text-primary-foreground/90 text-sm sm:text-base">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-secondary flex-shrink-0" />
                  <span className="font-medium">{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 mb-8 sm:mb-12 md:mb-16">
              <a href="tel:+919443033055" className="w-full sm:w-auto" aria-label="Call us at +91 94430 33055">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2 text-sm sm:text-base font-semibold">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  Call: +91 94430 33055
                </Button>
              </a>
              <a href="https://wa.me/919443033055?text=Hi%2C%20I%20need%20lorry%20transport%20service" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto" aria-label="Contact us on WhatsApp">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 text-sm sm:text-base font-semibold border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>

            <nav className="mt-6 sm:mt-8 hidden sm:flex items-center gap-2 text-primary-foreground/80" aria-label="Quick links">
              <Link to="/services" className="flex items-center gap-1 hover:text-secondary transition-colors">
                Explore Our Services <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </div>
        </div>

        {/* Stats Bar */}
        <aside className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-20 pointer-events-none">
          <div className="container mx-auto px-4 py-2 sm:py-3 md:py-4">
            <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-accent">43+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Years Heritage</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-accent">12+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Lorries</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-accent">10K+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Deliveries</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-accent">24/7</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </BackgroundPicture>
  );
}
