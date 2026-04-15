import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FAQSection } from "@/components/home/FAQSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { AnimatedSection } from "@/components/ui/animated-section";
import { organizationSchema, localBusinessSchema, websiteSchema } from "@/lib/structured-data";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>STA Corporate Solutions Coimbatore | Transport, Loans & Legal Services Since 1982</title>
        <meta name="description" content="STA Corporate Solutions Coimbatore — Lorry Transport (Full Load & Return Load), Loan Services (MSME, Mudra, Home, Business), Legal Services (Property, Company, Litigation). Lowest commission since 1982. Call +91 94430 33055." />
        <meta name="keywords" content="STA Corporate Solutions, lorry transport coimbatore, MSME loan coimbatore, mudra loan tamil nadu, legal services coimbatore, full load transport, return load, business loan, home loan, company registration, property lawyer coimbatore, transport service tamil nadu" />
        <link rel="canonical" href="https://www.stacorporate.com" />
        <meta property="og:title" content="STA Corporate Solutions | Transport, Loans & Legal — Coimbatore" />
        <meta property="og:description" content="43+ years trusted service. Lorry Transport, Loan Services & Legal Services in Coimbatore & Tamil Nadu. Lowest commission rates." />
        <meta property="og:image" content="https://www.stacorporate.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <meta name="geo.position" content="11.0168;76.9558" />
        <meta name="ICBM" content="11.0168, 76.9558" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>
      <Layout>
        <main>
          <HeroSection />
          <AnimatedSection>
            <TrustBadges />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <ServicesPreview />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <WhyChooseUs />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <TestimonialsSection />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <FAQSection />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <CTASection />
          </AnimatedSection>
        </main>
      </Layout>
    </>
  );
};

export default Index;
