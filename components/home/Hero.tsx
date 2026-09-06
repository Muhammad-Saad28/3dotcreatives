"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const CreativeScene = dynamic(() => import("../three/CreativeScene"), {
  ssr: false,
});

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <CreativeScene
          scrollProgress={scrollProgress}
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-dark-olive leading-[0.95]">
          <span className="block">WE CREATE IN</span>
          <span className="block mt-2">THREE DIMENSIONS.</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-dark-olive/60 max-w-2xl mx-auto leading-relaxed">
          Digital experiences, content and brands built to move people.
        </p>
        <div className="mt-10 flex justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-olive" />
          <div className="w-3 h-3 rounded-full bg-rust-gold" />
          <div className="w-3 h-3 rounded-full bg-olive" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-dark-olive/20 mx-auto" />
        <p className="text-xs tracking-[0.2em] text-dark-olive/40 mt-3">
          SCROLL
        </p>
      </div>
    </section>
  );
}
