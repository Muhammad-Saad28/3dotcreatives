"use client";

import { type PortfolioItem } from "@/data/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export default function PortfolioCard({
  item,
  isHovered,
  onHover,
  onLeave,
}: PortfolioCardProps) {
  return (
    <article
      className="group cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      role="listitem"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-beige/30 mb-4 shadow-sm group-hover:shadow-xl group-hover:shadow-dark-olive/10 transition-shadow duration-500">
        <div
          className={`absolute inset-0 bg-gradient-to-br from-olive/20 to-rust-gold/20 transition-transform duration-700 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-2 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            <div className="w-4 h-4 rounded-full bg-dark-olive group-hover:scale-110 transition-transform duration-500" />
            <div className="w-3 h-3 rounded-full bg-rust-gold mt-0.5 group-hover:scale-110 transition-transform duration-500" style={{ transitionDelay: "0.05s" }} />
            <div className="w-2.5 h-2.5 rounded-full bg-dark-olive mt-0.5 group-hover:scale-110 transition-transform duration-500" style={{ transitionDelay: "0.1s" }} />
          </div>
        </div>
        <div
          className={`absolute inset-0 bg-dark-olive/50 flex items-center justify-center transition-all duration-500 ${
            isHovered ? "opacity-100 backdrop-blur-sm" : "opacity-0"
          }`}
        >
          <span className={`text-cream text-xs tracking-[0.18em] uppercase font-bold transition-all duration-500 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}>
            View Project
          </span>
        </div>
      </div>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] text-olive/50 uppercase tracking-wider mb-1 group-hover:text-rust-gold/70 transition-colors duration-300">{item.category}</p>
          <h3 className="text-base font-bold text-dark-olive group-hover:text-olive transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-sm text-dark-olive/45 mt-1 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>
        <span className="text-[11px] text-dark-olive/30 font-mono shrink-0 group-hover:text-dark-olive/50 transition-colors duration-300">
          {item.year}
        </span>
      </div>
    </article>
  );
}
