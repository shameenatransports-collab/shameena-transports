import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  /** Heading shown above the accordion */
  heading?: string;
  subheading?: string;
  /** Eyebrow tag above heading */
  eyebrow?: string;
  faqs: FAQ[];
  /** Stable id used by Speakable schema to lift answers into voice / AI assistants */
  speakableId?: string;
}

/**
 * Reusable per-vertical FAQ block.
 * Emits FAQPage + Speakable JSON-LD so Google's voice surfaces and LLM crawlers
 * (GPTBot, PerplexityBot, ClaudeBot) can extract answer-first content verbatim.
 */
export function ServiceFAQ({
  heading = "Frequently asked",
  subheading = "Plain answers, no jargon.",
  eyebrow = "FAQ",
  faqs,
  speakableId = "faq-answers",
}: ServiceFAQProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [`#${speakableId} [data-speakable]`],
    },
  };

  return (
    <section className="py-section bg-muted/40" id={speakableId}>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-eyebrow text-primary mb-5">{eyebrow}</p>
            <h2 className="text-display-xl text-foreground mb-4">
              {heading}
              <br />
              <span className="text-muted-foreground/70">{subheading}</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card rounded-2xl border border-border/60 px-6 data-[state=open]:shadow-md transition-shadow duration-500 ease-apple"
                >
                  <AccordionTrigger className="text-left text-[15px] font-semibold text-foreground hover:no-underline tracking-tight py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-muted-foreground leading-relaxed pb-5 text-[14.5px]"
                    data-speakable="true"
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
