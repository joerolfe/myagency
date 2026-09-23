"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

// Roughly matches how long PageLoader's intro takes to clear the screen,
// so the hero reveals just as the black overlay finishes splitting away.
const LOAD_DELAY = 1.9;

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { delayChildren: LOAD_DELAY, staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax drift as the hero scrolls past.
  const parallaxY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -60]);
  // Fade + scale down gently only as it actually leaves the screen (second half of the scroll).
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [1, 1, 1] : [1, 1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [1, 1, 1] : [1, 1, 0.94]);
  // Scroll indicator fades out quickly, early in the scroll.
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.2], reduceMotion ? [1, 1] : [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "100svh", background: "#0a0a0a" }}
    >
      {/* Scroll-linked wrapper: parallax + fade/scale on the way out */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full"
        style={{ y: parallaxY, opacity: contentOpacity, scale: contentScale }}
      >
        {/* Load-in wrapper: staggered fade + slide up */}
        <motion.div variants={staggerContainer} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="text-[11px] font-bold tracking-[0.35em] uppercase mb-4"
            style={{ color: "#c9a84c" }}
          >
            Web Design &amp; AI Automations
          </motion.p>

          <motion.h1
            variants={item}
            className="font-black text-white leading-none mb-4"
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontSize: "clamp(32px, 5vw, 72px)",
              letterSpacing: "-0.03em",
            }}
          >
            We build websites
            <br />
            that grow your
            <br />
            <span style={{ color: "#c9a84c" }}>business.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-sm md:text-base max-w-xl mx-auto mb-6 leading-relaxed"
            style={{ color: "#a0a0a0" }}
          >
            Premium websites and AI automations for local businesses
            ready to dominate their area.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" }); }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-[13px] tracking-widest uppercase transition-all duration-200 hover:opacity-90"
              style={{ background: "#c9a84c", color: "#0a0a0a" }}
            >
              See Our Work
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-[13px] tracking-widest uppercase border border-white/30 text-white hover:border-white transition-all duration-200"
            >
              Book a Free Call
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator: outer handles the load-in fade, inner handles the scroll-out fade */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: LOAD_DELAY + 0.5 }}
      >
        <motion.div className="flex flex-col items-center gap-2" style={{ opacity: indicatorOpacity }}>
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">Scroll</span>
          <div className="w-px h-10 overflow-hidden">
            <div
              className="w-full bg-[#c9a84c]"
              style={{
                height: "100%",
                animation: "scrollPulse 1.5s ease-in-out infinite",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
