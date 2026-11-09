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
    description: "Every shipment is handled with care by experienced drivers on our own lorries.",
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
    description: "Maintaining the highest standards in logistics and lorry transport.",
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
        <title>About STA Corporate Solutions | Lorry Transport Since 1982</title>
        <meta name="description" content="STA Corporate Solutions — lorry transport since 1982 (44+ years) for businesses in Coimbatore district, headquartered in Coimbatore." />
        <link rel="canonical" href="https://sta-corporate.in/about" />
        <meta property="og:title" content="About STA Corporate Solutions | 44+ Years in Lorry Transport · Coimbatore" />
        <meta property="og:description" content="Lorry transport since 1982, serving Coimbatore district." />
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
                Our Story · Transport Since 1982
              </div>
              <h1 className="text-display-2xl text-primary-foreground mb-6">
                Built in Coimbatore.
                <br />
                <span className="bg-gradient-to-r from-secondary via-secondary to-primary-foreground bg-clip-text text-transparent">
                  Lorry transport for Coimbatore.
                </span>
              </h1>
              <p className="text-headline text-primary-foreground/85 max-w-2xl">
                44+ years of dependable lorry transport for the businesses of Coimbatore district.
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
                    <strong className="text-foreground">STA Transport &amp; Logistics</strong> began in <strong className="text-foreground">1982</strong> in Coimbatore as a reliable goods transport operator. Over <strong className="text-foreground">44+ years of service excellence</strong>, we have grown into a trusted full-load lorry transport partner for textile mills and foundries in Coimbatore, and manufacturers across Coimbatore district.
                  </p>
                  <p>
                    Today, <strong className="text-foreground">STA Corporate Solutions</strong> serves businesses in Coimbatore district from our Coimbatore headquarters, with the same standards of integrity, responsibility and customer care we started with.
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
                  <div className="text-4xl font-bold">44+</div>
                  <div className="text-sm">Years in Transport</div>
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
                  To deliver superior, competent and personalised services in lorry transport — empowering businesses in Coimbatore with a trusted freight partner. We remove the stress and uncertainty of moving goods through clear planning and honest communication at every stage.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the most trusted transport partner for businesses in Coimbatore — built on 44+ years of transport heritage and a fleet that businesses can rely on for the long term.
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
                <div className="text-4xl md:text-5xl font-bold text-secondary">44+</div>
                <div className="text-primary-foreground/80 mt-2">Years in Transport</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary">12+</div>
                <div className="text-primary-foreground/80 mt-2">Fleet Vehicles</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary">10</div>
                <div className="text-primary-foreground/80 mt-2">Towns on Our Routes</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary">2</div>
                <div className="text-primary-foreground/80 mt-2">Districts served</div>
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
