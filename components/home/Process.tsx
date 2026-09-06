"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "IDEA",
    description:
      "Every great project begins with a spark. We listen, research, and strategize to find the perfect approach.",
  },
  {
    number: "02",
    title: "DESIGN",
    description:
      "Where vision takes shape. Our design process blends aesthetics with functionality to create compelling experiences.",
  },
  {
    number: "03",
    title: "EXECUTION",
    description:
      "Ideas become reality. We build, test, and deliver with precision, ensuring every detail meets our standards.",
  },
];

export default function Process() {
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-dark-olive text-cream opacity-0"
      aria-labelledby="process-heading"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-beige/50 uppercase mb-4">
          Our Process
        </p>
        <h2
          id="process-heading"
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          How We Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-6xl md:text-7xl font-bold text-beige/10 absolute -top-4 -left-2">
                {step.number}
              </span>
              <div className="relative pt-12">
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-beige/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-16">
          <div className="w-2 h-2 rounded-full bg-olive" />
          <div className="w-2 h-2 rounded-full bg-rust-gold" />
          <div className="w-2 h-2 rounded-full bg-olive" />
        </div>
      </div>
    </section>
  );
}
