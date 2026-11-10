import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Truck, Shield, Gauge, Users, Clock, CheckCircle2, XCircle } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import { BackgroundPicture } from "@/components/ui/picture";
import { ServiceFAQ } from "@/components/seo/ServiceFAQ";
import fleetBg from "@/assets/fleet-bg.jpg";
import { localBusinessSchema, createBreadcrumbSchema, openBodyLorrySchema } from "@/lib/structured-data";

const carries = [
  "Building and construction material — cement bags, steel, TMT bars, pipes, plywood",
  "Bagged and packed goods — rice, fertiliser, cattle feed, sacks and cartons",
  "Textile bales and yarn cartons, sheeted with tarpaulin",
  "Crated machinery, pumps and motors that fit the body height",
  "Factory, warehouse and shop shifting loads",
];

const notSuited = [
  "Containers (these need a trailer or chassis)",
  "Loose sand or gravel (a tipper is the right vehicle)",
  "Liquids and temperature-controlled goods",
  "Oversize or over-height machinery",
];

const faqs = [
  {
    question: "What is an open-body lorry?",
    answer: "A goods truck with a flat platform and high sides but no fixed roof, covered with tarpaulin when needed.",
  },
  {
    question: "What can it carry?",
    answer: "Building material, steel, pipes, packed goods, textile bales and crated cargo that fits the body height.",
  },
  {
    question: "What can it not carry?",
    answer: "Containers, loose sand or gravel, liquids, temperature-controlled goods and oversize machinery.",
  },
  {
    question: "Is cargo insured?",
    answer: "No. STA offers no cargo insurance or accident cover, so arrange your own cover for goods in transit.",
  },
  {
    question: "How do I book?",
    answer: "Call or WhatsApp +91 94430 33055 with pickup, destination, cargo and date. We confirm vehicle, load and freight per booking.",
  },
];

const features = [
  { icon: Gauge, title: "Well Maintained", description: "Regular servicing and safety checks" },
  { icon: Clock, title: "On-Time Delivery", description: "Planned dispatch and clear coordination" },
  { icon: Users, title: "Experienced Drivers", description: "Professional and trained drivers" },
  { icon: Shield, title: "Careful Handling", description: "Tarpaulin cover and secure tie-down" },
];

const Fleet = () => {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://sta-corporate.in" },
    { name: "Fleet", url: "https://sta-corporate.in/fleet" },
  ]);

  return (
    <>
      <Helmet>
        <title>Open-Body Lorry Transport in Coimbatore | STA Corporate Solutions</title>
        <meta
          name="description"
          content="Open-body lorry for building material, steel, pipes, packed goods, bales and crated cargo in Coimbatore district. See what it carries and what it does not. Call +91 94430 33055."
        />
        <meta
          name="keywords"
          content="open body lorry coimbatore, open truck on hire coimbatore, goods lorry coimbatore, building material transport coimbatore, steel transport coimbatore, lorry booking coimbatore"
        />
        <link rel="canonical" href="https://sta-corporate.in/fleet" />
        <meta property="og:title" content="Open-Body Lorry Transport in Coimbatore | STA Corporate Solutions" />
        <meta property="og:description" content="Open-body lorry for building material, steel, packed goods and bales in Coimbatore district." />
        <meta property="og:url" content="https://sta-corporate.in/fleet" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(openBodyLorrySchema)}</script>
      </Helmet>
      <Layout>
        <BackgroundPicture
          src={fleetBg}
          alt="Open-body lorry for goods transport, STA Corporate Solutions, Coimbatore"
          className="relative isolate min-h-[70svh] flex items-center overflow-hidden"
          overlayClassName="bg-gradient-to-b from-primary/85 via-primary/80 to-primary/95"
        >
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary-glow)/0.28),_transparent_60%)]" />
          <div className="container mx-auto px-4 pt-32 pb-24 md:pt-40 md:pb-32 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background text-[11px] font-bold tracking-[0.18em] uppercase text-primary shadow-xl ring-1 ring-primary-foreground/40 mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Our Lorry · Coimbatore District
              </div>
              <h1 className="text-display-2xl text-primary-foreground mb-6">
                Open-body lorry
                <br />
                <span className="bg-gradient-to-r from-secondary via-secondary to-primary-foreground bg-clip-text text-transparent">
                  transport in Coimbatore.
                </span>
              </h1>
              <p className="text-headline text-primary-foreground/85 max-w-2xl">
                An open-body lorry carries building material, steel, packed goods, bales and crated cargo for
                businesses in Coimbatore district. Here is what it carries, and what it does not.
              </p>
            </div>
          </div>
        </BackgroundPicture>

        <section className="py-8 sm:py-12 bg-accent">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-foreground">{feature.title}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground hidden sm:block">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What an open-body lorry is for</h2>
              <p className="text-muted-foreground text-lg">
                An open-body lorry has a flat platform with high side walls and no fixed roof, so goods are loaded from
                the sides or rear and covered with tarpaulin when needed. Vehicle suitability, permitted load and
                loading date are confirmed for each booking.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-border p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                  <Truck className="h-5 w-5 text-accent" /> Suited to
                </h3>
                <ul className="space-y-3">
                  {carries.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                  <XCircle className="h-5 w-5 text-muted-foreground" /> Not suited to
                </h3>
                <ul className="space-y-3">
                  {notSuited.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-8">
              Related services:{" "}
              <Link to="/transportation/services/full-load" className="underline">Full Load</Link>,{" "}
              <Link to="/transportation/services/trucks-on-hire" className="underline">Trucks on Hire</Link>,{" "}
              <Link to="/transportation/services/construction-material" className="underline">Construction Material</Link>,{" "}
              <Link to="/transportation/services/factory-shifting" className="underline">Factory Shifting</Link>.
            </p>
          </div>
        </section>

        <ServiceFAQ
          eyebrow="Open-body lorry"
          heading="Open-body lorry questions, answered"
          faqs={faqs}
          speakableId="fleet-faq"
        />

        <CTASection />
      </Layout>
    </>
  );
};

export default Fleet;
