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
import { Link } from "react-router-dom";
import { LeadEnquiryForm } from "@/components/lead/LeadEnquiryForm";
import { organizationSchema, localBusinessSchema, websiteSchema, transportBusinessSchema } from "@/lib/structured-data";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>STA Corporate Solutions | Lorry Transport for Coimbatore & Tiruppur</title>
        <meta name="description" content="Full Load and Return Load lorry transport since 1982 (43+ yrs) for businesses in Coimbatore and Tiruppur districts — Coimbatore HQ." />
        <meta name="keywords" content="STA Corporate Solutions, lorry transport Coimbatore, full load transport Coimbatore Tiruppur, return load transport Coimbatore, factory shifting Coimbatore, textile cargo Tiruppur" />
        <link rel="canonical" href="https://sta-corporate.in" />
        <meta property="og:title" content="STA Corporate Solutions | Lorry Transport Since 1982 · Coimbatore & Tiruppur" />
        <meta property="og:description" content="Lorry transport since 1982 across Coimbatore and Tiruppur districts." />
        <meta property="og:image" content="https://sta-corporate.in/og-image.jpg" />
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
          <TrustBadges />
          <ServicesPreview />
          <WhyChooseUs />
          <CitiesWeServe />
          <section className="bg-background py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl">
                <LeadEnquiryForm />
              </div>
            </div>
          </section>
          <FAQSection />
          <CTASection />
        </main>
      </Layout>
    </>
  );
};

export default Index;
