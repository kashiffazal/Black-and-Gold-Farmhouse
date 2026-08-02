"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Clock,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Waves,
  MessageSquare,
} from "lucide-react";
import { Instagram, Facebook, TikTok } from "./icons";
import { GoldButton } from "./gold-button";
import { useTheme } from "./theme-provider";

/**
 * SiteFooter — Ultra-Luxury Executive Footer with Equal Column Height Baseline Alignment.
 * Dynamically styled for BOTH Light & Dark modes.
 */
export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <footer
      className={`relative overflow-hidden border-t transition-colors duration-300 ${
        isLight
          ? "bg-[#f8f6f0] text-slate-900 border-gold/40"
          : "bg-[#070503] text-white border-gold/30"
      }`}
    >
      {/* Dynamic Starfield & Ambient Gold Light Glow */}
      <div
        className={`absolute inset-0 stars-bg pointer-events-none ${
          isLight ? "opacity-10" : "opacity-25"
        }`}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold/10 blur-[120px] pointer-events-none" />

      {/* Top Gold Gradient Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

      {/* ── Executive Perks Ribbon ────────────────────────────────────── */}
      <div
        className={`border-b relative z-10 py-5 transition-colors ${
          isLight
            ? "bg-[#efebe2] border-gold/20 text-slate-800"
            : "bg-white/[0.02] border-white/10 text-white/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] font-medium">
              <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
              <span>100% Private Estate</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] font-medium">
              <Zap className="w-4 h-4 text-gold shrink-0" />
              <span>24/7 Power Generator</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] font-medium">
              <Waves className="w-4 h-4 text-gold shrink-0" />
              <span>Cleaned Waterpark Pools</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] font-medium">
              <Sparkles className="w-4 h-4 text-gold shrink-0" />
              <span>✈️ 15 Mins Airport</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content Grid with Equal Column Baseline Height ──────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
          
          {/* Column 1: Brand & Bio (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full pr-0 lg:pr-6">
            <div>
              <Link href="/" className="inline-block group mb-4">
                <Image
                  src="/logo.png"
                  alt="Black Gold Farmhouse logo"
                  width={140}
                  height={140}
                  className="w-28 h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <p
                className={`text-xs sm:text-sm leading-relaxed max-w-sm font-light mb-6 ${
                  isLight ? "text-slate-700" : "text-white/70"
                }`}
              >
                Karachi&apos;s premier luxury farmhouse — where exclusive privacy meets extraordinary family entertainment. Unrivaled hospitality, pristine swimming pools, and 24/7 power generator backup.
              </p>
            </div>

            {/* Social Media Links with Verified Handles at bottom baseline */}
            <div
              className={`pt-4 border-t ${
                isLight ? "border-slate-300" : "border-white/10"
              }`}
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-3">
                Official Handles • @blackgoldfarmofficial
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://www.instagram.com/blackgoldfarmofficial?igsh=MWk4Z2V1bmp3bzZ4&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram: @blackgoldfarmofficial"
                  className={`w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-[#0a0704] transition-all duration-300 shadow-md hover:scale-110 ${
                    isLight ? "bg-gold/10" : "bg-gold/5"
                  }`}
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com/blackgoldfarmofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook: @blackgoldfarmofficial"
                  className={`w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-[#0a0704] transition-all duration-300 shadow-md hover:scale-110 ${
                    isLight ? "bg-gold/10" : "bg-gold/5"
                  }`}
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://tiktok.com/@blackgoldfarmofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  title="TikTok: @blackgoldfarmofficial"
                  className={`w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-[#0a0704] transition-all duration-300 shadow-md hover:scale-110 ${
                    isLight ? "bg-gold/10" : "bg-gold/5"
                  }`}
                >
                  <TikTok className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold inline-block" /> Explore
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Home Retreat", href: "/" },
                  { name: "Our Experience", href: "/experience" },
                  { name: "Packages & Rates", href: "/packages" },
                  { name: "Media Gallery", href: "/gallery" },
                  { name: "Concierge FAQ", href: "/faq" },
                  { name: "Book Now", href: "/book-now" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`transition-colors text-xs sm:text-sm flex items-center group font-light ${
                        isLight
                          ? "text-slate-700 hover:text-gold"
                          : "text-white/60 hover:text-gold"
                      }`}
                    >
                      <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-gold/60 group-hover:text-gold transition-colors shrink-0" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom link aligning with baseline */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="text-xs uppercase tracking-wider text-gold hover:underline font-semibold flex items-center gap-1"
              >
                Contact Desk →
              </Link>
            </div>
          </div>

          {/* Column 3: Direct Concierge & Contact (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold inline-block" /> Executive Contact
              </h4>
              <ul className="space-y-4 text-xs">
                <li className="flex items-start group">
                  <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold mr-3 shrink-0 mt-0.5 group-hover:bg-gold group-hover:text-[#0a0704] transition-all">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p
                      className={`font-medium text-xs leading-relaxed ${
                        isLight ? "text-slate-800" : "text-white/90"
                      }`}
                    >
                      Gadap Town, Karachi, Pakistan.
                    </p>
                    <a
                      href="https://maps.app.goo.gl/rKQcQ96cM2bsT7ne9?g_st=ipc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold text-[11px] mt-0.5 font-semibold hover:underline block"
                    >
                      📍 Google Maps Navigation
                    </a>
                  </div>
                </li>

                <li className="flex items-start group">
                  <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold mr-3 shrink-0 mt-0.5 group-hover:bg-gold group-hover:text-[#0a0704] transition-all">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div className="space-y-0.5">
                    <a
                      href="tel:+923332973045"
                      className={`hover:text-gold font-semibold transition-colors block text-xs ${
                        isLight ? "text-slate-900" : "text-white"
                      }`}
                    >
                      +92 333 2973045 <span className="text-[10px] text-gold font-normal">(Primary)</span>
                    </a>
                    <a
                      href="tel:+923212181167"
                      className={`hover:text-gold transition-colors block text-[11px] ${
                        isLight ? "text-slate-700" : "text-white/50"
                      }`}
                    >
                      +92 321 2181167 <span className="text-[10px] opacity-60">(Line 2)</span>
                    </a>
                    <a
                      href="tel:+923350754418"
                      className={`hover:text-gold transition-colors block text-[11px] ${
                        isLight ? "text-slate-700" : "text-white/50"
                      }`}
                    >
                      +92 335 0754418 <span className="text-[10px] opacity-60">(Line 3)</span>
                    </a>
                  </div>
                </li>

                <li className="flex items-center group">
                  <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold mr-3 shrink-0 group-hover:bg-gold group-hover:text-[#0a0704] transition-all">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <a
                    href="mailto:info@blackgoldfarmhouse.com"
                    className={`hover:text-gold transition-colors text-xs truncate ${
                      isLight ? "text-slate-800" : "text-white/70"
                    }`}
                  >
                    info@blackgoldfarmhouse.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Bottom 24/7 Hours info aligning cleanly */}
            <div
              className={`pt-4 border-t flex items-center gap-3 ${
                isLight ? "border-slate-300" : "border-white/10"
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold shrink-0">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <div>
                <p
                  className={`font-medium text-xs ${
                    isLight ? "text-slate-900" : "text-white"
                  }`}
                >
                  24/7 Concierge Desk
                </p>
                <p
                  className={`text-[11px] ${
                    isLight ? "text-slate-600" : "text-white/40"
                  }`}
                >
                  Check-in 2 PM · Check-out 12 PM
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter & Instant Booking (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold inline-block" /> VIP Reservations
              </h4>
              <p
                className={`text-xs mb-4 leading-relaxed font-light ${
                  isLight ? "text-slate-700" : "text-white/60"
                }`}
              >
                Receive exclusive seasonal package releases and priority date booking access directly.
              </p>

              <form className="relative mb-5" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter email for VIP updates..."
                  className={`w-full border rounded-lg py-2.5 px-3.5 pr-10 text-xs focus:outline-none focus:border-gold transition-colors ${
                    isLight
                      ? "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400"
                      : "bg-white/5 border-white/15 text-white placeholder:text-white/30"
                  }`}
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-2.5 flex items-center justify-center bg-gold text-[#0a0704] hover:bg-gold-soft transition-colors rounded font-semibold text-xs"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              <GoldButton href="/book-now" variant="fill" beam size="full" className="!py-3 text-xs uppercase tracking-[0.2em]">
                Book Your Stay
              </GoldButton>
            </div>

            {/* WhatsApp Fast Concierge Badge at exact bottom baseline */}
            <div
              className={`pt-4 border-t ${
                isLight ? "border-slate-300" : "border-white/10"
              }`}
            >
              <a
                href="https://wa.me/923332973045?text=Hello%20Black%20Gold%20Farmhouse,%20I%20would%20like%20to%20inquire%20about%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-[11px] uppercase tracking-wider py-2.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5" /> Instant WhatsApp Chat
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Copyright Bar ── */}
      <div
        className={`border-t relative z-10 transition-colors ${
          isLight
            ? "border-slate-300 bg-[#efebe2] text-slate-700"
            : "border-white/10 bg-black/60 text-white/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center text-xs space-y-3 sm:space-y-0">
          <p className="font-light">
            &copy; {currentYear}{" "}
            <strong className={isLight ? "text-slate-900 font-semibold" : "text-white font-medium"}>
              Black Gold Farmhouse
            </strong>
            . All rights reserved.
          </p>

          <p className="font-light">
            Developed by{" "}
            <a
              href="http://innotechcloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline font-semibold transition-colors"
            >
              Innotech Cloud
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
