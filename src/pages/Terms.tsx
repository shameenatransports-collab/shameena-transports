import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shameena.com" },
      { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://www.shameena.com/terms" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Terms of Service | Shameena Transports - Transport Terms & Conditions</title>
        <meta name="description" content="Terms of Service for Shameena Transports. Read our transport terms, conditions, liability, and booking policies for Full Load and Return Load services." />
        <link rel="canonical" href="https://www.shameena.com/terms" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Terms of Service
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Introduction */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using the services of Shameena Transports ("Company", "we", "our"), 
                    you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                    please do not use our services.
                  </p>
                </CardContent>
              </Card>

              {/* Services */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Services</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Shameena Transports provides the following transport services:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li><strong>Full Load Transport:</strong> Dedicated truck booking for exclusive cargo transport</li>
                    <li><strong>Return Load Transport:</strong> Cost-effective transport on available return routes (subject to availability)</li>
                    <li><strong>Specialized Cargo:</strong> Textile, industrial, and construction material transport</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Booking */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Booking & Confirmation</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                    <li>Bookings are confirmed upon receipt of agreed advance payment</li>
                    <li>Return Load availability is subject to current schedules and cannot be guaranteed</li>
                    <li>Accurate pickup and delivery addresses must be provided at booking</li>
                    <li>Changes to booking must be communicated at least 24 hours in advance</li>
                    <li>We reserve the right to refuse bookings at our discretion</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Customer Responsibilities */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Customer Responsibilities</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                    <li>Provide accurate description and weight of goods</li>
                    <li>Ensure goods are properly packed and ready for loading</li>
                    <li>Do not ship prohibited, illegal, or hazardous materials without disclosure</li>
                    <li>Be present or have an authorized representative at pickup and delivery</li>
                    <li>Provide clear loading/unloading access for vehicles</li>
                    <li>Obtain necessary permits for restricted goods</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Pricing & Payment</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                    <li>Prices are quoted based on distance, weight, and vehicle type</li>
                    <li>Return Load prices are lower but depend on route availability</li>
                    <li>Additional charges may apply for waiting time, special handling, or route deviations</li>
                    <li>Payment modes: Cash, UPI, Bank Transfer</li>
                    <li>Advance payment required for booking confirmation</li>
                    <li>Balance payment due upon delivery</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Liability */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Liability & Insurance</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our liability is limited to the following:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                    <li>We take reasonable care in handling and transporting goods</li>
                    <li>Liability for loss or damage is limited to the declared value of goods</li>
                    <li>We are not liable for delays due to weather, road conditions, strikes, or force majeure</li>
                    <li>Customers are advised to obtain their own cargo insurance for high-value goods</li>
                    <li>Claims must be reported within 24 hours of delivery with photographic evidence</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Cancellation */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Cancellation Policy</h2>
                  <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                    <li><strong>48+ hours before pickup:</strong> Full refund minus processing fee</li>
                    <li><strong>24-48 hours before pickup:</strong> 50% refund</li>
                    <li><strong>Less than 24 hours:</strong> No refund</li>
                    <li>Company-initiated cancellations will receive full refund</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Prohibited Items */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Prohibited Items</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The following items are prohibited from transport without prior approval:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Explosives, firearms, and weapons</li>
                    <li>Illegal drugs and narcotics</li>
                    <li>Hazardous chemicals without proper documentation</li>
                    <li>Perishable goods without temperature control arrangement</li>
                    <li>Live animals</li>
                    <li>Currency, jewelry, or precious metals (without declaration)</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Disputes */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Dispute Resolution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Any disputes arising from these terms shall be resolved through mutual negotiation. 
                    If unresolved, disputes shall be subject to the exclusive jurisdiction of courts in 
                    Coimbatore, Tamil Nadu, India.
                  </p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For questions about these terms:
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-semibold text-foreground">Shameena Transporting Agents</p>
                    <p className="text-muted-foreground">No.302/2A7, VK Road, Peelamedu</p>
                    <p className="text-muted-foreground">Coimbatore - 641004, Tamil Nadu</p>
                    <p className="text-muted-foreground mt-2">Phone: +91 94430 33055</p>
                    <p className="text-muted-foreground">GST: 33AHTPA8379E1Z3</p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Terms;
