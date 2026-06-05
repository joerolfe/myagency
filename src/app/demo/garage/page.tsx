"use client";
import GarageNav from "./GarageNav";

// ─── Palette ──────────────────────────────────────────────────────────────────
const RED   = "#dc2626";
const DARK  = "#0a0a0a";
const DARK2 = "#111111";
const GREY  = "#f5f5f5";
const INK   = "#0a0a0a";

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    title: "Full Service & MOT",
    desc: "Comprehensive 60-point vehicle inspection, oil and filter change, all fluid top-ups and a Class 4 or Class 7 MOT. Pass guaranteed or we fix it free.",
    price: "From £129",
    tag: "Most Popular",
  },
  {
    title: "Brake Replacement",
    desc: "Front and rear pad, disc and caliper inspection. OEM-spec or premium aftermarket parts only. Safety checked and road-tested before handover.",
    price: "From £89",
    tag: null,
  },
  {
    title: "Tyres & Wheel Alignment",
    desc: "All major tyre brands in stock. Four-wheel laser alignment with a printout before and after. TPMS reset included.",
    price: "From £49",
    tag: null,
  },
  {
    title: "Engine Diagnostics",
    desc: "Full OBD-II diagnostic scan across all ECUs. Fault codes read, live data analysed, written report provided. No guesswork.",
    price: "From £59",
    tag: null,
  },
  {
    title: "Air Conditioning",
    desc: "Regas, leak detection and system clean. We use genuine refrigerant and certified recovery equipment. UV dye testing included.",
    price: "From £49",
    tag: null,
  },
  {
    title: "Clutch & Gearbox",
    desc: "Clutch kits, flywheel resurfacing, gearbox oil changes and DSG/CVT servicing. All makes and models. Warranty on all parts and labour.",
    price: "From £349",
    tag: null,
  },
];

const reviews = [
  {
    text: "Took my Golf in for a service and MOT — had it back by 2pm, spotless inside, and they'd noticed a cracked CV boot that I'd had no idea about. Sorted same day. Honest, fast, and genuinely good at what they do.",
    name: "James H.",
    location: "Burton-on-Trent",
    initials: "JH",
    car: "VW Golf GTI",
  },
  {
    text: "Best garage I've used in fifteen years of driving. Quoted me £180 less than the main dealer for a full service on my BMW. Same parts, same standard — just without the brand tax. Couldn't recommend highly enough.",
    name: "Sophie R.",
    location: "Swadlincote",
    initials: "SR",
    car: "BMW 3 Series",
  },
  {
    text: "Clutch replacement on my van — they had it done in a day when everywhere else was quoting a week. Clean workshop, kept me updated throughout, and the price matched the quote exactly. Apex are now our company's first call.",
    name: "Mark D.",
    location: "Lichfield",
    initials: "MD",
    car: "Ford Transit",
  },
];

const areas = [
  "Burton-on-Trent", "Swadlincote", "Derby", "Lichfield",
  "Tamworth", "Ashby-de-la-Zouch", "Melbourne", "Repton",
  "Uttoxeter", "Hatton", "Etwall", "Willington",
];

const certs = [
  { name: "MOT Station", sub: "DVSA Authorised" },
  { name: "IMI Approved", sub: "Certified Technicians" },
  { name: "Which?", sub: "Trusted Trader" },
  { name: "Checkatrade", sub: "9.8 / 10" },
  { name: "AA Approved", sub: "Garage Scheme" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GarageDemo() {
  return (
    <div className="font-sans antialiased" style={{ background: DARK, color: "#f5f5f5" }}>

      <GarageNav />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden flex flex-col items-center justify-center">

        {/* Background image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1800&q=90"
            alt="Apex Auto Centre"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          {/* Dark cinematic overlay */}
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.62)" }} />
          {/* Vignette edges */}
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.55) 100%)" }} />
        </div>

        {/* Centred content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">

          {/* Logo mark */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center rounded flex-shrink-0" style={{ background: RED }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9.5L12 3l9 6.5V21H3V9.5z"/>
              </svg>
            </div>
          </div>

          {/* Company name */}
          <h1
            className="font-black tracking-[0.08em] uppercase text-white leading-none mb-2"
            style={{ fontSize: "clamp(36px, 8vw, 96px)" }}
          >
            Apex Auto
          </h1>
          <p
            className="text-[11px] font-semibold tracking-[0.45em] uppercase mb-12"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Servicing &nbsp;&middot;&nbsp; MOT &nbsp;&middot;&nbsp; Diagnostics
          </p>

          {/* CTA */}
          <a
            href="#services"
            className="inline-flex items-center gap-2.5 text-[12px] font-black tracking-[0.15em] uppercase px-8 py-3.5 rounded-sm border-2 transition-all hover:bg-white hover:text-black"
            style={{ borderColor: "rgba(255,255,255,0.6)", color: "white" }}
          >
            View Services
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[9px] font-bold tracking-[0.35em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>Scroll</span>
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
        </div>

      </section>

      {/* ── ACCREDITATIONS ───────────────────────────────────────────── */}
      <section style={{ background: DARK2, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-8 md:px-14 py-5">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
              Accredited &amp; insured
            </p>
            <div className="flex flex-wrap items-center gap-10">
              {certs.map(c => (
                <div key={c.name} className="flex items-center gap-2.5">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={RED} strokeWidth="2" strokeLinecap="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <div>
                    <p className="text-[13px] font-black leading-none text-white">{c.name}</p>
                    <p className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.28)" }}>{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section id="services" className="py-14 md:py-28 px-4 md:px-8 lg:px-14" style={{ background: GREY }}>
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] uppercase mb-4" style={{ color: RED }}>
                What We Do
              </p>
              <h2
                className="font-black leading-[1.0] tracking-[-0.02em]"
                style={{ fontSize: "clamp(34px, 4vw, 52px)", color: INK }}
              >
                Everything your car needs,<br />all under one roof
              </h2>
            </div>
            <p className="text-[14px] leading-relaxed max-w-xs" style={{ color: "#6b7280" }}>
              Fixed-price quotes before any work starts. No surprises on the invoice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#e2e2e2" }}>
            {services.map(s => (
              <div
                key={s.title}
                className="group bg-white p-8 hover:bg-[#0a0a0a] transition-colors duration-300 cursor-pointer relative"
              >
                {s.tag && (
                  <span
                    className="absolute top-6 right-6 text-[10px] font-black px-2.5 py-1 rounded-sm"
                    style={{ background: RED, color: "white" }}
                  >
                    {s.tag}
                  </span>
                )}
                <div className="h-px w-8 mb-7 transition-colors duration-300" style={{ background: RED }} />
                <h3
                  className="font-black text-[17px] tracking-tight mb-3 transition-colors duration-300 group-hover:text-white"
                  style={{ color: INK }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[13px] leading-relaxed mb-6 transition-colors duration-300 group-hover:text-white/50"
                  style={{ color: "#6b7280" }}
                >
                  {s.desc}
                </p>
                <p
                  className="text-[14px] font-black transition-colors duration-300 group-hover:text-[#dc2626]"
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
      <div className="relative h-[420px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1800&q=85"
          alt="Apex Auto workshop"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.72)" }} />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <p className="text-[11px] font-bold tracking-[0.35em] uppercase mb-4" style={{ color: RED }}>Our Promise</p>
            <p
              className="font-black tracking-tight leading-[1.0] text-white"
              style={{ fontSize: "clamp(28px, 4vw, 54px)" }}
            >
              &ldquo;We treat every car as if it were our own. That means no upsells, no unnecessary work, and no cutting corners.&rdquo;
            </p>
            <p className="mt-5 text-[13px] font-semibold" style={{ color: "rgba(255,255,255,0.4)" }}>
              — Dan Whitmore, Head Technician
            </p>
          </div>
        </div>
      </div>

      {/* ── WHY APEX ─────────────────────────────────────────────────── */}
      <section style={{ background: DARK }}>
        <div className="max-w-7xl mx-auto px-8 md:px-14 py-28">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] uppercase mb-5" style={{ color: RED }}>
                Why Apex
              </p>
              <h2
                className="font-black leading-[0.95] tracking-[-0.02em] mb-7 text-white"
                style={{ fontSize: "clamp(36px, 4vw, 54px)" }}
              >
                Specialist quality.<br />
                Independent<br />
                <span style={{ color: "rgba(255,255,255,0.25)" }}>pricing.</span>
              </h2>
              <p className="text-[15px] leading-[1.75] mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
                Main dealer standards without the main dealer bill. Our technicians are
                manufacturer-trained, our equipment is the same as the franchises use,
                and our parts carry the same warranties.
              </p>
              <a
                href="tel:01332500700"
                className="inline-flex items-center gap-2.5 text-[13px] font-black px-7 py-3.5 rounded-sm transition-all hover:opacity-90"
                style={{ background: RED, color: "white" }}
              >
                Book a Service Today
              </a>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              {[
                { title: "Fixed Prices, Always", body: "Every quote is fixed in writing before we start. The price we quote is the price you pay." },
                { title: "Manufacturer-Level Equipment", body: "OBD-II multi-brand diagnostics, four-wheel laser alignment and calibrated torque tooling throughout." },
                { title: "All Makes & Models", body: "European, Japanese, Korean, American — if it has four wheels, our technicians have the training and parts access." },
                { title: "12-Month Parts & Labour Warranty", body: "All parts and labour are covered for 12 months or 12,000 miles, whichever comes first." },
              ].map(w => (
                <div
                  key={w.title}
                  className="flex items-start gap-5 py-7"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: RED }} />
                  <div>
                    <h3 className="font-black text-[15px] mb-1.5 text-white">{w.title}</h3>
                    <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>{w.body}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────────── */}
      <section id="our-work" className="py-14 md:py-28 px-4 md:px-8 lg:px-14" style={{ background: GREY }}>
        <div className="max-w-7xl mx-auto">

          <div className="mb-12">
            <p className="text-[10px] font-bold tracking-[0.35em] uppercase mb-4" style={{ color: RED }}>Our Work</p>
            <h2
              className="font-black leading-[1.0] tracking-[-0.02em]"
              style={{ fontSize: "clamp(32px, 4vw, 50px)", color: INK }}
            >
              Recent jobs
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "1492144534655-ae79c964c9d7", label: "BMW 5 Series — Full Service", h: "h-[280px]" },
              { src: "1503376780353-7e6692767b70", label: "Porsche — MOT & Alignment", h: "h-[280px]" },
              { src: "1486262715619-67b85e0b08d3", label: "Ford Focus — Clutch Replacement", h: "h-[280px]" },
              { src: "1558618666-fcd25c85cd64", label: "VW Golf — Engine Diagnostics", h: "h-[200px]" },
              { src: "1492144534655-ae79c964c9d7", label: "Audi A4 — Brake Overhaul", h: "h-[200px]" },
              { src: "1504307651254-35680f356dfd", label: "Mercedes — Air Con Regas", h: "h-[200px]" },
            ].map(img => (
              <div key={img.label} className={`rounded-xl overflow-hidden relative group cursor-pointer ${img.h}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://images.unsplash.com/photo-${img.src}?auto=format&fit=crop&w=600&q=80`}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
                  style={{ background: "linear-gradient(to top, rgba(10,10,10,0.85), transparent)" }}
                >
                  <p className="text-[12px] font-bold text-white">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────── */}
      <section className="py-14 md:py-28 px-4 md:px-8 lg:px-14" style={{ background: DARK2 }}>
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] uppercase mb-4" style={{ color: RED }}>Reviews</p>
              <h2
                className="font-black leading-[1.0] tracking-[-0.02em] text-white"
                style={{ fontSize: "clamp(32px, 4vw, 50px)" }}
              >
                What drivers say
              </h2>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[40px] font-black text-white">4.9</span>
              <div className="pb-1">
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={RED}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>490+ Checkatrade reviews</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {reviews.map(r => (
              <div
                key={r.name}
                className="flex flex-col rounded-xl p-8"
                style={{ background: DARK, border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <p
                  className="font-black leading-none mb-5 select-none"
                  style={{ fontSize: "72px", color: RED, fontFamily: "Georgia, serif", lineHeight: 0.75 }}
                >
                  &ldquo;
                </p>
                <p className="text-[14px] leading-[1.8] flex-1 mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {r.text}
                </p>
                <div
                  className="flex items-center gap-3.5 pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-black text-white flex-shrink-0"
                    style={{ background: RED }}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-white">{r.name}</p>
                    <p className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.28)" }}>
                      {r.location} &nbsp;&middot;&nbsp; <span style={{ color: "rgba(255,255,255,0.4)" }}>{r.car}</span>
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill={RED}>
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
      <section className="py-14 md:py-28 px-4 md:px-8 lg:px-14" style={{ background: GREY }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] font-bold tracking-[0.35em] uppercase mb-4" style={{ color: RED }}>How It Works</p>
            <h2
              className="font-black leading-[1.0] tracking-[-0.02em]"
              style={{ fontSize: "clamp(32px, 4vw, 50px)", color: INK }}
            >
              Book, drop off, drive away
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-px" style={{ background: "#e2e2e2" }}>
            {[
              { n: "01", title: "Book Online or Call", body: "Same-day and next-day slots usually available. Tell us the make, model and what's needed — we'll confirm the price up front." },
              { n: "02", title: "Drop Off Your Car", body: "Free courtesy car or local drop-off available. We'll call you with a full update before any additional work is started." },
              { n: "03", title: "Expert Work Done", body: "Manufacturer-trained technicians, OEM-spec parts, and a quality check before the keys go anywhere near you." },
              { n: "04", title: "Collect & Drive", body: "Pay the agreed price, collect your car, and leave with a 12-month parts and labour warranty in writing." },
            ].map(step => (
              <div key={step.n} className="bg-white px-8 py-10">
                <p className="font-black leading-none mb-6" style={{ fontSize: "52px", color: "rgba(10,10,10,0.06)" }}>
                  {step.n}
                </p>
                <div className="w-6 h-px mb-5" style={{ background: RED }} />
                <h3 className="font-black text-[16px] mb-3 tracking-tight" style={{ color: INK }}>{step.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#6b7280" }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS ────────────────────────────────────────────────────── */}
      <section style={{ background: DARK, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto px-8 md:px-14 py-14">
          <div className="flex flex-col md:flex-row md:items-center gap-10">
            <div className="md:w-72 flex-shrink-0">
              <p className="text-[10px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: RED }}>Coverage</p>
              <h3 className="font-black text-[20px] tracking-tight mb-2 text-white">Areas we serve</h3>
              <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
                Collecting and delivering across South Derbyshire and North Staffordshire.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {areas.map(a => (
                <span
                  key={a}
                  className="text-[12px] font-medium px-4 py-2 rounded-sm"
                  style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 60%" }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.9)" }} />
          <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: RED }} />
        </div>

        <div className="relative max-w-3xl mx-auto px-8 md:px-14 py-32 text-center">
          <p className="text-[10px] font-bold tracking-[0.35em] uppercase mb-5" style={{ color: RED }}>
            Book Today
          </p>
          <h2
            className="font-black leading-[0.95] tracking-[-0.025em] mb-7 text-white"
            style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
          >
            Your car deserves<br />
            <span style={{ color: RED }}>better care.</span>
          </h2>
          <p className="text-[15px] leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.38)" }}>
            Call us or book online. Same-day slots available, fixed prices, no surprises.
            We'll have you back on the road as fast as possible.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:01332500700"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-[13px] font-black px-9 py-4 rounded-sm transition-all hover:opacity-90"
              style={{ background: RED, color: "white" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.71 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.71A2 2 0 0 1 22 16.92z"/>
              </svg>
              01332 500 700
            </a>
            <a
              href="mailto:book@apexauto.co.uk"
              className="w-full sm:w-auto inline-flex items-center justify-center text-[13px] font-semibold px-9 py-4 rounded-sm border transition-all"
              style={{ borderColor: "rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.55)" }}
            >
              Book Online
            </a>
          </div>
          <p className="text-[11px] mt-10" style={{ color: "rgba(255,255,255,0.18)" }}>
            Mon–Fri 8am–6pm &nbsp;&middot;&nbsp; Sat 8am–4pm &nbsp;&middot;&nbsp; Courtesy cars available
          </p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer style={{ background: "#060606", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-7xl mx-auto px-8 md:px-14 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-6 h-6 flex items-center justify-center rounded-sm flex-shrink-0" style={{ background: RED }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 10.5h.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h.5"/>
                    <path d="M8 10.5V7a4 4 0 1 1 8 0v3.5"/>
                  </svg>
                </div>
                <span className="font-black text-[14px] tracking-tight text-white">
                  Apex <span style={{ color: RED }}>Auto</span> Centre
                </span>
              </div>
              <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
                South Derbyshire&apos;s trusted garage since 2009 &nbsp;&middot;&nbsp; Reg. No. 06847291
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              {["Services", "Our Work", "Coverage", "Privacy Policy"].map(l => (
                <a key={l} href="#" className="text-[11px] font-semibold" style={{ color: "rgba(255,255,255,0.25)" }}>
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div
            className="mt-8 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
          >
            <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.14)" }}>
              © 2025 Apex Auto Centre Ltd. All rights reserved.
            </p>
            <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.1)" }}>
              DVSA Authorised &nbsp;&middot;&nbsp; IMI Approved &nbsp;&middot;&nbsp; AA Garage Scheme
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
