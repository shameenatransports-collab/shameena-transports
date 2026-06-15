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
        <title>STA Corporate Solutions | 5 Practices for South India</title>
        <meta name="description" content="Transport since 1982 (43+ yrs). Financial, Legal, Edu Consultancy & Real Estate launched mid-2025. Five integrated practices for South India — Coimbatore HQ." />
        <meta name="keywords" content="STA Corporate Solutions, lorry transport coimbatore, MSME loan coimbatore, mudra loan tamil nadu, government funding schemes south india, business loan assistance, legal services coimbatore, edu consultancy south india, real estate south india, full load transport, return load, company registration" />
        <link rel="canonical" href="https://sta-corporate.in" />
        <meta property="og:title" content="STA Corporate Solutions | Transport Since 1982 · 5 Practices for South India" />
        <meta property="og:description" content="Transportation since 1982. Financial, Legal, Edu Consultancy & Real Estate launched mid-2025. Five integrated practices across Tamil Nadu, Karnataka, Telangana, Andhra Pradesh and Kerala." />
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
