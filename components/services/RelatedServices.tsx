"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <section className="py-20 md:py-28 px-6 lg:px-8 bg-[#F4EBDD] border-t border-dark-olive/10">
      <div className="container-shell">
        <RevealSection>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-12 bg-olive/40" />
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-olive">
              Related Services
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {services.map((service, index) => (
              <Link
                key={service.name}
                href={service.href}
                className="group flex items-center gap-3 px-7 py-3.5 rounded-full border border-dark-olive/15 text-dark-olive font-display font-bold text-sm hover:bg-dark-olive hover:text-cream hover:border-dark-olive transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.name}
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
