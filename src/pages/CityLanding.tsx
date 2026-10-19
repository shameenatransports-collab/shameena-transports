import { Helmet } from "react-helmet-async";
import { useLocation, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CITY_DATA, type CitySlug } from "@/lib/city-data";
import { getCity } from "@/lib/seo/cities";
import { PILLARS } from "@/lib/seo/pillars";
import { localPageContent } from "@/lib/seo/local-content";
import { canonical, pillarCityUrl } from "@/lib/seo/slugs";
import { createBreadcrumbSchema, localBusinessSchema } from "@/lib/structured-data";
import { LeadEnquiryForm } from "@/components/lead/LeadEnquiryForm";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

export default function CityLanding() {
  const { pathname } = useLocation();
  const slug = pathname.split("/").filter(Boolean)[0] as CitySlug;
  const data = CITY_DATA[slug];
  const city = getCity(slug);
  if (!data || !city) return <Navigate to="/service-areas" replace />;
  const url = canonical(`/${city.slug}`);
  const title = `Transport & Business Services in ${city.name} | STA`;
  const description = `Lorry transport, business funding assistance, legal documentation and education guidance for ${city.name}, Tamil Nadu. Coimbatore-based; confirm availability.`;
  const transport = localPageContent(PILLARS[0], city);
  return <>
    <Helmet>
      <title>{title}</title><meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:url" content={url} /><meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(createBreadcrumbSchema([{ name: "Home", url: canonical("/") }, { name: "Service areas", url: canonical("/service-areas") }, { name: city.name, url }]))}</script>
    </Helmet>
    <Layout>
      <section className="bg-primary pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-primary-foreground/80 mb-4">{city.name} · <span lang="ta">{data.nameTamil}</span> · Tamil Nadu</p>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">Transport & business services in {city.name}</h1>
          <p className="text-lg text-primary-foreground/90 mb-8">Full Load lorry transport, business funding assistance, legal documentation and education guidance. Transportation since 1982; the other three practices launched mid-2025. Enquiries from {city.name} are coordinated from Coimbatore, with availability confirmed individually.</p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" variant="secondary" asChild><a href={`https://wa.me/919443033055?text=${encodeURIComponent(`Hello STA, I’m enquiring from ${city.name}. Please confirm service availability.`)}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4 mr-2" />WhatsApp enquiry</a></Button>
            <Button size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30" asChild><a href="tel:+919443033055"><Phone className="h-4 w-4 mr-2" />94430 33055</a></Button>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-background"><div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">Explore services for {city.name}</h2>
        <div className="grid sm:grid-cols-2 gap-6">{PILLARS.map(pillar => {
          const content = localPageContent(pillar, city);
          return <article key={pillar.id} className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">{content.heading}</h3>
            <p className="text-muted-foreground mb-4">{content.intro}</p>
            <p className="text-sm text-muted-foreground mb-5">{content.boundary}</p>
            <Link to={pillarCityUrl(pillar, city.slug)} className="inline-flex items-center gap-2 text-primary font-medium">Explore {pillar.name}<ArrowRight className="h-4 w-4" /></Link>
          </article>;
        })}</div>
      </div></section>
      <section className="py-12 bg-muted/40"><div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Plan a freight enquiry in {city.name}</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">{transport.localNote}</p>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">{transport.preparation.map(item => <li key={item}>{item}</li>)}</ul>
      </div></section>
      <section className="py-12 md:py-16 bg-background"><div className="container mx-auto px-4 max-w-3xl"><LeadEnquiryForm city={city.name} /></div></section>
      <section className="py-12 bg-muted/40"><div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Where is STA based?</h2>
        <p className="text-muted-foreground mb-5">Our confirmed office is No.302/2A7, VK Road, Peelamedu, Coimbatore – 641004. This page does not claim a separate {city.name} branch or scheduled daily departures.</p>
        <div className="flex flex-wrap gap-6"><Link to="/services" className="text-primary underline">All four services</Link><Link to="/service-areas" className="text-primary underline">South India city directory</Link><Link to="/contact" className="text-primary underline">Contact STA</Link></div>
      </div></section>
    </Layout>
  </>;
}
