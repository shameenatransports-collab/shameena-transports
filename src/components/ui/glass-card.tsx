import { ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "strong" | "subtle";
  hover?: boolean;
}

/**
 * Apple-style frosted glass card.
 * Use sparingly — best on backgrounds with imagery, gradients, or color.
 */
export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, variant = "default", hover = true, ...props }, ref) => {
    const base =
      variant === "strong" ? "glass-strong" : variant === "subtle" ? "glass-subtle" : "glass";
    return (
      <div
        ref={ref}
        className={cn(
          base,
          "rounded-2xl",
          hover && "hover-lift",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GlassCard.displayName = "GlassCard";
