import { Helmet } from "react-helmet-async";
import { useLocation, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Truck, Banknote, Scale, MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { CITY_DATA, type CitySlug } from "@/lib/city-data";
import { createBreadcrumbSchema } from "@/lib/structured-data";

const CityLanding = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+/, "").split("/")[0] as CitySlug;
  const data = slug ? CITY_DATA[slug] : undefined;

  if (!data) return <Navigate to="/" replace />;

  const url = `https://www.stacorporate.com/${data.slug}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#localbusiness`,
    name: `STA Corporate Solutions — ${data.name}`,
    description: data.metaDescription,
    url,
    telephone: "+91-94430-33055",
    priceRange: "$$",
    foundingDate: "1982",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No.302/2A7, VK Road, Peelamedu",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      postalCode: "641004",
      addressCountry: "IN",
    },
    areaServed: { "@type": "City", name: data.name },
    geo: { "@type": "GeoCoordinates", latitude: data.geo.lat, longitude: data.geo.lng },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: "https://www.stacorporate.com" },
    { name: data.name, url },
  ]);

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={url} />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content={`${data.name}, Tamil Nadu`} />
        <meta name="geo.position" content={`${data.geo.lat};${data.geo.lng}`} />
        <meta name="ICBM" content={`${data.geo.lat}, ${data.geo.lng}`} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="en_IN" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl">
              <Badge variant="secondary" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                {data.name} • {data.nameTamil}
              </Badge>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
                Transport, Loans & Legal Services in {data.name}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-6">{data.tagline}</p>
              <p className="text-base text-primary-foreground/80 mb-8 max-w-3xl">{data.heroIntro}</p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:+919443033055">
                    <Phone className="w-4 h-4 mr-2" /> Call 94430 33055
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-background/10 text-primary-foreground border-primary-foreground/30 hover:bg-background/20" asChild>
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About city */}
        <AnimatedSection>
          <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Why {data.name} Trusts STA Corporate Solutions
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{data.about}</p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Three verticals */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Transport */}
              <AnimatedSection>
                <Card className="h-full">
                  <CardContent className="p-6 md:p-8">
                    <Truck className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {data.transport.headline}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {data.transport.description}
                    </p>
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">Key Routes</p>
                      <ul className="space-y-1.5">
                        {data.transport.routes.map((r) => (
                          <li key={r} className="text-sm text-muted-foreground flex items-start gap-2">
                            <ArrowRight className="w-3 h-3 mt-1 flex-shrink-0 text-primary" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {data.transport.industries.map((i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{i}</Badge>
                      ))}
                    </div>
                    <Button variant="link" className="px-0 mt-4" asChild>
                      <Link to="/transportation">Explore Transportation <ArrowRight className="w-4 h-4 ml-1" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Financial */}
              <AnimatedSection delay={100}>
                <Card className="h-full">
                  <CardContent className="p-6 md:p-8">
                    <Banknote className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {data.financial.headline}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {data.financial.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {data.financial.highlights.map((h) => (
                        <li key={h} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="link" className="px-0" asChild>
                      <Link to="/financial-services">Explore Loan Services <ArrowRight className="w-4 h-4 ml-1" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Legal */}
              <AnimatedSection delay={200}>
                <Card className="h-full">
                  <CardContent className="p-6 md:p-8">
                    <Scale className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {data.legal.headline}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {data.legal.description}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {data.legal.highlights.map((h) => (
                        <li key={h} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="link" className="px-0" asChild>
                      <Link to="/legal-services">Explore Legal Services <ArrowRight className="w-4 h-4 ml-1" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Areas covered */}
        <AnimatedSection>
          <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                  Areas We Serve in {data.name}
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                  {data.landmarks.map((l) => (
                    <Badge key={l} variant="outline" className="text-sm py-1.5 px-3">
                      <MapPin className="w-3 h-3 mr-1" /> {l}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQs */}
        <AnimatedSection>
          <section className="py-12 md:py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                  Frequently Asked Questions — {data.name}
                </h2>
                <div className="space-y-4">
                  {data.faqs.map((f) => (
                    <Card key={f.q}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{f.q}</h3>
                        <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Work With Tamil Nadu's Most Trusted Name?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              43 years. 3 verticals. Lowest commission. Call us from {data.name} today.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+919443033055">
                  <Phone className="w-4 h-4 mr-2" /> +91 94430 33055
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-background/10 text-primary-foreground border-primary-foreground/30 hover:bg-background/20" asChild>
                <Link to="/contact">Send an Enquiry</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CityLanding;
