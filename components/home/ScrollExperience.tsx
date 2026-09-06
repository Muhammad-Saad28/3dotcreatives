"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSections from "./ScrollSections";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SECTION_COUNT = 10;

interface ScrollExperienceProps {
  activeSection: number;
  /** Normalised 0→1 progress — forwarded to ScrollSections for sync'd text */
  scrollProgress: number;
  onProgressChange: (progress: number, section: number) => void;
}

export default function ScrollExperience({
  activeSection,
  scrollProgress,
  onProgressChange,
}: ScrollExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.45,
        onUpdate: (self) => {
          const prog = self.progress;
          const sec = Math.min(SECTION_COUNT - 1, Math.floor(prog * SECTION_COUNT));
          onProgressChange(prog, sec);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onProgressChange]);

  const isServiceSection = activeSection >= 1 && activeSection <= 7;

  return (
    <div ref={containerRef} className="relative w-full min-h-screen">
      {/* Minimal service progress indicator — only during service sections */}
      {isServiceSection && (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-2">
          {/* Section number */}
          <span className="text-xs font-mono text-rust-gold font-bold tracking-widest" style={{ writingMode: "vertical-rl" }}>
            {String(activeSection).padStart(2, "0")} / 07
          </span>
          {/* Progress dots */}
          <div className="flex flex-col gap-1.5 mt-3">
            {[1,2,3,4,5,6,7].map((i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === activeSection
                    ? "w-1.5 h-4 bg-rust-gold"
                    : i < activeSection
                    ? "w-1 h-1 bg-olive/60"
                    : "w-1 h-1 bg-beige/40"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Editorial Chapters HTML Layer */}
      <ScrollSections
        currentSection={activeSection}
        scrollProgress={scrollProgress}
      />
    </div>
  );
}
