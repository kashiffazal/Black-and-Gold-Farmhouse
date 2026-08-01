import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./reveal";

/**
 * PageHero — Reusable luxury hero section for inner pages (Gallery, FAQ, Packages, Contact, etc.)
 *
 * Props:
 * - title: Main title text before gradient word (e.g., "Photo", "Frequently Asked")
 * - highlightTitle: Highlighted word rendered with gold gradient (e.g., "Gallery", "Questions")
 * - subtitleAfter: Optional title text after the highlight
 * - description: Subtitle paragraph text
 * - breadcrumbText: Label for the active breadcrumb item (e.g., "Gallery", "FAQ")
 * - bgImage: Background image URL (Unsplash or local)
 * - bgAlt: Alt text for background image
 */
export function PageHero({
  title = "",
  highlightTitle = "",
  subtitleAfter = "",
  description = "",
  breadcrumbText = "",
  bgImage = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  bgAlt = "Black Gold Farmhouse estate",
}) {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 min-h-[420px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt={bgAlt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Starfield overlay */}
      <div className="absolute inset-0 stars-bg opacity-30 pointer-events-none z-0" />

      <Reveal>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          {/* Breadcrumb Navigation */}
          {breadcrumbText && (
            <nav className="flex items-center justify-center text-xs text-white/50 uppercase tracking-widest mb-6 md:mb-8">
              <Link href="/" className="hover:text-gold transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 mx-2 text-gold/60" />
              <span className="text-gold font-medium">{breadcrumbText}</span>
            </nav>
          )}

          {/* Decorative Gold Accent Line */}
          <div className="w-12 h-[1px] bg-gold mx-auto mb-6 opacity-60" />

          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-white mb-5 leading-tight">
            {title && <span>{title} </span>}
            {highlightTitle && (
              <span className="italic gold-gradient">{highlightTitle}</span>
            )}
            {subtitleAfter && <span> {subtitleAfter}</span>}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-white/65 text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
}
