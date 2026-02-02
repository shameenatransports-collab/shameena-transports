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
  "Expert lawyers with 25+ years experience",
  "Pan Tamil Nadu presence - 38 districts",
  "Competitive and transparent fees",
  "Quick turnaround on documentation",
  "Regular case status updates",
  "Multilingual support (Tamil & English)",
  "Weekend consultations available",
  "43+ years of trusted service"
];

const LegalServices = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.stacorporate.com" },
      { "@type": "ListItem", "position": 2, "name": "Legal Services", "item": "https://www.stacorporate.com/legal-services" }
    ]
  };

  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://www.stacorporate.com/legal-services#service",
    "name": "STA Corporate Solutions Legal Services",
    "description": "Comprehensive legal services for individuals, businesses, and corporates in Tamil Nadu. Property documentation, company formation, litigation support, and more.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "STA Corporate Solutions",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No.302/2A7, VK Road, Peelamedu",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641004",
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
        <title>Legal Services in Tamil Nadu | Property, Business, Corporate Law | STA Corporate Solutions Coimbatore</title>
        <meta name="description" content="Best legal services in Tamil Nadu - Property documentation, company registration, business contracts, litigation support. Trusted lawyers in Coimbatore, Chennai, Tiruppur. Lowest fees." />
        <meta name="keywords" content="legal services coimbatore, lawyer tamil nadu, property lawyer, company registration, business lawyer, corporate law, litigation support, trademark registration, labour law compliance" />
        <link rel="canonical" href="https://www.stacorporate.com/legal-services" />
        <meta property="og:title" content="Legal Services | STA Corporate Solutions Tamil Nadu" />
        <meta property="og:description" content="Comprehensive legal services for individuals, businesses, and corporates. Property, contracts, litigation, IP registration." />
        <meta property="og:url" content="https://www.stacorporate.com/legal-services" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(legalServiceSchema)}</script>
      </Helmet>
      <Layout>
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-primary via-primary/95 to-accent/90">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l9.9-9.9h-2.828zM32 0l-3.657 3.657 1.414 1.414L searching 0H32zM0 5.373l.828-.83 1.415 1.415L0 8.2V5.374zm0 5.656l.828-.829 5.07 5.07-1.414 1.415L0 11.03zm0 5.656l.828-.828 8.485 8.485-1.414 1.414L0 13.857v2.828zm0 5.657l.828-.828 11.9 11.9-1.414 1.414L0 22.344v2.828z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              }} />
            </div>
            <div className="container mx-auto px-4 relative z-10 py-20">
              <div className="max-w-3xl">
                <Badge className="mb-6 bg-secondary text-secondary-foreground text-sm px-4 py-2">
                  <Scale className="h-4 w-4 mr-2" />
                  Trusted Legal Partners in Tamil Nadu
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                  Legal Services
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                  Comprehensive legal solutions for <strong className="text-secondary">individuals</strong>, <strong className="text-secondary">businesses</strong>, and <strong className="text-secondary">corporates</strong>. 
                  Expert lawyers across Tamil Nadu with presence in all 38 districts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+919443033055">
                    <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
                      <Phone className="h-5 w-5" />
                      Legal Consultation: +91 94430 33055
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="absolute bottom-8 left-0 right-0 z-10">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { value: "38", label: "Districts Covered" },
                    { value: "10K+", label: "Cases Handled" },
                    { value: "25+", label: "Years Experience" },
                    { value: "98%", label: "Success Rate" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl">
                      <div className="text-2xl md:text-3xl font-bold text-secondary">{stat.value}</div>
                      <div className="text-sm text-primary-foreground/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Personal Legal Services */}
          <AnimatedSection className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <User className="h-4 w-4 mr-2" />
                  For Individuals
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Personal Legal Services
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

          {/* Business Legal Services */}
          <AnimatedSection className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <Briefcase className="h-4 w-4 mr-2" />
                  For Businesses
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Business Legal Services
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

          {/* Corporate Legal Services */}
          <AnimatedSection className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <Factory className="h-4 w-4 mr-2" />
                  For Corporates
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Corporate Legal Services
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
                  Additional Legal Services
                </h2>
                <p className="text-lg text-muted-foreground">
                  Quick turnaround services for common legal needs
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
                    Why STA Corporate Solutions for Legal Services?
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

          <CTASection />
        </main>
      </Layout>
    </>
  );
};

export default LegalServices;
