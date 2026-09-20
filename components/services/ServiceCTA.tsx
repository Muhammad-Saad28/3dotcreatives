"use client";

import RevealSection from "@/components/ui/RevealSection";

interface ServiceCTAProps {
  title?: string;
  description?: string;
  buttonText: string;
  buttonHref?: string;
}

export default function ServiceCTA({
  title = "Have a project in mind?",
  description = "Let's create something remarkable.",
  buttonText,
  buttonHref = "/contact",
}: ServiceCTAProps) {
  return (
    <RevealSection className="py-24 md:py-32 px-6 lg:px-8 bg-dark-olive relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-olive/10 to-rust-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="reveal-item text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6 tracking-tight">
          {title}
        </h2>
        <p className="reveal-item text-beige/60 mb-10 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="reveal-item inline-block">
          <a
            href={buttonHref}
            className="cta-glow group relative inline-flex px-8 py-4 bg-cream text-dark-olive text-xs tracking-[0.18em] uppercase font-bold rounded-full transition-all duration-300 hover:bg-rust-gold hover:text-cream hover:scale-105 hover:shadow-lg hover:shadow-rust-gold/20"
          >
            <span className="relative z-10">{buttonText}</span>
          </a>
        </div>

        {/* Animated dots */}
        <div className="reveal-item flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-olive animate-pulse" />
          <div
            className="w-2 h-2 rounded-full bg-rust-gold animate-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-olive animate-pulse"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </RevealSection>
  );
}
