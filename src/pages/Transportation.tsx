import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  MapPin
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Full Load Transport",
    description: "Dedicated truck for your exclusive cargo across Tamil Nadu. Complete control, faster delivery with no intermediate stops.",
    isPrimary: true,
    link: "/transport/full-load"
  },
  {
    icon: Package,
    title: "Return Loads",
    description: "Cost-effective transport when trucks are returning. Save up to 40% on select routes. Subject to availability.",
    link: "/return-loads"
  },
  {
    icon: Factory,
    title: "Textile & Industrial Cargo",
    description: "Specialized handling for textile bales and industrial equipment from Tiruppur and Coimbatore.",
    link: "/transport/textile"
  },
  {
    icon: Building2,
    title: "Construction Material",
    description: "Heavy-duty transport for sand, cement, steel, and building materials across Tamil Nadu.",
    link: "/transport/construction"
  },
  {
    icon: Warehouse,
    title: "Factory Shifting",
    description: "End-to-end relocation services for factories and warehouses with complete project management.",
    link: "/transport/factory-shifting"
  }
];

const stats = [
  { value: "43+", label: "Years Experience" },
  { value: "12+", label: "Lorries Fleet" },
  { value: "10K+", label: "Deliveries" },
  { value: "24/7", label: "Support" }
];

const areas = [
  "Coimbatore", "Chennai", "Tiruppur", "Erode", "Salem", 
  "Madurai", "Trichy", "Karur", "Namakkal", "Dindigul"
];

const Transportation = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.staenterprises.com" },
      { "@type": "ListItem", "position": 2, "name": "Transportation", "item": "https://www.staenterprises.com/transportation" }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Full Load Transport Tamil Nadu",
    "provider": {
      "@type": "LocalBusiness",
      "name": "STA Enterprises"
    },
    "areaServed": { "@type": "State", "name": "Tamil Nadu" },
    "description": "Full Load dedicated lorry transport across Tamil Nadu since 1982."
  };

  return (
    <>
      <Helmet>
        <title>Transportation Services | Full Load Lorry Tamil Nadu | STA Enterprises</title>
        <meta name="description" content="STA Enterprises Transportation - Full Load lorry service across Tamil Nadu since 1982. Coimbatore, Chennai, Tiruppur, Salem, Madurai. 24/7 service." />
        <link rel="canonical" href="https://www.staenterprises.com/transportation" />
        <meta property="og:title" content="Transportation Services | STA Enterprises" />
        <meta property="og:description" content="Full Load transport across Tamil Nadu. 43+ years experience. 24/7 service." />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <Layout>
        <main>
          {/* Hero Section */}
          <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-accent text-accent-foreground">
                  Since 1982 – 43 Years of Heritage
                </Badge>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                  Transportation Services
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Full Load lorry transport across Tamil Nadu. Dedicated trucks, complete control, 
                  and safe delivery since 1982.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+919443033055">
                    <Button size="lg" variant="secondary" className="gap-2">
                      <Phone className="h-5 w-5" />
                      Book Now: +91 94430 33055
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="container mx-auto px-4 mt-12">
              <div className="max-w-3xl mx-auto">
                <div className="grid grid-cols-4 gap-4 bg-card/10 backdrop-blur-sm rounded-xl p-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-secondary">{stat.value}</div>
                      <div className="text-xs md:text-sm text-primary-foreground/80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Transport Services
                </h2>
                <p className="text-muted-foreground text-lg">
                  Complete logistics solutions for all your cargo needs
                </p>
              </div>

              {/* Primary Service */}
              <div className="max-w-3xl mx-auto mb-8">
                {services.filter(s => s.isPrimary).map((service, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-accent/30 hover:border-accent bg-gradient-to-br from-accent/5 to-transparent">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-lg bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="h-8 w-8 text-accent-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                          <p className="text-muted-foreground mb-4">{service.description}</p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary">Dedicated Truck</Badge>
                            <Badge variant="secondary">24/7 Available</Badge>
                            <Badge variant="secondary">All Tamil Nadu</Badge>
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
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                        <service.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Service Areas
                </h2>
                <p className="text-muted-foreground text-lg">
                  Covering all major cities across Tamil Nadu
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {areas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-foreground">{area}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link to="/service-areas">
                  <Button variant="outline" className="gap-2">
                    View All Areas <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Why Choose STA Enterprises for Transport?
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "43+ years of trusted service",
                    "Own fleet of 12+ lorries",
                    "GPS tracking available",
                    "Fully insured transport",
                    "24/7 customer support",
                    "Competitive pricing",
                    "On-time delivery guarantee",
                    "Expert handling of cargo"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
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

export default Transportation;
