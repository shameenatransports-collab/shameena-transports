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
      "STA Corporate Solutions provides four practices from our Coimbatore headquarters: (1) Transportation — Full Load and Return Load lorry services across Tamil Nadu, (2) Financial Services — business loan assistance, MSME, Mudra and government funding scheme guidance, (3) Legal & CA — legal documentation, company registration, GST, income tax, accounts and compliance support, and (4) Education — job consulting and degree-transfer guidance, across Tamil Nadu and South India.",
  },
  {
    question: "What is Full Load transport and when should I use it?",
    answer:
      "Full Load means booking an entire lorry exclusively for your cargo. You get a dedicated truck, complete control over timing, and direct delivery with no intermediate stops. Best for large shipments (5-25 tons) or when you need dedicated transport coordination. We cover Coimbatore, Tiruppur, Erode, Salem, Chennai, Madurai, Trichy, and other Tamil Nadu cities.",
  },
  {
    question: "What government loan schemes can STA help with?",
    answer:
      "We assist eligible businesses, industries, and companies with MSME, Mudra, PMEGP, Stand-Up India, CGTMSE, Startup India, and other government funding scheme documentation. We do not handle personal loans.",
  },
  {
    question: "What types of legal & CA services are available?",
    answer:
      "We offer legal documentation and consultation support (property documentation, company formation, contracts, disputes, licensing, labour law, intellectual property) together with CA-led professional services such as GST, income-tax and accounts compliance, across Tamil Nadu.",
  },
  {
    question: "What areas in Tamil Nadu do you serve?",
    answer:
      "Our headquarters is in Podanur, Coimbatore. We serve major Tamil Nadu cities including Tiruppur, Erode, Salem, Chennai, Madurai, Trichy, Karur, Namakkal, Dindigul, Thanjavur, and Vellore. For transport, route coverage is confirmed based on requirement.",
  },
  {
    question: "How do I get started with STA Corporate Solutions?",
    answer:
      "Simply call us at +91 94430 33055 or WhatsApp us. For transport — share pickup location, destination, cargo type, and weight. For loans — share your business details and loan requirement. For legal & CA services — describe your legal need. We'll provide a free consultation and competitive quote.",
  },
  {
    question: "Why choose STA Corporate Solutions?",
    answer:
      "With 43+ years of experience, business service knowledge, and our own fleet of 12+ lorries, we focus on transparent assistance and practical pricing for eligible requirements.",
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
