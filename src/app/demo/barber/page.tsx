"use client";
import BarberNav from "./BarberNav";

const GOLD = "#c9a84c";
const DARK = "#090909";

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  { n: "01", name: "Classic Cut", desc: "Scissor or clipper, styled to finish", price: "£18" },
  { n: "02", name: "Skin Fade", desc: "Bald or skin fade with any length on top", price: "£22" },
  { n: "03", name: "Cut & Beard", desc: "Full haircut plus beard trim & line-up", price: "£26" },
  { n: "04", name: "Hot Towel Shave", desc: "Traditional wet shave, pre-shave oil & aftercare", price: "£25" },
  { n: "05", name: "Beard Trim", desc: "Shape, taper and nourishing oil treatment", price: "£12" },
  { n: "06", name: "Kids Cut", desc: "Ages 12 and under", price: "£14" },
];

const reviews = [
  { name: "Ryan M.", date: "5 days ago", text: "Best barber in Derby — been coming three years, never left disappointed. Dean just gets it.", initials: "RM" },
  { name: "Tom B.", date: "2 weeks ago", text: "The fade is perfect every single time. Proper old school barbershop atmosphere. Wouldn't go anywhere else.", initials: "TB" },
  { name: "Chris W.", date: "1 month ago", text: "Cut and hot towel shave — proper luxury. The shop looks incredible and the quality matches.", initials: "CW" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BarberDemo() {
  return (
    <div className="font-sans antialiased" style={{ background: DARK, color: "#f0ebe0" }}>

      <BarberNav />

      {/* ── HERO — split screen ───────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">

        {/* Left — text panel */}
        <div
          className="relative z-10 flex flex-col justify-between py-24 lg:py-32 px-6 md:px-12 w-full lg:w-[48%] flex-shrink-0"
          style={{ background: DARK }}
        >
          {/* Top label */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.35em] uppercase mb-10 lg:mb-16" style={{ color: GOLD }}>
              Est. 2014 &nbsp;·&nbsp; Derby City Centre
            </p>

            <h1
              className="font-black leading-[0.95] tracking-tighter mb-8"
              style={{ fontSize: "clamp(38px, 6vw, 88px)", color: "#f0ebe0" }}
            >
              Sharp.<br />
              Clean.<br />
              <em className="font-display not-italic" style={{ color: GOLD }}>Precise.</em>
            </h1>

            <p className="text-base leading-relaxed mb-10 max-w-xs" style={{ color: "rgba(240,235,224,0.5)" }}>
              Skin fades, hot towel shaves, highlights &amp; perms —
              Derby&apos;s premier barbershop. Walk in or book ahead.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#book"
                className="text-sm font-black px-7 py-3.5 rounded-full transition-all hover:opacity-90"
                style={{ background: GOLD, color: DARK }}
              >
                Book Now
              </a>
              <a
                href="#services"
                className="text-sm font-semibold flex items-center gap-1.5 transition-opacity hover:opacity-60"
                style={{ color: "#f0ebe0" }}
              >
                View Pricing
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom stats row */}
          <div className="flex gap-8 pt-8" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
            {[["4.9★", "Google"], ["5,000+", "Happy clients"], ["10yrs", "In Derby"]].map(([v, l]) => (
              <div key={l}>
                <p className="text-xl font-black text-white leading-none">{v}</p>
                <p className="text-xs mt-1" style={{ color: "rgba(240,235,224,0.35)" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — full-height image */}
        <div className="relative flex-1 min-h-[50vw] lg:min-h-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1400&q=85"
            alt="Blade & Crown barbershop interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Fade to left so it blends into the text panel */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #090909 0%, transparent 25%)" }} />
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />

          {/* Floating booking card */}
          <div
            className="absolute bottom-10 right-10 rounded-2xl px-6 py-5 w-64"
            style={{ background: "rgba(9,9,9,0.88)", border: "1px solid rgba(201,168,76,0.2)", backdropFilter: "blur(12px)" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold" style={{ color: "rgba(240,235,224,0.6)" }}>Walk-ins welcome today</span>
            </div>
            <p className="text-sm font-black text-white mb-0.5">Blade &amp; Crown</p>
            <p className="text-xs mb-3" style={{ color: GOLD }}>12 Sadler Gate · DE1 3NQ</p>
            <p className="text-xs" style={{ color: "rgba(240,235,224,0.4)" }}>Mon–Fri 9am–7pm &nbsp;|&nbsp; Sat 8:30am–6pm</p>
          </div>
        </div>
      </section>

      {/* ── MARQUEE strip ─────────────────────────────────────────── */}
      <div
        className="overflow-hidden py-4"
        style={{ background: GOLD }}
      >
        <div className="flex gap-12 whitespace-nowrap" style={{ animation: "marquee 18s linear infinite" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="text-xs font-black tracking-[0.3em] uppercase flex items-center gap-12" style={{ color: DARK }}>
              Sharp Cuts &nbsp;✦&nbsp; Clean Fades &nbsp;✦&nbsp; Hot Towel Shaves &nbsp;✦&nbsp; Walk-ins Welcome &nbsp;✦&nbsp; Derby City Centre
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>

      {/* ── SERVICES — numbered cards ─────────────────────────────── */}
      <section id="services" className="py-24 px-12" style={{ background: "#0d0d0d" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: GOLD }}>The Menu</p>
              <h2 className="text-5xl font-black text-white leading-tight">Services &amp;<br />Pricing</h2>
            </div>
            <p className="text-sm max-w-[220px] text-right pb-2" style={{ color: "rgba(240,235,224,0.4)" }}>
              All cuts include shampoo, product &amp; a finish. No hidden extras.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map(s => (
              <div
                key={s.n}
                className="group rounded-2xl p-7 transition-all duration-300 cursor-default"
                style={{ background: "#111", border: "1px solid rgba(255,255,255,0.05)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.3)";
                  (e.currentTarget as HTMLDivElement).style.background = "#141414";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLDivElement).style.background = "#111";
                }}
              >
                <p className="text-5xl font-black leading-none mb-6" style={{ color: "rgba(201,168,76,0.2)" }}>{s.n}</p>
                <p className="text-base font-black text-white mb-1">{s.name}</p>
                <p className="text-sm mb-5" style={{ color: "rgba(240,235,224,0.4)" }}>{s.desc}</p>
                <p className="text-2xl font-black" style={{ color: GOLD }}>{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-BLEED QUOTE ─────────────────────────────────────── */}
      <section className="relative py-32 px-12 overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1600&q=80"
            alt="Barber at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(9,9,9,0.82)" }} />
        </div>
        <div className="relative max-w-3xl">
          <p className="text-6xl font-black leading-tight text-white mb-6" style={{ letterSpacing: "-0.02em" }}>
            &ldquo;Walk in as you are.<br />
            <span style={{ color: GOLD }}>Walk out sharper.</span>&rdquo;
          </p>
          <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: "rgba(240,235,224,0.4)" }}>
            — Dean Hartley, Head Barber
          </p>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────── */}
      <section id="gallery" className="py-24 px-12" style={{ background: "#090909" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: GOLD }}>The Work</p>
              <h2 className="text-5xl font-black text-white">Fresh out<br />the chair</h2>
            </div>
            <a href="#book" className="text-sm font-semibold pb-1" style={{ color: GOLD, borderBottom: `1px solid ${GOLD}` }}>
              Book your cut →
            </a>
          </div>

          {/* Asymmetric gallery grid */}
          <div className="grid grid-cols-12 grid-rows-2 gap-3" style={{ height: 480 }}>
            <div className="col-span-5 row-span-2 relative rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80" alt="Classic cut" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-4 row-span-1 relative rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80" alt="Beard shape" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-3 row-span-1 relative rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80" alt="Hot towel shave" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-7 row-span-1 relative rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=1000&q=80" alt="Skin fade" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────── */}
      <section id="reviews" className="py-24 px-12" style={{ background: "#0d0d0d" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
            {/* Left — rating */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase mb-6" style={{ color: GOLD }}>Reviews</p>
              <p className="text-8xl font-black text-white leading-none">4.9</p>
              <div className="flex gap-1 my-3">
                {[0,1,2,3,4].map(i => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={GOLD}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm" style={{ color: "rgba(240,235,224,0.4)" }}>312 Google Reviews</p>

              <a
                href="#book"
                className="inline-flex items-center gap-2 text-sm font-black px-6 py-3 rounded-full mt-8 hover:opacity-90 transition-opacity"
                style={{ background: GOLD, color: DARK }}
              >
                Book Your Cut
              </a>
            </div>

            {/* Right — review cards */}
            <div className="space-y-4">
              {reviews.map(r => (
                <div
                  key={r.name}
                  className="rounded-2xl p-6"
                  style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-black"
                        style={{ background: "rgba(201,168,76,0.12)", color: GOLD }}
                      >
                        {r.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white leading-none">{r.name}</p>
                        <p className="text-xs mt-0.5" style={{ color: "rgba(240,235,224,0.35)" }}>{r.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[0,1,2,3,4].map(i => <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill={GOLD}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,235,224,0.6)" }}>
                    &ldquo;{r.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING CTA ──────────────────────────────────────────── */}
      <section id="book" className="relative py-28 px-12 overflow-hidden">
        <div className="absolute inset-0" style={{ background: GOLD }} />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)", backgroundSize: "14px 14px" }} />
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase mb-4 opacity-60" style={{ color: DARK }}>Ready?</p>
            <h2 className="text-5xl md:text-6xl font-black leading-tight" style={{ color: DARK }}>
              Next cut starts<br />with a booking.
            </h2>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <a
              href="https://fresha.com"
              className="inline-flex items-center justify-center gap-2 text-base font-black px-8 py-4 rounded-full transition-all hover:opacity-90"
              style={{ background: DARK, color: "#f0ebe0" }}
            >
              Book Online — Fresha
            </a>
            <a
              href="tel:01332941200"
              className="inline-flex items-center justify-center gap-2 text-base font-semibold px-8 py-4 rounded-full transition-all"
              style={{ border: `2px solid rgba(9,9,9,0.3)`, color: DARK }}
            >
              Call 01332 941 200
            </a>
            <p className="text-center text-sm font-medium" style={{ color: "rgba(9,9,9,0.5)" }}>
              Or just walk in — we&apos;ll fit you in
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="py-14 px-12" style={{ background: "#060606", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div>
              <p className="text-lg font-black text-white tracking-tight">BLADE &amp; CROWN</p>
              <p className="text-xs font-semibold tracking-[0.2em] mt-0.5" style={{ color: GOLD }}>BARBERSHOP · DERBY</p>
              <p className="text-sm mt-4 max-w-xs leading-relaxed" style={{ color: "rgba(240,235,224,0.35)" }}>
                12 Sadler Gate, Derby DE1 3NQ<br />
                Mon–Fri 9am–7pm · Sat 8:30am–6pm · Sun 10am–4pm
              </p>
            </div>
            <div className="flex gap-16">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(240,235,224,0.25)" }}>Services</p>
                <div className="space-y-2">
                  {["Classic Cut", "Skin Fade", "Hot Towel Shave", "Beard Trim", "Cut & Beard", "Kids Cut"].map(s => (
                    <a key={s} href="#" className="block text-sm hover:opacity-60 transition-opacity" style={{ color: "rgba(240,235,224,0.5)" }}>{s}</a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(240,235,224,0.25)" }}>Contact</p>
                <div className="space-y-3">
                  <a href="tel:01332941200" className="block text-sm font-bold text-white hover:opacity-70 transition-opacity">01332 941 200</a>
                  <a href="#" className="block text-sm hover:opacity-70 transition-opacity" style={{ color: GOLD }}>@bladeandcrown</a>
                  <a href="https://fresha.com" className="block text-sm hover:opacity-70 transition-opacity" style={{ color: "rgba(240,235,224,0.4)" }}>Book on Fresha</a>
                </div>
              </div>
            </div>
          </div>
          <p className="pt-8 text-xs" style={{ color: "rgba(240,235,224,0.2)" }}>© 2025 Blade &amp; Crown Barbershop · Derby</p>
        </div>
      </footer>

    </div>
  );
}
