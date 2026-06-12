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
import { GetQuoteModal } from "@/components/transportation/GetQuoteModal";
import { LeadEnquiryForm } from "@/components/lead/LeadEnquiryForm";
import { localBusinessSchema, transportBusinessSchema, transportServiceSchema } from "@/lib/structured-data";

const services = [
  {
    icon: Truck,
    title: "Full Load Transport",
    description: "Dedicated truck for your exclusive cargo across Tamil Nadu. Complete control, faster delivery with no intermediate stops.",
    isPrimary: true,
    features: ["Dedicated lorry", "Direct delivery", "Experienced handling"],
    link: "/transport/full-load"
  },
  {
    icon: Package,
    title: "Return Loads",
    description: "Cost-effective transport when trucks are returning on matching routes. Subject to route availability.",
    features: ["Route-based pricing", "Flexible timing", "Subject to availability"],
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
  { value: "FTL", label: "Full Load Focus", icon: Package },
  { value: "TN", label: "Route Expertise", icon: Shield }
];

const areas = [
  "Coimbatore", "Chennai", "Tiruppur", "Erode", "Salem", 
  "Madurai", "Trichy", "Karur", "Namakkal", "Dindigul"
];

const whyChooseUs = [
  { text: "43+ years of trusted service", icon: Star },
  { text: "Own fleet of 12+ lorries", icon: Truck },
  { text: "Tamil Nadu route expertise", icon: MapPin },
  { text: "Fully insured transport", icon: Shield },
  { text: "Responsive customer support", icon: Clock },
  { text: "Competitive pricing", icon: Gauge },
  { text: "Route-planned delivery coordination", icon: Route },
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

  return (
    <>
      <Helmet>
        <title>Transportation Services | Full Load Lorry Tamil Nadu | STA Corporate Solutions</title>
        <meta name="description" content="STA Corporate Solutions Transportation - Full Load lorry service across Tamil Nadu since 1982. Coimbatore, Chennai, Tiruppur, Salem, Madurai." />
        <link rel="canonical" href="https://www.stacorporate.com/transportation" />
        <meta property="og:title" content="Transportation Services | STA Corporate Solutions" />
        <meta property="og:description" content="Full Load transport across Tamil Nadu. 43+ years experience from Coimbatore." />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(transportBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(transportServiceSchema)}</script>
      </Helmet>
      <Layout>
        <main>
          {/* Hero Section */}
          <section className="relative isolate min-h-[88svh] flex items-center overflow-hidden">
            <div
              className="absolute inset-0 -z-10 bg-cover bg-center"
              style={{ backgroundImage: `url(${fleetBg})` }}
            />
            <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/90 via-primary/85 to-primary/95" />
            <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary-glow)/0.3),_transparent_60%)]" />

            <div className="container mx-auto px-4 pt-32 pb-44 md:pt-40 md:pb-52 relative">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background text-[11px] font-bold tracking-[0.18em] uppercase text-primary shadow-xl ring-1 ring-primary-foreground/40 mb-8">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Logistics · Since 1982
                </div>
                <h1 className="text-display-2xl text-primary-foreground mb-6">
                  Transportation
                  <br />
                  <span className="bg-gradient-to-r from-secondary via-secondary to-primary-foreground bg-clip-text text-transparent">
                    across Tamil Nadu.
                  </span>
                </h1>
                <p className="text-headline text-primary-foreground/85 max-w-2xl mb-10">
                  Full Load lorry transport with our own fleet of 12+ vehicles. Dedicated trucks,
                  complete control, disciplined route coordination.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <GetQuoteModal />
                  <a href="tel:+919443033055">
                    <Button size="lg" className="rounded-full px-7 h-12 gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-[14px] font-medium shadow-xl ease-apple">
                      <Phone className="h-4 w-4" />
                      +91 94430 33055
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Glass stats strip */}
            <div className="absolute bottom-0 left-0 right-0 z-10 pb-6">
              <div className="container mx-auto px-4">
                <div className="glass rounded-2xl p-5 md:p-7">
                  <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/40">
                    {stats.map((stat, index) => (
                      <div key={index} className="px-4 md:px-6 first:pl-0">
                        <div className="flex items-center gap-2 mb-2">
                          <stat.icon className="h-4 w-4 text-secondary" />
                          <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-muted-foreground">{stat.label}</span>
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-foreground tabular-nums tracking-tight">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <AnimatedSection className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl">
                <LeadEnquiryForm />
              </div>
            </div>
          </AnimatedSection>

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
