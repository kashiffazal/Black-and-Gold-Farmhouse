import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Reveal } from "./reveal";
import { GoldButton } from "./gold-button";

/**
 * PreFooterCta — Reusable luxury pre-footer CTA section with background video.
 *
 * Props:
 * - tag: Small uppercase category text
 * - title: Heading main text
 * - highlightTitle: Highlighted italic gold gradient word
 * - titleAfter: Optional text after highlighted word
 * - description: Subtitle description paragraph
 * - primaryCtaLabel: Primary button text
 * - primaryCtaHref: Primary button link URL
 * - secondaryCtaLabel: Secondary button text
 * - secondaryCtaHref: Secondary button link URL
 * - bgImage: Background image fallback
 * - bgVideo: Background video path (default: /videos/v10.mp4, muted, loop, autoplay)
 * - showTrustBadges: Boolean to show trust stats row
 */
export function PreFooterCta({
  tag = "Your Escape Awaits",
  title = "Ready for an",
  highlightTitle = "Unforgettable",
  titleAfter = "Experience?",
  description = "Whether it's a family weekend, a milestone celebration, or a corporate retreat — create memories that last a lifetime at Black Gold Farmhouse.",
  primaryCtaLabel = "Book Your Stay",
  primaryCtaHref = "/book-now",
  secondaryCtaLabel = "Contact Us",
  secondaryCtaHref = "/contact",
  bgImage = "/images/1.jpeg",
  bgVideo = "/videos/v10.mp4",
  showTrustBadges = true,
}) {
  return (
    <section className="relative py-28 md:py-36 flex items-center justify-center overflow-hidden border-t border-border/40">
      {/* Background Video (v10.mp4 without audio) & Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {bgVideo ? (
          <video
            src={bgVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
        ) : (
          <Image
            src={bgImage}
            alt="Black Gold Farmhouse estate background"
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/75 z-10" />
      </div>

      {/* Floating Starfield Particles */}
      <div className="absolute inset-0 stars-bg opacity-35 pointer-events-none z-10" />

      <Reveal>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          {/* Decorative Star Header Accent */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-gold/40" />
            <Star className="w-4 h-4 text-gold fill-gold" />
            <div className="w-12 h-[1px] bg-gold/40" />
          </div>

          {/* Small Category Tag */}
          <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-6">
            {tag}
          </p>

          {/* Main Title with Highlight Word */}
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-white leading-tight mb-6">
            {title}{" "}
            <span className="italic gold-gradient font-light">
              {highlightTitle}
            </span>{" "}
            {titleAfter}
          </h2>

          {/* Description */}
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {description}
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <GoldButton
              href={primaryCtaHref}
              variant="fill"
              beam={true}
              className="w-full sm:w-auto px-8 py-4"
            >
              {primaryCtaLabel}
            </GoldButton>

            <GoldButton
              href={secondaryCtaHref}
              variant="outline"
              className="w-full sm:w-auto px-8 py-4"
            >
              {secondaryCtaLabel}
            </GoldButton>
          </div>

          {/* Optional Trust Badges Row */}
          {showTrustBadges && (
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="font-display text-2xl md:text-3xl text-gold mb-1">
                  500+
                </p>
                <p className="text-[11px] md:text-xs text-white/50 uppercase tracking-widest">
                  Happy Families
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl md:text-3xl text-gold mb-1">
                  5.0 ★
                </p>
                <p className="text-[11px] md:text-xs text-white/50 uppercase tracking-widest">
                  Rating
                </p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl md:text-3xl text-gold mb-1">
                  24/7
                </p>
                <p className="text-[11px] md:text-xs text-white/50 uppercase tracking-widest">
                  Concierge Support
                </p>
              </div>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
