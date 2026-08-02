"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";
import { useTheme } from "./theme-provider";

/**
 * PageHero — Luxury unified hero banner section for inner pages.
 * Adapts dynamically to Light & Dark themes.
 */
export function PageHero({
  title = "",
  highlightTitle = "",
  subtitleAfter = "",
  description = "",
  breadcrumbText = "",
  badgeText = "",
  bgImage = "/images/10.jpeg",
  bgAlt = "Black Gold Farmhouse estate",
  children,
}) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className="relative h-[62vh] min-h-[480px] flex items-center justify-center overflow-hidden border-b border-border/40">
      {/* Background Image with Slow Pan Animation */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={bgAlt}
          fill
          priority
          className="object-cover slow-pan"
        />
        {isLight ? (
          <>
            <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px] z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-background/90 z-10" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-black/90 z-10" />
          </>
        )}
      </div>

      {/* Floating Starfield Particles */}
      <div
        className={`absolute inset-0 stars-bg pointer-events-none z-10 ${
          isLight ? "opacity-15" : "opacity-30"
        }`}
      />

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto pt-16">
        <Reveal>
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/40 text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            {badgeText ||
              (breadcrumbText
                ? `BLACK GOLD FARMHOUSE • ${breadcrumbText.toUpperCase()}`
                : "BLACK GOLD FARMHOUSE • KARACHI")}
          </div>

          {/* Main Title */}
          <h1
            className={`font-display text-4xl sm:text-6xl md:text-7xl leading-tight mb-5 ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            {title && <span>{title} </span>}
            {highlightTitle && (
              <span className="italic gold-gradient font-light">
                {highlightTitle}
              </span>
            )}
            {subtitleAfter && <span> {subtitleAfter}</span>}
          </h1>

          {/* Subtitle Description */}
          {description && (
            <p
              className={`text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed font-light ${
                isLight ? "text-slate-700 font-normal" : "text-white/70"
              }`}
            >
              {description}
            </p>
          )}

          {/* Children or Breadcrumb */}
          {children
            ? children
            : breadcrumbText && (
                <nav className="flex items-center justify-center text-xs uppercase tracking-widest">
                  <Link
                    href="/"
                    className={`transition-colors ${
                      isLight
                        ? "text-slate-700 hover:text-gold"
                        : "text-white/50 hover:text-gold"
                    }`}
                  >
                    Home
                  </Link>
                  <ChevronRight className="w-3 h-3 mx-2 text-gold/60" />
                  <span className="text-gold font-medium">
                    {breadcrumbText}
                  </span>
                </nav>
              )}
        </Reveal>
      </div>
    </section>
  );
}
