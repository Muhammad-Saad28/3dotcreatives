"use client";

import { type Service } from "@/data/services";

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
      className="group border-t border-dark-olive/10 py-8 md:py-10 cursor-pointer transition-all duration-500"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      role="listitem"
      tabIndex={0}
      aria-label={`${service.title}: ${service.description}`}
      id={service.id}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 md:gap-8">
          <span className="text-xs text-olive/40 font-mono w-8 shrink-0">
            {service.number}
          </span>
          <h3
            className={`text-xl sm:text-2xl md:text-3xl font-bold transition-all duration-500 ${
              isActive
                ? "text-dark-olive"
                : "text-dark-olive/40"
            }`}
          >
            {service.title}
          </h3>
        </div>
        <span
          className={`text-lg transition-all duration-500 shrink-0 ${
            isActive
              ? "opacity-100 text-olive"
              : "opacity-0"
          }`}
        >
          →
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          isActive ? "max-h-64 mt-6" : "max-h-0"
        }`}
      >
        <div className="pl-12 md:pl-16">
          <p className="text-dark-olive/55 text-[15px] md:text-base max-w-2xl leading-relaxed mb-6">
            {service.description}
          </p>
          <div className="grid grid-cols-2 gap-3 max-w-lg">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-rust-gold shrink-0" />
                <span className="text-sm text-dark-olive/45">{feature}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-dark-olive text-cream text-sm tracking-[0.08em] rounded-full transition-all hover:bg-olive">
              DISCUSS YOUR PROJECT
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
