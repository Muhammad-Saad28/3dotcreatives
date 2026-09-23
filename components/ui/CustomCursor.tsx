"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CustomCursor() {
  const dot1 = useRef<HTMLDivElement>(null);
  const dot2 = useRef<HTMLDivElement>(null);
  const dot3 = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useGSAP(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // QuickTo for high performance following with staggered delays for the trail
    const x1 = gsap.quickTo(dot1.current, "x", { duration: 0.1, ease: "power3" });
    const y1 = gsap.quickTo(dot1.current, "y", { duration: 0.1, ease: "power3" });
    
    const x2 = gsap.quickTo(dot2.current, "x", { duration: 0.25, ease: "power3" });
    const y2 = gsap.quickTo(dot2.current, "y", { duration: 0.25, ease: "power3" });

    const x3 = gsap.quickTo(dot3.current, "x", { duration: 0.4, ease: "power3" });
    const y3 = gsap.quickTo(dot3.current, "y", { duration: 0.4, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      x1(e.clientX);
      y1(e.clientY);
      x2(e.clientX);
      y2(e.clientY);
      x3(e.clientX);
      y3(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* 3 Dot Creatives - Trail of 3 dots */}
      
      {/* Dot 3: Rust Gold (Tail) */}
      <div
        ref={dot3}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-all duration-300 ${
          isHovering ? "w-8 h-8 bg-rust-gold opacity-30" : "w-3 h-3 bg-rust-gold opacity-90"
        }`}
        style={{ opacity: isVisible ? (isHovering ? 0.3 : 0.9) : 0 }}
      />

      {/* Dot 2: Cream with border (Middle) */}
      <div
        ref={dot2}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-all duration-300 border border-dark-olive/20 ${
          isHovering ? "w-10 h-10 bg-cream opacity-50" : "w-3 h-3 bg-cream opacity-100 shadow-sm"
        }`}
        style={{ opacity: isVisible ? (isHovering ? 0.5 : 1) : 0 }}
      />

      {/* Dot 1: Dark Olive (Lead) */}
      <div
        ref={dot1}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-all duration-300 ${
          isHovering ? "w-12 h-12 border-2 border-dark-olive bg-transparent" : "w-3 h-3 bg-dark-olive"
        }`}
        style={{ opacity: isVisible ? 1 : 0 }}
      />
    </>
  );
}
