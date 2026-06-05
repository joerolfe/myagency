"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { spotsLeft } from "@/lib/config";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const blurUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease } },
};

export default function TestimonialsSection() {
  return (
    <section
      className="py-24 md:py-36 px-6"
      style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={blurUp}
            className="text-[10px] font-black tracking-[0.4em] uppercase mb-4"
            style={{ color: "#c9a84c" }}
          >
            Early Clients
          </motion.p>

          <motion.h2
            variants={blurUp}
            className="font-black text-white leading-none mb-6"
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontSize: "clamp(32px, 5vw, 64px)",
              letterSpacing: "-0.04em",
            }}
          >
            Be one of my first clients
          </motion.h2>

          <motion.p
            variants={blurUp}
            className="text-base leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
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
                className="inline-flex items-center gap-3 px-8 py-4 text-[13px] font-black tracking-wide"
                style={{ background: "#c9a84c", color: "#0a0a0a" }}
              >
                Claim a Founding Client Spot
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.p
            variants={blurUp}
            className="text-sm mt-4"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Only {spotsLeft} spot{spotsLeft !== 1 ? "s" : ""} available this month.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
