import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Link } from "react-router-dom";
import { 
  Phone, 
  CheckCircle,
  Truck,
  Package,
  Factory,
  Building2,
  Warehouse,
  ArrowRight,
  Clock,
  Shield,
  MapPin,
  Gauge,
  Star,
  Route
} from "lucide-react";
import fleetBg from "@/assets/fleet-bg.jpg";

const services = [
  {
    icon: Truck,
    title: "Full Load Transport",
    description: "Dedicated truck for your exclusive cargo across Tamil Nadu. Complete control, faster delivery with no intermediate stops.",
    isPrimary: true,
    features: ["Dedicated lorry", "Direct delivery", "GPS tracking"],
    link: "/transport/full-load"
  },
  {
    icon: Package,
    title: "Return Loads",
    description: "Cost-effective transport when trucks are returning. Save up to 40% on select routes. Subject to availability.",
    features: ["40% savings", "Flexible timing", "Multiple routes"],
    link: "/return-loads"
  },
  {
    icon: Factory,
    title: "Textile & Industrial Cargo",
    description: "Specialized handling for textile bales and industrial equipment from Tiruppur and Coimbatore.",
    features: ["Expert handling", "Textile specialist", "Industrial cargo"],
    link: "/transport/textile"
  },
  {
    icon: Building2,
    title: "Construction Material",
    description: "Heavy-duty transport for sand, cement, steel, and building materials across Tamil Nadu.",
    features: ["Heavy loads", "Tipper trucks", "Material safety"],
    link: "/transport/construction"
  },
  {
    icon: Warehouse,
    title: "Factory Shifting",
    description: "End-to-end relocation services for factories and warehouses with complete project management.",
    features: ["Full relocation", "Professional packing", "Insurance coverage"],
    link: "/transport/factory-shifting"
  }
];

const stats = [
  { value: "43+", label: "Years Experience", icon: Clock },
  { value: "12+", label: "Lorries Fleet", icon: Truck },
  { value: "10K+", label: "Deliveries", icon: Package },
  { value: "24/7", label: "Support", icon: Shield }
];

const areas = [
  "Coimbatore", "Chennai", "Tiruppur", "Erode", "Salem", 
  "Madurai", "Trichy", "Karur", "Namakkal", "Dindigul"
];

const whyChooseUs = [
  { text: "43+ years of trusted service", icon: Star },
  { text: "Own fleet of 12+ lorries", icon: Truck },
  { text: "GPS tracking available", icon: MapPin },
  { text: "Fully insured transport", icon: Shield },
  { text: "24/7 customer support", icon: Clock },
  { text: "Competitive pricing", icon: Gauge },
  { text: "On-time delivery guarantee", icon: Route },
  { text: "Expert handling of cargo", icon: Package }
];

const Transportation = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.stacorporate.com" },
      { "@type": "ListItem", "position": 2, "name": "Transportation", "item": "https://www.stacorporate.com/transportation" }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Full Load Transport Tamil Nadu",
    "provider": {
      "@type": "LocalBusiness",
      "name": "STA Corporate Solutions"
    },
    "areaServed": { "@type": "State", "name": "Tamil Nadu" },
    "description": "Full Load dedicated lorry transport across Tamil Nadu since 1982."
  };

  return (
    <>
      <Helmet>
        <title>Transportation Services | Full Load Lorry Tamil Nadu | STA Corporate Solutions</title>
        <meta name="description" content="STA Corporate Solutions Transportation - Full Load lorry service across Tamil Nadu since 1982. Coimbatore, Chennai, Tiruppur, Salem, Madurai. 24/7 service." />
        <link rel="canonical" href="https://www.stacorporate.com/transportation" />
        <meta property="og:title" content="Transportation Services | STA Corporate Solutions" />
        <meta property="og:description" content="Full Load transport across Tamil Nadu. 43+ years experience. 24/7 service." />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <Layout>
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[80vh] flex items-center">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${fleetBg})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
            </div>
            <div className="container mx-auto px-4 relative z-10 py-20">
              <div className="max-w-3xl">
                <Badge className="mb-6 bg-secondary text-secondary-foreground text-sm px-4 py-2">
                  <Clock className="h-4 w-4 mr-2" />
                  Since 1982 – 43 Years of Excellence
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                  Transportation Services
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                  Full Load lorry transport across Tamil Nadu. <strong className="text-secondary">Dedicated trucks</strong>, complete control, 
                  and safe delivery with our own fleet.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+919443033055">
                    <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
                      <Phone className="h-5 w-5" />
                      Book Now: +91 94430 33055
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-10">
              <div className="container mx-auto px-4">
                <div className="bg-card/95 backdrop-blur-md rounded-t-2xl shadow-2xl p-6 md:p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent/10 flex items-center justify-center">
                          <stat.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <AnimatedSection className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="outline" className="mb-4">
                  <Truck className="h-4 w-4 mr-2" />
                  Our Services
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Complete Transport Solutions
                </h2>
                <p className="text-lg text-muted-foreground">
                  From full load transport to specialized cargo handling, we've got you covered
                </p>
              </div>

              {/* Primary Service */}
              <div className="max-w-4xl mx-auto mb-12">
                {services.filter(s => s.isPrimary).map((service, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 border-accent/30 hover:border-accent bg-gradient-to-br from-accent/5 via-transparent to-primary/5 overflow-hidden">
                    <CardContent className="p-8 md:p-10">
                      <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                          <service.icon className="h-10 w-10 text-accent-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                          <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                          <div className="flex flex-wrap gap-3">
                            {service.features.map((feature, idx) => (
                              <Badge key={idx} variant="secondary" className="px-4 py-2 text-sm">
                                <CheckCircle className="h-4 w-4 mr-2" />
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Other Services */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.filter(s => !s.isPrimary).map((service, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-border hover:border-accent overflow-hidden">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 group-hover:from-accent group-hover:to-accent/70 transition-all duration-500">
                        <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Service Areas */}
          <AnimatedSection className="py-20 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <Badge variant="outline" className="mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  Coverage
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Service Areas
                </h2>
                <p className="text-lg text-muted-foreground">
                  Covering all major cities across Tamil Nadu
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {areas.map((area, index) => (
                  <div key={index} className="group flex items-center gap-2 px-6 py-3 bg-background rounded-full border border-border hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <MapPin className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-foreground font-medium">{area}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link to="/service-areas">
                  <Button variant="outline" size="lg" className="gap-2">
                    View All Areas <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
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
                    Why Choose STA Corporate Solutions?
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="group flex items-center gap-4 p-6 bg-muted rounded-xl hover:shadow-lg hover:bg-accent/5 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                        <item.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <span className="text-lg text-foreground font-medium">{item.text}</span>
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

export default Transportation;
