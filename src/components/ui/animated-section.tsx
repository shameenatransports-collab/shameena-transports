import { ReactNode, forwardRef } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ children, className, delay = 0 }, _ref) => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
      <section
        ref={ref}
        className={cn(
          "transition-all duration-700 ease-out",
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8",
          className
        )}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </section>
    );
  }
);

AnimatedSection.displayName = "AnimatedSection";
