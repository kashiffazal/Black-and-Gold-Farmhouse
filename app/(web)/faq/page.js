import { Reveal } from "../../../components/reveal";
import { GoldButton } from "../../../components/gold-button";
import { PageHero } from "../../../components/page-hero";
import { PreFooterCta } from "../../../components/pre-footer-cta";
import { FAQAccordion } from "./faq-client";

/**
 * FAQ page metadata — SEO optimized
 */
export const metadata = {
  title: "Frequently Asked Questions — Black Gold Farmhouse",
  description:
    "Find answers to common questions about booking, amenities, pricing, check-in/out, and policies at Black Gold Farmhouse, Karachi's premier luxury farmhouse.",
};

/* ────────────────────────────────────────────────────────────────────
 * FAQ Data — Organized by category
 * ────────────────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  {
    id: "booking",
    title: "Booking & Reservations",
    icon: "📅",
    questions: [
      {
        q: "How do I book the farmhouse?",
        a: "You can book through our website by filling the reservation form, calling us at +92 300 123 4567, or sending an email to info@blackgoldfarmhouse.com. Our concierge team will confirm your booking within 24 hours.",
      },
      {
        q: "What is the minimum booking duration?",
        a: "Our minimum booking is for one night (check-in at 2:00 PM, check-out at 12:00 PM next day). For day events, we offer flexible 8-hour slots.",
      },
      {
        q: "How far in advance should I book?",
        a: "We recommend booking at least 2 weeks in advance, especially for weekends and holidays. For weddings and large events, 1-2 months advance booking is recommended to ensure availability.",
      },
      {
        q: "What is the cancellation policy?",
        a: "Cancellations made 7+ days before check-in receive a full refund. Cancellations 3-7 days prior receive a 50% refund. Within 3 days, the booking is non-refundable. Rescheduling is free if done 48+ hours in advance.",
      },
      {
        q: "Is a security deposit required?",
        a: "Yes, a refundable security deposit of PKR 50,000 is required at check-in. It is fully refunded within 48 hours after check-out, provided there is no damage to the property.",
      },
    ],
  },
  {
    id: "amenities",
    title: "Amenities & Facilities",
    icon: "🏊",
    questions: [
      {
        q: "What amenities are included?",
        a: "Our estate includes: infinity swimming pool, heated jacuzzi, professional snooker table, table tennis, bonfire courtyard, BBQ station, outdoor lounge with fairy lights, fully equipped kitchen, 5 luxury bedrooms, high-speed WiFi, and a dedicated parking area for 15+ vehicles.",
      },
      {
        q: "Is the pool heated?",
        a: "The jacuzzi is always heated. The main pool can be heated upon request for an additional fee. Please notify us at least 24 hours in advance.",
      },
      {
        q: "Do you provide catering services?",
        a: "Yes! We offer customizable catering packages including BBQ, desi cuisine, continental, and hi-tea setups. Our in-house chef can accommodate dietary restrictions. Catering can be added to any package.",
      },
      {
        q: "Is there WiFi available?",
        a: "Yes, high-speed WiFi is available throughout the entire estate, including outdoor areas. We also have a backup internet connection to ensure uninterrupted connectivity.",
      },
    ],
  },
  {
    id: "policies",
    title: "Policies & Rules",
    icon: "📋",
    questions: [
      {
        q: "What are the check-in and check-out times?",
        a: "Standard check-in is at 2:00 PM and check-out is at 12:00 PM (noon). Early check-in or late check-out can be arranged subject to availability for an additional charge.",
      },
      {
        q: "Are pets allowed?",
        a: "We love pets! Well-behaved pets are welcome at Black Gold Farmhouse. Please inform us in advance so we can prepare accordingly. A small additional cleaning fee may apply.",
      },
      {
        q: "Is there a guest limit?",
        a: "Our Intimate Escape package accommodates up to 20 guests, Signature Farmhouse up to 40, and Celebration Suite 60+ guests. Additional guests beyond the package limit incur a per-person charge.",
      },
      {
        q: "Is loud music allowed?",
        a: "Yes, our estate is in a private area with no noise restrictions during the day. After 11 PM, we request guests to keep music at moderate levels out of courtesy. Indoor music has no time restrictions.",
      },
    ],
  },
  {
    id: "location",
    title: "Location & Access",
    icon: "📍",
    questions: [
      {
        q: "Where is Black Gold Farmhouse located?",
        a: "We are located in the Malir area of Karachi, just 15 minutes from Jinnah International Airport. The exact location and directions are shared upon booking confirmation.",
      },
      {
        q: "Is parking available?",
        a: "Yes, we have a spacious private parking area that can accommodate 15+ vehicles. Valet parking service is included in the Celebration Suite package.",
      },
      {
        q: "Do you provide pickup service?",
        a: "Airport/hotel pickup can be arranged upon request for an additional fee. We also provide directions via Google Maps and a personal guide call 30 minutes before your arrival.",
      },
    ],
  },
];

/**
 * FAQPage — Luxury FAQ using reusable PageHero and PreFooterCta components.
 */
export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* ── Reusable Hero Banner ─────────────────────────────────── */}
      <PageHero
        title="Frequently Asked"
        highlightTitle="Questions"
        description="Everything you need to know about your stay at Black Gold Farmhouse. Can't find your answer? Contact us directly."
        breadcrumbText="FAQ"
        bgImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        bgAlt="Black Gold Farmhouse garden"
      />

      {/* ── FAQ Sections ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-background relative">
        <div className="absolute inset-0 aurora-bg opacity-[0.02] dark:opacity-[0.05] pointer-events-none z-0" />
        <div className="absolute inset-0 stars-bg opacity-5 dark:opacity-15 pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {FAQ_CATEGORIES.map((category, catIdx) => (
            <Reveal key={category.id} delay={catIdx * 100}>
              <div className="mb-16 last:mb-0">
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl text-foreground">
                      {category.title}
                    </h2>
                    <div className="w-12 h-[2px] bg-gradient-to-r from-gold to-gold-deep mt-2" />
                  </div>
                </div>

                {/* Accordion questions */}
                <FAQAccordion questions={category.questions} categoryId={category.id} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Help Card Section ────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-muted border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-card border border-border rounded-lg p-8 md:p-14 text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/20" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/20" />

              <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-4">
                Still Have Questions?
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                We&apos;re Here to{" "}
                <span className="italic text-muted-foreground font-light">
                  Help
                </span>
              </h2>
              <p className="text-foreground/60 max-w-lg mx-auto mb-10 text-sm md:text-base">
                Our dedicated concierge team is available 24/7 to answer your
                questions and help plan the perfect farmhouse experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <GoldButton href="/contact" variant="fill" className="min-w-[200px]">
                  Contact Us
                </GoldButton>
                <GoldButton href="/book-now" variant="outline" className="min-w-[200px]">
                  Book Your Stay
                </GoldButton>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-border">
                <a
                  href="tel:+923001234567"
                  className="text-foreground/60 hover:text-gold transition-colors text-sm flex items-center gap-2"
                >
                  📞 +92 300 123 4567
                </a>
                <div className="w-[1px] h-4 bg-border hidden sm:block" />
                <a
                  href="mailto:info@blackgoldfarmhouse.com"
                  className="text-foreground/60 hover:text-gold transition-colors text-sm flex items-center gap-2"
                >
                  ✉️ info@blackgoldfarmhouse.com
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reusable Pre-Footer CTA ──────────────────────────────── */}
      <PreFooterCta
        tag="Your Escape Awaits"
        title="Ready for an"
        highlightTitle="Unforgettable"
        titleAfter="Experience?"
        description="Whether it's a family weekend, a milestone celebration, or a corporate retreat — create memories that last a lifetime."
        primaryCtaLabel="Book Your Stay"
        primaryCtaHref="/book-now"
        secondaryCtaLabel="Contact Us"
        secondaryCtaHref="/contact"
      />
    </div>
  );
}
