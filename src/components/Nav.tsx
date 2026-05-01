"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/services", id: "services" },
  { label: "Automations", href: "/automations", id: "automations" },
  { label: "Portfolio", href: "/#portfolio", id: "portfolio" },
  { label: "Process", href: "/#process", id: "process" },
  { label: "About", href: "/#about", id: "about" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setPastHero(y > window.innerHeight * 0.6);
      if (y < 80) setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll);

    const observers: IntersectionObserver[] = [];
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  function isActive(link: { href: string; id: string }) {
    if (pathname === link.href) return true;
    if (pathname === "/" && activeSection === link.id) return true;
    return false;
  }

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex flex-col items-center gap-2 px-4">
      {/* Pill */}
      <div className="bg-[#111]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.35)] rounded-full">
        <div className="flex items-center gap-1 px-3 py-2">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-sm font-bold text-white whitespace-nowrap pr-3 border-r border-white/10 mr-1"
            onClick={(e) => {
              setMenuOpen(false);
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            Rolfe<span className="text-gold">.</span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-xs px-3 py-1.5 rounded-full transition-all duration-200 font-medium whitespace-nowrap ${
                  isActive(link)
                    ? "bg-gold/20 text-gold"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`text-xs px-3 py-1.5 rounded-full transition-all duration-200 font-medium ${
                pathname === "/contact"
                  ? "bg-gold/20 text-gold"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA — slides in after hero */}
          <div
            className={`hidden md:block ml-1 transition-all duration-300 overflow-hidden ${
              pastHero && pathname !== "/contact" ? "max-w-[140px] opacity-100" : "max-w-0 opacity-0"
            }`}
          >
            <Link
              href="/contact"
              className="block text-xs px-4 py-1.5 bg-gold text-white font-semibold rounded-full hover:bg-[#b8912e] transition-colors whitespace-nowrap"
            >
              Get a Free Demo
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2 ml-1">
            <Link
              href="/contact"
              className="text-xs px-3 py-1.5 bg-gold text-white font-semibold rounded-full hover:bg-[#b8912e] transition-colors whitespace-nowrap"
            >
              Free Demo
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="w-7 h-7 flex flex-col items-center justify-center gap-[5px]"
            >
              <span className={`block w-4 h-[1.5px] bg-white transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block w-4 h-[1.5px] bg-white transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-4 h-[1.5px] bg-white transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown — separate element, fades in below pill */}
      <div
        className={`md:hidden w-full max-w-sm bg-[#111]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-200 ${
          menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="p-2 flex flex-col gap-1">
          {[...navLinks, { label: "Contact", href: "/contact", id: "contact" }].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm px-4 py-2.5 rounded-xl transition-all duration-150 font-medium ${
                activeSection === link.id
                  ? "bg-gold/20 text-gold"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
