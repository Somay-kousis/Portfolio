"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, SpotLight } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  
  const [sphere] = useState(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const r = 12 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8d8a80"
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.22}
        />
      </Points>
    </group>
  );
}

function CameraRig() {
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollY(progress);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state) => {
    const targetZ = 6 - (scrollY * 4); // Move from z=6 to z=2
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.03);
    
    // Slow atmospheric breathing + cursor reactivity
    const targetX = Math.sin(state.clock.elapsedTime * 0.2) * 0.3 + (mouse.x * 0.5);
    const targetY = Math.cos(state.clock.elapsedTime * 0.15) * 0.3 + (mouse.y * 0.5);
    
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
  });

  return null;
}

export default function GlobalScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-background">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <fog attach="fog" args={["#f6f5f1", 3, 15]} />
        <ambientLight intensity={0.45} />
        <SpotLight
          position={[0, 8, 2]}
          angle={0.4}
          penumbra={1}
          intensity={0.65}
          color="#b8b2a5"
          distance={25}
        />
        <Particles />
        <CameraRig />
      </Canvas>
    </div>
  );
}
