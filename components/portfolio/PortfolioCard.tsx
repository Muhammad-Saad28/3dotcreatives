"use client";

import { type PortfolioItem } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

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
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-beige/30 mb-6 shadow-sm group-hover:shadow-xl group-hover:shadow-dark-olive/10 transition-shadow duration-500">
        <div
          className={`absolute inset-0 bg-dark-olive/5 transition-transform duration-700 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          />
        )}
        <div
          className={`absolute inset-0 bg-dark-olive/40 flex items-center justify-center transition-all duration-500 ${
            isHovered ? "opacity-100 backdrop-blur-sm" : "opacity-0"
          }`}
        >
          <span className={`flex items-center gap-2 text-cream text-sm font-bold transition-all duration-500 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}>
            View Project <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-bold text-olive uppercase tracking-[0.15em] mb-2 group-hover:text-dark-olive transition-colors duration-300">
            {item.category}
          </p>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-dark-olive group-hover:text-olive transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-sm text-dark-olive/60 mt-2 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>
        <span className="text-xs text-dark-olive/40 font-mono font-medium shrink-0 group-hover:text-dark-olive/60 transition-colors duration-300 mt-1">
          {item.year}
        </span>
      </div>
    </article>
  );
}
