import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight, Truck, Package, Calculator, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BackgroundPicture } from "@/components/ui/picture";
import heroBg from "@/assets/hero-bg.jpg";

const verticals = [
  {
    icon: Truck,
    title: "Transportation",
    description: "Full Load lorry services across Tamil Nadu since 1982",
    href: "/transportation",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
  },
  {
    icon: Package,
    title: "Trading",
    description: "Iron & steel materials - TMT, rods, coils, beams",
    href: "/trading",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400"
  },
  {
    icon: Calculator,
    title: "Financial Services",
    description: "GST, taxation, accounting for all businesses",
    href: "/financial-services",
    color: "bg-green-500/10 text-green-600 dark:text-green-400"
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Land, construction & properties in Coimbatore",
    href: "/real-estate",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
  }
];

export function HeroSection() {
  return (
    <BackgroundPicture
      src={heroBg}
      alt="STA Corporate Solutions"
      className="min-h-[95vh] flex items-center"
      overlayClassName="bg-gradient-to-b from-primary/95 via-primary/90 to-primary/95"
      priority
    >
      <section className="relative z-10 w-full py-16 md:py-24" aria-label="Hero section">
        <div className="container mx-auto px-4">
          {/* Main Hero Content */}
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-6 animate-fade-in">
              Lowest Commission in Indian Market
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              STA Corporate Solutions
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Your trusted partner for <strong>Transportation</strong>, <strong>Trading</strong>, <strong>Financial Services</strong> & <strong>Real Estate</strong>. 
              Serving businesses since 1982.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919443033055" aria-label="Call us">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2 font-semibold">
                  <Phone className="h-5 w-5" />
                  +91 94430 33055
                </Button>
              </a>
              <a href="https://wa.me/919443033055?text=Hi%2C%20I%20need%20information%20about%20STA%20Corporate%20Solutions%20services" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 font-semibold border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>

          {/* Business Verticals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {verticals.map((vertical, index) => (
              <Link key={index} to={vertical.href} className="group">
                <Card className="h-full bg-card/95 backdrop-blur-sm border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${vertical.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <vertical.icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {vertical.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-3">
                      {vertical.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="h-4 w-4 ml-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </BackgroundPicture>
  );
}
