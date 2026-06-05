"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.style.cursor = "none";

    const xDot = gsap.quickTo(dot, "x", { duration: 0.08, ease: "none" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.08, ease: "none" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });

    const move = (e: MouseEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const onEnter = () => {
      gsap.to(ring, { scale: 2, backgroundColor: "rgba(201,168,76,0.2)", borderColor: "transparent", duration: 0.25 });
      gsap.to(dot, { scale: 0, duration: 0.2 });
    };

    const onLeave = () => {
      gsap.to(ring, { scale: 1, backgroundColor: "transparent", borderColor: "rgba(201,168,76,0.8)", duration: 0.25 });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    const bindInteractives = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    window.addEventListener("mousemove", move);
    bindInteractives();

    const observer = new MutationObserver(bindInteractives);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-[#c9a84c]"
        style={{ transform: "translate(-50%,-50%)" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-10 h-10 rounded-full border border-[rgba(201,168,76,0.8)]"
        style={{ transform: "translate(-50%,-50%)" }}
      />
    </>
  );
}
