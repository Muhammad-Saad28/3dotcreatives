"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

interface ThreeDotsProps {
  scrollProgress?: number;
  hoveredService?: number | null;
  separated?: boolean;
}

export default function ThreeDots({
  scrollProgress = 0,
  hoveredService = null,
  separated = false,
}: ThreeDotsProps) {
  const groupRef = useRef<THREE.Group>(null);
  const dot1Ref = useRef<THREE.Mesh>(null);
  const dot2Ref = useRef<THREE.Mesh>(null);
  const dot3Ref = useRef<THREE.Mesh>(null);
  const [linePoints, setLinePoints] = useState<[[number, number, number], [number, number, number], [number, number, number]]>([
    [-0.8, 0.3, 0],
    [0, -0.4, 0.3],
    [0.8, 0.2, -0.2],
  ]);

  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#59613B"),
        metalness: 0.3,
        roughness: 0.2,
        clearcoat: 0.8,
        clearcoatRoughness: 0.1,
        envMapIntensity: 1.2,
      }),
    []
  );

  const accentMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#B98245"),
        metalness: 0.4,
        roughness: 0.15,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        envMapIntensity: 1.5,
      }),
    []
  );

  const targetPositions = useMemo(() => {
    if (separated) {
      return [
        new THREE.Vector3(-1.8, 0.8, 0),
        new THREE.Vector3(0, -1, 0.5),
        new THREE.Vector3(1.8, 0.6, -0.3),
      ];
    }
    return [
      new THREE.Vector3(-0.8, 0.3, 0),
      new THREE.Vector3(0, -0.4, 0.3),
      new THREE.Vector3(0.8, 0.2, -0.2),
    ];
  }, [separated]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.15 + scrollProgress * 0.5;
      groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.05;
    }

    const refs = [dot1Ref, dot2Ref, dot3Ref];
    refs.forEach((ref, i) => {
      if (ref.current) {
        const target = targetPositions[i];
        ref.current.position.lerp(target, 0.03);
        ref.current.position.y += Math.sin(time * 0.8 + i * 1.5) * 0.003;

        const baseScale = hoveredService === i ? 1.3 : 1;
        const targetScale = separated ? 0.85 : baseScale;
        ref.current.scale.lerp(
          new THREE.Vector3(targetScale, targetScale, targetScale),
          0.05
        );
      }
    });

    if (dot1Ref.current && dot2Ref.current && dot3Ref.current) {
      const p1 = dot1Ref.current.position;
      const p2 = dot2Ref.current.position;
      const p3 = dot3Ref.current.position;
      setLinePoints([
        [p1.x, p1.y, p1.z],
        [p2.x, p2.y, p2.z],
        [p3.x, p3.y, p3.z],
      ]);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={dot1Ref} material={material}>
        <sphereGeometry args={[0.4, 64, 64]} />
      </mesh>
      <mesh ref={dot2Ref} material={accentMaterial}>
        <sphereGeometry args={[0.35, 64, 64]} />
      </mesh>
      <mesh ref={dot3Ref} material={material}>
        <sphereGeometry args={[0.3, 64, 64]} />
      </mesh>
      <Line
        points={linePoints}
        color="#D8C3A5"
        lineWidth={1}
        transparent
        opacity={0.4}
      />
    </group>
  );
}
