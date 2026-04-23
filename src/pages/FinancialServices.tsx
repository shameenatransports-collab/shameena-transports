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
  BadgePercent,
  Star,
  Sparkles
} from "lucide-react";

const governmentSchemes = [
  {
    icon: Factory,
    title: "MSME Loans",
    description: "Government-backed loans for micro, small, and medium enterprises",
    schemes: [
      "PMEGP - Prime Minister Employment Generation Programme",
      "MUDRA Loans - Shishu, Kishore, Tarun",
      "Stand-Up India Scheme",
      "Credit Guarantee Fund (CGTMSE)",
      "MSME Cluster Development"
    ]
  },
  {
    icon: TrendingUp,
    title: "Startup India",
    description: "Funding schemes for startups and new ventures",
    schemes: [
      "Startup India Seed Fund",
      "Fund of Funds for Startups",
      "SIDBI Make in India Loan",
      "Atal Innovation Mission",
      "Technology Development Board"
    ]
  },
  {
    icon: Landmark,
    title: "Industrial Funding Schemes",
    description: "Guidance for eligible business, industry, and company funding schemes",
    schemes: [
      "Industrial subsidy guidance",
      "Term loan documentation support",
      "Working capital scheme assistance",
      "Manufacturing unit funding guidance",
      "Government department application support"
    ]
  }
];

const privateBankLoans = [
  {
    icon: Building2,
    title: "Business Loans",
    description: "Working capital and business expansion loans",
    features: [
      "Working Capital Loans",
      "Term Loans",
      "Overdraft Facility",
      "Bill Discounting",
      "Letter of Credit"
    ],
    banks: ["HDFC", "ICICI", "Axis", "Kotak", "Yes Bank"]
  },
  {
    icon: Factory,
    title: "Industrial & Machinery Loans",
    description: "Funding assistance for factories, machinery, and industrial expansion",
    features: [
      "Commercial Vehicle Loan",
      "Machinery Finance",
      "Equipment Loans",
      "Fleet Financing",
      "Factory Expansion Loans"
    ],
    banks: ["HDFC", "ICICI", "Axis", "Mahindra Finance", "Shriram Finance"]
  }
];

const agricultureLoans = [
  { name: "Kisan Credit Card", description: "Flexible credit for farmers" },
  { name: "PM-KISAN Samman Nidhi", description: "Direct income support scheme" },
  { name: "Agri Infrastructure Fund", description: "Farm infrastructure development" },
  { name: "Dairy Entrepreneurship", description: "NABARD dairy development scheme" },
  { name: "Fisheries Development", description: "PM Matsya Sampada Yojana" },
  { name: "Crop Insurance", description: "PM Fasal Bima Yojana assistance" }
];

const specialSchemes = [
  {
    title: "Women Entrepreneurs",
    schemes: ["Mudra for Women", "Stand-Up India (Women)", "Stree Shakti Package", "Mahila Udyam Nidhi"]
  },
  {
    title: "SC/ST & Minorities",
    schemes: ["NSFDC Loans", "NMDFC Schemes", "Venture Capital for SC/ST", "Minority Business Loans"]
  },
  {
    title: "Ex-Servicemen",
    schemes: ["AGIF Loans", "DESW Schemes", "Priority Sector Lending", "Skill Development Loans"]
  }
];

const whyChooseUs = [
  "Transparent assistance for eligible business funding requirements",
  "Guidance for MSME, Mudra, and government scheme applications",
  "Expert guidance on scheme eligibility",
  "Complete documentation support",
  "Business, industry, and company-focused loan assistance",
  "Subsidy claim assistance",
  "Application follow-up support as per lender or department process",
  "43+ years of trusted service"
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

  const financialServiceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://www.stacorporate.com/financial-services#service",
    "name": "STA Corporate Solutions Loan Services",
    "description": "Complete loan assistance for government schemes and private bank loans. MSME, Mudra, PMAY, business loans, home loans, vehicle loans in Tamil Nadu.",
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
      { "@type": "State", "name": "Tamil Nadu" }
    ],
    "serviceType": [
      "Government Scheme Loans",
      "MSME Loans",
      "Mudra Loans",
      "Business Loans",
      "Home Loans",
      "Vehicle Loans"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Loan Services Tamil Nadu | MSME, Mudra, Business & Home Loans | STA Corporate Solutions</title>
        <meta name="description" content="Get government scheme loans - MSME, Mudra, PMAY, Startup India. Private bank loans - business, home, vehicle, personal loans in Coimbatore, Tamil Nadu. Lowest processing fees." />
        <meta name="keywords" content="msme loan coimbatore, mudra loan tamil nadu, pmay loan, business loan, home loan, vehicle loan, startup loan, government scheme loan, bank loan assistance" />
        <link rel="canonical" href="https://www.stacorporate.com/financial-services" />
        <meta property="og:title" content="Loan Services | Government Schemes & Bank Loans | STA Corporate Solutions" />
        <meta property="og:description" content="Complete loan assistance - MSME, Mudra, business, home, vehicle loans. Government schemes and private bank financing." />
        <meta property="og:url" content="https://www.stacorporate.com/financial-services" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(financialServiceSchema)}</script>
      </Helmet>
      <Layout>
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-primary via-primary/95 to-accent/90">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            <div className="container mx-auto px-4 relative z-10 py-20">
              <div className="max-w-3xl">
                <Badge className="mb-6 bg-secondary text-secondary-foreground text-sm px-4 py-2">
                  <IndianRupee className="h-4 w-4 mr-2" />
                  Lowest Processing Fees in Tamil Nadu
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                  Loan & Funding Services
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                  Access <strong className="text-secondary">Government Schemes</strong> and <strong className="text-secondary">Private Bank Loans</strong>. 
                  MSME, Mudra, PMAY, Business, Home & Vehicle Loans with expert assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+919443033055">
                    <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
                      <Phone className="h-5 w-5" />
                      Loan Enquiry: +91 94430 33055
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
                    { value: "₹500Cr+", label: "Loans Facilitated" },
                    { value: "5000+", label: "Happy Clients" },
                    { value: "50+", label: "Bank Partners" },
                    { value: "95%", label: "Approval Rate" }
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

          {/* Government Schemes */}
          <AnimatedSection className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <Landmark className="h-4 w-4 mr-2" />
                  Government Schemes
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Government Funded Loans
                </h2>
                <p className="text-lg text-muted-foreground">
                  Access subsidized loans with low interest rates through central and state government schemes
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

          {/* Private Bank Loans */}
          <AnimatedSection className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <Banknote className="h-4 w-4 mr-2" />
                  Private Banks
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Private Bank Loans
                </h2>
                <p className="text-lg text-muted-foreground">
                  Quick approval loans from leading private and public sector banks
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
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                        {loan.banks.map((bank, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {bank}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Agriculture Loans */}
          <AnimatedSection className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Agriculture Sector
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Agriculture & Allied Sector Loans
                </h2>
                <p className="text-lg text-muted-foreground">
                  Special financing for farmers, dairy, fisheries, and agri-businesses
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {agricultureLoans.map((loan, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:border-accent">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                          <TrendingUp className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1">{loan.name}</h3>
                          <p className="text-sm text-muted-foreground">{loan.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Special Category Schemes */}
          <AnimatedSection className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <BadgePercent className="h-4 w-4 mr-2" />
                  Special Categories
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Special Category Loan Schemes
                </h2>
                <p className="text-lg text-muted-foreground">
                  Priority sector lending with special benefits
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {specialSchemes.map((category, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:border-accent">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-foreground mb-6 text-center">{category.title}</h3>
                      <ul className="space-y-3">
                        {category.schemes.map((scheme, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm text-foreground">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            {scheme}
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
                    Why STA Corporate Solutions for Loan Services?
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

          <CTASection />
        </main>
      </Layout>
    </>
  );
};

export default FinancialServices;
