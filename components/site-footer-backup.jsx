"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, Clock, ChevronRight } from "lucide-react";
import { Instagram, Facebook, TikTok } from "./icons";
import { GoldButton } from "./gold-button";

/**
 * SiteFooter — Premium footer with 4-column grid layout.
 *
 * Columns:
 *  1. Brand logo, tagline, social icons
 *  2. Quick navigation links
 *  3. Contact info with icons
 *  4. Newsletter subscribe + opening hours
 *
 * Bottom bar: copyright, legal links, developer credit
 */
export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0704] text-white relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 stars-bg opacity-20 pointer-events-none" />

      {/* Top decorative gold line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      {/* ── Main Content ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1 — Brand */}
          <div className="space-y-6 lg:pr-8">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo.png"
                alt="Black Gold Farmhouse"
                width={140}
                height={140}
                className="w-28 h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Karachi&apos;s premier luxury farmhouse — where exclusive privacy
              meets extraordinary family entertainment. Create memories that
              last a lifetime.
            </p>
            {/* Social icons */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://www.instagram.com/blackgoldfarmofficial?igsh=MWk4Z2V1bmp3bzZ4&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram: @blackgoldfarmofficial"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:bg-gold hover:text-[#0a0704] hover:border-gold transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/blackgoldfarmofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook: @blackgoldfarmofficial"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:bg-gold hover:text-[#0a0704] hover:border-gold transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com/@blackgoldfarmofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                title="TikTok: @blackgoldfarmofficial"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:bg-gold hover:text-[#0a0704] hover:border-gold transition-all duration-300"
              >
                <TikTok className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-8">
              Explore
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Our Experience", href: "/experience" },
                { name: "Packages & Pricing", href: "/packages" },
                { name: "Photo Gallery", href: "/gallery" },
                { name: "FAQ", href: "/faq" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors text-sm flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 text-gold/40 group-hover:text-gold transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-8">
              Contact
            </h4>
            <ul className="space-y-5 text-sm text-white/60">
              <li className="flex items-start group">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold mr-3 shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white/80 font-medium text-xs leading-snug">
                    Black Gold Farm, Goth Ghulam Mohammad Jokhio Goth, Gadap Town, Karachi, Pakistan
                  </p>
                  <p className="text-gold/70 text-[11px] mt-1">15 mins from Airport</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold mr-3 shrink-0 group-hover:bg-gold/20 transition-colors mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <a href="tel:+923332973045" className="hover:text-gold transition-colors block text-xs">
                    +92 333 2973045
                  </a>
                  <a href="tel:+923212181167" className="hover:text-gold transition-colors block text-xs">
                    +92 321 2181167
                  </a>
                  <a href="tel:+923350754418" className="hover:text-gold transition-colors block text-xs">
                    +92 335 0754418
                  </a>
                </div>
              </li>
              <li className="flex items-center group">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold mr-3 shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:info@blackgoldfarmhouse.com" className="hover:text-gold transition-colors text-xs sm:text-sm">
                  info@blackgoldfarmhouse.com
                </a>
              </li>
              <li className="flex items-center group">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold mr-3 shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white/80 text-xs">Open Daily</p>
                  <p className="text-white/40 text-xs">Check-in 2 PM · Check-out 12 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4 — Newsletter + CTA */}
          <div>
            <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-8">
              Stay in Touch
            </h4>
            <p className="text-white/50 text-sm mb-5 leading-relaxed">
              Subscribe for exclusive seasonal packages, event updates, and
              special offers delivered to your inbox.
            </p>
            <form className="relative mb-8" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 pr-12 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gold/60 transition-colors"
                required
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 w-9 flex items-center justify-center bg-gold text-[#0a0704] hover:bg-gold-soft transition-colors rounded-md"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick book CTA */}
            <GoldButton href="/book-now" variant="fill" size="full" className="!py-3 text-xs">
              Book Your Stay
            </GoldButton>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ───────────────────────────────────────────────── */}
      <div className="border-t border-white/8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 space-y-3 md:space-y-0">
          <p>&copy; {currentYear} Black Gold Farmhouse. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
          </div>
          <p>
            Developed by{" "}
            <a
              href="http://innotechcloud.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors"
            >
              Innotech Cloud
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
