"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RevealSection from "../ui/RevealSection";

const pillars = [
  {
    label: "Idea",
    number: "01",
    description: "Every great project begins with a spark. We listen, research, and strategize to find the perfect approach.",
    theme: "light"
  },
  {
    label: "Design",
    number: "02",
    description: "Where vision takes shape. Our design process blends aesthetics with functionality to create compelling experiences.",
    theme: "dark"
  },
  {
    label: "Execution",
    number: "03",
    description: "Ideas become reality. We build, test, and deliver with precision, ensuring every detail meets our standards.",
    theme: "accent"
  },
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

          {/* Three pillars - Expanding Flex Accordion */}
          <div className="flex flex-col md:flex-row w-full min-h-[200px] md:h-[320px] gap-4 max-w-6xl mx-auto mb-16">
            {pillars.map((pillar) => {
              const isLight = pillar.theme === "light";
              const bgClass = isLight ? "bg-[#efe5d6] border-beige/40" : pillar.theme === "dark" ? "bg-dark-olive border-dark-olive" : "bg-olive border-olive";
              const textClass = isLight ? "text-dark-olive" : "text-cream";
              const textMutedClass = isLight ? "text-dark-olive/70" : "text-cream/70";
              const numClass = isLight ? "text-dark-olive/5 group-hover:text-dark-olive/10" : "text-cream/5 group-hover:text-cream/10";
              const borderClass = isLight ? "border-dark-olive/10" : "border-cream/10";
              const iconBgClass = isLight ? "bg-dark-olive/10" : "bg-cream/10";

              return (
                <div
                  key={pillar.label}
                  className={`group relative flex-1 hover:flex-[2] md:hover:flex-[2.5] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] rounded-3xl overflow-hidden flex flex-col justify-end p-6 md:p-8 cursor-default border ${bgClass}`}
                >
                  {/* Large Background Number */}
                  <div className={`absolute top-4 right-6 font-display text-6xl lg:text-7xl font-bold transition-colors duration-700 select-none ${numClass}`}>
                    {pillar.number}
                  </div>

                  <div className="relative z-10 w-full overflow-hidden">
                    <div className="flex items-end justify-between w-full min-w-[120px]">
                      <h3 className={`font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-2 transform origin-left transition-transform duration-700 ${textClass}`}>
                        {pillar.label}
                      </h3>
                      {/* Arrow icon */}
                      <div className={`shrink-0 w-8 h-8 rounded-full ${iconBgClass} flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:-rotate-45 transition-all duration-700 mb-2 transform translate-x-4 group-hover:translate-x-0`}>
                        <ArrowRight size={16} className="text-rust-gold" />
                      </div>
                    </div>

                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                      <div className="overflow-hidden">
                        <p className={`text-xs lg:text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150 ${textMutedClass}`}>
                          <span className={`block pt-3 border-t ${borderClass} mt-2 w-full md:w-[260px] lg:w-[280px]`}>
                            {pillar.description}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
