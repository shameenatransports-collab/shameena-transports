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
      "STA Corporate Solutions provides three practices for businesses from our Coimbatore headquarters: (1) Transportation — Full Load and Return Load lorry services in Coimbatore and Tiruppur districts, (2) Financial Services — funding assistance for startups and deep-tech companies (Startup India recognition, seed funding and grants, bank-credit documentation), and (3) Legal & CA — legal documentation, company registration, GST, income tax, accounts and compliance support.",
  },
  {
    question: "What is Full Load transport and when should I use it?",
    answer:
      "Full Load means booking an entire lorry exclusively for your cargo. You get a dedicated truck, complete control over timing, and direct delivery with no intermediate stops. Best for large shipments (5-25 tons) or when you need dedicated transport coordination. We cover Coimbatore, Tiruppur and the district towns around them.",
  },
  {
    question: "What funding can STA help startups and deep-tech companies with?",
    answer:
      "We assist startups and deep-tech companies with Startup India (DPIIT) recognition, seed funding and grant applications, bank-credit documentation and fundraising readiness. STA is not a lender and does not handle personal loans.",
  },
  {
    question: "What types of legal & CA services are available?",
    answer:
      "We offer legal documentation and consultation support (property documentation, company formation, contracts, disputes, licensing, labour law, intellectual property) together with CA-led professional services such as GST, income-tax and accounts compliance, in Coimbatore and Tiruppur.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Our headquarters is in Podanur, Coimbatore. We serve businesses in Coimbatore and Tiruppur districts, including Pollachi, Mettupalayam, Sulur, Avinashi, Palladam, Udumalpet, Dharapuram and Kangeyam. For transport, route coverage is confirmed based on requirement.",
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
