"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverType, setHoverType] = useState<"none" | "default" | "project">("none");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isProjectHover = target.closest(".project-hover-trigger");
      const isStandardHover = 
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hover-trigger");

      if (isProjectHover) {
        setHoverType("project");
      } else if (isStandardHover) {
        setHoverType("default");
      } else {
        setHoverType("none");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{
        backgroundColor: hoverType === "project" ? "rgba(255, 255, 255, 0.03)" : "rgba(255, 255, 255, 1)",
        border: hoverType === "project" ? "1px solid rgba(255, 255, 255, 0.15)" : "none",
        mixBlendMode: "difference",
      }}
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        scale: hoverType === "project" ? 6 : hoverType === "default" ? 2.5 : 1,
        backdropFilter: hoverType === "project" ? "blur(3px)" : "blur(0px)",
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    />
  );
}

