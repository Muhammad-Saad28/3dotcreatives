"use client";

import Image from "next/image";

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    label: "Creative\nThinking",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "On-Time\nDelivery",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    label: "Result-Driven\nStrategies",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </svg>
    ),
    label: "Affordable\nPackages",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden"
      aria-label="Why Choose Us"
    >
      <div className="why-us-grid grid grid-cols-2 min-h-[320px] lg:min-h-[420px]">
        {/* Left: Dark green panel */}
        <div className="bg-dark-olive text-cream flex flex-col justify-center px-4 py-10 lg:px-10 lg:py-16">
          <p className="text-[9px] lg:text-[10px] font-bold tracking-[0.22em] uppercase text-cream/40 mb-3 lg:mb-4">
            Why Choose Us
          </p>
          <h2 className="font-display text-xl sm:text-2xl lg:text-5xl font-bold leading-tight mb-3 lg:mb-6">
            More Than Just
            <br />A Service
          </h2>
          <p className="text-cream/60 text-xs lg:text-sm leading-relaxed max-w-sm mb-6 lg:mb-10 hidden sm:block">
            We believe in creativity with purpose. Our goal is to understand
            your brand, your audience and your vision — and turn it into
            results.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-6">
            {features.map((f, i) => (
              <div
                key={f.label}
                className="flex flex-col items-center gap-2 lg:gap-3 text-center group"
                style={{
                  animation: `serviceFloat 4s ease-in-out ${i * 0.3}s infinite`,
                }}
              >
                <div className="text-cream/70 group-hover:text-cream transition-colors duration-300">
                  {f.icon}
                </div>
                <span className="text-cream/70 text-[10px] lg:text-xs leading-tight whitespace-pre-line group-hover:text-cream transition-colors duration-300">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image panel */}
        <div className="relative min-h-0 overflow-hidden">
          <Image
            src="/images/about_branding.png"
            alt="3 Dot Creatives branding"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-dark-olive/20" />
        </div>
      </div>
    </section>
  );
}
