import { Reveal } from "../../../components/reveal";
import { PageHero } from "../../../components/page-hero";
import { PreFooterCta } from "../../../components/pre-footer-cta";
import { FAQClientView } from "./faq-client";
import { MessageSquare, Phone, ShieldCheck } from "lucide-react";

/**
 * FAQ page metadata — SEO optimized
 */
export const metadata = {
  title: "Frequently Asked Questions — Black Gold Farmhouse",
  description:
    "Official FAQ for Black Gold Farmhouse: rate list (April-July 2026), pool depth & timing, generator backup policy, maximum capacity, and reservation rules.",
};

/* ────────────────────────────────────────────────────────────────────
 * Authentic Black Gold Farmhouse FAQ Categories & Questions
 * ────────────────────────────────────────────────────────────────── */
const FAQ_CATEGORIES = [
  {
    id: "pricing",
    title: "Rates & Pricing",
    questions: [
      {
        q: "What are the official rates for 22 Hours Overnight stays?",
        a: "Weekday Overnight (Mon-Thu, 2:00 PM to 12:00 PM next day) is Rs. 85,000/-. Weekend Overnight (Fri-Sun & Public Holidays, 2:00 PM to 12:00 PM next day) is Rs. 110,000/-.",
      },
      {
        q: "What are the official rates for 10 Hours Day/Night picnics?",
        a: "Weekday 10H Day (8 AM-6 PM) is Rs. 35,000/- | Weekday 10H Night (8 PM-6 AM) is Rs. 45,000/-. Weekend 10H Day is Rs. 50,000/- | Weekend 10H Night is Rs. 65,000/-.",
      },
      {
        q: "How many guests are included in standard packages?",
        a: "All standard packages cover up to 35 persons. If your total guests exceed 40 persons, additional guests are charged at Rs. 1,000 per person extra.",
      },
      {
        q: "What are the event charges for weddings & large gatherings?",
        a: "Event bookings for 50-100 Pax are charged at Rs. 75,000/-, and bookings above 100 Pax are charged at Rs. 100,000/- (Includes heavy generator & fuel).",
      },
    ],
  },
  {
    id: "pool",
    title: "Pool & Water",
    questions: [
      {
        q: "What are the swimming pool depth and features?",
        a: "Our big adult pool has a depth of 3.5 ft to 5.75 ft. We also feature a separate dedicated kids splash pool equipped with water slides and shade canopy.",
      },
      {
        q: "What is the pool operating timing rule?",
        a: "For guest safety and water treatment, the swimming pool closes exactly 1 hour prior to your scheduled check-out time.",
      },
      {
        q: "Is the pool water clean and treated?",
        a: "Yes, our pools undergo deep filtration, chemical treatment, and freshwater top-up prior to every guest check-in.",
      },
    ],
  },
  {
    id: "facilities",
    title: "Facilities & Backup",
    questions: [
      {
        q: "Is heavy generator backup power included?",
        a: "Yes! Heavy generator power backup and fuel are included in all packages to ensure uninterrupted air conditioning, lawn lighting, and pool filtration pumps throughout your stay.",
      },
      {
        q: "What indoor and outdoor games are provided?",
        a: "Our estate features an air-conditioned indoor game room with a full-size professional snooker table, covered outdoor lounge with Carrom and Foosball, plus a kids play area with swings, slides, and see-saws.",
      },
      {
        q: "Are kitchen & BBQ facilities available?",
        a: "Yes, we provide a dedicated BBQ grill station, gas stove, deep freezer, and outdoor seating. Guests can bring their own marinations or request catering assistance.",
      },
    ],
  },
  {
    id: "rules",
    title: "Rules & Policies",
    questions: [
      {
        q: "Where is Black Gold Farmhouse located?",
        a: "We are located in Gadap Town, Karachi (Goth Ghulam Mohammad Jokhio Goth, Ghulam Muhammad Ali Road), just 15 minutes away from Jinnah International Airport.",
      },
      {
        q: "What are the music and noise guidelines?",
        a: "Outdoor sound systems and music are permitted until 11:00 PM. Indoor music in the AC lounge has no time restriction.",
      },
      {
        q: "How do I confirm my reservation?",
        a: "Reservations are confirmed upon payment of a 50% advance deposit. You can verify available dates instantly on WhatsApp at +92 333 2973045.",
      },
    ],
  },
];

/**
 * FAQPage — Redesigned Luxury FAQ Page.
 */
export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* ── Reusable Page Hero Banner ───────────────────────────── */}
      <PageHero
        badgeText="24/7 CONCIERGE HELP & POLICIES"
        title="Frequently Asked"
        highlightTitle="Questions"
        description="Find clear answers regarding rate list packages, pool depth, generator fuel policy, guest limits, and reservation rules at Black Gold Farmhouse."
        breadcrumbText="FAQ"
        bgImage="/images/9.jpeg"
        bgAlt="Black Gold Farmhouse lawns background"
      />

      {/* ── Interactive Search & Category Filter Section ────────── */}
      <section className="py-20 md:py-28 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <FAQClientView faqCategories={FAQ_CATEGORIES} />
          </Reveal>
        </div>
      </section>

      {/* ── Direct WhatsApp Concierge Assistance Bar ────────────── */}
      <section className="py-16 bg-muted border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-card border border-gold/40 rounded-xl p-8 sm:p-10 text-center shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 aura-box">
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs text-gold font-semibold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" /> 24/7 Concierge Support
                </div>
                <h3 className="font-display text-2xl text-foreground mb-1">
                  Have a Specific Question Not Listed Above?
                </h3>
                <p className="text-foreground/60 text-xs sm:text-sm">
                  Our reservation officers respond within 5 minutes on WhatsApp.
                </p>
              </div>
              <a
                href="https://wa.me/923332973045?text=Hello%20Black%20Gold%20Farmhouse,%20I%20have%20a%20question%20about%20booking."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold whitespace-nowrap flex items-center gap-2 shrink-0"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Us Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reusable Pre-Footer CTA with Video Background ──────── */}
      <PreFooterCta
        tag="Ready to Escape?"
        title="Reserve Your"
        highlightTitle="Luxury Stay"
        titleAfter=""
        description="Experience Karachi's premier private farmhouse. Book your preferred date today before weekend slots fill up."
        primaryCtaLabel="Book Now"
        primaryCtaHref="/book-now"
        secondaryCtaLabel="Contact Concierge"
        secondaryCtaHref="/contact"
        bgVideo="/videos/v10.mp4"
      />
    </div>
  );
}
