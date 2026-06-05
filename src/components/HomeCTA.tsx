import Link from "next/link";
import { phone } from "@/lib/config";

export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,14,10,0.87)" }} />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 py-32 text-center">
        <p
          className="text-[10px] font-bold tracking-[0.35em] uppercase mb-5"
          style={{ color: "#c9a84c" }}
        >
          No commitment · No upfront cost
        </p>

        <h2
          className="font-black leading-[0.95] tracking-tight text-white mb-7"
          style={{ fontSize: "clamp(40px, 5.5vw, 74px)" }}
        >
          Get your free<br />
          <span style={{ color: "#c9a84c" }}>website demo</span><br />
          today
        </h2>

        <p
          className="text-[15px] leading-relaxed mb-12"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          I&apos;ll build a working demo of your new website before you spend a penny.
          See exactly what you&apos;re getting — then decide.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-[13px] font-black px-9 py-4 rounded transition-all hover:opacity-90"
            style={{ background: "#c9a84c", color: "#111111" }}
          >
            Start Your Free Demo
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <a
            href={phone.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[13px] font-semibold px-9 py-4 rounded border transition-all"
            style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.71 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.71A2 2 0 0 1 22 16.92z"/>
            </svg>
            {phone.display}
          </a>
        </div>

        <p className="text-[11px] mt-10" style={{ color: "rgba(255,255,255,0.2)" }}>
          Free demo · No upfront cost · You own the site
        </p>
      </div>
    </section>
  );
}
