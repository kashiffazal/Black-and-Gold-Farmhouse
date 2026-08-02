"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./theme-provider";
import { MapPin, Navigation, Moon, Sun, RefreshCw, ExternalLink } from "lucide-react";
import { Reveal } from "./reveal";

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/rKQcQ96cM2bsT7ne9?g_st=ipc";

/**
 * ContactMapSection — Interactive Google Map with Dark / Light Theme Toggle.
 *
 * Features:
 * - Auto-syncs with global site theme (Dark / Light)
 * - Allows user to manually toggle Map Dark / Light mode independently
 * - Includes direct navigation button to Google Maps app link
 */
export function ContactMapSection() {
  const { theme } = useTheme();
  const [mapMode, setMapMode] = useState("auto"); // 'auto' | 'dark' | 'light'
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine effective map theme
  const isDark =
    mapMode === "dark" || (mapMode === "auto" && theme === "dark");

  return (
    <section className="py-20 bg-muted/60 border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-3 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-gold" /> Estate Location
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-3">
              Find Us on Google Maps
            </h2>
            <p className="text-foreground/70 text-sm leading-relaxed mb-6">
              Black Gold Farmhouse is conveniently located in Gadap Town, Karachi — 15 minutes from Jinnah International Airport.
            </p>

            {/* Direct Google Maps Link Button */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold text-[#0a0704] hover:bg-gold-soft font-semibold text-sm px-6 py-3 rounded-md transition-all shadow-md hover:shadow-lg"
              >
                <Navigation className="w-4 h-4" /> Open Navigation in Google Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Interactive Map Mode Toggle Buttons Bar */}
        <Reveal delay={100}>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4 bg-card border border-border p-3 rounded-lg shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-foreground/70 flex items-center gap-1.5">
                Map View Theme:
              </span>
              <span className="text-xs text-gold font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-gold/10">
                {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
              </span>
            </div>

            {/* Mode Controls */}
            <div className="inline-flex p-1 rounded-md bg-muted border border-border text-xs">
              <button
                onClick={() => setMapMode("dark")}
                className={`px-3 py-1.5 rounded flex items-center gap-1.5 font-medium transition-all cursor-pointer ${
                  mapMode === "dark"
                    ? "bg-gold text-[#0a0704] shadow-sm font-semibold"
                    : "text-foreground/70 hover:text-gold"
                }`}
                title="Switch Map to Dark Mode"
              >
                <Moon className="w-3.5 h-3.5" /> Dark Map
              </button>
              <button
                onClick={() => setMapMode("light")}
                className={`px-3 py-1.5 rounded flex items-center gap-1.5 font-medium transition-all cursor-pointer ${
                  mapMode === "light"
                    ? "bg-gold text-[#0a0704] shadow-sm font-semibold"
                    : "text-foreground/70 hover:text-gold"
                }`}
                title="Switch Map to Light Mode"
              >
                <Sun className="w-3.5 h-3.5" /> Light Map
              </button>
              <button
                onClick={() => setMapMode("auto")}
                className={`px-3 py-1.5 rounded flex items-center gap-1.5 font-medium transition-all cursor-pointer ${
                  mapMode === "auto"
                    ? "bg-gold text-[#0a0704] shadow-sm font-semibold"
                    : "text-foreground/70 hover:text-gold"
                }`}
                title="Sync Map with Global Site Theme"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Sync Theme
              </button>
            </div>
          </div>
        </Reveal>

        {/* Map Container */}
        <Reveal delay={150}>
          <div className="w-full h-[400px] md:h-[480px] rounded-lg overflow-hidden border border-border shadow-2xl relative bg-card">
            <iframe
              title="Black Gold Farmhouse Google Map"
              src="https://maps.google.com/maps?q=Black%20Gold%20Farm,%20Goth%20Ghulam%20Mohammad%20Jokhio%20Goth,%20Ghulam%20Muhammad%20Ali%20Road,%20Gadap%20Town,%20Karachi&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: isDark
                  ? "invert(90%) hue-rotate(180deg) contrast(1.15) brightness(0.9)"
                  : "none",
                transition: "filter 0.5s ease-in-out",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
