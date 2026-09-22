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
      className="relative overflow-hidden min-h-[400px] lg:min-h-[500px] flex items-center"
      aria-label="Why Choose Us"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/whychoosus.jpg"
          alt="3 Dot Creatives why choose us"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark-olive/80" /> {/* Dark overlay for text readability */}
      </div>

      <div className="container-shell relative z-10 w-full py-16 lg:py-24">
        <div className="text-cream flex flex-col justify-center">
          <p className="text-[9px] lg:text-[10px] font-bold tracking-[0.22em] uppercase text-cream/60 mb-3 lg:mb-4">
            Why Choose Us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 lg:mb-6">
            More Than Just
            <br />A Service
          </h2>
          <p className="text-cream/80 text-sm lg:text-base leading-relaxed max-w-xl mb-10 lg:mb-16">
            We believe in creativity with purpose. Our goal is to understand
            your brand, your audience and your vision — and turn it into
            results.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl">
            {features.map((f, i) => (
              <div
                key={f.label}
                className="flex flex-col items-start sm:items-center sm:text-center gap-3 group"
                style={{
                  animation: `serviceFloat 4s ease-in-out ${i * 0.3}s infinite`,
                }}
              >
                <div className="text-cream/80 group-hover:text-cream transition-colors duration-300">
                  {f.icon}
                </div>
                <span className="text-cream/80 text-[11px] lg:text-sm leading-tight whitespace-pre-line group-hover:text-cream transition-colors duration-300">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
