"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

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
        <FadeIn className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
            FAQs
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            Common questions
          </h2>
          <p className="text-[#666] mt-4 text-base">
            Still unsure? Chances are the answer&apos;s here.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="border border-[#e8e8e8] rounded-sm overflow-hidden bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] divide-y divide-[#f0f0f0]">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  className="w-full text-left px-7 py-6 flex items-center justify-between gap-6 hover:bg-stone transition-colors duration-150 group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-semibold text-ink text-base leading-snug group-hover:text-gold transition-colors duration-150">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-sm leading-none transition-all duration-200 ${
                      open === i
                        ? "border-gold text-gold rotate-45"
                        : "border-[#d0d0d0] text-[#888]"
                    }`}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <div className="pl-5 pr-7 pb-6 bg-stone border-l-2 border-gold ml-0">
                    <p className="text-[#555] leading-relaxed text-sm md:text-base pl-2">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={150} className="mt-10 text-center">
          <p className="text-[#888] text-sm mb-4">
            Have a question that&apos;s not listed here?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-ink font-semibold text-sm border-b border-ink hover:border-gold hover:text-gold transition-colors duration-150 pb-0.5"
          >
            Get in touch directly
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
