import { Reveal } from "../../../components/reveal";
import { PageHero } from "../../../components/page-hero";
import { PreFooterCta } from "../../../components/pre-footer-cta";
import { PackagesFilterClient } from "./packages-client";
import { ShieldCheck, Clock, Users, Zap } from "lucide-react";

/**
 * Packages page metadata — SEO optimized
 */
export const metadata = {
  title: "Packages & Official Rate List — Black Gold Farmhouse",
  description:
    "Official rate list (April-July 2026) for Black Gold Farmhouse Karachi: 22-hour overnight slots, 10-hour day/night slots, and event charges with generator included.",
};

/* ────────────────────────────────────────────────────────────────────
 * Authentic Rate List Data — April-July 2026 (From packages.jpeg)
 * ────────────────────────────────────────────────────────────────── */

// 22 Hours Slots
const TWENTY_TWO_HOUR_PACKAGES = [
  {
    title: "22 Hours Weekday Slot",
    timing: "Mon to Thurs (Check-in 2:00 PM - Check-out 12:00 PM)",
    price: "Rs. 85,000/-",
    acInfo: "AC Timings: 10 Hours Max (5 Hours Morning - 5 Hours Night)",
    desc: "Complete 22-hour overnight getaway for family retreats with full access to 2-AC bedrooms, infinity pool, snooker, and games.",
    featured: false,
    features: [
      "Full 22 Hours exclusive estate access",
      "Luxurious 2-AC Bedrooms with attached bathrooms",
      "Big Adult Pool (3.5 - 5.75 ft) & Kids Pool with Slides",
      "Indoor Games Room (Snooker, Carrom, Foosball, Ludo)",
      "Large Lawn & Pergolas outdoor sitting",
      "Live BBQ Pit station & Kitchen with deep freezer",
      "Fuel & Heavy Generator power backup included",
      "Wi-Fi & Ambient Night Lightings",
    ],
  },
  {
    title: "22 Hours Weekend / Holiday Slot",
    timing: "Fri to Sun & Public Holidays",
    price: "Rs. 110,000/-",
    acInfo: "AC Timings: 10 Hours Max (5 Hours Morning - 5 Hours Night)",
    desc: "Our most popular weekend getaway package for family celebrations & milestone reunions.",
    featured: true,
    badge: "Most Popular",
    features: [
      "Full 22 Hours weekend exclusive estate access",
      "Luxurious 2-AC Bedrooms with attached bathrooms",
      "Big Adult Pool & Kids Pool with Slides",
      "Indoor Games Room (Snooker, Carrom, Foosball, Ludo)",
      "Fish Pond, Wall Fountain & Sprinkler Shower",
      "Kids Play Area (Swings, Slides, Merry-Go-Round, See-Saw)",
      "Live BBQ Pit Station & Kitchen with Stove & Deep Freezer",
      "Fuel & Heavy Generator power backup included",
      "Maximum 35 persons allowed (above 40 charged Rs. 1,000/person)",
    ],
  },
];

// 10 Hours Slots
const TEN_HOUR_PACKAGES = [
  {
    title: "Weekday Morning 10H Slot",
    timing: "Mon to Thurs (8:00 AM – 6:00 PM)",
    price: "Rs. 35,000/-",
    acInfo: "AC Timings: 5 Hours Max (Time of your Choice)",
    desc: "Daytime 10-hour slot perfect for daytime family picnics and pool parties.",
    featured: false,
    features: [
      "10 Hours daytime exclusive access",
      "Access to Adult Pool & Kids Pool with Slides",
      "Snooker & Indoor Games Room",
      "Lawn, Pergolas & BBQ Pit Station",
      "Kitchen & Deep Freezer access",
      "5 Hours Max AC timing of your choice",
    ],
  },
  {
    title: "Weekday Night 10H Slot",
    timing: "Mon to Thurs (8:00 PM – 6:00 AM)",
    price: "Rs. 45,000/-",
    acInfo: "AC Timings: 5 Hours Max (Time of your Choice)",
    desc: "Nighttime 10-hour slot for evening poolside gatherings under ambient lights.",
    featured: false,
    features: [
      "10 Hours nighttime exclusive access",
      "Illuminated Night Pool & Wall Fountain",
      "Indoor Snooker & Board Games Room",
      "Live BBQ Pit Station under Pergola lights",
      "5 Hours Max AC timing of your choice",
      "Fuel & Generator power backup included",
    ],
  },
  {
    title: "Weekend Morning 10H Slot",
    timing: "Fri to Sun & Public Holidays (8:00 AM – 6:00 PM)",
    price: "Rs. 50,000/-",
    acInfo: "AC Timings: 5 Hours Max (Time of your Choice)",
    desc: "Weekend day slot for family get-togethers and kids pool fun.",
    featured: true,
    badge: "Popular Day Slot",
    features: [
      "10 Hours weekend day access",
      "Adult Pool & Kids Pool with Slides",
      "Kids Play Area (Swings, Slides, Merry-Go-Round)",
      "Indoor Snooker, Carrom & Foosball",
      "Large Lawn & Outdoor Lounge",
      "5 Hours Max AC timing of your choice",
    ],
  },
  {
    title: "Weekend Night 10H Slot",
    timing: "Fri to Sun & Public Holidays (8:00 PM – 6:00 AM)",
    price: "Rs. 65,000/-",
    acInfo: "AC Timings: 5 Hours Max (Time of your Choice)",
    desc: "Weekend night slot for grand evening parties & starlit celebrations.",
    featured: false,
    features: [
      "10 Hours weekend night access",
      "Night pool with ambient lighting",
      "Snooker lounge & outdoor pergola sitting",
      "Live BBQ pit station",
      "5 Hours Max AC timing of your choice",
      "Fuel & Generator power backup included",
    ],
  },
];

// Event Packages
const EVENT_PACKAGES = [
  {
    title: "Event (50 - 100 Persons)",
    timing: "Night Event (9:00 PM to 5:00 AM)",
    price: "Rs. 75,000/-",
    acInfo: "Fuel & Heavy Generator Included",
    desc: "Tailored for birthday celebrations, engagements, or family receptions up to 100 guests.",
    featured: false,
    features: [
      "Full lawn & venue setup area access",
      "Fuel & Heavy Generator included throughout event",
      "Luxurious 2-AC Bedrooms for preparation & host resting",
      "Ambient Lighting & Wall Fountain backdrop",
      "Catering setup area & deep freezer access",
      "Parking area for guest vehicles",
    ],
  },
  {
    title: "Grand Event (Above 100 Persons)",
    timing: "Night Event (9:00 PM to 5:00 AM)",
    price: "Rs. 100,000/-",
    acInfo: "Fuel & Heavy Generator Included",
    desc: "Exclusive venue booking for large weddings, walima receptions, and corporate galas.",
    featured: true,
    badge: "Grand Venue",
    features: [
      "Full estate & expansive lawn venue access",
      "Fuel & Heavy Generator included throughout event",
      "Stage & decor setup area readiness",
      "Luxurious 2-AC Bedrooms for bridal & host preparation",
      "Valet parking support area",
      "Dedicated management support staff",
    ],
  },
];

// Complete Real Facilities List
const COMPARISON_FEATURES = [
  { name: "Luxurious Bedrooms", detail: "2-AC Bedrooms with attached bathrooms" },
  { name: "Kitchen Facilities", detail: "Kitchen with Stove & Deep Freezer" },
  { name: "Lawn & Garden", detail: "Expansive Large Lawn & Garden Area" },
  { name: "Outdoor Sitting", detail: "2-3 Pergolas & Outdoor Sitting Area" },
  { name: "Swimming Pools", detail: "1 Big Adult Pool (3.5 - 5.75 ft) & 1 Kids Pool with Slides" },
  { name: "Water Features", detail: "Fish Pond & Wall Fountain" },
  { name: "Washrooms", detail: "Separate Shower Area & Outdoor Washrooms" },
  { name: "Kids Play Area", detail: "Swings, Slides, Merry-Go-Round, See-Saw etc." },
  { name: "Indoor Games Room", detail: "Snooker, Carrom Board, Foosball / Fuss ball, Ludo etc." },
  { name: "BBQ Station", detail: "Live BBQ Pit Station" },
  { name: "Connectivity", detail: "High-Speed Wi-Fi Throughout Estate" },
  { name: "Water Supply", detail: "Fresh Running Water with Sprinkler Shower & Filtration" },
  { name: "Lighting & Lounge", detail: "Ambient Lightings, Lounge & Miami Chairs" },
  { name: "Power Backup", detail: "Fuel & Heavy Generator Included" },
];

/**
 * PackagesPage — Packages & Official Rate List page.
 */
export default function PackagesPage() {
  return (
    <div className="min-h-screen">
      {/* ── Reusable Hero Banner ─────────────────────────────────── */}
      <PageHero
        title="Official Rate List &"
        highlightTitle="Packages"
        description="Official rates (April-July 2026) for 22-hour overnight stays, 10-hour day/night slots, and grand event bookings."
        breadcrumbText="Packages"
        bgImage="/images/7.jpeg"
        bgAlt="Black Gold Farmhouse pool and estate"
      />

      {/* ── Value Proposition Guarantees ───────────────────────────── */}
      <section className="py-10 bg-muted/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4 p-4 rounded-md bg-card/40 border border-border/40">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Official Rates</h4>
                <p className="text-foreground/60 text-xs mt-0.5">April - July 2026 rate list</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-md bg-card/40 border border-border/40">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">10H & 22H Slots</h4>
                <p className="text-foreground/60 text-xs mt-0.5">Flexible day & night options</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-md bg-card/40 border border-border/40">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Max 35 Persons</h4>
                <p className="text-foreground/60 text-xs mt-0.5">Above 40 @ Rs 1,000/person</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-md bg-card/40 border border-border/40">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Generator Included</h4>
                <p className="text-foreground/60 text-xs mt-0.5">Fuel & generator provided</p>
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
              twentyTwoHourPackages={TWENTY_TWO_HOUR_PACKAGES}
              tenHourPackages={TEN_HOUR_PACKAGES}
              eventPackages={EVENT_PACKAGES}
              comparisonFeatures={COMPARISON_FEATURES}
            />
          </Reveal>
        </div>
      </section>

      {/* ── Reusable Pre-Footer CTA ──────────────────────────────── */}
      <PreFooterCta
        tag="Ready to Book?"
        title="Reserve Your"
        highlightTitle="Dates Today"
        titleAfter=""
        description="Contact our team to verify availability for your preferred date and lock in your reservation."
        primaryCtaLabel="Book Now"
        primaryCtaHref="/book-now"
        secondaryCtaLabel="Contact Us"
        secondaryCtaHref="/contact"
        bgImage="/images/1.jpeg"
      />
    </div>
  );
}
