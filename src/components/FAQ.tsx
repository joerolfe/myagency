"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const blurUp: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease } },
};

const faqs = [
  {
    q: "Do I need to do anything technical?",
    a: "No — I handle the domain, hosting, and everything else.",
  },
  {
    q: "How long does it take?",
    a: "Most sites are live within 1–2 weeks of approval.",
  },
  {
    q: "What if I want changes later?",
    a: "Monthly retainer clients get regular updates included.",
  },
  {
    q: "Do I own the website?",
    a: "Yes — once paid in full, the site is fully yours.",
  },
  {
    q: "Do I need to be local?",
    a: "No — I work with businesses across the UK. Video calls work just as well as in-person meetings, and everything is handled remotely. That said, if you're in Derbyshire or Staffordshire, I'm happy to meet in person too.",
  },
  {
    q: "Can you help me show up on Google?",
    a: "Yes, every site includes basic SEO and I can set up your Google Business profile.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 bg-white border-t border-[#ebebeb]">
      <div className="max-w-3xl mx-auto">

        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={blurUp} className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
            FAQs
          </motion.p>
          <motion.h2 variants={blurUp} className="font-display text-3xl md:text-4xl font-bold text-ink">
            Common questions
          </motion.h2>
          <motion.p variants={blurUp} className="text-[#666] mt-4 text-base">
            Still unsure? Chances are the answer&apos;s here.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="border border-[#e8e8e8] rounded-sm overflow-hidden bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] divide-y divide-[#f0f0f0]"
        >
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full text-left px-7 py-6 flex items-center justify-between gap-6 hover:bg-stone transition-colors duration-150 group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-semibold text-base leading-snug transition-colors duration-150 ${open === i ? "text-gold" : "text-ink group-hover:text-gold"}`}>
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-sm leading-none ${
                    open === i ? "border-gold text-gold" : "border-[#d0d0d0] text-[#888]"
                  }`}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-5 pr-7 pb-6 bg-stone border-l-2 border-gold">
                      <p className="text-[#555] leading-relaxed text-sm md:text-base pl-2">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-[#888] text-sm mb-4">Have a question that&apos;s not listed here?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-ink font-semibold text-sm border-b border-ink hover:border-gold hover:text-gold transition-colors duration-150 pb-0.5"
          >
            Get in touch directly
          </a>
        </motion.div>
      </div>
    </section>
  );
}
