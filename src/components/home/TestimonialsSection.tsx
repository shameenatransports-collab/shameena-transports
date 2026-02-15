import { useState } from "react";
import { Star, Quote, Truck, Banknote, Scale, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All", icon: null },
  { id: "transportation", label: "Transportation", icon: Truck },
  { id: "financial", label: "Financial Services", icon: Banknote },
  { id: "legal", label: "Legal Services", icon: Scale },
  { id: "dubai", label: "Overseas Real Estate", icon: Building2 },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Tiruppur Textile Exports",
    category: "transportation",
    rating: 5,
    text: "We have been using STA Corporate Solutions for 10+ years. Their reliability and on-time delivery for our textile exports is unmatched. Highly recommended!",
  },
  {
    name: "Suresh Constructions",
    company: "Salem Building Projects",
    category: "transportation",
    rating: 5,
    text: "Best transport service for construction materials. They handle cement, steel, and heavy equipment with great care. Professional team!",
  },
  {
    name: "Meenakshi Traders",
    company: "Coimbatore FMCG",
    category: "transportation",
    rating: 5,
    text: "Reliable partner for our daily distribution needs. Their return load service saves us significant costs. 24/7 availability is a huge plus.",
  },
  {
    name: "Anand Prakash",
    company: "AP Engineering Works",
    category: "financial",
    rating: 5,
    text: "STA helped us secure an MSME loan within 3 weeks. Their knowledge of government schemes saved us lakhs in interest. Truly the lowest commission!",
  },
  {
    name: "Kavitha Sundaram",
    company: "KS Garments",
    category: "financial",
    rating: 5,
    text: "Got our Mudra loan processed smoothly. They handled all the paperwork and bank coordination. We could focus on our business while they managed the finances.",
  },
  {
    name: "Vijay Textiles",
    company: "Erode Textiles Cluster",
    category: "financial",
    rating: 5,
    text: "Outstanding service for our working capital loan. STA connected us with the right bank and got us the best interest rates. Highly professional!",
  },
  {
    name: "Dr. Priya Natarajan",
    company: "Individual Client, Coimbatore",
    category: "legal",
    rating: 5,
    text: "STA handled our property documentation flawlessly. Their legal team was thorough and ensured every detail was perfect. Great experience from start to finish.",
  },
  {
    name: "Karthik & Associates",
    company: "Salem Manufacturing",
    category: "legal",
    rating: 5,
    text: "We used STA for company formation and GST registration. The process was seamless and completed much faster than we expected. Very knowledgeable team!",
  },
  {
    name: "Murugan Foods Pvt Ltd",
    company: "Madurai Food Processing",
    category: "legal",
    rating: 5,
    text: "Their litigation support for our trademark case was exceptional. Professional, timely, and they kept us informed at every step. Won the case in our favour!",
  },
  {
    name: "Arjun Menon",
    company: "NRI Investor, Kerala",
    category: "dubai",
    rating: 5,
    text: "Purchased a 2-bedroom apartment in Dubai Marina through STA. They handled everything from property selection to Golden Visa documentation. Seamless experience!",
  },
  {
    name: "Sanjay & Deepa Patel",
    company: "Business Owners, Mumbai",
    category: "dubai",
    rating: 5,
    text: "STA helped us invest in a villa in Portugal and guided us through the Golden Visa process. Now we have EU residency! Their global reach is impressive.",
  },
  {
    name: "Ramesh Iyer",
    company: "IT Professional, Bengaluru",
    category: "dubai",
    rating: 5,
    text: "Invested in a London apartment through STA for rental income and my children's education. They managed the UK legal process and visa guidance perfectly.",
  },
  {
    name: "Priya Krishnan",
    company: "Doctor, Coimbatore",
    category: "dubai",
    rating: 5,
    text: "Bought a holiday home in Greece through STA. The Golden Visa process was handled end-to-end. Now my family has EU residency and a beautiful vacation property!",
  },
];

export function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? testimonials
    : testimonials.filter((t) => t.category === activeCategory);

  const categoryLabel = categories.find((c) => c.id === activeCategory)?.label;

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <header className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by 500+ businesses across Tamil Nadu & beyond since 1982
          </p>
        </header>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === cat.id
                  ? "bg-accent text-accent-foreground shadow-md"
                  : "bg-card text-muted-foreground border border-border hover:border-accent hover:text-foreground"
              )}
            >
              {cat.icon && <cat.icon className="h-4 w-4" />}
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((testimonial, index) => (
            <Card key={`${testimonial.name}-${index}`} className="border-border hover:border-accent transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <Badge variant="secondary" className="text-xs capitalize">
                    {categories.find((c) => c.id === testimonial.category)?.label}
                  </Badge>
                </div>
                <div className="relative mb-4">
                  <Quote className="h-8 w-8 text-accent/20 absolute -top-2 -left-2" />
                  <p className="text-foreground relative z-10 pl-4 text-sm leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
                <div className="border-t border-border pt-4 mt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}