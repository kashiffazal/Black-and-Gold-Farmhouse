"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GoldButton } from "../gold-button";
import { useTheme } from "../theme-provider";

/**
 * HomeHero — Full-screen Hero with Video Background (/videos/v10.mp4) & Cycling Text Content.
 * Responsive & optimized for BOTH Light and Dark themes.
 */

// ── Text Slide Data ────────────────────────────────────────────────────────
const SLIDES = [
  {
    id: 1,
    tag: "A Luxury Family Farmhouse · Karachi",
    line1: "Where",
    accent: "Luxury",
    line2: "Meets Family Fun",
    sub: "Escape to Karachi's most exclusive retreat. Discover unparalleled privacy, world-class amenities, and unforgettable moments.",
    cta: { label: "Book Your Stay", href: "/book-now" },
  },
  {
    id: 2,
    tag: "Celebrate Every Occasion",
    line1: "Create",
    accent: "Memories",
    line2: "That Last Forever",
    sub: "From intimate family gatherings to grand celebrations — every event here is a masterpiece of luxury and unforgettable joy.",
    cta: { label: "Explore Packages", href: "/packages" },
  },
  {
    id: 3,
    tag: "Your Perfect Getaway",
    line1: "A Sanctuary",
    accent: "Beyond",
    line2: "The City's Hustle",
    sub: "Step into a world of calm and comfort, just 15 minutes from Karachi airport. Sprawling lawns, pristine pools, and 24/7 service.",
    cta: { label: "View Gallery", href: "/gallery" },
  },
];

/* Auto-advance interval in milliseconds */
const SLIDE_DURATION = 6000;

export default function HomeHero() {
  const [current, setCurrent] = useState(0);
  const { theme } = useTheme();
  const pausedRef = useRef(false);
  const timerRef = useRef(null);

  const isLight = theme === "light";

  /* ── Navigate to a specific slide ──────────────────────────────────── */
  function goTo(index) {
    if (index === current) return;
    setCurrent(index);
  }

  function goNext() {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }

  function goPrev() {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }

  /* ── Auto-advance text slider ─────────────────────────────────────── */
  useEffect(() => {
    clearTimeout(timerRef.current);

    function tick() {
      if (pausedRef.current) {
        timerRef.current = setTimeout(tick, 500);
      } else {
        goNext();
      }
    }

    timerRef.current = setTimeout(tick, SLIDE_DURATION);
    return () => clearTimeout(timerRef.current);
  }, [current]); // eslint-disable-line react-hooks/exhaustive-deps

  const slide = SLIDES[current];

  return (
    <section
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      {/* ── Background Video Layer (v10.mp4) ───────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src="/videos/v10.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* Dynamic Overlays: Dark Mode vs Light Mode */}
        {isLight ? (
          <>
            {/* Bright Light Luxury Overlay for Light Mode */}
            <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px] z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-white/10 to-white/80 z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent z-10" />
          </>
        ) : (
          <>
            {/* Deep Dark Luxury Overlay for Dark Mode */}
            <div className="absolute inset-0 bg-black/65 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-black/80 z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent z-10" />
          </>
        )}
      </div>

      {/* ── Slide Content (vertically centered, clears fixed header) ── */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pt-40 md:pt-48 pb-40">
        {/* Tag line */}
        <p
          key={`tag-${current}`}
          className="text-gold uppercase tracking-[0.4em] text-xs md:text-sm font-semibold mb-6 animate-[fadeSlideUp_0.7s_ease-out_forwards]"
        >
          {slide.tag}
        </p>

        {/* Main heading: text-foreground on Light mode, text-white on Dark mode */}
        <h1
          key={`h1-${current}`}
          className={`font-display text-5xl sm:text-7xl md:text-8xl leading-[1.05] mb-8 font-medium animate-[fadeSlideUp_0.8s_ease-out_0.1s_forwards] opacity-0 ${
            isLight ? "text-slate-900" : "text-white"
          }`}
        >
          {slide.line1}{" "}
          <span className="gold-gradient italic pr-2">{slide.accent}</span>
          <br className="hidden md:block" />
          <span className="italic">{slide.line2}</span>
        </h1>

        {/* Subtitle description */}
        <p
          key={`sub-${current}`}
          className={`text-base md:text-lg max-w-2xl mx-auto mb-12 animate-[fadeSlideUp_0.8s_ease-out_0.25s_forwards] opacity-0 font-light leading-relaxed ${
            isLight ? "text-slate-700" : "text-white/80"
          }`}
        >
          {slide.sub}
        </p>

        {/* Single CTA with spinning beam border */}
        <div
          key={`cta-${current}`}
          className="flex justify-center animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards] opacity-0"
        >
          <GoldButton href={slide.cta.href} variant="outline" beam>
            {slide.cta.label}
          </GoldButton>
        </div>
      </div>

      {/* ── Left / Right Arrow Controls ───────────────────────────────── */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-gold/50 text-gold flex items-center justify-center hover:bg-gold/10 hover:border-gold transition-all duration-300 backdrop-blur-sm ${
          isLight ? "bg-white/40 shadow-md" : "bg-black/20"
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-gold/50 text-gold flex items-center justify-center hover:bg-gold/10 hover:border-gold transition-all duration-300 backdrop-blur-sm ${
          isLight ? "bg-white/40 shadow-md" : "bg-black/20"
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* ── Dot Navigation (centered at bottom) ───────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {idx === current ? (
                <span
                  className={`relative flex w-10 h-1.5 rounded-full overflow-hidden ${
                    isLight ? "bg-black/20" : "bg-white/20"
                  }`}
                >
                  <span
                    key={current}
                    className="absolute left-0 top-0 h-full bg-gold rounded-full"
                    style={{
                      animation: `hero-dot-fill ${SLIDE_DURATION}ms linear forwards`,
                    }}
                  />
                </span>
              ) : (
                <span
                  className={`block w-2 h-2 rounded-full hover:bg-gold/60 transition-colors ${
                    isLight ? "bg-black/30" : "bg-white/30"
                  }`}
                />
              )}
            </button>
          ))}
        </div>
        <p
          className={`text-[10px] tracking-[0.35em] uppercase select-none ${
            isLight ? "text-slate-600 font-semibold" : "text-white/40"
          }`}
        >
          0{current + 1} / 0{SLIDES.length}
        </p>
      </div>

      {/* ── CSS Keyframes ─────────────────────────────────────────────── */}
      <style>{`
        @keyframes hero-dot-fill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
