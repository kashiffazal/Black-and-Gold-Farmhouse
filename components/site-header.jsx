"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { useTheme } from "./theme-provider";
import { GoldButton } from "./gold-button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Instagram, Facebook } from "./icons";

/**
 * SiteHeader — Fixed top navigation with:
 * - Desktop: utility bar (email, phone, socials) + centered logo with split nav + Book Now CTA
 * - Mobile: logo left + circular icon buttons (theme toggle, hamburger) on right
 * - Mobile Menu: full-screen black overlay with large uppercase nav links and gold Book Now CTA
 */
export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  /* When not scrolled and on the hero, light theme should still show dark text
   * because the hero now has a top dark gradient. But we keep white text on dark mode.
   * When scrolled, the solid bg-background handles it via text-foreground. */
  const isLight = theme === "light";
  const heroTextClass = isScrolled
    ? "text-foreground"
    : isLight
      ? "text-foreground"
      : "text-white/90";
  const heroMutedClass = isScrolled
    ? "text-foreground/80"
    : isLight
      ? "text-foreground/70"
      : "text-white/80";

  // Track scroll to switch header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop: split nav around centered logo
  const navLinksLeft = [
    { name: "Home", href: "/" },
    { name: "Experience", href: "/experience" },
    { name: "Gallery", href: "/gallery" },
  ];
  const navLinksRight = [
    { name: "Packages", href: "/packages" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  // Mobile: flat list of all links
  const allNavLinks = [...navLinksLeft, ...navLinksRight];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300">
      {/* ─── Desktop-only Utility Bar ─── */}
      <div
        className={`border-b transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-border text-foreground"
            : isLight
              ? "bg-transparent border-foreground/10 text-foreground/70"
              : "bg-transparent border-white/10 text-white/80"
        }`}
      >
        <div className="hidden lg:flex items-center justify-between py-2 text-xs w-[1200px] mx-auto">
          {/* Left: contact info */}
          <div className="flex items-center space-x-6">
            <a
              href="mailto:info@blackgoldfarmhouse.com"
              className="flex items-center hover:text-gold transition-colors"
            >
              <Mail className="w-3 h-3 mr-2 text-gold" />{" "}
              info@blackgoldfarmhouse.com
            </a>
            <a
              href="tel:+923001234567"
              className="flex items-center hover:text-gold transition-colors"
            >
              <Phone className="w-3 h-3 mr-2 text-gold" /> +92 300 123 4567
            </a>
          </div>
          {/* Right: socials + theme toggle */}
          <div className="flex items-center space-x-4">
            <span className="tracking-[0.25em] text-gold/70">FOLLOW US</span>
            <a href="#" className="hover:text-gold transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <div className="w-[1px] h-4 bg-white/30 mx-2" />
            {/* ThemeToggle renders its own gold circular button */}
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* ─── Main Nav Bar ─── */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md shadow-sm py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="w-full px-4 lg:px-0 lg:w-[1200px] lg:mx-auto">
          <div className="flex items-center justify-between lg:justify-center relative">
            {/* ── Mobile Logo (left) ── */}
            <Link
              href="/"
              className="lg:hidden flex-shrink-0 flex flex-col items-start group"
            >
              <div className="relative h-10 w-32">
                <Image
                  src="/logo.png"
                  alt="Black Gold Farmhouse"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* ── Desktop Left Nav ── */}
            <nav className="hidden lg:flex flex-1 justify-start items-center space-x-8 pr-12">
              {navLinksLeft.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${heroTextClass}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* ── Desktop Logo (centered) ── */}
            <Link
              href="/"
              className="hidden lg:block flex-shrink-0 z-10 transform hover:scale-105 transition-transform duration-300"
            >
              <div
                className={`relative transition-all duration-300 ${isScrolled ? "h-14 w-20" : "h-20 w-40"}`}
              >
                <Image
                  src="/logo.png"
                  alt="Black Gold Farmhouse"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* ── Desktop Right Nav ── */}
            <nav className="hidden lg:flex flex-1 justify-end items-center space-x-8 pl-12">
              {navLinksRight.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${heroTextClass}`}
                >
                  {link.name}
                </Link>
              ))}
              <GoldButton href="/book-now" variant="fill" className="px-6 !py-2.5">
                Book Now
              </GoldButton>
            </nav>

            {/* ── Mobile Right Controls (theme + hamburger) ── */}
            <div className="lg:hidden flex items-center gap-2">
              {/* Theme toggle — gold circular button */}
              <div className="w-10 h-10 rounded-full border border-gold/70 text-gold flex items-center justify-center transition-colors hover:border-gold">
                <ThemeToggle iconOnly />
              </div>
              {/* Hamburger / Close — gold circular button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="w-10 h-10 rounded-full border border-gold/70 text-gold flex items-center justify-center transition-colors hover:border-gold"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Mobile Full-Screen Overlay Menu (theme-aware) ─── */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-background flex flex-col transition-all duration-500 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay top row: logo + controls */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-border">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex flex-col items-start"
          >
            <div className="relative h-12 w-32">
              <Image
                src="/logo.png"
                alt="Black Gold Farmhouse"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <div className="flex items-center gap-2">
            {/* Theme toggle — gold circular */}
            <div className="w-10 h-10 rounded-full border border-gold/70 text-gold flex items-center justify-center hover:border-gold transition-colors">
              <ThemeToggle iconOnly />
            </div>
            {/* Close button — gold circular */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 rounded-full border border-gold/70 text-gold flex items-center justify-center hover:border-gold transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Navigation Links with staggered animation */}
        <nav className="flex flex-col mt-4 px-4 flex-1">
          {allNavLinks.map((link, idx) => (
            <div key={link.name}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-5 text-sm font-semibold tracking-[0.25em] uppercase text-foreground hover:text-gold transition-all duration-300 ${
                  mobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 60 + 80}ms` }}
              >
                {link.name}
              </Link>
              {/* Hairline divider — uses theme border colour */}
              <div className="h-[1px] bg-border" />
            </div>
          ))}
        </nav>

        {/* Book Now CTA at bottom */}
        <div className="px-4 py-8">
          <Link
            href="/book-now"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-gold w-full flex items-center justify-center py-4 text-sm uppercase tracking-[0.3em]"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
