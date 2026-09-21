"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "3 Dot Creatives completely transformed our brand's social media and website. Their creativity, professionalism and attention to detail are unmatched!",
    name: "Ayesha Khan",
    role: "Founder, Lumière Skincare",
    rating: 5,
  },
  {
    quote: "From strategy to execution, they handled everything for our product launch. The content quality and engagement we received exceeded all expectations.",
    name: "Hamza Tariq",
    role: "CEO, NexGen Solutions",
    rating: 5,
  },
  {
    quote: "Their team built us a stunning website and managed our entire online presence. We saw a 3x increase in leads within the first three months.",
    name: "Fatima Rizvi",
    role: "Marketing Director, Verde Co.",
    rating: 5,
  },
  {
    quote: "Professional, responsive, and genuinely creative. They don't just deliver work — they deliver results. Our Google Business Profile traffic doubled.",
    name: "Omar Sheikh",
    role: "Owner, Craft Brewing Co.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDir, setSlideDir] = useState<"left" | "right">("left");

  const goTo = useCallback((idx: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setSlideDir(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsAnimating(false);
    }, 400);
  }, [isAnimating]);

  const prev = () => {
    const idx = current === 0 ? testimonials.length - 1 : current - 1;
    goTo(idx, "right");
  };

  const next = useCallback(() => {
    const idx = current === testimonials.length - 1 ? 0 : current + 1;
    goTo(idx, "left");
  }, [current, goTo]);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      const idx = current === testimonials.length - 1 ? 0 : current + 1;
      goTo(idx, "left");
    }, 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#FDF6E3] relative overflow-hidden">
      <div className="container-shell max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] font-mono text-rust-gold font-semibold mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-dark-olive leading-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Quote mark */}
          <div className="absolute -top-6 left-8 lg:left-12 text-rust-gold/20 z-10">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </div>

          <div className="bg-[#efe5d6]/60 backdrop-blur-sm border border-beige/40 rounded-2xl p-8 lg:p-14 overflow-hidden">
            <div
              key={current}
              style={{
                animation: isAnimating
                  ? `slideOut${slideDir === "left" ? "Left" : "Right"} 0.4s ease-in forwards`
                  : `slideIn${slideDir === "left" ? "Left" : "Right"} 0.4s ease-out`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center lg:justify-start">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-rust-gold text-rust-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-dark-olive text-lg lg:text-xl leading-relaxed mb-10 text-center lg:text-left font-medium">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-olive to-rust-gold flex items-center justify-center text-cream font-bold text-sm">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-dark-olive font-bold text-sm tracking-wide">
                    {t.name}
                  </p>
                  <p className="text-dark-olive/40 text-xs tracking-wider uppercase">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-dark-olive/15 flex items-center justify-center text-dark-olive/50 hover:bg-dark-olive hover:text-cream transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? "left" : "right")}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-rust-gold"
                    : "w-2 bg-dark-olive/20 hover:bg-dark-olive/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-dark-olive/15 flex items-center justify-center text-dark-olive/50 hover:bg-dark-olive hover:text-cream transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(-60px); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutRight {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(60px); }
        }
      `}</style>
    </section>
  );
}
