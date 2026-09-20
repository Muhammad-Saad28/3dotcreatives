"use client";

import RevealSection from "@/components/ui/RevealSection";

interface Step {
  step: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title: string;
  subtitle?: string;
  steps: Step[];
  columns?: 4 | 5;
}

export default function ProcessSteps({
  title,
  subtitle = "Our Process",
  steps,
  columns = 4,
}: ProcessStepsProps) {
  const gridCols =
    columns === 5
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-5"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";

  return (
    <section className="py-16 md:py-24 px-6 lg:px-8 bg-dark-olive relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-olive/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gradient-to-tr from-rust-gold/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <RevealSection>
          <p className="reveal-item section-label !text-beige/60">
            {subtitle}
          </p>
          <h2 className="reveal-item section-title-light max-w-2xl mb-16">
            {title}
          </h2>
        </RevealSection>
        <div className={`grid ${gridCols} gap-8`}>
          {steps.map((item, index) => (
            <RevealSection key={item.step} delay={index * 0.1}>
              <div className="reveal-item process-step group relative">
                {/* Large background number */}
                <span className="process-number text-5xl font-display font-bold text-rust-gold/20 group-hover:text-rust-gold/40 transition-all duration-500 block">
                  {item.step}
                </span>

                {/* Accent line */}
                <div className="w-8 h-0.5 bg-gradient-to-r from-rust-gold/40 to-transparent mt-4 mb-3 group-hover:w-12 transition-all duration-500" />

                <h3 className="process-title text-xl font-bold text-cream group-hover:text-rust-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-3 text-beige/60 text-sm leading-relaxed group-hover:text-beige/80 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
