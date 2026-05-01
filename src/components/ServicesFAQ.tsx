"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const blurUp: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease } },
};

const faqs = [
  { q: "Do I pay anything upfront?", a: "No. I build a free demo of your site first — completely free. You only pay once you've seen it and decided you want to go ahead." },
  { q: "Can I upgrade my package later?", a: "Yes — you can start on Starter and upgrade to Standard or Premium at any point. I'll only charge the difference." },
  { q: "What does the monthly retainer cover?", a: "Hosting, security updates, and any content changes you need (new text, images, pages). You never have to touch the technical side." },
  { q: "How long does it take to go live?", a: "Most sites are live within 1–2 weeks of you approving the demo." },
  { q: "Do I own the website?", a: "Yes — once paid in full, the site is entirely yours. No lock-in, no ongoing obligation." },
  { q: "What if I only need one small change?", a: "Happy to help. Small one-off changes outside a retainer are quoted individually — usually £25–50 depending on the work." },
];

export default function ServicesFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-24 px-6 bg-white border-t border-[#e8e8e8]">
      <div className="max-w-2xl mx-auto">

        <motion.div
          className="text-center mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={blurUp} className="text-xs font-bold tracking-widest uppercase text-gold mb-4">FAQs</motion.p>
          <motion.h2 variants={blurUp} className="font-display text-2xl md:text-3xl font-bold text-ink">Pricing questions</motion.h2>
          <motion.p variants={blurUp} className="text-[#666] mt-3 text-sm">Everything you need to know before getting started.</motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="border border-[#e8e8e8] rounded-xl overflow-hidden bg-white shadow-[0_2px_16px_rgba(0,0,0,0.05)] divide-y divide-[#f0f0f0]"
        >
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-6 hover:bg-stone transition-colors duration-150 group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-semibold text-sm leading-snug transition-colors duration-150 ${open === i ? "text-gold" : "text-ink group-hover:text-gold"}`}>
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
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 bg-stone border-l-2 border-gold">
                      <p className="text-[#555] leading-relaxed text-sm pt-1">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
