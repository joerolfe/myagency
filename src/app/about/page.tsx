"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HomeNav from "@/components/home/HomeNav";
import HomeFooter from "@/components/home/HomeFooter";

const ease = [0.16, 1, 0.3, 1] as const;

const blurUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const stats = [
  { value: "48hrs", label: "Average site turnaround" },
  { value: "£0", label: "Upfront cost to you" },
  { value: "100%", label: "Satisfaction or walk away" },
  { value: "3", label: "Brands owned & operated" },
];

const skills = [
  "Web Design", "Next.js / React", "AI Automations", "SEO",
  "Python", "Brand Strategy", "Content Creation", "Bot Development",
];

const values = [
  {
    title: "Results over aesthetics",
    body: "A site that looks great but doesn't bring in work is just an expensive business card. Everything I build is designed to convert visitors into paying customers.",
  },
  {
    title: "No jargon, no faff",
    body: "I explain everything in plain English. You'll always know what I'm doing, why I'm doing it, and what it means for your business.",
  },
  {
    title: "You own everything",
    body: "Your domain, your hosting, your code. If we ever stop working together, you walk away with the whole site — no strings attached.",
  },
  {
    title: "Speed without cutting corners",
    body: "Most demos are ready in 48 hours. That doesn't mean rushed — it means I don't waste your time or mine on unnecessary back-and-forth.",
  },
];

export default function AboutPage() {
  return (
    <main style={{ background: "#0a0a0a" }}>
      <HomeNav />

      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 pt-32 relative overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)" }}
        />

        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 gap-12 md:gap-20 items-end"
          >
            {/* Left — text */}
            <div>
              <motion.p variants={blurUp} className="text-[10px] font-black tracking-[0.4em] uppercase mb-6" style={{ color: "#c9a84c" }}>
                About
              </motion.p>
              <motion.h1
                variants={blurUp}
                className="font-black text-white leading-none mb-6"
                style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(28px, 4.5vw, 64px)", letterSpacing: "-0.04em" }}
              >
                I&apos;m Joe.<br />
                <span style={{ color: "#c9a84c" }}>No agency,</span><br />
                just quality conversion.
              </motion.h1>
              <motion.p variants={blurUp} className="text-base md:text-lg leading-relaxed max-w-md" style={{ color: "rgba(255,255,255,0.45)" }}>
                Based in South Derbyshire. Helping local tradespeople and small businesses get online, get found, and get more customers — without the agency price tag.
              </motion.p>

              <motion.div variants={blurUp} className="mt-8 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-[12px] font-black tracking-wide"
                  style={{ background: "#c9a84c", color: "#0a0a0a" }}
                >
                  Work with me →
                </Link>
                <Link
                  href="/services"
                  className="text-[12px] font-black tracking-[0.1em] uppercase transition-colors duration-200 hover:text-white"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  See my work
                </Link>
              </motion.div>
            </div>

            {/* Right — photo */}
            <motion.div
              variants={blurUp}
              className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0 md:ml-auto w-full"
            >
              <div
                className="absolute inset-0"
                style={{ border: "1px solid rgba(201,168,76,0.2)" }}
              />
              <Image
                src="/joe.png"
                alt="Joseph Rolfe"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8" style={{ borderTop: "2px solid #c9a84c", borderLeft: "2px solid #c9a84c" }} />
              <div className="absolute bottom-0 right-0 w-8 h-8" style={{ borderBottom: "2px solid #c9a84c", borderRight: "2px solid #c9a84c" }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              <p className="font-black text-white leading-none mb-2" style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.04em", color: "#c9a84c" }}>
                {s.value}
              </p>
              <p className="text-[12px] leading-snug" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-24 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="text-[10px] font-black tracking-[0.4em] uppercase mb-4" style={{ color: "#c9a84c" }}>My Story</p>
            <h2
              className="font-black text-white leading-none mb-6"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.04em" }}
            >
              Built brands online. Now I build them for you.
            </h2>
          </motion.div>

          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            <p className="text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              I've spent years building brands online — growing audiences from scratch, figuring out what actually makes people click, buy, and come back. That's not theory. That's experience.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              I took those same skills and turned them toward something more grounded — helping local businesses look and feel the part online. Plumbers, roofers, barbers, landscapers — trades that are brilliant at what they do, but invisible on the internet.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Every site I build is designed with one goal: more work for you. Not just something that looks good in a portfolio — something that actually brings customers through the door.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              I keep my client list small on purpose. When you work with me, you're not handed off to a junior or lost in a queue. You get me — start to finish.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="mb-14"
          >
            <p className="text-[10px] font-black tracking-[0.4em] uppercase mb-4" style={{ color: "#c9a84c" }}>How I work</p>
            <h2
              className="font-black text-white leading-none"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.04em" }}
            >
              What you can expect
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="p-7"
                style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)" }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.08, ease }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1 h-5" style={{ background: "#c9a84c" }} />
                  <h3 className="font-black text-white text-[15px]" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
                    {v.title}
                  </h3>
                </div>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="py-24 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="mb-12"
          >
            <p className="text-[10px] font-black tracking-[0.4em] uppercase mb-4" style={{ color: "#c9a84c" }}>Skills</p>
            <h2
              className="font-black text-white leading-none"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(28px, 4vw, 52px)", letterSpacing: "-0.04em" }}
            >
              What I bring to the table
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
          >
            {skills.map((s) => (
              <span
                key={s}
                className="px-4 py-2 text-[12px] font-black tracking-[0.1em] uppercase"
                style={{ border: "1px solid rgba(201,168,76,0.3)", color: "#c9a84c", background: "rgba(201,168,76,0.05)" }}
              >
                {s}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <HomeFooter />
    </main>
  );
}
