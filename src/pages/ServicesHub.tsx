import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { PILLARS } from "@/lib/seo/pillars";
import { HUB_CITIES } from "@/lib/seo/cities";
import { pillarCityUrl, canonical } from "@/lib/seo/slugs";
import { ArrowUpRight, Truck, Banknote, Scale, GraduationCap, Building2 } from "lucide-react";

const ICONS: Record<string, typeof Truck> = {
  transportation: Truck,
  "financial-services": Banknote,
  "legal-services": Scale,
  "edu-consultancy": GraduationCap,
  "real-estate": Building2,
};

export default function ServicesHub() {
  const url = canonical("/services");
  const metaTitle = "All Services | Transportation, Finance, Legal, Edu Consultancy | STA Corporate Solutions";
  const metaDescription = "Four integrated practices across South India — Transportation, Financial Services, Legal Services and Edu Consultancy. 43+ years of trust.";

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={url} />
      </Helmet>
      <Layout>
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary-glow))_0%,transparent_50%),radial-gradient(circle_at_80%_80%,hsl(var(--secondary))_0%,transparent_50%)]" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background text-[11px] font-bold tracking-[0.18em] uppercase text-primary shadow-xl ring-1 ring-primary-foreground/40 mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Five Practices · One Partner
              </div>
              <h1 className="text-display-2xl text-primary-foreground mb-6">
                All STA Services <br />
                <span className="bg-gradient-to-r from-secondary via-secondary to-primary-foreground bg-clip-text text-transparent">
                  for South India
                </span>
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl">
                Transportation, Financial Services, Legal Services and Edu Consultancy — four integrated practices serving individuals and businesses across Tamil Nadu, Karnataka, Telangana, Andhra Pradesh and Kerala.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-6">
            {PILLARS.map((p, i) => {
              const Icon = ICONS[p.id];
              return (
                <Link
                  key={p.id}
                  to={p.path}
                  className="group rounded-3xl border border-border/60 bg-card p-8 hover:border-primary/40 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                    </div>
                    <span className="text-3xl font-bold text-foreground/15 tabular-nums">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="text-eyebrow text-primary mb-2">{p.shortName}</p>
                  <h2 className="text-2xl font-bold text-foreground mb-3">{p.name}</h2>
                  <p className="text-muted-foreground mb-6">{p.tagline}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.sub.slice(0, 5).map((s) => (
                      <span
                        key={s.slug}
                        className="px-3 py-1 rounded-full bg-muted text-[12px] text-foreground/75"
                      >
                        {s.shortName}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Explore {p.shortName}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4">
            <p className="text-eyebrow text-primary mb-4">Browse by city</p>
            <div className="flex flex-wrap gap-2">
              {HUB_CITIES.map((c) =>
                PILLARS.slice(0, 3).map((p) => (
                  <Link
                    key={`${p.id}-${c.slug}`}
                    to={pillarCityUrl(p, c.slug)}
                    className="px-4 py-2 rounded-full border border-border/60 text-sm text-foreground/80 hover:border-primary hover:text-primary transition-colors"
                  >
                    {p.shortName} in {c.name}
                  </Link>
                ))
              )}
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
}
