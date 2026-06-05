"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const blurUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.72, ease } },
};

// ── Icons ──────────────────────────────────────────────────────────────────────

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M20 15.5l-3-2.3a1.5 1.5 0 00-1.8.1l-1.4 1.4a11 11 0 01-5.5-5.5L9.7 7.8a1.5 1.5 0 00.1-1.8L7.5 3a1.5 1.5 0 00-1.8-.5L3.3 3.8A1.5 1.5 0 002.5 5C2.5 13.6 8.4 19.5 17 19.5a1.5 1.5 0 001.2-.8l1.3-2.4A1.5 1.5 0 0020 15.5z" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const StarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2l2.5 5.5L19 8.4l-4 3.9 1 5.5L11 15.1l-5 2.7 1-5.5-4-3.9 5.5-.9L11 2z" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);
const MessageIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M3 4.5C3 3.4 3.9 2.5 5 2.5h12c1.1 0 2 .9 2 2V14c0 1.1-.9 2-2 2h-6l-5 3.5V16H5c-1.1 0-2-.9-2-2V4.5z" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M7 8.5h8M7 12h5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="2.5" y="4" width="17" height="16" rx="2" stroke="#c9a84c" strokeWidth="1.5"/>
    <path d="M7 2.5V5.5M15 2.5V5.5M2.5 9h17" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 13h2v2H7z" fill="#c9a84c" fillOpacity="0.6"/>
  </svg>
);
const ChatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2.5C6.3 2.5 2.5 5.9 2.5 10c0 1.6.6 3.2 1.7 4.4L3 19l4.8-1.5A9 9 0 0011 17.5c4.7 0 8.5-3.4 8.5-7.5S15.7 2.5 11 2.5z" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M7.5 10h7M7.5 13h4" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const BoltIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M13 2L4 13h7l-2 7L20 9h-7l2-7z" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────────

const automations = [
  {
    icon: <PhoneIcon />,
    title: "Missed Call Text-Back",
    desc: "Customer calls and you can't answer? They instantly get a text saying you'll call back — so they don't ring your competitor.",
    setup: 125, monthly: 30, bundle: false,
  },
  {
    icon: <StarIcon />,
    title: "Google Review Requests",
    desc: "After every job, your customer automatically gets a text asking for a Google review. More reviews, higher ranking, more calls.",
    setup: 125, monthly: 25, bundle: false,
  },
  {
    icon: <MessageIcon />,
    title: "Lead Follow-Up",
    desc: "Someone fills your contact form and gets an instant reply — even at midnight. Keeps the lead warm before you've even seen the enquiry.",
    setup: 150, monthly: 35, bundle: false,
  },
  {
    icon: <CalendarIcon />,
    title: "Appointment Reminders",
    desc: "Automatic reminder sent to your customers the day before their appointment. Cuts no-shows without you lifting a finger.",
    setup: 125, monthly: 25, bundle: false,
  },
  {
    icon: <ChatIcon />,
    title: "Website Chatbot",
    desc: "A smart chatbot on your website that answers common questions and captures leads 24/7 — even when you're on the job.",
    setup: 200, monthly: 40, bundle: false,
  },
  {
    icon: <BoltIcon />,
    title: "Full Automation Bundle",
    desc: "Get 3 automations set up together at a reduced rate. The most popular option for trades businesses wanting the full system.",
    setup: 350, monthly: 75, bundle: true,
  },
];

// ── Main export ────────────────────────────────────────────────────────────────

export default function AutomationDemos() {
  return (
    <section className="py-20 md:py-28 px-6 bg-ink border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-14"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={blurUp} className="text-xs font-bold tracking-widest uppercase text-[#c9a84c] mb-4">Automations</motion.p>
          <motion.h2 variants={blurUp} className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            What I can automate for your business
          </motion.h2>
          <motion.p variants={blurUp} className="text-white/50 text-base leading-relaxed max-w-xl mx-auto">
            Every automation is set up and managed for you — one-off setup fee, then a small monthly retainer.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {automations.map((a) => (
            <motion.div
              key={a.title}
              variants={blurUp}
              whileHover={{ y: -5, boxShadow: a.bundle ? "0 20px 48px rgba(201,168,76,0.22)" : "0 16px 40px rgba(201,168,76,0.10)" }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`flex flex-col gap-4 rounded-xl p-6 cursor-default min-h-[280px] ${
                a.bundle ? "bg-ink border-2 border-[#c9a84c]/40" : "bg-ink border border-[#c9a84c]/20"
              }`}
            >
              <span className={`self-start text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${
                a.bundle ? "bg-[#c9a84c]/15 text-[#c9a84c] border-[#c9a84c]/25" : "opacity-0 border-transparent"
              }`}>
                Best value
              </span>
              <div className="w-11 h-11 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center">
                {a.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold text-white mb-2">{a.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
              </div>
              <div className="border-t border-white/8 pt-4 flex items-center justify-between gap-2">
                <span className="text-[#c9a84c] text-sm font-semibold">Setup £{a.setup}</span>
                <span className="text-white/30 text-xs">·</span>
                <span className="text-[#c9a84c] text-sm font-semibold">£{a.monthly}/mo</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c9a84c] text-white text-sm font-semibold rounded-lg shadow-[0_4px_20px_rgba(201,168,76,0.35)] hover:bg-[#b8912e] transition-colors"
          >
            Get a Free Demo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
