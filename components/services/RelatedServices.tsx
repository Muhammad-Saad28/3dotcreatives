"use client";

import Link from "next/link";
import RevealSection from "@/components/ui/RevealSection";

interface RelatedService {
  name: string;
  href: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
}

export default function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-olive/10">
      <div className="max-w-7xl mx-auto">
        <RevealSection>
          <p className="reveal-item section-label">Related Services</p>
          <div className="reveal-item flex flex-wrap gap-4 mt-6">
            {services.map((service, index) => (
              <Link
                key={service.name}
                href={service.href}
                className="pill-hover group relative px-6 py-3 rounded-full border border-olive/20 text-dark-olive text-sm font-medium hover:border-rust-gold/40 hover:text-rust-gold transition-colors duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-olive/5 to-rust-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                {/* Arrow indicator */}
                <span className="relative flex items-center gap-2">
                  {service.name}
                  <span className="text-olive/40 group-hover:text-rust-gold group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
