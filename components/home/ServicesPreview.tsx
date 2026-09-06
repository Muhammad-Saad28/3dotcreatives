"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] text-olive uppercase mb-4">
              What We Do
            </p>
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl font-bold text-dark-olive"
            >
              Our Services
            </h2>
          </div>
          <Link
            href="/services"
            className="mt-4 md:mt-0 text-sm tracking-[0.1em] text-olive hover:text-dark-olive transition-colors"
          >
            VIEW ALL →
          </Link>
        </div>

        <div className="space-y-0">
          {services.slice(0, 4).map((service, index) => (
            <div
              key={service.id}
              className="group border-t border-dark-olive/10 py-6 md:py-8 cursor-pointer transition-all duration-300"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              role="article"
              aria-label={service.title}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="text-xs text-olive/50 font-mono">
                    {service.number}
                  </span>
                  <h3
                    className={`text-xl md:text-2xl lg:text-3xl font-bold transition-all duration-300 ${
                      activeIndex === index
                        ? "text-dark-olive"
                        : "text-dark-olive/60"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
                <span
                  className={`text-sm transition-all duration-300 ${
                    activeIndex === index
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                >
                  →
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-dark-olive/60 text-sm md:text-base max-w-2xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
