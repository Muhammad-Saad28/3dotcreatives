"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import gsap from "gsap";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function RevealSection({
  children,
  className = "",
  delay = 0,
  once = true,
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || (once && hasRevealed)) return;

    const elements = el.querySelectorAll(".reveal-item");
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          gsap.fromTo(
            elements,
            { opacity: 0, y: 40, filter: "blur(8px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1.0,
              stagger: 0.12,
              delay,
              ease: "power3.out",
            }
          );
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasRevealed, delay, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
