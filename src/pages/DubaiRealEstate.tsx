import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { DubaiContactForm } from "@/components/dubai/ContactForm";
import { 
  Phone, 
  CheckCircle,
  Building2,
  Home,
  TrendingUp,
  Shield,
  MapPin,
  Star,
  Users,
  Sparkles,
  Landmark,
  Globe,
  Wallet,
  ArrowRight,
  Plane,
  FileCheck,
  Flag
} from "lucide-react";
import dubaiHeroImage from "@/assets/dubai-villa-hero.jpg";
import dubaiInteriorImage from "@/assets/dubai-interior.jpg";
import dubaiSkylineImage from "@/assets/dubai-skyline.jpg";

const countries = [
  {
    name: "UAE (Dubai & Abu Dhabi)",
    flag: "🇦🇪",
    highlights: ["0% Property Tax", "Golden Visa (10yr)", "6-8% Rental Yield", "100% Freehold"],
    visaType: "Golden Visa — 10-year residency with AED 2M+ property investment",
    startingPrice: "From AED 800K",
    popular: true,
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    highlights: ["Stable Market", "Tier 1 Visa Route", "4-6% Yield", "World-Class Education"],
    visaType: "Innovator Founder Visa — invest & establish business in the UK",
    startingPrice: "From £200K",
    popular: true,
  },
  {
    name: "Estonia (EU)",
    flag: "🇪🇪",
    highlights: ["EU Residency", "e-Residency", "Low Cost Entry", "Digital Economy"],
    visaType: "D-Visa & Temporary Residence Permit via property or business",
    startingPrice: "From €80K",
    popular: false,
  },
  {
    name: "Portugal (EU)",
    flag: "🇵🇹",
    highlights: ["Golden Visa", "EU Passport Path", "5-7% Yield", "NHR Tax Benefits"],
    visaType: "Golden Visa — residency through €500K+ property investment",
    startingPrice: "From €250K",
    popular: true,
  },
  {
    name: "Greece (EU)",
    flag: "🇬🇷",
    highlights: ["Golden Visa", "Low Entry Cost", "Tourism Income", "EU Access"],
    visaType: "Golden Visa — 5-year residency with €250K+ property",
    startingPrice: "From €250K",
    popular: false,
  },
  {
    name: "Spain (EU)",
    flag: "🇪🇸",
    highlights: ["Golden Visa", "High Demand", "Mediterranean Living", "EU Residency"],
    visaType: "Golden Visa — residency through €500K+ real estate investment",
    startingPrice: "From €300K",
    popular: false,
  },
];

const propertyTypes = [
  {
    icon: Home,
    title: "Luxury Villas",
    description: "Exclusive standalone villas in premium communities across Dubai, London, Lisbon & more",
    features: ["Private pools", "Landscaped gardens", "Smart home tech", "24/7 security"],
    countries: "UAE, UK, Portugal, Spain"
  },
  {
    icon: Building2,
    title: "Premium Apartments",
    description: "High-rise living with world-class amenities in global metropolitan cities",
    features: ["Panoramic views", "Gym & spa", "Concierge services", "Covered parking"],
    countries: "UAE, UK, Estonia, Greece"
  },
  {
    icon: Landmark,
    title: "Penthouses",
    description: "Ultra-luxury penthouses with breathtaking views in the world's most iconic cities",
    features: ["Private terraces", "Infinity pools", "Multiple bedrooms", "Exclusive floors"],
    countries: "UAE, UK, Portugal"
  },
  {
    icon: Globe,
    title: "Off-Plan Projects",
    description: "Invest early in upcoming developments across international markets for maximum ROI",
    features: ["Payment plans", "Early bird discounts", "Premium locations", "High ROI potential"],
    countries: "UAE, UK, Portugal, Spain"
  },
  {
    icon: Landmark,
    title: "Commercial Properties",
    description: "Office spaces, retail units & warehouses in high-growth international business hubs",
    features: ["Long-term leases", "Stable income", "Capital growth", "Business visa support"],
    countries: "UAE, UK, Estonia"
  },
  {
    icon: Home,
    title: "Holiday Homes & Airbnb",
    description: "Vacation properties in tourist hotspots generating passive rental income year-round",
    features: ["Tourist hotspots", "Short-term rental", "Property management", "High occupancy"],
    countries: "Greece, Spain, Portugal"
  }
];

const visaServices = [
  {
    icon: Plane,
    title: "UAE Golden Visa",
    description: "10-year residency for you & family with AED 2M+ property investment. Live, work & study in the UAE.",
  },
  {
    icon: FileCheck,
    title: "UK Investor Visa",
    description: "Innovator Founder and other visa routes through property and business investment in the United Kingdom.",
  },
  {
    icon: Flag,
    title: "EU Golden Visa",
    description: "Residency in Portugal, Greece, or Spain through property investment. Path to EU citizenship.",
  },
  {
    icon: Globe,
    title: "Estonia e-Residency",
    description: "Digital residency and business setup in the EU's most advanced digital economy.",
  },
];

const investmentBenefits = [
  {
    icon: TrendingUp,
    title: "High ROI",
    description: "Average rental yields of 4-8% annually across global markets"
  },
  {
    icon: Shield,
    title: "Freehold Ownership",
    description: "Full property ownership rights for Indian investors in multiple countries"
  },
  {
    icon: Wallet,
    title: "Tax Advantages",
    description: "Tax-free income in UAE, NHR benefits in Portugal, favourable EU structures"
  },
  {
    icon: Globe,
    title: "Residency & Visa",
    description: "Golden Visa, e-Residency, and investor visa routes included with purchase"
  }
];

const services = [
  "Country & property consultation",
  "Visa & residency guidance",
  "Site visits & virtual tours",
  "Legal due diligence (international)",
  "Price negotiation & documentation",
  "Post-sale property management",
  "Rental management services",
  "Resale & exit strategy support"
];

const DubaiRealEstate = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.stacorporate.com" },
      { "@type": "ListItem", "position": 2, "name": "Overseas Real Estate", "item": "https://www.stacorporate.com/overseas-real-estate" }
    ]
  };

  const realEstateServiceSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://www.stacorporate.com/overseas-real-estate#service",
    "name": "STA Corporate Solutions - Overseas Real Estate & Visa Services",
    "description": "Premium overseas real estate investment services for Tamil Nadu & Indian investors. Properties in UAE, UK, Portugal, Greece, Spain, Estonia with visa & residency assistance.",
    "url": "https://www.stacorporate.com/overseas-real-estate",
    "areaServed": [
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Portugal" },
      { "@type": "Country", "name": "Greece" },
      { "@type": "Country", "name": "Spain" },
      { "@type": "Country", "name": "Estonia" }
    ],
    "serviceType": [
      "Overseas Property Sales",
      "Luxury Villa Sales",
      "Off-Plan Investments",
      "Golden Visa Assistance",
      "Investor Visa Services",
      "Property Management",
      "Investment Advisory"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can Indian citizens buy property in Dubai?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Indian citizens can buy 100% freehold property in designated areas in Dubai. With AED 2M+ investment, you also qualify for a 10-year Golden Visa." }
      },
      {
        "@type": "Question",
        "name": "What is a Golden Visa for property investors?",
        "acceptedAnswer": { "@type": "Answer", "text": "A Golden Visa grants long-term residency (5-10 years) to property investors in countries like UAE, Portugal, Greece, and Spain. It provides rights to live, work, and access healthcare and education in those countries." }
      },
      {
        "@type": "Question",
        "name": "Which European country offers the cheapest Golden Visa?",
        "acceptedAnswer": { "@type": "Answer", "text": "Greece offers one of the most affordable Golden Visas in Europe, starting at €250,000 property investment, granting 5-year EU residency with path to citizenship." }
      },
      {
        "@type": "Question",
        "name": "Does STA help with visa processing for overseas property?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. STA Corporate Solutions provides end-to-end visa and residency assistance as part of every overseas property purchase — including Golden Visa (UAE, Portugal, Greece, Spain), UK investor visas, and Estonia e-Residency." }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Overseas Real Estate Investment | UAE, UK, Europe Property & Visa | STA Corporate Solutions</title>
        <meta name="description" content="Invest in overseas real estate from Tamil Nadu — Luxury properties in Dubai, UK, Portugal, Greece, Spain, Estonia. Golden Visa & residency included. 43+ years trusted service. Call +91 94430 33055." />
        <meta name="keywords" content="overseas real estate india, buy property dubai, uk property investment, golden visa portugal, golden visa greece, estonia e-residency, property investment from tamil nadu, nri property investment, overseas property for indians, buy villa abroad" />
        <link rel="canonical" href="https://www.stacorporate.com/overseas-real-estate" />
        <meta property="og:title" content="Overseas Real Estate & Visa Services | STA Corporate Solutions" />
        <meta property="og:description" content="Buy property in UAE, UK & Europe from India. Golden Visa & residency included. Trusted since 1982. Properties from ₹50 Lakhs." />
        <meta property="og:url" content="https://www.stacorporate.com/overseas-real-estate" />
        <meta property="og:image" content="https://www.stacorporate.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(realEstateServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Layout>
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[90vh] flex items-center">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${dubaiHeroImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
            </div>
            <div className="container mx-auto px-4 relative z-10 py-20">
              <div className="max-w-3xl">
                <Badge className="mb-6 bg-secondary text-secondary-foreground text-sm px-4 py-2">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Your Gateway to Global Property & Residency
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                  Invest in <span className="text-secondary">Overseas</span> Real Estate
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 leading-relaxed">
                  Premium properties in <strong className="text-secondary">UAE, UK, Portugal, Greece, Spain & Estonia</strong> — 
                  with visa & residency assistance included.
                </p>
                <p className="text-lg text-primary-foreground/70 mb-8">
                  Trusted by Tamil Nadu families & NRIs since 1982. Lowest commission. Complete support from Coimbatore.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+919443033055">
                    <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
                      <Phone className="h-5 w-5" />
                      Free Consultation
                    </Button>
                  </a>
                  <a href="https://wa.me/919443033055?text=Hi%2C%20I%27m%20interested%20in%20overseas%20real%20estate%20investment" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                      <Globe className="h-5 w-5" />
                      WhatsApp Us
                    </Button>
                  </a>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-primary-foreground/20">
                  {[
                    { value: "6+", label: "Countries" },
                    { value: "4-8%", label: "Rental Yield" },
                    { value: "43+", label: "Years Trust" },
                    { value: "Visa", label: "Included" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center md:text-left">
                      <div className="text-2xl md:text-3xl font-bold text-secondary">{stat.value}</div>
                      <div className="text-sm text-primary-foreground/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Investment Benefits */}
          <AnimatedSection className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Why Invest Overseas
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Build Global Wealth from Tamil Nadu
                </h2>
                <p className="text-lg text-muted-foreground">
                  Diversify your portfolio with international real estate. Tax advantages, 
                  residency benefits, and strong rental yields — all managed from India.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {investmentBenefits.map((benefit, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-border hover:border-accent overflow-hidden">
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                        <benefit.icon className="h-10 w-10 text-accent-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Countries Section */}
          <AnimatedSection className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <Flag className="h-4 w-4 mr-2" />
                  Investment Destinations
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Choose Your Country
                </h2>
                <p className="text-lg text-muted-foreground">
                  We help Tamil Nadu families invest in property across 6 countries — each with unique visa & residency benefits
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {countries.map((country, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-border hover:border-accent overflow-hidden relative">
                    {country.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-secondary text-secondary-foreground text-xs">Popular</Badge>
                      </div>
                    )}
                    <CardContent className="p-8">
                      <div className="text-4xl mb-4">{country.flag}</div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{country.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {country.highlights.map((highlight, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-md font-medium">
                            {highlight}
                          </span>
                        ))}
                      </div>
                      <div className="border-t border-border pt-4 mt-4 space-y-3">
                        <div className="flex items-start gap-2">
                          <Plane className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-muted-foreground">{country.visaType}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="font-semibold">{country.startingPrice}</Badge>
                          <a href="tel:+919443033055">
                            <Button variant="ghost" size="sm" className="text-accent gap-1">
                              Enquire <ArrowRight className="h-3 w-3" />
                            </Button>
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Property Types */}
          <AnimatedSection className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <Home className="h-4 w-4 mr-2" />
                  Property Portfolio
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Explore Premium Properties Worldwide
                </h2>
                <p className="text-lg text-muted-foreground">
                  From Dubai beachfront villas to London apartments and European holiday homes
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {propertyTypes.map((property, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-border hover:border-accent overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                          <property.icon className="h-7 w-7 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground">{property.title}</h3>
                          <p className="text-xs text-muted-foreground">{property.countries}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm">{property.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {property.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Visa & Residency Services */}
          <AnimatedSection className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <Plane className="h-4 w-4 mr-2" />
                  Visa & Residency
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Property + Visa, All in One Place
                </h2>
                <p className="text-lg text-muted-foreground">
                  Every overseas property purchase includes complete visa & residency guidance — 
                  no separate consultants needed
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {visaServices.map((visa, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-border hover:border-accent">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                        <visa.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3">{visa.title}</h3>
                      <p className="text-sm text-muted-foreground">{visa.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Interior Showcase */}
          <AnimatedSection className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={dubaiInteriorImage} 
                      alt="Luxury overseas property interior" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl">
                    <div className="text-3xl font-bold">5★</div>
                    <div className="text-sm">Premium Finishes</div>
                  </div>
                </div>
                <div>
                  <Badge variant="outline" className="mb-4">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Exceptional Quality
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    World-Class Interiors & Finishes
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Every property we curate features premium finishes, smart home technology, 
                    and the attention to detail that defines luxury living — across all countries.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Italian marble flooring & premium tiles",
                      "German kitchen appliances & fittings",
                      "Smart home automation systems",
                      "Floor-to-ceiling panoramic windows",
                      "Private balconies & terraces",
                      "Designer bathroom fixtures"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-accent" />
                        </div>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Skyline / CTA Section */}
          <section className="relative py-32">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${dubaiSkylineImage})` }}
            >
              <div className="absolute inset-0 bg-primary/80" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
                  Get Residency Through Property Investment
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Golden Visa in UAE, Portugal, Greece & Spain. Investor routes to UK. 
                  e-Residency in Estonia. We handle your property purchase AND visa — end to end.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+919443033055">
                    <Button size="lg" variant="secondary" className="gap-2 text-lg px-8">
                      <Phone className="h-5 w-5" />
                      Call: +91 94430 33055
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Our Services */}
          <AnimatedSection className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge variant="outline" className="mb-4">
                    <Users className="h-4 w-4 mr-2" />
                    End-to-End Support
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Complete Overseas Property & Visa Services
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    From choosing the right country to visa processing and post-purchase management — 
                    we handle everything from our Coimbatore office.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl p-8 md:p-12">
                  <div className="text-center">
                    <Star className="h-16 w-16 text-accent mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Why Choose STA for Overseas Property?
                    </h3>
                    <ul className="space-y-4 text-left">
                      {[
                        "43+ years of trusted business relationships",
                        "Direct developer partnerships globally",
                        "Visa & residency assistance included",
                        "Transparent pricing with no hidden fees",
                        "Tamil & English speaking team in Coimbatore",
                        "Post-purchase property & rental management"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form Section */}
          <AnimatedSection className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <Badge variant="outline" className="mb-4">Get Started</Badge>
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                    Start Your Overseas Investment Journey
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Book a free consultation with our overseas property experts. 
                    We'll help you find the perfect property and guide you through visa procedures.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Free country & property consultation",
                      "Curated property shortlist within 48 hours",
                      "Complete visa & residency guidance",
                      "Virtual tours available",
                      "No hidden fees or charges"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <DubaiContactForm />
              </div>
            </div>
          </AnimatedSection>

          <CTASection />
        </main>
      </Layout>
    </>
  );
};

export default DubaiRealEstate;
