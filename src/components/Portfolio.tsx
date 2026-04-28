import FadeIn from "./FadeIn";

// ── Shared browser shell ─────────────────────────────────────────
function Browser({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden border border-[#e0e0e0] shadow-[0_4px_24px_rgba(0,0,0,0.10)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] transition-shadow duration-300 bg-white">
      {/* Chrome */}
      <div className="bg-[#f3f3f3] px-4 py-2.5 flex items-center gap-2.5 border-b border-[#e0e0e0]">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c940]" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-[10px] text-[#aaa] border border-[#e8e8e8] truncate text-center">
          {url}
        </div>
      </div>
      <div className="select-none">{children}</div>
    </div>
  );
}

// ── Icons ────────────────────────────────────────────────────────
const IconCheck = ({ color }: { color: string }) => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <circle cx="5" cy="5" r="5" fill={color} fillOpacity="0.15" />
    <path d="M2.5 5L4 6.5L7.5 3" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── GARAGE MOCKUP ────────────────────────────────────────────────
function GarageSite() {
  return (
    <div className="text-[0]">
      {/* Nav */}
      <div className="bg-[#111111] px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 bg-red-600 rounded-sm flex items-center justify-center">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="white">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 4a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm-3 8v-4h2v4zm4 0v-4h2v4z" />
            </svg>
          </div>
          <span className="text-[9px] font-black text-white tracking-tight">DERBY AUTO</span>
        </div>
        <div className="flex items-center gap-2.5">
          {["MOT", "Services", "Tyres"].map((l) => (
            <span key={l} className="text-[7.5px] text-white/40 font-medium">{l}</span>
          ))}
          <span className="bg-red-600 text-white text-[7px] font-bold px-2 py-1 rounded-sm">01332 000 000</span>
        </div>
      </div>

      {/* Hero */}
      <div
        className="relative px-4 pt-5 pb-4 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #0a0a0a 0%, #1a0808 60%, #200c0c 100%)",
        }}
      >
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        {/* Red glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-700 rounded-full opacity-10 blur-3xl" />

        <div className="relative">
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="text-[7px] font-bold bg-red-600 text-white px-2 py-0.5 rounded-sm">MOT FROM £39</span>
            <span className="text-[7px] text-white/35">Derby &amp; Derbyshire</span>
          </div>
          <div className="text-white text-[15px] font-black leading-[1.15] tracking-tight mb-1.5">
            Derby&apos;s Trusted<br />Local Garage
          </div>
          <p className="text-[8px] text-white/45 mb-3 leading-relaxed">
            MOT testing, servicing &amp; repairs for all makes and models.<br />
            20+ years keeping Derby on the road.
          </p>
          <div className="flex gap-2 mb-3.5">
            <span className="bg-red-600 hover:bg-red-700 text-white text-[8px] font-bold px-3 py-1.5 rounded-sm cursor-pointer">
              Book Online
            </span>
            <span className="border border-white/25 text-white text-[8px] font-semibold px-3 py-1.5 rounded-sm cursor-pointer">
              Call Now
            </span>
          </div>
          <div className="flex items-center gap-3 border-t border-white/10 pt-3">
            <div className="text-center">
              <div className="text-[10px] font-black text-red-500">20+</div>
              <div className="text-[6.5px] text-white/35 uppercase tracking-wide">Years</div>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="text-center">
              <div className="flex gap-0.5">
                {[0,1,2,3,4].map(i => (
                  <svg key={i} width="7" height="7" viewBox="0 0 10 10" fill="#fbbf24">
                    <path d="M5 1l1.2 2.5L9 3.8 7 5.8l.5 2.7L5 7.2 2.5 8.5 3 5.8 1 3.8l2.8-.3z"/>
                  </svg>
                ))}
              </div>
              <div className="text-[6.5px] text-white/35 uppercase tracking-wide">5-Star</div>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="text-center">
              <div className="text-[10px] font-black text-red-500">Same</div>
              <div className="text-[6.5px] text-white/35 uppercase tracking-wide">Day</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-[#f7f7f7] px-3 py-3">
        <div className="text-[8px] font-bold text-[#111] uppercase tracking-widest mb-2">Our Services</div>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "MOT Testing", sub: "From £39" },
            { label: "Car Servicing", sub: "All makes" },
            { label: "Diagnostics", sub: "Fault finding" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-[#e8e8e8] rounded-sm p-2 text-center">
              <div className="w-6 h-6 bg-red-50 rounded-sm flex items-center justify-center mx-auto mb-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
                </svg>
              </div>
              <div className="text-[7.5px] font-bold text-[#111]">{s.label}</div>
              <div className="text-[6.5px] text-[#888]">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#111] px-3 py-2 flex items-center justify-between">
        <span className="text-[7px] text-white/25 font-medium">Derby Auto Centre</span>
        <span className="text-[7px] text-white/20">Derby · DE1 · © 2025</span>
      </div>
    </div>
  );
}

// ── PLUMBING MOCKUP ──────────────────────────────────────────────
function PlumbingSite() {
  return (
    <div className="text-[0]">
      {/* Emergency bar */}
      <div className="bg-red-600 px-3 py-1.5 flex items-center justify-between">
        <span className="text-[7.5px] font-bold text-white">24/7 Emergency Plumber</span>
        <span className="text-[7.5px] font-black text-white">01283 000 000</span>
      </div>

      {/* Nav */}
      <div className="bg-white px-3 py-2 flex items-center justify-between border-b border-[#e8e8e8]">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-blue-600" />
          <span className="text-[9px] font-black text-[#111] tracking-tight">CARTWRIGHT PLUMBING</span>
        </div>
        <div className="flex items-center gap-2.5">
          {["Services", "About", "Contact"].map((l) => (
            <span key={l} className="text-[7.5px] text-[#666] font-medium">{l}</span>
          ))}
          <span className="bg-blue-600 text-white text-[7px] font-bold px-2 py-1 rounded-sm">Free Quote</span>
        </div>
      </div>

      {/* Hero */}
      <div
        className="relative px-4 pt-5 pb-4 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #2563eb 100%)" }}
      >
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-900 rounded-full opacity-20 blur-2xl" />

        <div className="relative">
          <div className="flex gap-2 mb-2.5">
            {["Gas Safe Registered", "Fully Insured"].map((b) => (
              <span key={b} className="flex items-center gap-1 text-[7px] text-white/80 bg-white/10 border border-white/20 px-2 py-0.5 rounded-full">
                <IconCheck color="#fff" />
                {b}
              </span>
            ))}
          </div>
          <div className="text-white text-[15px] font-black leading-[1.15] tracking-tight mb-1.5">
            Emergency Plumber<br />Burton &amp; Staffordshire
          </div>
          <p className="text-[8px] text-white/55 mb-3 leading-relaxed">
            Boiler breakdowns, leaks, bathrooms &amp; more.<br />
            Fast response across Staffordshire &amp; Derbyshire.
          </p>
          <div className="flex gap-2 mb-3.5">
            <span className="bg-white text-blue-700 text-[8px] font-black px-3 py-1.5 rounded-sm cursor-pointer">
              Get a Free Quote
            </span>
            <span className="border border-white/30 text-white text-[8px] font-semibold px-3 py-1.5 rounded-sm cursor-pointer">
              01283 000 000
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[7px] text-white/40">
            <IconCheck color="rgba(255,255,255,0.6)" />
            <span>No call-out charge</span>
            <span className="mx-1">·</span>
            <IconCheck color="rgba(255,255,255,0.6)" />
            <span>Same-day response</span>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-white px-3 py-3">
        <div className="text-[8px] font-bold text-[#111] uppercase tracking-widest mb-2">What We Do</div>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "Boiler Repairs", sub: "All brands" },
            { label: "Bathroom Fitting", sub: "Full installs" },
            { label: "Leak Detection", sub: "Fast fix" },
          ].map((s) => (
            <div key={s.label} className="bg-blue-50 border border-blue-100 rounded-sm p-2 text-center">
              <div className="w-6 h-6 bg-blue-100 rounded-sm flex items-center justify-center mx-auto mb-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                </svg>
              </div>
              <div className="text-[7.5px] font-bold text-[#111]">{s.label}</div>
              <div className="text-[6.5px] text-[#888]">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1e3a8a] px-3 py-2 flex items-center justify-between">
        <span className="text-[7px] text-white/40 font-medium">Cartwright Plumbing Co.</span>
        <span className="text-[7px] text-white/30">Burton · Staffordshire · © 2025</span>
      </div>
    </div>
  );
}

// ── CARPENTRY MOCKUP ─────────────────────────────────────────────
function CarpentrySite() {
  return (
    <div className="text-[0]">
      {/* Nav */}
      <div className="bg-white px-3 py-2 flex items-center justify-between border-b-2 border-[#92400e]">
        <div className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round">
            <path d="M17 8C8 10 5.9 16.17 3.82 21" /><path d="M9.1 17.4c.9.8 1.9 1.2 3 1.4" /><path d="M14.5 13c1-.8 2-1.3 3.5-1"/>
          </svg>
          <span className="text-[9px] font-black text-[#451a03] tracking-tight">OAK &amp; GRAIN</span>
        </div>
        <div className="flex items-center gap-2.5">
          {["Portfolio", "Services", "Contact"].map((l) => (
            <span key={l} className="text-[7.5px] text-[#666] font-medium">{l}</span>
          ))}
          <span
            className="text-white text-[7px] font-bold px-2 py-1 rounded-sm"
            style={{ backgroundColor: "#92400e" }}
          >
            Free Quote
          </span>
        </div>
      </div>

      {/* Hero */}
      <div
        className="relative px-4 pt-5 pb-4 overflow-hidden"
        style={{ background: "linear-gradient(150deg, #3b1208 0%, #7c2d12 45%, #9a3412 100%)" }}
      >
        {/* Wood grain texture simulation */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 60px)",
          }}
        />
        <div className="absolute top-2 right-4 w-20 h-20 bg-amber-500 rounded-full opacity-10 blur-2xl" />

        <div className="relative">
          <span className="inline-block text-[7px] font-bold text-amber-300/80 tracking-widest uppercase mb-2.5">
            Bespoke Joinery · Staffordshire
          </span>
          <div className="text-white text-[15px] font-black leading-[1.15] tracking-tight mb-1.5">
            Handcrafted<br />Carpentry &amp; Joinery
          </div>
          <p className="text-[8px] text-white/50 mb-3 leading-relaxed">
            Fitted kitchens, staircases, wardrobes &amp; more.<br />
            Built to last. Designed around you.
          </p>
          <div className="flex gap-2 mb-3.5">
            <span
              className="text-white text-[8px] font-black px-3 py-1.5 rounded-sm cursor-pointer"
              style={{ backgroundColor: "#c2410c" }}
            >
              View Our Work
            </span>
            <span className="border border-white/30 text-white text-[8px] font-semibold px-3 py-1.5 rounded-sm cursor-pointer">
              Free Quote
            </span>
          </div>
          <div className="flex items-center gap-3 border-t border-white/10 pt-2.5">
            {["15+ Years", "Fully Insured", "Local Craftsmen"].map((t) => (
              <span key={t} className="flex items-center gap-1 text-[7px] text-white/45">
                <IconCheck color="rgba(251,191,36,0.7)" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio grid */}
      <div className="bg-[#faf8f5] px-3 py-3">
        <div className="text-[8px] font-bold text-[#451a03] uppercase tracking-widest mb-2">Recent Projects</div>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "Fitted Kitchen", bg: "linear-gradient(135deg,#fed7aa,#fdba74)" },
            { label: "Oak Staircase", bg: "linear-gradient(135deg,#d6b896,#b8860b)" },
            { label: "Bedroom Suite", bg: "linear-gradient(135deg,#e5d5c5,#c4a882)" },
          ].map((p) => (
            <div
              key={p.label}
              className="rounded-sm overflow-hidden"
              style={{ background: p.bg }}
            >
              <div className="h-10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(120,60,20,0.5)" strokeWidth="1.5" strokeLinecap="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                </svg>
              </div>
              <div className="bg-white/70 px-1.5 py-1">
                <div className="text-[6.5px] font-bold text-[#451a03]">{p.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-3 py-2 flex items-center justify-between" style={{ backgroundColor: "#3b1208" }}>
        <span className="text-[7px] text-white/35 font-medium">Oak &amp; Grain Carpentry</span>
        <span className="text-[7px] text-white/25">Swadlincote · © 2025</span>
      </div>
    </div>
  );
}

// ── Main section ─────────────────────────────────────────────────
const sites = [
  {
    url: "derbyautocentre.co.uk",
    business: "Derby Auto Centre",
    industry: "Garage & MOT · Derby",
    component: <GarageSite />,
  },
  {
    url: "cartwrightplumbing.co.uk",
    business: "Cartwright Plumbing Co.",
    industry: "Emergency Plumber · Burton",
    component: <PlumbingSite />,
  },
  {
    url: "oakandgraincarpentry.co.uk",
    business: "Oak & Grain Carpentry",
    industry: "Bespoke Joinery · Swadlincote",
    component: <CarpentrySite />,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 bg-stone border-t border-[#ebebeb]">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">
            Example Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
            What your website could look like
          </h2>
          <p className="text-[#666] mt-4 text-base max-w-xl mx-auto">
            Every site is custom-built around your business. Here are examples
            of what I create for local trades across Derbyshire and
            Staffordshire.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-7">
          {sites.map((site, i) => (
            <FadeIn key={site.business} delay={i * 100}>
              <div className="flex flex-col gap-3">
                <Browser url={site.url}>{site.component}</Browser>
                <div className="px-1">
                  <p className="text-sm font-bold text-ink">{site.business}</p>
                  <p className="text-xs text-[#888]">{site.industry}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200} className="mt-10 text-center">
          <p className="text-[#888] text-sm">
            Want to see what I&apos;d build for{" "}
            <span className="text-ink font-semibold">your</span> business?{" "}
            <a href="/contact" className="text-gold font-semibold hover:underline">
              Get a free demo.
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
