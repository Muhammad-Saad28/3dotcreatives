"use client";

import { useRef, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const cleanupRef = useRef<gsap.Context | null>(null);

  const handleComplete = useCallback(() => {
    onComplete?.();
  }, [onComplete]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: handleComplete,
      });

      tl.to(textRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.6,
        ease: "power2.in",
      }, 2);

      tl.to(
        leftPanelRef.current,
        {
          x: "-100%",
          ease: "power3.inOut",
          duration: 0.8,
        },
        2.3
      );

      tl.to(
        rightPanelRef.current,
        {
          x: "100%",
          ease: "power3.inOut",
          duration: 0.8,
        },
        2.3
      );

      cleanupRef.current = gsap.context(() => {});
    },
    { scope: containerRef, dependencies: [handleComplete] }
  );

  useEffect(() => {
    return () => {
      cleanupRef.current?.revert();
    };
  }, []);

  return (
    <>
      <div
        ref={leftPanelRef}
        className="splash-panel left-0 w-1/2"
      />
      <div
        ref={rightPanelRef}
        className="splash-panel right-0 w-1/2"
      />
      <div ref={containerRef} className="fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none">
        <h1
          ref={textRef}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-dark-olive tracking-tight select-none"
        >
          3dotcreatives
        </h1>
      </div>
    </>
  );
}
