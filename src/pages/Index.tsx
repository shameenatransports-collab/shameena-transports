import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ServiceAreasPreview } from "@/components/home/ServiceAreasPreview";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { AnimatedSection } from "@/components/ui/animated-section";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.shameena.com/#organization",
    "name": "Shameena Transports",
    "url": "https://www.shameena.com",
    "logo": "https://www.shameena.com/logo.png",
    "description": "Tamil Nadu's Most Trusted Lorry Service and Goods Transport Company",
    "foundingDate": "2010",
    "founder": {
      "@type": "Person",
      "name": "Shameena Transports"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-90477-21209",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Tamil"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-90477-21209",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Tamil"]
      }
    ],
    "sameAs": [
      "https://www.facebook.com/shameena",
      "https://www.instagram.com/shameena"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.shameena.com/#localbusiness",
    "name": "Shameena Transports - Lorry Service Tamil Nadu",
    "alternateName": ["Shameena Transport", "Shameena Logistics", "Shameena Trucking"],
    "image": [
      "https://www.shameena.com/logo.png",
      "https://www.shameena.com/fleet.jpg"
    ],
    "description": "Shameena Transports is Tamil Nadu's No.1 Lorry Service provider. We offer reliable goods transport, full load, part load, and interstate transport services across Coimbatore, Chennai, Tiruppur, Erode, Salem, Madurai, Trichy, and all major cities in Tamil Nadu. 15+ years of experience, 50+ lorries, 10000+ successful deliveries.",
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
    "telephone": "+91-90477-21209",
    "email": "info@shameena.com",
    "priceRange": "$$",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Bank Transfer",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      {"@type": "City", "name": "Coimbatore", "containedInPlace": {"@type": "State", "name": "Tamil Nadu"}},
      {"@type": "City", "name": "Chennai", "containedInPlace": {"@type": "State", "name": "Tamil Nadu"}},
      {"@type": "City", "name": "Tiruppur", "containedInPlace": {"@type": "State", "name": "Tamil Nadu"}},
      {"@type": "City", "name": "Erode", "containedInPlace": {"@type": "State", "name": "Tamil Nadu"}},
      {"@type": "City", "name": "Salem", "containedInPlace": {"@type": "State", "name": "Tamil Nadu"}},
      {"@type": "City", "name": "Madurai", "containedInPlace": {"@type": "State", "name": "Tamil Nadu"}},
      {"@type": "City", "name": "Trichy", "containedInPlace": {"@type": "State", "name": "Tamil Nadu"}},
      {"@type": "City", "name": "Karur", "containedInPlace": {"@type": "State", "name": "Tamil Nadu"}},
      {"@type": "State", "name": "Tamil Nadu", "containedInPlace": {"@type": "Country", "name": "India"}}
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Transport Services",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Full Truck Load Transport"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Part Load Transport"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Interstate Goods Transport"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Local Lorry Service"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Textile Transport"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Industrial Cargo Transport"}}
      ]
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.shameena.com/#service",
    "name": "Lorry Transport Service in Tamil Nadu",
    "serviceType": "Goods Transport",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Shameena Transports"
    },
    "areaServed": {
      "@type": "State",
      "name": "Tamil Nadu"
    },
    "description": "Professional lorry and goods transport service covering all major cities in Tamil Nadu including Coimbatore, Chennai, Tiruppur, Erode, Salem, Madurai, Trichy, and Karur.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "INR"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.shameena.com"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas does Shameena Transports serve in Tamil Nadu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shameena Transports provides lorry and goods transport services across all major cities in Tamil Nadu including Coimbatore, Chennai, Tiruppur, Erode, Salem, Madurai, Trichy, Karur, and more. We also offer interstate transport to Karnataka, Kerala, and Andhra Pradesh."
        }
      },
      {
        "@type": "Question",
        "name": "What types of goods can Shameena Transports carry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We transport all types of goods including textiles, manufacturing materials, construction materials, FMCG products, industrial cargo, machinery, and household goods. Our fleet includes various truck sizes to accommodate different cargo requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Is Shameena Transports available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Shameena Transports operates 24 hours a day, 7 days a week. You can book our lorry services anytime by calling +91 90477 21209 or contacting us via WhatsApp."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get a quote for transport services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get a free quote by calling us at +91 90477 21209, messaging us on WhatsApp, or filling out the contact form on our website. We provide competitive rates for all transport requirements."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Shameena Transports | No.1 Lorry Service & Goods Transport in Tamil Nadu</title>
        <meta name="description" content="Shameena Transports - Tamil Nadu's Most Trusted Lorry Service. Best Goods Transport in Coimbatore, Chennai, Tiruppur, Erode, Salem, Madurai. Full Load, Part Load, Interstate Transport. 24/7 Service. Call +91 90477 21209" />
        <meta name="keywords" content="transport in tamil nadu, lorry service tamil nadu, goods transport tamil nadu, shameena transports, lorry service coimbatore, truck transport coimbatore, textile transport tiruppur, chennai goods transport, madurai lorry service, full truck load, part load transport, interstate transport" />
        <link rel="canonical" href="https://www.shameena.com" />
        <meta property="og:title" content="Shameena Transports | No.1 Lorry Service in Tamil Nadu" />
        <meta property="og:description" content="Tamil Nadu's Most Trusted Transport Service. Fast, Safe & Reliable Goods Transport. Coimbatore, Chennai, Tiruppur, Erode, Salem, Madurai. 24/7 Service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shameena.com" />
        <meta property="og:image" content="https://www.shameena.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shameena Transports | No.1 Lorry Service in Tamil Nadu" />
        <meta name="twitter:description" content="Tamil Nadu's Most Trusted Goods Transport. 24/7 Service." />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Layout>
        <HeroSection />
        <AnimatedSection>
          <TrustBadges />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <ServicesPreview />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <ProcessSection />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <WhyChooseUs />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <ServiceAreasPreview />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <CTASection />
        </AnimatedSection>
      </Layout>
    </>
  );
};

export default Index;
