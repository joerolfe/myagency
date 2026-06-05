"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import ServicesIncluded from "@/components/ServicesIncluded";
import PricingCards from "@/components/PricingCards";
import ServicesAddons from "@/components/ServicesAddons";
import Comparison from "@/components/Comparison";
import ServicesFAQ from "@/components/ServicesFAQ";

const ease = [0.16, 1, 0.3, 1] as const;

const blurUp: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

// ── Icons ──────────────────────────────────────────────────────────────────────

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

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <rect x="2.5" y="4" width="17" height="16" rx="2" stroke="#c9a84c" strokeWidth="1.5"/>
    <path d="M7 2.5V5.5M15 2.5V5.5M2.5 9h17" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 13h2v2H7z" fill="#c9a84c" fillOpacity="0.6"/>
  </svg>
);

const ChatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M11 2.5C6.3 2.5 2.5 5.9 2.5 10c0 1.6.6 3.2 1.7 4.4L3 19l4.8-1.5A9 9 0 0011 17.5c4.7 0 8.5-3.4 8.5-7.5S15.7 2.5 11 2.5z" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M7.5 10h7M7.5 13h4" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const BoltIcon = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M13 2L4 13h7l-2 7L20 9h-7l2-7z" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

// ── Automations summary data ───────────────────────────────────────────────────

const automations = [
  {
    icon: <PhoneIcon />,
    title: "Missed Call Text-Back",
    description: "Customer calls and you can't answer? They instantly get a text so they don't ring your competitor.",
    setup: 125,
    monthly: 30,
  },
  {
    icon: <StarIcon />,
    title: "Google Review Requests",
    description: "After every job, your customer automatically gets a text asking for a Google review.",
    setup: 125,
    monthly: 25,
  },
  {
    icon: <MessageIcon />,
    title: "Lead Follow-Up",
    description: "Someone fills your contact form and gets an instant reply — even at midnight.",
    setup: 150,
    monthly: 35,
  },
  {
    icon: <CalendarIcon />,
    title: "Appointment Reminders",
    description: "Automatic reminder sent to your customers the day before their appointment. Cuts no-shows.",
    setup: 125,
    monthly: 25,
  },
  {
    icon: <ChatIcon />,
    title: "Website Chatbot",
    description: "A smart chatbot that answers common questions and captures leads 24/7.",
    setup: 200,
    monthly: 40,
  },
  {
    icon: <BoltIcon />,
    title: "Full Automation Bundle",
    description: "Get 3 automations set up together at a reduced rate — the most popular option.",
    setup: 350,
    monthly: 75,
    featured: true,
  },
];

// ── Automations tab content ────────────────────────────────────────────────────

function AutomationsTab() {
  return (
    <motion.div
      key="automations"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease }}
    >
      {/* Intro */}
      <section className="py-16 md:py-20 px-6 bg-stone border-b border-[#e8e8e8]">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={blurUp} className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
            AI Automations
          </motion.p>
          <motion.h2 variants={blurUp} className="font-display text-3xl md:text-4xl font-bold text-ink mb-4 leading-tight">
            Work that runs while you sleep
          </motion.h2>
          <motion.p variants={blurUp} className="text-[#666] text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Smart automations for local businesses — no tech knowledge needed. I set it up, you see the results.
          </motion.p>
          <motion.div variants={blurUp}>
            <Link
              href="/automations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-[#b8912e] transition-colors"
            >
              See full automations page
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Cards */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {automations.map((a) => (
              <motion.div
                key={a.title}
                variants={blurUp}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(201,168,76,0.12)" }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={`relative rounded-xl p-6 border flex flex-col gap-4 cursor-default ${
                  a.featured
                    ? "bg-ink border-gold/30 shadow-[0_4px_24px_rgba(201,168,76,0.1)]"
                    : "bg-white border-[#e8e8e8] shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
                }`}
              >
                {a.featured && (
                  <span className="absolute -top-3 left-5 text-[10px] font-bold tracking-widest uppercase bg-gold text-white px-2.5 py-1 rounded-full">
                    Best Value
                  </span>
                )}

                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${a.featured ? "bg-gold/15" : "bg-gold/8"}`}>
                  {a.icon}
                </div>

                <div className="flex-1">
                  <h3 className={`font-display text-base font-bold mb-1.5 ${a.featured ? "text-white" : "text-ink"}`}>
                    {a.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${a.featured ? "text-white/55" : "text-[#666]"}`}>
                    {a.description}
                  </p>
                </div>

                <div className={`flex items-center gap-3 pt-2 border-t text-sm ${a.featured ? "border-white/10" : "border-[#f0f0f0]"}`}>
                  <div>
                    <span className={`font-sans font-bold text-gold`}>£{a.setup}</span>
                    <span className={`ml-1 text-xs ${a.featured ? "text-white/35" : "text-[#999]"}`}>setup</span>
                  </div>
                  <span className={a.featured ? "text-white/20" : "text-[#ddd]"}>·</span>
                  <div>
                    <span className={`font-sans font-bold text-gold`}>£{a.monthly}/mo</span>
                    <span className={`ml-1 text-xs ${a.featured ? "text-white/35" : "text-[#999]"}`}>after</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease }}
          >
            <Link
              href="/automations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-white text-sm font-semibold hover:bg-[#b8912e] transition-colors rounded-lg shadow-[0_4px_20px_rgba(201,168,76,0.35)]"
            >
              See Full Automations Page
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <p className="mt-3 text-[#999] text-xs">Includes full pricing, how it works, FAQ and more</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

// ── Main wrapper ──────────────────────────────────────────────────────────────

export default function ServicesPageWrapper() {
  const [tab, setTab] = useState<"websites" | "automations">("websites");

  return (
    <>
      {/* Tab toggle — sits between hero and content */}
      <div className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-lg border-b border-[#e8e8e8] shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <div className="max-w-5xl mx-auto px-6 flex items-center gap-1 py-3">
          <button
            onClick={() => setTab("websites")}
            className={`relative text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 ${
              tab === "websites"
                ? "text-ink"
                : "text-[#999] hover:text-ink"
            }`}
          >
            {tab === "websites" && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 bg-gold/12 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">Websites</span>
          </button>

          <button
            onClick={() => setTab("automations")}
            className={`relative text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 ${
              tab === "automations"
                ? "text-ink"
                : "text-[#999] hover:text-ink"
            }`}
          >
            {tab === "automations" && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 bg-gold/12 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative flex items-center gap-1.5">
              Automations
              <span className="text-[9px] font-bold tracking-widest uppercase bg-gold/15 text-gold px-1.5 py-0.5 rounded-full border border-gold/25">
                New
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        {tab === "websites" ? (
          <motion.div
            key="websites"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease }}
          >
            <ServicesIncluded />

            {/* Pricing cards */}
            <section id="packages" className="py-20 md:py-28 px-6 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                  <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Packages</p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">Choose your package</h2>
                  <p className="text-[#666] mt-3 text-base max-w-lg mx-auto">
                    All packages are one-off payments. Monthly retainer is optional — not required.
                  </p>
                </div>
                <PricingCards />
                <p className="text-center text-[#999] text-sm mt-8">
                  Not sure which package is right for you?{" "}
                  <a href="/contact" className="text-ink font-semibold hover:text-gold transition-colors">
                    Just ask — I&apos;ll recommend the best fit.
                  </a>
                </p>
              </div>
            </section>

            <ServicesAddons />
            <Comparison />
            <ServicesFAQ />
          </motion.div>
        ) : (
          <AutomationsTab />
        )}
      </AnimatePresence>
    </>
  );
}
