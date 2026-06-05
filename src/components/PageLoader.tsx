"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageLoader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const leftRef   = useRef<HTMLDivElement>(null);
  const rightRef  = useRef<HTMLDivElement>(null);
  const logoRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const left    = leftRef.current;
    const right   = rightRef.current;
    const logo    = logoRef.current;
    if (!overlay || !left || !right || !logo) return;

    document.body.style.overflow = "hidden";

    // Centre the logo via GSAP so x/y start at 0 and can be animated cleanly
    gsap.set(logo, { xPercent: -50, yPercent: -50 });

    // Hide the real nav logo so we can crossfade into it
    const navLogoEl = document.querySelector("[data-nav-logo]") as HTMLElement | null;
    if (navLogoEl) gsap.set(navLogoEl, { opacity: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        overlay.style.display = "none";
        // Ensure nav logo is fully visible after overlay gone
        if (navLogoEl) gsap.set(navLogoEl, { opacity: 1 });
      },
    });

    tl.set(overlay, { display: "flex" })
      .fromTo(logo,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
      )
      // Hold a beat then fly to nav logo
      .to({}, { duration: 0.35 })
      .call(() => {
        if (!navLogoEl) return;

        const navRect  = navLogoEl.getBoundingClientRect();
        const logoRect = logo.getBoundingClientRect();

        const dx    = (navRect.left  + navRect.width  / 2) - (logoRect.left  + logoRect.width  / 2);
        const dy    = (navRect.top   + navRect.height / 2) - (logoRect.top   + logoRect.height / 2);
        const scale = navRect.height / logoRect.height;

        // Fly to nav position
        tl.to(logo, { x: dx, y: dy, scale, duration: 0.65, ease: "power3.inOut" })
          // Crossfade: loader logo out, nav logo in simultaneously
          .to(logo,       { opacity: 0, duration: 0.2, ease: "power2.in"  }, "-=0.18")
          .to(navLogoEl,  { opacity: 1, duration: 0.2, ease: "power2.out" }, "<")
          // Panels split
          .to([left, right], {
            xPercent: (i) => (i === 0 ? -100 : 100),
            duration: 0.75,
            ease: "power3.inOut",
          }, "-=0.55");
      });
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[99999]"
      style={{ display: "flex" }}
    >
      <div ref={leftRef}  className="absolute inset-y-0 left-0  w-1/2 bg-[#0a0a0a]" />
      <div ref={rightRef} className="absolute inset-y-0 right-0 w-1/2 bg-[#0a0a0a]" />

      {/* Logo — positioned at 50/50 so GSAP can fly it to the nav */}
      <div
        ref={logoRef}
        className="absolute z-10"
        style={{ top: "50%", left: "50%", opacity: 0, whiteSpace: "nowrap" }}
      >
        <span
          style={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: "clamp(40px, 8vw, 96px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "#fff",
            display: "block",
          }}
        >
          Rolfe<span style={{ color: "#c9a84c" }}>.</span>
        </span>
      </div>
    </div>
  );
}
