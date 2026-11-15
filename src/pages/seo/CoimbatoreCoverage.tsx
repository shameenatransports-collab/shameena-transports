import { Link, Navigate, useParams } from "react-router-dom";
import { PillarPageShell } from "@/components/seo/PillarPageShell";
import { VEHICLES } from "@/lib/seo/lanes";
import { AREAS, AREA_BY_SLUG, AREAS_HUB_PATH, areaUrl, areaKeywords } from "@/lib/seo/coimbatore-coverage";
import { INTENT_PATHS, BUYER_LABEL } from "@/lib/seo/intents";
import { groupedIntents } from "@/pages/seo/IntentPages";

import { INTENT_BY_SLUG } from "@/lib/seo/intents";
const INTENTS_BY = (slug: string) => INTENT_BY_SLUG[slug];
const link = "text-primary underline underline-offset-4";
const pill = "px-4 py-2 rounded-full border border-border/60 text-sm text-foreground/80 hover:border-primary hover:text-primary";
const NOTE = "Vehicle, load, date and freight are confirmed per booking. STA does not provide cargo insurance. Return loads are strictly on availability.";
const CONTACT = "WhatsApp or call +91 94430 33055";
const crumbs = [{ name: "Home", url: "/" }, { name: "Transportation", url: "/transportation" }, { name: "Coimbatore", url: "/transportation/coimbatore" }];

function VehicleLinks({ slugs }: { slugs: string[] }) {
  return <div className="flex flex-wrap gap-2">{VEHICLES.filter((v) => slugs.includes(v.slug)).map((v) => <Link key={v.slug} to={`/transportation/services/${v.slug}-transport`} className={pill}>{v.name} transport in Coimbatore</Link>)}</div>;
}

export function AreasHub() {
  return (
    <PillarPageShell title="Lorry, Truck & Trailer in Coimbatore: Hire, Rent and Booking" metaTitle="Lorry on Hire, Truck on Rent, Trailer Transport in Coimbatore | STA" metaDescription="Lorry on hire, truck on rent and trailer transport in Coimbatore for factories, builders, traders and individuals. WhatsApp or call +91 94430 33055." path={AREAS_HUB_PATH} eyebrow="Coimbatore · Hire, rent and booking" intro="Find the page that matches what you are looking for: lorry on hire, truck on rent, trailer transport, builders' material, factory goods and more." answer={`STA Corporate Solutions provides lorry, truck and trailer transport across Coimbatore, from the Podanur office, for companies and individuals. Pick what you are looking for below, then ${CONTACT} with cargo, addresses and date. ${NOTE}`} breadcrumbs={[...crumbs, { name: "Areas", url: AREAS_HUB_PATH }]} serviceName="Lorry, Truck and Trailer Transport in Coimbatore" serviceArea="Coimbatore, Tamil Nadu" keywords={["lorry transport in coimbatore", "truck transport in coimbatore", "trailer transport in coimbatore", "lorry booking coimbatore", "goods transport coimbatore"]}
      faqs={[{ q: "Which parts of Coimbatore do you serve?", a: "Pickups and deliveries across Coimbatore city and district, coordinated from our Podanur office." }, { q: "Do you serve individuals as well as companies?", a: "Yes. Companies, shops and factories as well as individuals shifting house or moving goods." }, { q: "Is cargo insured?", a: "No. STA does not provide cargo insurance or accident cover." }]}>
      <section className="py-16 bg-background"><div className="container mx-auto px-4 max-w-5xl space-y-10">
        {groupedIntents().map(([buyer, list]) => (
          <div key={buyer}><h2 className="text-2xl font-semibold text-foreground mb-4">{BUYER_LABEL[buyer]}</h2><div className="flex flex-wrap gap-2">{list.map((i) => <Link key={i.slug} to={INTENT_PATHS(i.slug)} className={pill}>{i.h1}</Link>)}</div></div>
        ))}
        <div><h2 className="text-2xl font-semibold text-foreground mb-4">By area in Coimbatore</h2><div className="flex flex-wrap gap-2">{AREAS.map((a) => <Link key={a.slug} to={areaUrl(a.slug)} className={pill}>{a.name}</Link>)}</div></div>
        <p className="text-sm text-muted-foreground">{NOTE} Outbound routes: <Link className={link} to="/transportation/from-coimbatore">Coimbatore to Kerala and Karnataka</Link>.</p>
      </div></section>
    </PillarPageShell>
  );
}

export function AreaPage() {
  const { area } = useParams();
  const a = area ? AREA_BY_SLUG[area] : undefined;
  if (!a) return <Navigate to={AREAS_HUB_PATH} replace />;
  const title = `Lorry, Truck & Trailer Transport in ${a.name}, Coimbatore`;
  const answer = `STA Corporate Solutions provides lorry, truck and trailer transport for pickups and deliveries in ${a.name}, Coimbatore, coordinated from the Podanur office. ${CONTACT} with cargo, addresses and date. ${NOTE}`;
  const near = a.near.map((s) => AREA_BY_SLUG[s]).filter(Boolean);
  const forWho = ["lorry-on-hire-coimbatore", "truck-on-hire-coimbatore", "construction-material-lorry-coimbatore", "factory-goods-transport-coimbatore", "house-shifting-lorry-coimbatore"].map((x) => INTENTS_BY(x)).filter(Boolean);
  return (
    <PillarPageShell title={title} metaTitle={`Lorry & Truck in ${a.name.replace(/ \(.*\)/, "")}, Coimbatore | STA`} metaDescription={`Lorry, truck and trailer transport in ${a.name.replace(/ \(.*\)/, "")}, Coimbatore for companies and individuals. WhatsApp or call +91 94430 33055.`} path={areaUrl(a.slug)} eyebrow={`Coimbatore · ${a.name}`} intro={`Lorry, truck and trailer pickups and deliveries in ${a.name}, Coimbatore, coordinated from our Podanur office.`} answer={answer} breadcrumbs={[...crumbs, { name: "Areas", url: AREAS_HUB_PATH }, { name: a.name, url: areaUrl(a.slug) }]} serviceName={title} serviceArea={`${a.name}, Coimbatore, Tamil Nadu`} keywords={areaKeywords(a.name)}
      faqs={[
        { q: `Can I book a lorry, truck or trailer in ${a.name}?`, a: `Yes. Share your cargo, the ${a.name} address and your date by ${CONTACT} and we confirm the vehicle.` },
        { q: `What should I share for a pickup in ${a.name}?`, a: a.share },
        { q: `Do you serve companies and individuals in ${a.name}?`, a: "Yes. We handle company dispatches as well as house shifting and personal goods." },
        { q: "Is cargo insured?", a: "No. STA does not provide cargo insurance or accident cover." },
      ]}>
      <section className="py-16 bg-background"><div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-10">
        <div><h2 className="text-2xl font-semibold text-foreground mb-4">Share for a {a.name} pickup</h2><p className="text-muted-foreground mb-6">{a.share}</p><h3 className="font-semibold text-foreground mb-3">Vehicles</h3><VehicleLinks slugs={["lorry", "truck", "trailer"]} /></div>
        <div><h2 className="text-2xl font-semibold text-foreground mb-4">Popular searches</h2><div className="flex flex-wrap gap-2">{forWho.map((x) => <Link key={x!.slug} to={INTENT_PATHS(x!.slug)} className={pill}>{x!.h1}</Link>)}</div>
          {near.length > 0 && <><h3 className="font-semibold text-foreground mt-8 mb-3">Nearby areas</h3><div className="flex flex-wrap gap-2">{near.map((n) => <Link key={n.slug} to={areaUrl(n.slug)} className={pill}>{n.name}</Link>)}</div></>}
          <p className="text-sm text-muted-foreground mt-6">{NOTE} <Link className={link} to={AREAS_HUB_PATH}>All Coimbatore areas</Link></p></div>
      </div></section>
    </PillarPageShell>
  );
}
