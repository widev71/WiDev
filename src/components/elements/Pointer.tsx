"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface PointerProps {
  children?: React.ReactNode;
  className?: string;
  hideDefaultCursor?: boolean;
}

export function Pointer({ children, className, hideDefaultCursor = false }: PointerProps) {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth mouse movement configuration
  const springX = useSpring(x, { damping: 50, stiffness: 300 });
  const springY = useSpring(y, { damping: 50, stiffness: 300 });

  useEffect(() => {
    // We attach events to the immediate parent element of this component
    const parent = ref.current?.parentElement;
    if (!parent) return;

    // Optional: Hide default cursor to fully replace it with custom pointer
    if (hideDefaultCursor) {
      parent.style.cursor = "none";
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Small offset so the pointer graphics align closely with the tip of the actual cursor position
      x.set(e.clientX + 10);
      y.set(e.clientY + 10);
      
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseenter", handleMouseEnter);
    parent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseenter", handleMouseEnter);
      parent.removeEventListener("mouseleave", handleMouseLeave);
      if (hideDefaultCursor) {
        parent.style.cursor = "auto";
      }
    };
  }, [x, y, hideDefaultCursor]);

  return (
    <div ref={ref} className="pointer-events-none absolute z-50">
      {isHovered && (
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-[999] flex items-center justify-center"
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.15 }}
        >
          {children || (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={className || "fill-neutral-900 dark:fill-white"}
            >
              <path
                d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.42c.45 0 .67-.54.35-.85L5.5 3.21Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </motion.div>
      )}
    </div>
  );
}
