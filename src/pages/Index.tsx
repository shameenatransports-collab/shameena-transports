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
    "description": "Since 1982 - 43 Years of Heritage in Logistics. Tamil Nadu's trusted Full Load & Return Load lorry transport service. Return Loads available on specific routes at cheaper rates.",
    "foundingDate": "1982",
    "slogan": "Full Load & Return Load Transport - 43 Years of Heritage",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-94430-33055",
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
    "sameAs": []
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.shameena.com/#localbusiness",
    "name": "Shameena Transports - Full Load & Return Load Transport Tamil Nadu",
    "alternateName": ["Shameena Transport", "Shameena Logistics", "Shameena Trucking", "Shameena Transport Coimbatore", "Shameena Transporting Agents"],
    "image": [
      "https://www.shameena.com/logo.png",
      "https://www.shameena.com/fleet.jpg"
    ],
    "description": "Shameena Transports - Since 1982, 43 years of heritage in Full Load & Return Load transport. Full Load for dedicated truck service. Return Load available on specific transportation routes at cheaper rates. Serving Coimbatore, Chennai, Tiruppur, Erode, Salem, Madurai, Trichy. 12+ lorries, 10000+ successful deliveries.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.302/2A7, VK Road, Peelamedu",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641004",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.0168",
      "longitude": "76.9558"
    },
    "url": "https://www.shameena.com",
    "telephone": "+91-94430-33055",
    "priceRange": "$$",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Bank Transfer",
    "foundingDate": "1982",
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
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Full Load Lorry Transport", "description": "Dedicated truck for your exclusive cargo"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Return Load Transport", "description": "Cost-effective transport on available return routes"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Textile & Industrial Cargo Transport"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Construction Material Transport"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Factory & Warehouse Shifting"}}
      ]
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.shameena.com/#service",
    "name": "Full Load & Return Load Lorry Transport Tamil Nadu",
    "serviceType": "Goods Transport",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Shameena Transports"
    },
    "areaServed": {
      "@type": "State",
      "name": "Tamil Nadu"
    },
    "description": "Professional Full Load dedicated lorry transport and Return Load services on available routes. Covering Coimbatore, Chennai, Tiruppur, Erode, Salem, Madurai, Trichy, and Karur.",
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
        "name": "What is Full Load transport service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Full Load transport means booking an entire lorry exclusively for your cargo. You get a dedicated truck, complete control over pickup and delivery timing, and faster transit with no intermediate stops. Ideal for large shipments of 5-25 tons."
        }
      },
      {
        "@type": "Question",
        "name": "What is Return Load transport and how does it save money?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Return Load transport is available when our trucks are returning from a delivery on specific routes. Since the truck is already heading back, we offer significantly cheaper rates. Availability depends on current schedules - contact us to check if return load is available for your route."
        }
      },
      {
        "@type": "Question",
        "name": "How do I check Return Load availability for my route?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Call us at +91 94430 33055 or WhatsApp to check current return load availability. Popular return routes include Coimbatore-Chennai, Tiruppur-Bangalore, and more. Booking in advance improves your chances of getting a return load."
        }
      },
      {
        "@type": "Question",
        "name": "What areas does Shameena Transports serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide Full Load and Return Load transport across Tamil Nadu including Coimbatore, Chennai, Tiruppur, Erode, Salem, Madurai, Trichy, Karur, and all districts. We also serve inter-state routes."
        }
      },
      {
        "@type": "Question",
        "name": "Is Shameena Transports available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Shameena Transports operates 24 hours a day, 7 days a week. You can book Full Load or check Return Load availability anytime by calling +91 94430 33055 or contacting us via WhatsApp."
        }
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Shameena Transports"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Rajesh Kumar"
    },
    "reviewBody": "Excellent Full Load service for our textile exports. We also use their Return Load when available - great savings! Reliable service for 10+ years."
  };

  return (
    <>
      <Helmet>
        <title>Full Load & Return Load Lorry Service Tamil Nadu | Shameena Transports Since 1982</title>
        <meta name="description" content="Shameena Transports - Since 1982. Full Load dedicated truck transport & Return Load on available routes at cheaper rates. Tamil Nadu's trusted logistics. Coimbatore, Chennai, Tiruppur. Call +91 94430 33055" />
        <meta name="keywords" content="full load lorry service tamil nadu, return load transport coimbatore, full truck load booking, return load availability routes, dedicated truck transport, goods transport tamil nadu, lorry service coimbatore, return load chennai tiruppur, textile transport, industrial cargo, since 1982 transport, 24/7 lorry service" />
        <link rel="canonical" href="https://www.shameena.com" />
        <meta property="og:title" content="Full Load & Return Load Transport Tamil Nadu | Shameena Transports Since 1982" />
        <meta property="og:description" content="43 Years of Heritage. Full Load dedicated trucks. Return Load on available routes at cheaper rates. Coimbatore, Chennai, Tiruppur. 24/7 Service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shameena.com" />
        <meta property="og:image" content="https://www.shameena.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Full Load & Return Load Transport | Shameena Transports Since 1982" />
        <meta name="twitter:description" content="43 Years of Heritage. Full Load & Return Load transport Tamil Nadu. 24/7 Service." />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
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
        </main>
      </Layout>
    </>
  );
};

export default Index;
