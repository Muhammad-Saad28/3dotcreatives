"use client";

import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface GlbModelProps {
  path: string;
  targetSize?: number;
  rotation?: [number, number, number];
}

export default function GlbModel({
  path,
  targetSize = 1.6,
  rotation = [0, 0, 0],
}: GlbModelProps) {
  const { scene } = useGLTF(path);

  const { clone, centerOffset, uniformScale } = useMemo(() => {
    const c = scene.clone(true);

    c.traverse((child) => {
      const mesh = child as THREE.Mesh;

      if (!mesh.isMesh || !mesh.material) return;

      const materials = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material];

      materials.forEach((material) => {
        material.transparent = true;
      });
    });

    /*
     * Make sure all GLB transforms are evaluated before measuring.
     */
    c.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(c);

    const size = new THREE.Vector3();
    const worldCenter = new THREE.Vector3();

    box.getSize(size);
    box.getCenter(worldCenter);

    /*
     * Box3 center is world-space.
     * Convert it into the GLB's local coordinate system.
     */
    const localCenter = c.worldToLocal(
      worldCenter.clone()
    );

    const maxDimension = Math.max(
      size.x,
      size.y,
      size.z
    );

    const uniformScale =
      maxDimension > 0
        ? targetSize / maxDimension
        : 1;

    return {
      clone: c,
      centerOffset: localCenter.negate(),
      uniformScale,
    };
  }, [scene, targetSize]);

  return (
    <group>
      <group scale={uniformScale}>
        <group
          position={[
            centerOffset.x,
            centerOffset.y,
            centerOffset.z,
          ]}
          rotation={rotation}
        >
          <primitive object={clone} />
        </group>
      </group>
    </group>
  );
}

export function preloadGlb(path: string) {
  useGLTF.preload(path);
}
