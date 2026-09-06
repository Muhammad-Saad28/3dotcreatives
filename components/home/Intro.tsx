"use client";

import { useEffect, useRef } from "react";

export default function Intro() {
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
      className="py-24 md:py-32 px-6 opacity-0"
      aria-labelledby="intro-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] text-olive uppercase mb-8">
          Who We Are
        </p>
        <h2
          id="intro-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-olive leading-tight"
        >
          We are a creative digital agency crafting immersive experiences
          for ambitious brands.
        </h2>
        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-olive" />
          <div className="w-2 h-2 rounded-full bg-rust-gold" />
          <div className="w-2 h-2 rounded-full bg-olive" />
        </div>
      </div>
    </section>
  );
}
