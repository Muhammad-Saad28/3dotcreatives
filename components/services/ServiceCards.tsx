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
    <section className="py-16 md:py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <RevealSection>
          <p className="reveal-item section-label">{subtitle || "What We Do"}</p>
          <h2 className="reveal-item section-title max-w-2xl mb-12">
            {title}
          </h2>
        </RevealSection>
        <RevealSection>
          <div className="reveal-item grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((service, index) => (
              <div
                key={service}
                className="service-card group relative p-5 rounded-2xl border border-olive/10 bg-cream/50 hover:border-rust-gold/30 overflow-hidden cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-olive/5 to-rust-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Number indicator */}
                <div className="absolute top-3 right-3 text-[10px] font-mono text-olive/20 group-hover:text-rust-gold/40 transition-colors duration-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="relative">
                  <span className="text-dark-olive text-sm font-medium group-hover:text-dark-olive transition-colors duration-300">
                    {service}
                  </span>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rust-gold to-olive group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
