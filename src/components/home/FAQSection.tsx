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
      "STA Corporate Solutions provides three core services from our Coimbatore headquarters: (1) Transportation — Full Load and Return Load lorry services across Tamil Nadu, (2) Financial Services — Government scheme loans (MSME, Mudra, PMAY) and private bank loans, and (3) Legal Services — property documentation, company registration, litigation, and IP services across all 38 districts of Tamil Nadu.",
  },
  {
    question: "What is Full Load transport and when should I use it?",
    answer:
      "Full Load means booking an entire lorry exclusively for your cargo. You get a dedicated truck, complete control over timing, and faster delivery with no intermediate stops. Best for large shipments (5-25 tons) or when you need guaranteed delivery times. We cover Coimbatore, Tiruppur, Erode, Salem, Chennai, Madurai, Trichy, and all Tamil Nadu cities.",
  },
  {
    question: "What government loan schemes can STA help with?",
    answer:
      "We assist with all major government schemes including PMEGP, Mudra Loans (Shishu, Kishore, Tarun), Stand-Up India, CGTMSE, PMAY housing loans, Startup India Seed Fund, Kisan Credit Card, and special category schemes for women entrepreneurs, SC/ST, and minorities. We handle complete documentation and bank coordination.",
  },
  {
    question: "What types of legal services are available?",
    answer:
      "We offer comprehensive legal services: Personal — property documentation, family law, civil matters, vehicle & insurance claims. Business — company formation, compliance, contracts, disputes. Corporate — industrial licensing, labour law, intellectual property, mergers & acquisitions. We have presence in all 38 districts of Tamil Nadu.",
  },
  {
    question: "What areas in Tamil Nadu do you serve?",
    answer:
      "Our headquarters is in Peelamedu, Coimbatore. We serve all major cities including Tiruppur, Erode, Salem, Chennai, Madurai, Trichy, Karur, Namakkal, Dindigul, Thanjavur, Vellore, and all 38 districts of Tamil Nadu. For transport, we also cover inter-state routes.",
  },
  {
    question: "How do I get started with STA Corporate Solutions?",
    answer:
      "Simply call us at +91 94430 33055 or WhatsApp us. For transport — share pickup location, destination, cargo type, and weight. For loans — share your business details and loan requirement. For legal services — describe your legal need. We'll provide a free consultation and competitive quote.",
  },
  {
    question: "Why does STA have the lowest commission rates?",
    answer:
      "With 43+ years of experience and strong relationships with banks, legal partners, and our own fleet of 12+ lorries, we operate with minimal overhead. Our direct bank tie-ups, in-house legal team, and owned fleet allow us to pass on savings to our customers — that's been our principle since 1982.",
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
