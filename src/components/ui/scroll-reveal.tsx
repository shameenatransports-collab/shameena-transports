import { ReactNode, createContext, useContext, useEffect } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { clientLogger } from "@/lib/client-logger";

const ScrollRevealContext = createContext(false);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Distance in px the content travels in. Default 24. Set 0 for opacity-only. */
  y?: number;
  /** Stagger child motion (only direct children with motion). */
  stagger?: boolean;
  as?: "div" | "section" | "article" | "header" | "footer";
}

const easeApple = [0.22, 1, 0.36, 1] as const;

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 24,
  stagger = false,
  as = "div",
}: ScrollRevealProps) {
  const reduced = useReducedMotion();
  const insideAnotherReveal = useContext(ScrollRevealContext);

  useEffect(() => {
    if (insideAnotherReveal && import.meta.env.DEV) {
      clientLogger.log(
        "warn",
        "Nested <ScrollReveal>/<AnimatedSection> detected. The outer wrapper can hide content until its bounds enter the viewport. Remove one of the wrappers.",
        { component: "ScrollReveal" }
      );
    }
  }, [insideAnotherReveal]);

  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduced ? 0.01 : 0.7,
        ease: easeApple,
        delay,
        staggerChildren: stagger ? 0.08 : 0,
        delayChildren: stagger ? delay + 0.05 : 0,
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <ScrollRevealContext.Provider value={true}>
      <MotionTag
        className={cn(className)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.01, margin: "0px 0px 15% 0px" }}
        variants={variants}
      >
        {children}
      </MotionTag>
    </ScrollRevealContext.Provider>
  );
}

/** A child item for use inside a stagger ScrollReveal. */
export function ScrollRevealItem({
  children,
  className,
  y = 16,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduced = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : y },
    show: { opacity: 1, y: 0, transition: { duration: reduced ? 0.01 : 0.6, ease: easeApple } },
  };
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
