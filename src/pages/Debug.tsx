import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Trash2, Download, ArrowLeft, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { clientLogger, type LogEntry } from "@/lib/client-logger";

const LEVEL_STYLES: Record<LogEntry["level"], string> = {
  info: "bg-muted text-muted-foreground",
  warn: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  error: "bg-destructive/10 text-destructive",
  fatal: "bg-destructive text-destructive-foreground",
};

// Static manifest of files affecting the homepage. Update when reorganizing.
const HOMEPAGE_FILES = [
  "src/pages/Index.tsx",
  "src/components/home/HeroSection.tsx",
  "src/components/home/TrustBadges.tsx",
  "src/components/home/ServicesPreview.tsx",
  "src/components/home/WhyChooseUs.tsx",
  "src/components/home/CitiesWeServe.tsx",
  "src/components/home/FAQSection.tsx",
  "src/components/home/CTASection.tsx",
  "src/components/lead/LeadEnquiryForm.tsx",
  "src/components/layout/Layout.tsx",
  "src/components/layout/Header.tsx",
  "src/components/layout/Footer.tsx",
  "src/components/ui/scroll-reveal.tsx",
  "src/components/ui/animated-section.tsx",
  "src/index.css",
];

export default function Debug() {
  const [entries, setEntries] = useState<LogEntry[]>([]);
  const [filter, setFilter] = useState<"all" | LogEntry["level"]>("all");

  useEffect(() => clientLogger.subscribe(setEntries), []);

  const visible = filter === "all" ? entries : entries.filter((e) => e.level === filter);
  const sorted = [...visible].sort((a, b) => b.ts - a.ts);

  const counts = entries.reduce<Record<string, number>>((acc, e) => {
    acc[e.level] = (acc[e.level] || 0) + 1;
    return acc;
  }, {});

  const exportJson = () => {
    const blob = new Blob([JSON.stringify({ entries, env: collectEnv() }, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sta-debug-${new Date().toISOString()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Helmet>
        <title>Debug Report — STA Corporate Solutions</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <Layout>
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>

          <div className="flex items-start justify-between gap-4 mb-8 flex-wrap">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
                <Activity className="w-3.5 h-3.5" /> Diagnostics
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Debug Report</h1>
              <p className="text-muted-foreground mt-2">
                Recent client errors and homepage source files. Helps identify the cause of
                blank-screen or render issues.
              </p>
            </div>
            <div className="flex gap-2">
              <Button onClick={exportJson} variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" /> Export JSON
              </Button>
              <Button
                onClick={() => clientLogger.clear()}
                variant="ghost"
                size="sm"
                className="gap-2"
              >
                <Trash2 className="w-4 h-4" /> Clear
              </Button>
            </div>
          </div>

          {/* Environment */}
          <Section title="Environment">
            <KV data={collectEnv()} />
          </Section>

          {/* Counts */}
          <Section title="Log summary">
            <div className="flex flex-wrap gap-2">
              {(["all", "fatal", "error", "warn", "info"] as const).map((lvl) => {
                const n = lvl === "all" ? entries.length : counts[lvl] || 0;
                const active = filter === lvl;
                return (
                  <button
                    key={lvl}
                    onClick={() => setFilter(lvl)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                      active
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    {lvl} <span className="opacity-70">({n})</span>
                  </button>
                );
              })}
            </div>
          </Section>

          {/* Entries */}
          <Section title={`Log entries (${sorted.length})`}>
            {sorted.length === 0 ? (
              <p className="text-sm text-muted-foreground italic">
                No entries captured yet. Errors will appear here automatically.
              </p>
            ) : (
              <ul className="space-y-2">
                {sorted.map((e) => (
                  <li
                    key={e.id}
                    className="border border-border rounded-lg p-3 bg-card text-sm"
                  >
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${LEVEL_STYLES[e.level]}`}
                      >
                        {e.level}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(e.ts).toLocaleString()}
                      </span>
                      {e.route && (
                        <span className="text-xs font-mono text-muted-foreground">
                          {e.route}
                        </span>
                      )}
                      {e.component && (
                        <span className="text-xs font-mono text-primary">
                          {e.component}
                        </span>
                      )}
                    </div>
                    <p className="text-foreground font-medium break-words">{e.message}</p>
                    {e.stack && (
                      <pre className="mt-2 text-[11px] font-mono text-muted-foreground bg-muted/40 rounded p-2 overflow-x-auto whitespace-pre-wrap">
                        {e.stack.slice(0, 1500)}
                      </pre>
                    )}
                    {e.meta && (
                      <pre className="mt-1 text-[11px] font-mono text-muted-foreground overflow-x-auto whitespace-pre-wrap">
                        {JSON.stringify(e.meta, null, 2).slice(0, 800)}
                      </pre>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </Section>

          {/* Homepage source files */}
          <Section title="Homepage source files">
            <p className="text-xs text-muted-foreground mb-3">
              These files render the homepage. If you see a blank screen on /, inspect changes
              to one of these:
            </p>
            <ul className="grid sm:grid-cols-2 gap-1 text-xs font-mono">
              {HOMEPAGE_FILES.map((f) => (
                <li key={f} className="text-muted-foreground">
                  {f}
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </Layout>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

function KV({ data }: { data: Record<string, string> }) {
  return (
    <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-xs font-mono">
      {Object.entries(data).map(([k, v]) => (
        <div key={k} className="flex gap-2">
          <dt className="text-muted-foreground">{k}:</dt>
          <dd className="text-foreground break-all">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function collectEnv(): Record<string, string> {
  if (typeof window === "undefined") return {};
  return {
    url: window.location.href,
    userAgent: navigator.userAgent,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    pixelRatio: String(window.devicePixelRatio || 1),
    language: navigator.language,
    online: String(navigator.onLine),
    mode: import.meta.env.MODE,
    timestamp: new Date().toISOString(),
  };
}
