import { useParams, useLocation, Link, Navigate } from "react-router-dom";
import { getPillar, getSub } from "@/lib/seo/pillars";
import { getCity, HUB_CITIES } from "@/lib/seo/cities";
import { PillarPageShell, KeywordList } from "@/components/seo/PillarPageShell";
import {
  pillarUrl,
  pillarCityUrl,
  pillarSubUrl,
  pillarCitySubUrl,
} from "@/lib/seo/slugs";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

/**
 * Programmatic city × sub-service combo page.
 * Route: /:pillar/:city/:sub
 */
export default function PillarCitySubPage() {
  const { city: citySlug, sub: subSlug } = useParams();
  const location = useLocation();
  const pillarId = location.pathname.split("/").filter(Boolean)[0];
  const pillar = getPillar(pillarId);
  const city = getCity(citySlug);
  if (!pillar) return <Navigate to="/" replace />;
  if (!city) return <Navigate to={pillar.path} replace />;
  const sub = subSlug ? getSub(pillar, subSlug) : undefined;
  if (!sub) return <Navigate to={pillarCityUrl(pillar, city.slug)} replace />;

  const path = pillarCitySubUrl(pillar, city.slug, sub.slug);
  const title = `${sub.name} in ${city.name}`;
  const metaTitle = `${sub.name} in ${city.name} | STA Corporate Solutions`;
  const metaDescription = `${sub.description} Available in ${city.name}, ${city.stateName}. Call +91 94430 33055.`;
  const keywords = [
    ...sub.keywords.map((k) => `${k} ${city.name.toLowerCase()}`),
    `${sub.shortName.toLowerCase()} ${city.name.toLowerCase()}`,
    `best ${sub.shortName.toLowerCase()} in ${city.name.toLowerCase()}`,
    `${sub.shortName.toLowerCase()} near ${city.name.toLowerCase()}`,
  ];

  const faqs = [
    { q: `Is ${sub.name} available in ${city.name}?`, a: `Yes. ${sub.description.replace(/\.$/, "")} — actively offered in ${city.name}, ${city.stateName}.` },
    { q: `Who is ${sub.shortName} in ${city.name} for?`, a: pillar.id === "financial-services" ? `Businesses, MSMEs, traders and professionals in ${city.name} seeking ${sub.shortName.toLowerCase()} support.` : `Individuals and organisations in ${city.name} needing ${sub.shortName.toLowerCase()}.` },
    { q: `How fast can ${sub.shortName} be arranged in ${city.name}?`, a: `Most ${sub.shortName.toLowerCase()} requests in ${city.name} are scoped within 24–48 hours of first call.` },
    pillar.id === "transportation" && sub.slug === "return-load" && { q: `Are return loads available out of ${city.name}?`, a: "Return loads are subject to route availability — call us to confirm current truck schedules." },
  ].filter(Boolean) as { q: string; a: string }[];

  return (
    <PillarPageShell
      title={title}
      heroAccent={`${city.stateName}`}
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      path={path}
      eyebrow={`${pillar.shortName} · ${sub.shortName} · ${city.name}`}
      intro={`${sub.description} ${pillar.cityIntro(city.name)}`}
      stats={[
        { value: "43+", label: "Years" },
        { value: city.name, label: city.stateName },
        { value: pillar.shortName, label: pillar.subLabel },
        { value: "Direct", label: "Contact" },
      ]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: pillar.name, url: pillarUrl(pillar) },
        { name: city.name, url: pillarCityUrl(pillar, city.slug) },
        { name: sub.shortName, url: path },
      ]}
      serviceName={`${sub.name} in ${city.name}`}
      serviceArea={`${city.name}, ${city.stateName}, India`}
      faqs={faqs}
      keywords={keywords}
    >
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-eyebrow text-primary">{sub.shortName} in {city.name}</span>
            <h2 className="text-display-lg text-foreground mt-3 mb-5">{title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {sub.description} Backed by 43 years of experience and a direct, no-middleman service model across {city.region}.
            </p>
            <ul className="space-y-2.5">
              {sub.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <p className="text-eyebrow text-primary mb-3">Coverage</p>
              <p className="text-foreground font-semibold">{city.name}, {city.stateName}</p>
              <p className="text-sm text-muted-foreground mt-1">{city.region} · {city.language}</p>
            </div>
            <KeywordList label="Searched in your area" items={keywords.slice(0, 6)} />
          </div>
        </div>
      </section>

      {/* Sibling sub-services in same city */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <p className="text-eyebrow text-primary mb-4">Other {pillar.subPath} in {city.name}</p>
          <div className="flex flex-wrap gap-2">
            {pillar.sub.filter((s) => s.slug !== sub.slug).slice(0, 8).map((s) => (
              <Link
                key={s.slug}
                to={pillarCitySubUrl(pillar, city.slug, s.slug)}
                className="px-4 py-2 rounded-full border border-border/60 text-sm text-foreground/80 hover:border-primary hover:text-primary transition-colors"
              >
                {s.shortName} in {city.name}
              </Link>
            ))}
            <Link
              to={pillarSubUrl(pillar, sub.slug)}
              className="px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium inline-flex items-center gap-1.5"
            >
              {sub.shortName} everywhere <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </PillarPageShell>
  );
}
