"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const blurUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease } },
};

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 bg-ink border-t border-white/5">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={blurUp} className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
            Early Clients
          </motion.p>
          <motion.h2 variants={blurUp} className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Be one of my first clients
          </motion.h2>
          <motion.p variants={blurUp} className="text-white/55 text-base leading-relaxed mb-10">
            I&apos;m currently taking on a small number of founding clients at a reduced rate — in exchange for an honest review once your site is live. You get a professional website at a lower price. I get a real testimonial. Everyone wins.
          </motion.p>
          <motion.div variants={blurUp}>
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: "0 8px 28px rgba(201,168,76,0.45)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white text-sm font-semibold rounded-lg shadow-[0_4px_20px_rgba(201,168,76,0.35)] hover:bg-[#b8912e] transition-colors"
              >
                Claim a Founding Client Spot
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          <motion.p variants={blurUp} className="text-white/30 text-sm mt-4">
            Only 3 spots available this month.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
