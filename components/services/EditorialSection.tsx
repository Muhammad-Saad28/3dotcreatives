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
    <section
      className={`py-16 md:py-24 px-6 lg:px-8 ${dark ? "bg-dark-olive" : ""}`}
    >
      <div className="max-w-7xl mx-auto">
        <RevealSection>
          <div className="reveal-item max-w-3xl">
            <p className={`section-label ${dark ? "!text-beige/60" : ""}`}>
              {label}
            </p>
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight ${
                dark ? "text-cream" : "text-dark-olive"
              }`}
            >
              {title}
              {highlight && (
                <>
                  {" "}
                  <span
                    className={
                      dark ? "text-rust-gold" : "text-rust-gold"
                    }
                  >
                    {highlight}
                  </span>
                </>
              )}
            </h2>
            {description && (
              <p
                className={`mt-6 text-lg leading-relaxed ${
                  dark ? "text-beige/60" : "text-dark-olive/60"
                }`}
              >
                {description}
              </p>
            )}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
