"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      el.querySelector(".hero-label"),
      { opacity: 0, y: 20, filter: "blur(8px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }
    )
    .fromTo(
      el.querySelector(".hero-title"),
      { opacity: 0, y: 40, filter: "blur(12px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(
      el.querySelector(".hero-desc"),
      { opacity: 0, y: 30, filter: "blur(6px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(
      el.querySelector(".hero-line"),
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(
      el.querySelectorAll(".hero-dot"),
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: "back.out(1.7)" },
      "-=0.3"
    );

    // Floating orb animation
    const orbs = el.querySelectorAll(".hero-orb");
    orbs.forEach((orb, i) => {
      gsap.to(orb, {
        y: `${-15 - i * 5}`,
        x: `${10 + i * 3}`,
        duration: 3 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3,
      });
    });
  }, []);

  // Split title for word-by-word animation
  const titleWords = title.split(" ");

  return (
    <section className="relative pt-20 pb-16 px-6 lg:px-8 overflow-hidden">
      {/* Background decorative orbs */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-olive/5 to-rust-gold/5 blur-3xl hero-orb pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-gradient-to-tr from-rust-gold/5 to-olive/5 blur-3xl hero-orb pointer-events-none" />

      <div ref={containerRef} className="max-w-7xl mx-auto relative">
        {/* Animated label */}
        <p className="hero-label section-label opacity-0">{label}</p>

        {/* Animated title with gradient accent */}
        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark-olive leading-[1.05] tracking-tight max-w-4xl opacity-0">
          {titleWords.map((word, i) => (
            <span key={i}>
              {word}
              {i < titleWords.length - 1 && " "}
            </span>
          ))}
        </h1>

        {/* Animated description */}
        <p className="hero-desc mt-6 text-base sm:text-lg text-dark-olive/60 max-w-2xl leading-relaxed opacity-0">
          {description}
        </p>

        {/* Animated accent line */}
        <div className="hero-line mt-8 origin-left">
          <div className="w-16 h-0.5 bg-gradient-to-r from-rust-gold to-olive rounded-full" />
        </div>

        {/* Animated dots */}
        <div className="flex gap-2 mt-6">
          <div className="hero-dot w-2 h-2 rounded-full bg-olive opacity-0" />
          <div className="hero-dot w-2 h-2 rounded-full bg-rust-gold opacity-0" />
          <div className="hero-dot w-2 h-2 rounded-full bg-olive opacity-0" />
        </div>

        {children}
      </div>
    </section>
  );
}
