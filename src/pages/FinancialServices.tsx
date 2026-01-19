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
  Briefcase,
  Factory,
  FileText,
  Globe,
  Calculator,
  Shield
} from "lucide-react";

const services = [
  {
    icon: User,
    title: "Individual Services",
    description: "Personal financial planning and tax management",
    features: [
      "Personal Income Tax Filing",
      "Tax Planning & Optimization",
      "Investment Advisory",
      "Wealth Management",
      "Insurance Planning"
    ]
  },
  {
    icon: Building2,
    title: "Business Services",
    description: "Complete financial solutions for businesses",
    features: [
      "Business Registration",
      "Company Formation",
      "Bookkeeping & Accounting",
      "Financial Statements",
      "Audit Support"
    ]
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Specialized services for professionals",
    features: [
      "Professional Tax Filing",
      "Practice Management",
      "Income Structuring",
      "Retirement Planning",
      "Professional Indemnity"
    ]
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Financial services for manufacturers",
    features: [
      "Cost Accounting",
      "Inventory Valuation",
      "Production Costing",
      "Working Capital Management",
      "MSME Registration"
    ]
  }
];

const taxServices = [
  {
    icon: FileText,
    title: "GST Filing",
    description: "Complete GST compliance and filing services",
    items: ["GSTR-1", "GSTR-3B", "Annual Returns", "E-way Bills", "GST Registration", "Input Tax Credit"]
  },
  {
    icon: Calculator,
    title: "Personal Taxation",
    description: "Individual and HUF tax filing services",
    items: ["ITR-1 to ITR-7", "TDS Returns", "Advance Tax", "Tax Refunds", "Assessment Support", "Notice Handling"]
  },
  {
    icon: Globe,
    title: "Foreign Taxation",
    description: "International tax and NRI services",
    items: ["NRI Taxation", "DTAA Benefits", "FEMA Compliance", "Foreign Remittances", "FCRA", "Transfer Pricing"]
  }
];

const FinancialServices = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.stacorporate.com" },
      { "@type": "ListItem", "position": 2, "name": "Financial Services", "item": "https://www.stacorporate.com/financial-services" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Financial Services | GST Filing, Tax Services | STA Corporate Solutions</title>
        <meta name="description" content="STA Corporate Solutions Financial Services - GST filing, personal taxation, foreign taxation, business accounting. Lowest commission rates. Coimbatore." />
        <link rel="canonical" href="https://www.stacorporate.com/financial-services" />
        <meta property="og:title" content="Financial Services | STA Corporate Solutions" />
        <meta property="og:description" content="Complete financial services - GST, taxation, accounting for individuals and businesses." />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Layout>
        <main>
          {/* Hero Section */}
          <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-accent text-accent-foreground">
                  Lowest Commission in India
                </Badge>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                  Financial Services
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Complete financial solutions for individuals, businesses, and manufacturers. 
                  GST filing, tax planning, and compliance services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+919443033055">
                    <Button size="lg" variant="secondary" className="gap-2">
                      <Phone className="h-5 w-5" />
                      Consult Now: +91 94430 33055
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Service Categories */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Who We Serve
                </h2>
                <p className="text-muted-foreground text-lg">
                  Tailored financial solutions for every client category
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                          <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
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
          </section>

          {/* Tax Services */}
          <section className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Taxation Services
                </h2>
                <p className="text-muted-foreground text-lg">
                  Complete tax compliance and filing services
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {taxServices.map((service, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-4">
                        <service.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.items.map((item, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Why STA Corporate Solutions for Financial Services?
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Lowest service charges in the market",
                    "Experienced chartered accountants",
                    "100% compliance guaranteed",
                    "Timely filing - never miss deadlines",
                    "Digital-first approach",
                    "Dedicated relationship manager",
                    "Confidential handling of data",
                    "Year-round support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
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

export default FinancialServices;
