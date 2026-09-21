"use client";

import RevealSection from "@/components/ui/RevealSection";

interface EditorialSectionProps {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  dark?: boolean;
}

export default function EditorialSection({
  label,
  title,
  highlight,
  description,
  dark = false,
}: EditorialSectionProps) {
  return (
    <section className={`py-20 md:py-28 px-6 lg:px-8 ${dark ? "bg-dark-olive" : "bg-[#F4EBDD]"}`}>
      <div className="container-shell">
        <RevealSection>
          <div className={`max-w-4xl mx-auto text-center border ${dark ? "border-cream/10" : "border-dark-olive/10"} rounded-2xl p-12 md:p-20`}>
            {/* Label */}
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className={`h-px w-12 ${dark ? "bg-cream/20" : "bg-olive/40"}`} />
              <p className={`text-[11px] font-bold tracking-[0.3em] uppercase ${dark ? "text-cream/50" : "text-olive"}`}>
                {label}
              </p>
              <div className={`h-px w-12 ${dark ? "bg-cream/20" : "bg-olive/40"}`} />
            </div>

            <h2 className={`font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight mb-6 ${dark ? "text-cream" : "text-dark-olive"}`} style={{ letterSpacing: "-0.01em" }}>
              {title}
              {highlight && (
                <>
                  {" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">{highlight}</span>
                    <span
                      className={`absolute bottom-1 left-0 w-full h-2 ${dark ? "bg-olive/20" : "bg-olive/15"} -rotate-1 z-0`}
                      aria-hidden="true"
                    />
                  </span>
                </>
              )}
            </h2>

            {description && (
              <p className={`text-lg leading-relaxed ${dark ? "text-cream/55" : "text-dark-olive/60"}`}>
                {description}
              </p>
            )}

            {/* Three dots */}
            <div className="flex justify-center gap-2 mt-10">
              <div className={`w-2 h-2 rounded-full ${dark ? "bg-olive" : "bg-olive"} animate-pulse`} />
              <div className={`w-2 h-2 rounded-full ${dark ? "bg-cream/30" : "bg-dark-olive/20"} animate-pulse`} style={{ animationDelay: "0.2s" }} />
              <div className={`w-2 h-2 rounded-full ${dark ? "bg-olive" : "bg-olive"} animate-pulse`} style={{ animationDelay: "0.4s" }} />
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
