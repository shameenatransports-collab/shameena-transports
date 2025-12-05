import { Phone, FileText, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Contact Us",
    description: "Call or WhatsApp us with your transport requirements",
  },
  {
    icon: FileText,
    step: "02",
    title: "Get Quote",
    description: "Receive competitive pricing based on your cargo details",
  },
  {
    icon: Truck,
    step: "03",
    title: "We Pickup",
    description: "Our lorry arrives at your location for loading",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Safe Delivery",
    description: "Your goods delivered safely to the destination",
  },
];

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Simple 4-step process to get your goods transported safely
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative text-center">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border" />
              )}

              <div className="relative">
                <div className="w-24 h-24 mx-auto rounded-full bg-primary flex items-center justify-center mb-4">
                  <item.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <span className="absolute top-0 right-1/2 translate-x-12 -translate-y-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                  {item.step}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
