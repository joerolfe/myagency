"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "WEBSITE\nDESIGN",
    description:
      "Custom-built websites that look premium, load fast, and turn visitors into leads. No templates. No page builders. Built specifically for your business.",
    price: "From £299",
    tag: "Most Popular",
  },
  {
    number: "02",
    title: "AI\nAUTOMATIONS",
    description:
      "Smart automations that handle your follow-ups, review requests, and missed calls — automatically. Set it up once, get results forever.",
    price: "From £25/mo",
    tag: "New",
  },
  {
    number: "03",
    title: "GROWTH\nRETAINER",
    description:
      "Ongoing support, updates, SEO monitoring, and continuous improvements. We stay in your corner so your site keeps growing with your business.",
    price: "From £35/mo",
    tag: null,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tween = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
      return () => tween.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      <div ref={trackRef} className="flex md:flex-nowrap flex-wrap">
        {services.map((service, i) => (
          <div
            key={i}
            className="w-full md:w-screen md:flex-shrink-0 md:h-screen flex flex-col justify-between p-10 md:p-20 border-b md:border-b-0 md:border-r border-white/8"
            style={{ minHeight: "80vmin" }}
          >
            <div className="flex items-start justify-between mb-auto">
              <span
                className="text-[11px] font-bold tracking-[0.3em] text-white/20"
              >
                {service.number}
              </span>
              {service.tag && (
                <span
                  className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 border"
                  style={{ borderColor: "#c9a84c", color: "#c9a84c" }}
                >
                  {service.tag}
                </span>
              )}
            </div>

            <div className="flex-1 flex flex-col justify-center py-12 md:py-0">
              <h3
                className="font-black text-white leading-none mb-8 whitespace-pre-line"
                style={{
                  fontFamily: "var(--font-geist-sans), sans-serif",
                  fontSize: "clamp(48px, 7vw, 96px)",
                  letterSpacing: "-0.04em",
                }}
              >
                {service.title}
              </h3>
              <p className="text-base max-w-md leading-relaxed" style={{ color: "#a0a0a0" }}>
                {service.description}
              </p>
            </div>

            <div className="flex items-end justify-between mt-auto">
              <span
                className="font-black text-2xl md:text-3xl"
                style={{ color: "#c9a84c", fontFamily: "var(--font-geist-sans), sans-serif" }}
              >
                {service.price}
              </span>
              <a
                href="/contact"
                className="group flex items-center gap-2 text-[13px] font-semibold text-white/50 hover:text-white transition-colors"
              >
                Get Started
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile scroll hint — desktop shows panel count */}
      <div className="hidden md:flex absolute bottom-8 right-10 items-center gap-3">
        {services.map((_, i) => (
          <div
            key={i}
            className="w-8 h-px"
            style={{ background: i === 0 ? "#c9a84c" : "rgba(255,255,255,0.2)" }}
          />
        ))}
      </div>
    </section>
  );
}
