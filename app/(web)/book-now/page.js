import React, { Suspense } from "react";
import { Reveal } from "../../../components/reveal";
import { PageHero } from "../../../components/page-hero";
import { PreFooterCta } from "../../../components/pre-footer-cta";
import { BookNowClient } from "./book-now-client";
import { ShieldCheck, Zap, Waves, Gamepad2, Sparkles, CheckCircle2 } from "lucide-react";

/**
 * Book Now page metadata — SEO optimized
 */
export const metadata = {
  title: "Book Now & Instant Reservation — Black Gold Farmhouse",
  description:
    "Official online reservation portal for Black Gold Farmhouse Karachi. Select 22H Weekend/Weekday, 10H Day/Night slots, or Grand Event packages with instant WhatsApp confirmation.",
};

/**
 * BookNow Page — Executive Online Reservation Portal.
 */
export default function BookNowPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Page Hero Banner ────────────────────────────────────── */}
      <PageHero
        badgeText="OFFICIAL ONLINE RESERVATIONS"
        title="Reserve Your"
        highlightTitle="Private Estate"
        description="Select your preferred package slot, date, and guest count. Our executive concierge team will verify availability and send instant confirmation within 15 minutes."
        breadcrumbText="Book Now"
        bgImage="/images/18.jpeg"
        bgAlt="Black Gold Farmhouse pergola night ambiance"
      />

      {/* ── Main Reservation Console Section ────────────────────── */}
      <section className="py-20 md:py-28 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <Suspense fallback={<div className="text-center py-20 text-gold font-display text-xl">Loading Reservation Console...</div>}>
              <BookNowClient />
            </Suspense>
          </Reveal>
        </div>
      </section>

      {/* ── The Black Gold Advantage Perks Grid ──────────────────── */}
      <section className="py-20 bg-muted/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-3">
                Estate Promises
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-3">
                Included in Every Reservation
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-deep mx-auto" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "100% Private Access",
                desc: "No shared spaces or third-party guests. The entire property is exclusively yours.",
              },
              {
                icon: Zap,
                title: "Heavy Generator & Fuel",
                desc: "100% continuous power for air conditioning, lawn lights, and pool pumps.",
              },
              {
                icon: Waves,
                title: "Deep-Cleaned Pools",
                desc: "Adult pool & kids splash pool deep-cleaned and freshly treated for your stay.",
              },
              {
                icon: Gamepad2,
                title: "Snooker & Game Lounge",
                desc: "Full-size indoor snooker table, Carrom, Foosball, and luxury AC suites.",
              },
            ].map((p, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-card border border-border/80 p-6 rounded-xl aura-box shadow-md hover:border-gold/50 transition-all">
                  <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-4 border border-gold/20">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-lg text-foreground mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-foreground/65 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reusable Pre-Footer CTA with Video Background ──────── */}
      <PreFooterCta
        tag="Instant Response"
        title="Need Help Choosing a"
        highlightTitle="Package?"
        titleAfter=""
        description="Our reservation officers are available 24/7 on WhatsApp to help tailor your family picnic or weekend retreat."
        primaryCtaLabel="WhatsApp Concierge"
        primaryCtaHref="https://wa.me/923332973045?text=Hello%20Black%20Gold%20Farmhouse,%20I%20need%20help%20choosing%20a%20package."
        secondaryCtaLabel="Contact Page"
        secondaryCtaHref="/contact"
        bgVideo="/videos/v10.mp4"
      />
    </div>
  );
}
