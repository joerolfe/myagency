"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_#e8e8e8]"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-ink"
        >
          Rolfe Brand Scaling
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[#666] hover:text-ink transition-colors duration-150 font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm text-[#666] hover:text-ink transition-colors duration-150 font-medium"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="ml-2 px-5 py-2.5 bg-gold text-white text-sm font-semibold hover:bg-[#b8912e] transition-colors duration-150 rounded-sm"
          >
            Get a Free Demo
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-ink transition-all duration-200 origin-center ${
              menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-ink transition-all duration-200 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-ink transition-all duration-200 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#ebebeb] px-6 py-6 flex flex-col gap-5 shadow-sm">
          {[...navLinks, { label: "Contact", href: "/contact" }].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[#555] hover:text-ink font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-1 px-5 py-3 bg-gold text-white text-sm font-semibold text-center hover:bg-[#b8912e] transition-colors rounded-sm"
            onClick={() => setMenuOpen(false)}
          >
            Get a Free Demo
          </Link>
        </div>
      )}
    </header>
  );
}
