import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { CITIES } from "@/lib/seo/cities";
import { PILLARS } from "@/lib/seo/pillars";
import { pillarCityUrl, canonical } from "@/lib/seo/slugs";
import { MapPin, ArrowUpRight } from "lucide-react";

const states = ["Tamil Nadu", "Karnataka", "Telangana", "Andhra Pradesh", "Kerala"];
export default function ServiceAreas() {
  return <>
    <Helmet>
      <title>South India City & Service Directory | STA</title>
      <meta name="description" content="Explore transport, business funding assistance, legal documentation and education guidance for South India cities. Coimbatore-based; confirm service availability." />
      <link rel="canonical" href={canonical("/service-areas")} />
      <meta property="og:title" content="South India City & Service Directory | STA" />
      <meta property="og:description" content="City-specific enquiry guidance across Tamil Nadu, Karnataka, Telangana, Andhra Pradesh and Kerala, coordinated from Coimbatore." />
      <meta property="og:url" content={canonical("/service-areas")} />
      <meta property="og:type" content="website" />
    </Helmet>
    <Layout>
      <section className="bg-primary pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-primary-foreground/80 mb-4">Coimbatore · South India</p>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">South India city & service directory</h1>
          <p className="text-lg text-primary-foreground/90">Transportation, business funding assistance, legal documentation and education guidance. Enquiries are coordinated from our Peelamedu, Coimbatore office; these city pages do not represent local branches.</p>
        </div>
      </section>
      <nav aria-label="States" className="container mx-auto px-4 py-8 flex flex-wrap gap-x-6 gap-y-3">{states.map(state => <a key={state} href={`#${state.toLowerCase().replace(/ /g, "-")}`} className="text-primary underline underline-offset-4">{state}</a>)}</nav>
      {states.map(state => <section key={state} id={state.toLowerCase().replace(/ /g, "-")} className="py-12 border-t border-border scroll-mt-28">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">{state}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{CITIES.filter(city => city.stateName === state).map(city => <article key={city.slug} className="border-b border-border pb-6 min-w-0">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2 mb-3"><MapPin className="h-4 w-4 text-primary shrink-0" />{city.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{city.region}{city.slug === "bengaluru" ? " · Bangalore" : city.slug === "kochi" ? " · Cochin" : ""}</p>
            <div className="space-y-3">{PILLARS.map(pillar => <Link key={pillar.id} to={pillarCityUrl(pillar, city.slug)} className="flex items-center justify-between gap-3 text-sm text-primary hover:underline"><span>{pillar.name} in {city.name}</span><ArrowUpRight className="h-4 w-4 shrink-0" /></Link>)}</div>
          </article>)}</div>
        </div>
      </section>)}
      <section className="py-12 bg-muted/40"><div className="container mx-auto px-4 max-w-4xl"><h2 className="text-2xl font-semibold text-foreground mb-4">Confirm your requirements before engagement</h2><p className="text-muted-foreground mb-4">Transport routes, vehicle suitability and loading dates are confirmed per booking. Return loads are subject to route availability. Financial assistance is for businesses, industries and companies, strictly not personal loans; STA is not a lender. Legal and education requirements depend on the relevant authority or institution.</p><Link to="/services" className="text-primary underline">Explore all four services</Link></div></section>
      <CTASection />
    </Layout>
  </>;
}
