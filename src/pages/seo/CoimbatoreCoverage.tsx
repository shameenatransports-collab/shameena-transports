import { Link, Navigate, useParams } from "react-router-dom";
import { PillarPageShell } from "@/components/seo/PillarPageShell";
import { VEHICLES } from "@/lib/seo/lanes";
import { AREAS, AREA_BY_SLUG, AUDIENCES, AUDIENCE_BY_SLUG, AREAS_HUB_PATH, areaUrl, audienceUrl, areaKeywords } from "@/lib/seo/coimbatore-coverage";

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
    <PillarPageShell title="Lorry, Truck & Trailer Transport Across Coimbatore" metaTitle="Lorry, Truck & Trailer Transport in Coimbatore Areas | STA" metaDescription="Lorry, truck and trailer transport across Coimbatore: Podanur, Kurichi, Singanallur, Peelamedu, Thudiyalur, Saravanampatti and more. WhatsApp +91 94430 33055." path={AREAS_HUB_PATH} eyebrow="Coimbatore · Companies and individuals" intro="From our Podanur office we handle lorry, truck and trailer enquiries from companies and individuals across Coimbatore." answer={`STA Corporate Solutions provides lorry, truck and trailer transport across Coimbatore, from the Podanur office, for companies and individuals. Choose your area or customer type below, then ${CONTACT} with cargo, addresses and date. ${NOTE}`} breadcrumbs={[...crumbs, { name: "Areas", url: AREAS_HUB_PATH }]} serviceName="Lorry, Truck and Trailer Transport in Coimbatore" serviceArea="Coimbatore, Tamil Nadu" keywords={["lorry transport in coimbatore", "truck transport in coimbatore", "trailer transport in coimbatore", "lorry booking coimbatore", "goods transport coimbatore"]}
      faqs={[{ q: "Which parts of Coimbatore do you serve?", a: "Pickups and deliveries across Coimbatore city and district, coordinated from our Podanur office." }, { q: "Do you serve individuals as well as companies?", a: "Yes. Companies, shops and factories as well as individuals shifting house or moving goods." }, { q: "Is cargo insured?", a: "No. STA does not provide cargo insurance or accident cover." }]}>
      <section className="py-16 bg-background"><div className="container mx-auto px-4 max-w-5xl space-y-10">
        <div><h2 className="text-2xl font-semibold text-foreground mb-4">By area</h2><div className="flex flex-wrap gap-2">{AREAS.map((a) => <Link key={a.slug} to={areaUrl(a.slug)} className={pill}>{a.name}</Link>)}</div></div>
        <div><h2 className="text-2xl font-semibold text-foreground mb-4">For companies</h2><div className="flex flex-wrap gap-2">{AUDIENCES.filter((a) => a.group === "company").map((a) => <Link key={a.slug} to={audienceUrl(a.slug)} className={pill}>{a.name}</Link>)}</div></div>
        <div><h2 className="text-2xl font-semibold text-foreground mb-4">For individuals</h2><div className="flex flex-wrap gap-2">{AUDIENCES.filter((a) => a.group === "individual").map((a) => <Link key={a.slug} to={audienceUrl(a.slug)} className={pill}>{a.name}</Link>)}</div></div>
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
  const answer = `STA Corporate Solutions provides lorry, truck and trailer transport in ${a.name}, Coimbatore, for companies and individuals, coordinated from the Podanur office. ${a.context} ${CONTACT} with cargo, addresses and date. ${NOTE}`;
  const near = a.near.map((s) => AREA_BY_SLUG[s]).filter(Boolean);
  const forWho = a.kind === "residential" ? AUDIENCES.filter((x) => x.group === "individual") : a.kind === "industrial" ? AUDIENCES.filter((x) => ["factories-manufacturers", "equipment-owners", "traders-wholesalers"].includes(x.slug)) : AUDIENCES.slice(0, 4);
  return (
    <PillarPageShell title={title} metaTitle={`Lorry, Truck & Trailer in ${a.name.replace(/ \(.*\)/, "")}, Coimbatore | STA`} metaDescription={`Lorry, truck and trailer transport in ${a.name.replace(/ \(.*\)/, "")}, Coimbatore for companies and individuals. WhatsApp or call +91 94430 33055.`} path={areaUrl(a.slug)} eyebrow={`Coimbatore · ${a.name}`} intro={a.context} answer={answer} breadcrumbs={[...crumbs, { name: "Areas", url: AREAS_HUB_PATH }, { name: a.name, url: areaUrl(a.slug) }]} serviceName={title} serviceArea={`${a.name}, Coimbatore, Tamil Nadu`} keywords={areaKeywords(a.name)}
      faqs={[
        { q: `Can I book a lorry, truck or trailer in ${a.name}?`, a: `Yes. Share your cargo, the ${a.name} address and your date by ${CONTACT} and we confirm the vehicle.` },
        { q: `What should I share for a pickup in ${a.name}?`, a: a.share },
        { q: `Do you serve individuals and companies in ${a.name}?`, a: "Yes. We handle company dispatches as well as house shifting and personal goods." },
        { q: "Is cargo insured?", a: "No. STA does not provide cargo insurance or accident cover." },
      ]}>
      <section className="py-16 bg-background"><div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-10">
        <div><h2 className="text-2xl font-semibold text-foreground mb-4">Share for a {a.name} pickup</h2><p className="text-muted-foreground mb-6">{a.share}</p><h3 className="font-semibold text-foreground mb-3">Vehicles</h3><VehicleLinks slugs={["lorry", "truck", "trailer"]} /></div>
        <div><h2 className="text-2xl font-semibold text-foreground mb-4">Who this is for</h2><div className="flex flex-wrap gap-2">{forWho.map((x) => <Link key={x.slug} to={audienceUrl(x.slug)} className={pill}>{x.name}</Link>)}</div>
          {near.length > 0 && <><h3 className="font-semibold text-foreground mt-8 mb-3">Nearby areas</h3><div className="flex flex-wrap gap-2">{near.map((n) => <Link key={n.slug} to={areaUrl(n.slug)} className={pill}>{n.name}</Link>)}</div></>}
          <p className="text-sm text-muted-foreground mt-6">{NOTE} <Link className={link} to={AREAS_HUB_PATH}>All Coimbatore areas</Link></p></div>
      </div></section>
    </PillarPageShell>
  );
}

export function AudiencePage() {
  const { audience } = useParams();
  const a = audience ? AUDIENCE_BY_SLUG[audience] : undefined;
  if (!a) return <Navigate to={AREAS_HUB_PATH} replace />;
  const title = `Lorry, Truck & Trailer in Coimbatore for ${a.name}`;
  const vnames = VEHICLES.filter((v) => a.vehicles.includes(v.slug)).map((v) => v.name.toLowerCase());
  return (
    <PillarPageShell title={title} metaTitle={`${a.name}: Lorry, Truck & Trailer in Coimbatore | STA`} metaDescription={`${a.who} Lorry, truck and trailer from Podanur, Coimbatore. WhatsApp or call +91 94430 33055.`} path={audienceUrl(a.slug)} eyebrow={a.group === "company" ? "For companies · Coimbatore" : "For individuals · Coimbatore"} intro={a.who} answer={`STA Corporate Solutions serves ${a.name.toLowerCase()} in Coimbatore with ${vnames.join(", ")} transport from the Podanur office. ${CONTACT} with your cargo, addresses and date. ${NOTE}`} breadcrumbs={[...crumbs, { name: "Areas", url: AREAS_HUB_PATH }, { name: a.name, url: audienceUrl(a.slug) }]} serviceName={title} serviceArea="Coimbatore, Tamil Nadu" keywords={a.keywords}
      faqs={[
        { q: `Which vehicles suit ${a.name.toLowerCase()}?`, a: `${vnames.join(", ")}, depending on cargo, weight and dimensions. Suitability is confirmed per booking.` },
        { q: "What should I share for a quote?", a: a.tell.join("; ") + "." },
        { q: "Is cargo insured?", a: "No. STA does not provide cargo insurance or accident cover." },
      ]}>
      <section className="py-16 bg-background"><div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-10">
        <div><h2 className="text-2xl font-semibold text-foreground mb-4">Typical cargo</h2><ul className="list-disc pl-5 space-y-2 text-muted-foreground">{a.cargo.map((c) => <li key={c}>{c}</li>)}</ul><h3 className="font-semibold text-foreground mt-8 mb-3">Vehicles</h3><VehicleLinks slugs={a.vehicles} /></div>
        <div><h2 className="text-2xl font-semibold text-foreground mb-4">What to share</h2><ul className="list-disc pl-5 space-y-2 text-muted-foreground">{a.tell.map((t) => <li key={t}>{t}</li>)}</ul><p className="text-sm text-muted-foreground mt-6">{NOTE} <Link className={link} to={AREAS_HUB_PATH}>All Coimbatore areas</Link></p></div>
      </div></section>
    </PillarPageShell>
  );
}
