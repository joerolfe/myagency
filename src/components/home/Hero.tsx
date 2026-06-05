"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const eyebrow = eyebrowRef.current;
    const heading = headingRef.current;
    const sub = subRef.current;
    const ctas = ctasRef.current;
    const scrollIndicator = scrollIndicatorRef.current;
    if (!section || !eyebrow || !heading || !sub || !ctas || !scrollIndicator) return;

    const ctx = gsap.context(() => {
      // Parallax on video
      if (video) {
        gsap.to(video, {
          yPercent: 40,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Eyebrow: split by chars
      const eyebrowSplit = new SplitText(eyebrow, { type: "chars" });
      gsap.from(eyebrowSplit.chars, {
        opacity: 0,
        y: 20,
        stagger: 0.03,
        duration: 0.6,
        ease: "power3.out",
        delay: 2.0,
      });

      // Heading: split by words with overflow-hidden line wrappers
      const headingSplit = new SplitText(heading, { type: "lines,words", linesClass: "split-line-wrap" });
      document.querySelectorAll(".split-line-wrap").forEach((line) => {
        (line as HTMLElement).style.overflow = "hidden";
      });
      gsap.from(headingSplit.words, {
        y: "110%",
        opacity: 0,
        stagger: 0.08,
        duration: 1.0,
        ease: "power4.out",
        delay: 2.3,
      });

      // Sub + CTAs
      gsap.from([sub, ctas], {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        delay: 3.0,
      });

      // Scroll indicator
      gsap.from(scrollIndicator, {
        opacity: 0,
        y: 10,
        duration: 0.6,
        ease: "power2.out",
        delay: 3.5,
      });

      gsap.to(scrollIndicator, {
        opacity: 0,
        scrollTrigger: {
          trigger: section,
          start: "20% top",
          end: "40% top",
          scrub: true,
        },
      });

      return () => {
        eyebrowSplit.revert();
        headingSplit.revert();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "100dvh", background: "#0a0a0a" }}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.45 }}
        onError={(e) => { (e.target as HTMLVideoElement).style.display = "none"; }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 60%, rgba(10,10,10,0.95) 100%)" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full">
        <p
          ref={eyebrowRef}
          className="text-[11px] font-bold tracking-[0.35em] uppercase mb-8"
          style={{ color: "#c9a84c" }}
        >
          Web Design &amp; AI Automations
        </p>

        <h1
          ref={headingRef}
          className="font-black text-white leading-none mb-8"
          style={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: "clamp(48px, 8vw, 110px)",
            letterSpacing: "-0.03em",
          }}
        >
          We build websites
          <br />
          that grow your
          <br />
          <span style={{ color: "#c9a84c" }}>business.</span>
        </h1>

        <p
          ref={subRef}
          className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#a0a0a0" }}
        >
          Premium websites and AI automations for local businesses
          ready to dominate their area.
        </p>

        <div ref={ctasRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            onClick={(e) => { e.preventDefault(); document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" }); }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-[13px] tracking-widest uppercase transition-all duration-200 hover:opacity-90"
            style={{ background: "#c9a84c", color: "#0a0a0a" }}
          >
            See Our Work
          </a>
          <a
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-[13px] tracking-widest uppercase border border-white/30 text-white hover:border-white transition-all duration-200"
          >
            Book a Free Call
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">Scroll</span>
        <div className="w-px h-10 overflow-hidden">
          <div
            className="w-full bg-[#c9a84c]"
            style={{
              height: "100%",
              animation: "scrollPulse 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
