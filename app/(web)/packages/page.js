import { Reveal } from "../../../components/reveal";
import { PageHero } from "../../../components/page-hero";
import { PreFooterCta } from "../../../components/pre-footer-cta";
import { PackagesFilterClient } from "./packages-client";
import { ShieldCheck, Clock, Users, Coffee } from "lucide-react";

/**
 * Packages page metadata — SEO optimized
 */
export const metadata = {
  title: "Packages & Pricing — Black Gold Farmhouse",
  description:
    "View luxury packages & transparent pricing for overnight stays, family reunions, corporate retreats, and grand wedding events at Black Gold Farmhouse, Karachi.",
};

/* ────────────────────────────────────────────────────────────────────
 * Packages Data
 * ────────────────────────────────────────────────────────────────── */
const OVERNIGHT_PACKAGES = [
  {
    title: "Intimate Escape",
    capacity: "Up to 20 Guests",
    price: "PKR 425,000",
    unit: "night",
    desc: "Designed for small family get-togethers and relaxed weekend escapes with complete privacy.",
    featured: false,
    features: [
      "Full access to main luxury villa & 3 suites",
      "Private infinity pool & heated jacuzzi",
      "Outdoor lounge & garden seating",
      "Snooker table & indoor games room",
      "Open-air BBQ pit setup",
      "High-speed WiFi throughout estate",
      "Dedicated concierge assistant",
    ],
  },
  {
    title: "Signature Farmhouse",
    capacity: "Up to 40 Guests",
    price: "PKR 625,000",
    unit: "night",
    desc: "Our flagship package offering full estate access, premium entertainment facilities & concierge service.",
    featured: true,
    features: [
      "Entire 5-bedroom luxury estate access",
      "Infinity pool, heated jacuzzi & kids splash area",
      "Professional snooker & table tennis setup",
      "Bonfire courtyard with fairy lights & seating",
      "Live BBQ grill pit & covered dining area",
      "Welcome refreshment drinks & dry fruits",
      "24/7 dedicated butler & concierge service",
      "Private parking for 15+ vehicles",
    ],
  },
  {
    title: "Celebration Suite",
    capacity: "Weddings & 60+ Guests",
    price: "PKR 895,000",
    unit: "night",
    desc: "The ultimate luxury setup for grand weddings, milestone anniversaries, and large celebrations.",
    featured: false,
    features: [
      "Full estate & expansive event lawn access",
      "Custom stage, ambient lighting & decor support",
      "Valet parking service for up to 50 vehicles",
      "Bridal suite & master preparation room",
      "Extensive catering & live cooking station setup",
      "Sound system setup (up to 11 PM outdoor)",
      "24/7 private security detail on-site",
    ],
  },
];

const DAY_PACKAGES = [
  {
    title: "Day Picnic Retreat",
    capacity: "Up to 30 Guests",
    price: "PKR 275,000",
    unit: "8-hour slot",
    desc: "Perfect for daytime family picnics, birthday parties, and pool celebrations.",
    featured: false,
    features: [
      "8-hour exclusive estate access (10 AM - 6 PM)",
      "Full access to pool, jacuzzi & gardens",
      "Indoor game room & lounge",
      "BBQ pit & outdoor dining pavilion",
      "Dedicated staff on standby",
    ],
  },
  {
    title: "Corporate Day Out",
    capacity: "Up to 50 Guests",
    price: "PKR 350,000",
    unit: "day slot",
    desc: "Tailored for team building events, executive retreats, and corporate celebrations.",
    featured: true,
    features: [
      "Full day estate access with meeting lawn setup",
      "Audio/visual presentation setup",
      "Team building games & pool access",
      "Hi-tea & lunch catering setup included",
      "Valet parking & dedicated event manager",
    ],
  },
  {
    title: "Grand Evening Reception",
    capacity: "Up to 100 Guests",
    price: "PKR 550,000",
    unit: "evening slot",
    desc: "Exclusive evening lawn venue for walima, mehndi, or grand corporate galas.",
    featured: false,
    features: [
      "6-hour evening slot (5 PM - 11 PM)",
      "Landscaped lawn lighting & decor ready",
      "Catering setup area & power backup",
      "Valet parking & security personnel",
      "Bridal room access included",
    ],
  },
];

const COMPARISON_FEATURES = [
  { name: "Max Guests Allowed", intimate: "20 Guests", signature: "40 Guests", celebration: "60+ Guests" },
  { name: "Luxury Bedroom Suites", intimate: "3 Suites", signature: "5 Suites", celebration: "5 Suites + Bridal Room" },
  { name: "Infinity Pool & Jacuzzi Access", intimate: true, signature: true, celebration: true },
  { name: "Indoor Snooker & Table Tennis", intimate: true, signature: true, celebration: true },
  { name: "BBQ Pit & Outdoor Dining", intimate: true, signature: true, celebration: true },
  { name: "Bonfire Courtyard & Setup", intimate: false, signature: true, celebration: true },
  { name: "Welcome Refreshment Basket", intimate: false, signature: true, celebration: true },
  { name: "Valet Parking Service", intimate: false, signature: false, celebration: true },
  { name: "Event Lawn & Stage Setup Area", intimate: false, signature: false, celebration: true },
  { name: "24/7 Concierge Support", intimate: true, signature: true, celebration: true },
];

/**
 * PackagesPage — Packages & Pricing page with modular PageHero & PreFooterCta.
 */
export default function PackagesPage() {
  return (
    <div className="min-h-screen">
      {/* ── Reusable Hero Banner ─────────────────────────────────── */}
      <PageHero
        title="Exclusive"
        highlightTitle="Packages"
        description="Transparent pricing tailored for intimate family getaways, corporate retreats, and grand wedding celebrations."
        breadcrumbText="Packages"
        bgImage="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        bgAlt="Black Gold Farmhouse luxury packages"
      />

      {/* ── Value Proposition Guarantees ───────────────────────────── */}
      <section className="py-12 bg-muted/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4 p-4 rounded-md bg-card/40 border border-border/40">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">No Hidden Fees</h4>
                <p className="text-foreground/60 text-xs mt-0.5">Transparent upfront pricing</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-md bg-card/40 border border-border/40">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Flexible Slots</h4>
                <p className="text-foreground/60 text-xs mt-0.5">Overnight & day events</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-md bg-card/40 border border-border/40">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">100% Private</h4>
                <p className="text-foreground/60 text-xs mt-0.5">Entire estate just for you</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-md bg-card/40 border border-border/40">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Coffee className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Dedicated Butler</h4>
                <p className="text-foreground/60 text-xs mt-0.5">24/7 on-site assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive Packages & Comparison Section ───────────── */}
      <section className="py-20 md:py-28 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <PackagesFilterClient
              overnightPackages={OVERNIGHT_PACKAGES}
              dayPackages={DAY_PACKAGES}
              comparisonFeatures={COMPARISON_FEATURES}
            />
          </Reveal>
        </div>
      </section>

      {/* ── Reusable Pre-Footer CTA ──────────────────────────────── */}
      <PreFooterCta
        tag="Plan Your Stay"
        title="Need a Custom"
        highlightTitle="Package?"
        titleAfter=""
        description="Hosting a multi-day event or custom setup? Contact our concierge team to tailor an exclusive package to your exact needs."
        primaryCtaLabel="Book Package Now"
        primaryCtaHref="/book-now"
        secondaryCtaLabel="Contact Concierge"
        secondaryCtaHref="/contact"
      />
    </div>
  );
}
