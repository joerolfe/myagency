"use client";
import RoofingNav from "./RoofingNav";

// ─── Palette ──────────────────────────────────────────────────────────────────
const GREEN  = "#0c2218";   // deep forest green
const GREEN2 = "#112d20";   // slightly lighter for alternate panels
const STONE  = "#c9a870";   // warm stone/amber — the single accent
const CREAM  = "#faf8f4";   // warm off-white for light sections
const INK    = "#111009";   // near-black for body text on light

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    title: "New Roof Installation",
    desc: "Complete re-roof in natural slate, clay or concrete tile, and modern interlocking systems. Every installation includes a written 25-year workmanship guarantee.",
    price: "From £4,500",
  },
  {
    title: "Roof Repairs",
    desc: "Cracked tiles, failed mortar, lifted flashings — we locate the fault, repair it right first time, and document the work with photos you can keep.",
    price: "From £150",
  },
  {
    title: "Flat Roof Systems",
    desc: "GRP fibreglass and EPDM rubber systems for extensions, garages and commercial flat roofs. 20-year product warranties as standard.",
    price: "From £2,200",
  },
  {
    title: "Chimney & Leadwork",
    desc: "Repointing, stack rebuilding, new lead flashing and chimney cap installation. HETAS-registered chimney lining for log burner and solid fuel appliances.",
    price: "From £350",
  },
  {
    title: "Guttering & Fascias",
    desc: "Full guttering systems in aluminium, uPVC and cast iron. Fascia, soffit and bargeboard replacement in a full range of colours and finishes.",
    price: "From £450",
  },
  {
    title: "Drone Surveys & Reports",
    desc: "4K drone inspection with written condition report and photographic evidence pack. Invaluable for home purchases, insurance claims and scheduled maintenance.",
    price: "From £95",
  },
];

const reviews = [
  {
    text: "We had a full re-roof in Welsh slate — a major job on a Victorian property. From the first survey to the final tidy-up, Hallmark were exceptional. The roof is beautiful, the team were meticulous, and the guarantee gives us complete peace of mind.",
    name: "Richard & Claire B.",
    location: "Repton, South Derbyshire",
    initials: "RB",
  },
  {
    text: "Storm damage on a Sunday evening — tiles off, leak coming through. One call and they had someone on our roof by 9am Monday. Repaired, made watertight, photos taken for the insurance claim. Could not fault them.",
    name: "Anita P.",
    location: "Swadlincote",
    initials: "AP",
  },
  {
    text: "Hallmark replaced our garage flat roof and while they were there surveyed the main house. They spotted two cracked ridge tiles we had no idea about and fixed them on the spot. That's the kind of service you remember.",
    name: "Dave M.",
    location: "Melbourne, South Derbyshire",
    initials: "DM",
  },
];

const areas = [
  "Burton-on-Trent", "Swadlincote", "Melbourne", "Repton",
  "Ashby-de-la-Zouch", "Uttoxeter", "Lichfield", "Tamworth",
  "Derby", "Hatton", "Etwall", "Willington",
];

const certs = [
  { name: "NFRC", sub: "Approved Contractor" },
  { name: "TrustMark", sub: "Govt. Endorsed Quality" },
  { name: "Checkatrade", sub: "9.9 / 10" },
  { name: "Which?", sub: "Trusted Trader" },
  { name: "CSCS", sub: "Gold Card" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RoofingDemo() {
  return (
    <div className="font-sans antialiased" style={{ background: GREEN, color: CREAM }}>

      <RoofingNav />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">

        {/* Left — text */}
        <div
          className="relative z-10 flex flex-col justify-between lg:w-[46%] px-5 md:px-10 lg:px-16 xl:px-20"
          style={{ paddingTop: "5rem", paddingBottom: "3rem" }}
        >
          {/* Top eyebrow */}
          <div>
            <p
              className="text-[10px] font-bold tracking-[0.35em] uppercase mb-8 lg:mb-16"
              style={{ color: STONE }}
            >
              Free &nbsp;&middot;&nbsp; No Obligation &nbsp;&middot;&nbsp; Quote Within Minutes
            </p>

            <h1
              className="font-black leading-[0.9] tracking-[-0.025em] mb-8"
              style={{ fontSize: "clamp(36px, 6vw, 88px)", color: CREAM }}
            >
              Get your free<br />
              <em className="not-italic" style={{ color: STONE }}>roofing survey</em><br />
              today
            </h1>

            <p
              className="text-[16px] leading-[1.7] mb-10"
              style={{ color: "rgba(250,248,244,0.45)", maxWidth: "340px" }}
            >
              No obligation, no hard sell. A certified surveyor will assess your roof and give you
              a fixed-price quote within minutes — completely free.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="tel:01332964700"
                className="inline-flex items-center gap-2.5 text-[13px] font-black px-7 py-3.5 rounded transition-all hover:opacity-90"
                style={{ background: STONE, color: GREEN }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.71 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.71A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call 01332 964 700
              </a>
              <a
                href="mailto:info@hallmarkroofing.co.uk"
                className="inline-flex items-center gap-2 text-[13px] font-semibold px-7 py-3.5 rounded border transition-all"
                style={{ borderColor: "rgba(201,168,112,0.3)", color: "rgba(250,248,244,0.6)" }}
              >
                Send an Enquiry
              </a>
            </div>
          </div>

          {/* Bottom stats row */}
          <div
            className="grid grid-cols-3 gap-0 mt-14"
            style={{ borderTop: "1px solid rgba(201,168,112,0.2)" }}
          >
            {[
              { v: "1,400+", l: "Roofs completed" },
              { v: "25 yr", l: "Guarantee" },
              { v: "4.9 ★", l: "Checkatrade" },
            ].map((s, i) => (
              <div
                key={s.v}
                className="py-5"
                style={{
                  paddingRight: "1rem",
                  paddingLeft: i === 0 ? 0 : "1rem",
                  borderRight: i < 2 ? "1px solid rgba(201,168,112,0.15)" : "none",
                }}
              >
                <p className="font-black text-[22px] leading-none mb-1" style={{ color: CREAM }}>{s.v}</p>
                <p className="text-[11px]" style={{ color: "rgba(250,248,244,0.35)" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — framed image */}
        <div className="lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[56%] flex items-stretch p-4 lg:p-6 lg:pl-0">
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ minHeight: "55vw", maxHeight: "100vh" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=90"
              alt="Premium home roofed by Hallmark"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle gradient edges */}
            <div
              className="absolute inset-0"
              style={{
                background: [
                  "linear-gradient(to right, rgba(12,34,24,0.55) 0%, transparent 35%)",
                  "linear-gradient(to top, rgba(12,34,24,0.45) 0%, transparent 45%)",
                ].join(", "),
              }}
            />
            {/* Guarantee badge — bottom left */}
            <div
              className="absolute bottom-7 left-7 px-5 py-4 rounded-xl"
              style={{
                background: "rgba(12,34,24,0.8)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(201,168,112,0.2)",
              }}
            >
              <p className="font-black text-[32px] leading-none" style={{ color: CREAM }}>25</p>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase mt-1" style={{ color: STONE }}>Year Guarantee</p>
            </div>
            {/* Stone accent corner */}
            <div
              className="absolute top-7 right-7 w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: STONE }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" fill={GREEN}/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCREDITATIONS ───────────────────────────────────────────── */}
      <section style={{ background: GREEN2, borderTop: "1px solid rgba(201,168,112,0.1)", borderBottom: "1px solid rgba(201,168,112,0.1)" }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-5">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: "rgba(250,248,244,0.25)" }}>
              Fully accredited &amp; insured
            </p>
            <div className="flex flex-wrap items-center gap-10">
              {certs.map(c => (
                <div key={c.name} className="flex items-center gap-2.5">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={STONE} strokeWidth="2" strokeLinecap="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <div>
                    <p className="text-[13px] font-black leading-none" style={{ color: CREAM }}>{c.name}</p>
                    <p className="text-[10px] mt-0.5" style={{ color: "rgba(250,248,244,0.28)" }}>{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section id="services" className="py-14 md:py-28 px-4 md:px-8 lg:px-16" style={{ background: CREAM }}>
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] uppercase mb-4" style={{ color: STONE }}>
                What We Do
              </p>
              <h2
                className="font-black leading-[1.0] tracking-[-0.02em]"
                style={{ fontSize: "clamp(36px,4vw,54px)", color: INK }}
              >
                Every roofing service,<br />one trusted team
              </h2>
            </div>
            <p className="text-[14px] leading-relaxed max-w-xs" style={{ color: "#6b7280" }}>
              Free quotes within minutes. Fixed price before any work starts.
              Fully insured on every job.
            </p>
          </div>

          {/* 3-col editorial grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#e5dfd5" }}>
            {services.map(s => (
              <div
                key={s.title}
                className="group bg-white p-8 hover:bg-[#0c2218] transition-colors duration-300 cursor-pointer"
              >
                <div className="h-px w-8 mb-7 transition-colors duration-300" style={{ background: STONE }} />
                <h3
                  className="font-black text-[17px] tracking-tight mb-3 transition-colors duration-300 group-hover:text-white"
                  style={{ color: INK }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[13px] leading-relaxed mb-6 transition-colors duration-300 group-hover:text-white/55"
                  style={{ color: "#6b7280" }}
                >
                  {s.desc}
                </p>
                <p
                  className="text-[14px] font-black transition-colors duration-300 group-hover:text-[#c9a870]"
                  style={{ color: INK }}
                >
                  {s.price}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FULL-WIDTH IMAGE BREAK ────────────────────────────────────── */}
      <div className="relative h-[480px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=85"
          alt="Premium roof tiles"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 60%" }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(12,34,24,0.65)" }}
        >
          <div className="text-center px-6">
            <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-4" style={{ color: STONE }}>Our Standard</p>
            <p
              className="font-black tracking-tight leading-[1.0] text-white max-w-3xl"
              style={{ fontSize: "clamp(32px, 4.5vw, 60px)" }}
            >
              &ldquo;Every roof we touch is treated as if it were our own home.&rdquo;
            </p>
            <p className="mt-5 text-[13px] font-semibold" style={{ color: "rgba(255,255,255,0.45)" }}>
              — Tom Hallmark, Founder
            </p>
          </div>
        </div>
      </div>

      {/* ── WHY HALLMARK ─────────────────────────────────────────────── */}
      <section style={{ background: GREEN }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] uppercase mb-5" style={{ color: STONE }}>
                Why Hallmark
              </p>
              <h2
                className="font-black leading-[0.95] tracking-[-0.02em] mb-7"
                style={{ fontSize: "clamp(38px, 4vw, 58px)", color: CREAM }}
              >
                The standard<br />others are<br />measured against
              </h2>
              <p className="text-[15px] leading-[1.75] mb-10" style={{ color: "rgba(250,248,244,0.45)" }}>
                In twenty years we&apos;ve built our reputation on one principle: never cut a corner.
                Every member of our team is directly employed, fully certified, and held to
                the same standard — on every single job.
              </p>
              <a
                href="tel:01332964700"
                className="inline-flex items-center gap-2.5 text-[13px] font-black px-7 py-3.5 rounded transition-all hover:opacity-90"
                style={{ background: STONE, color: GREEN }}
              >
                Book a Free Survey
              </a>
            </div>

            <div className="space-y-0" style={{ borderTop: "1px solid rgba(201,168,112,0.12)" }}>
              {[
                {
                  title: "25-Year Written Guarantee",
                  body: "A signed workmanship warranty on every new installation — fully transferable to the next owner if you sell.",
                },
                {
                  title: "Emergency Same-Day Response",
                  body: "Storm damage and active leaks: we respond the same day, seven days a week. No premium call-out charge.",
                },
                {
                  title: "Fixed Prices, Always",
                  body: "Your written quote is the price on the invoice. We have never added a charge after the fact.",
                },
                {
                  title: "£5m Public Liability Cover",
                  body: "NFRC approved, TrustMark registered, CSCS Gold Card team throughout. Fully insured on every job.",
                },
              ].map(w => (
                <div
                  key={w.title}
                  className="flex items-start gap-5 py-7"
                  style={{ borderBottom: "1px solid rgba(201,168,112,0.12)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: STONE }} />
                  <div>
                    <h3 className="font-black text-[15px] mb-1.5" style={{ color: CREAM }}>{w.title}</h3>
                    <p className="text-[13px] leading-relaxed" style={{ color: "rgba(250,248,244,0.4)" }}>{w.body}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── OUR WORK / GALLERY ───────────────────────────────────────── */}
      <section id="our-work" className="py-14 md:py-28 px-4 md:px-8 lg:px-16" style={{ background: CREAM }}>
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] uppercase mb-4" style={{ color: STONE }}>
                Our Work
              </p>
              <h2
                className="font-black leading-[1.0] tracking-[-0.02em]"
                style={{ fontSize: "clamp(34px, 4vw, 52px)", color: INK }}
              >
                Recent projects
              </h2>
            </div>
          </div>

          {/* Large image top */}
          <div className="rounded-2xl overflow-hidden mb-4 relative group h-[420px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=85"
              alt="Victorian semi re-roof — Melbourne"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(12,34,24,0.7) 0%, transparent 50%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 px-8 py-6">
              <p className="text-[13px] font-bold text-white">Victorian Semi — Full Re-Roof in Natural Slate · Melbourne</p>
              <p className="text-[11px] mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>Completed March 2025</p>
            </div>
          </div>

          {/* 3-col below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "1558618666-fcd25c85cd64", alt: "Clay tile detailing — Repton" },
              { src: "1504307651254-35680f356dfd", alt: "Team at work — Swadlincote" },
              { src: "1560518883-ce09059eeffa", alt: "Detached house — Burton-on-Trent" },
            ].map(img => (
              <div key={img.src} className="rounded-2xl overflow-hidden relative group h-[220px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://images.unsplash.com/photo-${img.src}?auto=format&fit=crop&w=600&q=80`}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
                  style={{ background: "linear-gradient(to top, rgba(12,34,24,0.75), transparent)" }}
                >
                  <p className="text-[12px] font-semibold text-white">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────── */}
      <section className="py-14 md:py-28 px-4 md:px-8 lg:px-16" style={{ background: GREEN2 }}>
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] uppercase mb-4" style={{ color: STONE }}>
                Reviews
              </p>
              <h2
                className="font-black leading-[1.0] tracking-[-0.02em]"
                style={{ fontSize: "clamp(34px, 4vw, 52px)", color: CREAM }}
              >
                What our customers say
              </h2>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[42px] font-black" style={{ color: CREAM }}>4.9</span>
              <div className="pb-1">
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={STONE}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[11px]" style={{ color: "rgba(250,248,244,0.3)" }}>380+ Checkatrade reviews</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map(r => (
              <div
                key={r.name}
                className="flex flex-col rounded-2xl p-8"
                style={{ background: GREEN, border: "1px solid rgba(201,168,112,0.1)" }}
              >
                <p
                  className="font-black leading-none mb-5 select-none"
                  style={{ fontSize: "80px", color: STONE, fontFamily: "Georgia, serif", lineHeight: 0.75 }}
                >
                  &ldquo;
                </p>
                <p className="text-[14px] leading-[1.8] flex-1 mb-8" style={{ color: "rgba(250,248,244,0.55)" }}>
                  {r.text}
                </p>
                <div
                  className="flex items-center gap-3.5 pt-6"
                  style={{ borderTop: "1px solid rgba(201,168,112,0.1)" }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-black flex-shrink-0"
                    style={{ background: STONE, color: GREEN }}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-[13px] font-bold" style={{ color: CREAM }}>{r.name}</p>
                    <p className="text-[11px] mt-0.5" style={{ color: "rgba(250,248,244,0.3)" }}>{r.location}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill={STONE}>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section className="py-14 md:py-28 px-4 md:px-8 lg:px-16" style={{ background: CREAM }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] font-bold tracking-[0.35em] uppercase mb-4" style={{ color: STONE }}>
              How It Works
            </p>
            <h2
              className="font-black leading-[1.0] tracking-[-0.02em]"
              style={{ fontSize: "clamp(34px, 4vw, 52px)", color: INK }}
            >
              From first call<br />to signed guarantee
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-px" style={{ background: "#e5dfd5" }}>
            {[
              { n: "01", title: "Free Survey", body: "We visit, assess the roof in full, and produce a written fixed-price quote — usually within minutes of leaving your property." },
              { n: "02", title: "Scaffolding", body: "Our own scaffolding team erects a fully compliant access system. Your property is fully sheeted before work begins." },
              { n: "03", title: "Installation", body: "Directly employed, CSCS-certified roofers carry out the work. Site is cleaned and swept at the end of every day." },
              { n: "04", title: "Guarantee", body: "We walk the finished job with you, issue your 25-year guarantee certificate, and remove all scaffold and waste." },
            ].map(step => (
              <div key={step.n} className="bg-white px-8 py-10">
                <p
                  className="font-black leading-none mb-6"
                  style={{ fontSize: "52px", color: "rgba(12,34,24,0.07)" }}
                >
                  {step.n}
                </p>
                <div className="w-6 h-px mb-5" style={{ background: STONE }} />
                <h3 className="font-black text-[16px] mb-3 tracking-tight" style={{ color: INK }}>{step.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#6b7280" }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS ────────────────────────────────────────────────────── */}
      <section style={{ background: GREEN, borderTop: "1px solid rgba(201,168,112,0.08)" }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-14">
          <div className="flex flex-col md:flex-row md:items-center gap-10">
            <div className="md:w-72 flex-shrink-0">
              <p className="text-[10px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: STONE }}>Coverage</p>
              <h3 className="font-black text-[22px] tracking-tight mb-2" style={{ color: CREAM }}>Areas we serve</h3>
              <p className="text-[13px] leading-relaxed" style={{ color: "rgba(250,248,244,0.35)" }}>
                All of South Derbyshire, Burton-on-Trent, Swadlincote and the surrounding villages.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {areas.map(a => (
                <span
                  key={a}
                  className="text-[12px] font-medium px-4 py-2 rounded"
                  style={{
                    background: "rgba(250,248,244,0.05)",
                    color: "rgba(250,248,244,0.5)",
                    border: "1px solid rgba(250,248,244,0.08)",
                  }}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer style={{ background: "#070f0a", borderTop: "1px solid rgba(201,168,112,0.08)" }}>
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex flex-col mb-2">
                <span className="font-black tracking-[0.12em] uppercase text-[14px]" style={{ color: CREAM }}>
                  Hallmark
                </span>
                <span className="font-medium tracking-[0.25em] uppercase text-[8px] mt-0.5" style={{ color: STONE }}>
                  Roofing &amp; Restoration
                </span>
              </div>
              <p className="text-[11px]" style={{ color: "rgba(250,248,244,0.22)" }}>
                South Derbyshire&apos;s trusted roofers since 2004 &nbsp;&middot;&nbsp; Reg. No. 04712563
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              {["Services", "Our Work", "Areas", "Privacy Policy"].map(l => (
                <a key={l} href="#" className="text-[11px] font-semibold" style={{ color: "rgba(250,248,244,0.28)" }}>
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div
            className="mt-8 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2"
            style={{ borderTop: "1px solid rgba(250,248,244,0.05)" }}
          >
            <p className="text-[11px]" style={{ color: "rgba(250,248,244,0.16)" }}>
              © 2025 Hallmark Roofing &amp; Restoration Ltd. All rights reserved.
            </p>
            <p className="text-[11px]" style={{ color: "rgba(250,248,244,0.1)" }}>
              NFRC Approved &nbsp;&middot;&nbsp; TrustMark Registered &nbsp;&middot;&nbsp; £5m Public Liability
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
