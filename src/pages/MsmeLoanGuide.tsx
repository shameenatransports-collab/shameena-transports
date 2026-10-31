import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { ServiceFAQ } from "@/components/seo/ServiceFAQ";
import { canonical } from "@/lib/seo/slugs";
import { Phone, MessageCircle, ArrowUpRight, CheckCircle } from "lucide-react";

const LAST_REVIEWED = "October 2026";

const mudra = [
  { name: "Shishu", limit: "Up to ₹50,000", fit: "Very small or new businesses" },
  { name: "Kishor", limit: "₹50,001 to ₹5 lakh", fit: "Businesses that are already running and need to grow" },
  { name: "Tarun", limit: "₹5 lakh to ₹10 lakh", fit: "Established small businesses" },
  { name: "Tarun Plus", limit: "₹10 lakh to ₹20 lakh", fit: "Businesses that repaid an earlier Tarun loan" },
];

const steps = [
  { t: "Register on Udyam", d: "Udyam registration is free on the government portal and is commonly asked for by banks and scheme providers." },
  { t: "Choose the right loan type", d: "Working capital, term loan (machinery or vehicles), or a government-backed scheme such as Mudra. The purpose decides the product." },
  { t: "Prepare your records", d: "Business proof, KYC, bank statements, GST and income-tax returns where applicable, and a short note on what the money is for." },
  { t: "Approach the bank or NBFC", d: "STA helps you organise documents and understand the process. The bank or relevant authority decides eligibility, interest rate, limit and sanction." },
  { t: "Track and repay on time", d: "Timely repayment builds credit history and can open higher limits later, including the Tarun Plus category." },
];

const faqs = [
  { question: "Is STA a lender?", answer: "No. STA provides assistance with documentation and process for businesses. Loan approval, interest rate and limit are decided by the bank, NBFC or relevant authority." },
  { question: "Can individuals get a personal loan through STA?", answer: "No. Our loan assistance is for businesses, industries and companies, not personal loans." },
  { question: "Do Mudra loans need collateral?", answer: "Mudra loans up to the scheme limit are generally offered without collateral, but the lender's own checks and terms still apply. Confirm with your bank." },
  { question: "How long does approval take?", answer: "It varies by lender, loan type and how complete your documents are. We do not promise approval or timelines." },
  { question: "Where can I get help in Coimbatore?", answer: "Call or WhatsApp STA Corporate Solutions at +91 94430 33055 or visit our Podanur, Coimbatore office." },
];

export default function MsmeLoanGuide() {
  const url = canonical("/msme-loan-guide");
  const title = "MSME & Mudra Loan Guide for Coimbatore & South India | STA Corporate Solutions";
  const description = "Plain-language guide to MSME and Mudra business loans: Udyam registration, Shishu, Kishor, Tarun and Tarun Plus limits, documents and next steps. Business loans only; STA is not a lender.";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MSME & Mudra Loan Guide for South India",
    description,
    dateModified: "2026-10-31",
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "STA Corporate Solutions" },
    publisher: { "@type": "Organization", name: "STA Corporate Solutions", url: canonical("/") },
  };
  const wa = "https://wa.me/919443033055?text=" + encodeURIComponent("Hi, I need help with a business (MSME/Mudra) loan.");
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Layout>
        <main>
          <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-24">
            <div className="container mx-auto px-4 max-w-4xl">
              <span className="text-eyebrow text-secondary">Financial Services · Guide</span>
              <h1 className="text-display-xl text-primary-foreground mt-4 mb-6">MSME &amp; Mudra business loan guide</h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                What the main business-loan routes are, which documents banks usually ask for, and how STA Corporate Solutions can help you prepare. For businesses only; STA is not a lender.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+919443033055"><Button size="lg" className="gap-2"><Phone className="h-4 w-4" /> +91 94430 33055</Button></a>
                <a href={wa} target="_blank" rel="noopener noreferrer"><Button size="lg" variant="outline" className="gap-2 text-primary-foreground border-primary-foreground/30"><MessageCircle className="h-4 w-4" /> WhatsApp enquiry</Button></a>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 max-w-4xl space-y-14">
              <div>
                <h2 className="text-display-lg text-foreground mb-4">Mudra loan categories</h2>
                <p className="text-muted-foreground mb-6">Under the Pradhan Mantri Mudra Yojana, business loans are grouped by size. Limits below were last reviewed in {LAST_REVIEWED}; schemes change, so confirm current terms with your bank.</p>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted"><tr><th className="p-3">Category</th><th className="p-3">Loan size</th><th className="p-3">Typically for</th></tr></thead>
                    <tbody>
                      {mudra.map((m) => (
                        <tr key={m.name} className="border-t border-border"><td className="p-3 font-semibold">{m.name}</td><td className="p-3">{m.limit}</td><td className="p-3 text-muted-foreground">{m.fit}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-display-lg text-foreground mb-6">Steps to apply</h2>
                <ol className="space-y-4">
                  {steps.map((s, i) => (
                    <li key={s.t} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold">{i + 1}</span>
                      <div><h3 className="font-semibold text-foreground">{s.t}</h3><p className="text-muted-foreground text-sm mt-1">{s.d}</p></div>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-display-lg text-foreground mb-4">Where STA helps</h2>
                <ul className="space-y-2">
                  {["Choosing between working-capital, term-loan and scheme routes", "Organising KYC, financial and business documents", "GST, income-tax and accounts records through our Legal & CA practice", "Preparing a clear note on how the loan will be used"].map((x) => (
                    <li key={x} className="flex gap-2 text-muted-foreground"><CheckCircle className="h-5 w-5 text-secondary shrink-0" />{x}</li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-6">STA does not guarantee approval, interest rates or timelines. This guide is general information, not financial or legal advice.</p>
                <Link to="/financial-services" className="inline-flex items-center gap-1 text-primary font-medium mt-4">All financial services <ArrowUpRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </section>

          <ServiceFAQ faqs={faqs} />
          <CTASection />
        </main>
      </Layout>
    </>
  );
}
