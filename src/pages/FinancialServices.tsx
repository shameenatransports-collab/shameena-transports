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
  Landmark,
  Shield,
  Home,
  Car,
  GraduationCap,
  TrendingUp,
  Banknote,
  IndianRupee,
  BadgePercent
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
    icon: GraduationCap,
    title: "Education Loans",
    description: "Government education financing schemes",
    schemes: [
      "Central Sector Interest Subsidy",
      "Vidya Lakshmi Portal Loans",
      "Dr. Ambedkar Education Loan",
      "Padho Pardesh - Minority Education",
      "State Education Loan Schemes"
    ]
  },
  {
    icon: Home,
    title: "Housing Schemes",
    description: "Government housing and construction loans",
    schemes: [
      "Pradhan Mantri Awas Yojana (PMAY)",
      "Credit-Linked Subsidy Scheme",
      "NHB Refinance Scheme",
      "HUDCO Home Loans",
      "Rural Housing Fund"
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
    icon: Home,
    title: "Home Loans",
    description: "Residential property purchase and construction",
    features: [
      "New Home Purchase",
      "Home Construction",
      "Balance Transfer",
      "Top-Up Loans",
      "Plot + Construction"
    ],
    banks: ["SBI", "HDFC", "LIC Housing", "ICICI", "Bajaj Housing"]
  },
  {
    icon: Car,
    title: "Vehicle Loans",
    description: "Commercial and personal vehicle financing",
    features: [
      "Commercial Vehicle Loan",
      "Car Loans",
      "Two-Wheeler Loans",
      "Fleet Financing",
      "Used Vehicle Loans"
    ],
    banks: ["HDFC", "ICICI", "Axis", "Mahindra Finance", "Shriram Finance"]
  },
  {
    icon: User,
    title: "Personal Loans",
    description: "Unsecured personal financing solutions",
    features: [
      "Salaried Personal Loans",
      "Self-Employed Loans",
      "Professional Loans",
      "Marriage Loans",
      "Medical Emergency Loans"
    ],
    banks: ["HDFC", "ICICI", "Bajaj Finserv", "Tata Capital", "Fullerton"]
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
          <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-accent text-accent-foreground">
                  <IndianRupee className="h-4 w-4 mr-1" />
                  Lowest Processing Fees
                </Badge>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                  Loan & Funding Services
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Access <strong>Government Schemes</strong> and <strong>Private Bank Loans</strong>. 
                  MSME, Mudra, PMAY, Business, Home & Vehicle Loans with expert assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+919443033055">
                    <Button size="lg" variant="secondary" className="gap-2">
                      <Phone className="h-5 w-5" />
                      Loan Enquiry: +91 94430 33055
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Government Schemes */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <Badge variant="outline" className="mb-4">
                  <Landmark className="h-4 w-4 mr-2" />
                  Government Schemes
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Government Funded Loans
                </h2>
                <p className="text-muted-foreground text-lg">
                  Access subsidized loans with low interest rates through central and state government schemes
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {governmentSchemes.map((scheme, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                          <scheme.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-foreground">{scheme.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{scheme.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {scheme.schemes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
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
          </section>

          {/* Private Bank Loans */}
          <section className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <Badge variant="outline" className="mb-4">
                  <Banknote className="h-4 w-4 mr-2" />
                  Private Banks
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Private Bank Loans
                </h2>
                <p className="text-muted-foreground text-lg">
                  Quick approval loans from leading private and public sector banks
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {privateBankLoans.map((loan, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center">
                          <loan.icon className="h-7 w-7 text-primary-foreground" />
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
          </section>

          {/* Agriculture Loans */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Agriculture & Allied Sector Loans
                </h2>
                <p className="text-muted-foreground text-lg">
                  Special financing for farmers, dairy, fisheries, and agri-businesses
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {agricultureLoans.map((loan, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{loan.name}</h3>
                          <p className="text-sm text-muted-foreground">{loan.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Special Category Schemes */}
          <section className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <Badge variant="outline" className="mb-4">
                  <BadgePercent className="h-4 w-4 mr-2" />
                  Special Categories
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Special Category Loan Schemes
                </h2>
                <p className="text-muted-foreground text-lg">
                  Priority sector lending with special benefits
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {specialSchemes.map((category, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-4">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.schemes.map((scheme, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
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
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Why STA Corporate Solutions for Loan Services?
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Lowest processing fees in the market",
                    "Direct bank tie-ups for faster approval",
                    "Expert guidance on scheme eligibility",
                    "Complete documentation support",
                    "Higher loan sanction rates",
                    "Subsidy claim assistance",
                    "Post-disbursement support",
                    "43+ years of trusted service"
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
