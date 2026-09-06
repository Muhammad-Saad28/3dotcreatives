"use client";

import { useEffect, useRef } from "react";

const principles = [
  {
    number: "01",
    title: "IDEA",
    description:
      "Every project starts with understanding. We dive deep into your brand, audience, and goals to discover the perfect approach.",
  },
  {
    number: "02",
    title: "DESIGN",
    description:
      "Where vision becomes form. Our design process balances aesthetics and function, creating experiences that captivate and convert.",
  },
  {
    number: "03",
    title: "EXECUTION",
    description:
      "Precision in every detail. We build with care, test rigorously, and deliver with excellence. No shortcuts.",
  },
];

const reasons = [
  "We treat every project as our own",
  "Transparent communication throughout",
  "Results-driven creative solutions",
  "Long-term partnerships, not transactions",
  "Deep expertise across all digital channels",
];

export default function Philosophy() {
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
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 lg:px-8 opacity-0"
      aria-labelledby="philosophy-heading"
    >
      <div className="max-w-6xl mx-auto">

        {/* Philosophy Header */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.3em] text-olive uppercase font-semibold mb-4">
            Our Philosophy
          </p>
          <h2
            id="philosophy-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-olive leading-tight max-w-3xl"
          >
            We believe great work happens at the intersection of creativity and
            strategy.
          </h2>
        </div>

        {/* IDEA / DESIGN / EXECUTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-24">
          {principles.map((principle) => (
            <div key={principle.number} className="relative">
              <span className="text-5xl md:text-6xl font-bold text-dark-olive/[0.04] absolute -top-2 left-0 select-none">
                {principle.number}
              </span>
              <div className="relative pt-10">
                <h3 className="text-xl font-bold text-dark-olive mb-3 tracking-wide">
                  {principle.title}
                </h3>
                <p className="text-dark-olive/55 text-[15px] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* WHY 3DOTCREATIVES */}
        <div className="bg-dark-olive rounded-2xl p-8 md:p-12 lg:p-16">
          <p className="text-xs tracking-[0.3em] text-beige/40 uppercase font-semibold mb-4">
            Why Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-10">
            WHY 3DOTCREATIVES
          </h2>
          <ul className="space-y-5 max-w-2xl">
            {reasons.map((reason, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="flex gap-1.5 mt-1.5 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-olive" />
                  <div className="w-1.5 h-1.5 rounded-full bg-rust-gold" />
                  <div className="w-1.5 h-1.5 rounded-full bg-olive" />
                </div>
                <span className="text-beige/75 text-base">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Process */}
        <div className="mt-24">
          <p className="text-xs tracking-[0.3em] text-olive uppercase font-semibold mb-4">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-olive mb-12">
            PROCESS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {["Discovery", "Strategy", "Creation", "Launch"].map(
              (step, index) => (
                <div key={step}>
                  <div className="text-3xl font-bold text-dark-olive/10 mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-base font-bold text-dark-olive">{step}</h3>
                  <div className="w-full h-px bg-dark-olive/10 mt-4" />
                </div>
              )
            )}
          </div>
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
