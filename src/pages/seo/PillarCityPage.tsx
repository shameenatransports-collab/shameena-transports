import { useParams, useLocation, Link, Navigate } from "react-router-dom";
import { getPillar } from "@/lib/seo/pillars";
import { getCity, HUB_CITIES } from "@/lib/seo/cities";
import {
  PillarPageShell,
} from "@/components/seo/PillarPageShell";
import {
  pillarUrl,
  pillarCityUrl,
  pillarCitySubUrl,
  pillarSubUrl,
} from "@/lib/seo/slugs";
import { localPageContent } from "@/lib/seo/local-content";
import { ArrowUpRight } from "lucide-react";

/**
 * Programmatic city page for any pillar.
 * Route: /:pillar/:city  (e.g. /transportation/coimbatore)
 * Pillar is inferred from the first path segment.
 */
export default function PillarCityPage() {
  const { city: citySlug } = useParams();
  const location = useLocation();
  const pillarId = location.pathname.split("/").filter(Boolean)[0];
  const pillar = getPillar(pillarId);
  const city = getCity(citySlug);

  if (!pillar) return <Navigate to="/" replace />;
  if (!city) return <Navigate to={pillar.path} replace />;


  const path = pillarCityUrl(pillar, city.slug);
  const content = localPageContent(pillar, city);
  const { metaTitle, metaDescription } = content;
  const keywords = [content.heading.toLowerCase(), `${pillar.shortName.toLowerCase()} ${city.stateName.toLowerCase()}`];
  const faqs = [
    { q: `How do I enquire from ${city.name}?`, a: `WhatsApp +91 94430 33055 with your location and requirements. Enquiries are coordinated from our Coimbatore address; availability is confirmed individually.` },
    { q: `What should I prepare for ${pillar.shortName.toLowerCase()} support?`, a: content.preparation.join(". ") + "." },
    { q: `What should I confirm before booking?`, a: content.boundary },
    { q: `Does STA have an office in ${city.name}?`, a: "Our confirmed office is No.302/2A7, VK Road, Peelamedu, Coimbatore – 641004. This page is for enquiries from your city and does not indicate a separate branch." },
  ];

  return (
    <PillarPageShell
      title={content.heading}
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      heroAccent={`${city.stateName} · ${city.region}`}
      path={path}
      eyebrow={`${pillar.name} · ${city.name}`}
      intro={content.intro}
      stats={[content.heritage, { value: "Coimbatore", label: "Based in" }, { value: city.name, label: "Enquiries from" }]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: pillar.name, url: pillarUrl(pillar) },
        { name: city.name, url: path },
      ]}
      serviceName={`${pillar.name} in ${city.name}`}
      serviceArea={`${city.name}, ${city.stateName}, India`}
      faqs={faqs}
      keywords={keywords}
    >
      {/* Sub-services grid */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <span className="text-eyebrow text-primary">{pillar.subLabel}s in {city.name}</span>
            <h2 className="text-display-lg text-foreground mt-3">
              {pillar.subLabel} options for {city.name} clients
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillar.sub.map((s) => (
              <Link
                key={s.slug}
                to={pillarCitySubUrl(pillar, city.slug, s.slug)}
                className="group rounded-lg border border-border/60 bg-card p-6 hover:border-primary/40 transition-opacity hover:opacity-90"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-foreground leading-tight">{s.shortName}</h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-display-lg text-foreground mb-5">Planning your enquiry from {city.name}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{content.localNote}</p>
            <p className="text-muted-foreground leading-relaxed mb-4">{content.boundary}</p>
            <p className="text-sm text-muted-foreground">{content.heritage.description}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">What to share before a quote</h2>
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground">{content.preparation.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      </section>
      {pillar.id === "transportation" && content.corridors.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-foreground mb-3">Freight route enquiries for {city.name}</h2>
            <p className="text-muted-foreground mb-6">Route pages are planning references, not fixed departure schedules. Confirm direction and availability for your booking.</p>
            <div className="flex flex-wrap gap-4">{content.corridors.map((route) => <Link key={route.slug} to={`/transportation/routes/${route.slug}`} className="text-primary underline underline-offset-4">{route.fromName} to {route.toName}</Link>)}</div>
          </div>
        </section>
      )}
      {/* Nearby city links */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-eyebrow text-primary mb-4">{pillar.name} across South India</p>
          <div className="flex flex-wrap gap-2">
            {HUB_CITIES.filter((c) => c.slug !== city.slug).map((c) => (
              <Link
                key={c.slug}
                to={pillarCityUrl(pillar, c.slug)}
                className="px-4 py-2 rounded-full border border-border/60 text-sm text-foreground/80 hover:border-primary hover:text-primary transition-colors"
              >
                {pillar.shortName} in {c.name}
              </Link>
            ))}
            <Link
              to={pillarUrl(pillar)}
              className="px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium"
            >
              All {pillar.name} →
            </Link>
            <Link to="/services" className="px-4 py-2 text-primary underline">All four services</Link>
            <Link to="/service-areas" className="px-4 py-2 text-primary underline">South India city directory</Link>
          </div>
        </div>
      </section>
    </PillarPageShell>
  );
}
