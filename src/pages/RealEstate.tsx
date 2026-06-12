import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import {
  Home,
  Building2,
  TrendingUp,
  MapPin,
  Languages,
  Globe2,
  ShieldCheck,
  Hotel,
  Warehouse,
  Trees,
  Briefcase,
  Train,
} from "lucide-react";

const states = ["Tamil Nadu", "Karnataka", "Telangana", "Andhra Pradesh", "Kerala"];

const residential = [
  "Apartments & Flats",
  "Villas & Premium Residences",
  "Independent Houses",
  "Gated Communities",
  "Luxury Developments",
  "Senior Living Communities",
  "Student Housing",
  "Affordable Housing Projects",
];

const commercial = [
  "Office Spaces",
  "Business Parks",
  "Retail Shops",
  "Showrooms",
  "Commercial Complexes",
  "Co-Working Spaces",
  "Warehousing & Industrial Assets",
];

const investment = [
  "Land Parcels",
  "Development Sites",
  "Rental Yield Assets",
  "Commercial Investments",
  "Emerging Growth Corridors",
  "Infrastructure-Led Investment Zones",
  "Future Development Markets",
];

const intelligence = [
  { icon: TrendingUp, label: "Market Trends" },
  { icon: Building2, label: "Price Insights" },
  { icon: Train, label: "Metro & Connectivity" },
  { icon: MapPin, label: "Infrastructure Updates" },
  { icon: Briefcase, label: "Employment Hubs" },
  { icon: Hotel, label: "Tourism & Lifestyle" },
  { icon: Home, label: "Rental Demand" },
  { icon: Trees, label: "Emerging Localities" },
];

const scale = [
  { value: "5", label: "State Hubs" },
  { value: "200+", label: "Tier 1–4 Cities" },
  { value: "1,000+", label: "Localized Pages" },
  { value: "5", label: "Languages" },
];

const audience = [
  "Home Buyers",
  "First-Time Property Owners",
  "Real Estate Investors",
  "NRIs",
  "Developers",
  "Entrepreneurs",
  "Commercial Occupiers",
  "Land Buyers",
  "Rental Property Investors",
  "Hospitality & Tourism Investors",
];

export default function RealEstate() {
  return (
    <>
      <Helmet>
        <title>Real Estate | South India Property Discovery Network</title>
        <meta
          name="description"
          content="South India Property Intelligence & Discovery Network — residential, commercial and investment opportunities across Tamil Nadu, Karnataka, Telangana, Andhra Pradesh & Kerala."
        />
        <link rel="canonical" href="https://stacorps.lovable.app/real-estate" />
        <meta property="og:title" content="Real Estate | South India Property Discovery Network" />
        <meta
          property="og:description"
          content="Hyperlocal real estate intelligence and 1,000+ localized property pages across South India."
        />
        <meta property="og:url" content="https://stacorps.lovable.app/real-estate" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary-glow))_0%,transparent_50%),radial-gradient(circle_at_80%_80%,hsl(var(--secondary))_0%,transparent_50%)]" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background text-[11px] font-bold tracking-[0.18em] uppercase text-primary shadow-xl ring-1 ring-primary-foreground/40 mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Real Estate · South India
              </div>
              <h1 className="text-display-2xl text-primary-foreground mb-6">
                South India Property <br />
                <span className="bg-gradient-to-r from-secondary via-secondary to-primary-foreground bg-clip-text text-transparent">
                  Discovery Network
                </span>
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mb-10">
                A data-driven property intelligence ecosystem connecting buyers, investors, NRIs and businesses with
                hyperlocal opportunities across South India.
              </p>

              <div className="glass rounded-2xl p-1 inline-flex flex-wrap divide-x divide-border/40">
                {scale.map((s) => (
                  <div key={s.label} className="px-6 py-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-foreground">{s.value}</div>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-primary-foreground/70">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Regional Coverage */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mb-14">
              <span className="text-eyebrow text-primary">Regional Coverage</span>
              <h2 className="text-display-lg text-foreground mt-3">
                Five major growth markets across South India
              </h2>
              <p className="text-muted-foreground mt-4">
                Metropolitan cities, emerging Tier-2 markets, industrial hubs, educational corridors, tourism
                destinations and developing suburban regions.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {states.map((s) => (
                <div
                  key={s}
                  className="rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/40 transition-colors"
                >
                  <Globe2 className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                  <div className="text-lg font-semibold text-foreground">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Property Discovery Categories */}
        <section className="py-20 md:py-28 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mb-14">
              <span className="text-eyebrow text-primary">Property Discovery</span>
              <h2 className="text-display-lg text-foreground mt-3">Categories built for every buyer</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {[
                { icon: Home, title: "Residential", items: residential },
                { icon: Building2, title: "Commercial", items: commercial },
                { icon: TrendingUp, title: "Investment & Growth", items: investment },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border border-border/60 bg-card p-7">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <c.icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{c.title}</h3>
                  <ul className="space-y-2.5">
                    {c.items.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hyperlocal Intelligence */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mb-14">
              <span className="text-eyebrow text-primary">Hyperlocal Intelligence</span>
              <h2 className="text-display-lg text-foreground mt-3">
                Every city, a localized real estate knowledge hub
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {intelligence.map((d) => (
                <div
                  key={d.label}
                  className="rounded-2xl border border-border/60 bg-card p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <d.icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-semibold text-foreground">{d.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Multilingual */}
        <section className="py-20 md:py-28 bg-muted/40">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-eyebrow text-primary">Multilingual Experience</span>
              <h2 className="text-display-lg text-foreground mt-3 mb-4">
                Property discovery in five regional languages
              </h2>
              <p className="text-muted-foreground">
                English, Tamil, Kannada, Telugu and Malayalam — ensuring accessibility across South India's diverse
                property markets.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["English", "Tamil", "Kannada", "Telugu", "Malayalam"].map((l) => (
                <div key={l} className="flex items-center gap-3 rounded-xl border border-border/60 bg-card px-4 py-4">
                  <Languages className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <span className="font-medium text-foreground">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audience */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mb-12">
              <span className="text-eyebrow text-secondary">Built For</span>
              <h2 className="text-display-lg mt-3">Buyers, investors and businesses</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {audience.map((a) => (
                <div
                  key={a}
                  className="flex items-start gap-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-5"
                >
                  <ShieldCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                  <span className="font-medium">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </Layout>
    </>
  );
}
