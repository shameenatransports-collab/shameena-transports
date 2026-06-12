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
  const metaTitle = `${sub.name} | ${pillar.name} | STA Corporate Solutions`;
  const metaDescription = `${sub.description} ${pillar.tagline} — South India. Call +91 94430 33055.`;
  const keywords = [...sub.keywords, ...sub.keywords.map((k) => `${k} south india`)];

  const faqs = [
    { q: `What is ${sub.name}?`, a: sub.description },
    {
      q: `Where is ${sub.shortName} available?`,
      a: `Across South India — Tamil Nadu, Karnataka, Telangana, Andhra Pradesh and Kerala — with active engagements from Coimbatore HQ.`,
    },
    {
      q: `How do I get a ${sub.shortName} quote?`,
      a: `Call +91 94430 33055 or WhatsApp us. Most quotes are returned within 24 hours of the first call.`,
    },
    pillar.id === "transportation" && sub.slug === "return-load" && {
      q: "Is return-load freight always available?",
      a: "Return-load freight is subject to route availability. Call us to check current truck schedules on your route.",
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
        { value: "43+", label: "Years" },
        { value: "40+", label: "Cities" },
        { value: "5", label: "States" },
        { value: "South India", label: "Coverage" },
      ]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: pillar.name, url: pillarUrl(pillar) },
        { name: sub.shortName, url: path },
      ]}
      serviceName={sub.name}
      serviceArea="South India"
      faqs={faqs}
      keywords={keywords}
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

      {/* Cities */}
      <section className="py-20 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <span className="text-eyebrow text-primary">Where we deliver</span>
            <h2 className="text-display-lg text-foreground mt-3">{sub.shortName} across South India</h2>
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
                  <span className="block text-xs text-muted-foreground">{c.stateName}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <KeywordList label="Related searches" items={keywords.slice(0, 8)} />
        </div>
      </section>
    </PillarPageShell>
  );
}
