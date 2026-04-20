import { ReactNode, forwardRef } from "react";
import { ScrollReveal } from "./scroll-reveal";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Backwards-compatible AnimatedSection.
 * Now uses Framer Motion under the hood — fade + subtle 24px translateY.
 * Respects prefers-reduced-motion automatically.
 */
export const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ children, className, delay = 0 }, _ref) => {
    return (
      <ScrollReveal as="section" delay={delay / 1000} className={cn(className)}>
        {children}
      </ScrollReveal>
    );
  }
);

AnimatedSection.displayName = "AnimatedSection";
