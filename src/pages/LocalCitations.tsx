import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight, MessageCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { COIMBATORE_OFFICE_CONTENT as office } from "@/lib/seo/local-content";
import { LOCAL_CITATIONS_PATH, OFFICE_MAPS_URL, LOCAL_CITATION_AREAS, PORT_DELIVERY_REFERENCES, CITATION_SERVICE_SLUGS } from "@/lib/seo/local-citations";
import { canonical } from "@/lib/seo/slugs";
import { getPillar } from "@/lib/seo/pillars";

export default function LocalCitations() {
  const title = "Transport Company in Coimbatore, Podanur Office | STA";
  const description = "Lorry, truck & trailer transport in Coimbatore from our Podanur office. Serving Kurichi, Sulur, Pollachi, Mettupalayam & Chennai/Kochi ports.";
  const services = getPillar("transportation")?.sub.filter(s => CITATION_SERVICE_SLUGS.includes(s.slug)) ?? [];
  const schema = {
    "@context": "https://schema.org", "@type": "WebPage", name: title, url: canonical(LOCAL_CITATIONS_PATH),
    about: {
      "@type": "LocalBusiness", "@id": canonical("/#localbusiness"), name: office.name,
      telephone: office.phone, url: office.website,
      address: { "@type": "PostalAddress", streetAddress: "No 10/135-G, Gurusamy Pillai St Extn, Podanur", addressLocality: "Coimbatore", addressRegion: "Tamil Nadu", postalCode: "641023", addressCountry: "IN" },
      areaServed: ["Coimbatore","Podanur","Kurichi","Sulur","Pollachi","Mettupalayam"].map(n => ({ "@type": "Place", name: n })),
      hasMap: OFFICE_MAPS_URL,
    },
    breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonical("/") },
      { "@type": "ListItem", position: 2, name: "Transportation", item: canonical("/transportation") },
      { "@type": "ListItem", position: 3, name: "Local citations", item: canonical(LOCAL_CITATIONS_PATH) },
    ] },
  };
  return <>
    <Helmet>
      <title>{title}</title><meta name="description" content={description} />
      <meta name="keywords" content="transport company in Coimbatore, lorry transport Coimbatore, truck transport Podanur, trailer transport Coimbatore, goods transport Sulur, Pollachi lorry service, Mettupalayam transport" />
      <link rel="canonical" href={canonical(LOCAL_CITATIONS_PATH)} />
      <meta property="og:title" content={title} /><meta property="og:description" content={description} />
      <meta property="og:type" content="website" /><meta property="og:url" content={canonical(LOCAL_CITATIONS_PATH)} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <Layout>
      <main className="pt-32 md:pt-40 pb-20">
        <header className="container mx-auto px-4 max-w-5xl pb-12">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8"><Link to="/" className="text-primary">Home</Link> / <Link to="/transportation" className="text-primary">Transportation</Link> / Local citations</nav>
          <p className="text-eyebrow text-primary mb-4">Podanur · Coimbatore</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">STA Corporate Solutions<br /><span className="text-muted-foreground">Local citations & office details</span></h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">Goods-transport enquiries since 1982, coordinated from one Podanur office. Local areas and port destinations below are delivery enquiry locations—not additional STA branches.</p>
        </header>
        <section className="bg-muted/40 py-12" aria-labelledby="office-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 id="office-heading" className="text-2xl font-semibold text-foreground mb-6">Our Podanur office</h2>
            <dl className="grid md:grid-cols-3 gap-8 text-foreground">
              <div><dt className="text-sm text-muted-foreground mb-2">Business name</dt><dd className="font-semibold">{office.name}</dd></div>
              <div><dt className="text-sm text-muted-foreground mb-2">Office address</dt><dd><address className="not-italic leading-relaxed">{office.address}</address></dd></div>
              <div><dt className="text-sm text-muted-foreground mb-2">Phone / WhatsApp</dt><dd>{office.phone}</dd><dt className="text-sm text-muted-foreground mt-4 mb-2">Website</dt><dd><a href={office.website} className="text-primary underline">sta-corporate.in</a></dd></div>
            </dl>
            <p className="text-sm text-muted-foreground mt-8">These business details match the managed Google Business Profile. The Maps link is an address search, not confirmation that Google verification is complete.</p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button asChild variant="outline"><a href={OFFICE_MAPS_URL} target="_blank" rel="noopener noreferrer"><MapPin className="h-4 w-4 mr-2" />Find the Podanur office</a></Button>
              <Button asChild><a href={`${office.whatsappUrl}?text=${encodeURIComponent("Hello STA, I’m enquiring about transport from your Podanur office. Please confirm availability.")}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4 mr-2" />WhatsApp enquiry</a></Button>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 max-w-5xl py-12" aria-labelledby="areas-heading">
          <h2 id="areas-heading" className="text-2xl font-semibold text-foreground mb-6">Coimbatore local service areas</h2>
          <div className="divide-y divide-border">{LOCAL_CITATION_AREAS.map(area => <article key={area.name} className="py-6 grid md:grid-cols-[180px_1fr] gap-3">
            <h3 className="text-lg font-semibold text-foreground">{area.name}</h3>
            <div><p className="text-muted-foreground leading-relaxed mb-3">{area.detail}</p><Link to={area.path} className="text-primary underline underline-offset-4">Transport enquiries for {area.name}</Link></div>
          </article>)}</div>
        </section>
        <section className="bg-muted/40 py-12" aria-labelledby="ports-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 id="ports-heading" className="text-2xl font-semibold text-foreground mb-4">Port delivery destinations from Coimbatore</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">Chennai in Tamil Nadu and Kochi in Kerala are onward road-freight destinations, not local Coimbatore stops. Enquiries cover delivery to the agreed port-side address; STA does not offer international shipping or customs clearance. Confirm the terminal, entry requirements, cargo and unloading arrangements before booking.</p>
            <div className="grid md:grid-cols-2 gap-8">{PORT_DELIVERY_REFERENCES.map(port => <article key={port.name}>
              <h3 className="text-lg font-semibold text-foreground mb-2">{port.name} · {port.state}</h3>
              <a href={port.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary underline underline-offset-4">Official port reference<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
            </article>)}</div>
            <p className="text-sm text-muted-foreground mt-8">Official references are provided for destination information; they do not imply an STA partnership or endorsement. Return loads towards Coimbatore are strictly subject to route availability.</p>
          </div>
        </section>
        <section className="container mx-auto px-4 max-w-5xl pt-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Coimbatore transport services</h2>
          <ul className="grid sm:grid-cols-2 gap-5">{services.map(service => <li key={service.slug}><Link to={`/transportation/services/${service.slug}`} className="inline-flex items-center gap-2 text-primary underline underline-offset-4">{service.shortName} in Coimbatore<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Link></li>)}</ul>
        </section>
        <section className="container mx-auto px-4 max-w-5xl pt-12" aria-labelledby="links-heading">
          <h2 id="links-heading" className="text-2xl font-semibold text-foreground mb-4">More Coimbatore transport pages</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">Looking for a lorry service in Coimbatore, truck transport from Podanur or trailer hire for heavy cargo? These pages cover vehicles and routes from our Coimbatore base.</p>
          <ul className="grid sm:grid-cols-2 gap-5">{[
            ["/transportation/coimbatore", "Goods transport in Coimbatore"],
            ["/transportation/from-coimbatore", "Routes from Coimbatore to Kerala & Karnataka"],
            ["/open-body-lorry-coimbatore", "Open body lorry in Coimbatore"],
            ["/service-areas", "All service areas"],
          ].map(([to, label]) => <li key={to}><Link to={to} className="inline-flex items-center gap-2 text-primary underline underline-offset-4">{label}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Link></li>)}</ul>
        </section>
      </main>
    </Layout>
  </>;
}