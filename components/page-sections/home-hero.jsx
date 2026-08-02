"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GoldButton } from "../gold-button";
import { useTheme } from "../theme-provider";

/**
 * HomeHero — Full-screen 3-slide hero slider.
 *
 * Fixes applied:
 *  - More top padding so text clears the fixed header
 *  - 3rd image replaced with a working Unsplash URL
 *  - Auto-plays on mount (no interaction needed)
 *  - First slide Ken Burns triggers after hydration via mounted state
 *  - Removed "Watch Story" button; single CTA with beam-border
 *  - Scroll indicator repositioned to bottom-center
 */

// ── Slide data ─────────────────────────────────────────────────────────────
const SLIDES = [
  {
    id: 1,
    tag: "A Luxury Family Farmhouse · Karachi",
    line1: "Where",
    accent: "Luxury",
    line2: "Meets Family Fun",
    sub: "Escape to Karachi's most exclusive retreat. Discover unparalleled privacy, world-class amenities, and unforgettable moments.",
    cta: { label: "Book Your Stay", href: "/book-now" },
    img: "/images/7.jpeg",
    alt: "Black Gold Farmhouse big adult pool with shade canopy and clear blue water",
  },
  {
    id: 2,
    tag: "Celebrate Every Occasion",
    line1: "Create",
    accent: "Memories",
    line2: "That Last Forever",
    sub: "From intimate family gatherings to grand celebrations — every event here is a masterpiece of luxury and unforgettable joy.",
    cta: { label: "Explore Packages", href: "/packages" },
    img: "/images/18.jpeg",
    alt: "Black Gold Farmhouse illuminated pergola lounge with Sufi artwork and charpais",
  },
  {
    id: 3,
    tag: "Your Perfect Getaway",
    line1: "A Sanctuary",
    accent: "Beyond",
    line2: "The City's Hustle",
    sub: "Step into a world of calm and comfort, just minutes from Karachi. Lush green lawns, world-class amenities, and 24/7 service.",
    cta: { label: "View Gallery", href: "/gallery" },
    img: "/images/21.jpeg",
    alt: "Black Gold Farmhouse panoramic daylight view of lawn and pool",
  },
];

/* Auto-advance interval in milliseconds */
const SLIDE_DURATION = 6000;

export default function HomeHero() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const pausedRef = useRef(false);
  const timerRef = useRef(null);

  /* Mark as mounted after hydration so first-slide Ken Burns triggers */
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

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

  /* ── Auto-advance timer (reschedules if paused, never gets stuck) ── */
  useEffect(() => {
    clearTimeout(timerRef.current);

    function tick() {
      if (pausedRef.current) {
        // If hovering, keep checking every 500ms instead of giving up
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
      {/* ── Background Image Layers (cross-fade) ─────────────────────── */}
      {SLIDES.map((s, idx) => {
        const isActive = idx === current;
        /* Ken Burns: scale from 1.08 → 1.0 over 8s on the active slide */
        const shouldZoom = isActive && mounted;

        return (
          <div
            key={s.id}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 2 : 1,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                transform: shouldZoom ? "scale(1.0)" : "scale(1.08)",
                transition: shouldZoom ? "transform 8s ease-out" : "none",
              }}
            >
              <Image
                src={s.img}
                alt={s.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
            {/* Gradient overlays for readability */}
            {/* Bottom-up: darkens bottom for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
            {/* Top-down: darkens header area — lighter on light mode */}
            <div className={`absolute inset-0 bg-gradient-to-b z-10 ${
              theme === "light"
                ? "from-white/50 via-white/15 to-transparent"
                : "from-black/70 via-black/20 to-transparent"
            }`} />
            {/* Side vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10" />
          </div>
        );
      })}

      {/* ── Slide Content (vertically centered, clears header) ────────── */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pt-40 md:pt-48 pb-40">
        {/* Tag line */}
        <p
          key={`tag-${current}`}
          className="text-gold uppercase tracking-[0.4em] text-xs md:text-sm font-semibold mb-6 animate-[fadeSlideUp_0.7s_ease-out_forwards]"
        >
          {slide.tag}
        </p>

        {/* Main heading */}
        <h1
          key={`h1-${current}`}
          className="font-display text-5xl sm:text-7xl md:text-8xl text-white leading-[1.05] mb-8 font-medium animate-[fadeSlideUp_0.8s_ease-out_0.1s_forwards] opacity-0"
        >
          {slide.line1}{" "}
          <span className="gold-gradient italic pr-2">{slide.accent}</span>
          <br className="hidden md:block" />
          <span className="italic">{slide.line2}</span>
        </h1>

        {/* Subtitle */}
        <p
          key={`sub-${current}`}
          className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-12 animate-[fadeSlideUp_0.8s_ease-out_0.25s_forwards] opacity-0"
        >
          {slide.sub}
        </p>

        {/* Single CTA with beam border (animated spinning gold border) */}
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
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-gold/50 text-gold flex items-center justify-center hover:bg-gold/10 hover:border-gold transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-gold/50 text-gold flex items-center justify-center hover:bg-gold/10 hover:border-gold transition-all duration-300 backdrop-blur-sm"
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
                <span className="relative flex w-10 h-1.5 rounded-full bg-white/20 overflow-hidden">
                  <span
                    key={current}
                    className="absolute left-0 top-0 h-full bg-gold rounded-full"
                    style={{
                      animation: `hero-dot-fill ${SLIDE_DURATION}ms linear forwards`,
                    }}
                  />
                </span>
              ) : (
                <span className="block w-2 h-2 rounded-full bg-white/30 hover:bg-gold/60 transition-colors" />
              )}
            </button>
          ))}
        </div>
        <p className="text-white/30 text-[10px] tracking-[0.35em] uppercase select-none">
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
