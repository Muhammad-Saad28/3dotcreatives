"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28" aria-label="About Us">
      <div className="container-shell">
        <div className="grid grid-cols-2 gap-4 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative w-full aspect-square overflow-hidden rounded-2xl group">
            <Image
              src="/images/aboutus.JPG"
              alt="3 Dot Creatives notebook and branding"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="50vw"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            <p className="text-[9px] lg:text-xs font-bold tracking-[0.2em] uppercase text-rust-gold mb-2 lg:mb-4">
              About Us
            </p>
            <h2 className="font-display text-xl sm:text-2xl lg:text-5xl font-bold text-dark-olive leading-tight mb-3 lg:mb-6">
              We build digital
              <br />
              experiences with
              <br />
              <span className="text-olive">purpose.</span>
            </h2>
            <p className="text-dark-olive/60 text-xs lg:text-sm leading-relaxed mb-6 lg:mb-10 max-w-lg">
              A creative digital agency that transforms ideas into immersive
              experiences. We believe in the power of three:{" "}
              <span className="font-bold text-dark-olive">Idea</span>,{" "}
              <span className="font-bold text-dark-olive">Design</span>,{" "}
              <span className="font-bold text-dark-olive">Execution</span>.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 lg:gap-12 mb-6 lg:mb-10 border-t border-b border-beige/40 py-4 lg:py-6">
              <div>
                <h4 className="font-display text-lg lg:text-2xl font-bold text-dark-olive mb-1">
                  6+
                </h4>
                <p className="text-dark-olive/50 text-[10px] lg:text-xs">Core Services</p>
              </div>
              <div>
                <h4 className="font-display text-lg lg:text-2xl font-bold text-dark-olive mb-1">
                  100+
                </h4>
                <p className="text-dark-olive/50 text-[10px] lg:text-xs">Projects</p>
              </div>
              <div>
                <h4 className="font-display text-lg lg:text-2xl font-bold text-dark-olive mb-1">
                  50+
                </h4>
                <p className="text-dark-olive/50 text-[10px] lg:text-xs">Happy Clients</p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 lg:px-6 py-2 lg:py-2.5 bg-dark-olive text-cream text-[10px] lg:text-[11px] font-bold tracking-widest uppercase hover:bg-olive transition-colors duration-300 w-fit group rounded-full"
            >
              Learn More
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
