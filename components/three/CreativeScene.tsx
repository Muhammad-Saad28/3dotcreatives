"use client";

import { Suspense, useState, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import CameraRig from "./CameraRig";
import Lights from "./Lights";
import ServiceStage from "./ServiceStage";
import FloatingParticles from "./FloatingParticles";

interface CreativeSceneProps {
  scrollProgress?: number;
  hoveredService?: number | null;
  separated?: boolean;
  className?: string;
}

function isWebGLAvailable(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

function SceneContent({ scrollProgress }: { scrollProgress: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <CameraRig
        scrollProgress={scrollProgress}
        mousePosition={mousePosition}
      />
      <Lights />
      <ServiceStage scrollProgress={scrollProgress} />
      <FloatingParticles count={60} />
    </>
  );
}

export default function CreativeScene({
  scrollProgress = 0,
  hoveredService = null,
  separated = false,
  className = "",
}: CreativeSceneProps) {
  const [webGLAvailable, setWebGLAvailable] = useState(true);
  const [mounted, setMounted] = useState(false);

  const checkWebGL = useCallback(() => {
    setWebGLAvailable(isWebGLAvailable());
    setMounted(true);
  }, []);

  useEffect(() => {
    checkWebGL();
  }, [checkWebGL]);

  if (!mounted || !webGLAvailable) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        aria-hidden="true"
      >
        <div className="flex gap-3 opacity-20">
          <div className="w-16 h-16 rounded-full bg-olive" />
          <div className="w-14 h-14 rounded-full bg-rust-gold mt-2" />
          <div className="w-12 h-12 rounded-full bg-olive mt-1" />
        </div>
      </div>
    );
  }

  // If separated is passed (e.g. in AboutHero), map it to separated dots progress
  const effectiveProgress = separated ? 0.05 : scrollProgress;

  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SceneContent scrollProgress={effectiveProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
