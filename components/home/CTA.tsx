"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CTA() {
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
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-40 px-6 opacity-0"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] text-olive uppercase mb-8">
          Let&apos;s Create Together
        </p>
        <h2
          id="cta-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-olive leading-tight"
        >
          Ready to bring your vision to life?
        </h2>
        <p className="mt-6 text-lg text-dark-olive/60 max-w-xl mx-auto">
          We partner with ambitious brands to create digital experiences that
          make an impact.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-dark-olive text-cream text-sm tracking-[0.1em] rounded-full transition-all duration-300 hover:bg-olive"
          >
            START A PROJECT
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 border border-dark-olive/20 text-dark-olive text-sm tracking-[0.1em] rounded-full transition-all duration-300 hover:border-dark-olive/40"
          >
            VIEW OUR WORK
          </Link>
        </div>
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-olive" />
          <div className="w-2 h-2 rounded-full bg-rust-gold" />
          <div className="w-2 h-2 rounded-full bg-olive" />
        </div>
      </div>
    </section>
  );
}
