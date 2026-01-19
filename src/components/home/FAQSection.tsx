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
    question: "What are the benefits of Full Load transport?",
    answer: "Full Load offers complete control over your shipment - dedicated truck, flexible pickup times, direct delivery without intermediate stops, and faster transit. Your cargo doesn't share space with others, reducing handling and potential damage.",
  },
  {
    question: "What areas do you provide Full Load service in Tamil Nadu?",
    answer: "We provide Full Load transport across all major cities in Tamil Nadu including Coimbatore, Tiruppur, Erode, Salem, Chennai, Madurai, Trichy, Karur, and all districts. We also serve inter-state routes.",
  },
  {
    question: "What types of goods can you transport?",
    answer: "We transport all types of commercial goods including textile bales, industrial machinery, construction materials (cement, steel, sand), agricultural products, FMCG goods, and factory equipment.",
  },
  {
    question: "How do I book a Full Load lorry?",
    answer: "Call us at +91 94430 33055 or WhatsApp with your pickup location, destination, type of goods, and approximate weight. We'll provide a competitive quote and arrange a dedicated truck for your shipment.",
  },
  {
    question: "Is your transport service available 24/7?",
    answer: "Yes, STA Corporate Solutions operates 24 hours a day, 7 days a week. You can book Full Load transport anytime by calling +91 94430 33055 or contacting us via WhatsApp.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Full Load Transport FAQs
          </h2>
          <p className="text-muted-foreground text-lg">
            Common questions about our Full Load transport services in Tamil Nadu
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
