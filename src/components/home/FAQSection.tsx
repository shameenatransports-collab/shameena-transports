import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you provide lorry service in Tamil Nadu?",
    answer: "We provide lorry transport services across all major cities in Tamil Nadu including Coimbatore, Tiruppur, Erode, Salem, Chennai, Madurai, Trichy, Karur, and all districts. We also offer interstate transport to Karnataka, Kerala, and Andhra Pradesh.",
  },
  {
    question: "What types of goods can you transport?",
    answer: "We transport all types of commercial goods including textile bales, industrial machinery, construction materials (cement, steel, sand), agricultural products, FMCG goods, furniture, and factory equipment. We do not transport hazardous or illegal materials.",
  },
  {
    question: "Do you offer GPS tracking for shipments?",
    answer: "Yes, all our lorries are equipped with GPS tracking. You can get real-time updates on your shipment location through WhatsApp or a direct call to our support team.",
  },
  {
    question: "What is the difference between full load and part load?",
    answer: "Full load means you book the entire lorry exclusively for your cargo. Part load is a shared transport option where multiple clients' goods are transported together, making it more economical for smaller shipments.",
  },
  {
    question: "How do I book a lorry for transport?",
    answer: "Simply call us at +91 90477 21209 or WhatsApp us with your pickup location, destination, type of goods, and approximate weight. We'll provide you with a quote and arrange the transport.",
  },
  {
    question: "What are your operating hours?",
    answer: "Our booking office operates from 8 AM to 10 PM. However, our transport services and customer support are available 24/7 for ongoing shipments.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Common questions about our lorry transport services in Tamil Nadu
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
