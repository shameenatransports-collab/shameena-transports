import { useParams, Link, Navigate } from "react-router-dom";
import { PillarPageShell, KeywordList } from "@/components/seo/PillarPageShell";
import { PILLAR_BY_ID } from "@/lib/seo/pillars";
import { RETURN_ORIGINS, RETURN_ORIGIN_BY_SLUG, returnOriginUrl, RETURN_HUB_PATH } from "@/lib/seo/return-origins";
import { CheckCircle2, ArrowRight } from "lucide-react";

/** Return load into Coimbatore from a Tamil Nadu town: /transportation/return-load/:origin */
export default function ReturnLoadPage() {
  const { origin } = useParams();
  const o = origin ? RETURN_ORIGIN_BY_SLUG[origin] : undefined;
  if (!o) return <Navigate to={RETURN_HUB_PATH} replace />;
  const pillar = PILLAR_BY_ID["transportation"];
  const n = o.name.toLowerCase();
  const path = returnOriginUrl(o.slug);
  const title = `${o.name} to Coimbatore Return Load`;
  const answer = `When an STA vehicle is returning to Coimbatore from ${o.name}, the vehicle can be requested strictly subject to route availability and cargo suitability. Call or WhatsApp +91 94430 33055 with cargo, weight and date to check whether a vehicle is coming your way.`;
  const faqs = [
    { q: `Is there a return load from ${o.name} to Coimbatore?`, a: `Only when a vehicle is returning on that route. It is confirmed on enquiry, so call or WhatsApp +91 94430 33055 with your cargo, weight and date.` },
    { q: `What cargo moves from ${o.name} to Coimbatore?`, a: `Share your cargo type, packing, weight and dimensions. Tell us what you have and we confirm if the returning vehicle suits it.` },
    { q: "Is a return load guaranteed?", a: "No. It depends on a vehicle coming back to Coimbatore on that day. If none is available we say so plainly." },
    { q: "Do you take return loads out of Coimbatore to other places?", a: "Return-load enquiries here are for goods coming into Coimbatore from Tamil Nadu, Kerala or Karnataka." },
  ];
  const keywords = [`return load ${n} to coimbatore`, `${n} to coimbatore lorry`, `${n} to coimbatore transport`, `${n} to coimbatore goods transport`, `back load ${n} coimbatore`, `lorry from ${n} to coimbatore`];

  return (
    <PillarPageShell
      title={title}
      heroAccent="Strictly subject to route availability"
      metaTitle={`${o.name} to Coimbatore Return Load Lorry | STA`}
      metaDescription={`Goods transport from ${o.name} to Coimbatore on returning STA vehicles, strictly subject to route availability. Lorry, truck and trailer enquiries: +91 94430 33055.`}
      path={path}
      eyebrow={`Return load · ${o.name} → Coimbatore`}
      intro={`Goods coming from ${o.name} to Coimbatore, carried on vehicles that are returning to Coimbatore. Confirmed per enquiry, strictly subject to route availability.`}
      answer={answer}
      stats={[
        { value: "Inbound", label: "To Coimbatore" },
        { value: "On request", label: "Availability" },
      ]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Transportation", url: pillar.path },
        { name: "Return load", url: RETURN_HUB_PATH },
        { name: `${o.name} → Coimbatore`, url: path },
      ]}
      serviceName={title}
      serviceArea={`${o.name}, ${o.state} to Coimbatore, Tamil Nadu`}
      faqs={faqs}
      keywords={keywords}
    >
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">How a return load works</h2>
            <ul className="space-y-2.5">
              {["Share pickup in " + o.name + ", delivery in Coimbatore, cargo, weight and date", "We check whether a vehicle is returning to Coimbatore on that route", "If one is, we confirm vehicle suitability and freight for that booking", "If not, we tell you plainly so you can plan another vehicle"].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-6">Cargo and vehicle suitability are checked individually for this route. STA does not offer cargo insurance.</p>
          </div>
          <KeywordList label={`Searches for ${o.name} to Coimbatore`} items={keywords} />
        </div>
      </section>
      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <p className="text-eyebrow text-primary mb-4">Other origins towards Coimbatore</p>
          <div className="flex flex-wrap gap-2">
            {RETURN_ORIGINS.filter((x) => x.slug !== o.slug).map((x) => (
              <Link key={x.slug} to={returnOriginUrl(x.slug)} className="px-4 py-2 rounded-full border border-border/60 text-sm text-foreground/80 hover:border-primary hover:text-primary">
                {x.name} → Coimbatore
              </Link>
            ))}
            <Link to={RETURN_HUB_PATH} className="px-4 py-2 rounded-full bg-foreground text-background text-sm inline-flex items-center gap-1.5">
              Return load guide <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </PillarPageShell>
  );
}
