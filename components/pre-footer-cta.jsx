"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Reveal } from "./reveal";
import { GoldButton } from "./gold-button";
import { useTheme } from "./theme-provider";

/**
 * PreFooterCta — Reusable luxury pre-footer CTA section with background video.
 * Adapts dynamically to Light and Dark themes.
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
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className="relative py-28 md:py-36 flex items-center justify-center overflow-hidden border-t border-border/40">
      {/* Background Video & Dynamic Theme Overlays */}
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

        {isLight ? (
          <>
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/45 via-white/80 to-white/20 z-10" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-black/75 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 z-10" />
          </>
        )}
      </div>

      {/* Floating Starfield Particles */}
      <div className="absolute inset-0 stars-bg opacity-30 pointer-events-none z-10" />

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

          {/* Main Title */}
          <h2
            className={`font-display text-4xl sm:text-6xl md:text-7xl leading-tight mb-6 ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            {title}{" "}
            <span className="italic gold-gradient font-light">
              {highlightTitle}
            </span>{" "}
            {titleAfter}
          </h2>

          {/* Subtitle Description */}
          <p
            className={`text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light ${
              isLight ? "text-slate-700" : "text-white/70"
            }`}
          >
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
            {secondaryCtaLabel && (
              <GoldButton
                href={secondaryCtaHref}
                variant="outline"
                className="w-full sm:w-auto px-8 py-4"
              >
                {secondaryCtaLabel}
              </GoldButton>
            )}
          </div>

          {/* Trust Badges Row */}
          {showTrustBadges && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-gold/20 max-w-3xl mx-auto">
              {[
                { label: "100% Private Estate", value: "Exclusive Access" },
                { label: "Generator Backup", value: "24/7 Power Included" },
                { label: "Pristine Pools", value: "Deep Cleaned" },
                { label: "Distance", value: "15 Mins Airport" },
              ].map((badge, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-gold font-display text-base md:text-lg font-bold">
                    {badge.value}
                  </p>
                  <p
                    className={`text-[11px] uppercase tracking-wider mt-1 ${
                      isLight ? "text-slate-600 font-medium" : "text-white/50"
                    }`}
                  >
                    {badge.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
