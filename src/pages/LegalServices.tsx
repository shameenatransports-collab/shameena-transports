import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  HandshakeIcon
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
          <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-accent text-accent-foreground">
                  Trusted Legal Partners in Tamil Nadu
                </Badge>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                  Legal Services
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Comprehensive legal solutions for <strong>individuals</strong>, <strong>businesses</strong>, and <strong>corporates</strong>. 
                  Expert lawyers across Tamil Nadu with presence in all 38 districts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+919443033055">
                    <Button size="lg" variant="secondary" className="gap-2">
                      <Phone className="h-5 w-5" />
                      Legal Consultation: +91 94430 33055
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Personal Legal Services */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <Badge variant="outline" className="mb-4">
                  <User className="h-4 w-4 mr-2" />
                  For Individuals
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Personal Legal Services
                </h2>
                <p className="text-muted-foreground text-lg">
                  Expert legal assistance for all your personal matters
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {personalServices.map((service, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                        <service.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
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
          </section>

          {/* Business Legal Services */}
          <section className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <Badge variant="outline" className="mb-4">
                  <Briefcase className="h-4 w-4 mr-2" />
                  For Businesses
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Business Legal Services
                </h2>
                <p className="text-muted-foreground text-lg">
                  Complete legal support for startups, SMEs, and enterprises
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {businessServices.map((service, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <service.icon className="h-6 w-6 text-primary-foreground" />
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
          </section>

          {/* Corporate Legal Services */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <Badge variant="outline" className="mb-4">
                  <Factory className="h-4 w-4 mr-2" />
                  For Corporates
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Corporate Legal Services
                </h2>
                <p className="text-muted-foreground text-lg">
                  Enterprise-grade legal solutions for large organizations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {corporateServices.map((service, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                        <service.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
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
          </section>

          {/* Additional Services */}
          <section className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Additional Legal Services
                </h2>
                <p className="text-muted-foreground text-lg">
                  Quick turnaround services for common legal needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {additionalServices.map((service, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Scale className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Tamil Nadu Coverage */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <Badge variant="outline" className="mb-4">Tamil Nadu Coverage</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Court Representation Across Tamil Nadu
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Our legal network covers all courts and tribunals in Tamil Nadu
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {tamilNaduCourts.map((court, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <Gavel className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{court}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Why STA Corporate Solutions for Legal Services?
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Experienced advocates with 20+ years practice",
                    "Lowest legal fees in Tamil Nadu",
                    "Pan-Tamil Nadu coverage - all 38 districts",
                    "Quick document processing",
                    "Complete confidentiality guaranteed",
                    "Digital documentation support",
                    "Regular case status updates",
                    "Single point of contact for all legal needs"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                      <Shield className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <CTASection />
        </main>
      </Layout>
    </>
  );
};

export default LegalServices;
