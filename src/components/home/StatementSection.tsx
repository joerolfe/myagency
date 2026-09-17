"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function StatementSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const line = lineRef.current;
    const sub = subRef.current;
    const ctas = ctasRef.current;
    if (!section || !heading || !line || !sub || !ctas) return;

    const ctx = gsap.context(() => {
      const split = new SplitText(heading, { type: "lines", linesClass: "split-line-wrap" });
      document.querySelectorAll(".split-line-wrap").forEach((l) => {
        (l as HTMLElement).style.overflow = "hidden";
      });

      gsap.from(split.lines, {
        y: "100%",
        opacity: 0,
        stagger: 0.15,
        duration: 1.0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      });

      // Gold underline draw — line spans 0→300 in viewBox so length is always 300
      gsap.set(line, { strokeDasharray: 300, strokeDashoffset: 300 });
      gsap.to(line, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
        },
      });

      gsap.from(sub, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
        },
      });

      gsap.from(ctas, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
        },
      });

      return () => split.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-28 md:pt-40 pb-10 md:pb-14 px-6 text-center"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={headingRef}
          className="font-black text-white leading-tight mb-4 whitespace-normal md:whitespace-nowrap"
          style={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: "clamp(18px, 2.1vw, 29px)",
            letterSpacing: "-0.03em",
          }}
        >
          We don&apos;t build average websites. We build{" "}
          <span className="relative inline-block">
            digital assets
            <svg
              className="absolute left-0 -bottom-2 w-full"
              height="6"
              viewBox="0 0 300 6"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <line
                ref={lineRef}
                x1="0"
                y1="3"
                x2="300"
                y2="3"
                stroke="#c9a84c"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          {" "}that convert.
        </h2>

        <p
          ref={subRef}
          className="mt-4 leading-relaxed whitespace-normal md:whitespace-nowrap"
          style={{ color: "#a0a0a0", fontSize: "clamp(13px, 1.05vw, 16px)" }}
        >
          Every site we build is engineered to attract leads, build trust, and
          turn visitors into paying customers — for local businesses ready to grow.
        </p>

        <div ref={ctasRef} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            onClick={(e) => { e.preventDefault(); document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" }); }}
            className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full font-bold text-sm transition-transform duration-200 hover:scale-[1.03]"
            style={{ background: "#c9a84c", color: "#0a0a0a" }}
          >
            See All Projects
            <span
              className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 transition-transform duration-200 group-hover:rotate-45"
              style={{ background: "#0a0a0a" }}
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          <a
            href="#pricing"
            onClick={(e) => { e.preventDefault(); document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" }); }}
            className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full font-bold text-sm border transition-transform duration-200 hover:scale-[1.03]"
            style={{ borderColor: "rgba(255,255,255,0.25)", color: "white" }}
          >
            Our Services
            <span
              className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 border transition-transform duration-200 group-hover:rotate-45"
              style={{ borderColor: "rgba(255,255,255,0.25)" }}
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
