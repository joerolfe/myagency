"use client";

import { motion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const blurUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease } },
};

const testimonials = [
  {
    name: "Sarah Mitchell",
    business: "Mitchell's Hair Studio",
    location: "Burton upon Trent",
    text: "I had no website at all before Joe got in touch. Within two weeks I had a professional site and I'm already getting new bookings through it. Couldn't recommend him highly enough.",
  },
  {
    name: "Dave Cartwright",
    business: "Cartwright Landscaping",
    location: "Derby",
    text: "Joe built us a new website and sorted our Google listing. We're getting at least 3–4 more enquiries a week than before. The whole process was dead easy — he handled everything.",
  },
  {
    name: "Liz Henshaw",
    business: "The Baking Box",
    location: "Swadlincote",
    text: "Finally a website I'm actually proud to show people. Joe explained everything clearly and never made me feel like I was wasting his time asking basic questions. Great service.",
  },
];

function AnimatedStars() {
  return (
    <div className="flex gap-0.5 text-gold text-sm">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          ★
        </motion.span>
      ))}
    </div>
  );
}

function TestimonialCard({ t, index }: { t: (typeof testimonials)[number]; index: number }) {
  return (
    <motion.div
      variants={blurUp}
      whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="bg-white border border-[#e8e8e8] rounded-sm p-7 flex flex-col h-full shadow-[0_2px_12px_rgba(0,0,0,0.04)] cursor-default"
    >
      <AnimatedStars />
      <p className="text-[#333] text-sm leading-relaxed mt-5 mb-6 flex-1">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="border-t border-[#f0f0f0] pt-5 flex items-center gap-3">
        <motion.div
          className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(201,168,76,0.25)" }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <span className="text-gold font-bold text-sm">{t.name[0]}</span>
        </motion.div>
        <div>
          <p className="font-semibold text-ink text-sm leading-none mb-0.5">{t.name}</p>
          <p className="text-[#888] text-xs">{t.business} &middot; {t.location}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 bg-stone border-t border-[#ebebeb]">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={blurUp} className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
            Reviews
          </motion.p>
          <motion.h2 variants={blurUp} className="font-display text-3xl md:text-4xl font-bold text-ink">
            What local businesses say
          </motion.h2>
          <motion.p variants={blurUp} className="text-[#666] mt-4 text-base">
            Real results from businesses across Derbyshire and Staffordshire.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-[#999] text-sm">
            All reviews collected via{" "}
            <span className="text-ink font-medium">Google Business</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
