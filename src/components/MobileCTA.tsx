"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 md:hidden bg-white border-t border-[#e8e8e8] px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <Link
        href="/contact"
        className="block w-full py-3.5 bg-gold text-white text-sm font-semibold text-center rounded-sm hover:bg-[#b8912e] transition-colors duration-150"
      >
        Get a Free Demo — No Commitment
      </Link>
    </div>
  );
}
