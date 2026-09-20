"use client";

import RevealSection from "../ui/RevealSection";

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
  return (
    <section
      className="py-24 md:py-32 px-6 lg:px-8"
      aria-labelledby="philosophy-heading"
    >
      <div className="max-w-6xl mx-auto">

        {/* Philosophy Header */}
        <RevealSection className="mb-20">
          <p className="reveal-item text-xs tracking-[0.3em] text-olive uppercase font-semibold mb-4">
            Our Philosophy
          </p>
          <h2
            id="philosophy-heading"
            className="reveal-item text-3xl md:text-4xl lg:text-5xl font-bold text-dark-olive leading-tight max-w-3xl"
          >
            We believe great work happens at the intersection of creativity and
            strategy.
          </h2>
        </RevealSection>

        {/* IDEA / DESIGN / EXECUTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-24">
          {principles.map((principle, i) => (
            <RevealSection key={principle.number} delay={i * 0.15}>
              <div className="reveal-item relative group">
                <span className="text-5xl md:text-6xl font-bold text-dark-olive/[0.04] absolute -top-2 left-0 select-none group-hover:text-rust-gold/10 transition-colors duration-500">
                  {principle.number}
                </span>
                <div className="relative pt-10">
                  <h3 className="text-xl font-bold text-dark-olive mb-3 tracking-wide group-hover:text-rust-gold transition-colors duration-300">
                    {principle.title}
                  </h3>
                  <p className="text-dark-olive/55 text-[15px] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* WHY 3DOTCREATIVES */}
        <RevealSection>
          <div className="reveal-item bg-dark-olive rounded-2xl p-8 md:p-12 lg:p-16">
            <p className="text-xs tracking-[0.3em] text-beige/40 uppercase font-semibold mb-4">
              Why Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-10">
              WHY 3DOTCREATIVES
            </h2>
            <ul className="space-y-5 max-w-2xl">
              {reasons.map((reason, i) => (
                <li key={i} className="reveal-item flex items-start gap-4 group">
                  <div className="flex gap-1.5 mt-1.5 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-olive group-hover:scale-150 transition-transform duration-300" />
                    <div className="w-1.5 h-1.5 rounded-full bg-rust-gold group-hover:scale-150 transition-transform duration-300" style={{ transitionDelay: "0.05s" }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-olive group-hover:scale-150 transition-transform duration-300" style={{ transitionDelay: "0.1s" }} />
                  </div>
                  <span className="text-beige/75 text-base group-hover:text-cream transition-colors duration-300">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        {/* Process */}
        <RevealSection className="mt-24">
          <p className="reveal-item text-xs tracking-[0.3em] text-olive uppercase font-semibold mb-4">
            Our Process
          </p>
          <h2 className="reveal-item text-3xl md:text-4xl font-bold text-dark-olive mb-12">
            PROCESS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {["Discovery", "Strategy", "Creation", "Launch"].map(
              (step, index) => (
                <div key={step} className="reveal-item group cursor-default">
                  <div className="text-3xl font-bold text-dark-olive/10 mb-2 group-hover:text-rust-gold/30 transition-colors duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-base font-bold text-dark-olive group-hover:text-rust-gold transition-colors duration-300">{step}</h3>
                  <div className="w-full h-px bg-dark-olive/10 mt-4 group-hover:bg-rust-gold/30 group-hover:w-full transition-all duration-500" />
                </div>
              )
            )}
          </div>
        </RevealSection>

        <div className="flex justify-center gap-2 mt-16">
          <div className="w-2 h-2 rounded-full bg-olive animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-rust-gold animate-pulse" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 rounded-full bg-olive animate-pulse" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </section>
  );
}
