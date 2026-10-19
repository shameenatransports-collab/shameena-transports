import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { ChevronRight, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { canonical } from "@/lib/seo/slugs";

export interface Crumb { name: string; url: string }
export interface FAQ { q: string; a: string }

interface PillarPageShellProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  path: string; // for canonical/og
  eyebrow: string;
  heroAccent?: string;
  intro: string;
  stats?: { value: string; label: string }[];
  breadcrumbs: Crumb[];
  // Service type for schema
  serviceName?: string;
  serviceArea?: string;
  faqs?: FAQ[];
  keywords?: string[]; // meta keywords
  children: ReactNode;
}

export function PillarPageShell({
  title, metaTitle, metaDescription, path, eyebrow, heroAccent,
  intro, stats, breadcrumbs, serviceName, serviceArea, faqs, keywords, children,
}: PillarPageShellProps) {
  const url = canonical(path);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: canonical(b.url),
    })),
  };

  const serviceSchema = serviceName && {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    provider: { "@type": "LocalBusiness", "@id": canonical("/#localbusiness"), name: "STA Corporate Solutions", telephone: "+91-94430-33055", address: { "@type": "PostalAddress", streetAddress: "No.302/2A7, VK Road, Peelamedu", addressLocality: "Coimbatore", addressRegion: "Tamil Nadu", postalCode: "641004", addressCountry: "IN" } },
    areaServed: serviceArea ?? "South India",
    description: metaDescription,
    url,
  };

  const faqSchema = faqs && faqs.length > 0 && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {keywords && keywords.length > 0 && (
          <meta name="keywords" content={keywords.join(", ")} />
        )}
        <link rel="canonical" href={url} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {serviceSchema && (
          <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        )}
        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary-glow))_0%,transparent_50%),radial-gradient(circle_at_80%_80%,hsl(var(--secondary))_0%,transparent_50%)]" />
          <div className="container mx-auto px-4 relative">
            {/* breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-8 text-[12px] text-primary-foreground/70 flex flex-wrap items-center gap-1.5">
              {breadcrumbs.map((b, i) => (
                <span key={b.url} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3 w-3 opacity-50" />}
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-primary-foreground/90">{b.name}</span>
                  ) : (
                    <Link to={b.url} className="hover:text-primary-foreground transition-colors">
                      {b.name}
                    </Link>
                  )}
                </span>
              ))}
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background text-[11px] font-bold tracking-[0.18em] uppercase text-primary shadow-xl ring-1 ring-primary-foreground/40 mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                {eyebrow}
              </div>
              <h1 className="text-display-2xl text-primary-foreground mb-6">
                {title}
                {heroAccent && (
                  <>
                    <br />
                    <span className="bg-gradient-to-r from-secondary via-secondary to-primary-foreground bg-clip-text text-transparent">
                      {heroAccent}
                    </span>
                  </>
                )}
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mb-10">{intro}</p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="tel:+919443033055">
                  <Button size="lg" className="rounded-full px-6 h-11 text-[13.5px] font-medium gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-xl">
                    <Phone className="h-4 w-4" /> +91 94430 33055
                  </Button>
                </a>
                <a
                  href={`https://wa.me/919443033055?text=${encodeURIComponent(`Hello STA, I’m enquiring about ${serviceName ?? title}. Please confirm availability and next steps.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="rounded-full px-6 h-11 text-[13.5px] font-medium gap-2 bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/20">
                    <MessageCircle className="h-4 w-4" /> WhatsApp Us
                  </Button>
                </a>
              </div>

              {stats && stats.length > 0 && (
                <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 rounded-2xl p-1 inline-flex flex-wrap divide-x divide-primary-foreground/15">
                  {stats.map((s) => (
                    <div key={s.label} className="px-6 py-4 text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary-foreground">{s.value}</div>
                      <div className="text-[11px] uppercase tracking-[0.16em] text-primary-foreground/70">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {children}

        {/* FAQ block (if any) */}
        {faqs && faqs.length > 0 && (
          <section className="py-20 md:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="mb-12">
                <span className="text-eyebrow text-primary">Questions</span>
                <h2 className="text-display-lg text-foreground mt-3">Frequently asked</h2>
              </div>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-2xl border border-border/60 bg-card p-6 open:shadow-md transition-shadow"
                  >
                    <summary className="font-semibold text-foreground cursor-pointer list-none flex items-start justify-between gap-4">
                      {f.q}
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-open:rotate-90 transition-transform flex-shrink-0" />
                    </summary>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </Layout>
    </>
  );
}

// Helper for keyword bullets
export function KeywordList({ items, label }: { items: string[]; label?: string }) {
  return (
    <div>
      {label && <p className="text-eyebrow text-primary mb-3">{label}</p>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {items.map((k) => (
          <li key={k} className="flex items-start gap-2 text-sm text-foreground/80">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
            {k}
          </li>
        ))}
      </ul>
    </div>
  );
}
