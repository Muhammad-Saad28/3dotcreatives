"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface ProjectGallerySliderProps {
  images: string[];
  title: string;
}

export default function ProjectGallerySlider({ images, title }: ProjectGallerySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full h-[60vh] md:h-[85vh] bg-beige/20 rounded-3xl overflow-hidden group p-4 lg:p-12 bg-[#efe5d6]/40 flex items-center justify-center">
        
        {/* Main Image Slider */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl flex">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-full flex-shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.87,_0,_0.13,_1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <Image
                src={img}
                alt={`${title} Gallery Image ${idx + 1}`}
                fill
                className="object-contain transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-cream/90 text-dark-olive rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg z-10 focus:outline-none focus:opacity-100"
              aria-label="Previous image"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-cream/90 text-dark-olive rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg z-10 focus:outline-none focus:opacity-100"
              aria-label="Next image"
            >
              <ArrowRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Footer Navigation info */}
      {images.length > 1 && (
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-dark-olive' : 'w-2 bg-dark-olive/20 hover:bg-dark-olive/40'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextImage}
            className="inline-flex items-center gap-3 px-6 py-3 border border-dark-olive/20 text-dark-olive text-xs font-bold uppercase tracking-widest hover:bg-dark-olive hover:text-cream transition-colors duration-300 rounded-full group"
          >
            Next Image
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
}
