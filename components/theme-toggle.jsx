"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

/**
 * ThemeToggle — Light/Dark mode switch button.
 *
 * Props:
 *   iconOnly (bool): When true, renders ONLY the icon (no outer button wrapper/border).
 *                    Use when the parent already provides a styled circular container.
 *
 * NOTE: We render Sun/Moon using JS state (not Tailwind dark: classes) because
 * the site uses a custom .dark/.light class toggle — not the Tailwind JIT dark mode.
 * This guarantees correct icon switching regardless of CSS specificity.
 */
export function ThemeToggle({ iconOnly = false }) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Placeholder to prevent layout shift before mount
  if (!mounted) {
    return <div className={iconOnly ? "h-4 w-4" : "w-9 h-9"} aria-hidden />;
  }

  const isDark = theme === "dark";
  const handleClick = () => setTheme(isDark ? "light" : "dark");

  // Shared icon — shows Sun when dark (click → light), Moon when light (click → dark)
  const Icon = isDark
    ? <Sun className="h-4 w-4 transition-transform duration-300 rotate-0 scale-100" />
    : <Moon className="h-4 w-4 transition-transform duration-300 rotate-0 scale-100" />;

  // Icon-only: no wrapper button, parent handles the container styling
  if (iconOnly) {
    return (
      <button
        onClick={handleClick}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="flex items-center justify-center w-full h-full text-current"
      >
        {Icon}
      </button>
    );
  }

  // Default: self-contained circular button with gold border
  return (
    <button
      onClick={handleClick}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold/70 text-gold hover:border-gold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
    >
      {Icon}
    </button>
  );
}
