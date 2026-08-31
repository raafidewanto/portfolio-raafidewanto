"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeTransition() {
  const { theme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!theme) return;

    setIsTransitioning(true);

    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[999] transition-opacity duration-500 ${
        isTransitioning ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-indigo-500/5 backdrop-blur-[2px]" />
    </div>
  );
}