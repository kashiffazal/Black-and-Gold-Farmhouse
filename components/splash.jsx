"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export function Splash() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Fade out after 1.8s
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1800);

    // Remove from DOM after 2.4s
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0704] transition-opacity duration-500 overflow-hidden ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 stars-bg pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="float-y mb-8">
          <Image
            src="/logo.png"
            alt="Black Gold Farmhouse"
            width={200}
            height={200}
            className="w-40 md:w-56 h-auto"
            priority
          />
        </div>
        
        <div className="mt-6 flex flex-col items-center">
          <p className="text-gold uppercase tracking-[0.4em] text-xs shimmer">
            Loading Experience
          </p>
          <div className="w-32 h-[1px] bg-gold/30 mt-4 overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full bg-gold w-full origin-left animate-[scale-x_1.8s_ease-in-out_forwards]" />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scale-x {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
