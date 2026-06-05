"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const ITEMS = [
  "WEB DESIGN",
  "AI AUTOMATIONS",
  "LOCAL BUSINESS GROWTH",
  "PREMIUM BUILDS",
  "FAST DELIVERY",
  "RESULTS DRIVEN",
];

export default function MarqueeTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const clone = track.cloneNode(true) as HTMLDivElement;
    track.parentElement?.appendChild(clone);

    tweenRef.current = gsap.to([track, clone], {
      xPercent: -100,
      repeat: -1,
      duration: 30,
      ease: "none",
      modifiers: {
        xPercent: gsap.utils.unitize((v: number) => v % -100),
      },
    });

    const slow = () => tweenRef.current?.timeScale(0.3);
    const normal = () => tweenRef.current?.timeScale(1);

    const container = track.parentElement;
    container?.addEventListener("mouseenter", slow);
    container?.addEventListener("mouseleave", normal);

    return () => {
      tweenRef.current?.kill();
      container?.removeEventListener("mouseenter", slow);
      container?.removeEventListener("mouseleave", normal);
      clone.remove();
    };
  }, []);

  const items = [...ITEMS, ...ITEMS];

  return (
    <div
      className="overflow-hidden py-4 border-y border-white/8"
      style={{ background: "#111" }}
    >
      <div className="flex">
        <div ref={trackRef} className="flex shrink-0 items-center">
          {items.map((item, i) => (
            <span
              key={i}
              className="text-[11px] font-bold tracking-[0.25em] uppercase whitespace-nowrap px-8"
              style={{ color: "#c9a84c" }}
            >
              {item}
              <span className="ml-8 text-white/20">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
