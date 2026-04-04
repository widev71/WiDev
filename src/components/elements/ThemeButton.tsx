"use client";
import clsx from "clsx";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import * as React from "react";
import { flushSync } from "react-dom";

export default function ThemeButton() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => setMounted(true), []);

  const toggleTheme = React.useCallback(async () => {
    const button = buttonRef.current;
    if (!button) return;

    const { top, left, width, height } = button.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
    
    // Calculate the maximum radius needed to cover the entire screen from the click point
    const maxRadius = Math.hypot(
      Math.max(x, viewportWidth - x),
      Math.max(y, viewportHeight - y)
    );

    const isDark = resolvedTheme === "dark";
    const newTheme = isDark ? "light" : "dark";

    // View Transitions API check
    if (typeof document.startViewTransition !== "function") {
      setTheme(newTheme);
      return;
    }

    const disableTransitions = document.createElement("style");
    disableTransitions.innerHTML = `
      ::view-transition-old(root),
      ::view-transition-new(root) {
        animation: none !important;
        mix-blend-mode: normal !important;
      }
      ::view-transition-old(root) { z-index: 1 !important; }
      ::view-transition-new(root) { z-index: 9999 !important; }
    `;
    document.head.appendChild(disableTransitions);

    const transition = document.startViewTransition(() => {
      // Force instant DOM layout shift to prevent Next-themes async blink
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.style.colorScheme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.style.colorScheme = "light";
      }

      flushSync(() => {
        setTheme(newTheme);
      });
    });

    transition.ready.then(() => {
      const isExpanding = !isDark;
      
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
          fill: "forwards",
        }
      );
    });

    // Safely remove the CSS overrides ONLY when the entire transition tree is dismantled natively
    transition.finished.then(() => {
      disableTransitions.remove();
    });
  }, [resolvedTheme, setTheme]);

  return (
    <button
      ref={buttonRef}
      className={clsx(
        "h-10 w-10",
        "rounded-full",
        "grid place-items-center",
        "md:mb-8 md:mt-4 md:h-0",
        "lg:mt-0",
      )}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {mounted ? (
        <>
          {resolvedTheme === "light" ? (
            <span className="text-2xl"><MdLightMode /></span>
          ) : (
            <span className="text-2xl"><MdDarkMode /></span>
          )}
        </>
      ) : (
        <span className="text-2xl"><MdDarkMode /></span>
      )}
    </button>
  );
}
