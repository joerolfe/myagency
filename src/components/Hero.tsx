function BrowserMockup() {
  return (
    <div className="relative w-full max-w-[460px] mx-auto">
      {/* Floating star badge */}
      <div className="absolute -top-5 -left-6 z-10 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-[#f0f0f0] px-4 py-3 animate-float-delayed">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-gold text-sm leading-none">★</span>
          </div>
          <div>
            <p className="text-xs font-bold text-ink leading-none mb-0.5">5-Star Rated</p>
            <p className="text-[10px] text-[#888] leading-none">Local businesses</p>
          </div>
        </div>
      </div>

      {/* Browser window */}
      <div className="animate-float rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)] border border-[#e0e0e0]">
        {/* Browser chrome */}
        <div className="bg-[#f3f3f3] px-4 py-3 flex items-center gap-3 border-b border-[#e0e0e0]">
          <div className="flex gap-1.5 flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c940]" />
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-1.5 flex items-center justify-center gap-1.5 border border-[#e8e8e8]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] flex-shrink-0" />
            <span className="text-[10px] text-[#999]">smithsplumbing.co.uk</span>
          </div>
        </div>

        {/* Realistic website preview */}
        <div className="bg-white select-none overflow-hidden">
          {/* Nav */}
          <div className="bg-[#1e3a5f] px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-blue-400 flex-shrink-0" />
              <span className="text-white text-[9px] font-bold tracking-tight">Smith&apos;s Plumbing</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-white/60 text-[8px]">Services</span>
              <span className="text-white/60 text-[8px]">About</span>
              <span className="bg-[#f59e0b] text-white text-[8px] px-2 py-0.5 rounded-sm font-bold">Call Now</span>
            </div>
          </div>

          {/* Emergency bar */}
          <div className="bg-red-600 px-4 py-1 text-center">
            <span className="text-white text-[8px] font-semibold">⚡ 24/7 Emergency Call-Out — 07800 123456</span>
          </div>

          {/* Hero */}
          <div style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)", padding: "22px 16px 20px" }}>
            <div className="inline-block bg-white/20 rounded-full px-2 py-0.5 mb-2">
              <span className="text-white text-[7px] font-semibold">✓ Gas Safe Registered</span>
            </div>
            <div className="text-white font-bold text-[14px] leading-tight mb-1.5">
              Fast, Reliable<br />Plumbing Services
            </div>
            <div className="text-white/70 text-[8px] mb-3">Covering Derby &amp; Staffordshire · Same day available</div>
            <div className="flex gap-2">
              <div className="bg-white text-[#1e3a8a] text-[8px] font-bold px-3 py-1.5 rounded-sm">Get a Quote</div>
              <div className="border border-white/40 text-white text-[8px] px-3 py-1.5 rounded-sm">Our Services</div>
            </div>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-3 gap-1.5 p-3 bg-[#f8f9fa]">
            {[
              { label: "Boiler Repair", color: "#2563eb" },
              { label: "Bathrooms", color: "#0891b2" },
              { label: "Leak Repair", color: "#0284c7" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-sm p-2.5 border border-[#e8e8e8] text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <div className="w-5 h-5 rounded-full mx-auto mb-1.5" style={{ background: s.color + "20" }}>
                  <div className="w-2 h-2 rounded-full mx-auto mt-1.5" style={{ background: s.color }} />
                </div>
                <div className="text-[7px] font-semibold text-[#222]">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 py-2.5 bg-[#1e3a5f] flex items-center justify-between">
            <span className="text-white/50 text-[7px]">© 2025 Smith&apos;s Plumbing</span>
            <span className="text-white/50 text-[7px]">Derby, DE1</span>
          </div>
        </div>
      </div>

      {/* Floating phone mockup */}
      <div className="absolute -bottom-6 -right-6 z-10 animate-float-delayed">
        <div className="w-[76px] rounded-[16px] overflow-hidden border-[3px] border-white shadow-[0_8px_32px_rgba(0,0,0,0.16)] bg-white">
          <div className="bg-[#111] px-2 pt-2 pb-1 flex justify-center">
            <div className="w-5 h-0.5 bg-white/20 rounded-full" />
          </div>
          <div className="bg-gold h-6 flex items-center px-2">
            <div className="w-8 h-1.5 bg-white/60 rounded-full" />
          </div>
          <div className="p-2 bg-white space-y-1.5">
            <div className="w-full h-2 bg-[#222] rounded-full" />
            <div className="w-3/4 h-2 bg-[#222] rounded-full" />
            <div className="w-full h-1.5 bg-[#e5e5e5] rounded-full" />
            <div className="w-full h-1.5 bg-[#e5e5e5] rounded-full" />
            <div className="w-full h-5 bg-gold rounded-sm mt-0.5" />
          </div>
          <div className="bg-[#111] h-3 flex items-center justify-center">
            <div className="w-4 h-0.5 bg-white/25 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

import CountUp from "./CountUp";

const stats = [
  { node: <CountUp to={48} suffix="hr" />, label: "Demo Delivered" },
  { node: <span>£0</span>, label: "Upfront Cost" },
  { node: <CountUp to={5} suffix="-Star" />, label: "Rated Service" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 bg-white overflow-hidden">
      {/* Subtle background warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_65%_at_75%_35%,#fdf9ee,transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_15%_75%,#f0f5ff,transparent)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">

          {/* Left — text */}
          <div>
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3.5 py-1.5 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-green-700 text-xs font-semibold">
                Currently accepting new clients
              </span>
            </div>

            {/* Location badge */}
            <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-3.5 py-1.5 mb-7 ml-2">
              <span className="text-[#7a5c1e] text-xs font-semibold">
                Serving Derbyshire &amp; Staffordshire businesses
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-[3.5rem] lg:text-6xl font-bold leading-[1.08] tracking-tight text-ink mb-6">
              Your business deserves a website that{" "}
              <span className="text-gold italic">actually works</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-[#555] leading-relaxed mb-9 max-w-lg">
              I build fast, professional websites for local businesses — and
              handle everything so you don&apos;t have to.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3 mb-5">
              <a
                href="/contact"
                className="px-7 py-3.5 bg-gold text-white text-sm font-semibold hover:bg-[#b8912e] transition-colors duration-150 rounded-sm shadow-[0_4px_14px_rgba(201,168,76,0.35)]"
              >
                Get a Free Demo
              </a>
              <a
                href="/#services"
                className="px-7 py-3.5 border border-[#ccc] text-ink text-sm font-semibold hover:border-ink hover:bg-ink hover:text-white transition-all duration-150 rounded-sm"
              >
                See Pricing
              </a>
            </div>

            {/* Pricing nudge */}
            <p className="text-sm text-[#888] mb-9">
              Websites from{" "}
              <span className="text-ink font-semibold">£299</span> — free demo, no commitment.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#777]">
              <span className="flex items-center gap-1.5">
                <span className="text-gold text-base leading-none">★★★★★</span>
                <span>5-star service</span>
              </span>
              <span className="hidden sm:block w-px h-4 bg-[#ddd]" />
              <span>No upfront payment</span>
              <span className="hidden sm:block w-px h-4 bg-[#ddd]" />
              <span>Free demo — no commitment</span>
            </div>
          </div>

          {/* Right — browser mockup (desktop only) */}
          <div className="hidden lg:flex justify-center items-center py-10">
            <BrowserMockup />
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 border border-[#e8e8e8] divide-x divide-[#e8e8e8] rounded-sm overflow-hidden mt-16 lg:mt-20">
          {stats.map((stat) => (
            <div key={stat.label} className="py-6 px-4 text-center bg-stone">
              <div className="font-display text-2xl md:text-3xl font-bold text-ink mb-1.5">
                {stat.node}
              </div>
              <div className="text-xs text-[#888] tracking-wide font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
