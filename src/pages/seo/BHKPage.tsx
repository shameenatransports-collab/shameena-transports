import { useParams, Link, Navigate } from "react-router-dom";
import { BHK_BY_SLUG, BHK_TYPES, PILLAR_BY_ID } from "@/lib/seo/pillars";
import { getCity, CITIES } from "@/lib/seo/cities";
import { PillarPageShell, KeywordList } from "@/components/seo/PillarPageShell";
import { bhkUrl, pillarCityUrl } from "@/lib/seo/slugs";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

/** BHK variant page — /real-estate/:city/:bhk */
export default function BHKPage() {
  const { city: citySlug, bhk: bhkSlug } = useParams();
  const city = getCity(citySlug);
  const bhk = bhkSlug ? BHK_BY_SLUG[bhkSlug] : undefined;
  if (!city || !bhk) return <Navigate to="/real-estate" replace />;
  const pillar = PILLAR_BY_ID["real-estate"];
  const path = bhkUrl(city.slug, bhk.slug);

  const title = `${bhk.name} in ${city.name}`;
  const metaTitle = `${bhk.name} in ${city.name} | Real Estate | STA Corporate Solutions`;
  const metaDescription = `Discover ${bhk.name.toLowerCase()} options in ${city.name}, ${city.stateName} — hyperlocal real estate intelligence and verified listings.`;
  const keywords = [
    ...bhk.keywords.map((k) => `${k} ${city.name.toLowerCase()}`),
    `${bhk.name.toLowerCase()} ${city.name.toLowerCase()}`,
    `${bhk.name.toLowerCase()} for sale ${city.name.toLowerCase()}`,
    `${bhk.name.toLowerCase()} for rent ${city.name.toLowerCase()}`,
  ];

  const faqs = [
    { q: `Where can I find ${bhk.name.toLowerCase()} in ${city.name}?`, a: `${city.name} has multiple residential pockets offering ${bhk.name.toLowerCase()} — STA helps you shortlist by locality, price band and developer.` },
    { q: `Are these listings verified?`, a: "We work with vetted developers and verified resale listings; due diligence support is provided on request." },
    { q: `Do you support NRI buyers?`, a: "Yes — remote due diligence, documentation and purchase coordination for NRI buyers across South India." },
  ];

  return (
    <PillarPageShell
      title={title}
      heroAccent={city.stateName}
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      path={path}
      eyebrow={`Real Estate · ${bhk.name} · ${city.name}`}
      intro={`Curated ${bhk.name.toLowerCase()} options across ${city.name}'s key residential corridors. Backed by hyperlocal price intelligence and verified developer access.`}
      stats={[
        { value: city.name, label: city.stateName },
        { value: bhk.name.split(" ")[0], label: "Configuration" },
        { value: "Verified", label: "Listings" },
        { value: "NRI", label: "Friendly" },
      ]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Real Estate", url: pillar.path },
        { name: city.name, url: pillarCityUrl(pillar, city.slug) },
        { name: bhk.name, url: path },
      ]}
      serviceName={title}
      serviceArea={`${city.name}, ${city.stateName}, India`}
      faqs={faqs}
      keywords={keywords}
    >
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-eyebrow text-primary">{bhk.name} in {city.name}</span>
            <h2 className="text-display-lg text-foreground mt-3 mb-5">{title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From entry-segment to luxury, {bhk.name.toLowerCase()} options in {city.name} span emerging suburbs, established neighbourhoods and premium developments. We help you map budget, locality and developer in one conversation.
            </p>
            <ul className="space-y-2.5">
              {["Hyperlocal price intelligence", "Verified developer access", "Resale + new launch coverage", "NRI-friendly documentation", "Investment & end-use buyer support"].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <KeywordList label="Related property searches" items={keywords} />
        </div>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <p className="text-eyebrow text-primary mb-4">Other configurations in {city.name}</p>
          <div className="flex flex-wrap gap-2">
            {BHK_TYPES.filter((b) => b.slug !== bhk.slug).map((b) => (
              <Link
                key={b.slug}
                to={bhkUrl(city.slug, b.slug)}
                className="px-4 py-2 rounded-full border border-border/60 text-sm text-foreground/80 hover:border-primary hover:text-primary transition-colors"
              >
                {b.name} in {city.name}
              </Link>
            ))}
            <Link
              to={pillarCityUrl(pillar, city.slug)}
              className="px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium inline-flex items-center gap-1.5"
            >
              All in {city.name} <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </PillarPageShell>
  );
}
