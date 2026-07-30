"use client";

import React, { useState, useMemo } from "react";
import { GalleryGrid } from "../../../components/gallery-lightbox";

/**
 * GalleryWithFilterClient — Client component for interactive category filtering.
 *
 * Features:
 *  - Horizontal scrollable category tabs
 *  - Animated gold underline on active tab
 *  - Filtered image count display
 *  - Smooth transition when switching categories
 *  - Uses GalleryGrid (with lightbox) for rendering
 *
 * Props:
 *  categories — Array of category strings (first = "All")
 *  allImages  — Array of { src, alt, category }
 */
export function GalleryWithFilterClient({ categories, allImages }) {
  const [activeCategory, setActiveCategory] = useState("All");

  /* ── Filter images based on selected category ───────────────── */
  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return allImages;
    return allImages.filter((img) => img.category === activeCategory);
  }, [activeCategory, allImages]);

  return (
    <div>
      {/* ── Category Filter Tabs ──────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        {/* Scrollable filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold rounded-md whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gold text-[#0a0704] shadow-[0_4px_20px_-6px_rgba(200,160,80,0.5)]"
                  : "bg-card border border-border text-foreground/60 hover:text-gold hover:border-gold/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image count */}
        <p className="text-foreground/40 text-sm shrink-0">
          Showing{" "}
          <span className="text-gold font-semibold">
            {filteredImages.length}
          </span>{" "}
          {filteredImages.length === 1 ? "image" : "images"}
        </p>
      </div>

      {/* ── Gallery Grid with Lightbox ────────────────────────── */}
      <div
        key={activeCategory}
        style={{ animation: "galleryFadeIn 0.4s ease-out" }}
      >
        <GalleryGrid images={filteredImages} />
      </div>

      {/* Fade-in animation for category switch */}
      <style>{`
        @keyframes galleryFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
