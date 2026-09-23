"use client";

/* --------------------------------------------------------------------------
   ScrollSections — Synchronized Sticky Service Viewport
   
   Architecture:
   - Hero, All Services, Selected Work remain in document flow (h-screen each)
   - Services 1–8 live in one 520vh container with a 100vh sticky pinned panel
   - The sticky panel renders the active service text + image driven by scrollProgress
   - Opacities and Y-offsets are computed from the same normalised progress value
   -------------------------------------------------------------------------- */

import { useRef, useEffect, useState, ReactNode } from "react";
import gsap from "gsap";

/* -------------------------------------------------------------------------- */
/* HELPERS                                                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* REVEAL WRAPPER — for non-service, document-flow sections                  */
/* -------------------------------------------------------------------------- */

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  trigger?: boolean;
}

function RevealSection({ children, className = "", trigger }: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasRevealed) return;

    if (trigger !== undefined) {
      if (trigger) {
        setHasRevealed(true);
        const elements = el.querySelectorAll('.reveal-item');
        if (elements.length > 0) {
          gsap.fromTo(
            elements,
            { opacity: 0, y: 40, filter: "blur(8px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, stagger: 0.15, ease: "power3.out" }
          );
        }
      }
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          
          const elements = el.querySelectorAll('.reveal-item');
          if (elements.length > 0) {
            gsap.fromTo(
              elements,
              { opacity: 0, y: 40, filter: "blur(8px)" },
              { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, stagger: 0.15, ease: "power3.out" }
            );
          }
          
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasRevealed, trigger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* STATIC DATA                                                                */
/* -------------------------------------------------------------------------- */

/* Skill tags shown for each service (keyed by section index 1–7) */
const SERVICE_SKILLS: Record<number, string[]> = {
  1: ["React", "Next.js", "TypeScript", "Performance"],
  2: ["Photography", "Video", "Direction", "Editing"],
  3: ["Studio Lighting", "Retouching", "Styling", "E-Commerce"],
  4: ["Strategy", "Reels", "Community", "Analytics"],
  5: ["SEO", "Paid Ads", "Email", "Data"],
  6: ["Local SEO", "GBP Posts", "Reviews", "Maps"],
  7: ["Branding", "Print", "Dielines", "Finishing"],
  8: ["iOS", "Android", "React Native", "UX Design"],
};

/* 2D images for each service — place files in public/images/services/ */
const SERVICE_IMAGES: Record<number, { src: string; alt: string }> = {
  1: { src: "/images/services/web-development.jpg", alt: "Web Development" },
  2: { src: "/images/services/content-creation.jpg", alt: "Content Creation" },
  3: { src: "/images/services/product-shoot.jpg", alt: "Product Shoot" },
  4: { src: "/images/services/social-media.jpg", alt: "Social Media" },
  5: { src: "/images/services/digital-marketing.jpg", alt: "Digital Marketing" },
  6: { src: "/images/services/gbp-management.jpg", alt: "GBP Management" },
  7: { src: "/images/services/printing-packaging.jpg", alt: "Printing & Packaging" },
  8: { src: "/images/services/app-development.jpg", alt: "App Development" },
};

const SECTIONS = [
  /* 00 */ {
    num: "00",
    title: "HERO",
    tagline: "WE CREATE IDEAS THAT MOVE.",
    desc: "Digital experiences, content and creative solutions built for ambitious brands.",
    align: "center",
  },
  /* 01 */ {
    num: "01",
    title: "WEB DEVELOPMENT",
    tagline: "DIGITAL EXPERIENCES THAT PERFORM.",
    desc: "High-performance websites and digital experiences designed around brand, usability and conversion.",
    align: "left",
  },
  /* 02 */ {
    num: "02",
    title: "CONTENT CREATION",
    tagline: "MAKE PEOPLE STOP AND LOOK.",
    desc: "Photography, video and creative content designed to communicate brands through visual storytelling.",
    align: "right",
  },
  /* 03 */ {
    num: "03",
    title: "PRODUCT SHOOT",
    tagline: "SHOW IT. SELL IT.",
    desc: "Professional product photography and videography that highlights every detail and makes your products impossible to ignore.",
    align: "left",
  },
  /* 04 */ {
    num: "04",
    title: "SOCIAL MEDIA",
    tagline: "TURN ATTENTION INTO CONNECTION.",
    desc: "Strategic social media managment, content planning and brand presence designed for consistent growth.",
    align: "right",
  },
  /* 05 */ {
    num: "05",
    title: "DIGITAL MARKETING",
    tagline: "TURN REACH INTO GROWTH.",
    desc: "Digital marketing strategies and campaigns designed around measurable growth.",
    align: "left",
  },
  /* 06 */ {
    num: "06",
    title: "GBP MANAGEMENT",
    tagline: "BE FOUND WHERE IT MATTERS.",
    desc: "Google Business Profile optimization and management designed to improve local visibility.",
    align: "right",
  },
  /* 07 */ {
    num: "07",
    title: "PRINTING & PACKAGING",
    tagline: "MAKE YOUR BRAND PHYSICAL.",
    desc: "Packaging, print materials and physical brand experiences designed to make businesses memorable.",
    align: "left",
  },
  /* 08 */ {
    num: "08",
    title: "APP DEVELOPMENT",
    tagline: "BUILD. LAUNCH. SCALE.",
    desc: "Modern mobile applications built around useful experiences and scalable technology.",
    align: "right",
  },
  /* 09 */ {
    num: "09",
    title: "ALL SERVICES",
    tagline: "EVERYTHING CONNECTS.",
    desc: "One creative direction across digital, content, technology and growth.",
    align: "center",
  },
  /* 10 */ {
    num: "10",
    title: "SELECTED WORK",
    tagline: "PORTFOLIO & SHOWCASE",
    desc: "Explore selected brand cases, high-converting platforms, and strategic creative campaigns.",
    align: "center",
  },
] as const;

const SECTION_COUNT = 11;

/* -------------------------------------------------------------------------- */
/* SERVICE TEXT BLOCK                                                         */
/* -------------------------------------------------------------------------- */
/* SERVICE TEXT BLOCK                                                         */
/*                                                                            */
/* Absolutely positioned so two blocks (prev / next) can cross-dissolve      */
/* without affecting layout.                                                  */
/* -------------------------------------------------------------------------- */

type SectionDatum = (typeof SECTIONS)[number];

interface ServiceTextBlockProps {
  sectionData: SectionDatum;
  skills: string[];
  /** true → text left column, image right column */
  isLeft: boolean;
  opacity: number;
  translateY: number;
  imageSrc?: string;
  imageAlt?: string;
}

function ServiceTextBlock({
  sectionData,
  skills,
  isLeft,
  opacity,
  translateY,
  imageSrc,
  imageAlt,
}: ServiceTextBlockProps) {
  // Compute smooth vertical drift and blur based on opacity
  const yOffset = (1 - opacity) * 30;
  const blurAmount = (1 - opacity) * 4;

  return (
    <div
      aria-hidden={opacity < 0.05}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        paddingLeft: "5vw",
        paddingRight: "5vw",
        opacity,
        transform: `translateY(${yOffset}px)`,
        filter: `blur(${blurAmount}px)`,
        willChange: "opacity, transform, filter",
        pointerEvents: "none",
      }}
      className="items-start pt-[110px] md:items-center md:pt-0"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* ── TEXT column ─────────────────────────────────────────────── */}
        <div
          className={`flex justify-center ${
            isLeft
              ? "md:justify-start md:col-start-1"
              : "md:justify-end md:col-start-2 md:row-start-1"
          } pointer-events-auto`}
          style={{ pointerEvents: opacity > 0.5 ? "auto" : "none" }}
        >
          <div className="space-y-4 md:space-y-6 max-w-[280px] md:max-w-sm text-center md:text-left">

            {/* number / divider */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="text-xs font-mono tracking-[0.2em] text-rust-gold font-bold">
                {sectionData.num}
              </span>
              <div className="flex-1 h-px bg-rust-gold/20 max-w-[40px]" />
              <span className="text-xs font-mono tracking-widest text-olive/50 uppercase">
                / 08
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-br from-dark-olive to-olive">
              {sectionData.title}
            </h2>

            <p className="text-sm md:text-base font-semibold text-olive tracking-wide uppercase">
              {sectionData.tagline}
            </p>

            <div className="w-8 h-0.5 bg-gradient-to-r from-rust-gold to-rust-gold/30 rounded-full mx-auto md:mx-0" />

            <p className="text-sm text-dark-olive/70 leading-relaxed">
              {sectionData.desc}
            </p>

            <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono tracking-widest text-dark-olive/80 uppercase border border-white/30 rounded-full px-3 py-1.5 bg-white/20 backdrop-blur-md shadow-sm hover:scale-105 hover:bg-white/40 hover:shadow-md transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* ── IMAGE column ────────────────────────────────────────────── */}
        <div
          className={`flex items-center justify-center ${
            isLeft ? "col-start-2 row-start-1" : "col-start-1 row-start-1"
          }`}
        >
          {imageSrc && (
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
              <img
                src={imageSrc}
                alt={imageAlt || sectionData.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* STICKY SERVICE PANEL                                                       */
/*                                                                            */
/* Lives inside the 700vh container. Computes which service text is           */
/* visible continuously from scrollProgress to sync with 3D model phases.     */
/* -------------------------------------------------------------------------- */

function getServiceTextOpacity(i: number, rawProg: number) {
  /*
   * i is the service index (1 to 8).
   * Text fades in as the model arrives, stays fully visible during the hold,
   * then fades out as the model starts moving to center.
   * fadeOutStart matches TL.HOLD_END (0.12) so text is visible during dwell.
   */
  const fadeInStart = (i - 1) + 0.65;
  const fadeInEnd = (i - 1) + 0.85;

  const fadeOutStart = i + 0.18;
  const fadeOutEnd = i + 0.36;

  if (rawProg < fadeInStart) return 0;
  
  if (rawProg >= fadeInStart && rawProg < fadeInEnd) {
    return (rawProg - fadeInStart) / (fadeInEnd - fadeInStart);
  }
  
  if (rawProg >= fadeInEnd && rawProg < fadeOutStart) {
    return 1;
  }
  
  if (i === 8) {
    if (rawProg >= 9.0 && rawProg < 9.25) {
      return 1 - (rawProg - 9.0) / 0.25;
    }
    if (rawProg >= 9.25) {
      return 0;
    }
    return 1;
  }

  if (rawProg >= fadeOutStart && rawProg < fadeOutEnd) {
    return 1 - (rawProg - fadeOutStart) / (fadeOutEnd - fadeOutStart);
  }
  
  return 0;
}

interface StickyServicePanelProps {
  scrollProgress: number;
}

function StickyServicePanel({ scrollProgress }: StickyServicePanelProps) {
  const rawProg = scrollProgress * SECTION_COUNT;

  return (
    <div
      className="relative w-full h-full"
      aria-live="polite"
      aria-atomic="true"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
        const opacity = getServiceTextOpacity(i, rawProg);
        
        /* Optimization: don't mount text blocks that are completely invisible */
        if (opacity === 0) return null;

        /* Odd service index -> text LEFT, model RIGHT */
        const isLeft = i % 2 === 1;
        const sectionData = SECTIONS[i];
        const skills = SERVICE_SKILLS[i] ?? [];

        return (
          <ServiceTextBlock
            key={i}
            sectionData={sectionData}
            skills={skills}
            isLeft={isLeft}
            opacity={opacity}
            translateY={0}
            imageSrc={SERVICE_IMAGES[i]?.src}
            imageAlt={SERVICE_IMAGES[i]?.alt}
          />
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN EXPORT                                                                */
/* -------------------------------------------------------------------------- */

interface ScrollSectionsProps {
  currentSection: number;
  /** Normalised 0→1 progress over the full page — same value as ServiceStage */
  scrollProgress: number;
}

export default function ScrollSections({
  currentSection,
  scrollProgress,
}: ScrollSectionsProps) {
  const rawProg = scrollProgress * 11;

  return (
    <div className="relative z-10 w-full pointer-events-none">

      {/* ================================================================= */}
      {/* SECTION 0 — HERO                                                  */}
      {/* Normal document flow: the Three.js dots sit centred in the canvas */}
      {/* ================================================================= */}
      <section className="w-full h-[100vh]">
        <div
          className="sticky top-0 w-full h-screen flex items-center"
          style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
        >
        <RevealSection className="pointer-events-auto w-full">
          <div className="flex justify-start">
            <div className="max-w-xl space-y-5 text-left ml-4 md:ml-12">
              <span className="reveal-item block opacity-0 text-xs uppercase tracking-[0.35em] font-mono text-olive font-semibold">
                3DOTCREATIVES
              </span>
              <h1 className="reveal-item block opacity-0 text-5xl md:text-7xl font-extrabold tracking-tight text-dark-olive leading-[1.0]">
                WE CREATE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rust-gold to-rust-gold/70 font-bold">
                  IDEAS THAT MOVE.
                </span>
              </h1>
              <p className="reveal-item block opacity-0 text-base text-dark-olive/70 max-w-sm leading-relaxed">
                Digital experiences, content and creative solutions built for
                ambitious brands.
              </p>
              <div className="reveal-item flex opacity-0 pt-6 items-center gap-3">
                <div className="w-8 h-px bg-olive/40" />
                <span className="text-xs font-mono text-olive/60 tracking-[0.3em] uppercase">
                  Scroll to Explore
                </span>
                <span className="text-olive/60 animate-bounce text-xs">↓</span>
              </div>
            </div>
          </div>
        </RevealSection>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTIONS 1–7 — SERVICES                                           */}
      {/*                                                                   */}
      {/* 520vh container gives ~1.3 scrolls per service for 8 services.    */}
      {/* The inner sticky panel stays fixed at top: 0 throughout and       */}
      {/* renders the active service text + image driven by scrollProgress. */}
      {/* ================================================================= */}
      <div style={{ height: "520vh" }}>
        <div
          style={{ position: "sticky", top: 0, height: "100vh" }}
          className="pointer-events-none"
        >
          <StickyServicePanel scrollProgress={scrollProgress} />
        </div>
      </div>

      {/* ================================================================= */}
      {/* SECTION 8 — ALL SERVICES                                          */}
      {/* ================================================================= */}
      <section className="w-full h-[100vh]">
        <div
          className="sticky top-0 w-full h-screen flex items-center"
          style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
        >
        <RevealSection className="pointer-events-auto w-full" trigger={rawProg >= 9.85}>
          <div className="flex justify-center">
            <div className="max-w-lg space-y-4 text-center">
              <span className="reveal-item block opacity-0 text-xs uppercase tracking-widest font-mono text-rust-gold font-semibold">
                09 — The Whole Picture
              </span>
              <h2 className="reveal-item block opacity-0 text-5xl md:text-6xl font-extrabold tracking-tight text-dark-olive leading-tight">
                EVERYTHING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rust-gold to-rust-gold/70 font-bold">
                  CONNECTS.
                </span>
              </h2>
              <h3 className="reveal-item block opacity-0 text-lg font-mono text-olive/80 tracking-widest pt-1">
                IDEA. DESIGN. EXECUTION.
              </h3>
              <p className="reveal-item block opacity-0 text-sm text-dark-olive/70 max-w-md mx-auto leading-relaxed pt-2">
                One creative direction across digital, content, technology and
                growth.
              </p>
            </div>
          </div>
        </RevealSection>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SECTION 9 — SELECTED WORK                                         */}
      {/* ================================================================= */}
      <section className="w-full h-[100vh]">
        <div
          className="sticky top-0 w-full h-screen flex items-center"
          style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
        >
        <RevealSection className="pointer-events-auto w-full" trigger={rawProg >= 10.2}>
          <div className="flex justify-center">
            <div className="max-w-xl space-y-5 text-center">
              <span className="reveal-item block opacity-0 text-xs uppercase tracking-widest font-mono text-olive/60 font-semibold">
                Portfolio
              </span>
              <h2 className="reveal-item block opacity-0 text-5xl md:text-8xl font-extrabold tracking-tight text-dark-olive leading-none">
                SELECTED <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rust-gold to-rust-gold/70 font-bold">
                  WORK
                </span>
              </h2>
              <p className="reveal-item block opacity-0 text-sm text-dark-olive/70 max-w-sm mx-auto leading-relaxed">
                Explore selected brand cases, high-converting platforms, and
                strategic creative campaigns.
              </p>
              <div className="reveal-item opacity-0 pt-4 flex justify-center">
                <a
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-dark-olive text-cream text-xs tracking-[0.2em] uppercase font-semibold rounded-full hover:bg-olive hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  View All Projects{" "}
                  <span className="text-rust-gold">→</span>
                </a>
              </div>
            </div>
          </div>
        </RevealSection>
        </div>
      </section>

    </div>
  );
}
