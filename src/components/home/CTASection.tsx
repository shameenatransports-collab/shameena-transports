import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CTASection() {
  return (
    <section
      className="relative py-section overflow-hidden bg-foreground text-background"
      aria-label="Contact us"
    >
      {/* Ambient gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary-glow)/0.25),_transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full opacity-15 blur-3xl"
        style={{ background: "hsl(var(--secondary))" }}
      />

      <div className="container mx-auto px-4 relative">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-eyebrow text-secondary mb-6">Ready when you are</p>
            <h2 className="text-display-2xl mb-8">
              Let's start
              <br />
              the conversation.
            </h2>
            <p className="text-headline text-background/70 max-w-2xl mx-auto mb-12">
              Transport, business loans, or legal support — call or WhatsApp for a guided enquiry
              across Coimbatore and all of Tamil Nadu.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+919443033055" aria-label="Call us at +91 94430 33055">
                <Button
                  size="lg"
                  className="rounded-full px-7 h-12 gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium text-[14px] shadow-xl ease-apple"
                >
                  <Phone className="h-4 w-4" />
                  +91 94430 33055
                </Button>
              </a>
              <a
                href="https://wa.me/919443033055?text=Hi%2C%20I%20need%20a%20quote%20for%20STA%20Corporate%20Solutions%20services"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get a quote on WhatsApp"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-7 h-12 gap-2 glass-subtle border-background/25 text-background hover:bg-background/10 font-medium text-[14px] ease-apple"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </Button>
              </a>
            </div>

            <p className="text-xs text-background/50 mt-10 tracking-tight">
              Coimbatore · Tiruppur · Chennai · Salem · Madurai · Erode · Trichy · Tamil Nadu
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
