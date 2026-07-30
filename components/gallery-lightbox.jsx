"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * GalleryGrid — Image grid with fullscreen lightbox popup.
 *
 * Features:
 *  - Responsive grid (first image is 2x2 hero)
 *  - Hover: zoom icon + caption + category tag
 *  - Click: opens fullscreen lightbox via React Portal (renders on document.body)
 *  - Lightbox: large image, left/right arrows, thumbnail strip, progress bar
 *  - Keyboard: Escape to close, ←/→ to navigate
 *  - Close: X button, Escape key, or click dark backdrop
 *
 * Props:
 *  images — Array of { src, alt, category? }
 */
export function GalleryGrid({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [portalReady, setPortalReady] = useState(false);

  /* ── Ensure portal target exists (client-only) ──────────────────── */
  useEffect(() => {
    setPortalReady(true);
  }, []);

  /* ── Open / Close lightbox ──────────────────────────────────────── */
  function openLightbox(index) {
    setActiveIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }

  /* ── Navigate between images ────────────────────────────────────── */
  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  /* ── Keyboard shortcuts (Esc / ← / →) ──────────────────────────── */
  useEffect(() => {
    if (!lightboxOpen) return;
    function handleKey(e) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, goNext, goPrev]);

  const active = images[activeIndex];

  /* ── Lightbox JSX (rendered via Portal on document.body) ────────── */
  const lightboxContent = lightboxOpen && portalReady
    ? createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center"
          style={{ animation: "galleryFadeIn 0.25s ease-out" }}
          onClick={(e) => {
            /* Close only when clicking the dark backdrop itself */
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          {/* ── Close button (top-right) ────────────────────────────── */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* ── Previous arrow ──────────────────────────────────────── */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-gold/20 flex items-center justify-center text-white hover:text-gold transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* ── Next arrow ─────────────────────────────────────────── */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-gold/20 flex items-center justify-center text-white hover:text-gold transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* ── Main image container ───────────────────────────────── */}
          <div className="relative w-[88vw] md:w-[72vw] h-[55vh] md:h-[65vh] flex-shrink-0 mt-14">
            <Image
              key={activeIndex}
              src={active.src}
              alt={active.alt}
              fill
              sizes="75vw"
              className="object-contain"
              style={{ animation: "galleryFadeIn 0.3s ease-out" }}
              priority
            />
          </div>

          {/* ── Caption + slide counter ────────────────────────────── */}
          <div className="text-center mt-5 mb-4 px-4">
            <p className="text-white font-display text-lg md:text-xl">
              {active.alt}
            </p>
            <p className="text-gold/60 text-xs uppercase tracking-[0.3em] mt-2">
              {active.category ? `${active.category}  ·  ` : ""}
              {activeIndex + 1} / {images.length}
            </p>
          </div>

          {/* ── Thumbnail strip ────────────────────────────────────── */}
          <div className="flex gap-2 px-4 overflow-x-auto max-w-[90vw] pb-3 scrollbar-hide">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setActiveIndex(idx); }}
                className={`relative w-14 h-14 md:w-16 md:h-16 rounded-sm overflow-hidden flex-shrink-0 border-2 transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "border-gold opacity-100 scale-110"
                    : "border-transparent opacity-40 hover:opacity-75"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* ── Gold progress bar ──────────────────────────────────── */}
          <div className="w-[88vw] md:w-[72vw] h-0.5 bg-white/10 rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gold rounded-full transition-all duration-300"
              style={{ width: `${((activeIndex + 1) / images.length) * 100}%` }}
            />
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      {/* ── Grid Layout ──────────────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className={`relative group overflow-hidden rounded-md cursor-pointer border border-border/50 hover:border-gold/40 transition-all duration-500 ${
              idx === 0 ? "col-span-2 row-span-2" : ""
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes={idx === 0 ? "50vw" : "25vw"}
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Hover overlay with caption */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-end">
              <div className="p-4 w-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-white text-sm font-medium truncate">
                  {img.alt}
                </p>
                {img.category && (
                  <p className="text-gold text-xs uppercase tracking-wider mt-1">
                    {img.category}
                  </p>
                )}
              </div>
            </div>
            {/* Zoom icon indicator */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox rendered via Portal directly on document.body */}
      {lightboxContent}

      {/* Keyframe animation for lightbox fade-in */}
      <style>{`
        @keyframes galleryFadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        /* Hide scrollbar on thumbnail strip */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}
