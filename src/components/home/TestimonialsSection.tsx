import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Tiruppur Textile Exports",
    industry: "Textile Industry",
    rating: 5,
    text: "We have been using Shameena Transports for 10+ years. Their reliability and on-time delivery for our textile exports is unmatched. Highly recommended!",
  },
  {
    name: "Suresh Constructions",
    company: "Salem Building Projects",
    industry: "Construction",
    rating: 5,
    text: "Best transport service for construction materials. They handle cement, steel, and heavy equipment with great care. Professional team!",
  },
  {
    name: "Meenakshi Traders",
    company: "Coimbatore FMCG",
    industry: "FMCG & Retail",
    rating: 5,
    text: "Reliable partner for our daily distribution needs. Their return load service saves us significant costs. 24/7 availability is a huge plus.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by 500+ businesses across Tamil Nadu since 1982
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:border-accent transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <div className="relative mb-4">
                  <Quote className="h-8 w-8 text-accent/20 absolute -top-2 -left-2" />
                  <p className="text-foreground relative z-10 pl-4">
                    {testimonial.text}
                  </p>
                </div>
                <div className="border-t border-border pt-4 mt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  <div className="text-xs text-accent font-medium mt-1">{testimonial.industry}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}