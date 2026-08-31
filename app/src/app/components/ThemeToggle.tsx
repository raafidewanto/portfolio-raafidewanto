"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="h-9 w-9 rounded-full border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/[0.03]"
        aria-label="Toggle theme"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 transition hover:border-indigo-400/50 hover:text-indigo-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-400 dark:hover:text-white"
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        key={isDark ? "sun" : "moon"}
        className="text-base transition-transform duration-300"
      >
        {isDark ? "☀" : "☾"}
      </span>
    </button>
  );
}
