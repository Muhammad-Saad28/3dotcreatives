"use client";

export default function Lights() {
  return (
    <>
      {/* Soft warm ambient base */}
      <ambientLight intensity={1.4} color="#F4EBDD" />
      
      {/* Main Studio Key Light (warm cream tone for specular reflections) */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.5}
        color="#F4EBDD"
        castShadow
      />

      {/* Cool Rim/Fill Light (olive tone to accentuate object edges) */}
      <directionalLight position={[-6, -4, -4]} intensity={0.6} color="#59613B" />

      {/* Gold Specular Highlight Accent */}
      <pointLight position={[0, 4, 3]} intensity={0.7} color="#B98245" />
    </>
  );
}
