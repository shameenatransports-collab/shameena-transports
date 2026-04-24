import { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clientLogger } from "@/lib/client-logger";

interface Props {
  children: ReactNode;
  /** Optional component name to tag log entries */
  scope?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    clientLogger.log("fatal", error.message || "React render error", {
      stack: error.stack,
      component: this.props.scope,
      meta: { componentStack: errorInfo.componentStack },
    });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  private handleReload = () => {
    if (typeof window !== "undefined") window.location.reload();
  };

  private handleHome = () => {
    if (typeof window !== "undefined") window.location.href = "/";
  };

  render() {
    if (!this.state.hasError) return this.props.children;

    const isDev = import.meta.env.DEV;

    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
        <div className="max-w-lg w-full text-center">
          <div className="mx-auto w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
            <AlertTriangle className="w-7 h-7 text-destructive" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Something went wrong
          </h1>
          <p className="text-muted-foreground mb-8">
            We hit an unexpected error while rendering this page. The issue has been logged.
            You can try again, reload, or return home.
          </p>

          {isDev && this.state.error && (
            <details className="text-left bg-muted/40 border border-border rounded-lg p-4 mb-6 text-xs">
              <summary className="cursor-pointer font-semibold text-foreground mb-2">
                Error details (development only)
              </summary>
              <p className="text-destructive font-mono mb-2">{this.state.error.message}</p>
              <pre className="overflow-x-auto whitespace-pre-wrap text-muted-foreground">
                {this.state.error.stack}
              </pre>
              {this.state.errorInfo?.componentStack && (
                <pre className="overflow-x-auto whitespace-pre-wrap text-muted-foreground mt-2">
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </details>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={this.handleReset} variant="outline" className="gap-2">
              <RotateCcw className="w-4 h-4" /> Try again
            </Button>
            <Button onClick={this.handleReload} className="gap-2">
              <RotateCcw className="w-4 h-4" /> Reload page
            </Button>
            <Button onClick={this.handleHome} variant="ghost" className="gap-2">
              <Home className="w-4 h-4" /> Go home
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            View full diagnostics at{" "}
            <a href="/debug" className="text-primary hover:underline">
              /debug
            </a>
          </p>
        </div>
      </div>
    );
  }
}
