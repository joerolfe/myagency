"use client";

import { motion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

const blurUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
};

const stepIn: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

const steps = [
  {
    title: "Discovery",
    description: "I research your business, check your current online presence, and identify exactly what's holding you back — before we've even spoken.",
    tag: "Free",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Free Demo",
    description: "I build a working demo of your new website at no cost. You see exactly what your site will look like before anything is agreed or paid.",
    tag: "No obligation",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1.5" y="3.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 14.5V16.5M12 14.5V16.5M4 16.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 9L9 11L12 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Review Together",
    description: "We meet in person or on a video call. I walk you through the demo, answer every question, and make any changes you want — no rush.",
    tag: "In person or video",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 4.5C2 3.67 2.67 3 3.5 3H14.5C15.33 3 16 3.67 16 4.5V11.5C16 12.33 15.33 13 14.5 13H10L6 16V13H3.5C2.67 13 2 12.33 2 11.5V4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 7.5H12M6 10H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Build & Launch",
    description: "You approve the design and I build the full site, set up hosting, domain, and go live — everything handled from start to finish.",
    tag: "Fully managed",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2L10.8 6.2L15.5 6.6L12.1 9.6L13.1 14.2L9 11.7L4.9 14.2L5.9 9.6L2.5 6.6L7.2 6.2L9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support",
    description: "Your site goes live and I handle updates, security, and changes on a monthly retainer. You focus on the business — I handle the tech.",
    tag: "From £35/month",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2.5L14 5.3V9C14 12.1 11.8 14.9 9 15.8C6.2 14.9 4 12.1 4 9V5.3L9 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 9L8.5 10.5L11.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 bg-white border-t border-[#ebebeb]">
      <div className="max-w-4xl mx-auto">

        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={blurUp} className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
            The Process
          </motion.p>
          <motion.h2 variants={blurUp} className="font-display text-3xl md:text-4xl font-bold text-ink">
            How it works
          </motion.h2>
          <motion.p variants={blurUp} className="text-[#666] mt-4 text-base max-w-lg mx-auto">
            From first contact to a live website — handled end to end, with no tech knowledge required from you.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={stepIn} className="flex gap-7 md:gap-10">
              {/* Icon + connector */}
              <div className="flex flex-col items-center flex-shrink-0">
                <motion.div
                  className="w-11 h-11 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold"
                  whileHover={{ scale: 1.15, backgroundColor: "rgba(201,168,76,0.2)", borderColor: "rgba(201,168,76,0.6)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {step.icon}
                </motion.div>
                {index < steps.length - 1 && (
                  <motion.div
                    className="w-px flex-1 bg-gradient-to-b from-gold/30 to-transparent my-2"
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, ease }}
                  />
                )}
              </div>

              {/* Content */}
              <div className={`${index < steps.length - 1 ? "pb-10" : ""} pt-2`}>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-base font-bold text-ink">{step.title}</h3>
                  <motion.span
                    className="text-[10px] font-bold tracking-wider uppercase bg-gold/10 text-gold px-2 py-0.5 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    {step.tag}
                  </motion.span>
                </div>
                <p className="text-[#555] leading-relaxed text-sm md:text-base max-w-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 p-6 md:p-8 bg-stone border border-[#e8e8e8] rounded-sm flex gap-4 items-start"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          whileHover={{ boxShadow: "0 8px 32px rgba(22,163,74,0.10)", borderColor: "rgba(22,163,74,0.25)" }}
        >
          <motion.div
            className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
              <path d="M1 6L5 10L13 2" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
          <div>
            <p className="text-ink font-bold text-sm mb-1">Zero risk guarantee</p>
            <p className="text-[#666] text-sm leading-relaxed">
              If you see the demo and it&apos;s not for you — no hard feelings, no invoice, no awkward conversation.
              You walk away with nothing to lose. That&apos;s the whole point of doing the demo first.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
