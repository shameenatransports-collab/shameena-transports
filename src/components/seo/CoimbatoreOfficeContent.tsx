import { Link } from "react-router-dom";
import { COIMBATORE_OFFICE_CONTENT as office } from "@/lib/seo/local-content";

export function CoimbatoreOfficeContent() {
  return <>
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="text-eyebrow text-primary mb-3">Podanur · Coimbatore</p>
        <h2 className="text-2xl font-semibold text-foreground mb-5">Your local goods-transport office, since 1982</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">From a mill dispatch in Sulur to engineering cargo in the city, we start with the actual loading point—not just “Coimbatore” on a booking. Our Podanur office coordinates your enquiry, checks vehicle suitability and confirms the freight before you book.</p>
        <address className="not-italic text-foreground mb-4">{office.address}</address>
        <p className="text-muted-foreground leading-relaxed">Send your pickup and delivery pins to WhatsApp +91 94430 33055 with cargo weight, dimensions and preferred loading date. Please confirm a visit with us before coming to the office.</p>
        <Link to="/transportation" className="inline-block mt-5 text-primary underline underline-offset-4">Transportation services</Link>
      </div>
    </section>
    <section className="py-12 md:py-16 bg-muted/40">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Cargo enquiries from Coimbatore’s industries</h2>
        <div className="grid md:grid-cols-2 gap-8">{office.industries.map(item => <article key={item.name}>
          <h3 className="text-lg font-semibold text-foreground mb-3">{item.name}</h3>
          <p className="text-muted-foreground leading-relaxed">{item.detail}</p>
        </article>)}</div>
        <p className="text-sm text-muted-foreground mt-6">Local industry context: <a href="https://coimbatore.nic.in/about-district/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Coimbatore District administration</a>. These are cargo enquiry categories, not claims of named customers or guaranteed handling capability.</p>
      </div>
    </section>
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Local road distances for planning</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">Approximate published road references from Coimbatore—not measurements from our Podanur office. Exact pickup and delivery pins, diversions and vehicle-access restrictions change the journey. Distance alone does not determine freight or delivery time.</p>
        <div className="divide-y divide-border">{office.distances.map(item => <article key={item.destination} className="py-5 grid sm:grid-cols-[1fr_auto] gap-3">
          <div><h3 className="font-semibold text-foreground mb-2">{item.destination}</h3><p className="text-muted-foreground">{item.route}</p><a href={item.source} target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline underline-offset-4">Road-distance reference</a></div>
          <p className="font-semibold text-foreground">{item.distance}</p>
        </article>)}</div>
      </div>
    </section>
  </>;
}