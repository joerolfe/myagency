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

          {/* Top bar */}
          <div className="bg-[#0f2744] px-4 py-1.5 flex items-center justify-between">
            <span className="text-white/50 text-[7px]">⚡ 24/7 Emergency Response — Same Day Available</span>
            <span className="text-[#f59e0b] text-[7px] font-bold">07800 123 456</span>
          </div>

          {/* Nav */}
          <div className="bg-white px-4 py-2.5 flex items-center justify-between border-b border-[#f0f0f0] shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded bg-[#1d4ed8] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[8px] font-black">SP</span>
              </div>
              <div>
                <div className="text-[9px] font-black text-[#0f2744] leading-none">SMITH'S</div>
                <div className="text-[6px] text-[#1d4ed8] font-semibold leading-none tracking-wider">PLUMBING</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#555] text-[7px]">Services</span>
              <span className="text-[#555] text-[7px]">Reviews</span>
              <span className="text-[#555] text-[7px]">About</span>
              <span className="bg-[#1d4ed8] text-white text-[7px] font-bold px-2.5 py-1 rounded-sm">Get a Quote</span>
            </div>
          </div>

          {/* Hero — photo-style background */}
          <div
            className="relative overflow-hidden"
            style={{
              background: [
                "linear-gradient(to right, rgba(8,25,55,0.92) 0%, rgba(8,25,55,0.75) 55%, rgba(8,25,55,0.4) 100%)",
                "radial-gradient(ellipse at 85% 30%, rgba(59,130,246,0.35) 0%, transparent 55%)",
                "radial-gradient(ellipse at 90% 80%, rgba(245,158,11,0.12) 0%, transparent 40%)",
                "linear-gradient(160deg, #0c1e3d 0%, #112244 35%, #0e2a50 65%, #1a3a6b 100%)",
              ].join(", "),
              padding: "24px 16px 22px",
            }}
          >
            {/* Pipe shape decoration */}
            <div className="absolute right-0 top-0 bottom-0 w-2/5 overflow-hidden opacity-20">
              <div className="absolute right-8 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-[6px] border-blue-400" />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-36 h-36 rounded-full border-[3px] border-blue-300/50" />
              <div className="absolute right-16 bottom-2 w-16 h-3 bg-blue-400 rounded-full" />
              <div className="absolute right-16 bottom-2 left-0 h-3 bg-blue-500/50 rounded-full" />
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center gap-1.5 mb-2.5">
                <div className="flex gap-0.5">
                  {[0,1,2,3,4].map(i => (
                    <span key={i} className="text-[#f59e0b] text-[9px]">★</span>
                  ))}
                </div>
                <span className="text-white/70 text-[7px]">4.9 · 127 Google Reviews</span>
              </div>

              <div className="text-white font-black text-[16px] leading-tight mb-1.5 tracking-tight">
                Derby&apos;s Trusted<br />
                <span className="text-[#60a5fa]">Plumbing Experts</span>
              </div>
              <div className="text-white/65 text-[8px] mb-4 leading-relaxed">
                Boiler repairs, bathroom installs &amp; emergency call-outs.<br />
                Fixed prices. No call-out fee.
              </div>

              <div className="flex gap-2 mb-4">
                <div className="bg-[#1d4ed8] text-white text-[8px] font-bold px-3.5 py-2 rounded-sm shadow-[0_2px_8px_rgba(29,78,216,0.4)]">
                  Get a Free Quote
                </div>
                <div className="bg-white/15 border border-white/30 text-white text-[8px] px-3.5 py-2 rounded-sm backdrop-blur-sm">
                  Call Now
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex gap-2">
                {["✓ Gas Safe", "✓ Insured", "✓ Fixed Prices"].map((b) => (
                  <div key={b} className="bg-white/10 border border-white/20 rounded-full px-2 py-0.5">
                    <span className="text-white/80 text-[6.5px] font-semibold">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services strip */}
          <div className="bg-white px-3 py-3">
            <div className="text-[7px] font-black text-[#0f2744] uppercase tracking-widest mb-2.5 text-center">Our Services</div>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { name: "Boiler Repair", bg: "#dbeafe", icon: "#1d4ed8" },
                { name: "Bathrooms", bg: "#e0f2fe", icon: "#0284c7" },
                { name: "Leak Repair", bg: "#dbeafe", icon: "#1d4ed8" },
                { name: "Central Heating", bg: "#fef3c7", icon: "#d97706" },
              ].map((s) => (
                <div key={s.name} className="rounded-sm p-2 text-center border border-[#f0f0f0]" style={{ background: s.bg + "66" }}>
                  <div className="w-4 h-4 rounded-full mx-auto mb-1 flex items-center justify-center" style={{ background: s.icon + "22" }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: s.icon }} />
                  </div>
                  <div className="text-[6.5px] font-semibold text-[#1a1a1a] leading-tight">{s.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews strip */}
          <div className="bg-[#f8fafc] border-t border-[#eef0f3] px-3 py-2.5">
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Mark T.", quote: "Fixed our boiler same day. Brilliant service." },
                { name: "Sarah K.", quote: "Neat work, fair price. Highly recommend!" },
              ].map((r) => (
                <div key={r.name} className="bg-white rounded-sm p-2 border border-[#e8edf2] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="flex gap-0.5 mb-1">
                    {[0,1,2,3,4].map(i => <span key={i} className="text-[#f59e0b] text-[7px]">★</span>)}
                  </div>
                  <div className="text-[6.5px] text-[#444] leading-tight mb-1">&ldquo;{r.quote}&rdquo;</div>
                  <div className="text-[6px] font-bold text-[#0f2744]">{r.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-[#0f2744] px-4 py-2 flex items-center justify-between">
            <span className="text-white/40 text-[6.5px]">© 2025 Smith&apos;s Plumbing · Derby</span>
            <span className="text-[#60a5fa] text-[6.5px]">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Floating phone mockup */}
      <div className="absolute -bottom-6 -right-6 z-10 animate-float-delayed">
        <div className="w-[76px] rounded-[16px] overflow-hidden border-[3px] border-white shadow-[0_8px_32px_rgba(0,0,0,0.16)] bg-white">
          {/* Phone status bar */}
          <div className="bg-[#0f2744] px-2 pt-2 pb-1 flex justify-center">
            <div className="w-5 h-0.5 bg-white/20 rounded-full" />
          </div>
          {/* Phone nav */}
          <div className="bg-white px-2 py-1.5 flex items-center justify-between border-b border-[#f0f0f0]">
            <div className="w-4 h-4 rounded bg-[#1d4ed8] flex items-center justify-center">
              <span className="text-white text-[5px] font-black">SP</span>
            </div>
            <div className="w-3 h-3 flex flex-col gap-0.5 justify-center">
              <div className="w-full h-0.5 bg-[#333] rounded-full" />
              <div className="w-3/4 h-0.5 bg-[#333] rounded-full" />
              <div className="w-full h-0.5 bg-[#333] rounded-full" />
            </div>
          </div>
          {/* Phone hero */}
          <div style={{ background: "linear-gradient(160deg, #0c1e3d 0%, #1a3a6b 100%)", padding: "8px" }}>
            <div className="flex gap-0.5 mb-1">
              {[0,1,2,3,4].map(i => <span key={i} className="text-[#f59e0b] text-[6px]">★</span>)}
            </div>
            <div className="text-white font-black text-[8px] leading-tight mb-1">Derby&apos;s Trusted<br /><span className="text-[#60a5fa]">Plumbers</span></div>
            <div className="text-white/60 text-[5.5px] mb-2">Fixed prices · No call-out fee</div>
            <div className="bg-[#1d4ed8] text-white text-[6px] font-bold text-center py-1 rounded-sm">Get a Free Quote</div>
          </div>
          {/* Phone footer */}
          <div className="bg-[#0f2744] h-3 flex items-center justify-center">
            <div className="w-4 h-0.5 bg-white/25 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

import CountUp from "./CountUp";


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
          <a href="/#process" className="py-6 px-4 text-center bg-stone hover:bg-white transition-colors duration-150 group">
            <div className="font-display text-2xl md:text-3xl font-bold text-ink mb-1 group-hover:text-gold transition-colors duration-150">
              <CountUp to={48} suffix="hr" />
            </div>
            <div className="text-xs text-[#888] tracking-wide font-medium">Demo delivered</div>
            <div className="text-[10px] text-[#bbb] mt-0.5">See how it works →</div>
          </a>
          <div className="py-6 px-4 text-center bg-stone">
            <div className="font-display text-2xl md:text-3xl font-bold text-ink mb-1">£0</div>
            <div className="text-xs text-[#888] tracking-wide font-medium">Upfront cost</div>
            <div className="text-[10px] text-[#bbb] mt-0.5">Pay only when happy</div>
          </div>
          <a href="/#portfolio" className="py-6 px-4 text-center bg-stone hover:bg-white transition-colors duration-150 group">
            <div className="font-display text-2xl md:text-3xl font-bold text-ink mb-1 group-hover:text-gold transition-colors duration-150">
              <CountUp to={5} suffix="-Star" />
            </div>
            <div className="text-xs text-[#888] tracking-wide font-medium">Rated service</div>
            <div className="text-[10px] text-[#bbb] mt-0.5">See example work →</div>
          </a>
        </div>
      </div>
    </section>
  );
}
