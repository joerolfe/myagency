import Image from "next/image";
import Link from "next/link";
import PlumbingNav from "./PlumbingNav";

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    title: "Emergency Call-Out",
    desc: "Burst pipes, severe leaks, loss of water pressure — we're on call 24 hours a day, 365 days a year. Average arrival time under 90 minutes.",
    price: "From £85",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
  {
    title: "Boiler Repair & Servicing",
    desc: "Gas Safe registered engineers covering all major brands — Vaillant, Worcester Bosch, Baxi, Ideal and more. Annual service certificates issued on the day.",
    price: "From £75",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    title: "Bathroom Installation",
    desc: "Full bathroom design and fit — from a simple suite swap to a complete renovation. We handle plumbing, tiling, electrics and plastering.",
    price: "From £1,800",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z"/>
        <path d="M6 12V5a2 2 0 0 1 2-2h3v2.25"/>
      </svg>
    ),
  },
  {
    title: "Central Heating",
    desc: "New system design and installation, power flushing, radiator upgrades and smart thermostat fitting. Helping homes stay warm and energy bills stay low.",
    price: "From £2,500",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4M8 18v4M12 2v2M12 20v2M16 2v4M16 18v4M2 8h4M18 8h4M2 12h2M20 12h2M2 16h4M18 16h4"/>
      </svg>
    ),
  },
  {
    title: "Leak Detection & Repair",
    desc: "Specialist acoustic and thermal imaging equipment to locate hidden leaks without unnecessary damage to your property — fixed right first time.",
    price: "From £65",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
      </svg>
    ),
  },
  {
    title: "Gas Safety Certificates",
    desc: "Landlord gas safety checks (CP12), annual boiler services and gas appliance inspections. Certificates issued same day, paperwork handled for you.",
    price: "From £45",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
];

const reviews = [
  {
    name: "James T.",
    location: "Burton-on-Trent",
    date: "3 weeks ago",
    rating: 5,
    text: "Called Cartwright at 9pm on a Sunday after a pipe burst under the kitchen sink. The engineer arrived within the hour, sorted the problem completely and even swept up before he left. Genuinely cannot fault them. Will never use anyone else.",
    initials: "JT",
  },
  {
    name: "Sarah & Mark M.",
    location: "Swadlincote",
    date: "6 weeks ago",
    rating: 5,
    text: "Had our whole bathroom gutted and refitted — new walk-in shower, freestanding bath, the lot. The team were here every day for two weeks, always on time, always tidy. The result is absolutely stunning. Several of our friends have already asked for the number.",
    initials: "SM",
  },
  {
    name: "David H.",
    location: "Lichfield",
    date: "2 months ago",
    rating: 5,
    text: "Boiler packed in right before Christmas — not ideal. Called Cartwright first thing and they had an engineer out by midday. Fixed same day, reasonably priced and the guy explained exactly what had gone wrong. Fantastic service, highly recommend.",
    initials: "DH",
  },
];

const areas = [
  "Burton-on-Trent", "Swadlincote", "Lichfield", "Tamworth",
  "Derby", "Uttoxeter", "Rugeley", "Cannock", "Ashby-de-la-Zouch", "Melbourne",
];

const galleryImages = [
  { id: "1552321554-5fefe8c9ef14", alt: "Modern bathroom renovation with freestanding bath" },
  { id: "1584622650111-993a426fbf0a", alt: "Contemporary en-suite shower room" },
  { id: "1507089947405-5f429f91c2ab", alt: "Luxury bathroom with marble tiling" },
  { id: "1556909114-f6e7ad7d3136", alt: "Modern kitchen with new plumbing" },
  { id: "1564540574859-0dfb63985953", alt: "Walk-in shower installation" },
  { id: "1576641984804-d1bcf3a8e71e", alt: "Family bathroom suite installation" },
];

// ─── Components ───────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < rating ? "#f59e0b" : "#e5e7eb"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PlumbingDemo() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">

      {/* Transparent nav — turns solid on scroll */}
      <PlumbingNav />

      {/* Hero — full viewport, centered editorial layout */}
      <section className="relative h-screen overflow-hidden flex flex-col">

        {/* Background photo — plain img tag, no Next.js config needed */}
        <div className="absolute inset-0 bg-[#0a1520]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1920&q=85"
            alt="Plumber at work"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/58" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/25" />
        </div>

        {/* Content — pt-24 clears the fixed nav, flex-1 fills remaining height */}
        <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 pt-24">
          <div className="max-w-4xl mx-auto w-full flex flex-col items-center">

            {/* Pill badge */}
            <div className="inline-flex items-center gap-2.5 border border-white/25 rounded-full px-5 py-1.5 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-white/75 tracking-[0.2em] uppercase">
                Gas Safe Registered &middot; Emergency 24 / 7
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-7">
              Plumbing done right,<br />
              <span className="font-display font-bold italic" style={{ color: "#93c5fd" }}>
                every single time.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed mb-10">
              24/7 emergency call-outs, boiler repairs and full bathroom installations.
              Serving Staffordshire & Derbyshire since 2003 — no call-out charge, ever.
            </p>

            {/* CTAs */}
            <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
              <a
                href="tel:01283477200"
                className="inline-flex items-center gap-2.5 border border-white text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-[#0c2340] transition-all duration-300"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.71 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.71A2 2 0 0 1 22 16.92z"/></svg>
                Call 01283 477 200
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                View Services
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

            {/* Scroll indicator — inline, directly below buttons */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold tracking-[0.25em] text-white/35 uppercase">Scroll</span>
              <div className="w-px h-10 bg-gradient-to-b from-white/35 to-transparent" />
            </div>

          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-[#f8f9fb] border-y border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Fully accredited &amp; insured</p>
            <div className="flex flex-wrap items-center gap-8">
              {[
                { name: "Gas Safe", sub: "Reg. No. 521847" },
                { name: "Which?", sub: "Trusted Trader" },
                { name: "Checkatrade", sub: "Score: 9.8/10" },
                { name: "TrustMark", sub: "Government Endorsed" },
                { name: "CIPHE", sub: "Chartered Member" },
              ].map(a => (
                <div key={a.name} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0c2340] flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-black text-gray-900 leading-none">{a.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{a.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-sm font-bold tracking-widest uppercase text-[#0c2340] mb-3">What We Do</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight max-w-xl">
                Everything plumbing &amp; heating, under one roof
              </h2>
              <p className="text-gray-500 max-w-xs text-base leading-relaxed">
                Fixed-price quotes before any work begins. No hidden charges. No surprises.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="group bg-[#f8f9fb] hover:bg-[#0c2340] rounded-2xl p-7 transition-colors duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#0c2340] group-hover:bg-white/10 text-white flex items-center justify-center mb-5 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-black text-gray-900 group-hover:text-white mb-2 transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-500 group-hover:text-white/60 leading-relaxed mb-4 transition-colors">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-base font-black text-[#0c2340] group-hover:text-[#93c5fd] transition-colors">{s.price}</span>
                  <svg className="text-gray-300 group-hover:text-white/40 transition-colors" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-14 md:py-24 px-4 md:px-6 bg-[#0c2340]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold tracking-widest uppercase text-[#93c5fd] mb-4">Why Cartwright</p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                We treat your home like our own
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Since 2003, we&apos;ve built our reputation one job at a time — arriving when we say we will,
                quoting honestly, and leaving every job spotless. That&apos;s why over 70% of our new customers
                come from personal recommendations.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { stat: "2,400+", label: "Completed jobs" },
                  { stat: "4.9★", label: "Google rating" },
                  { stat: "< 90m", label: "Emergency response" },
                  { stat: "20yrs", label: "In business" },
                ].map(s => (
                  <div key={s.label} className="border-l-2 border-[#93c5fd]/30 pl-4">
                    <p className="text-3xl font-black text-white leading-none">{s.stat}</p>
                    <p className="text-sm text-white/40 font-medium mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-[#0c2340] font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Get a Free Quote
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

            <div className="relative">
              <div className="relative h-[560px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=85"
                  alt="Cartwright Plumbing engineer at work"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating guarantee badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 w-52">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <p className="text-sm font-black text-gray-900 leading-tight">12-Month Guarantee</p>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">All parts and labour covered. If anything goes wrong, we fix it free of charge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="work" className="py-14 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-sm font-bold tracking-widest uppercase text-[#0c2340] mb-3">Our Work</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">Recent projects</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={img.id}
                className={`relative rounded-2xl overflow-hidden ${i === 0 ? "md:row-span-2" : ""}`}
                style={{ height: i === 0 ? undefined : "240px", aspectRatio: i === 0 ? "auto" : undefined }}
              >
                {i === 0 && <div className="h-full min-h-[500px]" />}
                <Image
                  src={`https://images.unsplash.com/photo-${img.id}?auto=format&fit=crop&w=800&q=80`}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-14 md:py-24 px-4 md:px-6 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-sm font-bold tracking-widest uppercase text-[#0c2340] mb-3">Reviews</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">What our customers say</h2>
            </div>
            <div className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-sm border border-gray-100">
              <div className="text-center">
                <p className="text-4xl font-black text-gray-900 leading-none">4.9</p>
                <StarRating rating={5} />
                <p className="text-xs text-gray-400 mt-1.5">312 Google Reviews</p>
              </div>
              <div className="w-px h-14 bg-gray-100" />
              <div className="space-y-1.5">
                {[5, 4, 3].map(star => (
                  <div key={star} className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 w-4">{star}★</span>
                    <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#f59e0b] rounded-full"
                        style={{ width: star === 5 ? "92%" : star === 4 ? "6%" : "2%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map(r => (
              <div key={r.name} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0c2340] flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-black text-white">{r.initials}</span>
                    </div>
                    <div>
                      <p className="text-sm font-black text-gray-900 leading-none">{r.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{r.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    <span className="text-xs font-semibold text-gray-500">Google</span>
                  </div>
                </div>
                <StarRating rating={r.rating} />
                <p className="text-sm text-gray-600 leading-relaxed mt-4">&ldquo;{r.text}&rdquo;</p>
                <p className="text-xs text-gray-400 mt-4">{r.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-shrink-0">
            <p className="text-sm font-bold tracking-widest uppercase text-[#0c2340] mb-2">Coverage Area</p>
            <p className="text-2xl font-black text-gray-900">We cover all of</p>
            <p className="text-2xl font-black text-gray-900">Staffordshire &amp; Derbyshire</p>
          </div>
          <div className="w-px h-16 bg-gray-100 hidden md:block flex-shrink-0" />
          <div className="flex flex-wrap gap-2.5">
            {areas.map(a => (
              <span key={a} className="bg-[#f8f9fb] border border-gray-100 text-sm font-medium text-gray-700 px-3.5 py-1.5 rounded-full">
                {a}
              </span>
            ))}
            <span className="text-sm font-medium text-gray-400 px-3.5 py-1.5">+ surrounding areas</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-14 md:py-24 px-4 md:px-6 bg-[#0c2340]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-[#93c5fd] mb-4">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
            Ready to get started?<br />We&apos;d love to hear from you.
          </h2>
          <p className="text-white/55 text-lg mb-10 max-w-xl mx-auto">
            Free quotes, no obligation. We usually respond within the hour during business hours, and immediately for emergencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01283477200"
              className="inline-flex items-center justify-center gap-2.5 bg-[#b91c1c] hover:bg-[#991b1b] text-white text-base font-bold px-8 py-4 rounded-xl transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.71 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.71A2 2 0 0 1 22 16.92z"/></svg>
              Call 01283 477 200
            </a>
            <a
              href="mailto:hello@cartwrightplumbing.co.uk"
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080f1a] py-14 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                </div>
                <div>
                  <p className="text-sm font-black text-white tracking-tight">CARTWRIGHT PLUMBING & HEATING</p>
                </div>
              </div>
              <p className="text-sm text-white/40 leading-relaxed max-w-xs">
                Family-run plumbing and heating engineers based in Burton-on-Trent. Serving Staffordshire and Derbyshire since 2003.
              </p>
              <p className="text-xs text-white/25 mt-4">Gas Safe Registered No. 521847</p>
            </div>
            <div>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Services</p>
              <div className="space-y-2.5">
                {["Emergency Plumbing", "Boiler Repair", "Bathroom Installation", "Central Heating", "Leak Detection", "Gas Safety Checks"].map(s => (
                  <a key={s} href="#" className="block text-sm text-white/55 hover:text-white transition-colors">{s}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Contact</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-white/35">Phone (24/7 emergencies)</p>
                  <a href="tel:01283477200" className="text-sm font-bold text-white hover:text-[#93c5fd] transition-colors">01283 477 200</a>
                </div>
                <div>
                  <p className="text-xs text-white/35">Email</p>
                  <a href="mailto:hello@cartwrightplumbing.co.uk" className="text-sm text-white/70 hover:text-white transition-colors">hello@cartwrightplumbing.co.uk</a>
                </div>
                <div>
                  <p className="text-xs text-white/35">Address</p>
                  <p className="text-sm text-white/70">14 Orchard Street<br />Burton-on-Trent · DE14 1AT</p>
                </div>
                <div>
                  <p className="text-xs text-white/35">Hours</p>
                  <p className="text-sm text-white/70">Mon–Sat 7am–8pm<br /><span className="text-[#93c5fd]">24/7 for emergencies</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-white/25">© 2025 Cartwright Plumbing & Heating Ltd. All rights reserved. Registered in England & Wales No. 08241937.</p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(l => (
                <a key={l} href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
