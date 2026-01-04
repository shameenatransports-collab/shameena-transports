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
          "transition-opacity duration-500 ease-out will-change-[opacity]",
          isVisible ? "opacity-100" : "opacity-0",
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
