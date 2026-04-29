import FadeIn from "./FadeIn";
import Link from "next/link";

const badges = ["Local to Derbyshire", "Student Developer", "Fast Turnaround"];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-stone border-t border-[#ebebeb]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Text */}
          <FadeIn className="md:col-span-3">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-2xl bg-gold/15 border border-gold/30 flex items-center justify-center mb-6">
              <span className="font-display text-xl font-bold text-gold">JR</span>
            </div>
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-6">
              About
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-6 leading-tight">
              Built by someone local who actually cares
            </h2>
            <p className="text-[#555] leading-relaxed text-base md:text-lg mb-8">
              I&apos;m Joe, a web developer and IT student based in South
              Derbyshire. I started this to help local businesses that are
              getting left behind online. Every website I build is custom — no
              templates, no shortcuts.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-white text-sm font-semibold hover:bg-[#333] transition-colors rounded-sm"
            >
              Start your free demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </FadeIn>

          {/* Badges */}
          <FadeIn delay={150} className="md:col-span-2 flex flex-col gap-3 md:pt-20">
            {badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-3 px-5 py-4 bg-white border border-[#e8e8e8] rounded-sm shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
              >
                <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                <span className="text-[#444] text-sm font-medium">{badge}</span>
              </div>
            ))}

            {/* Contact info */}
            <div className="mt-2 px-5 py-4 bg-gold/8 border border-gold/25 rounded-sm">
              <p className="text-[#7a5c1e] text-xs font-semibold mb-1">
                South Derbyshire
              </p>
              <p className="text-[#555] text-sm mb-3">
                Serving businesses across Derbyshire &amp; Staffordshire
              </p>
              <a
                href="tel:07857859135"
                className="text-gold text-sm font-semibold hover:underline"
              >
                07857 859135
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
