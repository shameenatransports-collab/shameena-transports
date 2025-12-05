import { Shield, Clock, MapPin, Headphones, Award, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Fully insured cargo with damage protection coverage",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "98% on-time delivery record across Tamil Nadu",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Real-time tracking for all shipments",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer assistance",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    description: "Trusted by 500+ businesses since 2005",
  },
  {
    icon: TrendingUp,
    title: "Competitive Rates",
    description: "Best-in-market pricing with no hidden charges",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Shameena Transports?
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            We are committed to providing the best lorry service in Coimbatore and all of Tamil Nadu
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-primary-foreground/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
