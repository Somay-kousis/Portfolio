"use client";

import { useEffect, useRef } from "react";

type Particle = {
  angle: number;
  radius: number;
  length: number;
  width: number;
  alpha: number;
  speed: number;
  hue: number;
};

const palette = [222, 238, 258, 286, 326, 354, 24, 42];

function createParticles(count: number) {
  return Array.from({ length: count }, (_, index): Particle => {
    const ring = index / count;
    const radius = 0.14 + Math.pow(ring, 0.72) * 0.88;
    const colorIndex = Math.floor((index / count) * palette.length);

    return {
      angle: index * 2.399963 + Math.sin(index * 0.37) * 0.28,
      radius,
      length: 2 + Math.random() * 7,
      width: 0.7 + Math.random() * 1.6,
      alpha: 0.12 + Math.random() * 0.45,
      speed: 0.00008 + Math.random() * 0.00018,
      hue: palette[colorIndex % palette.length],
    };
  });
}

export default function AgentField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = createParticles(380);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = createParticles(width < 700 ? 220 : 380);
    };

    const render = (time: number) => {
      context.clearRect(0, 0, width, height);

      const centerX = width * 0.67;
      const centerY = height * 0.55;
      const maxRadius = Math.max(width, height) * 0.64;

      context.save();
      context.globalCompositeOperation = "multiply";

      for (const particle of particles) {
        const drift = time * particle.speed;
        const angle = particle.angle + drift;
        const spiral = particle.radius * maxRadius;
        const wobble = Math.sin(time * 0.0003 + particle.angle * 3) * 10;
        const x = centerX + Math.cos(angle) * (spiral + wobble);
        const y = centerY + Math.sin(angle) * (spiral * 0.72 + wobble * 0.35);

        if (x < -40 || x > width + 40 || y < -40 || y > height + 40) continue;

        context.save();
        context.translate(x, y);
        context.rotate(angle + Math.PI / 2);
        context.strokeStyle = `hsla(${particle.hue}, 82%, 52%, ${particle.alpha})`;
        context.lineWidth = particle.width;
        context.lineCap = "round";
        context.beginPath();
        context.moveTo(-particle.length / 2, 0);
        context.lineTo(particle.length / 2, 0);
        context.stroke();
        context.restore();
      }

      context.restore();
      animationFrame = requestAnimationFrame(render);
    };

    resize();
    animationFrame = requestAnimationFrame(render);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="agent-field" aria-hidden="true">
      <canvas ref={canvasRef} className="agent-field-canvas" />
    </div>
  );
}
