import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Reveal } from "./reveal";
import { GoldButton } from "./gold-button";

/**
 * PreFooterCta — Reusable luxury pre-footer CTA section for use across all site pages.
 *
 * Props:
 * - tag: Small uppercase category text (e.g. "Your Escape Awaits" or "Love What You See?")
 * - title: Heading main text (e.g. "Ready for an")
 * - highlightTitle: Highlighted italic gold gradient word (e.g. "Unforgettable")
 * - titleAfter: Optional text after highlighted word (e.g. "Experience?")
 * - description: Subtitle description paragraph
 * - primaryCtaLabel: Primary button text
 * - primaryCtaHref: Primary button link URL
 * - secondaryCtaLabel: Secondary button text
 * - secondaryCtaHref: Secondary button link URL
 * - bgImage: Background image URL
 * - showTrustBadges: Boolean to show the 500+ Families / 5.0 Rating / 24/7 Concierge row
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
  bgImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  showTrustBadges = true,
}) {
  return (
    <section className="relative py-28 md:py-36 flex items-center justify-center overflow-hidden border-t border-border/40">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Black Gold Farmhouse estate at dusk"
          fill
          className="object-cover"
        />
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

          {/* Subtitle Tag */}
          {tag && (
            <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-4">
              {tag}
            </p>
          )}

          {/* Main Headline */}
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-white mb-6 leading-tight">
            {title && <span>{title} </span>}
            {highlightTitle && (
              <span className="italic gold-gradient">{highlightTitle}</span>
            )}
            {titleAfter && <span> {titleAfter}</span>}
          </h2>

          {/* Paragraph Description */}
          {description && (
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {description}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCtaLabel && primaryCtaHref && (
              <GoldButton
                href={primaryCtaHref}
                variant="fill"
                beam
                className="min-w-[220px] shadow-[0_15px_40px_-15px_rgba(200,160,80,0.4)]"
              >
                {primaryCtaLabel}
              </GoldButton>
            )}
            {secondaryCtaLabel && secondaryCtaHref && (
              <GoldButton
                href={secondaryCtaHref}
                variant="outline"
                className="min-w-[220px]"
              >
                {secondaryCtaLabel}
              </GoldButton>
            )}
          </div>

          {/* Trust Badges */}
          {showTrustBadges && (
            <div className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-8 border-t border-white/10">
              <div className="text-center">
                <p className="font-display text-2xl text-gold">500+</p>
                <p className="text-white/40 text-xs uppercase tracking-wider mt-0.5">
                  Happy Families
                </p>
              </div>
              <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
              <div className="text-center">
                <p className="font-display text-2xl text-gold">5.0 ★</p>
                <p className="text-white/40 text-xs uppercase tracking-wider mt-0.5">
                  Google Rating
                </p>
              </div>
              <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
              <div className="text-center">
                <p className="font-display text-2xl text-gold">24/7</p>
                <p className="text-white/40 text-xs uppercase tracking-wider mt-0.5">
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
