"use client";

import { motion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const blurUp: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease } },
};

const included = [
  {
    label: "Free demo first",
    sub: "See your site before you spend a penny.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="1.5" y="3.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 10.5L9 12.5L13 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Mobile responsive",
    sub: "Looks sharp on phones, tablets and desktop.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="7" y="1.5" width="10" height="17" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="16" r="0.8" fill="currentColor"/>
        <rect x="1.5" y="5" width="6" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: "Fast loading",
    sub: "Optimised so visitors don't bounce.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.5 8H18L13.5 11.5L15.5 17.5L10 14L4.5 17.5L6.5 11.5L2 8H7.5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Contact form",
    sub: "Customers can reach you 24/7.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 4.5C2 3.67 2.67 3 3.5 3H16.5C17.33 3 18 3.67 18 4.5V13.5C18 14.33 17.33 15 16.5 15H12L8 18V15H3.5C2.67 15 2 14.33 2 13.5V4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M6 7.5H14M6 10.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "SSL certificate",
    sub: "The padlock — trusted by Google and customers.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="4" y="9" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 9V6.5a3 3 0 016 0V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="13.5" r="1.2" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Hosting setup",
    sub: "Everything configured and ready to go live.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="12" width="16" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="15" cy="5.5" r="1" fill="currentColor"/>
        <circle cx="15" cy="14.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "You own the site",
    sub: "Paid in full? It's 100% yours. No lock-in.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L13 5H17V9L20 10L17 11V15H13L10 18L7 15H3V11L0 10L3 9V5H7L10 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M7.5 10L9.5 12L13 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Basic on-page SEO",
    sub: "Set up to be found on Google from day one.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 6v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function ServicesIncluded() {
  return (
    <section className="py-20 md:py-24 px-6 bg-stone border-b border-[#e8e8e8]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Every package includes</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-2">All of this, as standard</h2>
          <p className="text-[#666] text-sm max-w-md mx-auto">No matter which package you choose, every site comes with these included.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {included.map((item) => (
            <motion.div
              key={item.label}
              variants={blurUp}
              whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(201,168,76,0.14)" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group bg-white border border-[#e8e8e8] rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] cursor-default"
            >
              <motion.div
                className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4 text-gold"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(201,168,76,0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {item.icon}
              </motion.div>
              <p className="font-semibold text-ink text-sm mb-1">{item.label}</p>
              <p className="text-[#999] text-xs leading-relaxed">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
