import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { AnimatedSection } from "@/components/ui/animated-section";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "STA Corporate Solutions",
    "url": "https://www.stacorporate.com",
    "logo": "https://www.stacorporate.com/logo.png",
    "description": "STA Corporate Solutions - Transportation, Loan Services & Legal Services. Lowest commission rates since 1982.",
    "foundingDate": "1982",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-94430-33055",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Tamil"]
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "STA Corporate Solutions",
    "image": "https://www.stacorporate.com/logo.png",
    "description": "Your trusted partner for Transportation, Loan Services & Legal Services in Coimbatore.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.302/2A7, VK Road, Peelamedu",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641004",
      "addressCountry": "IN"
    },
    "telephone": "+91-94430-33055",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  return (
    <>
      <Helmet>
        <title>STA Corporate Solutions | Transportation, Trading, Financial Services & Real Estate</title>
        <meta name="description" content="STA Corporate Solutions - Your trusted partner for Transportation, Loan Services & Legal Services. Lowest commission in India. Coimbatore. Since 1982." />
        <meta name="keywords" content="STA Corporate Solutions, transportation coimbatore, loan services, legal services, msme loan, mudra loan, company registration, lorry service" />
        <link rel="canonical" href="https://www.stacorporate.com" />
        <meta property="og:title" content="STA Corporate Solutions | Business Solutions Since 1982" />
        <meta property="og:description" content="Transportation, Loan Services, Legal Services & Dubai Real Estate. Lowest commission rates in India." />
        <meta property="og:image" content="https://www.stacorporate.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
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
