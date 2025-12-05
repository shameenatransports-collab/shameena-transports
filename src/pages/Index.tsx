import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServiceAreasPreview } from "@/components/home/ServiceAreasPreview";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.shameena.com",
    "name": "Shameena Transports",
    "image": "https://www.shameena.com/logo.png",
    "description": "No.1 Lorry Service in Coimbatore & Tamil Nadu. Fast, Safe & Reliable Goods Transport - Full Load, Part Load, Interstate Transport.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123, Transport Nagar, Avinashi Road",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641018",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.0168",
      "longitude": "76.9558"
    },
    "url": "https://www.shameena.com",
    "telephone": "+919876543210",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/shameena",
      "https://www.instagram.com/shameena"
    ],
    "areaServed": [
      "Coimbatore", "Tiruppur", "Erode", "Salem", "Chennai", "Madurai", "Trichy", "Karur"
    ],
    "serviceType": ["Lorry Transport", "Goods Transport", "Full Load Transport", "Part Load Transport"]
  };

  return (
    <>
      <Helmet>
        <title>No.1 Lorry Service in Coimbatore | Goods Transport Tamil Nadu - Shameena Transports</title>
        <meta name="description" content="Shameena Transports - No.1 Lorry Service in Coimbatore & Tamil Nadu. Fast, Safe & Reliable Goods Transport. Full Load, Part Load, Interstate. Call +91 98765 43210" />
        <meta name="keywords" content="lorry service coimbatore, goods transport tamil nadu, truck transport coimbatore, lorry booking tamil nadu, textile transport tiruppur" />
        <link rel="canonical" href="https://www.shameena.com" />
        <meta property="og:title" content="No.1 Lorry Service in Coimbatore | Shameena Transports" />
        <meta property="og:description" content="Fast, Safe & Reliable Goods Transport in Tamil Nadu. Full Load, Part Load, Interstate Transport. 24/7 Service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shameena.com" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Layout>
        <HeroSection />
        <ServicesPreview />
        <ProcessSection />
        <WhyChooseUs />
        <ServiceAreasPreview />
        <FAQSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
