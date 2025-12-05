import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent-foreground mb-4">
          Need Reliable Lorry Transport in Tamil Nadu?
        </h2>
        <p className="text-accent-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
          Get instant quotes for your goods transport needs. Available 24/7 for bookings!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+919047721209">
            <Button size="lg" variant="default" className="w-full sm:w-auto gap-2 text-base font-semibold">
              <Phone className="h-5 w-5" />
              Call: +91 90477 21209
            </Button>
          </a>
          <a
            href="https://wa.me/919047721209?text=Hi%2C%20I%20need%20a%20quote%20for%20lorry%20transport"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto gap-2 text-base font-semibold border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
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
