"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import ChatPanel from "./ChatPanel";

export default function FloatingBot() {
  const [mounted, setMounted] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Physics states via refs to keep animations running at 60fps without React re-render lag
  const pos = useRef({ x: 200, y: 200 });
  const vel = useRef({ x: 1.5, y: 1.2 });
  const rotation = useRef(0);
  const currentMultiplier = useRef(1.0);
  
  const isHovered = useRef(false);
  const isDragged = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const dragOffset = useRef({ x: 0, y: 0 });

  const orbSize = 64; // px

  useEffect(() => {
    setMounted(true);

    // Initialize positions randomly on screen
    const margin = 100;
    const screenW = typeof window !== "undefined" ? window.innerWidth : 800;
    const screenH = typeof window !== "undefined" ? window.innerHeight : 600;

    pos.current = {
      x: Math.max(margin, Math.random() * (screenW - orbSize - margin)),
      y: Math.max(margin, Math.random() * (screenH - orbSize - margin)),
    };

    // Initialize random velocity
    const angle = Math.random() * Math.PI * 2;
    const speed = 1.6; // Adjust speed here
    vel.current = {
      x: Math.cos(angle) * speed,
      y: Math.sin(angle) * speed,
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let animId: number;

    const updatePhysics = () => {
      if (isChatOpen) {
        // Stop updates when chat drawer is open
        animId = requestAnimationFrame(updatePhysics);
        return;
      }

      const screenW = window.innerWidth;
      const screenH = window.innerHeight;
      const maxX = screenW - orbSize;
      const maxY = screenH - orbSize;

      if (isDragged.current) {
        // Directly follow drag coordinates
        // No velocity updates, but keep track of movement
      } else {
        // LERP the speed multiplier (0.05 when hovered, 1.0 when active)
        const targetMultiplier = isHovered.current ? 0.05 : 1.0;
        currentMultiplier.current += (targetMultiplier - currentMultiplier.current) * 0.1;

        const dx = vel.current.x * currentMultiplier.current;
        const dy = vel.current.y * currentMultiplier.current;

        // Predict next positions
        let nextX = pos.current.x + dx;
        let nextY = pos.current.y + dy;

        // Collision logic (Bounce off screen edges)
        if (nextX <= 0) {
          vel.current.x = Math.abs(vel.current.x);
          nextX = 0;
        } else if (nextX >= maxX) {
          vel.current.x = -Math.abs(vel.current.x);
          nextX = maxX;
        }

        if (nextY <= 0) {
          vel.current.y = Math.abs(vel.current.y);
          nextY = 0;
        } else if (nextY >= maxY) {
          vel.current.y = -Math.abs(vel.current.y);
          nextY = maxY;
        }

        pos.current.x = nextX;
        pos.current.y = nextY;

        // Update rotation based on physical displacement
        rotation.current += (Math.abs(dx) + Math.abs(dy)) * 0.4;
      }

      // Render styles directly to DOM element for optimal performance
      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      if (innerRef.current) {
        innerRef.current.style.transform = `rotate(${rotation.current}deg)`;
      }

      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);

    // Dynamic resize handler
    const handleResize = () => {
      const maxX = window.innerWidth - orbSize;
      const maxY = window.innerHeight - orbSize;
      if (pos.current.x > maxX) pos.current.x = maxX;
      if (pos.current.y > maxY) pos.current.y = maxY;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [mounted, isChatOpen]);

  // Drag handlers for desktop and mobile
  const startDrag = (clientX: number, clientY: number) => {
    isDragged.current = true;
    dragStart.current = { x: clientX, y: clientY };
    dragOffset.current = { ...pos.current };
  };

  const onDrag = (clientX: number, clientY: number) => {
    if (!isDragged.current) return;
    const dx = clientX - dragStart.current.x;
    const dy = clientY - dragStart.current.y;

    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const maxX = screenW - orbSize;
    const maxY = screenH - orbSize;

    // Direct tracking with boundaries clamp
    pos.current.x = Math.max(0, Math.min(maxX, dragOffset.current.x + dx));
    pos.current.y = Math.max(0, Math.min(maxY, dragOffset.current.y + dy));

    if (containerRef.current) {
      containerRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
    }
  };

  const endDrag = () => {
    if (!isDragged.current) return;
    isDragged.current = false;
    
    // Give a slight velocity push upon drag release to keep it rolling
    const angle = Math.random() * Math.PI * 2;
    const speed = 1.6;
    vel.current = {
      x: Math.cos(angle) * speed,
      y: Math.sin(angle) * speed,
    };
  };

  if (!mounted) return null;

  return (
    <>
      {/* Bouncing Floating Trigger */}
      <div
        ref={containerRef}
        onMouseEnter={() => {
          isHovered.current = true;
        }}
        onMouseLeave={() => {
          isHovered.current = false;
        }}
        onMouseDown={(e) => {
          // Only trigger drag on left click
          if (e.button === 0) startDrag(e.clientX, e.clientY);
        }}
        onMouseMove={(e) => onDrag(e.clientX, e.clientY)}
        onMouseUp={endDrag}
        onTouchStart={(e) => {
          if (e.touches.length === 1) {
            startDrag(e.touches[0].clientX, e.touches[0].clientY);
          }
        }}
        onTouchMove={(e) => {
          if (e.touches.length === 1) {
            onDrag(e.touches[0].clientX, e.touches[0].clientY);
          }
        }}
        onTouchEnd={endDrag}
        onClick={(e) => {
          // If the user drags, don't count it as a chat-opening click
          const dx = Math.abs(pos.current.x - dragOffset.current.x);
          const dy = Math.abs(pos.current.y - dragOffset.current.y);
          if (dx < 5 && dy < 5) {
            setIsChatOpen(true);
          }
        }}
        style={{
          width: `${orbSize}px`,
          height: `${orbSize}px`,
        }}
        className={`fixed top-0 left-0 z-[100] cursor-grab active:cursor-grabbing transition-opacity duration-500 ease-out select-none ${
          isChatOpen ? "opacity-0 pointer-events-none scale-50" : "opacity-100 scale-100"
        }`}
      >
        {/* Glow Aura backdrop */}
        <div className="absolute inset-0 rounded-full bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.08)] backdrop-blur-md hover:scale-105 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.18)] transition-all duration-300 flex items-center justify-center group" />

        {/* Rolling/rotating content */}
        <div
          ref={innerRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center transition-colors group-hover:bg-white/[0.08]">
            <Sparkles className="w-4 h-4 text-foreground/80 group-hover:text-white transition-colors" />
          </div>

          {/* Tiny orbiting nodes for additional tech details */}
          <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="absolute bottom-2 left-1 w-1 h-1 rounded-full bg-white/15 animate-pulse" />
        </div>

        {/* Small Tooltip overlay when hovered */}
        <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 border border-white/10 px-2 py-0.5 rounded text-[0.55rem] font-mono text-muted-foreground uppercase tracking-widest pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          CHAT WITH ME
        </div>
      </div>

      {/* Slide-out Chat Panel Drawer */}
      <ChatPanel isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
