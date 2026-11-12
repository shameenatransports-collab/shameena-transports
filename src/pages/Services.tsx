import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Truck, Package, Factory, Building2, Warehouse, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import { Badge } from "@/components/ui/badge";
import {
  localBusinessSchema,
  transportBusinessSchema,
  fullLoadServiceSchema,
  createBreadcrumbSchema,
} from "@/lib/structured-data";

const services = [
  {
    id: "full-load",
    icon: Truck,
    title: "Full Load Lorry Transport",
    description: "Dedicated truck exclusively for your cargo - our core service",
    isPrimary: true,
    features: [
      "Dedicated lorry for your shipment only",
      "Complete control over pickup and delivery time",
      "Permitted load confirmed for the allotted vehicle",
      "Faster transit with no intermediate stops",
      "Open-body lorry, sheeted where needed",
      "Best for factory-to-factory or bulk movements",
    ],
  },
  {
    id: "textile",
    icon: Factory,
    title: "Textile & Industrial Cargo",
    description: "Specialized handling for industrial goods",
    features: [
      "Textile bales and yarn transport",
      "Industrial machinery movement",
      "Careful handling of delicate equipment",
      "Coimbatore textile and engineering cargo experts",
      "Factory equipment relocation",
    ],
  },
  {
    id: "construction",
    icon: Building2,
    title: "Construction Material Transport",
    description: "Heavy-duty transport for building materials",
    features: [
      "Cement, bricks and bagged material transport",
      "Steel bars and TMT rods",
            "Open-body lorry, site-direct delivery",
    ],
  },
  {
    id: "shifting",
    icon: Warehouse,
    title: "Factory & Warehouse Shifting",
    description: "Complete relocation services",
    features: [
      "End-to-end factory shifting",
      "Warehouse inventory movement",
      "Office and commercial relocation",
      "Professional packing services available",
      "Dismantling and reassembly coordination",
    ],
  },
];

const Services = () => {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://sta-corporate.in" },
    { name: "Transportation Services", url: "https://sta-corporate.in/services" },
  ]);

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "STA Corporate Solutions Transport Services",
    "description": "Full Load transport services in Tamil Nadu",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "@id": `https://sta-corporate.in/services#${service.id}`,
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": "STA Corporate Solutions"
        }
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Full Load Lorry Transport Services | STA Corporate Solutions Tamil Nadu</title>
        <meta name="description" content="Full Load dedicated truck transport in Coimbatore district. Textile, Construction Material Transport. Coimbatore. Since 1982. Call for quotes!" />
        <meta name="keywords" content="full load lorry service, dedicated truck booking, lorry transport coimbatore, goods transport coimbatore" />
        <link rel="canonical" href="https://sta-corporate.in/services" />
        <meta property="og:title" content="Full Load Transport Services | STA Corporate Solutions" />
        <meta property="og:description" content="Dedicated Full Load transport. Coimbatore's lorry transport since 1982." />
        <meta property="og:url" content="https://sta-corporate.in/services" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(transportBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(fullLoadServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceListSchema)}</script>
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">Since 1982 – 44 Years of Heritage</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Full Load Transport Services
              </h1>
              <p className="text-lg text-primary-foreground/90">
                <strong>Full Load</strong> – Your dedicated truck for complete cargo control.</p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${service.isPrimary ? 'bg-accent' : 'bg-accent/10'}`}>
                        <service.icon className={`h-8 w-8 ${service.isPrimary ? 'text-accent-foreground' : 'text-accent'}`} />
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`bg-gradient-to-br ${service.isPrimary ? 'from-accent/20 to-primary/10' : 'from-primary/10 to-accent/10'} rounded-lg p-8 md:p-12 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="aspect-video bg-primary/5 rounded-lg flex items-center justify-center">
                      <service.icon className={`h-24 w-24 ${service.isPrimary ? 'text-accent/50' : 'text-primary/30'}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default Services;