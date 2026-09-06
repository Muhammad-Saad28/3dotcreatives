"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolio";

export default function PortfolioPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 opacity-0"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] text-olive uppercase mb-4">
              Our Work
            </p>
            <h2
              id="portfolio-heading"
              className="text-3xl md:text-4xl font-bold text-dark-olive"
            >
              Selected Projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="mt-4 md:mt-0 text-sm tracking-[0.1em] text-olive hover:text-dark-olive transition-colors"
          >
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.slice(0, 3).map((item, index) => (
            <article
              key={item.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-beige/30 mb-4">
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-olive/20 to-rust-gold/20 transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-105" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex gap-2 opacity-30">
                    <div className="w-4 h-4 rounded-full bg-dark-olive" />
                    <div className="w-3 h-3 rounded-full bg-rust-gold mt-0.5" />
                    <div className="w-2.5 h-2.5 rounded-full bg-dark-olive mt-0.5" />
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-olive/60 mb-1">{item.category}</p>
                  <h3 className="text-lg font-bold text-dark-olive group-hover:text-olive transition-colors">
                    {item.title}
                  </h3>
                </div>
                <span className="text-xs text-dark-olive/40 font-mono">
                  {item.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
