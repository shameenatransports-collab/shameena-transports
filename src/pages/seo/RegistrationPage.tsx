import { useParams, Link, Navigate } from "react-router-dom";
import { REGISTRATION_BY_SLUG, REGISTRATIONS, PILLAR_BY_ID } from "@/lib/seo/pillars";
import { PillarPageShell, KeywordList } from "@/components/seo/PillarPageShell";
import { registrationUrl } from "@/lib/seo/slugs";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

/** Legal registration page — /legal-services/registrations/:slug */
export default function RegistrationPage() {
  const { slug } = useParams();
  const reg = slug ? REGISTRATION_BY_SLUG[slug] : undefined;
  if (!reg) return <Navigate to="/legal-services" replace />;
  const pillar = PILLAR_BY_ID["legal-services"];
  const path = registrationUrl(reg.slug);

  const metaTitle = `${reg.name} | Legal Services | STA Corporate Solutions`;
  const metaDescription = `${reg.description} Across South India. Call +91 94430 33055.`;
  const faqs = [
    { q: `What is included in ${reg.name}?`, a: reg.description },
    { q: `How long does ${reg.name} take?`, a: "Typical turnaround is 7–21 working days depending on document readiness and government processing." },
    { q: `Do you handle ${reg.name} across South India?`, a: "Yes — Tamil Nadu, Karnataka, Telangana, Andhra Pradesh and Kerala." },
  ];

  return (
    <PillarPageShell
      title={reg.name}
      heroAccent="Legal Services"
      metaTitle={metaTitle}
      metaDescription={metaDescription}
      path={path}
      eyebrow={`Registration · ${reg.name}`}
      intro={reg.description}
      stats={[
        { value: "43+", label: "Years" },
        { value: "5", label: "States" },
        { value: "Direct", label: "Filing" },
        { value: "South India", label: "Coverage" },
      ]}
      breadcrumbs={[
        { name: "Home", url: "/" },
        { name: "Legal Services", url: pillar.path },
        { name: "Registrations", url: pillar.path },
        { name: reg.name, url: path },
      ]}
      serviceName={reg.name}
      faqs={faqs}
      keywords={reg.keywords}
    >
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-eyebrow text-primary">What you get</span>
            <h2 className="text-display-lg text-foreground mt-3 mb-5">{reg.name}, end-to-end</h2>
            <ul className="space-y-2.5">
              {reg.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <KeywordList label="Related searches" items={reg.keywords} />
        </div>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <p className="text-eyebrow text-primary mb-4">Other registrations</p>
          <div className="flex flex-wrap gap-2">
            {REGISTRATIONS.filter((r) => r.slug !== reg.slug).map((r) => (
              <Link
                key={r.slug}
                to={registrationUrl(r.slug)}
                className="px-4 py-2 rounded-full border border-border/60 text-sm text-foreground/80 hover:border-primary hover:text-primary transition-colors"
              >
                {r.name}
              </Link>
            ))}
            <Link
              to={pillar.path}
              className="px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium inline-flex items-center gap-1.5"
            >
              All Legal Services <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </PillarPageShell>
  );
}
