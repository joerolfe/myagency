"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Fades and slides an element up as it scrolls into view. Plays once.
 * Falls back to a plain opacity fade (no motion) when the user has
 * prefers-reduced-motion enabled.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  ...rest
}: HTMLMotionProps<"div"> & { delay?: number; y?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0.3 : 0.5, ease, delay: reduceMotion ? 0 : delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
