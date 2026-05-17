"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, SpotLight } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AtmosphericShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.2}>
        <icosahedronGeometry args={[2, 16]} />
        <MeshDistortMaterial
          color="#050505"
          emissive="#2a2444"
          emissiveIntensity={0.5}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

export default function Atmosphere() {
  return (
    <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <fog attach="fog" args={["#050505", 2, 10]} />
        <ambientLight intensity={0.5} />
        <SpotLight
          position={[5, 5, 5]}
          angle={0.15}
          penumbra={1}
          intensity={2}
          color="#6d6785"
        />
        <AtmosphericShape />
      </Canvas>
    </div>
  );
}
