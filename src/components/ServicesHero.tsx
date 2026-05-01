"use client";

import { motion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const blurUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
};

const trust = ["Free demo first", "£0 upfront", "~2 week turnaround", "You own the site"];

export default function ServicesHero() {
  return (
    <div className="relative bg-ink overflow-hidden pt-36 pb-28 px-6">
      {/* Animated blobs */}
      <motion.div
        className="absolute top-[-10%] right-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.11) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-5%] left-[-5%] w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "56px 56px" }}
      />

      <motion.div
        className="relative max-w-4xl mx-auto text-center"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={blurUp} className="text-xs font-bold tracking-widest uppercase text-gold mb-5">
          Services &amp; Pricing
        </motion.p>
        <motion.h1
          variants={blurUp}
          className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight mb-6"
        >
          A proper website, handled end to end —{" "}
          <span className="text-gold italic">for a price that makes sense</span>
        </motion.h1>
        <motion.p variants={blurUp} className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          No templates. No hidden fees. No tech headaches. You see a free demo first — then decide.
        </motion.p>

        {/* Trust badges */}
        <motion.div variants={blurUp} className="flex flex-wrap items-center justify-center gap-3">
          {trust.map((t) => (
            <span key={t} className="flex items-center gap-2 bg-white/6 border border-white/12 rounded-full px-4 py-1.5 text-sm text-white/70 font-medium">
              <span className="text-gold text-xs">✓</span>
              {t}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
