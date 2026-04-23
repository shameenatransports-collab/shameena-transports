import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Package,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  TrendingDown,
  Truck,
  CheckCircle,
  ArrowRight,
  Route,
  IndianRupee,
  Calendar,
} from "lucide-react";
import { returnLoadServiceSchema, localBusinessSchema, createBreadcrumbSchema } from "@/lib/structured-data";

const popularRoutes = [
  { from: "Coimbatore", to: "Chennai", note: "Subject to route availability" },
  { from: "Tiruppur", to: "Bangalore", note: "Subject to route availability" },
  { from: "Salem", to: "Madurai", note: "Subject to route availability" },
  { from: "Erode", to: "Chennai", note: "Subject to route availability" },
  { from: "Chennai", to: "Coimbatore", note: "Subject to route availability" },
  { from: "Trichy", to: "Coimbatore", note: "Subject to route availability" },
];

const benefits = [
  {
    icon: TrendingDown,
    title: "Route-Based Transport Pricing",
    description: "Since trucks are already returning, pricing can be more economical than dedicated full load bookings.",
  },
  {
    icon: Truck,
    title: "Same Quality Service",
    description: "Get the same reliable, insured transport with experienced drivers.",
  },
  {
    icon: Route,
    title: "Multiple Routes Available",
    description: "Popular routes across Tamil Nadu with regular availability.",
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    description: "Book based on truck schedules - advance booking improves availability.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Check Availability",
    description: "Call or WhatsApp us with your pickup and delivery locations.",
  },
  {
    step: 2,
    title: "Get Quote",
    description: "We check current truck schedules and provide discounted rates.",
  },
  {
    step: 3,
    title: "Confirm Booking",
    description: "If return load is available, confirm your booking with advance payment.",
  },
  {
    step: 4,
    title: "Track Delivery",
    description: "Stay updated on your cargo's journey with our tracking support.",
  },
];

const faqs = [
  {
    question: "What is Return Load transport?",
    answer: "Return Load transport is when you use a truck that is already returning from a delivery to another location. Since the truck would otherwise return empty, rates can be more economical than a dedicated full load booking. Every return load is subject to route availability.",
  },
  {
    question: "How do I check if Return Load is available for my route?",
    answer: "Call us at +91 94430 33055 or WhatsApp with your pickup location, destination, and preferred dates. We'll check our current truck schedules and let you know availability. Popular routes like Coimbatore-Chennai often have regular availability.",
  },
  {
    question: "Is my cargo insured on Return Load transport?",
    answer: "Yes, all our transport including Return Load is fully insured. Your cargo gets the same protection and care as our Full Load service.",
  },
  {
    question: "How much advance notice do I need for Return Load booking?",
    answer: "We recommend booking 2-3 days in advance for better availability. However, we sometimes have same-day or next-day return loads available - just call to check.",
  },
  {
    question: "What types of goods can be transported via Return Load?",
    answer: "Return Load is suitable for most commercial goods including textiles, industrial machinery, construction materials, agricultural products, and general cargo. We'll confirm suitability when you inquire.",
  },
  {
    question: "What's the difference between Full Load and Return Load?",
    answer: "Full Load is a dedicated truck booked exclusively for your cargo with complete control over timing and routes. Return Load uses a truck already scheduled to return on a specific route, offering lower rates but less flexibility on timing.",
  },
];

const breadcrumbItems = [
  { name: "Home", url: "https://www.stacorporate.com" },
  { name: "Return Loads", url: "https://www.stacorporate.com/return-loads" },
];

const returnLoadFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

const ReturnLoads = () => {
  const breadcrumbSchema = createBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <Helmet>
        <title>Return Load Transport Tamil Nadu | Route Availability | STA Corporate Solutions</title>
        <meta
          name="description"
          content="Return Load transport in Tamil Nadu subject to route availability. Popular routes include Coimbatore-Chennai, Tiruppur-Bangalore, Salem-Madurai. Call +91 94430 33055 to check availability."
        />
        <meta
          name="keywords"
          content="return load transport tamil nadu, return load lorry coimbatore, cheap transport chennai, return load availability, part load transport, return lorry booking, discounted transport rates, return truck coimbatore chennai, return load tiruppur bangalore"
        />
        <link rel="canonical" href="https://www.stacorporate.com/return-loads" />
        <meta property="og:title" content="Return Load Transport Tamil Nadu | STA Corporate Solutions" />
        <meta
          property="og:description"
          content="Return Load transport subject to route availability. Popular routes: Coimbatore-Chennai, Tiruppur-Bangalore. Check availability now."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.stacorporate.com/return-loads" />
        <meta property="og:image" content="https://www.stacorporate.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Return Load Transport | STA Corporate Solutions" />
        <meta name="twitter:description" content="Discounted Return Load transport on popular Tamil Nadu routes. Call to check availability." />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(returnLoadServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(returnLoadFaqSchema)}</script>
      </Helmet>

      <Layout>
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary via-primary to-accent pt-24 pb-16 md:pt-32 md:pb-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center text-primary-foreground">
                <Badge className="mb-4 bg-secondary text-secondary-foreground">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  Subject to Route Availability
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Return Load Transport in Tamil Nadu
                </h1>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  Get cheaper transport rates when our trucks return on available routes. 
                  Same quality service at significantly reduced prices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+919443033055">
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">
                      <Phone className="h-5 w-5" />
                      Call: +91 94430 33055
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/919443033055?text=Hi%2C%20I%20want%20to%20check%20Return%20Load%20availability"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto gap-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp to Check Availability
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* What is Return Load */}
          <AnimatedSection>
            <section className="py-16 md:py-24 bg-background">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        What is Return Load Transport?
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        When our trucks deliver cargo to a destination, they often need to return to their 
                        base location. Instead of returning empty, we offer these return trips at discounted 
                        rates to customers who need transport on those routes.
                      </p>
                      <p className="text-muted-foreground mb-6">
                        This is a <strong>win-win situation</strong> - you save money on transport, and we 
                        optimize our fleet efficiency. You get the same reliable service with experienced 
                        drivers and insured cargo protection.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-accent">
                          <IndianRupee className="h-5 w-5" />
                          <span className="font-semibold">30-40% Savings</span>
                        </div>
                        <div className="flex items-center gap-2 text-accent">
                          <Calendar className="h-5 w-5" />
                          <span className="font-semibold">Subject to Availability</span>
                        </div>
                      </div>
                    </div>
                    <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
                      <CardContent className="p-6">
                        <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-4">
                          <Package className="h-7 w-7 text-accent-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Return Load Benefits</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            Significantly cheaper than Full Load
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            Same quality, insured transport
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            Experienced drivers
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            Regular availability on popular routes
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Popular Routes */}
          <AnimatedSection delay={100}>
            <section className="py-16 md:py-24 bg-muted">
              <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Popular Return Load Routes
                  </h2>
                  <p className="text-muted-foreground">
                    These routes frequently have return load availability. Contact us to check current schedules.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  {popularRoutes.map((route, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-accent" />
                            <span className="font-medium text-foreground">{route.from}</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-accent" />
                            <span className="font-medium text-foreground">{route.to}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="w-full justify-center mt-2">
                          <TrendingDown className="h-3 w-3 mr-1" />
                          {route.note}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <p className="text-center text-muted-foreground mt-8">
                  Don't see your route? <a href="tel:+919443033055" className="text-accent font-medium hover:underline">Call us</a> – we may have availability on other routes too!
                </p>
              </div>
            </section>
          </AnimatedSection>

          {/* Benefits */}
          <AnimatedSection delay={100}>
            <section className="py-16 md:py-24 bg-background">
              <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Why Choose Return Load?
                  </h2>
                  <p className="text-muted-foreground">
                    Smart savings without compromising on service quality
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                          <benefit.icon className="h-6 w-6 text-accent" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* How It Works */}
          <AnimatedSection delay={100}>
            <section className="py-16 md:py-24 bg-primary text-primary-foreground">
              <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    How to Book Return Load
                  </h2>
                  <p className="opacity-80">
                    Simple 4-step process to save on your transport costs
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                  {howItWorks.map((step, index) => (
                    <div
                      key={index}
                      className="relative p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
                    >
                      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm">
                        {step.step}
                      </div>
                      <h3 className="font-semibold mb-2 mt-2">{step.title}</h3>
                      <p className="text-sm opacity-80">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* FAQs */}
          <AnimatedSection delay={100}>
            <section className="py-16 md:py-24 bg-muted">
              <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Return Load FAQs
                  </h2>
                  <p className="text-muted-foreground">
                    Common questions about our Return Load transport service
                  </p>
                </div>

                <div className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="bg-card border border-border rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={100}>
            <section className="py-16 md:py-24 bg-accent">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
                  Ready to Check Return Load Availability?
                </h2>
                <p className="text-accent-foreground/80 mb-8 max-w-xl mx-auto">
                  Contact us now to check Return Load availability for your route. 
                  Our team will confirm route availability and pricing based on your requirement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+919443033055">
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto gap-2">
                      <Phone className="h-5 w-5" />
                      Call Now: +91 94430 33055
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/919443033055?text=Hi%2C%20I%20want%20to%20check%20Return%20Load%20availability"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto gap-2 border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp Us
                    </Button>
                  </a>
                </div>
                <p className="mt-8 text-accent-foreground/70">
                  Need a dedicated truck? Check our{" "}
                  <Link to="/transportation" className="font-medium underline hover:no-underline">
                    Full Load Transport Services
                  </Link>
                </p>
              </div>
            </section>
          </AnimatedSection>
        </main>
      </Layout>
    </>
  );
};

export default ReturnLoads;