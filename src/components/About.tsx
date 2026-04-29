import FadeIn from "./FadeIn";
import Link from "next/link";

const values = [
  {
    title: "Not a big agency",
    body: "You deal directly with me — no account managers, no handoffs, no delays.",
  },
  {
    title: "Local to you",
    body: "Based in South Derbyshire. Happy to meet in person or jump on a call.",
  },
  {
    title: "Always custom",
    body: "Every site is built from scratch around your business. No templates, ever.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-ink border-t border-white/5 min-h-screen flex flex-col justify-center scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

          {/* Left — avatar card */}
          <FadeIn>
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-2xl scale-95" />

              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-gold/20 border-2 border-gold/40 flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-gold">JR</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-green-500 rounded-full border-2 border-ink flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold">✓</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-1">Joe Rolfe</h3>
                <p className="text-gold text-sm font-semibold mb-4">Web Developer · South Derbyshire</p>

                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  &ldquo;I built this to give local businesses the same quality websites big brands have — without the agency price tag.&rdquo;
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 w-full border-t border-white/10 pt-6">
                  {[
                    { value: "~2wk", label: "Turnaround" },
                    { value: "£0", label: "Upfront" },
                    { value: "100%", label: "Custom" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-display text-xl font-bold text-gold">{s.value}</div>
                      <div className="text-white/40 text-[10px] font-medium uppercase tracking-wide mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Phone */}
                <a
                  href="tel:07857859135"
                  className="mt-6 flex items-center gap-2 text-white/50 text-sm hover:text-white/80 transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M12.5 9.8l-2-1.5a1 1 0 00-1.2.1l-.9.9a7.2 7.2 0 01-3.7-3.7l.9-.9a1 1 0 00.1-1.2L4.2 1.5A1 1 0 003 1.1L1.5 2a1 1 0 00-.5.9C1 9 5 13 12.1 13a1 1 0 00.9-.5l.9-1.5a1 1 0 00-.4-1.2z" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                  07857 859135
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right — text + values */}
          <FadeIn delay={120}>
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-5">
              About
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Built by someone local who actually cares
            </h2>
            <p className="text-white/55 leading-relaxed text-base mb-10">
              I&apos;m Joe — a web developer and IT student based in South Derbyshire.
              I started Rolfe Brand Scaling to help local businesses get online properly,
              without being overcharged by agencies or left confused by DIY tools.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-gold/15 border border-gold/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold text-xs font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-0.5">{v.title}</p>
                    <p className="text-white/45 text-sm leading-relaxed">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white text-sm font-semibold hover:bg-[#b8912e] transition-colors rounded-sm shadow-[0_4px_14px_rgba(201,168,76,0.3)]"
            >
              Start your free demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M8 2L13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
