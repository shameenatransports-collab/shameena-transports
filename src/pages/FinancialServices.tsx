import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { 
  Phone, 
  CheckCircle,
  Building2,
  Factory,
  Landmark,
  TrendingUp,
  Banknote,
  IndianRupee,
  Star
} from "lucide-react";
import { ServiceFAQ } from "@/components/seo/ServiceFAQ";

const financialFaqs = [
  { question: "Does STA give loans or personal loans?", answer: "No. STA is not a lender and does not offer personal loans. We assist startups and deep-tech companies with funding scheme, grant and bank-credit applications and documentation. Funding decisions rest with the funder, bank or authority." },
  { question: "Who is this service for?", answer: "Startups and deep-tech companies, and other technology-led businesses, in Coimbatore and Tiruppur districts. It is for businesses only, not individuals." },
  { question: "Which schemes can STA help me apply for?", answer: "Examples include DPIIT startup recognition, the Startup India Seed Fund Scheme, Fund of Funds for Startups, the Credit Guarantee Scheme for Startups, StartupTN programmes such as TANSEED, and technology-grant programmes such as TDB, NIDHI and BIRAC where you are eligible. Scheme terms change, so we confirm current criteria with you before you apply." },
  { question: "Can STA guarantee that my application will be approved?", answer: "No. Eligibility, sanction, amounts and timelines are decided by the funder or authority. We help you prepare a complete, well-organised application." },
  { question: "Where is the Financial Services practice available?", answer: "For businesses in Coimbatore and Tiruppur districts, Tamil Nadu, coordinated from our Podanur, Coimbatore office. Consultations are by phone, WhatsApp or in-office." },
];

const governmentSchemes = [
  {
    icon: TrendingUp,
    title: "Startup India",
    description: "Central programmes for recognised startups",
    schemes: [
      "DPIIT startup recognition",
      "Startup India Seed Fund Scheme",
      "Fund of Funds for Startups",
      "Credit Guarantee Scheme for Startups",
      "Atal Innovation Mission linkages"
    ]
  },
  {
    icon: Landmark,
    title: "Tamil Nadu Startup Programmes",
    description: "State-level support for early-stage companies",
    schemes: [
      "StartupTN programmes",
      "TANSEED seed funding rounds",
      "Incubator and accelerator linkages",
      "State scheme application documentation"
    ]
  },
  {
    icon: Factory,
    title: "Deep-Tech & Research Funding",
    description: "Grant and credit routes for technology-led ventures",
    schemes: [
      "Technology Development Board support",
      "DST NIDHI programmes",
      "BIRAC programmes for biotechnology ventures",
      "Research and prototype grant applications",
      "Long-gestation project funding guidance"
    ]
  }
];

const privateBankLoans = [
  {
    icon: Building2,
    title: "Bank Credit for Startups",
    description: "Working capital and term-loan documentation for startups and technology companies",
    features: [
      "Working capital applications",
      "Term loans for equipment and prototyping",
      "Credit-guarantee-backed options where eligible",
      "Financial projections and project reports"
    ],
  },
  {
    icon: Banknote,
    title: "Fundraising Readiness",
    description: "Preparation for angel and venture investor conversations",
    features: [
      "Financial model review",
      "Data-room checklist",
      "Cap-table and compliance clean-up",
      "Investor-document support"
    ],
  }
];

const whyChooseUs = [
  "Assistance for startups and deep-tech companies only; businesses, not individuals",
  "Scheme shortlisting and eligibility guidance",
  "Complete documentation and project-report support",
  "Legal & CA support from the same team for registration, GST and accounts",
  "Application follow-up as per funder or department process",
  "Backed by STA Corporate Solutions, with transport operations in Coimbatore since 1982"
];

const FinancialServices = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sta-corporate.in" },
      { "@type": "ListItem", "position": 2, "name": "Financial Services", "item": "https://sta-corporate.in/financial-services" }
    ]
  };

  const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://sta-corporate.in/financial-services#service",
    "name": "STA Corporate Solutions Startup & Deep-Tech Funding Assistance",
    "description": "Funding assistance for startups and deep-tech companies in Coimbatore and Tiruppur: Startup India recognition, seed and grant schemes, bank credit and fundraising readiness. Businesses only; not a lender; no personal loans.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "STA Corporate Solutions",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No 10/135-G, Gurusamy Pillai St Extn, Podanur",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641023",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Coimbatore" },
      { "@type": "City", "name": "Tiruppur" },
      { "@type": "AdministrativeArea", "name": "Coimbatore District" },
      { "@type": "AdministrativeArea", "name": "Tiruppur District" }
    ],
    "serviceType": [
      "Startup India Recognition",
      "Seed Funding & Grants",
      "Deep-Tech Funding Assistance",
      "Credit Guarantee & Bank Credit Documentation",
      "Fundraising Readiness"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Startup & Deep-Tech Funding Assistance | Coimbatore & Tiruppur | STA</title>
        <meta name="description" content="Funding assistance for startups and deep-tech companies in Coimbatore and Tiruppur: Startup India recognition, seed and grant schemes, bank credit documentation and fundraising readiness. Businesses only; STA is not a lender." />
        <meta name="keywords" content="startup funding coimbatore, deep tech funding tamil nadu, startup india recognition, seed funding tiruppur, startup grants tamil nadu, startup funding assistance" />
        <link rel="canonical" href="https://sta-corporate.in/financial-services" />
        <meta property="og:title" content="Startup & Deep-Tech Funding Assistance | STA Corporate Solutions" />
        <meta property="og:description" content="Startup India, seed funding, grants and bank-credit documentation for startups and deep-tech companies in Coimbatore and Tiruppur." />
        <meta property="og:url" content="https://sta-corporate.in/financial-services" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(financialServiceSchema)}</script>
      </Helmet>
      <Layout>
        <main>
          {/* Hero Section */}
          <section className="relative isolate min-h-[88svh] flex items-center overflow-hidden bg-primary">
            <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary to-primary/90" />
            <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--secondary)/0.25),_transparent_55%)]" />
            <div aria-hidden className="absolute inset-0 -z-10 opacity-[0.06]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div className="container mx-auto px-4 pt-32 pb-44 md:pt-40 md:pb-52 relative">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background text-[11px] font-bold tracking-[0.18em] uppercase text-primary shadow-xl ring-1 ring-primary-foreground/40 mb-8">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  New in 2025 · Startups &amp; Deep Tech
                </div>
                <h1 className="text-display-2xl text-primary-foreground mb-6">
                  Funding for
                  <br />
                  <span className="bg-gradient-to-r from-secondary via-secondary to-primary-foreground bg-clip-text text-transparent">
                    startups &amp; deep tech.
                  </span>
                </h1>
                <p className="text-headline text-primary-foreground/85 max-w-2xl mb-10">
                  Launched mid-2025 as part of STA Corporate Solutions. Funding assistance for startups and deep-tech companies in Coimbatore and Tiruppur: Startup India recognition, seed and grant schemes, bank credit and fundraising readiness. Businesses only; STA is not a lender.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+919443033055">
                    <Button size="lg" className="rounded-full px-7 h-12 gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-[14px] font-medium shadow-xl ease-apple">
                      <Phone className="h-4 w-4" />
                      +91 94430 33055
                    </Button>
                  </a>
                  <a href="https://wa.me/919443033055?text=Hi%2C%20I%20need%20startup%20funding%20assistance" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="rounded-full px-7 h-12 gap-2 glass-subtle border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 text-[14px] font-medium ease-apple">
                      <IndianRupee className="h-4 w-4" />
                      Funding Enquiry
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-10 pb-6">
              <div className="container mx-auto px-4">
                <div className="glass rounded-2xl p-5 md:p-7">
                  <div className="grid grid-cols-3 divide-x divide-border/40">
                    {[
                      { value: "Startup", label: "Funding Assistance" },
                      { value: "Deep Tech", label: "Technology Ventures" },
                      { value: "Govt", label: "Scheme Support" },
                    ].map((stat, i) => (
                      <div key={i} className="px-4 md:px-6 first:pl-0">
                        <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-muted-foreground mb-2">{stat.label}</div>
                        <div className="text-2xl md:text-3xl font-bold text-foreground tabular-nums tracking-tight">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Government Schemes */}
          <AnimatedSection className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <Landmark className="h-4 w-4 mr-2" />
                  Government Schemes
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Schemes & Programmes
                </h2>
                <p className="text-lg text-muted-foreground">
                  Central and Tamil Nadu programmes for startups and technology companies. Scheme terms, caps and application windows change; confirm on the official portal.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {governmentSchemes.map((scheme, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-border hover:border-accent overflow-hidden">
                    <CardHeader className="pb-4 bg-gradient-to-br from-accent/5 to-transparent">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                          <scheme.icon className="h-8 w-8 text-accent-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-foreground">{scheme.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{scheme.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {scheme.schemes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-foreground">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Credit & Investor Readiness */}
          <AnimatedSection className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <Banknote className="h-4 w-4 mr-2" />
                  Credit & Investors
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Credit & Investor Readiness
                </h2>
                <p className="text-lg text-muted-foreground">
                  Documentation and preparation support. STA is not a lender and does not guarantee funding.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {privateBankLoans.map((loan, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-border hover:border-accent overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                          <loan.icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl text-foreground">{loan.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{loan.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {loan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Why Choose Us */}
          <AnimatedSection className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <Badge variant="outline" className="mb-4">
                    <Star className="h-4 w-4 mr-2" />
                    Why Us
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Why STA Corporate Solutions for startup funding?
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="group flex items-center gap-4 p-6 bg-muted rounded-xl hover:shadow-lg hover:bg-accent/5 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                        <CheckCircle className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <span className="text-lg text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <section className="py-10 bg-muted/40">
            <div className="container mx-auto px-4 text-center">
              <a href="/startup-funding-guide" className="text-primary font-medium underline">Read our startup &amp; deep-tech funding guide</a>
            </div>
          </section>
          <ServiceFAQ
            eyebrow="Financial Services FAQ"
            heading="Startup and deep-tech funding,"
            subheading="the practical questions."
            faqs={financialFaqs}
            speakableId="faq-financial"
          />

          <CTASection />
        </main>
      </Layout>
    </>
  );
};

export default FinancialServices;
