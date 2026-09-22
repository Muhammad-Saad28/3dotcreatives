"use client";

import { Lightbulb, Palette, Rocket } from "lucide-react";
import RevealSection from "../ui/RevealSection";

const principles = [
  {
    number: "01",
    title: "IDEA",
    icon: Lightbulb,
    description:
      "Every project starts with understanding. We dive deep into your brand, audience, and goals to discover the perfect approach.",
  },
  {
    number: "02",
    title: "DESIGN",
    icon: Palette,
    description:
      "Where vision becomes form. Our design process balances aesthetics and function, creating experiences that captivate and convert.",
  },
  {
    number: "03",
    title: "EXECUTION",
    icon: Rocket,
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

const processSteps = [
  { step: "Discovery", desc: "Understanding your brand, goals, and audience to find the perfect approach." },
  { step: "Strategy", desc: "Crafting a roadmap that aligns creativity with measurable business outcomes." },
  { step: "Creation", desc: "Bringing ideas to life with precision design and flawless development." },
  { step: "Launch", desc: "Delivering with excellence and optimizing for real-world results." },
];

export default function Philosophy() {
  return (
    <section
      className="py-24 md:py-32 bg-[#FDF6E3]"
      aria-labelledby="philosophy-heading"
    >
      <div className="container-shell max-w-6xl">

        {/* Philosophy Header */}
        <RevealSection className="mb-20 text-center">
          <p className="section-label">
            Our Philosophy
          </p>
          <h2
            id="philosophy-heading"
            className="font-display text-4xl lg:text-5xl font-bold text-dark-olive leading-tight max-w-4xl mx-auto"
          >
            We believe great work happens at the intersection of creativity and strategy.
          </h2>
        </RevealSection>

        {/* IDEA / DESIGN / EXECUTION — service card style */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 mb-24">
          {principles.map((principle, i) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.number}
                className="group relative flex flex-col gap-4 p-6 lg:p-8 rounded-2xl bg-[#efe5d6]/60 border border-beige/30 hover:bg-[#efe5d6]/90 hover:shadow-lg hover:border-beige/60 transition-all duration-300"
                style={{
                  animation: `serviceFloat 4s ease-in-out ${i * 0.3}s infinite`,
                }}
              >
                {/* Icon circle */}
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-dark-olive flex items-center justify-center text-cream group-hover:bg-olive group-hover:scale-110 transition-all duration-300">
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="font-display font-bold text-dark-olive text-base lg:text-lg mb-2 group-hover:text-olive transition-colors duration-300">
                    {principle.title}
                  </h3>
                  <p className="text-dark-olive/50 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* WHY 3DOTCREATIVES */}
        <RevealSection>
          <div className="bg-dark-olive rounded-2xl p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="lg:w-1/2">
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-cream/40 mb-4">
                Why Us
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
                More Than Just An Agency.
              </h2>
              <p className="text-cream/60 text-sm leading-relaxed mb-8">
                We don&apos;t just deliver services, we build long-term partnerships. When you work with us, you get a dedicated team that cares about your success as much as you do.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <ul className="space-y-6">
                {reasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="flex mt-2 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-cream group-hover:scale-150 transition-transform duration-300" />
                    </div>
                    <span className="text-cream/80 text-sm md:text-base font-medium group-hover:text-cream transition-colors duration-300">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealSection>

        {/* Process */}
        <RevealSection className="mt-32">
          <div className="text-center mb-16">
            <p className="section-label">
              Our Process
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-olive">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((item, index) => (
              <div
                key={item.step}
                className="group cursor-default relative flex flex-col items-center text-center p-6 rounded-2xl bg-[#efe5d6]/60 border border-beige/30 hover:bg-dark-olive hover:border-dark-olive transition-all duration-500"
              >
                {/* Number */}
                <div className="w-14 h-14 rounded-full bg-dark-olive/10 flex items-center justify-center mb-4 group-hover:bg-cream/20 transition-colors duration-500">
                  <span className="font-display text-lg font-bold text-dark-olive/40 group-hover:text-cream transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Step name — always visible */}
                <h3 className="font-display text-base lg:text-lg font-bold text-dark-olive group-hover:text-cream transition-colors duration-500">
                  {item.step}
                </h3>

                {/* Description — revealed on hover */}
                <p className="text-dark-olive/0 group-hover:text-cream/70 text-sm leading-relaxed mt-2 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">
                  {item.desc}
                </p>

                {/* Bottom line */}
                <div className="w-8 h-px bg-dark-olive/20 mt-4 group-hover:bg-rust-gold group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </RevealSection>

      </div>
    </section>
  );
}
