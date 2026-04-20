import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Pixels of vertical drift across the scroll range. Default 60. */
  distance?: number;
  /** Scale factor at end (1 = no scale). Default 1.08 for subtle zoom. */
  scaleTo?: number;
}

/** Subtle parallax for hero backgrounds and feature imagery. */
export function Parallax({ children, className, distance = 60, scaleTo = 1.08 }: ParallaxProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : distance]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : scaleTo]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

/** Useful when you want raw progress to drive multiple transforms. */
export function useElementScrollProgress(): {
  ref: React.RefObject<HTMLDivElement>;
  progress: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return { ref, progress: scrollYProgress };
}
