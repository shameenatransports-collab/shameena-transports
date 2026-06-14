import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Shield, Clock, Users, Award, Target, Heart } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import { Picture } from "@/components/ui/picture";
import fleetBg from "@/assets/fleet-bg.jpg";

import { organizationSchema, localBusinessSchema, createBreadcrumbSchema } from "@/lib/structured-data";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Every shipment is handled with utmost care and full insurance coverage.",
  },
  {
    icon: Clock,
    title: "Punctuality",
    description: "We understand time is money and coordinate every assignment with disciplined follow-up.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We go the extra mile for every client.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Maintaining the highest standards in logistics, finance, and legal services.",
  },
  {
    icon: Target,
    title: "Reliability",
    description: "Consistent, dependable service you can count on every single time.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest pricing, transparent dealings, and ethical business practices.",
  },
];

const About = () => {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://sta-corporate.in" },
    { name: "About Us", url: "https://sta-corporate.in/about" },
  ]);

  return (
    <>
      <Helmet>
        <title>About STA Corporate Solutions | Coimbatore Since 1982</title>
        <meta name="description" content="Coimbatore-based corporate group since 1982 — transport, business loans, legal, edu & real estate across Tamil Nadu, Karnataka, Kerala, AP & Telangana." />
        <link rel="canonical" href="https://sta-corporate.in/about" />
        <meta property="og:title" content="About STA Corporate Solutions | Since 1982 — Coimbatore" />
        <meta property="og:description" content="43+ years of trusted business services across South India. Transport, Loans & Legal — our story." />
        <meta property="og:url" content="https://sta-corporate.in/about" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative isolate min-h-[70svh] flex items-center overflow-hidden bg-primary">
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary to-primary/90" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary-glow)/0.28),_transparent_60%)]" />
          <div className="container mx-auto px-4 pt-32 pb-24 md:pt-40 md:pb-32 relative">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background text-[11px] font-bold tracking-[0.18em] uppercase text-primary shadow-xl ring-1 ring-primary-foreground/40 mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Our Story · Since 1982
              </div>
              <h1 className="text-display-2xl text-primary-foreground mb-6">
                Built in Coimbatore.
                <br />
                <span className="bg-gradient-to-r from-secondary via-secondary to-primary-foreground bg-clip-text text-transparent">
                  Trusted across Tamil Nadu.
                </span>
              </h1>
              <p className="text-headline text-primary-foreground/85 max-w-2xl">
                Four decades of transportation, financial services and legal documentation support
                for businesses and individuals.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Journey
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 1982 in Coimbatore, STA Corporate Solutions started as a transport company with just two lorries and a vision to provide reliable services. Today, we have grown into a diversified business solutions provider with three verticals — <strong className="text-foreground">Transportation</strong>, <strong className="text-foreground">Financial Services</strong> & <strong className="text-foreground">Legal Services</strong>.
                  </p>
                  <p>
                    Our founders understood the challenges businesses face with unreliable services and unclear commissions. This drove us to build a company focused on transparent assistance while maintaining excellence.
                  </p>
                  <p>
                    From textile mills in Tiruppur to factories in Chennai, construction sites in Salem to MSME entrepreneurs in Erode — we have served thousands of clients across diverse industries. Our commitment to excellence has made us Coimbatore's preferred choice for complete business solutions.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Picture
                  src={fleetBg}
                  alt="STA Corporate Solutions Operations in Coimbatore"
                  className="rounded-lg shadow-xl aspect-[4/3]"
                  imgClassName="rounded-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold">43+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide comprehensive business solutions — from transport logistics and financial services to legal support — that help businesses and individuals grow across Tamil Nadu. We aim to be Coimbatore's most trusted multi-vertical partner.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become Tamil Nadu's most trusted corporate solutions company by 2030. We envision a future where businesses and individuals can access transportation, financing, and legal services — all through a single, reliable partner in Coimbatore.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-lg">
                The principles that guide everything we do at STA Corporate Solutions
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-card border border-border hover:border-accent transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary">43+</div>
                <div className="text-primary-foreground/80 mt-2">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary">12+</div>
                <div className="text-primary-foreground/80 mt-2">Lorries in Fleet</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary">B2B</div>
                <div className="text-primary-foreground/80 mt-2">Business Focus</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary">TN</div>
                <div className="text-primary-foreground/80 mt-2">Tamil Nadu Service</div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
};

export default About;
