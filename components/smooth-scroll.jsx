"use client";

import { useEffect } from "react";

/**
 * SmoothScroll — Powered by Lenis (https://github.com/darkroomengineering/lenis)
 *
 * Lenis gives the browser scroll a premium "ease-out" feel:
 *   → Starts at full speed instantly
 *   → Gradually decelerates to a silky stop (no sudden cutoff)
 *
 * Also handles in-page anchor (#id) links with the same smooth easing.
 */
export function SmoothScroll() {
  useEffect(() => {
    let lenis;

    // Dynamically import Lenis so it only runs on the client
    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        // Duration of the ease-out deceleration in seconds
        // 1.2 = smooth luxury feel | 0.8 = snappier
        duration: 1.2,

        // Easing function: easeOutQuart — starts fast, decelerates smoothly
        // t=0 → t=1 maps scroll progress to position
        easing: (t) => 1 - Math.pow(1 - t, 4),

        // Smooth on both mouse wheel and touch
        touchMultiplier: 1.5,
        wheelMultiplier: 1.0,

        // Smooth regardless of devicePixelRatio
        smoothWheel: true,
      });

      // Drive Lenis with requestAnimationFrame for 60fps updates
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    });

    // Cleanup Lenis on component unmount
    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  // Purely behavioural — renders nothing to the DOM
  return null;
}
