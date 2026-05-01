"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const blurUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
};

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M20 15.5l-3-2.3a1.5 1.5 0 00-1.8.1l-1.4 1.4a11 11 0 01-5.5-5.5L9.7 7.8a1.5 1.5 0 00.1-1.8L7.5 3a1.5 1.5 0 00-1.8-.5L3.3 3.8A1.5 1.5 0 002.5 5C2.5 13.6 8.4 19.5 17 19.5a1.5 1.5 0 001.2-.8l1.3-2.4A1.5 1.5 0 0020 15.5z" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M11 2l2.5 5.5L19 8.4l-4 3.9 1 5.5L11 15.1l-5 2.7 1-5.5-4-3.9 5.5-.9L11 2z" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const MessageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M3 4.5C3 3.4 3.9 2.5 5 2.5h12c1.1 0 2 .9 2 2V14c0 1.1-.9 2-2 2h-6l-5 3.5V16H5c-1.1 0-2-.9-2-2V4.5z" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M7 8.5h8M7 12h5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const cards = [
  {
    icon: <PhoneIcon />,
    title: "Missed Call Text-Back",
    body: "Can't pick up? Your customer gets an instant text so they don't call your competitor.",
    from: "£30/mo",
  },
  {
    icon: <StarIcon />,
    title: "Google Review Requests",
    body: "After every job, a review request goes out automatically. More reviews, more calls.",
    from: "£25/mo",
  },
  {
    icon: <MessageIcon />,
    title: "Lead Follow-Up",
    body: "Enquiries get an instant reply, even at midnight. Never lose a warm lead again.",
    from: "£35/mo",
  },
];

const stats = [
  { value: "48hr", label: "Setup time" },
  { value: "0", label: "Tech knowledge needed" },
  { value: "24/7", label: "Runs automatically" },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 md:py-32 px-6 bg-ink border-t border-white/5 overflow-hidden relative">
      {/* Background glow */}
      <motion.div
        className="absolute top-0 right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={blurUp} className="inline-flex items-center gap-2 bg-gold/12 border border-gold/25 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-xs font-semibold">AI Automations — New service</span>
          </motion.div>
          <motion.h2 variants={blurUp} className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Your business,{" "}
            <span className="text-gold italic">running on autopilot</span>
          </motion.h2>
          <motion.p variants={blurUp} className="text-white/50 text-base leading-relaxed max-w-xl mx-auto">
            I set up smart automations that handle your follow-ups, reviews, and missed calls — automatically. From £25/month after a one-off setup.
          </motion.p>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          className="flex justify-center gap-6 md:gap-12 mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-sans text-2xl font-bold text-gold tracking-tight mb-0.5">{s.value}</div>
              <div className="text-white/35 text-xs">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Automation cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-4 mb-8"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={blurUp}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(201,168,76,0.13)" }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="bg-white/[0.04] border border-white/10 rounded-xl p-6 flex flex-col gap-4 cursor-default hover:border-gold/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                {c.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base font-bold text-white mb-1.5">{c.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{c.body}</p>
              </div>
              <div className="pt-3 border-t border-white/8">
                <span className="text-gold text-sm font-semibold">From {c.from}</span>
                <span className="text-white/25 text-xs ml-2">after setup</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease }}
        >
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0 12px 32px rgba(201,168,76,0.35)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
            className="inline-block"
          >
            <Link
              href="/automations"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-white text-sm font-semibold rounded-xl shadow-[0_4px_20px_rgba(201,168,76,0.3)] hover:bg-[#b8912e] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
                <path d="M13 2L4 13h7l-2 7L20 9h-7l2-7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
              </svg>
              See all 5 automations + pricing
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
          <p className="mt-3 text-white/25 text-xs">Appointment Reminders &amp; Website Chatbot also available</p>
        </motion.div>

      </div>
    </section>
  );
}
