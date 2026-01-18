import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  CheckCircle,
  MapPin,
  Home,
  Building,
  Hammer,
  TreeDeciduous,
  Shield,
  FileCheck,
  Users
} from "lucide-react";

const services = [
  {
    icon: TreeDeciduous,
    title: "Land Sales",
    description: "Agricultural, residential, and commercial plots",
    features: [
      "DTCP approved layouts",
      "Clear title verification",
      "Legal documentation",
      "Survey & boundary marking",
      "Registration assistance"
    ]
  },
  {
    icon: Hammer,
    title: "Construction",
    description: "End-to-end construction services",
    features: [
      "Residential buildings",
      "Commercial complexes",
      "Industrial structures",
      "Renovation & remodeling",
      "Interior design"
    ]
  },
  {
    icon: Home,
    title: "Ready to Move Properties",
    description: "Verified move-in ready homes",
    features: [
      "Independent houses",
      "Apartments & flats",
      "Villas & bungalows",
      "Gated communities",
      "Resale properties"
    ]
  }
];

const locations = [
  "Coimbatore City",
  "Saravanampatti",
  "Ganapathy",
  "Peelamedu",
  "Singanallur",
  "Vadavalli",
  "Thudiyalur",
  "Kalapatti",
  "Sulur",
  "Mettupalayam Road",
  "Avinashi Road",
  "Pollachi Road"
];

const features = [
  {
    icon: Shield,
    title: "Verified Properties",
    description: "All properties legally verified with clear titles"
  },
  {
    icon: FileCheck,
    title: "Complete Documentation",
    description: "End-to-end documentation and registration support"
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Experienced team to guide your investment decisions"
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "Properties in high-growth areas of Coimbatore"
  }
];

const RealEstate = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.staenterprises.com" },
      { "@type": "ListItem", "position": 2, "name": "Real Estate", "item": "https://www.staenterprises.com/real-estate" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Real Estate Coimbatore | Land, Construction, Properties | STA Enterprises</title>
        <meta name="description" content="STA Enterprises Real Estate - Land sales, construction, ready to move properties in Coimbatore. Verified properties, lowest commission, complete legal support." />
        <link rel="canonical" href="https://www.staenterprises.com/real-estate" />
        <meta property="og:title" content="Real Estate Coimbatore | STA Enterprises" />
        <meta property="og:description" content="Land, construction, and ready properties in Coimbatore. Verified titles, lowest commission." />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Layout>
        <main>
          {/* Hero Section */}
          <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-accent text-accent-foreground">
                  Coimbatore's Trusted Real Estate Partner
                </Badge>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                  Real Estate Services
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Land sales, construction, and ready-to-move properties in Coimbatore. 
                  Lowest commission rates with complete legal support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+919443033055">
                    <Button size="lg" variant="secondary" className="gap-2">
                      <Phone className="h-5 w-5" />
                      Enquire Now: +91 94430 33055
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center border-border hover:border-accent transition-colors">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="h-7 w-7 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Real Estate Services
                </h2>
                <p className="text-muted-foreground text-lg">
                  Complete real estate solutions in Coimbatore region
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                        <service.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
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

          {/* Service Areas */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Areas We Serve in Coimbatore
                </h2>
                <p className="text-muted-foreground text-lg">
                  Properties available across prime locations
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                    <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground">{location}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Why STA Enterprises for Real Estate?
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Lowest brokerage in Coimbatore",
                    "100% verified properties",
                    "Legal due diligence included",
                    "No hidden charges",
                    "Registration assistance",
                    "Home loan support",
                    "Post-sale support",
                    "Transparent dealings"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg">
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

export default RealEstate;
