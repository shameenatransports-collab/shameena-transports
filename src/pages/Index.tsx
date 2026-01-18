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
    "name": "STA Enterprises",
    "url": "https://www.staenterprises.com",
    "logo": "https://www.staenterprises.com/logo.png",
    "description": "STA Enterprises - Transportation, Trading, Financial Services & Real Estate. Lowest commission rates since 1982.",
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
    "name": "STA Enterprises",
    "image": "https://www.staenterprises.com/logo.png",
    "description": "Your trusted partner for Transportation, Trading, Financial Services & Real Estate in Coimbatore.",
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
        <title>STA Enterprises | Transportation, Trading, Financial Services & Real Estate</title>
        <meta name="description" content="STA Enterprises - Your trusted partner for Transportation, Trading, Financial Services & Real Estate. Lowest commission in India. Coimbatore. Since 1982." />
        <meta name="keywords" content="STA Enterprises, transportation coimbatore, iron steel trading, financial services, real estate coimbatore, GST filing, TMT rods, lorry service" />
        <link rel="canonical" href="https://www.staenterprises.com" />
        <meta property="og:title" content="STA Enterprises | Business Solutions Since 1982" />
        <meta property="og:description" content="Transportation, Trading, Financial Services & Real Estate. Lowest commission rates in India." />
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
