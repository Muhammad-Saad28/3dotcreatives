"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    image: "/images/portfolio_brand.png",
    title: "Brand Identity",
    category: "Branding",
    desc: "Complete brand systems that tell your story across every touchpoint.",
  },
  {
    image: "/images/portfolio_web.png",
    title: "Website Design",
    category: "Web Development",
    desc: "Fast, responsive websites built to convert visitors into customers.",
  },
  {
    image: "/images/portfolio_social.png",
    title: "Social Media",
    category: "Social Media",
    desc: "Scroll-stopping content strategies that grow your audience.",
  },
  {
    image: "/images/portfolio_packaging.png",
    title: "Packaging",
    category: "Print & Packaging",
    desc: "Physical designs that make your brand impossible to ignore.",
  },
];

export default function PortfolioPreviewSection() {
  return (
    <section id="work" className="py-20 lg:py-28" aria-label="Featured Work">
      <div className="container-shell">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <p className="section-label">Featured Work</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-olive leading-tight mb-3">
              Some Of Our Work
            </h2>
            <p className="text-dark-olive/60 text-sm">
              A glimpse of what we&apos;ve created for amazing brands.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-dark-olive hover:text-olive transition-colors shrink-0"
          >
            View All Projects
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Alternating rows */}
        <div className="flex flex-col">
          {projects.map((project, i) => {
            const imageOnLeft = i % 2 === 0;
            return (
              <div key={i}>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 items-center group cursor-pointer py-8 lg:py-12`}
                >
                  {/* Image */}
                  <div
                    className={`relative aspect-[16/10] overflow-hidden rounded-xl bg-beige/20 ${
                      imageOnLeft ? "sm:order-1" : "sm:order-2"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="50vw"
                    />
                  </div>

                  {/* Text */}
                  <div
                    className={`flex flex-col justify-center gap-3 py-4 ${
                      imageOnLeft ? "sm:order-2 sm:pl-4" : "sm:order-1"
                    }`}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-widest text-rust-gold">
                      {project.category}
                    </p>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-dark-olive group-hover:text-rust-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-dark-olive/60 text-sm leading-relaxed max-w-sm">
                      {project.desc}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-dark-olive/50 group-hover:text-olive transition-colors mt-1">
                      View Project
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>

                {/* Divider — not after last item */}
                {i < projects.length - 1 && (
                  <div className="w-full h-px bg-dark-olive/10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
