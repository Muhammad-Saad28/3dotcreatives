"use client";

import Link from "next/link";
import { services } from "@/data/services";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "web-development": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  ),
  "content-creation": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect width="15" height="14" x="1" y="5" rx="2" ry="2" />
    </svg>
  ),
  "social-media": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  "app-development": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  ),
  "product-shoots": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  ),
  "gbp-management": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  "printing-packaging": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  ),
  "digital-marketing": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="4" />
      <path d="M3 19c0-4 3.6-7 8-7" />
      <path d="M17 19c0-4-3.6-7-8-7" />
    </svg>
  ),
};

const SHORT_DESCS: Record<string, string> = {
  "web-development": "Fast, responsive websites that convert visitors into customers.",
  "content-creation": "Visual storytelling through photos, video and creative content.",
  "social-media": "Strategy, content and community management that drives growth.",
  "app-development": "Native and cross-platform mobile apps built for performance.",
  "product-shoots": "Professional product photography and catalog management.",
  "gbp-management": "Google Business Profile optimization for local visibility.",
  "printing-packaging": "Premium print materials and custom packaging design.",
  "digital-marketing": "Data-driven campaigns that maximize ROI and reach.",
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-[#FDF6E3]"
      aria-label="Our Services"
    >
      <div className="container-shell">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label">Our Services</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-olive leading-tight mb-4">
            What We Do Best
          </h2>
          <p className="text-dark-olive/55 text-sm max-w-md mx-auto leading-relaxed">
            From eye-catching designs to high-performing websites, we provide
            everything your brand needs to stand out.
          </p>
        </div>

        {/* Services Grid — 4 columns on desktop with floating animation */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {services.map((service, i) => {
            const mobileDelay = Math.floor(i / 2) * 0.3;
            const desktopDelay = i * 0.3;
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative flex flex-col gap-4 p-6 lg:p-8 rounded-2xl bg-[#efe5d6]/60 border border-beige/30 hover:bg-[#efe5d6]/90 hover:shadow-xl hover:border-beige/60 transition-all duration-300 service-card hover:-translate-y-2"
                style={{
                  "--mobile-delay": `${mobileDelay}s`,
                  "--desktop-delay": `${desktopDelay}s`,
                  transformStyle: "preserve-3d",
                  perspective: "800px",
                } as React.CSSProperties}
              >
                {/* Icon circle */}
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-dark-olive flex items-center justify-center text-cream group-hover:bg-olive group-hover:scale-110 transition-all duration-300">
                  {SERVICE_ICONS[service.id]}
                </div>

                <div>
                  <h3 className="font-display font-bold text-dark-olive text-sm lg:text-base mb-1.5 group-hover:text-olive transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-dark-olive/50 text-xs lg:text-sm leading-relaxed">
                    {SHORT_DESCS[service.id]}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
