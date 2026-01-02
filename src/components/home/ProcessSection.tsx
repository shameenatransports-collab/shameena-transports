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
    <section className="py-16 md:py-24 bg-muted" aria-label="How our service works">
      <div className="container mx-auto px-4">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Simple 4-step process to get your goods transported safely
          </p>
        </header>

        <ol className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {steps.map((item, index) => (
            <li key={index} className="relative text-center">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 sm:top-12 left-[60%] w-[80%] h-0.5 bg-border" aria-hidden="true" />
              )}

              <article className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto rounded-full bg-primary flex items-center justify-center mb-3 sm:mb-4">
                  <item.icon className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-primary-foreground" aria-hidden="true" />
                </div>
                <span className="absolute top-0 right-1/2 translate-x-8 sm:translate-x-10 md:translate-x-12 -translate-y-1 sm:-translate-y-2 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-accent text-accent-foreground text-xs sm:text-sm font-bold flex items-center justify-center" aria-hidden="true">
                  {item.step}
                </span>
              </article>

              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground mb-1 sm:mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
