import { Reveal } from "../../../components/reveal";
import { PageHero } from "../../../components/page-hero";
import { PreFooterCta } from "../../../components/pre-footer-cta";
import { GalleryWithFilterClient } from "./gallery-client";

/**
 * Gallery page metadata — SEO optimized
 */
export const metadata = {
  title: "Photos & Videos Gallery — Black Gold Farmhouse",
  description:
    "Explore authentic high-resolution photos and video tours of Black Gold Farmhouse: adult & kids pool, snooker room, large lawns, pergolas, AC bedrooms, and ambient night lighting.",
};

/* ────────────────────────────────────────────────────────────────────
 * Real Gallery Data — Photos from site-sample/images & Videos from site-sample/videos
 * ────────────────────────────────────────────────────────────────── */
const GALLERY_CATEGORIES = [
  "All",
  "Photos 📸",
  "Videos 🎥",
  "Pool & Water",
  "Exterior & Lawns",
  "Indoor Games & Snooker",
  "Luxury Suites & Interior",
  "Night Ambient & Pergola",
];

const GALLERY_ITEMS = [
  // ── Authentic Videos ─────────────────────────────────────────────
  {
    src: "/videos/v1.mp4",
    alt: "Black Gold Farmhouse — Estate Tour & Night Ambient Video",
    category: "Night Ambient & Pergola",
    type: "video",
  },
  {
    src: "/videos/v2.mp4",
    alt: "Illuminated Swimming Pool & Wall Fountain Video Tour",
    category: "Pool & Water",
    type: "video",
  },
  {
    src: "/videos/v3.mp4",
    alt: "Expansive Green Lawns & Landscape Walkthrough",
    category: "Exterior & Lawns",
    type: "video",
  },
  {
    src: "/videos/v4.mp4",
    alt: "Kids Play Area & Water Slides Reel",
    category: "Pool & Water",
    type: "video",
  },
  {
    src: "/videos/v5.mp4",
    alt: "Indoor AC Snooker Lounge & Games Room Video",
    category: "Indoor Games & Snooker",
    type: "video",
  },
  {
    src: "/videos/v6.mp4",
    alt: "Luxurious AC Bedroom Suites & Royal Lounge Tour",
    category: "Luxury Suites & Interior",
    type: "video",
  },
  {
    src: "/videos/v7.mp4",
    alt: "Covered Outdoor Games Area (Carrom & Foosball) Reel",
    category: "Indoor Games & Snooker",
    type: "video",
  },
  {
    src: "/videos/v8.mp4",
    alt: "Live BBQ Pit & Pergola Sitting Ambiance Video",
    category: "Night Ambient & Pergola",
    type: "video",
  },
  {
    src: "/videos/v9.mp4",
    alt: "Golden Hour Lawn View & Estate Architectural Highlights",
    category: "Exterior & Lawns",
    type: "video",
  },
  {
    src: "/videos/v10.mp4",
    alt: "Full Black Gold Farmhouse Daytime Highlights Reel",
    category: "Exterior & Lawns",
    type: "video",
  },

  // ── Pool & Water Photos ──────────────────────────────────────────
  {
    src: "/images/1.jpeg",
    alt: "Illuminated swimming pool at night with ambient lighting & fountain reflection",
    category: "Pool & Water",
    type: "image",
  },
  {
    src: "/images/7.jpeg",
    alt: "Big adult swimming pool with covered shade canopy & blue water",
    category: "Pool & Water",
    type: "image",
  },
  {
    src: "/images/3.jpeg",
    alt: "Poolside Miami lounge chairs with custom tree wall mural",
    category: "Pool & Water",
    type: "image",
  },

  // ── Exterior & Lawns Photos ──────────────────────────────────────
  {
    src: "/images/9.jpeg",
    alt: "Expansive lush green lawn & garden area with estate facade view",
    category: "Exterior & Lawns",
    type: "image",
  },
  {
    src: "/images/21.jpeg",
    alt: "Panoramic daylight view of the main estate lawn & kids play area",
    category: "Exterior & Lawns",
    type: "image",
  },
  {
    src: "/images/14.jpeg",
    alt: "Manicured green lawn with palm trees & estate view",
    category: "Exterior & Lawns",
    type: "image",
  },
  {
    src: "/images/15.jpeg",
    alt: "Wide-angle lawn view for grand events & family picnics",
    category: "Exterior & Lawns",
    type: "image",
  },
  {
    src: "/images/16.jpeg",
    alt: "Golden hour sunlight across Black Gold Farmhouse estate lawn",
    category: "Exterior & Lawns",
    type: "image",
  },
  {
    src: "/images/23.jpeg",
    alt: "Illuminated metallic BG logo wall feature at the estate entrance",
    category: "Exterior & Lawns",
    type: "image",
  },

  // ── Indoor Games & Snooker Photos ────────────────────────────────
  {
    src: "/images/4.jpeg",
    alt: "Air-conditioned indoor games room with full-size professional snooker table",
    category: "Indoor Games & Snooker",
    type: "image",
  },
  {
    src: "/images/5.jpeg",
    alt: "Covered outdoor games lounge with Carrom Board, Foosball table & charpais",
    category: "Indoor Games & Snooker",
    type: "image",
  },
  {
    src: "/images/12.jpeg",
    alt: "Kids play area with swings, slides, merry-go-round, see-saw & colorful mural wall",
    category: "Indoor Games & Snooker",
    type: "image",
  },

  // ── Luxury Suites & Interior Photos ──────────────────────────────
  {
    src: "/images/11.jpeg",
    alt: "Luxurious AC bedroom suite with velvet geometric headboard wall & gold trims",
    category: "Luxury Suites & Interior",
    type: "image",
  },
  {
    src: "/images/8.jpeg",
    alt: "Royal indoor sitting area with carved golden armchairs & marble wall panel",
    category: "Luxury Suites & Interior",
    type: "image",
  },
  {
    src: "/images/20.jpeg",
    alt: "High-angle view of the royal gold chair lounge with wood slat accent wall",
    category: "Luxury Suites & Interior",
    type: "image",
  },
  {
    src: "/images/13.jpeg",
    alt: "Tufted velvet armchairs with gold coffee table & marble accent wall",
    category: "Luxury Suites & Interior",
    type: "image",
  },
  {
    src: "/images/22.jpeg",
    alt: "Cozy interior lounge corner with luxury tufted seating",
    category: "Luxury Suites & Interior",
    type: "image",
  },

  // ── Night Ambient & Pergola Photos ───────────────────────────────
  {
    src: "/images/2.jpeg",
    alt: "Pergola outdoor sitting area with Sufi wall painting & purple ambient lights",
    category: "Night Ambient & Pergola",
    type: "image",
  },
  {
    src: "/images/18.jpeg",
    alt: "Evening view of the pergola lounge with traditional charpais & mood lights",
    category: "Night Ambient & Pergola",
    type: "image",
  },
  {
    src: "/images/10.jpeg",
    alt: "Night entrance arches illuminated with warm yellow & purple neon lights",
    category: "Night Ambient & Pergola",
    type: "image",
  },
  {
    src: "/images/19.jpeg",
    alt: "Moonlit night view of the estate entrance archway and lounge",
    category: "Night Ambient & Pergola",
    type: "image",
  },
  {
    src: "/images/17.jpeg",
    alt: "Roof canopy structure with solar power panel ceiling & ambient light fixtures",
    category: "Night Ambient & Pergola",
    type: "image",
  },
];

/**
 * GalleryPage — Photos & Videos Gallery using authentic Black Gold Farmhouse media.
 */
export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* ── Reusable Hero Banner ─────────────────────────────────── */}
      <PageHero
        title="Photos & Videos"
        highlightTitle="Gallery"
        description="Explore authentic photos and video tours of Black Gold Farmhouse — featuring our swimming pools, snooker lounge, sprawling lawns, and luxury AC suites."
        breadcrumbText="Gallery"
        bgImage="/images/9.jpeg"
        bgAlt="Black Gold Farmhouse authentic estate view"
      />

      {/* ── Gallery Section with Category & Media Filters ────────── */}
      <section className="py-20 md:py-28 bg-background relative">
        <div className="absolute inset-0 aurora-bg opacity-[0.02] dark:opacity-[0.06] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <GalleryWithFilterClient
              categories={GALLERY_CATEGORIES}
              allImages={GALLERY_ITEMS}
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
        description="Pictures and videos only tell half the story. Book your stay and discover every breathtaking detail of Black Gold Farmhouse firsthand."
        primaryCtaLabel="Book Your Stay"
        primaryCtaHref="/book-now"
        secondaryCtaLabel="Contact Us"
        secondaryCtaHref="/contact"
        bgImage="/images/1.jpeg"
      />
    </div>
  );
}
