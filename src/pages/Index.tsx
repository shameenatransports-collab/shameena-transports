import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CitiesWeServe } from "@/components/home/CitiesWeServe";
import { CTASection } from "@/components/home/CTASection";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Link } from "react-router-dom";
import { LeadEnquiryForm } from "@/components/lead/LeadEnquiryForm";
import { organizationSchema, localBusinessSchema, websiteSchema, transportBusinessSchema } from "@/lib/structured-data";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Lorry, Truck & Trailer Transport in Coimbatore | STA</title>
        <meta name="description" content="STA Corporate Solutions, Podanur, Coimbatore: lorry, truck and trailer transport, trucks on hire and loaders & packers from Coimbatore since 1982; Kerala and Karnataka routes confirmed per booking. Call +91 94430 33055." />
        <meta name="keywords" content="lorry transport in coimbatore, truck transport in coimbatore, trailer transport in coimbatore, goods transport coimbatore, trucks on hire coimbatore, open body lorry coimbatore, loaders and packers coimbatore, lorry booking coimbatore, equipment shifting coimbatore, factory shifting coimbatore" />
        <link rel="canonical" href="https://sta-corporate.in" />
        <meta property="og:title" content="STA Corporate Solutions | Lorry Transport Since 1982 · Coimbatore" />
        <meta property="og:description" content="Goods transport, trucks on hire and loaders & packers from Coimbatore since 1982; Kerala and Karnataka routes confirmed per booking." />
        <meta property="og:image" content="https://sta-corporate.in/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <meta name="geo.position" content="11.0168;76.9558" />
        <meta name="ICBM" content="11.0168, 76.9558" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(transportBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>
      <Layout>
        <main>
          <HeroSection />
          <section className="bg-background py-12 md:py-16 border-b border-border/40" aria-label="About STA Corporate Solutions">
            <div className="container mx-auto px-4">
              <p className="mx-auto max-w-3xl text-center text-lg md:text-xl text-foreground leading-relaxed">
                <strong>STA Corporate Solutions</strong> is a lorry transport business in Podanur, Coimbatore, operating since 1982.
                We provide lorry, truck and trailer transport, trucks on hire and loaders &amp; packers services across Coimbatore district.
              </p>
            </div>
          </section>
          <ServicesPreview />
          <section className="bg-muted/40 py-16 md:py-20" aria-label="Industries we serve">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="max-w-3xl mb-10">
                <p className="text-eyebrow text-primary mb-3">Industries we serve</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Logistics for Coimbatore's industries</h2>
                <p className="text-muted-foreground text-lg">
                  Goods transport matched to your cargo. We tell you plainly whether the vehicle fits your load.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  ["Construction & building material", "Cement, bricks, tiles, plywood"],
                  ["Steel & hardware", "TMT bars, pipes, sections"],
                  ["Textile & yarn", "Bales and cartons, mill to market"],
                  ["Engineering & pumps", "Pumps, motors, crated machinery"],
                  ["Foundry & castings", "Castings and industrial parts"],
                  ["Agri & packed goods", "Bagged grain, feed, fertiliser, cartons"],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-xl border border-border bg-background p-5">
                    <h3 className="font-semibold text-foreground mb-1">{t}</h3>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm"><Link to="/open-body-lorry-coimbatore" className="text-primary underline">See all industries and what we carry</Link></p>
            </div>
          </section>
          <WhyChooseUs />
          <ProcessSection />
          <CitiesWeServe />
          <section className="bg-background py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl">
                <LeadEnquiryForm />
              </div>
            </div>
          </section>
          <section className="py-12 bg-background border-t border-border"><div className="container mx-auto px-4 max-w-5xl"><h2 className="text-2xl font-semibold text-foreground mb-4">Transport from Coimbatore</h2><p className="text-muted-foreground mb-5">Lorry, truck and trailer enquiries from Coimbatore to Kerala and Karnataka. Vehicle suitability and freight are confirmed per booking. Inbound return loads are strictly subject to route availability.</p><div className="flex flex-wrap gap-x-6 gap-y-3"><Link to="/transportation/from-coimbatore" className="text-primary underline">Kerala &amp; Karnataka routes</Link><Link to="/transportation/services/lorry-transport" className="text-primary underline">Lorry transport</Link><Link to="/transportation/services/truck-transport" className="text-primary underline">Truck transport</Link><Link to="/transportation/services/trailer-transport" className="text-primary underline">Trailer transport</Link><Link to="/transportation/services/return-load" className="text-primary underline">Inbound availability enquiries</Link></div></div></section>
          <CTASection />
        </main>
      </Layout>
    </>
  );
};

export default Index;
