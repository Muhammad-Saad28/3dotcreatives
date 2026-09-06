"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const CreativeScene = dynamic(() => import("../three/CreativeScene"), {
  ssr: false,
});

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden opacity-0 pt-28 pb-16"
      aria-labelledby="about-heading"
    >
      {/* 3D Scene background */}
      <div className="absolute inset-0 z-0">
        <CreativeScene separated className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-olive uppercase font-semibold mb-6">
          About Us
        </p>
        <h1
          id="about-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark-olive leading-[1.05] tracking-tight"
        >
          WHO WE ARE
        </h1>
        <p className="mt-8 text-base sm:text-lg md:text-xl text-dark-olive/60 max-w-2xl mx-auto leading-relaxed">
          A creative digital agency that transforms ideas into immersive
          experiences. We believe in the power of three: Idea, Design,
          Execution.
        </p>
        <div className="mt-10 flex justify-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-olive" />
          <div className="w-2.5 h-2.5 rounded-full bg-rust-gold" />
          <div className="w-2.5 h-2.5 rounded-full bg-olive" />
        </div>
      </div>
    </section>
  );
}
