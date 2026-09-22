"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden min-h-[400px] lg:min-h-[500px] flex items-center" aria-label="Call to Action">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/brandbrand.jpg"
          alt="Let's create something amazing"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark-olive/85" />
      </div>

      <div className="container-shell relative z-10 w-full py-16 lg:py-24">
        <div className="flex flex-col justify-center max-w-2xl text-cream">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-4">
            Let&apos;s Create Something
            <br />
            Amazing Together
          </h2>
          <p className="text-cream/80 text-sm lg:text-base leading-relaxed max-w-md mb-8">
            Have a project in mind? Let&apos;s talk and turn your ideas into something extraordinary.
          </p>
          <div className="mt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-cream text-dark-olive text-[11px] font-bold tracking-widest uppercase hover:bg-rust-gold hover:text-cream transition-colors duration-300 rounded-full group w-fit"
            >
              Get In Touch
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
