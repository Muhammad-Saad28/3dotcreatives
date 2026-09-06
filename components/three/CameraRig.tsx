"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Mirror ServiceStage final X positions for gentle camera lean
const FINAL_X: Record<number, number> = {
  0:  0,
  1:  2.05,
  2: -2.05,
  3:  2.05,
  4:  -1.5,
  5:  2.05,
  6: -2.05,
  7:  2.05,
  8:  0,
  9:  0,
};

const TOTAL_SECTIONS = 10;

interface CameraRigProps {
  scrollProgress?: number;
  mousePosition?: { x: number; y: number };
}

export default function CameraRig({
  scrollProgress = 0,
  mousePosition = { x: 0, y: 0 },
}: CameraRigProps) {
  const { camera } = useThree();
  const targetPos   = useRef(new THREE.Vector3(0, 0, 4.8));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    const clamped = Math.max(0, Math.min(0.9999, scrollProgress));
    const raw     = clamped * TOTAL_SECTIONS;
    const secIdx  = Math.floor(raw);
    const localT  = raw - secIdx;

    const finalX = FINAL_X[secIdx] ?? 0;

    // Camera leans gently toward the settled model position
    // During transition (localT < 0.7) stay near center, then lean as model moves
    const camLeanT   = Math.max(0, (localT - 0.68) / 0.20); // 0→1 during MOVE phase
    const camX       = finalX * 0.22 * camLeanT;

    // Very subtle Z dolly — slight push in on transitions
    const dollyZ = 4.8 - Math.sin(localT * Math.PI) * 0.15;

    targetPos.current.set(
      camX + mousePosition.x * 0.12,
      mousePosition.y * 0.08,
      dollyZ
    );

    targetLookAt.current.set(
      camX * 0.5,
      0,
      0
    );

    // Soft lerp — camera should feel independent, not rigid
    camera.position.lerp(targetPos.current, 0.015);

    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    const currentLookAt = new THREE.Vector3()
      .copy(camera.position)
      .add(dir.multiplyScalar(5));
    currentLookAt.lerp(targetLookAt.current, 0.015);
    camera.lookAt(currentLookAt);
  });

  return null;
}
