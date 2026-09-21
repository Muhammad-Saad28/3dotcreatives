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
    <section className="py-20 md:py-28 px-6 lg:px-8 bg-dark-olive relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-olive/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-olive/5 blur-[120px] pointer-events-none" />

      <div className="container-shell relative z-10">
        <RevealSection>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-cream/20" />
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-cream/50">
              {subtitle}
            </p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight max-w-3xl mb-20" style={{ letterSpacing: "-0.02em" }}>
            {title}
          </h2>
        </RevealSection>

        <div className={`grid ${gridCols} gap-0`}>
          {steps.map((item, index) => (
            <RevealSection key={item.step} delay={index * 0.1}>
              <div className="group relative pr-8 pb-10 border-l border-cream/10 pl-8 hover:border-olive transition-colors duration-500">
                {/* Step number */}
                <span className="font-display text-5xl font-bold text-cream/10 group-hover:text-olive/40 transition-colors duration-500 block mb-6">
                  {item.step}
                </span>

                {/* Dot on the border */}
                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-dark-olive border-2 border-cream/20 group-hover:border-olive group-hover:bg-olive transition-all duration-500" />

                <h3 className="font-display text-xl font-bold text-cream mb-3 group-hover:text-olive transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed group-hover:text-cream/70 transition-colors duration-300">
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
