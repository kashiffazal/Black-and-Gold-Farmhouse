import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../../../components/reveal";
import { PageHero } from "../../../components/page-hero";
import { PreFooterCta } from "../../../components/pre-footer-cta";
import { ContactFormClient } from "./contact-client";
import { ContactMapSection } from "../../../components/contact-map";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Navigation,
  ExternalLink,
  Shield,
  Waves,
  Sparkles,
  Award,
} from "lucide-react";
import { Instagram, Facebook, TikTok } from "../../../components/icons";

/**
 * Contact page metadata — SEO optimized
 */
export const metadata = {
  title: "Bespoke Concierge & Contact — Black Gold Farmhouse",
  description:
    "Contact Black Gold Farmhouse Karachi. Phone & WhatsApp: +92 333 2973045. Google Maps location link: Goth Ghulam Mohammad Jokhio Goth, Gadap Town, Karachi.",
};

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/rKQcQ96cM2bsT7ne9?g_st=ipc";
const INSTAGRAM_LINK =
  "https://www.instagram.com/blackgoldfarmofficial?igsh=MWk4Z2V1bmp3bzZ4&utm_source=qr";
const WHATSAPP_LINK =
  "https://wa.me/923332973045?text=Hello%20Black%20Gold%20Farmhouse,%20I%20would%20like%20to%20inquire%20about%20booking%20dates.";

/**
 * ContactPage — Ultra-Luxury Contact Experience using unified PageHero.
 */
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── 1. Luxury Page Hero (Unified component) ───────────────── */}
      <PageHero
        badgeText="24/7 EXECUTIVE CONCIERGE DESK"
        title="Connect With"
        highlightTitle="Bespoke Luxury"
        description="Whether you are reserving a family getaway, an overnight weekend retreat, or a grand celebration — our concierge desk ensures seamless personal attention."
        breadcrumbText="Contact"
        bgImage="/images/10.jpeg"
        bgAlt="Black Gold Farmhouse luxury night illuminated entrance arches"
      >
        {/* Quick Action Floating Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href="tel:+923332973045"
            className="btn-gold px-6 py-3 text-xs uppercase tracking-[0.2em] font-semibold flex items-center gap-2"
          >
            <Phone className="w-4 h-4" /> Call +92 333 2973045
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-md transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" /> WhatsApp Instant Chat
          </a>
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card/80 hover:bg-card border border-border text-foreground text-xs uppercase tracking-[0.2em] font-semibold px-6 py-3 rounded-md transition-all flex items-center gap-2 backdrop-blur-md"
          >
            <Navigation className="w-4 h-4 text-gold" /> Maps Directions
          </a>
        </div>
      </PageHero>

      {/* ── 2. Executive Concierge Touchpoints Grid ────────────────── */}
      <section className="py-20 md:py-28 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-3">
                Direct Channels
              </p>
              <h2 className="font-display text-3xl sm:text-5xl text-foreground mb-4">
                Executive Touchpoints
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-deep mx-auto" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Touchpoint 1: Phone & WhatsApp */}
            <Reveal delay={0}>
              <div className="bg-card border border-border/80 p-8 rounded-xl shadow-lg relative group aura-box hover:border-gold/50 transition-all duration-500 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 text-gold flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
                      Online Concierge
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-foreground mb-2">
                    Phone & WhatsApp
                  </h3>
                  <p className="text-foreground/60 text-xs mb-6">
                    Speak directly with our reservation officers for instant
                    date verification.
                  </p>

                  <div className="space-y-3 mb-8">
                    <a
                      href="tel:+923332973045"
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/60 border border-border/60 hover:border-gold/40 text-sm font-semibold text-foreground group-hover:text-gold transition-all"
                    >
                      <span>+92 333 2973045</span>
                      <span className="text-xs text-gold uppercase tracking-wider">
                        Primary
                      </span>
                    </a>
                    <a
                      href="tel:+923212181167"
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/60 border border-border/60 hover:border-gold/40 text-sm font-semibold text-foreground transition-all"
                    >
                      <span>+92 321 2181167</span>
                      <span className="text-xs text-foreground/50 uppercase tracking-wider">
                        Line 2
                      </span>
                    </a>
                    <a
                      href="tel:+923350754418"
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/60 border border-border/60 hover:border-gold/40 text-sm font-semibold text-foreground transition-all"
                    >
                      <span>+92 335 0754418</span>
                      <span className="text-xs text-foreground/50 uppercase tracking-wider">
                        Line 3
                      </span>
                    </a>
                  </div>
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-gold py-3 text-xs uppercase tracking-[0.2em] font-semibold text-center block"
                >
                  Start WhatsApp Inquiry
                </a>
              </div>
            </Reveal>

            {/* Touchpoint 2: Address & Location */}
            <Reveal delay={150}>
              <div className="bg-card border border-border/80 p-8 rounded-xl shadow-lg relative group aura-box hover:border-gold/50 transition-all duration-500 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 text-gold flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-gold bg-gold/10 px-2.5 py-1 rounded-full border border-gold/20">
                      ✈️ 15 Mins Airport
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-foreground mb-2">
                    Estate Address
                  </h3>
                  <p className="text-foreground/60 text-xs mb-6">
                    Located in Gadap Town, Karachi — easily accessible via Main
                    Highway.
                  </p>

                  <div className="p-4 rounded-lg bg-muted/60 border border-border/60 mb-6">
                    <p className="text-xs text-foreground/80 leading-relaxed font-medium mb-3">
                      Black Gold Farm, Goth Ghulam Mohammad Jokhio Goth, Ghulam
                      Muhammad Ali Road, Gadap Town, Karachi, Sindh, Pakistan.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-foreground/60 pt-2 border-t border-border/50">
                      <div>🚗 Private Gated Drive</div>
                      <div>⚡ 24/7 Solar & Power</div>
                    </div>
                  </div>
                </div>

                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-muted border border-border text-foreground hover:border-gold hover:text-gold transition-all py-3 text-xs uppercase tracking-[0.2em] font-semibold text-center block rounded-md"
                >
                  Get Google Maps Route{" "}
                  <ExternalLink className="w-3 h-3 inline ml-1" />
                </a>
              </div>
            </Reveal>

            {/* Touchpoint 3: Email & Official Social Handles */}
            <Reveal delay={300}>
              <div className="bg-card border border-border/80 p-8 rounded-xl shadow-lg relative group aura-box hover:border-gold/50 transition-all duration-500 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 text-gold flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-foreground/60 bg-muted px-2.5 py-1 rounded-full border border-border">
                      Verified Handles
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-foreground mb-2">
                    Email & Social Media
                  </h3>
                  <p className="text-foreground/60 text-xs mb-6">
                    Official contact channels for corporate bookings and media
                    inquiries.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="p-3 rounded-lg bg-muted/60 border border-border/60">
                      <p className="text-[10px] text-gold uppercase tracking-wider font-semibold mb-0.5">
                        Official Email
                      </p>
                      <a
                        href="mailto:info@blackgoldfarmhouse.com"
                        className="text-sm font-semibold text-foreground hover:text-gold transition-colors"
                      >
                        info@blackgoldfarmhouse.com
                      </a>
                    </div>

                    <div className="p-3 rounded-lg bg-muted/60 border border-border/60">
                      <p className="text-[10px] text-gold uppercase tracking-wider font-semibold mb-2">
                        Official Handles: @blackgoldfarmofficial
                      </p>
                      <div className="flex items-center gap-3">
                        <a
                          href={INSTAGRAM_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 rounded bg-background border border-border hover:border-gold hover:text-gold text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5"
                          title="Instagram"
                        >
                          <Instagram className="w-3.5 h-3.5" /> Insta
                        </a>
                        <a
                          href="https://facebook.com/blackgoldfarmofficial"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 rounded bg-background border border-border hover:border-gold hover:text-gold text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5"
                          title="Facebook"
                        >
                          <Facebook className="w-3.5 h-3.5" /> Facebook
                        </a>
                        <a
                          href="https://tiktok.com/@blackgoldfarmofficial"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 rounded bg-background border border-border hover:border-gold hover:text-gold text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5"
                          title="TikTok"
                        >
                          <TikTok className="w-3.5 h-3.5" /> TikTok
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-muted border border-border text-foreground hover:border-gold hover:text-gold transition-all py-3 text-xs uppercase tracking-[0.2em] font-semibold text-center block rounded-md"
                >
                  Follow on Instagram
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Bespoke Reservation & Inquiry Console (Split Section) ── */}
      <section className="py-20 md:py-28 bg-muted/40 border-y border-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left 5 Columns: The Black Gold Guarantee (2 Feature Boxes) */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal>
                <div>
                  <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-3">
                    The Black Gold Guarantee
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
                    Why Families & Companies Reserve With Us
                  </h2>
                  <div className="w-12 h-[2px] bg-gradient-to-r from-gold to-gold-deep mb-6" />
                  <p className="text-foreground/75 text-sm leading-relaxed mb-8 font-light">
                    Every stay includes complete estate privacy, a pristine
                    swimming pool, heavy generator backup, and dedicated on-site
                    staff.
                  </p>
                </div>
              </Reveal>

              {/* Exactly 2 Feature Cards */}
              <Reveal delay={100}>
                <div className="space-y-5">
                  {[
                    {
                      icon: Shield,
                      title: "100% Private Exclusive Access & Generator Power",
                      desc: "Enjoy exclusive access to the entire farmhouse, lawns, pool, and suites, with full generator backup throughout your stay.",
                    },
                    {
                      icon: Waves,
                      title:
                        "Cleaned Adult & Kids Pools, AC Suites & Games Lounge",
                      desc: "Big adult pool (3.5-5.75ft) and kids splash pool with slides, full-size snooker table, Carrom, Foosball, and luxury AC bedrooms.",
                    },
                  ].map((feat, idx) => (
                    <div
                      key={idx}
                      className="bg-card border border-border/70 p-6 rounded-lg flex items-start space-x-4 aura-box"
                    >
                      <div className="w-11 h-11 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0 mt-0.5 border border-gold/20">
                        <feat.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display text-base text-foreground mb-1.5">
                          {feat.title}
                        </h4>
                        <p className="text-xs text-foreground/65 leading-relaxed font-light">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Direct Concierge Callout Box */}
              <Reveal delay={200}>
                <div className="beam-border p-6 rounded-lg bg-card/90 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-5 h-5 text-gold" />
                    <h4 className="font-display text-lg text-white">
                      Need Custom Event Catering or Setup?
                    </h4>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed mb-4 font-light">
                    Our team arranges full event decoration, sound systems, BBQ
                    chefs, and extra seating for events from 50 to 200+ guests.
                  </p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs font-semibold uppercase tracking-wider hover:underline flex items-center gap-1"
                  >
                    Discuss Custom Event Plan →
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right 7 Columns: High-End Concierge Form */}
            <div className="lg:col-span-7">
              <Reveal delay={200}>
                <ContactFormClient />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Interactive Google Maps Location Section (Dark/Light Toggle) ── */}
      <ContactMapSection />

      {/* ── 5. Reusable Pre-Footer CTA with Video Background ──────── */}
      <PreFooterCta
        tag="Direct Reservation"
        title="Prefer WhatsApp"
        highlightTitle="Booking?"
        titleAfter=""
        description="Connect directly with our reservation team on WhatsApp for fast response and instant availability confirmation."
        primaryCtaLabel="WhatsApp Us"
        primaryCtaHref={WHATSAPP_LINK}
        secondaryCtaLabel="View Rate List"
        secondaryCtaHref="/packages"
        bgVideo="/videos/v10.mp4"
      />
    </div>
  );
}
