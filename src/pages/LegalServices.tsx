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
  User,
  Building2,
  Factory,
  FileText,
  Scale,
  Shield,
  Gavel,
  ScrollText,
  Briefcase,
  Car,
  Heart,
  HandshakeIcon,
  Star,
  MapPin
} from "lucide-react";
import { ServiceFAQ } from "@/components/seo/ServiceFAQ";

const legalFaqs = [
  { question: "What legal & CA services does STA cover?", answer: "Property documentation, company registration (Pvt Ltd, LLP, OPC, Partnership), GST registration, trademark and IP filings, contracts, business compliance, labour-law advisory, and civil dispute support across Tamil Nadu and South India." },
  { question: "Does STA represent clients in court?", answer: "STA provides documentation, drafting, and consultation. Court representation is handled by empanelled advocates we coordinate with on your behalf — you get a single point of contact." },
  { question: "Can STA help register a company end-to-end?", answer: "Yes — name reservation, DIN/DSC, MoA/AoA drafting, MCA filing, PAN/TAN, GST registration and post-incorporation compliance setup. Typical turnaround is 10–15 working days subject to MCA processing." },
  { question: "Where is STA Legal & CA Services available?", answer: "Primary delivery across Tamil Nadu (Coimbatore, Chennai, Tiruppur, Erode, Salem, Madurai, Trichy) with extended coverage into Karnataka, Telangana, Andhra Pradesh and Kerala. Operating base: Podanur, Coimbatore." },
  { question: "When did STA start Legal & CA Services?", answer: "STA Corporate Solutions launched its Legal & CA Services practice in mid-2025 as part of the group's expansion into integrated corporate practices. The group's transportation business has operated continuously since 1982." },
];

const personalServices = [
  {
    icon: FileText,
    title: "Property Documentation",
    description: "Complete property legal services",
    features: [
      "Sale Deed Drafting & Registration",
      "Title Verification & Search",
      "Encumbrance Certificate",
      "Property Partition",
      "Gift Deed & Will Preparation"
    ]
  },
  {
    icon: Heart,
    title: "Family Law",
    description: "Personal and family legal matters",
    features: [
      "Marriage Registration",
      "Divorce Proceedings",
      "Child Custody Matters",
      "Maintenance & Alimony",
      "Succession Certificate"
    ]
  },
  {
    icon: ScrollText,
    title: "Civil Matters",
    description: "Individual civil legal services",
    features: [
      "Consumer Complaints",
      "Cheque Bounce Cases",
      "Recovery Proceedings",
      "Defamation Cases",
      "RTI Applications"
    ]
  },
  {
    icon: Car,
    title: "Vehicle & Insurance",
    description: "Motor vehicle legal assistance",
    features: [
      "Motor Accident Claims",
      "Insurance Claims",
      "Vehicle Transfer",
      "Traffic Violations",
      "Registration Issues"
    ]
  }
];

const businessServices = [
  {
    icon: Briefcase,
    title: "CA & Tax Services",
    description: "Chartered accountancy and professional services",
    features: [
      "GST Registration & Returns",
      "Income Tax & ITR Filing",
      "Accounting & Bookkeeping",
      "Audit Support",
      "Tax Planning Advisory"
    ]
  },
  {
    icon: Building2,
    title: "Company Formation",
    description: "Business registration and incorporation",
    features: [
      "Private Limited Company",
      "LLP Registration",
      "Partnership Firm",
      "OPC Registration",
      "Section 8 Company"
    ]
  },
  {
    icon: FileText,
    title: "Business Compliance",
    description: "Regulatory compliance services",
    features: [
      "Annual Filings (ROC)",
      "Statutory Audits",
      "Director KYC",
      "Board Resolutions",
      "Shareholder Agreements"
    ]
  },
  {
    icon: Briefcase,
    title: "Commercial Contracts",
    description: "Business agreement services",
    features: [
      "Vendor Agreements",
      "Service Contracts",
      "Employment Contracts",
      "NDA & Non-Compete",
      "Franchise Agreements"
    ]
  },
  {
    icon: Scale,
    title: "Business Disputes",
    description: "Commercial litigation support",
    features: [
      "Contract Disputes",
      "Partnership Disputes",
      "Arbitration",
      "Debt Recovery",
      "NCLT Matters"
    ]
  }
];

const corporateServices = [
  {
    icon: Factory,
    title: "Industrial Licensing",
    description: "Manufacturing and industrial permits",
    features: [
      "Factory License",
      "Pollution Control Board",
      "Fire Safety NOC",
      "FSSAI License",
      "Drug License"
    ]
  },
  {
    icon: Gavel,
    title: "Labour Law Compliance",
    description: "Employment and labour regulations",
    features: [
      "EPF & ESI Registration",
      "Labour License",
      "Shops & Establishment",
      "Contract Labour Act",
      "Minimum Wages Act"
    ]
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    description: "IP protection and registration",
    features: [
      "Trademark Registration",
      "Copyright Filing",
      "Patent Application",
      "Design Registration",
      "IP Litigation"
    ]
  },
  {
    icon: HandshakeIcon,
    title: "Mergers & Acquisitions",
    description: "Corporate restructuring services",
    features: [
      "Due Diligence",
      "Valuation Reports",
      "Share Transfer",
      "Amalgamation",
      "Demerger"
    ]
  }
];

const additionalServices = [
  { name: "Legal Notice Drafting", description: "Professional legal notices for all purposes" },
  { name: "Affidavit Preparation", description: "Sworn affidavits for courts and authorities" },
  { name: "Power of Attorney", description: "GPA and SPA drafting and registration" },
  { name: "Court Representation", description: "Civil, criminal, and tribunal representation" },
  { name: "Legal Consultation", description: "Expert legal advice on any matter" },
  { name: "Document Attestation", description: "Notarization and apostille services" }
];

const tamilNaduCourts = [
  "Madras High Court",
  "District Courts - All 38 Districts",
  "Family Courts",
  "Consumer Forums",
  "Labour Courts",
  "NCLT Chennai",
  "Debt Recovery Tribunal",
  "Rent Control Tribunals"
];

const whyChooseUs = [
  "Legal documentation and consultation coordination",
  "Tamil Nadu business and corporate legal support",
  "Competitive and transparent fees",
  "Structured documentation support",
  "Regular case status updates",
  "Multilingual support (Tamil & English)",
  "Weekend consultations available",
  "Backed by STA Corporate Solutions — 43+ year transport heritage"
];

const LegalServices = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sta-corporate.in" },
      { "@type": "ListItem", "position": 2, "name": "Legal & CA Services", "item": "https://sta-corporate.in/legal-services" }
    ]
  };

  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://sta-corporate.in/legal-services#service",
    "name": "STA Corporate Solutions Legal & CA Services",
    "description": "Comprehensive legal & CA services for individuals, businesses, and corporates in Tamil Nadu. Property documentation, company formation, litigation support, and more.",
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
      { "@type": "City", "name": "Chennai" },
      { "@type": "City", "name": "Tiruppur" },
      { "@type": "City", "name": "Erode" },
      { "@type": "City", "name": "Salem" },
      { "@type": "City", "name": "Madurai" },
      { "@type": "City", "name": "Trichy" },
      { "@type": "State", "name": "Tamil Nadu" }
    ],
    "serviceType": [
      "Property Documentation",
      "Company Registration",
      "Contract Drafting",
      "Litigation Support",
      "Intellectual Property",
      "Labour Law Compliance"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Legal & CA Services South India | Legal, GST, Tax, Audit & Company Registration</title>
        <meta name="description" content="Legal and CA professional services from Coimbatore — legal documentation, company registration, GST, income tax, accounts, audit and compliance support for South India." />
        <meta name="keywords" content="legal & CA services south india, property lawyer coimbatore, company registration chennai, business lawyer bangalore, corporate law tamil nadu, trademark registration, litigation support hyderabad" />
        <link rel="canonical" href="https://sta-corporate.in/legal-services" />
        <meta property="og:title" content="Legal & CA Services South India | Property, Business, Corporate" />
        <meta property="og:description" content="Property, contracts, registrations & corporate law across South India." />
        <meta property="og:url" content="https://sta-corporate.in/legal-services" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(legalServiceSchema)}</script>
      </Helmet>
      <Layout>
        <main>
          {/* Hero Section */}
          <section className="relative isolate min-h-[88svh] flex items-center overflow-hidden bg-primary">
            <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary to-primary/90" />
            <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--primary-glow)/0.3),_transparent_55%)]" />

            <div className="container mx-auto px-4 pt-32 pb-44 md:pt-40 md:pb-52 relative">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background text-[11px] font-bold tracking-[0.18em] uppercase text-primary shadow-xl ring-1 ring-primary-foreground/40 mb-8">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  New in 2025 · Part of STA Corporate Solutions
                </div>
                <h1 className="text-display-2xl text-primary-foreground mb-6">
                  Confidence at
                  <br />
                  <span className="bg-gradient-to-r from-secondary via-secondary to-primary-foreground bg-clip-text text-transparent">
                    every signature.
                  </span>
                </h1>
                <p className="text-headline text-primary-foreground/85 max-w-2xl mb-10">
                  Launched mid-2025 under STA Corporate Solutions. Legal documentation, company registration, GST, income tax, accounts, audit and compliance support for individuals, businesses and corporates across South India — backed by 43+ years of group-level Coimbatore presence.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+919443033055">
                    <Button size="lg" className="rounded-full px-7 h-12 gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-[14px] font-medium shadow-xl ease-apple">
                      <Phone className="h-4 w-4" />
                      +91 94430 33055
                    </Button>
                  </a>
                  <a href="https://wa.me/919443033055?text=Hi%2C%20I%20need%20legal%20consultation" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="rounded-full px-7 h-12 gap-2 glass-subtle border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 text-[14px] font-medium ease-apple">
                      <Scale className="h-4 w-4" />
                      Legal Consultation
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-10 pb-6 hidden md:block">
              <div className="container mx-auto px-4">
                <div className="glass rounded-2xl p-5 md:p-7">
                  <div className="grid grid-cols-4 divide-x divide-border/40">
                    {[
                      { value: "2025", label: "New Practice" },
                      { value: "38", label: "TN Districts" },
                      { value: "B2B", label: "Business Focus" },
                      { value: "Docs", label: "Full Support" },
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
          <section className="md:hidden bg-background border-b border-border">
            <div className="container mx-auto px-4 py-6">
              <div className="glass rounded-2xl p-5">
                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                  {[
                    { value: "2025", label: "New Practice" },
                    { value: "38", label: "TN Districts" },
                    { value: "B2B", label: "Business Focus" },
                    { value: "Docs", label: "Full Support" },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-[10px] font-semibold tracking-[0.16em] uppercase text-muted-foreground mb-2">{stat.label}</div>
                      <div className="text-2xl font-bold text-foreground tabular-nums tracking-tight">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Personal Legal & CA Services */}
          <AnimatedSection className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <User className="h-4 w-4 mr-2" />
                  For Individuals
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Personal Legal & CA Services
                </h2>
                <p className="text-lg text-muted-foreground">
                  Expert legal assistance for all your personal matters
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {personalServices.map((service, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-border hover:border-accent overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-4 group-hover:from-accent group-hover:to-accent/70 transition-all duration-500">
                        <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
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

          {/* Business Legal & CA Services */}
          <AnimatedSection className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <Briefcase className="h-4 w-4 mr-2" />
                  For Businesses
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Business Legal & CA Services
                </h2>
                <p className="text-lg text-muted-foreground">
                  Complete legal support for startups, SMEs, and enterprises
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {businessServices.map((service, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-border hover:border-accent overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                        <service.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
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

          {/* Corporate Legal & CA Services */}
          <AnimatedSection className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <Factory className="h-4 w-4 mr-2" />
                  For Corporates
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Corporate Legal & CA Services
                </h2>
                <p className="text-lg text-muted-foreground">
                  Enterprise-grade legal solutions for large organizations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {corporateServices.map((service, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-border hover:border-accent overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-4 group-hover:from-accent group-hover:to-accent/70 transition-all duration-500">
                        <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
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

          {/* Additional Services */}
          <AnimatedSection className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Additional Legal & CA Services
                </h2>
                <p className="text-lg text-muted-foreground">
                  Structured support for common legal documentation needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {additionalServices.map((service, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:border-accent">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                          <Scale className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Tamil Nadu Coverage */}
          <AnimatedSection className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <Badge variant="outline" className="mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    Tamil Nadu Coverage
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Court Representation Across Tamil Nadu
                  </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  {tamilNaduCourts.map((court, index) => (
                    <div key={index} className="group flex items-center gap-2 px-6 py-3 bg-muted rounded-full border border-border hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <Gavel className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
                      <span className="text-foreground font-medium">{court}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Why Choose Us */}
          <AnimatedSection className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <Badge variant="outline" className="mb-4">
                    <Star className="h-4 w-4 mr-2" />
                    Why Us
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Why STA Corporate Solutions for Legal & CA Services?
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="group flex items-center gap-4 p-6 bg-background rounded-xl hover:shadow-lg hover:bg-accent/5 transition-all duration-300">
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

          <ServiceFAQ
            eyebrow="Legal & CA Services FAQ"
            heading="Property, corporate, registrations —"
            subheading="answered plainly."
            faqs={legalFaqs}
            speakableId="faq-legal"
          />

          <CTASection />
        </main>
      </Layout>
    </>
  );
};

export default LegalServices;
