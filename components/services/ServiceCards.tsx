"use client";

import RevealSection from "@/components/ui/RevealSection";

interface ServiceCardsProps {
  title: string;
  subtitle?: string;
  items: string[];
}

export default function ServiceCards({
  title,
  subtitle,
  items,
}: ServiceCardsProps) {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-8 bg-[#F4EBDD]">
      <div className="container-shell">
        <RevealSection>
          <p className="section-label mb-4">{subtitle || "What We Do"}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-dark-olive leading-tight max-w-3xl mb-16" style={{ letterSpacing: "-0.02em" }}>
            {title}
          </h2>
        </RevealSection>

        <RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-dark-olive/10 border border-dark-olive/10 rounded-2xl overflow-hidden">
            {items.map((service, index) => {
              const cols = 3;
              const remainder = items.length % cols;
              // How many cols should this last item span?
              let colSpan = "";
              if (remainder !== 0) {
                const lastRowStart = items.length - remainder;
                if (index === items.length - 1 && remainder === 1) colSpan = "lg:col-span-3";
                else if (index === items.length - 1 && remainder === 2) colSpan = "lg:col-span-2";
              }
              return (
                <div
                  key={service}
                  className={`group relative p-7 bg-[#F4EBDD] hover:bg-dark-olive transition-all duration-500 cursor-default ${colSpan}`}
                >
                  {/* Number */}
                  <span className="block font-mono text-[11px] font-bold text-dark-olive/25 group-hover:text-cream/40 mb-4 transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Service name */}
                  <span className="font-display text-base font-bold text-dark-olive group-hover:text-cream transition-colors duration-500">
                    {service}
                  </span>

                  {/* Hover arrow */}
                  <span className="absolute bottom-7 right-7 text-cream/0 group-hover:text-cream/60 transition-all duration-300 text-lg">
                    →
                  </span>
                </div>
              );
            })}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
