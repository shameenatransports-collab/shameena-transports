import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FAQSection } from "@/components/home/FAQSection";
import { CitiesWeServe } from "@/components/home/CitiesWeServe";
import { CTASection } from "@/components/home/CTASection";
import { AnimatedSection } from "@/components/ui/animated-section";
import { LeadEnquiryForm } from "@/components/lead/LeadEnquiryForm";
import { organizationSchema, localBusinessSchema, websiteSchema, transportBusinessSchema } from "@/lib/structured-data";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>STA Corporate Solutions Coimbatore | Transport, Business Loans & Legal</title>
        <meta name="description" content="STA Corporate Solutions Coimbatore — full load lorry transport, business loan assistance, MSME/Mudra and government funding scheme guidance, and legal services since 1982." />
        <meta name="keywords" content="STA Corporate Solutions, lorry transport coimbatore, MSME loan coimbatore, mudra loan tamil nadu, government funding schemes tamil nadu, business loan assistance, legal services coimbatore, full load transport, return load, company registration, transport service tamil nadu" />
        <link rel="canonical" href="https://www.stacorporate.com" />
        <meta property="og:title" content="STA Corporate Solutions | Transport, Loans & Legal — Coimbatore" />
        <meta property="og:description" content="Trusted since 1982. Lorry transport, business loan assistance and legal services in Coimbatore & Tamil Nadu." />
        <meta property="og:image" content="https://www.stacorporate.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <meta name="geo.position" content="11.0168;76.9558" />
        <meta name="ICBM" content="11.0168, 76.9558" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(transportBusinessSchema)}</script>
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
            <CitiesWeServe />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <section className="bg-background py-12 md:py-16">
              <div className="container mx-auto px-4">
                <div className="mx-auto max-w-3xl">
                  <LeadEnquiryForm />
                </div>
              </div>
            </section>
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
