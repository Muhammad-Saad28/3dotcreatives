"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RevealSection from "../ui/RevealSection";

const pillars = [
  { label: "Idea", number: "01" },
  { label: "Design", number: "02" },
  { label: "Execution", number: "03" },
];

export default function AboutHero() {
  return (
    <section
      className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden pt-32 pb-20 bg-[#F4EBDD]"
      aria-labelledby="about-heading"
    >
      {/* Decorative background text */}
      <span
        className="absolute inset-0 flex items-center justify-center font-display font-bold text-dark-olive/[0.03] text-[clamp(8rem,20vw,18rem)] leading-none select-none pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        3DOT
      </span>

      <div className="container-shell w-full relative z-10">
        <RevealSection>
          {/* Label */}
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="h-px w-12 bg-olive/40" />
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-olive">
              About Us
            </p>
            <div className="h-px w-12 bg-olive/40" />
          </div>

          {/* Headline — split for visual emphasis */}
          <h1
            id="about-heading"
            className="font-display text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-dark-olive mb-8 max-w-5xl mx-auto text-center"
            style={{ letterSpacing: "-0.02em" }}
          >
            We build{" "}
            <span className="relative inline-block">
              <span className="relative z-10">digital experiences</span>
              <span
                className="absolute bottom-1 left-0 w-full h-3 bg-olive/15 -rotate-1 z-0"
                aria-hidden="true"
              />
            </span>{" "}
            with purpose.
          </h1>

          {/* Description */}
          <p className="text-dark-olive/65 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-medium text-center mb-14">
            A creative digital agency that transforms ideas into immersive
            experiences. We believe in the power of three.
          </p>

          {/* Three pillars */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {pillars.map((pillar) => (
              <div
                key={pillar.label}
                className="group flex items-center gap-3 px-6 py-3 border border-dark-olive/15 rounded-full hover:bg-dark-olive hover:border-dark-olive transition-all duration-300 cursor-default"
              >
                <span className="font-mono text-[10px] text-dark-olive/40 group-hover:text-cream/50 transition-colors">
                  {pillar.number}
                </span>
                <span className="font-display font-bold text-sm tracking-wide text-dark-olive group-hover:text-cream transition-colors">
                  {pillar.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-dark-olive text-cream text-[11px] font-bold tracking-widest uppercase hover:bg-olive transition-all duration-300 hover:scale-105 active:scale-95 group rounded-full"
            >
              Start a Project
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
