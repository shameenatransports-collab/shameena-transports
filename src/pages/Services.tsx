import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Truck, Package, Factory, Building2, Warehouse, CheckCircle } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const services = [
  {
    id: "full-load",
    icon: Truck,
    title: "Full Load Lorry Transport",
    description: "Complete truck booking for your exclusive cargo",
    features: [
      "Dedicated lorry for your shipment only",
      "Ideal for large volume goods (5-25 tons)",
      "Faster transit time with no intermediate stops",
      "Best for factory-to-factory or bulk movements",
      "Available in 20ft, 24ft, and multi-axle options",
    ],
  },
  {
    id: "part-load",
    icon: Package,
    title: "Part Load Transport",
    description: "Cost-effective shared transport solution",
    features: [
      "Share truck space with other shipments",
      "Economical for smaller cargo (100kg - 3 tons)",
      "Regular scheduled departures",
      "Ideal for SMEs and regular dispatches",
      "Consolidated loads for major routes",
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
      "Tiruppur-Coimbatore textile corridor experts",
      "Factory equipment relocation",
    ],
  },
  {
    id: "construction",
    icon: Building2,
    title: "Construction Material Transport",
    description: "Heavy-duty transport for building materials",
    features: [
      "Sand, cement, bricks transport",
      "Steel bars and TMT rods",
      "Heavy machinery and equipment",
      "Aggregates and stone materials",
      "Tipper and trailer services",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Goods Transport",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Shameena Transports"
    },
    "areaServed": {
      "@type": "State",
      "name": "Tamil Nadu"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Transport Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>Lorry Transport Services in Coimbatore | Full Load, Part Load - Shameena Transports</title>
        <meta name="description" content="Professional lorry transport services in Coimbatore & Tamil Nadu. Full Load, Part Load, Textile, Construction Material Transport. Call for instant quotes!" />
        <link rel="canonical" href="https://www.shameena.com/services" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Our Transport Services
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Comprehensive lorry and goods transport solutions for every business need in Tamil Nadu
              </p>
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
                    <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-accent" />
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
                    className={`bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 md:p-12 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="aspect-video bg-primary/5 rounded-lg flex items-center justify-center">
                      <service.icon className="h-24 w-24 text-primary/30" />
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
