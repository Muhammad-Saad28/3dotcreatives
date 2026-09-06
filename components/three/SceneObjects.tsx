"use client";

import { useMemo } from "react";
import * as THREE from "three";

export function ThreeDotsGroup({
  progress,
}: {
  progress: number;
}) {
  const oliveMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#59613B"),
        metalness: 0.2,
        roughness: 0.15,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
      }),
    []
  );

  const rustMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#B98245"),
        metalness: 0.3,
        roughness: 0.1,
        clearcoat: 1.0,
      }),
    []
  );

  const sep = Math.min(1, Math.max(0, (progress - 0.02) / 0.08));
  const p1X = -0.55 - sep * 0.8;
  const p2X = 0;
  const p3X = 0.55 + sep * 0.8;

  const p1Y = 0.2 + sep * 0.3;
  const p2Y = -0.3 - sep * 0.3;
  const p3Y = 0.15 + sep * 0.2;

  return (
    <group scale={0.65}>
      <mesh position={[p1X, p1Y, 0]} material={oliveMat}>
        <sphereGeometry args={[0.36, 48, 48]} />
      </mesh>
      <mesh position={[p2X, p2Y, 0.2]} material={rustMat}>
        <sphereGeometry args={[0.32, 48, 48]} />
      </mesh>
      <mesh position={[p3X, p3Y, -0.1]} material={oliveMat}>
        <sphereGeometry args={[0.28, 48, 48]} />
      </mesh>
    </group>
  );
}

export function BrowserWindow() {
  const glassFrameMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#D8C3A5",
        roughness: 0.1,
        metalness: 0.1,
        transmission: 0.85,
        transparent: true,
        thickness: 0.5,
        ior: 1.4,
        clearcoat: 1.0,
      }),
    []
  );

  const screenMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#F4EBDD",
        roughness: 0.2,
        clearcoat: 0.8,
      }),
    []
  );

  const oliveDot = useMemo(
    () => new THREE.MeshPhysicalMaterial({ color: "#59613B", roughness: 0.2 }),
    []
  );
  const rustDot = useMemo(
    () => new THREE.MeshPhysicalMaterial({ color: "#B98245", roughness: 0.2 }),
    []
  );

  return (
    <group scale={0.65}>
      {/* Outer Frosted Glass Frame */}
      <mesh material={glassFrameMat}>
        <boxGeometry args={[2.8, 1.9, 0.12]} />
      </mesh>
      {/* Screen insert */}
      <mesh position={[0, -0.08, 0.07]} material={screenMat}>
        <planeGeometry args={[2.6, 1.5]} />
      </mesh>
      {/* Top window controls */}
      <mesh position={[-1.1, 0.78, 0.08]} material={rustDot}>
        <circleGeometry args={[0.045, 32]} />
      </mesh>
      <mesh position={[-0.95, 0.78, 0.08]} material={oliveDot}>
        <circleGeometry args={[0.045, 32]} />
      </mesh>
      <mesh position={[-0.8, 0.78, 0.08]} material={oliveDot}>
        <circleGeometry args={[0.045, 32]} />
      </mesh>
    </group>
  );
}

export function StudioCamera() {
  const bodyMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#3D4426",
        roughness: 0.35,
        metalness: 0.55,
        clearcoat: 0.6,
        emissive: new THREE.Color("#1a1c0d"),
        emissiveIntensity: 0.15,
      }),
    []
  );
  const metalMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#D8C3A5",
        roughness: 0.2,
        metalness: 0.85,
      }),
    []
  );
  const lensGlassMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#B98245",
        roughness: 0.05,
        metalness: 0.1,
        transmission: 0.9,
        transparent: true,
        thickness: 0.8,
        ior: 1.5,
      }),
    []
  );

  return (
    <group scale={0.65}>
      {/* Camera Body */}
      <mesh material={bodyMat}>
        <boxGeometry args={[1.8, 1.1, 0.9]} />
      </mesh>
      {/* Top Metallic Grip */}
      <mesh position={[0, 0.7, 0]} material={metalMat}>
        <boxGeometry args={[0.7, 0.25, 0.4]} />
      </mesh>
      {/* Lens Barrel */}
      <mesh position={[0, 0, 0.6]} rotation={[Math.PI / 2, 0, 0]} material={metalMat}>
        <cylinderGeometry args={[0.5, 0.55, 0.6, 32]} />
      </mesh>
      {/* Lens Optical Glass */}
      <mesh position={[0, 0, 0.91]} rotation={[Math.PI / 2, 0, 0]} material={lensGlassMat}>
        <cylinderGeometry args={[0.48, 0.48, 0.06, 32]} />
      </mesh>
    </group>
  );
}

export function SocialPhone() {
  const glassBodyMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#303522",
        roughness: 0.15,
        metalness: 0.4,
        clearcoat: 1.0,
      }),
    []
  );
  const screenMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#F4EBDD",
        roughness: 0.1,
      }),
    []
  );
  const glassCardMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#D8C3A5",
        roughness: 0.1,
        transmission: 0.8,
        transparent: true,
        thickness: 0.4,
      }),
    []
  );
  const accentCardMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#59613B",
        roughness: 0.2,
        clearcoat: 0.8,
      }),
    []
  );

  return (
    <group scale={0.65}>
      {/* Phone chassis */}
      <mesh material={glassBodyMat}>
        <boxGeometry args={[1.2, 2.3, 0.1]} />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 0, 0.06]} material={screenMat}>
        <planeGeometry args={[1.1, 2.15]} />
      </mesh>

      {/* Orbiting Translucent Glass Cards */}
      <mesh position={[-1.0, 0.5, 0.35]} rotation={[0, 0.3, 0.1]} material={glassCardMat}>
        <boxGeometry args={[0.65, 0.45, 0.03]} />
      </mesh>
      <mesh position={[1.0, -0.4, 0.4]} rotation={[0, -0.4, -0.1]} material={accentCardMat}>
        <boxGeometry args={[0.7, 0.4, 0.03]} />
      </mesh>
    </group>
  );
}

export function AppPhone() {
  const bodyMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#59613B",
        roughness: 0.2,
        metalness: 0.3,
        clearcoat: 1.0,
      }),
    []
  );
  const screenMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#F4EBDD",
        roughness: 0.1,
      }),
    []
  );
  const uiBlock1 = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#B98245", roughness: 0.2 }),
    []
  );
  const uiBlock2 = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#D8C3A5", roughness: 0.2 }),
    []
  );

  return (
    <group scale={0.65}>
      <mesh material={bodyMat}>
        <boxGeometry args={[1.25, 2.4, 0.1]} />
      </mesh>
      <mesh position={[0, 0, 0.06]} material={screenMat}>
        <planeGeometry args={[1.15, 2.25]} />
      </mesh>
      <mesh position={[0, 0.7, 0.07]} material={uiBlock1}>
        <planeGeometry args={[0.95, 0.45]} />
      </mesh>
      <mesh position={[0, 0.05, 0.07]} material={uiBlock2}>
        <planeGeometry args={[0.95, 0.65]} />
      </mesh>
      <mesh position={[0, -0.65, 0.07]} material={uiBlock1}>
        <planeGeometry args={[0.95, 0.35]} />
      </mesh>
    </group>
  );
}

export function ProductPodium() {
  const podiumMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#D8C3A5",
        roughness: 0.3,
      }),
    []
  );
  const glassBottleMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#59613B",
        roughness: 0.05,
        metalness: 0.1,
        transmission: 0.7,
        transparent: true,
        thickness: 0.6,
        clearcoat: 1.0,
      }),
    []
  );
  const metallicCapMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#B98245",
        metalness: 0.9,
        roughness: 0.15,
      }),
    []
  );

  return (
    <group scale={0.65}>
      {/* Studio Base Platform */}
      <mesh position={[0, -0.9, 0]} material={podiumMat}>
        <cylinderGeometry args={[1.4, 1.6, 0.35, 32]} />
      </mesh>
      {/* Glass Bottle Product */}
      <mesh position={[0, 0.1, 0]} material={glassBottleMat}>
        <cylinderGeometry args={[0.42, 0.42, 1.5, 32]} />
      </mesh>
      {/* Gold Metallic Cap */}
      <mesh position={[0, 0.95, 0]} material={metallicCapMat}>
        <cylinderGeometry args={[0.22, 0.22, 0.25, 32]} />
      </mesh>
    </group>
  );
}

export function LocationMap() {
  const mapMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#F4EBDD",
        roughness: 0.3,
        clearcoat: 0.5,
      }),
    []
  );
  const roadMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#D8C3A5",
        roughness: 0.5,
      }),
    []
  );
  const pinMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#B98245",
        metalness: 0.4,
        roughness: 0.1,
        clearcoat: 1.0,
      }),
    []
  );

  return (
    <group scale={0.65} rotation={[0.4, -0.3, 0]}>
      {/* Map surface card */}
      <mesh material={mapMat}>
        <boxGeometry args={[2.5, 1.7, 0.08]} />
      </mesh>
      {/* Map grid lines */}
      <mesh position={[0, 0, 0.05]} material={roadMat}>
        <planeGeometry args={[2.3, 0.16]} />
      </mesh>
      <mesh position={[0, 0, 0.05]} rotation={[0, 0, Math.PI / 2]} material={roadMat}>
        <planeGeometry args={[1.5, 0.16]} />
      </mesh>

      {/* 3D Location Pin */}
      <group position={[0, 0.25, 0.45]}>
        <mesh position={[0, 0.45, 0]} material={pinMat}>
          <sphereGeometry args={[0.3, 32, 32]} />
        </mesh>
        <mesh position={[0, 0.12, 0]} material={pinMat}>
          <coneGeometry args={[0.3, 0.6, 32]} />
        </mesh>
      </group>
    </group>
  );
}

export function PackagingBox() {
  const boxMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#D8C3A5",
        roughness: 0.4,
        metalness: 0.1,
      }),
    []
  );
  const tapeMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#59613B",
        roughness: 0.2,
        clearcoat: 0.8,
      }),
    []
  );

  return (
    <group scale={0.65}>
      <mesh material={boxMat}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
      </mesh>
      {/* Brand Accent Tape */}
      <mesh position={[0, 0, 0.76]} material={tapeMat}>
        <planeGeometry args={[1.5, 0.35]} />
      </mesh>
      <mesh position={[0, 0.76, 0]} rotation={[Math.PI / 2, 0, 0]} material={tapeMat}>
        <planeGeometry args={[1.5, 0.35]} />
      </mesh>
    </group>
  );
}

export function GrowthGraph() {
  const barMat1 = useMemo(
    () => new THREE.MeshPhysicalMaterial({ color: "#59613B", roughness: 0.2, clearcoat: 0.8 }),
    []
  );
  const barMat2 = useMemo(
    () => new THREE.MeshPhysicalMaterial({ color: "#B98245", roughness: 0.1, clearcoat: 1.0 }),
    []
  );
  const barMat3 = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#D8C3A5", roughness: 0.3 }),
    []
  );
  const arrowMat = useMemo(
    () => new THREE.MeshPhysicalMaterial({ color: "#303522", metalness: 0.5, roughness: 0.2 }),
    []
  );

  return (
    <group scale={0.65}>
      <mesh position={[-0.7, -0.5, 0]} material={barMat3}>
        <boxGeometry args={[0.35, 0.7, 0.35]} />
      </mesh>
      <mesh position={[-0.25, -0.15, 0]} material={barMat1}>
        <boxGeometry args={[0.35, 1.2, 0.35]} />
      </mesh>
      <mesh position={[0.2, 0.25, 0]} material={barMat2}>
        <boxGeometry args={[0.35, 1.8, 0.35]} />
      </mesh>
      <mesh position={[0.65, 0.7, 0]} material={barMat1}>
        <boxGeometry args={[0.35, 2.5, 0.35]} />
      </mesh>

      <group position={[0.2, 1.4, 0.25]} rotation={[0, 0, -Math.PI / 4]}>
        <mesh material={arrowMat}>
          <coneGeometry args={[0.2, 0.5, 32]} />
        </mesh>
      </group>
    </group>
  );
}
