"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingParticlesProps {
  count?: number;
  mobile?: boolean;
}

export default function FloatingParticles({
  count = 80,
  mobile = false,
}: FloatingParticlesProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const actualCount = mobile ? Math.floor(count * 0.3) : count;

  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: actualCount }, () => ({
      x: (Math.random() - 0.5) * 12,
      y: (Math.random() - 0.5) * 12,
      z: (Math.random() - 0.5) * 8,
      scale: Math.random() * 0.03 + 0.01,
      speed: Math.random() * 0.3 + 0.1,
      offset: Math.random() * Math.PI * 2,
    }));
  }, [actualCount]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    particles.forEach((particle, i) => {
      dummy.position.set(
        particle.x + Math.sin(time * particle.speed + particle.offset) * 0.5,
        particle.y + Math.cos(time * particle.speed * 0.7 + particle.offset) * 0.3,
        particle.z
      );
      dummy.scale.setScalar(particle.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, actualCount]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#D8C3A5" transparent opacity={0.3} />
    </instancedMesh>
  );
}
