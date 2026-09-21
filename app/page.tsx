"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SplashScreen from "@/components/SplashScreen";

import HeroSection from "@/components/home/HeroSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import PortfolioPreviewSection from "@/components/home/PortfolioPreviewSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      <SplashScreen onComplete={() => setSplashDone(true)} />

      <div
        className={`relative transition-opacity duration-700 ${
          splashDone ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
        
        <main>
          <HeroSection />
          <ServicesSection />
          <WhyUsSection />
          <AboutSection />
          <PortfolioPreviewSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
