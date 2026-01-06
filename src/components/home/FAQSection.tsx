import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Full Load transport and when should I use it?",
    answer: "Full Load means booking an entire lorry exclusively for your cargo. You get a dedicated truck, complete control over timing, and faster delivery with no intermediate stops. Best for large shipments (5-25 tons) or when you need guaranteed delivery times.",
  },
  {
    question: "What is Return Load and how can it save me money?",
    answer: "Return Load transport is available when our trucks are returning from a delivery on specific routes. Since the truck is already heading back, we offer significantly cheaper rates - often 30-40% less than full load. Contact us to check availability for your route.",
  },
  {
    question: "How do I check if Return Load is available for my route?",
    answer: "Call us at +91 94430 33055 or WhatsApp with your pickup and delivery locations. We'll check current truck schedules and let you know if return load is available. Popular routes include Coimbatore-Chennai, Tiruppur-Bangalore, Salem-Madurai.",
  },
  {
    question: "What areas do you provide lorry service in Tamil Nadu?",
    answer: "We provide Full Load and Return Load services across all major cities in Tamil Nadu including Coimbatore, Tiruppur, Erode, Salem, Chennai, Madurai, Trichy, Karur, and all districts. We also serve inter-state routes.",
  },
  {
    question: "What types of goods can you transport?",
    answer: "We transport all types of commercial goods including textile bales, industrial machinery, construction materials (cement, steel, sand), agricultural products, FMCG goods, and factory equipment. Both Full Load and Return Load available for most cargo types.",
  },
  {
    question: "How do I book a lorry for transport?",
    answer: "Call us at +91 94430 33055 or WhatsApp with your pickup location, destination, type of goods, and approximate weight. We'll provide quotes for both Full Load and Return Load (if available) so you can choose the best option.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Full Load & Return Load FAQs
          </h2>
          <p className="text-muted-foreground text-lg">
            Common questions about our Full Load and Return Load transport services in Tamil Nadu
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
