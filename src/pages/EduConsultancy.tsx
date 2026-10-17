import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { EducationPathwayFinder } from "@/components/education/EducationPathwayFinder";
import {
  GraduationCap,
  Globe2,
  Languages,
  MapPin,
  BookOpen,
  Users,
  Compass,
  ShieldCheck,
  ArrowUpRight,
  Building2,
} from "lucide-react";

const states = [
  { name: "Tamil Nadu", language: "Tamil" },
  { name: "Karnataka", language: "Kannada" },
  { name: "Telangana", language: "Telugu" },
  { name: "Andhra Pradesh", language: "Telugu" },
  { name: "Kerala", language: "Malayalam" },
];

const discovery = [
  { icon: Building2, title: "State Education Information", desc: "Discuss your preferred state and confirm available counselling support." },
  { icon: MapPin, title: "Location Preferences", desc: "Explore possible options for your preferred city; availability needs verification." },
  { icon: BookOpen, title: "University Discovery", desc: "Explore institutions aligned to your goals and stream." },
  { icon: Compass, title: "Degree Transfer Guidance", desc: "Explore potential transfers, subject to institution eligibility and credit acceptance." },
  { icon: ArrowUpRight, title: "Institution Migration", desc: "Understand the questions to ask before changing institutions." },
  { icon: Users, title: "Academic Counselling", desc: "Personalised support for learners and professionals." },
  { icon: GraduationCap, title: "Adult Learning", desc: "Continue learning at any stage of your career." },
  { icon: ShieldCheck, title: "Career Planning", desc: "Consider education options alongside your career goals; employment is not guaranteed." },
];

const trust = [
  "Academic Mobility Guidance",
  "Educational Continuity Support",
  "University Discovery Resources",
  "Institution Migration Information",
  "Degree Transfer Guidance",
  "Academic Counselling Services",
  "Career Advancement Resources",
];

export default function EduConsultancy() {
  return (
    <>
      <Helmet>
        <title>Edu Consultancy South India | Coimbatore, Chennai, Bangalore</title>
        <meta
          name="description"
          content="Explore education and potential degree-transfer options with STA in Coimbatore. Try AI pathway suggestions; eligibility and local support require confirmation."
        />
        <link rel="canonical" href="https://sta-corporate.in/edu-consultancy" />
        <meta property="og:title" content="Edu Consultancy South India | Coimbatore, Chennai, Bangalore" />
        <meta
          property="og:description"
          content="Education counselling and AI pathway starting points from STA in Coimbatore. Institution eligibility, credit transfer and regional support require verification."
        />
        <meta property="og:url" content="https://sta-corporate.in/edu-consultancy" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary-glow))_0%,transparent_50%),radial-gradient(circle_at_80%_80%,hsl(var(--secondary))_0%,transparent_50%)]" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background text-[11px] font-bold tracking-[0.18em] uppercase text-primary shadow-xl ring-1 ring-primary-foreground/40 mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                New in 2025 · Part of STA Corporate Solutions
              </div>
              <h1 className="text-display-2xl text-primary-foreground mb-6">
                Academic Mobility Network <br />
                <span className="bg-gradient-to-r from-secondary via-secondary to-primary-foreground bg-clip-text text-transparent">
                  Across South India
                </span>
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mb-10">
                Launched mid-2025 under STA Corporate Solutions. Explore education options for learners, working professionals and degree-transfer seekers, with institution-specific eligibility to be confirmed.
              </p>

              <p className="text-sm text-primary-foreground/90">Guidance based in Coimbatore · Regional support confirmed on enquiry</p>
            </div>
          </div>
        </section>

        <EducationPathwayFinder />

        {/* Regional interests, not verified operational coverage */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mb-14">
              <span className="text-eyebrow text-primary">Preferred destinations</span>
              <h2 className="text-display-lg text-foreground mt-3">Explore your South India study preferences</h2>
              <p className="text-muted-foreground mt-4">
                These states are destinations you can ask about, not a verified network of partner institutions. Confirm available support and course eligibility with STA before making plans.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {states.map((s) => (
                <div
                  key={s.name}
                  className="group relative rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/40 transition-colors"
                >
                  <Globe2 className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                  <div className="text-lg font-semibold text-foreground">{s.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">Support subject to confirmation</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Multilingual */}
        <section className="py-20 md:py-28 bg-muted/40">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-eyebrow text-primary">Language preferences</span>
              <h2 className="text-display-lg text-foreground mt-3 mb-4">
                Ask about support in your preferred language
              </h2>
              <p className="text-muted-foreground">
                Let us know your preferred language. Counsellor availability must be confirmed; these options do not mean every page or service is fully translated.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["English", "Tamil", "Kannada", "Telugu", "Malayalam"].map((l) => (
                <div
                  key={l}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-card px-4 py-4"
                >
                  <Languages className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <span className="font-medium text-foreground">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hyperlocal Discovery */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mb-14">
              <span className="text-eyebrow text-primary">Education guidance topics</span>
              <h2 className="text-display-lg text-foreground mt-3">
                Questions to explore with a counsellor
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {discovery.map((d) => (
                <div
                  key={d.title}
                  className="group rounded-2xl border border-border/60 bg-card p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <d.icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1.5">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mb-12">
              <span className="text-eyebrow text-secondary">Informed education decisions</span>
              <h2 className="text-display-lg mt-3">
                Verify eligibility before you commit
              </h2>
            </div>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl">Recognition, admissions and transfer decisions rest with the relevant institutions and regulators. STA does not guarantee admission, accepted credits or career outcomes.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {trust.map((t) => (
                <div
                  key={t}
                  className="flex items-start gap-3 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 p-5"
                >
                  <ShieldCheck className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                  <span className="font-medium">{t}</span>
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
