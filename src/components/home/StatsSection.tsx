"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { prefix: "£", value: 0, suffix: "", label: "Upfront cost" },
  { value: 48, suffix: "hr", label: "Demo turnaround" },
  { value: 100, suffix: "%", label: "Free demo, no commitment" },
  { value: 3, suffix: "", label: "Founding spots left" },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = numbersRef.current[i];
        if (!el) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = `${stat.prefix ?? ""}${Math.round(obj.val)}${stat.suffix}`;
          },
        });
      });

      gsap.from(".stat-card", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-6 py-20 md:py-28"
      style={{ background: "#0a0a0a", borderTop: "1px solid rgba(201,168,76,0.2)" }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card text-center">
            <div
              className="font-black leading-none mb-2"
              style={{
                fontFamily: "var(--font-geist-sans), sans-serif",
                fontSize: "clamp(36px, 5vw, 64px)",
                color: "#c9a84c",
                letterSpacing: "-0.03em",
              }}
            >
              <span ref={(el) => { numbersRef.current[i] = el; }}>
                {stat.prefix ?? ""}{0}{stat.suffix}
              </span>
            </div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "#a0a0a0" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
