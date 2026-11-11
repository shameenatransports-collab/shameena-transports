import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CheckCircle2, XCircle } from "lucide-react";
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
        <title>Lorry Transport in Coimbatore | Trucks on Hire, Loaders & Packers | STA Corporate Solutions</title>
        <meta name="description" content="STA Corporate Solutions, Podanur, Coimbatore: goods transport by open-body lorry, trucks on hire, and loaders & packers across Coimbatore district since 1982. Call +91 94430 33055." />
        <meta name="keywords" content="lorry transport Coimbatore, goods transport Coimbatore, trucks on hire Coimbatore, loaders and packers Coimbatore, open body lorry Coimbatore, lorry booking Coimbatore, factory shifting Coimbatore" />
        <link rel="canonical" href="https://sta-corporate.in" />
        <meta property="og:title" content="STA Corporate Solutions | Lorry Transport Since 1982 · Coimbatore" />
        <meta property="og:description" content="Goods transport, trucks on hire and loaders & packers across Coimbatore district since 1982." />
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
                We provide goods transport, trucks on hire and loaders &amp; packers services across Coimbatore district.
              </p>
            </div>
          </section>
          <ServicesPreview />
          <section className="bg-muted/40 py-16 md:py-20" aria-label="Open-body lorry">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="max-w-3xl mb-10">
                <p className="text-eyebrow text-primary mb-3">Our lorry</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Open-body lorry, matched to your cargo</h2>
                <p className="text-muted-foreground text-lg">
                  We tell you plainly whether an open-body lorry fits your load, so you never pay for the wrong vehicle.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-border bg-background p-6">
                  <h3 className="font-semibold text-foreground mb-3">Suited to</h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    {["Building material, steel and pipes", "Bagged and packed goods", "Textile bales and cartons", "Crated machinery and factory shifting"].map((t) => (
                      <li key={t} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border bg-background p-6">
                  <h3 className="font-semibold text-foreground mb-3">Not suited to</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {["Containers", "Loose sand or gravel", "Liquids and temperature-controlled goods", "Oversize machinery"].map((t) => (
                      <li key={t} className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-sm"><Link to="/open-body-lorry-coimbatore" className="text-primary underline">More about the open-body lorry</Link></p>
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
          <CTASection />
        </main>
      </Layout>
    </>
  );
};

export default Index;
