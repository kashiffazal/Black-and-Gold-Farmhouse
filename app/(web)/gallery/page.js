import { Reveal } from "../../../components/reveal";
import { PageHero } from "../../../components/page-hero";
import { PreFooterCta } from "../../../components/pre-footer-cta";
import { GalleryWithFilterClient } from "./gallery-client";

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
 * GalleryPage — Luxury photo gallery using reusable PageHero and PreFooterCta components.
 */
export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* ── Reusable Hero Banner ─────────────────────────────────── */}
      <PageHero
        title="Photo"
        highlightTitle="Gallery"
        description="Explore every corner of our luxury estate — from the sparkling pool to the elegant interiors and lush garden landscapes."
        breadcrumbText="Gallery"
        bgImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        bgAlt="Black Gold Farmhouse photo gallery"
      />

      {/* ── Gallery Section with Category Filters ────────────────── */}
      <section className="py-20 md:py-28 bg-background relative">
        {/* Subtle aurora bg */}
        <div className="absolute inset-0 aurora-bg opacity-[0.02] dark:opacity-[0.06] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <GalleryWithFilterClient
              categories={GALLERY_CATEGORIES}
              allImages={GALLERY_IMAGES}
            />
          </Reveal>
        </div>
      </section>

      {/* ── Reusable Pre-Footer CTA ──────────────────────────────── */}
      <PreFooterCta
        tag="Love What You See?"
        title="Experience It"
        highlightTitle="In Person"
        titleAfter=""
        description="Pictures only tell half the story. Book your stay and discover every breathtaking detail of Black Gold Farmhouse firsthand."
        primaryCtaLabel="Book Your Stay"
        primaryCtaHref="/book-now"
        secondaryCtaLabel="Contact Us"
        secondaryCtaHref="/contact"
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
    </div>
  );
}
