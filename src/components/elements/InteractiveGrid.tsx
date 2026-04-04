"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useTheme } from "next-themes";

export default function InteractiveGrid() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Standard config
  const size = 45; // grid box size

  // Global cursor tracking
  const [cursor, setCursor] = useState({ x: -1000, y: -1000 }); // start offscreen
  
  // Use framer-motion spring for extremely fluid mouse following (optional, adds smoothness)
  const springConfig = { damping: 50, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(-1000, springConfig);
  const smoothY = useSpring(-1000, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
      smoothX.set(e.clientX);
      smoothY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [smoothX, smoothY]);

  // Glow color depending on theme
  const glowColorPattern = isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)";
  const strokeColor = isDark ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.4)";

  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 dark:from-[#1e1e24] dark:via-[#121212] dark:to-[#0a0a0a] pointer-events-none">
      
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          maskImage: "radial-gradient(ellipse at center, white 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, white 20%, transparent 80%)"
        }}
      >
        <defs>
          {/* Base Grid Pattern (Faint Lines) */}
          <pattern
            id="base-grid"
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${size} 0 L 0 0 0 ${size}`}
              fill="none"
              className="stroke-neutral-300 dark:stroke-[#2a2a30]"
              strokeWidth="1.5"
            />
          </pattern>

          {/* Glow Grid Pattern (Filled squares & glowing lines) */}
          <pattern
            id="glow-grid"
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            {/* The filled rectangle for each cell */}
            <rect 
              x={1} 
              y={1} 
              width={size - 1.5} 
              height={size - 1.5} 
              fill={glowColorPattern} 
              style={{ filter: `drop-shadow(0px 0px 4px ${strokeColor})` }}
            />
            {/* Bright grid line overlay */}
            <path
              d={`M ${size} 0 L 0 0 0 ${size}`}
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.5"
            />
          </pattern>

          {/* Radial Gradient Mask tracing the cursor */}
          <motion.radialGradient
            id="cursorMaskGradient"
            gradientUnits="userSpaceOnUse"
            r="150" /* Size of the glow radius in pixels */
            cx={smoothX}
            cy={smoothY}
          >
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </motion.radialGradient>

          <mask id="cursorMask">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#cursorMaskGradient)"
            />
          </mask>
        </defs>
        
        {/* Render Base Grid */}
        <rect width="100%" height="100%" fill="url(#base-grid)" />
        
        {/* Render Glowing Overlay Grid containing the mask */}
        <rect 
          width="100%" 
          height="100%" 
          fill="url(#glow-grid)" 
          mask="url(#cursorMask)" 
        />
      </svg>
    </div>
  );
}
