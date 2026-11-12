import { RETURN_ORIGINS, returnOriginUrl } from "@/lib/seo/return-origins";
import { localPageContent, practiceHeritage } from "@/lib/seo/local-content";
import { useParams, useLocation, Link, Navigate } from "react-router-dom";
import { getPillar, getSub } from "@/lib/seo/pillars";
import { HUB_CITIES } from "@/lib/seo/cities";
import { PillarPageShell, KeywordList } from "@/components/seo/PillarPageShell";
import { pillarUrl, pillarSubUrl, pillarCitySubUrl } from "@/lib/seo/slugs";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

/**
 * Programmatic pillar sub-service page (no city).
 * Route: /:pillar/(services|products|practice|programs|categories)/:sub
 */
export default function PillarSubPage() {
  const { sub: subSlug } = useParams();
  const location = useLocation();
  const pillarId = location.pathname.split("/").filter(Boolean)[0];
  const pillar = getPillar(pillarId);
  if (!pillar) return <Navigate to="/" replace />;
  const sub = subSlug ? getSub(pillar, subSlug) : undefined;
  if (!sub) return <Navigate to={pillarUrl(pillar)} replace />;

  const path = pillarSubUrl(pillar, sub.slug);
  const metaTitle = `${sub.name} | ${pillar.name} | STA`;
  const metaDescription = `${sub.description} ${pillar.tagline} — Coimbatore. Call +91 94430 33055.`;
  const keywords = [...sub.keywords, ...sub.keywords.map((k) => `${k} coimbatore`)];

  const faqs = [
    ...(sub.faqs ?? []),
    { q: `What is ${sub.name}?`, a: sub.description },
    {
      q: `Where is ${sub.shortName} available?`,
      a: sub.slug === "return-load" ? "Tamil Nadu, Kerala and Karnataka towards Coimbatore, strictly subject to route availability." : `In Coimbatore district. Enquiries are coordinated from Coimbatore; availability depends on your location and requirements.`,
    },
    {
      q: `How do I get a ${sub.shortName} quote?`,
      a: `Call +91 94430 33055 or WhatsApp us. Availability, fees and next steps are confirmed individually.`,
    },
  ].filter(Boolean) as { q: string; a: string }[];

  return (
    <PillarPageShell
      title={sub.name}
      heroAccent={pillar.name}
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      path={path}
      eyebrow={`${pillar.name} · ${sub.shortName}`}
      intro={sub.description}
      stats={[
        practiceHeritage(pillar.id),
        { value: "Coimbatore", label: "Based in" },
        { value: "WhatsApp", label: "Quotes via" },
        { value: "Coimbatore", label: "Coverage" },
      ]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: pillar.name, url: pillarUrl(pillar) },
        { name: sub.shortName, url: path },
      ]}
      serviceName={sub.name}
      serviceArea={sub.slug === "return-load" ? "Tamil Nadu, Kerala and Karnataka towards Coimbatore" : "Coimbatore district, Tamil Nadu"}
      faqs={faqs}
      keywords={keywords}
      answer={sub.answer}
    >
      {/* Benefits */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-eyebrow text-primary">What you get</span>
            <h2 className="text-display-lg text-foreground mt-3 mb-5">
              {sub.shortName} delivered with clarity
            </h2>
            <p className="text-muted-foreground leading-relaxed">{sub.description}</p>
          </div>
          <ul className="space-y-3">
            {sub.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span className="text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {(sub.tell || sub.caution) && (
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4 max-w-4xl grid md:grid-cols-2 gap-8">
            {sub.tell && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">What to tell us for a quote</h2>
                <ul className="space-y-2 text-foreground">
                  {sub.tell.map((t) => (
                    <li key={t} className="flex items-start gap-2.5"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />{t}</li>
                  ))}
                </ul>
              </div>
            )}
            {sub.caution && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Good to know</h2>
                <p className="text-muted-foreground leading-relaxed">{sub.caution}</p>
                <p className="text-muted-foreground leading-relaxed mt-3">STA does not offer cargo insurance. Freight is confirmed per booking; there is no fixed rate card.</p>
                <p className="mt-4 text-sm"><Link to="/open-body-lorry-coimbatore" className="text-primary underline">Open-body lorry guide for Coimbatore</Link></p>
              </div>
            )}
          </div>
        </section>
      )}

      {sub.slug === "return-load" && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-semibold text-foreground mb-4">Tamil Nadu, Kerala and Karnataka origins towards Coimbatore</h2>
            <div className="flex flex-wrap gap-2">
              {RETURN_ORIGINS.map((o) => (
                <Link key={o.slug} to={returnOriginUrl(o.slug)} className="px-4 py-2 rounded-full border border-border/60 text-sm text-foreground/80 hover:border-primary hover:text-primary">
                  {o.name} → Coimbatore
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local services do not imply return origins. */}
      {sub.slug !== "return-load" && <section className="py-20 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <span className="text-eyebrow text-primary">Where we deliver</span>
            <h2 className="text-display-lg text-foreground mt-3">{sub.shortName} in Coimbatore district</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HUB_CITIES.map((c) => (
              <Link
                key={c.slug}
                to={pillarCitySubUrl(pillar, c.slug, sub.slug)}
                className="group rounded-2xl border border-border/60 bg-card p-5 hover:border-primary/40 transition-colors flex items-center justify-between"
              >
                <span>
                  <span className="block font-semibold text-foreground">{sub.shortName} in {c.name}</span>
                  <span className="block text-xs text-muted-foreground">{c.region}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>}

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeywordList label="Related searches" items={keywords.slice(0, 8)} />
        </div>
      </section>
    </PillarPageShell>
  );
}
