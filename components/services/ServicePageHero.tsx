import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

interface ServicePageHeroProps {
  label: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export default function ServicePageHero({
  label,
  title,
  description,
  children,
}: ServicePageHeroProps) {
  return (
    <section className="relative pt-8 pb-20 px-6 lg:px-8 bg-[#F4EBDD] overflow-hidden">
      {/* Large decorative background label */}
      <span
        className="absolute inset-0 flex items-center justify-end pr-8 font-display font-bold text-dark-olive/[0.03] text-[clamp(6rem,14vw,14rem)] leading-none select-none pointer-events-none whitespace-nowrap overflow-hidden"
        aria-hidden="true"
      >
        {label}
      </span>

      <div className="container-shell relative z-10">
        {/* Back button — aligned with content */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 mb-12 text-dark-olive/50 hover:text-dark-olive transition-colors duration-300 text-sm font-medium group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Services
        </Link>

        {/* Label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-olive/40" />
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-olive">
            {label}
          </p>
        </div>

        {/* Title */}
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold text-dark-olive leading-[1.05] tracking-tight max-w-4xl mb-6" style={{ letterSpacing: "-0.02em" }}>
          {title}
        </h1>

        {/* Description */}
        <p className="text-dark-olive/65 text-base md:text-xl max-w-2xl leading-relaxed font-medium mb-10">
          {description}
        </p>

        {/* Three dots */}
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-olive" />
          <div className="w-2.5 h-2.5 rounded-full bg-dark-olive/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-dark-olive/10" />
        </div>

        {children}
      </div>
    </section>
  );
}
