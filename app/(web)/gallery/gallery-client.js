"use client";

import React, { useState, useMemo } from "react";
import { GalleryGrid } from "../../../components/gallery-lightbox";

/**
 * GalleryWithFilterClient — Client component for interactive category filtering (Photos & Videos).
 *
 * Props:
 *  categories — Array of category strings (first = "All")
 *  allImages  — Array of { src, alt, category, type? }
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

        {/* Item count */}
        <p className="text-foreground/40 text-sm shrink-0">
          Showing{" "}
          <span className="text-gold font-semibold">
            {filteredImages.length}
          </span>{" "}
          {filteredImages.length === 1 ? "media item" : "media items"}
        </p>
      </div>

      {/* ── Gallery Grid with Lightbox ────────────────────────── */}
      <GalleryGrid key={activeCategory} images={filteredImages} />
    </div>
  );
}
