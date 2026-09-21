"use client";

import Link from "next/link";
import { type Service } from "@/data/services";
import { ArrowRight } from "lucide-react";

interface ServiceItemProps {
  service: Service;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export default function ServiceItem({
  service,
  isActive,
  onHover,
  onLeave,
}: ServiceItemProps) {
  return (
    <article
      className={`group border-t border-dark-olive/10 transition-all duration-500 ${isActive ? "bg-dark-olive/[0.03]" : ""}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      role="listitem"
      id={service.id}
    >
      {/* Clickable header row */}
      <Link
        href={`/services/${service.slug}`}
        className="container-shell flex items-center justify-between gap-4 py-8 md:py-10"
      >
        <div className="flex items-center gap-6 md:gap-10">
          <span className={`font-display text-lg font-bold shrink-0 transition-colors duration-500 ${isActive ? "text-olive" : "text-dark-olive/20"}`}>
            {service.number}
          </span>
          <h3
            className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold transition-all duration-500 ${
              isActive ? "text-dark-olive" : "text-dark-olive/50 group-hover:text-dark-olive/80"
            }`}
          >
            {service.title}
          </h3>
        </div>
        <span className={`transition-all duration-500 shrink-0 ${isActive ? "text-olive translate-x-1" : "text-dark-olive/30 group-hover:text-dark-olive/60 group-hover:translate-x-1"}`}>
          <ArrowRight size={24} />
        </span>
      </Link>

      {/* Expanded details (shown on hover, not clickable as a whole) */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isActive ? "max-h-96 opacity-100 pb-8" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-shell pl-14 md:pl-24">
          <div className="border-l-2 border-olive/20 pl-6">
            <p className="text-dark-olive/70 text-base md:text-lg max-w-2xl leading-relaxed mb-6 font-medium">
              {service.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mb-8">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-olive shrink-0" />
                  <span className="text-sm font-semibold text-dark-olive/60">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-dark-olive text-cream text-[11px] font-bold tracking-widest uppercase hover:bg-olive transition-all duration-300 rounded-full group/btn"
              >
                View Service
                <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-dark-olive/20 text-dark-olive text-[11px] font-bold tracking-widest uppercase hover:bg-dark-olive hover:text-cream transition-all duration-300 rounded-full group/btn"
              >
                Start Project
                <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
