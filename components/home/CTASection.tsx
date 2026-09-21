"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-dark-olive text-cream relative overflow-hidden" aria-label="Call to Action">
      {/* Background subtle texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-shell relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 items-center py-20 lg:py-28">
          {/* Left: Content */}
          <div className="flex flex-col justify-center gap-3 py-4">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
              Let&apos;s Create Something
              <br />
              Amazing Together
            </h2>
            <p className="text-cream/60 text-sm lg:text-base leading-relaxed max-w-md">
              Have a project in mind? Let&apos;s talk and turn your ideas into something extraordinary.
            </p>
            <div className="mt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-cream text-dark-olive text-[11px] font-bold tracking-widest uppercase hover:bg-rust-gold hover:text-cream transition-colors duration-300 rounded-full group"
              >
                Get In Touch
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-cream/5 sm:order-2">
            <Image
              src="/images/portfolio_brand.png"
              alt="3 Dot Creatives"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
