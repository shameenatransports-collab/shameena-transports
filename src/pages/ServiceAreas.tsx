import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/home/CTASection";

const majorAreas = [
  {
    id: "coimbatore",
    name: "Coimbatore",
    description: "Our headquarters and primary service hub. Complete lorry transport coverage across Coimbatore district including Avinashi, Pollachi, Mettupalayam, and surrounding areas.",
    routes: ["Coimbatore to Chennai", "Coimbatore to Bangalore", "Coimbatore to Tiruppur"],
  },
  {
    id: "tiruppur",
    name: "Tiruppur",
    description: "Specialized textile transport services for Tiruppur's garment industry. Daily services to all major textile export hubs.",
    routes: ["Tiruppur to Coimbatore", "Tiruppur to Chennai Port", "Tiruppur to Tuticorin"],
  },
  {
    id: "erode",
    name: "Erode",
    description: "Industrial transport covering Erode's textile and turmeric trading zones. Regular services to all Tamil Nadu destinations.",
    routes: ["Erode to Coimbatore", "Erode to Salem", "Erode to Chennai"],
  },
  {
    id: "salem",
    name: "Salem",
    description: "Steel and construction material transport hub. Serving Salem's industrial corridors and surrounding districts.",
    routes: ["Salem to Chennai", "Salem to Coimbatore", "Salem to Bangalore"],
  },
  {
    id: "chennai",
    name: "Chennai",
    description: "Port connectivity and metro distribution. Regular full load services between Chennai and all Tamil Nadu cities.",
    routes: ["Chennai to Coimbatore", "Chennai Port Services", "Chennai to Madurai"],
  },
  {
    id: "madurai",
    name: "Madurai",
    description: "Southern Tamil Nadu hub covering Madurai, Dindigul, and Theni districts. Agricultural and industrial cargo specialists.",
    routes: ["Madurai to Chennai", "Madurai to Coimbatore", "Madurai to Tuticorin"],
  },
  {
    id: "trichy",
    name: "Tiruchirappalli (Trichy)",
    description: "Central Tamil Nadu coverage including Trichy, Karur, and Perambalur. Strategic location for state-wide distribution.",
    routes: ["Trichy to Chennai", "Trichy to Coimbatore", "Trichy to Madurai"],
  },
  {
    id: "karur",
    name: "Karur",
    description: "Textile transport for Karur's home textile industry. Regular services to export hubs and domestic markets.",
    routes: ["Karur to Chennai", "Karur to Tuticorin Port", "Karur to Coimbatore"],
  },
];

const otherAreas = [
  "Namakkal", "Dindigul", "Theni", "Virudhunagar", "Sivakasi",
  "Nagercoil", "Kanyakumari", "Tuticorin", "Thanjavur", "Cuddalore",
  "Vellore", "Krishnagiri", "Dharmapuri", "Hosur", "Ooty",
];

const ServiceAreas = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Lorry Transport Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Shameena Transports",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "areaServed": majorAreas.map(area => ({
      "@type": "City",
      "name": area.name,
      "containedInPlace": {
        "@type": "State",
        "name": "Tamil Nadu"
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Service Areas | Lorry Transport in Coimbatore, Chennai, Madurai - All Tamil Nadu</title>
        <meta name="description" content="Lorry transport services across Tamil Nadu - Coimbatore, Tiruppur, Chennai, Salem, Madurai, Trichy, Erode, Karur. Interstate routes to Karnataka, Kerala, AP." />
        <link rel="canonical" href="https://www.shameena.com/service-areas" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Service Areas in Tamil Nadu
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Comprehensive lorry transport coverage across all major cities and districts in Tamil Nadu
              </p>
            </div>
          </div>
        </section>

        {/* Major Service Areas */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Major Service Hubs
              </h2>
              <p className="text-muted-foreground text-lg">
                Strong presence in all key Tamil Nadu cities with daily departures
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {majorAreas.map((area) => (
                <Card key={area.id} id={area.id} className="border-border hover:border-accent transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Lorry Service in {area.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">{area.description}</p>
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-foreground">Popular Routes:</div>
                          <div className="flex flex-wrap gap-2">
                            {area.routes.map((route, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                              >
                                {route}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Other Areas */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Other Service Locations
              </h2>
              <p className="text-muted-foreground text-lg">
                We also serve these cities and towns across Tamil Nadu
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {otherAreas.map((area, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-card border border-border text-foreground hover:border-accent transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Interstate Routes */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Interstate Transport Routes
              </h2>
              <p className="text-muted-foreground text-lg">
                Beyond Tamil Nadu – we connect you to major cities across South India
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { state: "Karnataka", cities: "Bangalore, Mysore, Mangalore" },
                { state: "Kerala", cities: "Kochi, Trivandrum, Kozhikode" },
                { state: "Andhra Pradesh", cities: "Vijayawada, Visakhapatnam, Tirupati" },
                { state: "Telangana", cities: "Hyderabad, Warangal, Nizamabad" },
              ].map((route, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-primary text-primary-foreground text-center"
                >
                  <div className="text-xl font-bold mb-2">{route.state}</div>
                  <div className="text-sm text-primary-foreground/80">{route.cities}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a href="tel:+919876543210">
                <Button variant="default" size="lg" className="gap-2">
                  <Phone className="h-5 w-5" />
                  Call for Route Availability
                </Button>
              </a>
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default ServiceAreas;
