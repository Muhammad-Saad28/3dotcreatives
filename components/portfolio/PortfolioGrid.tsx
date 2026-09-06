"use client";

import { useState } from "react";
import { portfolioItems, type PortfolioItem } from "@/data/portfolio";
import PortfolioCard from "./PortfolioCard";

export default function PortfolioGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      role="list"
      aria-label="Portfolio projects"
    >
      {portfolioItems.map((item: PortfolioItem, index: number) => (
        <PortfolioCard
          key={item.id}
          item={item}
          isHovered={hoveredIndex === index}
          onHover={() => setHoveredIndex(index)}
          onLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
}
