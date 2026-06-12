import { useParams, Link, Navigate } from "react-router-dom";
import { CORRIDOR_BY_SLUG, CORRIDORS, getCity } from "@/lib/seo/cities";
import { PillarPageShell, KeywordList } from "@/components/seo/PillarPageShell";
import { corridorUrl } from "@/lib/seo/slugs";
import { CheckCircle2, ArrowUpRight, Truck } from "lucide-react";
import { PILLAR_BY_ID } from "@/lib/seo/pillars";

/** Route corridor page — /transportation/routes/:slug */
export default function RouteCorridorPage() {
  const { slug } = useParams();
  const corridor = slug ? CORRIDOR_BY_SLUG[slug] : undefined;
  if (!corridor) return <Navigate to="/transportation" replace />;

  const from = getCity(corridor.from);
  const to = getCity(corridor.to);
  const pillar = PILLAR_BY_ID["transportation"];
  const path = corridorUrl(corridor.slug);

  const title = `${corridor.fromName} to ${corridor.toName} Transport`;
  const metaTitle = `${corridor.fromName} to ${corridor.toName} Lorry Transport (${corridor.distanceKm} km) | STA Corporate Solutions`;
  const metaDescription = `Full load lorry transport from ${corridor.fromName} to ${corridor.toName} — ${corridor.distanceKm} km. Return loads subject to route availability. Call +91 94430 33055.`;
  const keywords = [
    `${corridor.fromName.toLowerCase()} to ${corridor.toName.toLowerCase()} transport`,
    `${corridor.fromName.toLowerCase()} to ${corridor.toName.toLowerCase()} lorry`,
    `${corridor.fromName.toLowerCase()} to ${corridor.toName.toLowerCase()} freight`,
    `${corridor.fromName.toLowerCase()} to ${corridor.toName.toLowerCase()} cargo`,
    `truck booking ${corridor.fromName.toLowerCase()} ${corridor.toName.toLowerCase()}`,
  ];

  const faqs = [
    { q: `What is the distance from ${corridor.fromName} to ${corridor.toName}?`, a: `Approximately ${corridor.distanceKm} km by road.` },
    { q: `Is return load available on the ${corridor.fromName}–${corridor.toName} route?`, a: "Return loads are subject to route availability. Call us to confirm current truck schedules." },
    { q: `How long is transit from ${corridor.fromName} to ${corridor.toName}?`, a: `Typical transit ranges from ${Math.ceil(corridor.distanceKm / 500)}–${Math.ceil(corridor.distanceKm / 350)} days depending on truck type, traffic and unloading time.` },
    { q: `What truck sizes are available?`, a: "20ft, 24ft, 32ft and multi-axle trailers are available depending on your load and route." },
  ];

  return (
    <PillarPageShell
      title={title}
      heroAccent={`${corridor.distanceKm} km · Direct route`}
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      path={path}
      eyebrow={`Route · ${corridor.fromName} → ${corridor.toName}`}
      intro={`Direct full-load lorry transport between ${corridor.fromName} and ${corridor.toName}. Dedicated truck, transparent pricing and door-to-door movement.`}
      stats={[
        { value: `${corridor.distanceKm}`, label: "Distance (km)" },
        { value: `${Math.ceil(corridor.distanceKm / 450)}`, label: "Typical days" },
        { value: "Full Load", label: "Service" },
        { value: "Direct", label: "No transhipment" },
      ]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Transportation", url: pillar.path },
        { name: "Routes", url: pillar.path },
        { name: `${corridor.fromName} → ${corridor.toName}`, url: path },
      ]}
      serviceName={title}
      serviceArea={`${corridor.fromName}–${corridor.toName}, India`}
      faqs={faqs}
      keywords={keywords}
    >
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-eyebrow text-primary">Why this route</span>
            <h2 className="text-display-lg text-foreground mt-3 mb-5">
              {corridor.fromName} ↔ {corridor.toName} freight, handled directly
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We dispatch trucks on this corridor regularly. {from?.region} to {to?.region} is one of our active operating belts, with direct loading and consignee delivery.
            </p>
            <ul className="space-y-2.5">
              {["Dedicated full-load truck", "20ft / 24ft / multi-axle options", "Direct door-to-door delivery", "Return loads subject to route availability", "Transparent freight quote, no hidden charges"].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <KeywordList label="Searches on this corridor" items={keywords} />
        </div>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <p className="text-eyebrow text-primary mb-4">Other active corridors</p>
          <div className="flex flex-wrap gap-2">
            {CORRIDORS.filter((c) => c.slug !== corridor.slug).slice(0, 10).map((c) => (
              <Link
                key={c.slug}
                to={corridorUrl(c.slug)}
                className="px-4 py-2 rounded-full border border-border/60 text-sm text-foreground/80 hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                <Truck className="h-3.5 w-3.5" />
                {c.fromName} → {c.toName}
              </Link>
            ))}
            <Link
              to={pillar.path}
              className="px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium inline-flex items-center gap-1.5"
            >
              All routes <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </PillarPageShell>
  );
}
