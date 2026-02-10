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
  ArrowRight
} from "lucide-react";
import dubaiHeroImage from "@/assets/dubai-villa-hero.jpg";
import dubaiInteriorImage from "@/assets/dubai-interior.jpg";
import dubaiSkylineImage from "@/assets/dubai-skyline.jpg";

const propertyTypes = [
  {
    icon: Home,
    title: "Luxury Villas",
    description: "Exclusive standalone villas in premium communities",
    features: ["Private pools", "Landscaped gardens", "Smart home tech", "24/7 security"],
    price: "From AED 2M"
  },
  {
    icon: Building2,
    title: "Premium Apartments",
    description: "High-rise living with world-class amenities",
    features: ["Panoramic views", "Gym & spa", "Concierge services", "Covered parking"],
    price: "From AED 800K"
  },
  {
    icon: Landmark,
    title: "Penthouses",
    description: "Ultra-luxury penthouses with breathtaking views",
    features: ["Private terraces", "Infinity pools", "Multiple bedrooms", "Exclusive floors"],
    price: "From AED 5M"
  },
  {
    icon: Globe,
    title: "Off-Plan Projects",
    description: "Invest early in upcoming developments",
    features: ["Payment plans", "Early bird discounts", "Premium locations", "High ROI potential"],
    price: "Flexible payments"
  }
];

const locations = [
  { name: "Palm Jumeirah", description: "Iconic island living" },
  { name: "Downtown Dubai", description: "Heart of the city" },
  { name: "Dubai Marina", description: "Waterfront lifestyle" },
  { name: "Emirates Hills", description: "Beverly Hills of Dubai" },
  { name: "Business Bay", description: "Modern urban living" },
  { name: "Jumeirah Beach Residence", description: "Beachfront community" },
  { name: "Dubai Hills Estate", description: "Green family living" },
  { name: "Bluewaters Island", description: "Exclusive island retreat" }
];

const investmentBenefits = [
  {
    icon: TrendingUp,
    title: "High ROI",
    description: "Average rental yields of 6-8% annually"
  },
  {
    icon: Shield,
    title: "100% Freehold",
    description: "Full ownership rights for foreign investors"
  },
  {
    icon: Wallet,
    title: "Tax-Free Income",
    description: "No property tax, no income tax on rentals"
  },
  {
    icon: Globe,
    title: "Golden Visa",
    description: "10-year residency with AED 2M+ investment"
  }
];

const services = [
  "Property search & shortlisting",
  "Site visits & virtual tours",
  "Legal due diligence",
  "Price negotiation",
  "Documentation assistance",
  "Post-sale property management",
  "Rental management services",
  "Resale assistance"
];

const DubaiRealEstate = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.stacorporate.com" },
      { "@type": "ListItem", "position": 2, "name": "Dubai Real Estate", "item": "https://www.stacorporate.com/dubai-real-estate" }
    ]
  };

  const realEstateServiceSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://www.stacorporate.com/dubai-real-estate#service",
    "name": "STA Corporate Solutions - Dubai Real Estate",
    "description": "Premium Dubai real estate services - luxury villas, apartments, penthouses, and off-plan investments. Expert assistance for Indian investors in Dubai property market.",
    "url": "https://www.stacorporate.com/dubai-real-estate",
    "areaServed": [
      { "@type": "City", "name": "Dubai" },
      { "@type": "Country", "name": "United Arab Emirates" }
    ],
    "serviceType": [
      "Luxury Property Sales",
      "Off-Plan Investments",
      "Property Management",
      "Investment Advisory"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Dubai Real Estate Investment | Luxury Villas & Apartments | STA Corporate Solutions</title>
        <meta name="description" content="Invest in Dubai luxury real estate - Villas, apartments, penthouses in Palm Jumeirah, Downtown Dubai, Dubai Marina. 100% freehold ownership, Golden Visa eligible. Expert guidance from India." />
        <meta name="keywords" content="dubai real estate, buy property dubai, dubai villa, dubai apartment, palm jumeirah property, dubai investment, golden visa dubai, dubai property from india" />
        <link rel="canonical" href="https://www.stacorporate.com/dubai-real-estate" />
        <meta property="og:title" content="Dubai Real Estate Investment | STA Corporate Solutions" />
        <meta property="og:description" content="Luxury Dubai properties - Villas, apartments, penthouses. 100% freehold, Golden Visa eligible. Expert guidance for Indian investors." />
        <meta property="og:url" content="https://www.stacorporate.com/dubai-real-estate" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(realEstateServiceSchema)}</script>
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
                  Your Gateway to Dubai Luxury Living
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                  Invest in <span className="text-secondary">Dubai</span> Real Estate
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                  Premium villas, apartments, and penthouses in Dubai's most sought-after locations. 
                  <strong className="text-secondary"> 100% freehold ownership</strong> for international investors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+919443033055">
                    <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
                      <Phone className="h-5 w-5" />
                      Enquire Now
                    </Button>
                  </a>
                  <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                    <Globe className="h-5 w-5" />
                    Virtual Tour
                  </Button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-primary-foreground/20">
                  {[
                    { value: "6-8%", label: "Rental Yield" },
                    { value: "100%", label: "Freehold" },
                    { value: "0%", label: "Property Tax" },
                    { value: "10yr", label: "Golden Visa" }
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
                  Why Invest in Dubai
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  The World's Most Dynamic Property Market
                </h2>
                <p className="text-lg text-muted-foreground">
                  Dubai offers unparalleled opportunities for property investors with tax-free returns, 
                  world-class infrastructure, and guaranteed ownership rights.
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

          {/* Property Types */}
          <AnimatedSection className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <Home className="h-4 w-4 mr-2" />
                  Property Portfolio
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Explore Premium Properties
                </h2>
                <p className="text-lg text-muted-foreground">
                  From beachfront villas to sky-high penthouses, find your perfect Dubai property
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {propertyTypes.map((property, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-border hover:border-accent overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                          <property.icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-bold text-foreground">{property.title}</h3>
                            <Badge variant="secondary" className="font-semibold">{property.price}</Badge>
                          </div>
                          <p className="text-muted-foreground mb-4">{property.description}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {property.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
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
                      alt="Luxury Dubai apartment interior" 
                      className="w-full h-full object-cover"
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
                    Every property we offer features premium finishes from renowned designers, 
                    smart home technology, and attention to every detail that defines luxury living.
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

          {/* Locations */}
          <AnimatedSection className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  Prime Locations
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Dubai's Most Prestigious Addresses
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {locations.map((location, index) => (
                  <Card key={index} className="group hover:shadow-xl hover:border-accent transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <MapPin className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-bold text-foreground mb-1">{location.name}</h3>
                      <p className="text-sm text-muted-foreground">{location.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Skyline Section */}
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
                  Golden Visa Through Property Investment
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Invest AED 2 million+ in Dubai real estate and secure a 10-year Golden Visa 
                  for you and your family. Live, work, and invest freely in the UAE.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+919443033055">
                    <Button size="lg" variant="secondary" className="gap-2 text-lg px-8">
                      <Phone className="h-5 w-5" />
                      Learn More: +91 94430 33055
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
                    Complete Property Services
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    From property search to post-purchase management, we handle everything 
                    so you can invest with confidence from India.
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
                      Why Choose STA Corporate Solutions?
                    </h3>
                    <ul className="space-y-4 text-left">
                      {[
                        "43+ years of trusted business relationships",
                        "Direct developer partnerships in Dubai",
                        "Transparent pricing with no hidden fees",
                        "Complete legal & documentation support",
                        "Dedicated relationship manager",
                        "Post-purchase property management"
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
                    Start Your Dubai Investment Journey
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Book a free consultation with our Dubai real estate experts. 
                    We'll help you find the perfect property matching your investment goals.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Free property consultation",
                      "Curated property shortlist within 48 hours",
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
