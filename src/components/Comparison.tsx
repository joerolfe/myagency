"use client";

import { motion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const rowIn: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
};

const rows = [
  { feature: "Starting price",   us: "From £299",          diy: "£14–40/mo forever",  agency: "£1,500–3,000+" },
  { feature: "Setup time",       us: "~2 weeks",            diy: "Days to never",       agency: "6–12 weeks" },
  { feature: "Custom design",    us: true,                  diy: false,                 agency: "partial" },
  { feature: "Local support",    us: "South Derbyshire",    diy: false,                 agency: false },
  { feature: "Free demo first",  us: true,                  diy: false,                 agency: false },
  { feature: "SEO included",     us: true,                  diy: "basic only",          agency: "extra cost" },
  { feature: "You own the site", us: true,                  diy: false,                 agency: "usually" },
  { feature: "Monthly retainer", us: "Optional from £35",  diy: "Required forever",    agency: "Often mandatory" },
];

function Tick({ green = false }: { green?: boolean }) {
  return (
    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${green ? "bg-green-100" : "bg-green-100"}`}>
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path d="M1 4L3.5 6.5L9 1" stroke="#16a34a" strokeWidth={green ? "1.8" : "1.5"} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Cross() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M1 1L7 7M7 1L1 7" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function Cell({ value }: { value: string | boolean }) {
  if (value === true) return <Tick />;
  if (value === false) return <Cross />;
  return <span className="text-[#555] text-sm">{value}</span>;
}

function UsCell({ value }: { value: string | boolean }) {
  if (value === true) return <Tick green />;
  return <span className="text-ink text-sm font-semibold">{value}</span>;
}

export default function Comparison() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white border-t border-[#e8e8e8]">
      <div className="max-w-5xl mx-auto">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Why Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">How we compare</h2>
          <p className="text-[#666] mt-4 text-base max-w-xl mx-auto">
            Why not just use Wix or hire a big agency? Here&apos;s the honest comparison.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="overflow-x-auto rounded-xl border border-[#e8e8e8] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
        >
          <table className="w-full min-w-[560px]">
            <thead>
              <tr>
                <th className="text-left px-6 py-4 text-xs font-bold tracking-widest uppercase text-[#999] bg-stone border-b border-[#e8e8e8] w-[32%]">
                  Feature
                </th>
                <th className="px-4 py-4 text-sm font-bold text-white bg-gold border-b border-gold/80 text-center w-[23%]">
                  Rolfe Brand Scaling
                </th>
                <th className="px-4 py-4 text-xs font-bold tracking-wide text-[#666] bg-stone border-b border-[#e8e8e8] text-center w-[22%]">
                  Wix / Squarespace
                </th>
                <th className="px-4 py-4 text-xs font-bold tracking-wide text-[#666] bg-stone border-b border-[#e8e8e8] text-center w-[23%]">
                  Other Agency
                </th>
              </tr>
            </thead>
            <motion.tbody variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }}>
              {rows.map((row, i) => (
                <motion.tr key={row.feature} variants={rowIn} className={i % 2 === 0 ? "bg-white" : "bg-stone/40"}>
                  <td className="px-6 py-4 text-sm font-medium text-ink border-b border-[#f0f0f0]">{row.feature}</td>
                  <td className="px-4 py-4 text-center bg-gold/7 border-b border-gold/12">
                    <div className="flex justify-center"><UsCell value={row.us} /></div>
                  </td>
                  <td className="px-4 py-4 text-center border-b border-[#f0f0f0]">
                    <div className="flex justify-center"><Cell value={row.diy} /></div>
                  </td>
                  <td className="px-4 py-4 text-center border-b border-[#f0f0f0]">
                    <div className="flex justify-center"><Cell value={row.agency} /></div>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease }}
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(201,168,76,0.40)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="px-7 py-3.5 bg-gold text-white text-sm font-semibold rounded-lg text-center shadow-[0_4px_14px_rgba(201,168,76,0.3)] cursor-pointer"
          >
            Get a Free Demo
          </motion.a>
          <motion.a
            href="#packages"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="px-7 py-3.5 border border-[#d0d0d0] text-ink text-sm font-semibold hover:border-ink hover:bg-ink hover:text-white transition-all rounded-lg text-center cursor-pointer"
          >
            View Pricing
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
