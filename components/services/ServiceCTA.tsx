"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RevealSection from "@/components/ui/RevealSection";

interface ServiceCTAProps {
  title?: string;
  description?: string;
  buttonText: string;
  buttonHref?: string;
}

export default function ServiceCTA({
  title = "Have a project in mind?",
  description = "Let's create something remarkable together.",
  buttonText,
  buttonHref = "/contact",
}: ServiceCTAProps) {
  return (
    <RevealSection className="py-24 md:py-32 px-6 lg:px-8 bg-dark-olive relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-olive/10 blur-[150px] pointer-events-none" />

      <div className="container-shell text-center relative z-10">
        {/* Label */}
        <div className="flex items-center gap-4 mb-8 justify-center">
          <div className="h-px w-12 bg-cream/20" />
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-cream/50">
            Get Started
          </p>
          <div className="h-px w-12 bg-cream/20" />
        </div>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-6 tracking-tight max-w-3xl mx-auto" style={{ letterSpacing: "-0.02em" }}>
          {title}
        </h2>
        <p className="text-cream/55 mb-12 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          {description}
        </p>

        <Link
          href={buttonHref}
          className="inline-flex items-center gap-2 px-10 py-4 bg-cream text-dark-olive text-[11px] tracking-[0.18em] uppercase font-bold rounded-full transition-all duration-300 hover:bg-olive hover:text-cream hover:scale-105 group"
        >
          {buttonText}
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>

        <div className="flex justify-center gap-2 mt-14">
          <div className="w-2 h-2 rounded-full bg-olive animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-cream/20 animate-pulse" style={{ animationDelay: "0.2s" }} />
          <div className="w-2 h-2 rounded-full bg-olive animate-pulse" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </RevealSection>
  );
}
