import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { ServiceFAQ } from "@/components/seo/ServiceFAQ";
import { canonical } from "@/lib/seo/slugs";
import { Phone, MessageCircle, ArrowUpRight, CheckCircle } from "lucide-react";

const LAST_REVIEWED = "November 2026";

const routes = [
  { name: "DPIIT recognition", what: "Startup India recognition for eligible companies. It is the usual starting point for central startup schemes and some tax benefits.", fit: "Incorporated, early-stage innovative ventures" },
  { name: "Seed funding and grants", what: "Early-stage support such as the Startup India Seed Fund Scheme (through selected incubators) and StartupTN programmes such as TANSEED.", fit: "Idea, prototype and early-revenue stages" },
  { name: "Deep-tech and research grants", what: "Technology-linked programmes such as Technology Development Board support, DST NIDHI and, for biotechnology, BIRAC programmes.", fit: "Research-led ventures with long development cycles" },
  { name: "Bank credit", what: "Working-capital and term loans, including options backed by the Credit Guarantee Scheme for Startups where the lender and company are eligible.", fit: "Companies with a plan, projections and some operating record" },
  { name: "Investor funding", what: "Angel and venture funding. Preparation covers the financial model, cap table, compliance and data room.", fit: "Companies ready for investor conversations" },
];

const steps = [
  { t: "Incorporate and register properly", d: "A private limited company, LLP or similar entity with PAN, GST where applicable and clean books. Our Legal & CA practice can help with registration and compliance." },
  { t: "Apply for DPIIT recognition", d: "If you are eligible, recognition opens doors to central startup schemes. Eligibility conditions apply; confirm them on the official Startup India portal." },
  { t: "Match your stage to a funding route", d: "Idea and prototype stages usually look at grants and seed programmes. Revenue-stage companies can also look at bank credit and investors." },
  { t: "Prepare the documents", d: "Pitch or technical note, financial projections, use-of-funds statement, team details, incorporation and KYC documents, and any IP or research evidence." },
  { t: "Apply and follow up", d: "STA helps you organise and present the application. The funder or authority decides eligibility, amount and timeline." },
];

const faqs = [
  { question: "Is STA a lender or investor?", answer: "No. STA assists startups and deep-tech companies with documentation and the application process. Funding decisions are made by the funder, bank or authority." },
  { question: "Is this for individuals or small shops?", answer: "No. Our funding assistance is for startups and deep-tech companies only, not personal loans or general small-business loans." },
  { question: "What counts as deep tech?", answer: "Generally ventures built on significant scientific or engineering R&D, such as advanced manufacturing, electronics, robotics, AI hardware, materials, biotech and clean-energy technology. Each scheme defines its own eligibility." },
  { question: "Do you guarantee funding?", answer: "No. We do not guarantee approval, amounts or timelines." },
  { question: "Where do you work?", answer: "We assist businesses in Coimbatore and Tiruppur districts from our Podanur, Coimbatore office. Call or WhatsApp +91 94430 33055." },
];

export default function StartupFundingGuide() {
  const url = canonical("/startup-funding-guide");
  const title = "Startup & Deep-Tech Funding Guide for Coimbatore & Tiruppur | STA Corporate Solutions";
  const description = "Plain-language guide to funding routes for startups and deep-tech companies: DPIIT recognition, seed funding and grants, bank credit and investor readiness. For businesses only; STA is not a lender.";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Startup & Deep-Tech Funding Guide for Coimbatore & Tiruppur",
    description,
    dateModified: "2026-11-09",
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "STA Corporate Solutions" },
    publisher: { "@type": "Organization", name: "STA Corporate Solutions", url: canonical("/") },
  };
  const wa = "https://wa.me/919443033055?text=" + encodeURIComponent("Hi, I need help with startup/deep-tech funding.");
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
              <span className="text-eyebrow text-secondary">Financial Services · Startups & Deep Tech</span>
              <h1 className="text-display-xl text-primary-foreground mt-4 mb-6">Startup &amp; deep-tech funding guide</h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                The main funding routes for startups and deep-tech companies, what you usually need to apply, and how STA Corporate Solutions can help you prepare. For businesses only; STA is not a lender.
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
                <h2 className="text-display-lg text-foreground mb-4">Funding routes</h2>
                <p className="text-muted-foreground mb-6">Scheme names below were last reviewed in {LAST_REVIEWED}. Terms, caps and application windows change, so confirm current details on the official portal or with the funder.</p>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted"><tr><th className="p-3">Route</th><th className="p-3">What it is</th><th className="p-3">Typically for</th></tr></thead>
                    <tbody>
                      {routes.map((m) => (
                        <tr key={m.name} className="border-t border-border"><td className="p-3 font-semibold">{m.name}</td><td className="p-3">{m.what}</td><td className="p-3 text-muted-foreground">{m.fit}</td></tr>
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
                  {["Choosing the funding route that fits your stage", "Project reports, projections and supporting documents", "Registration, GST, income-tax and accounts through our Legal & CA practice", "Preparing a clear use-of-funds statement"].map((x) => (
                    <li key={x} className="flex gap-2 text-muted-foreground"><CheckCircle className="h-5 w-5 text-secondary shrink-0" />{x}</li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-6">STA does not guarantee approval, amounts or timelines. This guide is general information, not financial or legal advice.</p>
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
