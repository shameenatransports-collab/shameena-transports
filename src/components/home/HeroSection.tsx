import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pb-28 sm:pb-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16 sm:pt-0">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-accent text-accent-foreground text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6 animate-fade-in">
            🚚 Trusted by 500+ Businesses in Tamil Nadu
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-4 sm:mb-6">
            No.1 Lorry Service in Coimbatore & Tamil Nadu
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl">
            Fast, Safe & Reliable Goods Transport. Full Load, Part Load, Interstate – We deliver your cargo on time, every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="tel:+919047721209" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2 text-sm sm:text-base font-semibold">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                Call: +91 90477 21209
              </Button>
            </a>
            <a
              href="https://wa.me/919047721209?text=Hi%2C%20I%20need%20lorry%20transport%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2 text-sm sm:text-base font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>

          <div className="mt-6 sm:mt-8 hidden sm:flex items-center gap-2 text-primary-foreground/80">
            <Link to="/services" className="flex items-center gap-1 hover:text-secondary transition-colors">
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-20">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-accent">15+</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">Years Exp.</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl md:text-3xl font-bold text-accent">50+</div>
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
      </div>
    </section>
  );
}
