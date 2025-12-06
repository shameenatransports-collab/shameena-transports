import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Truck, MapPin, Shield, Gauge } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/home/CTASection";
import fleetBg from "@/assets/fleet-bg.jpg";

const fleetData = [
  {
    type: "Multi-Axle Trailers",
    capacity: "20-25 Tons",
    count: "8+",
    ideal: "Heavy machinery, ODC cargo",
    features: ["Heavy load specialists", "Industrial equipment", "Construction materials"],
  },
  {
    type: "Open Body Lorries",
    capacity: "10-20 Tons",
    count: "10+",
    ideal: "Construction materials, bulk goods",
    features: ["Easy loading/unloading", "Sand & gravel", "Steel & TMT bars"],
  },
];

const features = [
  {
    icon: MapPin,
    title: "GPS Enabled",
    description: "Real-time tracking on all vehicles",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete cargo protection coverage",
  },
  {
    icon: Gauge,
    title: "Well Maintained",
    description: "Regular servicing and safety checks",
  },
  {
    icon: Truck,
    title: "Modern Fleet",
    description: "Vehicles less than 5 years old",
  },
];

const Fleet = () => {
  return (
    <>
      <Helmet>
        <title>Our Fleet | GPS Enabled Lorries & Trucks - Shameena Transports Coimbatore</title>
        <meta name="description" content="50+ modern GPS-enabled lorries and trucks. 20ft, 24ft containers, multi-axle trailers. Well-maintained, insured fleet for goods transport in Tamil Nadu." />
        <link rel="canonical" href="https://www.shameena.com/fleet" />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${fleetBg})` }}
          >
            <div className="absolute inset-0 bg-primary/90" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Our Modern Fleet
              </h1>
              <p className="text-lg text-primary-foreground/90">
                50+ GPS-enabled, well-maintained lorries ready to transport your goods across Tamil Nadu
              </p>
            </div>
          </div>
        </section>

        {/* Fleet Features */}
        <section className="py-8 sm:py-12 bg-accent">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-foreground">{feature.title}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground hidden sm:block">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Types */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Vehicle Types Available
              </h2>
              <p className="text-muted-foreground text-lg">
                The right vehicle for every type of cargo and route
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fleetData.map((vehicle, index) => (
                <Card key={index} className="border-border hover:border-accent transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                        <Truck className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <span className="text-2xl font-bold text-accent">{vehicle.count}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{vehicle.type}</h3>
                    <div className="text-accent font-medium mb-3">Capacity: {vehicle.capacity}</div>
                    <p className="text-muted-foreground text-sm mb-4">{vehicle.ideal}</p>
                    <ul className="space-y-2">
                      {vehicle.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
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

        {/* Total Fleet Stats */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Fleet at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary">50+</div>
                <div className="text-primary-foreground/80 mt-2">Total Vehicles</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary">100%</div>
                <div className="text-primary-foreground/80 mt-2">GPS Enabled</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary">100%</div>
                <div className="text-primary-foreground/80 mt-2">Insured</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary">24/7</div>
                <div className="text-primary-foreground/80 mt-2">Available</div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default Fleet;
