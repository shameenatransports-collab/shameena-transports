/**
 * Production-ready client-side logger.
 * - Captures runtime errors, unhandled promise rejections, console errors.
 * - Records route/component context, user agent, viewport.
 * - Stores last N entries in memory + localStorage for retrieval on /debug.
 * - Exposes window.__staLogger for ad-hoc inspection.
 */

export type LogLevel = "info" | "warn" | "error" | "fatal";

export interface LogEntry {
  id: string;
  ts: number;
  level: LogLevel;
  message: string;
  stack?: string;
  route?: string;
  component?: string;
  meta?: Record<string, unknown>;
  ua?: string;
  viewport?: string;
}

const MAX_ENTRIES = 100;
const STORAGE_KEY = "sta_client_logs_v1";

class ClientLogger {
  private entries: LogEntry[] = [];
  private listeners = new Set<(entries: LogEntry[]) => void>();
  private installed = false;

  constructor() {
    this.hydrate();
  }

  private hydrate() {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) this.entries = JSON.parse(raw).slice(-MAX_ENTRIES);
    } catch {
      /* ignore */
    }
  }

  private persist() {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.entries));
    } catch {
      /* quota / private mode */
    }
  }

  private notify() {
    this.listeners.forEach((l) => l(this.entries.slice()));
  }

  subscribe(listener: (entries: LogEntry[]) => void): () => void {
    this.listeners.add(listener);
    listener(this.entries.slice());
    return () => this.listeners.delete(listener);
  }

  getEntries(): LogEntry[] {
    return this.entries.slice();
  }

  clear() {
    this.entries = [];
    this.persist();
    this.notify();
  }

  log(
    level: LogLevel,
    message: string,
    opts: { stack?: string; component?: string; meta?: Record<string, unknown> } = {}
  ) {
    const entry: LogEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      ts: Date.now(),
      level,
      message,
      stack: opts.stack,
      component: opts.component,
      meta: opts.meta,
      route: typeof window !== "undefined" ? window.location.pathname + window.location.search : undefined,
      ua: typeof navigator !== "undefined" ? navigator.userAgent : undefined,
      viewport:
        typeof window !== "undefined"
          ? `${window.innerWidth}x${window.innerHeight}@${window.devicePixelRatio || 1}x`
          : undefined,
    };
    this.entries.push(entry);
    if (this.entries.length > MAX_ENTRIES) this.entries.splice(0, this.entries.length - MAX_ENTRIES);
    this.persist();
    this.notify();

    // Mirror to native console with a recognizable prefix
    const prefix = `[STA:${level}]`;
    if (level === "error" || level === "fatal") {
      // eslint-disable-next-line no-console
      console.error(prefix, message, opts.stack || "", opts.meta || "");
    } else if (level === "warn") {
      // eslint-disable-next-line no-console
      console.warn(prefix, message, opts.meta || "");
    } else {
      // eslint-disable-next-line no-console
      console.info(prefix, message, opts.meta || "");
    }
  }

  install() {
    if (this.installed || typeof window === "undefined") return;
    this.installed = true;

    window.addEventListener("error", (e: ErrorEvent) => {
      this.log("error", e.message || "window.onerror", {
        stack: e.error?.stack,
        meta: { filename: e.filename, lineno: e.lineno, colno: e.colno },
      });
    });

    window.addEventListener("unhandledrejection", (e: PromiseRejectionEvent) => {
      const reason = e.reason;
      const msg =
        typeof reason === "string"
          ? reason
          : reason?.message || "Unhandled promise rejection";
      this.log("error", msg, { stack: reason?.stack });
    });

    // Wrap console.error to capture React warnings
    const origError = console.error.bind(console);
    console.error = (...args: unknown[]) => {
      // Avoid recursion on our own prefixed output
      const first = String(args[0] ?? "");
      if (!first.startsWith("[STA:")) {
        this.entries.push({
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          ts: Date.now(),
          level: "warn",
          message: args.map((a) => (typeof a === "string" ? a : safeStringify(a))).join(" ").slice(0, 500),
          route:
            typeof window !== "undefined"
              ? window.location.pathname + window.location.search
              : undefined,
        });
        if (this.entries.length > MAX_ENTRIES) this.entries.splice(0, this.entries.length - MAX_ENTRIES);
        this.persist();
        this.notify();
      }
      origError(...args);
    };

    (window as unknown as { __staLogger: ClientLogger }).__staLogger = this;
  }
}

function safeStringify(v: unknown): string {
  try {
    return JSON.stringify(v);
  } catch {
    return String(v);
  }
}

export const clientLogger = new ClientLogger();
