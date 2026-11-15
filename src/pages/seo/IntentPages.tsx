import { Link, Navigate } from "react-router-dom";
import { PillarPageShell } from "@/components/seo/PillarPageShell";
import { INTENTS, INTENT_BY_SLUG, BUYER_LABEL, Buyer, Intent, INTENT_PATHS } from "@/lib/seo/intents";
import { VEHICLES } from "@/lib/seo/lanes";

const link = "text-primary underline underline-offset-4";
const pill = "px-4 py-2 rounded-full border border-border/60 text-sm text-foreground/80 hover:border-primary hover:text-primary";
const NOTE = "Vehicle, load, date and freight are confirmed per booking; there is no public rate card. STA does not provide cargo insurance. Return loads are strictly on availability.";
const crumbs = [{ name: "Home", url: "/" }, { name: "Transportation", url: "/transportation" }, { name: "Coimbatore", url: "/transportation/coimbatore" }];
export const INTENT_HUB = "/transportation/coimbatore/areas";

export function IntentPage({ slug }: { slug: string }) {
  const i = INTENT_BY_SLUG[slug];
  if (!i) return <Navigate to={INTENT_HUB} replace />;
  const vehicles = [...VEHICLES.filter((v) => i.vehicles.includes(v.slug as Intent["vehicles"][number])).map((v) => ({ slug: v.slug, name: v.name })), ...(i.vehicles.includes("mini-truck") ? [{ slug: "mini-truck", name: "Mini truck (Tata Ace)" }] : [])];
  const faqs = [...i.faqs, { q: "Does STA provide cargo insurance?", a: "No. STA does not provide cargo insurance or accident cover." }];
  return (
    <PillarPageShell title={i.h1} metaTitle={`${i.h1} | STA Corporate Solutions`} metaDescription={`${i.h1}: lorry, truck and trailer from Podanur, Coimbatore since 1982. WhatsApp or call +91 94430 33055.`} path={INTENT_PATHS(i.slug)} eyebrow={`Coimbatore · ${BUYER_LABEL[i.buyer]}`} intro={i.answer} answer={`${i.answer} ${NOTE}`} breadcrumbs={[...crumbs, { name: i.h1, url: INTENT_PATHS(i.slug) }]} serviceName={i.h1} serviceArea="Coimbatore, Tamil Nadu" keywords={[i.primary, ...i.variants]} faqs={faqs}>
      <section className="py-16 bg-background"><div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-10">
        <div><h2 className="text-2xl font-semibold text-foreground mb-4">{i.guideTitle}</h2><ul className="list-disc pl-5 space-y-2.5 text-muted-foreground">{i.guide.map((g) => <li key={g}>{g}</li>)}</ul></div>
        <div><h2 className="text-2xl font-semibold text-foreground mb-4">Share this when you call or WhatsApp</h2><ul className="list-disc pl-5 space-y-2.5 text-muted-foreground">{i.tell.map((t) => <li key={t}>{t}</li>)}</ul>
          <h3 className="font-semibold text-foreground mt-8 mb-3">Vehicles for this</h3><div className="flex flex-wrap gap-2">{vehicles.map((v) => <Link key={v.slug} to={`/transportation/services/${v.slug}-transport`} className={pill}>{v.name} transport in Coimbatore</Link>)}</div></div>
      </div></section>
      <section className="py-12 bg-muted/40"><div className="container mx-auto px-4 max-w-5xl">
        <p className="text-eyebrow text-primary mb-3">Also searched</p>
        <div className="flex flex-wrap gap-2 mb-6">{i.related.map((r) => INTENT_BY_SLUG[r]).filter(Boolean).map((r) => <Link key={r.slug} to={INTENT_PATHS(r.slug)} className={pill}>{r.h1}</Link>)}</div>
        <p className="text-sm text-muted-foreground">{NOTE} <Link className={link} to={INTENT_HUB}>All Coimbatore lorry, truck and trailer pages</Link>. Routes: <Link className={link} to="/transportation/from-coimbatore">Coimbatore to Kerala and Karnataka</Link>.</p>
      </div></section>
    </PillarPageShell>
  );
}

export function groupedIntents(): [Buyer, Intent[]][] {
  return (Object.keys(BUYER_LABEL) as Buyer[]).map((b) => [b, INTENTS.filter((i) => i.buyer === b)] as [Buyer, Intent[]]).filter(([, l]) => l.length > 0);
}
