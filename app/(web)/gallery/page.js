import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "../../../components/reveal";
import { GoldButton } from "../../../components/gold-button";
import { GalleryGrid } from "../../../components/gallery-lightbox";

/**
 * Gallery page metadata — SEO optimized
 */
export const metadata = {
  title: "Photo Gallery — Black Gold Farmhouse",
  description:
    "Explore our luxury farmhouse estate through stunning photography. Pool, garden, interiors, dining & event spaces at Black Gold Farmhouse, Karachi.",
};

/* ────────────────────────────────────────────────────────────────────
 * Gallery Data — organized by category for filtering
 * Each image has: src, alt, category
 * ────────────────────────────────────────────────────────────────── */
const GALLERY_CATEGORIES = [
  "All",
  "Exterior",
  "Pool",
  "Interior",
  "Garden",
  "Dining",
  "Events",
];

const GALLERY_IMAGES = [
  // ── Exterior ────────────────────────────────────────────────────
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Farmhouse main entrance with landscaped lawn",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Farmhouse facade at golden hour",
    category: "Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Estate aerial view with pool and gardens",
    category: "Exterior",
  },

  // ── Pool ────────────────────────────────────────────────────────
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Crystal-clear infinity pool at sunset",
    category: "Pool",
  },
  {
    src: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Heated jacuzzi with ambient lighting",
    category: "Pool",
  },
  {
    src: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Poolside lounge chairs and umbrellas",
    category: "Pool",
  },

  // ── Interior ────────────────────────────────────────────────────
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury living room with designer furniture",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Premium master bedroom suite",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Modern lounge area with art gallery wall",
    category: "Interior",
  },

  // ── Garden ──────────────────────────────────────────────────────
  {
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Manicured garden pathways with lighting",
    category: "Garden",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Tropical garden seating area",
    category: "Garden",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Lush green lawn for family activities",
    category: "Garden",
  },

  // ── Dining ──────────────────────────────────────────────────────
  {
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Open-air BBQ and grill station",
    category: "Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Fine dining table setup with gold accents",
    category: "Dining",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Outdoor covered dining pavilion",
    category: "Dining",
  },

  // ── Events ──────────────────────────────────────────────────────
  {
    src: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Family bonfire night with fairy lights",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Grand event tent with premium decor",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Wedding reception stage setup",
    category: "Events",
  },
];

/**
 * GalleryPage — Luxury photo gallery with:
 *  - Hero banner with parallax background
 *  - Category filter tabs
 *  - Masonry-style grid with lightbox
 *  - Bottom CTA section
 */
export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero Banner ──────────────────────────────────────────── */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Black Gold Farmhouse gallery hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Stars overlay */}
        <div className="absolute inset-0 stars-bg opacity-30 pointer-events-none z-0" />

        <Reveal>
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center text-xs text-white/50 uppercase tracking-widest mb-8">
              <Link
                href="/"
                className="hover:text-gold transition-colors"
              >
                Home
              </Link>
              <ChevronRight className="w-3 h-3 mx-2" />
              <span className="text-gold">Gallery</span>
            </nav>

            {/* Decorative line */}
            <div className="w-12 h-[1px] bg-gold mx-auto mb-6 opacity-60" />

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-tight">
              Photo{" "}
              <span className="italic gold-gradient">Gallery</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
              Explore every corner of our luxury estate — from the sparkling
              pool to the elegant interiors and lush garden landscapes.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Gallery Section with Category Filters ────────────────── */}
      <section className="py-20 md:py-28 bg-background relative">
        {/* Subtle aurora bg */}
        <div className="absolute inset-0 aurora-bg opacity-[0.02] dark:opacity-[0.06] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Category filter + image count */}
          <Reveal>
            <GalleryWithFilter
              categories={GALLERY_CATEGORIES}
              images={GALLERY_IMAGES}
            />
          </Reveal>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Farmhouse at twilight"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="absolute inset-0 stars-bg opacity-30 pointer-events-none z-0" />

        <Reveal>
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-6">
              Love What You See?
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight">
              Experience It{" "}
              <span className="italic gold-gradient">In Person</span>
            </h2>
            <p className="text-white/50 text-base max-w-lg mx-auto mb-10">
              Pictures only tell half the story. Book your stay and discover
              every breathtaking detail of Black Gold Farmhouse firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldButton
                href="/book-now"
                variant="fill"
                beam
                className="min-w-[200px]"
              >
                Book Your Stay
              </GoldButton>
              <GoldButton
                href="/contact"
                variant="outline"
                className="min-w-[200px]"
              >
                Contact Us
              </GoldButton>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════
 * Client Component — Gallery with category filter tabs
 * ════════════════════════════════════════════════════════════════ */
import { GalleryWithFilterClient } from "./gallery-client";

/**
 * Server wrapper that passes data to the client filter component.
 * Keeps the page as a Server Component for SEO/metadata.
 */
function GalleryWithFilter({ categories, images }) {
  return (
    <GalleryWithFilterClient
      categories={categories}
      allImages={images}
    />
  );
}
