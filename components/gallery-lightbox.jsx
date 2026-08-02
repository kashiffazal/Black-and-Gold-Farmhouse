"use client";

import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play, Film } from "lucide-react";

/**
 * GalleryGrid — Responsive media grid with full-screen Lightbox supporting Photos & Videos.
 *
 * Video Thumbnail Fix:
 *  - Appends #t=0.1 & preload="metadata" to video URLs to force browser first-frame thumbnail decoding.
 *  - Renders play button overlay & video badge.
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

  /* ── Navigate between items ─────────────────────────────────────── */
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
  const isVideoItem = (item) =>
    item?.type === "video" ||
    item?.isVideo ||
    (typeof item?.src === "string" && item.src.endsWith(".mp4"));

  // Helper to format video URL with #t=0.1 thumbnail frame parameter
  const getVideoSrc = (url) => {
    if (!url) return "";
    return url.includes("#") ? url : `${url}#t=0.1`;
  };

  /* ── Lightbox JSX (rendered via Portal on document.body) ────────── */
  const lightboxContent =
    lightboxOpen && portalReady
      ? createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center"
            style={{ animation: "galleryFadeIn 0.25s ease-out" }}
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLightbox();
            }}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-gold hover:text-[#0a0704] flex items-center justify-center text-white transition-all cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Previous arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-gold hover:text-[#0a0704] flex items-center justify-center text-white transition-all cursor-pointer"
              aria-label="Previous item"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-gold hover:text-[#0a0704] flex items-center justify-center text-white transition-all cursor-pointer"
              aria-label="Next item"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main media container */}
            <div className="relative w-[88vw] md:w-[72vw] h-[55vh] md:h-[65vh] flex items-center justify-center mt-14">
              {isVideoItem(active) ? (
                <video
                  key={activeIndex}
                  src={active.videoSrc || active.src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full max-h-[65vh] object-contain rounded-md shadow-2xl"
                  style={{ animation: "galleryFadeIn 0.3s ease-out" }}
                />
              ) : (
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
              )}
            </div>

            {/* Caption & Counter */}
            <div className="text-center mt-5 mb-4 px-4">
              <p className="text-white font-display text-lg md:text-xl flex items-center justify-center gap-2">
                {isVideoItem(active) && (
                  <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider bg-gold/20 text-gold px-2 py-0.5 rounded font-sans font-semibold">
                    <Film className="w-3.5 h-3.5" /> Video Walkthrough
                  </span>
                )}
                {active.alt}
              </p>
              <p className="text-gold/60 text-xs uppercase tracking-[0.3em] mt-2">
                {active.category ? `${active.category}  ·  ` : ""}
                {activeIndex + 1} / {images.length}
              </p>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 px-4 overflow-x-auto max-w-[90vw] pb-3 scrollbar-hide">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(idx);
                  }}
                  className={`relative w-14 h-14 md:w-16 md:h-16 rounded-sm overflow-hidden flex-shrink-0 border-2 transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? "border-gold opacity-100 scale-110"
                      : "border-transparent opacity-40 hover:opacity-75"
                  }`}
                >
                  {isVideoItem(img) ? (
                    <div className="w-full h-full bg-black flex items-center justify-center relative">
                      <video
                        src={getVideoSrc(img.videoSrc || img.src)}
                        preload="metadata"
                        className="w-full h-full object-cover opacity-70"
                        muted
                        playsInline
                      />
                      <Play className="w-4 h-4 text-gold absolute" />
                    </div>
                  ) : (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Gold progress bar */}
            <div className="w-[88vw] md:w-[72vw] h-0.5 bg-white/10 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-gold rounded-full transition-all duration-300"
                style={{
                  width: `${((activeIndex + 1) / images.length) * 100}%`,
                }}
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
        {images.map((img, idx) => {
          const isVid = isVideoItem(img);
          const videoUrl = getVideoSrc(img.videoSrc || img.src);

          return (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className={`relative group overflow-hidden rounded-md cursor-pointer border border-border/50 hover:border-gold/40 transition-all duration-500 bg-card ${
                idx === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              {isVid ? (
                <div className="relative w-full h-full bg-[#0a0704] overflow-hidden">
                  <video
                    src={videoUrl}
                    preload="metadata"
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Central Play Badge */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gold/90 text-[#0a0704] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-gold transition-all duration-300">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
              ) : (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={idx === 0 ? "50vw" : "25vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}

              {/* Top Video Badge if video */}
              {isVid && (
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-gold border border-gold/40 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded flex items-center gap-1 z-10">
                  <Film className="w-3 h-3" /> Video
                </div>
              )}

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

              {/* Indicator icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 z-10">
                {isVid ? (
                  <Play className="w-4 h-4 text-gold fill-gold" />
                ) : (
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
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox rendered via Portal directly on document.body */}
      {lightboxContent}

      {/* Keyframe animation for lightbox fade-in */}
      <style>{`
        @keyframes galleryFadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
}

/**
 * VideoShowcaseModal — Home Page Video Reel component playing 1 video at a time in a pop-up modal.
 */
export function VideoShowcaseModal({ videos }) {
  const [activeVideo, setActiveVideo] = useState(null);
  const [portalReady, setPortalReady] = useState(false);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  function openVideo(v) {
    setActiveVideo(v);
    document.body.style.overflow = "hidden";
  }

  function closeVideo() {
    setActiveVideo(null);
    document.body.style.overflow = "";
  }

  const modalContent =
    activeVideo && portalReady
      ? createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeVideo();
            }}
            style={{ animation: "galleryFadeIn 0.25s ease-out" }}
          >
            {/* Close button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-gold hover:text-[#0a0704] flex items-center justify-center text-white transition-all cursor-pointer"
              aria-label="Close video pop-up"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Popup Video Player */}
            <div className="relative w-full max-w-4xl h-[60vh] md:h-[70vh] flex flex-col items-center justify-center">
              <video
                src={activeVideo.video}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h4 className="font-display text-xl text-white mb-1">
                  {activeVideo.title}
                </h4>
                <p className="text-gold/80 text-xs uppercase tracking-widest">
                  {activeVideo.desc}
                </p>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((v, idx) => (
          <div
            key={idx}
            onClick={() => openVideo(v)}
            className="bg-card border border-border/80 hover:border-gold/50 rounded-xl overflow-hidden shadow-xl group aura-box cursor-pointer transition-all duration-300 hover:-translate-y-1"
          >
            {/* Video Thumbnail Frame with Play Button */}
            <div className="relative aspect-[16/10] bg-[#0a0704] overflow-hidden">
              <video
                src={`${v.video}#t=0.1`}
                preload="metadata"
                muted
                playsInline
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Central Play Badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gold/90 text-[#0a0704] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-gold transition-all duration-300">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </div>

              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-gold border border-gold/40 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded flex items-center gap-1">
                <Film className="w-3 h-3" /> Pop-up Video
              </div>
            </div>

            <div className="p-5">
              <h4 className="font-display text-lg text-foreground mb-1 group-hover:text-gold transition-colors">
                {v.title}
              </h4>
              <p className="text-foreground/60 text-xs font-light">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {modalContent}
    </>
  );
}
