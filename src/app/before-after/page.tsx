import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before & After — Rolfe Brand Scaling",
  description: "See the difference a proper website makes. Real before and after examples from local businesses across Derbyshire and Staffordshire.",
  robots: { index: false, follow: false },
};

// ── CSS mockup components ─────────────────────────────────────────

function BeforeMockup({ business }: { business: string }) {
  return (
    <div className="rounded-lg overflow-hidden border border-[#e0e0e0] shadow-sm select-none">
      {/* Browser chrome */}
      <div className="bg-[#f3f3f3] px-3 py-2 flex items-center gap-2 border-b border-[#e0e0e0]">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <div className="w-2 h-2 rounded-full bg-[#28c940]" />
        </div>
        <div className="flex-1 bg-white rounded px-2 py-0.5 text-[9px] text-[#aaa] border border-[#e8e8e8] truncate text-center">
          {business.toLowerCase().replace(/\s/g, "")}.co.uk
        </div>
      </div>

      {/* Old website content */}
      <div className="bg-[#f5f5f5]">
        {/* Ugly nav */}
        <div className="bg-[#003366] px-4 py-2 flex items-center justify-between">
          <span className="text-white text-[9px] font-bold uppercase tracking-widest">{business}</span>
          <div className="flex gap-3">
            <span className="text-white/70 text-[8px]">Home</span>
            <span className="text-white/70 text-[8px]">About</span>
            <span className="text-white/70 text-[8px]">Contact</span>
          </div>
        </div>

        {/* Ugly hero */}
        <div className="bg-[#eeeeee] px-4 py-5 border-b-2 border-[#003366]">
          <div className="text-[11px] font-bold text-[#003366] uppercase mb-1 tracking-wide">WELCOME TO {business.toUpperCase()}</div>
          <div className="text-[8px] text-[#555] mb-3">We provide quality services in the local area. Please browse our website to find out more information about us and our services.</div>
          <div className="bg-[#003366] text-white text-[7px] font-bold px-3 py-1.5 inline-block">CLICK HERE</div>
        </div>

        {/* Ugly content blocks */}
        <div className="p-3 grid grid-cols-3 gap-2">
          {["Our Services", "About Us", "Contact"].map((s) => (
            <div key={s} className="bg-white border border-[#ddd] p-2 text-center">
              <div className="w-6 h-6 bg-[#003366] mx-auto mb-1.5" />
              <div className="text-[7px] font-bold text-[#333] uppercase">{s}</div>
              <div className="text-[6px] text-[#888] mt-1 leading-tight">Lorem ipsum dolor sit amet consectetur</div>
            </div>
          ))}
        </div>

        {/* Ugly footer */}
        <div className="bg-[#222] px-4 py-2 text-center">
          <span className="text-[#888] text-[7px]">© 2019 {business} | Website by WebMaster Pro | All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}

function AfterMockup({ business, color, tagline }: { business: string; color: string; tagline: string }) {
  return (
    <div className="rounded-lg overflow-hidden border border-[#e0e0e0] shadow-[0_4px_20px_rgba(0,0,0,0.08)] select-none">
      {/* Browser chrome */}
      <div className="bg-[#f3f3f3] px-3 py-2 flex items-center gap-2 border-b border-[#e0e0e0]">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <div className="w-2 h-2 rounded-full bg-[#28c940]" />
        </div>
        <div className="flex-1 bg-white rounded px-2 py-0.5 flex items-center justify-center gap-1 border border-[#e8e8e8]">
          <span className="w-1 h-1 rounded-full bg-green-500 flex-shrink-0" />
          <span className="text-[9px] text-[#999] truncate">{business.toLowerCase().replace(/\s/g, "")}.co.uk</span>
        </div>
      </div>

      {/* New website content */}
      <div className="bg-white">
        {/* Clean nav */}
        <div className="px-4 py-2.5 flex items-center justify-between border-b border-[#f5f5f5] shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded" style={{ background: color }} />
            <span className="text-[9px] font-bold text-[#111]">{business}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-[7px] text-[#666]">Services</span>
            <span className="text-[7px] text-[#666]">Reviews</span>
            <span className="text-[7px] font-bold text-white px-2 py-0.5 rounded-sm" style={{ background: color }}>Get a Quote</span>
          </div>
        </div>

        {/* Clean hero */}
        <div className="px-4 py-5" style={{ background: `linear-gradient(135deg, ${color}18 0%, #ffffff 100%)` }}>
          <div className="flex gap-0.5 mb-1.5">
            {[0,1,2,3,4].map(i => <span key={i} className="text-[#f59e0b] text-[8px]">★</span>)}
            <span className="text-[7px] text-[#888] ml-1">4.9 · 40+ Reviews</span>
          </div>
          <div className="text-[13px] font-black text-[#111] leading-tight mb-1">{business}</div>
          <div className="text-[8px] text-[#555] mb-3 leading-relaxed">{tagline}</div>
          <div className="flex gap-2">
            <div className="text-[7px] font-bold text-white px-3 py-1.5 rounded-sm" style={{ background: color }}>Get a Free Quote</div>
            <div className="text-[7px] border border-[#ddd] text-[#333] px-3 py-1.5 rounded-sm">Our Services</div>
          </div>
        </div>

        {/* Clean service cards */}
        <div className="grid grid-cols-3 gap-1.5 p-3 bg-[#fafafa]">
          {["Service 1", "Service 2", "Service 3"].map((s, i) => (
            <div key={i} className="bg-white rounded-sm p-2 border border-[#f0f0f0] text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <div className="w-4 h-4 rounded-full mx-auto mb-1" style={{ background: color + "25" }}>
                <div className="w-2 h-2 rounded-full mx-auto mt-1" style={{ background: color }} />
              </div>
              <div className="text-[7px] font-semibold text-[#222]">{s}</div>
            </div>
          ))}
        </div>

        {/* Clean footer */}
        <div className="px-4 py-2 bg-[#111] flex items-center justify-between">
          <span className="text-white/40 text-[6.5px]">© 2025 {business}</span>
          <span className="text-[6.5px]" style={{ color: color }}>Derbyshire</span>
        </div>
      </div>
    </div>
  );
}

// ── Case study data ───────────────────────────────────────────────

const cases = [
  {
    business: "Smith's Plumbing",
    location: "Derby",
    industry: "Plumbing & Heating",
    color: "#2563eb",
    tagline: "Fast, reliable plumbing across Derby & Staffordshire. Fixed prices, no call-out fee.",
    beforeIssues: [
      "No mobile-friendly layout",
      "Not showing up on Google",
      "No way for customers to contact online",
      "Site last updated in 2017",
    ],
    afterResults: [
      "Ranks page 1 for 'Derby plumber'",
      "3× more enquiries per week",
      "Works perfectly on mobile",
      "Customers book via contact form 24/7",
    ],
    placeholder: true,
  },
  {
    business: "Derby Garage Services",
    location: "Derby",
    industry: "MOT & Car Repairs",
    color: "#dc2626",
    tagline: "MOT testing, servicing & repairs in Derby. Trusted by local drivers since 2005.",
    beforeIssues: [
      "Outdated design losing customer trust",
      "No online booking or contact form",
      "Competitors ranking above them",
      "No Google Business profile",
    ],
    afterResults: [
      "Google Business profile set up",
      "Online enquiries within first week",
      "Modern design builds instant trust",
      "Outranking 3 local competitors",
    ],
    placeholder: true,
  },
  {
    business: "Oak & Grain Carpentry",
    location: "Swadlincote",
    industry: "Bespoke Joinery",
    color: "#92400e",
    tagline: "Bespoke fitted furniture & joinery across South Derbyshire. Quality craftsmanship guaranteed.",
    beforeIssues: [
      "No website at all",
      "Relying only on word of mouth",
      "Missing out on Google searches",
      "No way to showcase their work",
    ],
    afterResults: [
      "First website live within 2 weeks",
      "Gallery showcasing portfolio work",
      "Appearing on Google for local searches",
      "New customers from outside their area",
    ],
    placeholder: true,
  },
];

// ── Page ──────────────────────────────────────────────────────────

export default function BeforeAfter() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white pt-24 pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-6">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Results</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4 leading-tight">
              Before &amp; After
            </h1>
            <p className="text-[#555] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              See the difference a proper website makes for local businesses. Real results from real clients across Derbyshire and Staffordshire.
            </p>
          </div>

          {/* Coming soon notice */}
          <div className="flex items-center gap-3 bg-gold/8 border border-gold/25 rounded-sm px-5 py-4 max-w-xl mx-auto mb-20">
            <span className="text-gold text-lg flex-shrink-0">✦</span>
            <p className="text-[#7a5c1e] text-sm leading-relaxed">
              <strong>Real case studies coming soon.</strong> The examples below show what&apos;s possible — actual client results will be added as projects go live.
            </p>
          </div>

          {/* Case studies */}
          <div className="space-y-24">
            {cases.map((c, i) => (
              <div key={c.business}>
                {/* Business info */}
                <div className="text-center mb-10">
                  <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold bg-gold/10 px-3 py-1 rounded-full mb-3">
                    {c.industry} · {c.location}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">{c.business}</h2>
                </div>

                {/* Before / After grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-8">
                  {/* Before */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1 1L7 7M7 1L1 7" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <span className="text-sm font-bold text-[#333] uppercase tracking-widest">Before</span>
                    </div>
                    <BeforeMockup business={c.business} />
                    <ul className="mt-5 space-y-2">
                      {c.beforeIssues.map((issue) => (
                        <li key={issue} className="flex items-start gap-2.5 text-sm text-[#666]">
                          <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* After */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path d="M1 3L3 5L7 1" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-sm font-bold text-[#333] uppercase tracking-widest">After</span>
                    </div>
                    <AfterMockup business={c.business} color={c.color} tagline={c.tagline} />
                    <ul className="mt-5 space-y-2">
                      {c.afterResults.map((result) => (
                        <li key={result} className="flex items-start gap-2.5 text-sm text-[#444]">
                          <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {i < cases.length - 1 && (
                  <div className="border-t border-[#ebebeb] mt-8" />
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-24 text-center bg-stone border border-[#e8e8e8] rounded-sm px-8 py-12">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Ready?</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
              Want results like these?
            </h2>
            <p className="text-[#666] text-base max-w-md mx-auto mb-8">
              I&apos;ll build you a free demo first — no payment, no commitment. You only proceed if you love it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-white text-sm font-semibold hover:bg-[#b8912e] transition-colors rounded-sm shadow-[0_4px_14px_rgba(201,168,76,0.3)]"
            >
              Get a Free Demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
