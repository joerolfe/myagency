"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { phone } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger, SplitText);

function FlipLink({
  label,
  href,
  external,
  style,
  className,
}: {
  label: string;
  href: string;
  external?: boolean;
  style?: React.CSSProperties;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const props = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    className: `relative inline-block overflow-hidden ${className ?? ""}`,
    style: { perspective: "400px", ...style },
  };
  const front = (
    <span className="block" style={{
      transition: "transform 0.45s cubic-bezier(0.76,0,0.24,1), opacity 0.35s ease",
      transform: hovered ? "translateY(-110%) rotateX(25deg)" : "translateY(0) rotateX(0deg)",
      opacity: hovered ? 0 : 1,
      transformOrigin: "center top",
    }}>{label}</span>
  );
  const back = (
    <span className="absolute inset-0 block" style={{
      transition: "transform 0.45s cubic-bezier(0.76,0,0.24,1), opacity 0.35s ease",
      transform: hovered ? "translateY(0) rotateX(0deg)" : "translateY(110%) rotateX(-25deg)",
      opacity: hovered ? 1 : 0,
      transformOrigin: "center bottom",
      color: "#c9a84c",
    }}>{label}</span>
  );
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{front}{back}</a>;
  }
  return <Link href={href} {...props}>{front}{back}</Link>;
}

const pages = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Automations", href: "/automations" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/joerolffe" },
  { label: "WhatsApp", href: "https://wa.me/447857859135" },
  { label: "Email", href: "/contact" },
];

const marqueeItems = [
  { label: "Plumbers" },
  { label: "Landscapers" },
  { label: "Hair Studios" },
  { label: "Auto Garages" },
  { label: "Electricians" },
  { label: "Roofers" },
  { label: "Builders" },
  { label: "Restaurants" },
  { label: "Trades" },
  { label: "Retailers" },
];

function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const clone = track.cloneNode(true) as HTMLDivElement;
    track.parentElement?.appendChild(clone);
    const tween = gsap.to([track, clone], {
      xPercent: -100,
      repeat: -1,
      duration: 30,
      ease: "none",
      modifiers: { xPercent: gsap.utils.unitize((v: number) => v % -100) },
    });
    return () => { tween.kill(); clone.remove(); };
  }, []);

  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-t border-white/6 py-5">
      <div className="flex">
        <div ref={trackRef} className="flex shrink-0 items-center gap-4">
          {items.map((item, i) => (
            <span
              key={i}
              className="whitespace-nowrap px-5 py-2 font-bold text-[13px] tracking-widest uppercase border border-white/10 text-white/40"
              style={{ letterSpacing: "0.15em" }}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CardWithNotch({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [clipPath, setClipPath] = useState("none");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      const r = 44;     // top + side corner radius
      const rb = 14;    // bottom corner radius — small so arch reaches near the edges
      const nw = 130;
      const nh = 38;
      const nx = w / 2;
      const bh = 38;    // arch depth — centre dips close to card bottom edge

      const p = [
        // Top edge with notch
        `M ${r} 0`,
        `L ${nx - nw / 2} 0`,
        `Q ${nx - nw / 4} 0 ${nx - nw / 8} ${nh * 0.6}`,
        `Q ${nx} ${nh} ${nx + nw / 8} ${nh * 0.6}`,
        `Q ${nx + nw / 4} 0 ${nx + nw / 2} 0`,
        `L ${w - r} 0`,
        // Right side — stops at corner level (h - bh)
        `Q ${w} 0 ${w} ${r}`,
        `L ${w} ${h - bh - rb}`,
        `Q ${w} ${h - bh} ${w - rb} ${h - bh}`,
        // Full-width outward (downward) arch — dips to h at centre
        `Q ${nx} ${h + bh} ${rb} ${h - bh}`,
        // Bottom-left corner + left side
        `Q 0 ${h - bh} 0 ${h - bh - rb}`,
        `L 0 ${r}`,
        `Q 0 0 ${r} 0 Z`,
      ].join(" ");

      setClipPath(`path('${p}')`);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ clipPath, background: "#0f0f0f", position: "relative", paddingBottom: 20 }}>
      {children}
    </div>
  );
}

export default function HomeFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const gradient = gradientRef.current;

    const heading = headingRef.current;
    const btn = btnRef.current;
    if (!heading || !btn) return;

    // Scroll-driven gold reveal — dark overlay fades out as user reaches page bottom
    if (gradient && footer) {
      gsap.to(gradient, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: footer,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }

    const ctx = gsap.context(() => {
      const split = new SplitText(heading, { type: "lines", linesClass: "split-line-wrap" });
      document.querySelectorAll(".split-line-wrap").forEach((l) => {
        (l as HTMLElement).style.overflow = "hidden";
      });
      gsap.from(split.lines, {
        y: "100%",
        opacity: 0,
        stagger: 0.12,
        duration: 1.0,
        ease: "power4.out",
        scrollTrigger: { trigger: heading, start: "top 80%" },
      });
      gsap.from(btn, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: btn, start: "top 85%" },
      });

      // Magnetic button
      const onMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3, ease: "power2.out" });
      };
      const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.5)" });
      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);

      return () => {
        split.revert();
        btn.removeEventListener("mousemove", onMove);
        btn.removeEventListener("mouseleave", onLeave);
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} style={{ background: "#c9a84c", position: "relative" }}>

      {/* Dark overlay — solid, fades out on scroll so ALL sides reveal gold together */}
      <div
        ref={gradientRef}
        className="absolute inset-0 pointer-events-none"
        style={{ background: "#0a0a0a" }}
      />

      {/* Card with notch clipped directly into the shape */}
      <div className="relative px-4 md:px-6 pt-4" style={{ zIndex: 1 }}>
        <CardWithNotch>
        <div className="relative flex flex-col px-6 md:px-12 pt-64 md:pt-56 pb-6 overflow-hidden">
        {/* Topographic gold pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Cellipse cx='400' cy='400' rx='380' ry='260' fill='none' stroke='%23c9a84c' stroke-width='0.6'/%3E%3Cellipse cx='400' cy='400' rx='310' ry='200' fill='none' stroke='%23c9a84c' stroke-width='0.6'/%3E%3Cellipse cx='400' cy='400' rx='240' ry='145' fill='none' stroke='%23c9a84c' stroke-width='0.6'/%3E%3Cellipse cx='400' cy='400' rx='170' ry='95' fill='none' stroke='%23c9a84c' stroke-width='0.6'/%3E%3Cellipse cx='400' cy='400' rx='100' ry='50' fill='none' stroke='%23c9a84c' stroke-width='0.6'/%3E%3C/svg%3E")`,
            backgroundSize: "800px 800px",
            backgroundPosition: "center",
            opacity: 0.06,
          }}
        />

        {/* ── MOBILE layout: nav top → headline → CTA ── */}
        <div className="flex flex-col md:hidden gap-8 mt-auto mb-[8px]">

          {/* Pages + Socials side by side */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="flex flex-col gap-1.5">
              <p className="text-[9px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Pages</p>
              {pages.map((p) => (
                <FlipLink key={p.label} label={p.label} href={p.href} className="font-black leading-tight"
                  style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "18px", letterSpacing: "-0.03em", color: "white" }} />
              ))}
            </div>
            <div className="flex flex-col gap-1.5 items-end">
              <p className="text-[9px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Follow On</p>
              {socials.map((s) => (
                <FlipLink key={s.label} label={s.label} href={s.href} external={s.href.startsWith("http")} className="font-black leading-tight"
                  style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "18px", letterSpacing: "-0.03em", color: "white" }} />
              ))}
              <div className="mt-4">
                <p className="text-[9px] font-bold tracking-[0.35em] uppercase mb-1.5 text-right" style={{ color: "rgba(255,255,255,0.3)" }}>Call Us</p>
                <FlipLink label={phone.display} href={phone.href} className="font-black"
                  style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "14px", letterSpacing: "-0.02em", color: "white" }} />
              </div>
            </div>
          </div>

          {/* Big headline in the middle */}
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-6">
            <h2
              ref={headingRef}
              className="font-black text-white leading-none"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(36px, 10vw, 56px)", letterSpacing: "-0.04em" }}
            >
              Ready to grow<br /><span style={{ color: "#c9a84c" }}>your business?</span>
            </h2>
            <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>Free demo · No upfront cost · You own the site</p>
          </div>

          {/* CTA button at the bottom */}
          <a
            ref={btnRef}
            href="/contact"
            className="flex items-center justify-between w-full px-6 py-4 font-black text-[13px] tracking-widest uppercase"
            style={{ background: "#c9a84c", color: "#0a0a0a" }}
          >
            Book a Free Call
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>

          {/* Wordmark */}
          <div className="flex justify-center pb-2">
            <Link href="/" className="font-black text-white/5 leading-none"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(56px, 20vw, 100px)", letterSpacing: "-0.05em" }}>
              Rolfe<span style={{ color: "rgba(201,168,76,0.08)" }}>.</span>
            </Link>
          </div>
        </div>

        {/* ── DESKTOP layout: original 3-col ── */}
        <div className="hidden md:flex flex-col justify-between gap-6">
          <div className="grid md:grid-cols-3 gap-6 items-end mt-auto translate-y-[50px]">
            <div className="flex flex-col gap-1.5 pl-12">
              <p className="text-[9px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Pages</p>
              {pages.map((p) => (
                <FlipLink key={p.label} label={p.label} href={p.href} className="font-black leading-tight"
                  style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(22px, 2.5vw, 36px)", letterSpacing: "-0.03em", color: "white" }} />
              ))}
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-5 pb-8">
              <h2 ref={headingRef} className="font-black text-white leading-none"
                style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(32px, 4.5vw, 60px)", letterSpacing: "-0.04em" }}>
                Ready to grow<br /><span style={{ color: "#c9a84c" }}>your business?</span>
              </h2>
              <a ref={btnRef} href="/contact"
                className="inline-flex items-center gap-3 px-6 py-3 font-bold text-[11px] tracking-widest uppercase transition-all duration-200 hover:opacity-90"
                style={{ background: "#c9a84c", color: "#0a0a0a" }}>
                Book a Free Call
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </a>
              <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>Free demo · No upfront cost · You own the site</p>
            </div>
            <div className="flex flex-col items-end gap-1.5 pr-12">
              <p className="text-[9px] font-bold tracking-[0.35em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>Follow On</p>
              {socials.map((s) => (
                <FlipLink key={s.label} label={s.label} href={s.href} external={s.href.startsWith("http")} className="font-black leading-tight"
                  style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(22px, 2.5vw, 36px)", letterSpacing: "-0.03em", color: "white" }} />
              ))}
              <div className="mt-4">
                <p className="text-[9px] font-bold tracking-[0.35em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>Call Us</p>
                <FlipLink label={phone.display} href={phone.href} className="font-black"
                  style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(16px, 1.8vw, 22px)", letterSpacing: "-0.02em", color: "white" }} />
              </div>
            </div>
          </div>
          <div className="flex justify-center py-4">
            <Link href="/" className="font-black text-white/5 hover:text-white/10 transition-colors duration-300 leading-none"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(70px, 12vw, 160px)", letterSpacing: "-0.05em" }}>
              Rolfe<span style={{ color: "rgba(201,168,76,0.08)" }}>.</span>
            </Link>
          </div>
        </div>

        {/* Marquee strip — inside card at bottom */}
        <Marquee />
        </div>
        </CardWithNotch>
      </div>

      {/* Bottom bar — on the gold strip */}
      <div className="relative flex items-center justify-between px-6 md:px-8 py-2" style={{ zIndex: 1 }}>
        <p className="text-[11px] font-semibold tracking-wide" style={{ color: "rgba(0,0,0,0.45)" }}>
          &copy; {new Date().getFullYear()} Joseph Rolfe · All rights reserved
        </p>
        <div className="flex items-center gap-8">
          <Link
            href="/privacy"
            className="text-[11px] font-black tracking-[0.2em] uppercase hover:opacity-60 transition-opacity"
            style={{ color: "#0a0a0a" }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact"
            className="text-[11px] font-black tracking-[0.2em] uppercase hover:opacity-60 transition-opacity"
            style={{ color: "#0a0a0a" }}
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>


  );
}
