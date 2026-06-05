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

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const line = lineRef.current;
    const sub = subRef.current;
    if (!section || !heading || !line || !sub) return;

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

      return () => split.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 md:py-40 px-6 text-center"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          ref={headingRef}
          className="font-black text-white leading-tight mb-4"
          style={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: "clamp(32px, 5vw, 72px)",
            letterSpacing: "-0.03em",
          }}
        >
          We don&apos;t build average websites.
          <br />
          <span className="relative inline-block">
            We build digital assets
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
          className="mt-10 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          style={{ color: "#a0a0a0" }}
        >
          Every site we build is engineered to attract leads, build trust, and
          turn visitors into paying customers — for local businesses ready to grow.
        </p>
      </div>
    </section>
  );
}
