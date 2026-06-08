"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

function FlipLink({
  label,
  href,
  onClick,
  target,
  rel,
  style,
}: {
  label: string;
  href: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-block overflow-hidden"
      style={{ perspective: "400px", ...style }}
    >
      {/* Front face */}
      <span
        className="block"
        style={{
          transition: "transform 0.45s cubic-bezier(0.76,0,0.24,1), opacity 0.35s ease",
          transform: hovered ? "translateY(-110%) rotateX(25deg)" : "translateY(0) rotateX(0deg)",
          opacity: hovered ? 0 : 1,
          transformOrigin: "center top",
        }}
      >
        {label}
      </span>
      {/* Back face — same text, gold */}
      <span
        className="absolute inset-0 block"
        style={{
          transition: "transform 0.45s cubic-bezier(0.76,0,0.24,1), opacity 0.35s ease",
          transform: hovered ? "translateY(0) rotateX(0deg)" : "translateY(110%) rotateX(-25deg)",
          opacity: hovered ? 1 : 0,
          transformOrigin: "center bottom",
          color: "#c9a84c",
        }}
      >
        {label}
      </span>
    </a>
  );
}

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Web Design", href: "/services" },
  { label: "Automations", href: "/automations" },
  { label: "Portfolio", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const servicePanels = [
  { number: "01", title: "Website\nDesign", desc: "Custom-built sites that convert visitors into customers.", price: "From £299", href: "/services" },
  { number: "02", title: "AI\nAutomations", desc: "Smart systems that handle follow-ups and reviews automatically.", price: "From £25/mo", href: "/automations" },
  { number: "03", title: "Growth\nRetainer", desc: "Ongoing support, SEO and optimisation to keep growing.", price: "From £35/mo", href: "/services" },
  { number: "04", title: "Free\nDemo", desc: "See your new website before you spend a single penny.", price: "£0 upfront", href: "/contact" },
];

function TiltPanel({ panel }: { panel: typeof servicePanels[0] }) {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <a
      ref={ref}
      href={panel.href}
      className="relative flex flex-col justify-between p-5 overflow-hidden flex-1 min-h-0 transition-transform duration-300 ease-out"
      style={{ background: "#111", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Gold shimmer */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.08), transparent 70%)" }} />

      <span className="text-[10px] font-bold tracking-[0.3em] text-white/20">{panel.number}</span>

      <div>
        <h3
          className="font-black text-white leading-none mb-2 whitespace-pre-line"
          style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(20px, 2.2vw, 32px)", letterSpacing: "-0.03em" }}
        >
          {panel.title}
        </h3>
        <p className="text-[11px] leading-relaxed mb-4" style={{ color: "#a0a0a0" }}>{panel.desc}</p>
        <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: "#c9a84c" }}>{panel.price}</span>
      </div>
    </a>
  );
}

export default function HomeNav() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const moveLeftRef = useRef<((v: number) => void) | null>(null);
  const moveRightRef = useRef<((v: number) => void) | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (leftColRef.current)  moveLeftRef.current  = gsap.quickTo(leftColRef.current,  "y", { duration: 0.9, ease: "power3.out" });
    if (rightColRef.current) moveRightRef.current = gsap.quickTo(rightColRef.current, "y", { duration: 0.9, ease: "power3.out" });
  }, []);

  const handleOverlayMouseMove = (e: React.MouseEvent) => {
    const norm = e.clientY / window.innerHeight - 0.5;
    moveLeftRef.current?.(norm * 80);
    moveRightRef.current?.(norm * -80);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.split("#")[0]) && href.split("#")[0] !== "/";
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const links = linksRef.current;
    const panels = panelsRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;
    if (!overlay || !links || !panels) return;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      gsap.set(overlay, { display: "flex" });
      gsap.to(overlay, { opacity: 1, duration: 0.35, ease: "power2.out" });
      gsap.from(Array.from(panels.children).flatMap(c => Array.from(c.children)), {
        opacity: 0,
        y: 20,
        stagger: 0.06,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.05,
      });
      gsap.from(Array.from(links.children), {
        x: 40,
        opacity: 0,
        stagger: 0.07,
        duration: 0.55,
        ease: "power3.out",
        delay: 0.1,
      });

    } else {
      document.body.style.overflow = "";
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => gsap.set(overlay, { display: "none" }),
      });
    }
  }, [menuOpen]);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.includes("#") ? "#" + href.split("#")[1] : null;
    if (!hash) return;
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* Top nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-6 md:px-8 py-5">
        <Link
          href="/"
          data-nav-logo
          className="font-black text-white leading-none"
          style={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: "clamp(20px, 2.5vw, 26px)",
            letterSpacing: "-0.04em",
          }}
        >
          Rolfe<span style={{ color: "#c9a84c" }}>.</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="group hidden sm:inline-flex relative items-center gap-2 px-5 py-2.5 text-[12px] font-bold tracking-widest uppercase overflow-hidden border border-[#c9a84c]"
            style={{ color: "#c9a84c" }}
          >
            <span className="absolute inset-0 bg-[#c9a84c] -translate-y-full group-hover:translate-y-0 transition-transform duration-[650ms] ease-in-out" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-[650ms]">Get a Free Demo</span>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="group relative flex flex-col items-center justify-center gap-[5px] w-11 h-11 border overflow-hidden transition-colors duration-200"
            style={{ borderColor: menuOpen ? "#c9a84c" : "rgba(255,255,255,0.25)" }}
          >
            {/* Gold fill that drops from top */}
            <span className="absolute inset-0 bg-[#c9a84c] -translate-y-full group-hover:translate-y-0 transition-transform duration-[650ms] ease-in-out" />
            <span className="relative block w-5 h-px bg-white transition-all duration-200 origin-center z-10" style={{ transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none" }} />
            <span className="relative block w-5 h-px bg-white transition-all duration-200 z-10" style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="relative block w-5 h-px bg-white transition-all duration-200 origin-center z-10" style={{ transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Full-screen overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[999] flex"
        style={{ background: "#0a0a0a", display: "none", opacity: 0 }}
        onMouseMove={handleOverlayMouseMove}
      >
        {/* Left: staggered 2-column panels */}
        <div
          ref={panelsRef}
          className="hidden md:flex w-[45%] gap-3 p-4"
        >
          {/* Left column — flush to top */}
          <div ref={leftColRef} className="flex flex-col gap-3 flex-1">
            <TiltPanel key={servicePanels[0].number} panel={servicePanels[0]} />
            <TiltPanel key={servicePanels[2].number} panel={servicePanels[2]} />
          </div>
          {/* Right column — offset down by ~70px to stagger */}
          <div ref={rightColRef} className="flex flex-col gap-3 flex-1" style={{ marginTop: 70 }}>
            <TiltPanel key={servicePanels[1].number} panel={servicePanels[1]} />
            <TiltPanel key={servicePanels[3].number} panel={servicePanels[3]} />
          </div>
        </div>

        {/* Right: nav links + socials — all centred */}
        <div className="flex-1 flex flex-col items-center justify-center px-10 md:px-14 gap-1">
          <div ref={linksRef} className="flex flex-col items-center gap-1 w-full">
            {menuLinks.map((l) => {
              const active = isActive(l.href);
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => { handleAnchor(e, l.href); setMenuOpen(false); }}
                  className="font-black leading-tight transition-colors duration-150 inline-block relative"
                  onMouseEnter={() => setHoveredLink(l.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    fontFamily: "var(--font-geist-sans), sans-serif",
                    fontSize: "clamp(28px, 4vw, 54px)",
                    letterSpacing: "-0.04em",
                    color: !active && hoveredLink === l.label ? "#c9a84c" : active ? "rgba(255,255,255,0.4)" : "white",
                  }}
                >
                  {l.label}
                </a>
              );
            })}

            {/* Divider */}
            <div className="w-24 h-px my-4" style={{ background: "rgba(255,255,255,0.08)" }} />

            {/* Socials — horizontal row with flip effect */}
            <div className="flex items-center gap-8 flex-wrap justify-center">
              {[
                { label: "Instagram", href: "https://instagram.com/joerolffe" },
                { label: "WhatsApp", href: "https://wa.me/447857859135" },
                { label: "Email", href: "/contact" },
              ].map((s) => (
                <FlipLink
                  key={s.label}
                  label={s.label}
                  href={s.href}
                  onClick={() => setMenuOpen(false)}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    fontFamily: "var(--font-geist-sans), sans-serif",
                    fontSize: "clamp(18px, 2.5vw, 32px)",
                    letterSpacing: "-0.04em",
                    fontWeight: 900,
                    color: "rgba(255,255,255,0.3)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
