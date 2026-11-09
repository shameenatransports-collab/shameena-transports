import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const faqs = [
  {
    question: "What services does STA Corporate Solutions provide in Coimbatore?",
    answer:
      "STA Corporate Solutions is a lorry transport business based in Podanur, Coimbatore. We offer goods transport (Full Load), trucks on hire (12/14-wheeler and 40 ft open trucks, daily, monthly or contract basis), loaders and packers services, textile and yarn cargo, construction material, factory and warehouse shifting, heavy machinery and containerised cargo across Coimbatore district.",
  },
  {
    question: "What is Full Load transport and when should I use it?",
    answer:
      "Full Load means booking an entire lorry exclusively for your cargo. You get a dedicated truck, complete control over timing, and direct delivery with no intermediate stops. Best for large shipments (5-25 tons) or when you need dedicated transport coordination. We cover Coimbatore and the district towns around it.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Our headquarters is in Podanur, Coimbatore. We serve businesses in Coimbatore district, including Pollachi, Mettupalayam, Sulur, Annur, Madukkarai and Kinathukadavu. For transport, route coverage is confirmed based on requirement.",
  },
  {
    question: "How do I get started with STA Corporate Solutions?",
    answer:
      "Simply call us at +91 94430 33055 or WhatsApp us. Share the pickup location, destination, cargo type and weight, and preferred date. We'll confirm the vehicle and give you a quote.",
  },
  {
    question: "Why choose STA Corporate Solutions?",
    answer:
      "With 44+ years of experience, business service knowledge, and our own fleet of 12+ lorries, we focus on transparent assistance and practical pricing for eligible requirements.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export function FAQSection() {
  return (
    <section className="py-section bg-muted/40">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-eyebrow text-primary mb-5">Questions</p>
            <h2 className="text-display-xl text-foreground mb-6">
              Frequently asked.
              <br />
              <span className="text-muted-foreground/70">Plainly answered.</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-2xl border border-border/60 px-6 data-[state=open]:shadow-md transition-shadow duration-500 ease-apple"
                >
                  <AccordionTrigger className="text-left text-[15px] font-semibold text-foreground hover:no-underline tracking-tight py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-[14.5px]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </div>
    </section>
  );
}
