import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolioItems, PortfolioItem } from "@/data/portfolio";
import ProjectGalleryModal from "./ProjectGalleryModal";

export default function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  return (
    <>
      <div className="flex flex-col">
        {portfolioItems.map((item, index) => {
          // Alternating layout:
          // Even index (0, 2, ...): Text on left, Image on right
          // Odd index (1, 3, ...): Image on left, Text on right
          const isImageRight = index % 2 === 0;

          return (
            <div key={item.id} className="flex flex-col">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 lg:py-20 group">

                {/* Text Column */}
                <div className={`flex flex-col justify-center gap-4 ${isImageRight ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-rust-gold">
                    {item.category} · {item.year}
                  </p>
                  <h3 className="font-display text-3xl lg:text-5xl font-bold text-dark-olive group-hover:text-rust-gold transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-dark-olive/60 text-base lg:text-lg leading-relaxed max-w-lg mt-2">
                    {item.description}
                  </p>

                  {item.link ? (
                    <div className="flex flex-wrap gap-4 mt-6">
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-7 py-3.5 border border-dark-olive/20 text-dark-olive text-[11px] font-bold uppercase tracking-widest hover:bg-dark-olive hover:text-cream transition-colors duration-300 rounded-full w-fit hover:scale-105 active:scale-95">
                        Visit Website
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                      <Link href={`/portfolio/${item.id}`} className="inline-flex items-center gap-3 px-7 py-3.5 border border-dark-olive/20 text-dark-olive text-[11px] font-bold uppercase tracking-widest hover:bg-dark-olive hover:text-cream transition-colors duration-300 rounded-full w-fit hover:scale-105 active:scale-95">
                        View Project
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  ) : (
                    <Link href={`/portfolio/${item.id}`} className="inline-flex items-center gap-3 px-7 py-3.5 mt-6 border border-dark-olive/20 text-dark-olive text-[11px] font-bold uppercase tracking-widest hover:bg-dark-olive hover:text-cream transition-colors duration-300 rounded-full w-fit cursor-pointer hover:scale-105 active:scale-95">
                      View Project
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>

                {/* Image Column */}
                <Link
                  href={`/portfolio/${item.id}`}
                  className={`relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-2xl bg-[#efe5d6]/60 p-6 lg:p-10 cursor-pointer flex items-center justify-center ${isImageRight ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </Link>
              </div>

              {/* Divider */}
              {index !== portfolioItems.length - 1 && (
                <div className="w-full h-px bg-dark-olive/10" />
              )}
            </div>
          );
        })}
      </div>

      <ProjectGalleryModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
