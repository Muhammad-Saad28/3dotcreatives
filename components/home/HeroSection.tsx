"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-section relative w-full min-h-[92vh] flex items-center overflow-hidden bg-[#FDF6E3]"
      aria-label="Hero"
    >
      <div className="container-shell w-full py-16 lg:py-0 relative z-10">
        <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:gap-8 items-center min-h-[80vh]">
          {/* Left: Text Content */}
          <div className="hero-content flex flex-col justify-center pt-22 lg:pt-0 z-10 pl-4 pr-2 lg:pl-8 lg:pr-13">
            {/* Eyebrow */}
            <div className="flex items-center gap-1.5 lg:gap-2 mb-4 lg:mb-6 hero-eyebrow flex-wrap">
              <span className="text-[8px] lg:text-[10px] font-bold tracking-[0.22em] uppercase text-olive/60">
                Ideas
              </span>
              <span className="text-olive/30 text-[8px] lg:text-xs">•</span>
              <span className="text-[8px] lg:text-[10px] font-bold tracking-[0.22em] uppercase text-olive/60">
                Design
              </span>
              <span className="text-olive/30 text-[8px] lg:text-xs">•</span>
              <span className="text-[8px] lg:text-[10px] font-bold tracking-[0.22em] uppercase text-olive/60">
                Digital
              </span>
              <span className="text-olive/30 text-[8px] lg:text-xs hidden sm:inline">•</span>
              <span className="text-[8px] lg:text-[10px] font-bold tracking-[0.22em] uppercase text-olive/60 hidden sm:inline">
                Print
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-headline font-display text-[1.75rem] sm:text-[clamp(2.5rem,5vw,4rem)] lg:text-[clamp(3.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-dark-olive mb-4 lg:mb-6"
              style={{ letterSpacing: "-0.02em" }}
            >
              Your Vision
              <br />
              Our Creativity
            </h1>

            {/* Description */}
            <p className="hero-desc text-dark-olive/70 text-xs sm:text-[15px] leading-relaxed max-w-[420px] mb-6 lg:mb-8 font-medium">
              3 Dot Creatives is a full-service creative agency helping brands
              grow through powerful design, strategic digital solutions and
              compelling content.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 lg:gap-4 hero-ctas">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3.5 bg-dark-olive text-cream text-[10px] sm:text-[11px] font-bold tracking-widest uppercase hover:bg-olive transition-all duration-300 hover:scale-105 active:scale-95 group rounded-full"
              >
                Let&apos;s Work Together
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative w-full h-[200px] sm:h-[200px] lg:h-[550px] overflow-hidden group">
            <Image
              src="/images/hero121212.JPG"
              alt="3 Dot Creatives creative agency"
              fill
              className="object-cover object-[40%_center] transition-transform duration-700 group-hover:scale-105"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
