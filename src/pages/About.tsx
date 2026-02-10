import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Shield, Clock, Users, Award, Target, Heart } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import { Picture } from "@/components/ui/picture";
import fleetBg from "@/assets/fleet-bg.jpg";
import logo from "@/assets/sta-logo.png";
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
    description: "We understand time is money. Our 98% on-time delivery speaks for itself.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We go the extra mile for every client.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Maintaining the highest standards in logistics and transport services.",
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
    { name: "Home", url: "https://www.stacorporate.com" },
    { name: "About Us", url: "https://www.stacorporate.com/about" },
  ]);

  return (
    <>
      <Helmet>
        <title>About Us | STA Corporate Solutions - Business Solutions Since 1982</title>
        <meta name="description" content="Learn about STA Corporate Solutions - 43+ years of trusted business services in Coimbatore & Tamil Nadu since 1982. Transportation, Trading, Financial Services & Real Estate." />
        <link rel="canonical" href="https://www.stacorporate.com/about" />
        <meta property="og:title" content="About STA Corporate Solutions | Since 1982" />
        <meta property="og:description" content="43+ years of trusted business services in Tamil Nadu. Our mission, values, and commitment to excellence." />
        <meta property="og:url" content="https://www.stacorporate.com/about" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl flex items-center gap-6">
              <img 
                src={logo} 
                alt="STA Corporate Solutions Logo" 
                className="h-24 md:h-32 w-auto bg-card rounded-lg p-2 shadow-lg"
                loading="eager"
              />
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                  About STA Corporate Solutions
                </h1>
                <p className="text-lg text-primary-foreground/90">
                  Trusted by hundreds of businesses across Tamil Nadu since 1982
                </p>
              </div>
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
                    Founded in 1982, STA Corporate Solutions started as a transport company with just two lorries and a vision to provide reliable services. Today, we have grown into a diversified business solutions provider with four verticals — <strong className="text-foreground">Transportation</strong>, <strong className="text-foreground">Financial Services</strong>, <strong className="text-foreground">Legal Services</strong> & <strong className="text-foreground">Dubai Real Estate</strong>.
                  </p>
                  <p>
                    Our founders understood the challenges businesses face with unreliable services and high commissions. This drove us to build a company focused on offering the lowest commission rates in India while maintaining excellence.
                  </p>
                  <p>
                    From textile mills in Tiruppur to factories in Chennai, construction sites in Salem to luxury property investments in Dubai – we have served thousands of clients across diverse industries and geographies. Our commitment to excellence has made us the preferred choice for complete business solutions.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Picture
                  src={fleetBg}
                  alt="STA Corporate Solutions Operations"
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
                  To provide comprehensive business solutions — from transport logistics and financial services to legal support and international real estate investments — that help businesses and individuals grow. We aim to be the most trusted multi-vertical partner in India.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become India's most trusted corporate solutions company by 2030. We envision a future where businesses and individuals can access transportation, financing, legal services, and global real estate investments — all through a single, reliable partner.
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
                The principles that guide everything we do
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
                <div className="text-4xl md:text-5xl font-bold text-secondary">500+</div>
                <div className="text-primary-foreground/80 mt-2">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary">10K+</div>
                <div className="text-primary-foreground/80 mt-2">Deliveries Done</div>
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
