import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../../../components/reveal";
import { PageHero } from "../../../components/page-hero";
import { PreFooterCta } from "../../../components/pre-footer-cta";
import { ContactFormClient } from "./contact-client";
import { Phone, Mail, MapPin, Clock, MessageSquare, Navigation } from "lucide-react";
import { Instagram, Facebook } from "../../../components/icons";

/**
 * Contact page metadata — SEO optimized
 */
export const metadata = {
  title: "Contact Us — Black Gold Farmhouse",
  description:
    "Get in touch with Black Gold Farmhouse concierge. Phone, email, location map, and direct inquiry form for booking inquiries in Malir, Karachi.",
};

/**
 * ContactPage — Luxury Contact Us page component.
 */
export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* ── Reusable Hero Banner ─────────────────────────────────── */}
      <PageHero
        title="Get in"
        highlightTitle="Touch"
        description="Have questions or ready to reserve your dates? Our 24/7 concierge team is ready to assist you."
        breadcrumbText="Contact"
        bgImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        bgAlt="Black Gold Farmhouse contact hero"
      />

      {/* ── Contact Info & Form Section ─────────────────────────── */}
      <section className="py-20 md:py-28 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left 5 Columns — Contact Cards & Info */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal>
                <div>
                  <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-3">
                    Reach Out
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
                    We&apos;re Always Available
                  </h2>
                  <div className="w-12 h-[2px] bg-gradient-to-r from-gold to-gold-deep mb-6" />
                  <p className="text-foreground/70 text-sm leading-relaxed mb-8">
                    Whether you are planning an intimate weekend or a grand celebration, we are here to assist with every detail.
                  </p>
                </div>
              </Reveal>

              {/* Info Cards */}
              <Reveal delay={100}>
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="bg-card border border-border p-6 rounded-md flex items-start gap-4 hover:border-gold/40 transition-colors shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                        Phone & WhatsApp
                      </h4>
                      <a
                        href="tel:+923001234567"
                        className="text-foreground/80 hover:text-gold transition-colors font-medium text-base block mt-1"
                      >
                        +92 300 123 4567
                      </a>
                      <a
                        href="tel:+923007654321"
                        className="text-foreground/60 hover:text-gold transition-colors text-xs block mt-0.5"
                      >
                        +92 300 765 4321 (Reservations)
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-card border border-border p-6 rounded-md flex items-start gap-4 hover:border-gold/40 transition-colors shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                        Email Address
                      </h4>
                      <a
                        href="mailto:info@blackgoldfarmhouse.com"
                        className="text-foreground/80 hover:text-gold transition-colors font-medium text-sm block mt-1"
                      >
                        info@blackgoldfarmhouse.com
                      </a>
                      <p className="text-foreground/50 text-xs mt-0.5">
                        Replies within 2 to 4 hours
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="bg-card border border-border p-6 rounded-md flex items-start gap-4 hover:border-gold/40 transition-colors shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                        Location
                      </h4>
                      <p className="text-foreground/80 font-medium text-sm mt-1">
                        Malir Farmhouse Area, Karachi
                      </p>
                      <p className="text-foreground/50 text-xs mt-0.5">
                        15 minutes drive from Jinnah International Airport
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="bg-card border border-border p-6 rounded-md flex items-start gap-4 hover:border-gold/40 transition-colors shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                        Concierge Hours
                      </h4>
                      <p className="text-foreground/80 font-medium text-sm mt-1">
                        24 Hours / 7 Days a Week
                      </p>
                      <p className="text-foreground/50 text-xs mt-0.5">
                        Check-in: 2:00 PM · Check-out: 12:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Social Links */}
              <Reveal delay={200}>
                <div className="pt-4">
                  <p className="text-xs uppercase tracking-widest text-foreground/50 font-semibold mb-3">
                    Follow Our Socials
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground/70 hover:text-gold hover:border-gold transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-foreground/70 hover:text-gold hover:border-gold transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right 7 Columns — Contact Form */}
            <div className="lg:col-span-7">
              <Reveal delay={150}>
                <ContactFormClient />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Location Map Section ─────────────────────────────────── */}
      <section className="py-20 bg-muted border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-4">
                Easy Access
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-3">
                How to Reach Us
              </h2>
              <p className="text-foreground/60 text-sm max-w-md mx-auto">
                Located conveniently near major road links with hassle-free access.
              </p>
            </div>

            {/* Map Placeholder Card */}
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-xl relative min-h-[380px] flex items-center justify-center">
              <div className="absolute inset-0 opacity-40">
                <Image
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                  alt="Map location overview"
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/60" />
              </div>

              <div className="relative z-10 text-center p-8 max-w-lg">
                <div className="w-14 h-14 rounded-full bg-gold text-[#0a0704] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Navigation className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl text-white mb-2">
                  Black Gold Farmhouse, Malir
                </h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Exact location coordinates and Google Maps pin will be shared automatically upon booking confirmation for maximum guest privacy.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-[#0a0704] font-semibold text-xs uppercase tracking-widest rounded-md hover:bg-gold-soft transition-colors shadow-md"
                >
                  <MapPin className="w-4 h-4" /> Open in Google Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reusable Pre-Footer CTA ──────────────────────────────── */}
      <PreFooterCta
        tag="Ready to Book?"
        title="Reserve Your"
        highlightTitle="Dates Now"
        titleAfter=""
        description="Select your preferred package or submit a booking request. Our team will get back to you promptly."
        primaryCtaLabel="Book Your Stay"
        primaryCtaHref="/book-now"
        secondaryCtaLabel="View Packages"
        secondaryCtaHref="/packages"
      />
    </div>
  );
}
