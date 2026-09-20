"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollExperience from "@/components/home/ScrollExperience";
import SplashScreen from "@/components/SplashScreen";
import CreativeScene from "@/components/three/CreativeScene";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const handleProgressChange = useCallback((progress: number, section: number) => {
    setScrollProgress(progress);
    setActiveSection(section);
  }, []);

  return (
    <>
      {/* 3D Canvas — always visible */}
      <div className="fixed inset-0 z-[9999]">
        <CreativeScene scrollProgress={scrollProgress} splashDone={splashDone} className="w-full h-full" />
      </div>

      <SplashScreen onComplete={() => setSplashDone(true)} />

      <div
        className={`relative z-[10001] transition-opacity duration-700 pointer-events-none ${
          splashDone ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="pointer-events-auto"><Navbar /></div>
        <main className="flex-1 pointer-events-none">
          <ScrollExperience
            activeSection={activeSection}
            scrollProgress={scrollProgress}
            onProgressChange={handleProgressChange}
          />
        </main>
        <div className="pointer-events-auto"><Footer /></div>
      </div>
    </>
  );
}
