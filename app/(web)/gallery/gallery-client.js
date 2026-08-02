"use client";

import React, { useState, useMemo } from "react";
import { GalleryGrid } from "../../../components/gallery-lightbox";

/**
 * GalleryWithFilterClient — Client component for interactive category filtering (Photos & Videos).
 *
 * Fixes applied:
 *  - Responsive flex container with constrained min-w-0 for scrolling filter tabs.
 *  - Separate item count badge so tabs NEVER overlap the text.
 */
export function GalleryWithFilterClient({ categories, allImages }) {
  const [activeCategory, setActiveCategory] = useState("All");

  /* ── Filter items based on selected category ───────────────── */
  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return allImages;
    if (activeCategory === "Videos 🎥") {
      return allImages.filter((img) => img.type === "video");
    }
    if (activeCategory === "Photos 📸") {
      return allImages.filter((img) => img.type !== "video");
    }
    return allImages.filter((img) => img.category === activeCategory);
  }, [activeCategory, allImages]);

  return (
    <div>
      {/* ── Category Filter Tabs Bar ──────────────────────────── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-4 pb-4 border-b border-border/50">
        {/* Scrollable filter tabs with constrained flex box */}
        <div className="flex-1 min-w-0 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
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

        {/* Item count badge (isolated cleanly) */}
        <div className="shrink-0 flex items-center gap-2 text-xs uppercase tracking-wider text-foreground/60 bg-card border border-border px-4 py-2.5 rounded-md self-start lg:self-auto">
          <span>Showing</span>
          <span className="text-gold font-bold text-sm">
            {filteredImages.length}
          </span>
          <span>{filteredImages.length === 1 ? "media item" : "media items"}</span>
        </div>
      </div>

      {/* ── Gallery Grid with Lightbox ────────────────────────── */}
      <GalleryGrid key={activeCategory} images={filteredImages} />
    </div>
  );
}
