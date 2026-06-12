import { useParams, useLocation, Link, Navigate } from "react-router-dom";
import { getPillar } from "@/lib/seo/pillars";
import { getCity, HUB_CITIES } from "@/lib/seo/cities";
import {
  PillarPageShell,
  KeywordList,
} from "@/components/seo/PillarPageShell";
import {
  pillarUrl,
  pillarCityUrl,
  pillarCitySubUrl,
  pillarSubUrl,
} from "@/lib/seo/slugs";
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

  if (!pillar || !city) return <Navigate to="/" replace />;


  const path = pillarCityUrl(pillar, city.slug);
  const title = `${pillar.name} in ${city.name}`;
  const metaTitle = `${pillar.name} in ${city.name}, ${city.stateName} | STA Corporate Solutions`;
  const metaDescription = `${pillar.tagline} in ${city.name}, ${city.stateName}. Trusted ${pillar.shortName.toLowerCase()} solutions since 1982. Call +91 94430 33055.`;
  const keywords = [
    `${pillar.shortName.toLowerCase()} ${city.name.toLowerCase()}`,
    `${pillar.shortName.toLowerCase()} services ${city.name.toLowerCase()}`,
    `best ${pillar.shortName.toLowerCase()} in ${city.name.toLowerCase()}`,
    `${pillar.shortName.toLowerCase()} ${city.stateName.toLowerCase()}`,
    ...pillar.sub.slice(0, 5).flatMap((s) => s.keywords.slice(0, 1).map((k) => `${k} ${city.name.toLowerCase()}`)),
  ];

  const faqs = [
    {
      q: `Do you provide ${pillar.shortName.toLowerCase()} services in ${city.name}?`,
      a: `Yes. STA Corporate Solutions actively serves ${city.name}, ${city.stateName} for ${pillar.name.toLowerCase()}. Reach us on +91 94430 33055 for a tailored quote.`,
    },
    {
      q: `What ${pillar.subLabel.toLowerCase()} options are available in ${city.name}?`,
      a: `We offer ${pillar.sub.slice(0, 6).map((s) => s.shortName).join(", ")} ${pillar.subPath} in ${city.name} and surrounding ${city.region}.`,
    },
    {
      q: `How quickly can you start in ${city.name}?`,
      a: `Most ${pillar.name.toLowerCase()} engagements in ${city.name} are scoped within 24–48 hours of the first call, subject to availability.`,
    },
    pillar.id === "transportation" && {
      q: `Is return-load freight available out of ${city.name}?`,
      a: `Return loads are subject to route availability. Call us to check current truck schedules out of ${city.name}.`,
    },
    pillar.id === "real-estate" && {
      q: `What property categories are listed in ${city.name}?`,
      a: `Residential apartments, villas, commercial offices, retail spaces, plots and investment opportunities across ${city.name}'s key localities.`,
    },
  ].filter(Boolean) as { q: string; a: string }[];

  return (
    <PillarPageShell
      title={`${pillar.name} in ${city.name}`}
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      heroAccent={`${city.stateName} · ${city.region}`}
      path={path}
      eyebrow={`${pillar.name} · ${city.name}`}
      intro={pillar.cityIntro(city.name)}
      stats={[
        { value: "43+", label: "Years" },
        { value: city.tier === 1 ? "Hub" : `Tier ${city.tier}`, label: city.name },
        { value: pillar.sub.length.toString(), label: pillar.subLabel + "s" },
        { value: "South India", label: "Coverage" },
      ]}
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
                className="group rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/40 hover:shadow-lg transition-all"
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

      {/* Why us */}
      <section className="py-20 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-eyebrow text-primary">Why STA in {city.name}</span>
            <h2 className="text-display-lg text-foreground mt-3 mb-5">
              43 years of trust, local to {city.region}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Operating from Coimbatore HQ since 1982, with active engagements in {city.name} and across {city.stateName}. Direct ownership of fleet and process means no middlemen — straight quotes, transparent service, single point of accountability.
            </p>
          </div>
          <KeywordList
            label={`Common ${pillar.shortName} searches in ${city.name}`}
            items={keywords.slice(0, 8)}
          />
        </div>
      </section>

      {/* Nearby city links */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-eyebrow text-primary mb-4">{pillar.name} in nearby cities</p>
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
          </div>
        </div>
      </section>
    </PillarPageShell>
  );
}
