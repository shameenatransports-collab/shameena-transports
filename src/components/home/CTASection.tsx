import { Phone, MessageCircle, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-accent relative overflow-hidden" aria-label="Contact us">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2">
          <Truck className="w-48 h-48 md:w-64 md:h-64" />
        </div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2">
          <Truck className="w-48 h-48 md:w-64 md:h-64 scale-x-[-1]" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent-foreground mb-4">
          Need Reliable Lorry Transport in Tamil Nadu?
        </h2>
        <p className="text-accent-foreground/90 text-lg mb-4 max-w-2xl mx-auto">
          Get instant quotes for your goods transport needs. Available 24/7 for bookings!
        </p>
        <p className="text-accent-foreground/80 text-sm mb-8 max-w-xl mx-auto">
          Serving Coimbatore, Chennai, Tiruppur, Salem, Madurai & all Tamil Nadu districts
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+919443033055" aria-label="Call us at +91 94430 33055">
            <Button size="lg" variant="default" className="w-full sm:w-auto gap-2 text-base font-semibold">
              <Phone className="h-5 w-5" />
              Call: +91 94430 33055
            </Button>
          </a>
          <a
            href="https://wa.me/919443033055?text=Hi%2C%20I%20need%20a%20quote%20for%20lorry%20transport"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get a quote on WhatsApp"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto gap-2 text-base font-semibold border-accent-foreground/30 text-accent-foreground bg-transparent hover:bg-accent-foreground/10 hover:text-accent-foreground"
            >
              <MessageCircle className="h-5 w-5" />
              Get Quote on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
