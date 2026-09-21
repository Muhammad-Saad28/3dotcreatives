"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";

export default function PortfolioGrid() {
  const row1 = portfolioItems.slice(0, 3);
  const row2 = portfolioItems.slice(3, 6);

  return (
    <div className="flex flex-col">
      {/* Row 1: image text image */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center py-8 lg:py-12">
        {row1.map((item, i) => {
          const isImage = i % 2 === 0;
          return (
            <div key={item.id} className="group cursor-pointer">
              {isImage ? (
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-beige/20">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="33vw"
                  />
                </div>
              ) : (
                <div className="flex flex-col justify-center gap-3 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-rust-gold">
                    {item.category} · {item.year}
                  </p>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-dark-olive group-hover:text-rust-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-dark-olive/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-dark-olive/50 group-hover:text-olive transition-colors mt-1">
                    View Project
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-dark-olive/10" />

      {/* Row 2: text image text */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center py-8 lg:py-12">
        {row2.map((item, i) => {
          const isImage = i % 2 === 1;
          return (
            <div key={item.id} className="group cursor-pointer">
              {isImage ? (
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-beige/20">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="33vw"
                  />
                </div>
              ) : (
                <div className="flex flex-col justify-center gap-3 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-rust-gold">
                    {item.category} · {item.year}
                  </p>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-dark-olive group-hover:text-rust-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-dark-olive/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-dark-olive/50 group-hover:text-olive transition-colors mt-1">
                    View Project
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
