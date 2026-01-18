import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  CheckCircle, 
  Shield, 
  Award, 
  Truck,
  Package,
  Scale,
  FileCheck
} from "lucide-react";

const products = [
  {
    name: "TMT Bars / Rods",
    sizes: "8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm",
    grade: "Fe 415, Fe 500, Fe 550D, Fe 600",
    description: "High-strength reinforcement bars for construction"
  },
  {
    name: "Wire Rod Coils",
    sizes: "5.5mm, 6mm, 8mm, 10mm",
    grade: "IS 2062, IS 1786",
    description: "Premium quality wire rods for manufacturing"
  },
  {
    name: "MS Rounds",
    sizes: "10mm to 150mm diameter",
    grade: "IS 2062 E250, E350",
    description: "Mild steel round bars for various applications"
  },
  {
    name: "Angles",
    sizes: "25x25 to 200x200mm",
    grade: "IS 2062",
    description: "L-shaped structural steel for frameworks"
  },
  {
    name: "Channels",
    sizes: "75mm to 400mm",
    grade: "IS 2062",
    description: "C-shaped sections for structural support"
  },
  {
    name: "Beams (I-Beam, H-Beam)",
    sizes: "100mm to 600mm",
    grade: "IS 2062",
    description: "Heavy-duty structural beams for construction"
  },
  {
    name: "Flat Bars",
    sizes: "20mm to 200mm width",
    grade: "IS 2062",
    description: "Flat rectangular cross-section steel"
  },
  {
    name: "Square Bars",
    sizes: "10mm to 100mm",
    grade: "IS 2062",
    description: "Square cross-section steel bars"
  }
];

const features = [
  {
    icon: Shield,
    title: "ISO Certified Quality",
    description: "All materials meet international quality standards with proper certification"
  },
  {
    icon: Scale,
    title: "Competitive Pricing",
    description: "Lowest commission rates in the Indian market with transparent pricing"
  },
  {
    icon: Truck,
    title: "Direct Delivery",
    description: "Integrated logistics through our transport division for seamless delivery"
  },
  {
    icon: FileCheck,
    title: "Mill Test Certificates",
    description: "Complete documentation including MTC for quality assurance"
  }
];

const Trading = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.staenterprises.com" },
      { "@type": "ListItem", "position": 2, "name": "Trading", "item": "https://www.staenterprises.com/trading" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Iron & Steel Trading | TMT Rods, Wire Coils | STA Enterprises</title>
        <meta name="description" content="STA Enterprises - Your trusted iron and steel trading partner. TMT bars, wire rod coils, angles, beams, rounds. ISO certified quality. Lowest commission in India." />
        <link rel="canonical" href="https://www.staenterprises.com/trading" />
        <meta property="og:title" content="Iron & Steel Trading | STA Enterprises" />
        <meta property="og:description" content="Premium quality iron and steel materials. TMT rods, wire coils, beams, angles. ISO certified. Lowest commission rates." />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Layout>
        <main>
          {/* Hero Section */}
          <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-4 bg-accent text-accent-foreground">
                  ISO Certified Quality Materials
                </Badge>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                  Iron & Steel Trading
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Premium quality raw materials at the lowest commission rates in the Indian market. 
                  Direct from mills with complete documentation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+919443033055">
                    <Button size="lg" variant="secondary" className="gap-2">
                      <Phone className="h-5 w-5" />
                      Get Quote: +91 94430 33055
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

          {/* Products Grid */}
          <section className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Product Range
                </h2>
                <p className="text-muted-foreground text-lg">
                  Complete range of iron and steel materials for construction and manufacturing
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                        <Package className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-start gap-2">
                          <span className="font-medium text-foreground">Sizes:</span>
                          <span className="text-muted-foreground">{product.sizes}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-medium text-foreground">Grade:</span>
                          <span className="text-muted-foreground">{product.grade}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Why Choose STA Enterprises for Trading?
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Direct mill sourcing - No middlemen",
                    "Lowest commission rates in India",
                    "ISO certified quality materials",
                    "Mill Test Certificates for all products",
                    "Integrated transport for delivery",
                    "Credit facilities available",
                    "Bulk order discounts",
                    "Technical support & consultation"
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

export default Trading;
