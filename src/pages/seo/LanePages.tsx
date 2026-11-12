import { Link, Navigate, useParams } from "react-router-dom";
import { PillarPageShell } from "@/components/seo/PillarPageShell";
import { DESTINATIONS, INDUSTRIES, VEHICLES, LANES_HUB_PATH, RETURN_AVAILABILITY, laneUrl, industryUrl, laneKeywords } from "@/lib/seo/lanes";
import { RETURN_HUB_PATH, returnOriginUrl } from "@/lib/seo/return-origins";

const linkClass = "text-primary underline underline-offset-4";
export default function LanePages() {
  const params = useParams();
  const destination = DESTINATIONS.find(d => d.slug === params.destination);
  const vehicle = VEHICLES.find(v => v.slug === params.vehicle);
  const industry = INDUSTRIES.find(i => i.slug === params.industry);
  if ((params.destination && !destination) || (params.vehicle && !vehicle) || (params.industry && !industry)) return <Navigate to={LANES_HUB_PATH} replace />;
  const path = industry ? industryUrl(industry.slug) : destination ? laneUrl(destination.slug, vehicle?.slug) : LANES_HUB_PATH;
  const title = industry ? `${industry.name} Transport from Coimbatore` : destination ? `${vehicle?.name ?? "Lorry, Truck & Trailer"} Transport from Coimbatore to ${destination.name}` : "Lorry, Truck & Trailer Transport from Coimbatore";
  const intro = industry ? `${industry.cargo} from Coimbatore, with local deliveries and Kerala/Karnataka destinations considered per enquiry.` : destination ? `${vehicle?.name ?? "Lorry, truck and trailer"} transport from Coimbatore, Tamil Nadu to ${destination.name}, ${destination.state}. Vehicle suitability, loading date and freight are confirmed per booking.` : "Coimbatore-based goods transport since 1982. Local district services and outbound lorry, truck and trailer enquiries to Kerala and Karnataka, confirmed per booking.";
  const answer = `${intro} ${RETURN_AVAILABILITY} Destination cities describe delivery locations, not STA branches. Share cargo, weight, dimensions, pickup, delivery and preferred date on WhatsApp +91 94430 33055.`;
  const faqs = [
    { q: destination ? `Can I book ${vehicle?.name.toLowerCase() ?? "goods"} transport from Coimbatore to ${destination.name}?` : "Where do outbound trips originate?", a: intro },
    { q: destination ? `Is ${destination.name} to Coimbatore return transport guaranteed?` : "Are inbound return loads guaranteed?", a: `No. ${RETURN_AVAILABILITY} Enquiries are for vehicles returning from Tamil Nadu, Kerala or Karnataka towards Coimbatore, not fixed departures.` },
    { q: "What determines the quote?", a: "Pickup and delivery addresses, cargo type, permitted load, dimensions, loading and unloading effort, date and waiting time. No fixed rate or transit-time promise is made." },
    { q: "Does STA provide cargo insurance?", a: "No. STA does not provide cargo insurance or accident cover; customers should arrange their own cover for goods in transit." },
  ];
  return <PillarPageShell title={title} metaTitle={`${title} | STA`} metaDescription={intro} path={path}
    eyebrow={industry ? "Industry cargo · Origin: Coimbatore" : "Origin: Coimbatore, Tamil Nadu"}
    intro={intro} answer={answer} serviceName={title}
    serviceArea={destination ? `Coimbatore, Tamil Nadu to ${destination.name}, ${destination.state}` : "Coimbatore-origin local, Kerala and Karnataka routes"}
    breadcrumbs={[{ name: "Home", url: "/" }, { name: "Transportation", url: "/transportation" }, { name: "From Coimbatore", url: LANES_HUB_PATH }, ...(path !== LANES_HUB_PATH ? [{ name: industry?.name ?? destination?.name ?? title, url: path }] : [])]}
    keywords={destination ? laneKeywords(destination, vehicle) : ["lorry transport from coimbatore", "truck transport in coimbatore", "trailer transport in coimbatore"]} faqs={faqs}>
    <section className="py-16 bg-background"><div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-10">
      <div><h2 className="text-2xl font-semibold text-foreground mb-4">{industry ? "Cargo and loading requirements" : "Plan your cargo movement"}</h2>
        <p className="text-muted-foreground mb-4">{industry?.cargo ?? destination?.context ?? "Pumps, motors, foundry castings, textile bales, bundled steel, bagged material and packed commercial goods are considered against the vehicle allotted."}</p>
        <p className="text-muted-foreground">{industry?.preparation ?? destination?.preparation ?? "Share the exact pickup and delivery locations, weight, dimensions, packing and loading equipment at both ends."}</p>
        {destination && <p className="text-sm text-muted-foreground mt-4">{destination.name} is also known as {destination.alias}. This route is coordinated from Coimbatore; it does not represent a destination branch.</p>}
      </div><div><h2 className="text-2xl font-semibold text-foreground mb-4">Vehicle suitability</h2>
        {(vehicle ? [vehicle] : VEHICLES).map(v => <article key={v.slug} className="border-b border-border pb-4 mb-4"><h3 className="font-semibold text-foreground mb-2">{v.name}</h3><p className="text-muted-foreground text-sm">{v.cargo}. {v.limit}</p>{destination && <Link className={linkClass} to={laneUrl(destination.slug, v.slug)}>{v.name} to {destination.name}</Link>}</article>)}
      </div></div></section>
    <section className="py-12 bg-muted/40"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-2xl font-semibold text-foreground mb-4">Inbound enquiries towards Coimbatore</h2><p className="text-muted-foreground mb-4">{RETURN_AVAILABILITY} Outbound bookings do not guarantee a returning vehicle for the reverse journey.</p><Link className={linkClass} to={destination ? returnOriginUrl(destination.slug) : RETURN_HUB_PATH}>{destination ? `${destination.name} to Coimbatore — check availability` : "Return-load enquiry guide"}</Link></div></section>
    <section className="py-12 bg-background"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-2xl font-semibold text-foreground mb-5">Routes from Coimbatore</h2>
      {(["Karnataka", "Kerala"] as const).map(state => <div key={state} className="mb-6"><h3 className="text-lg font-semibold text-foreground mb-3">{state}</h3><div className="flex flex-wrap gap-x-6 gap-y-3">{DESTINATIONS.filter(d => d.state === state).map(d => <Link key={d.slug} className={linkClass} to={laneUrl(d.slug)}>Coimbatore to {d.name}</Link>)}</div></div>)}
      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-5">Industry cargo</h2><div className="grid sm:grid-cols-2 gap-4">{INDUSTRIES.map(i => <Link key={i.slug} className={linkClass} to={industryUrl(i.slug)}>{i.name}</Link>)}</div>
    </div></section>
  </PillarPageShell>;
}