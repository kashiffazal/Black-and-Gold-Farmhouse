import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../../../components/reveal";
import { PageHero } from "../../../components/page-hero";
import { PreFooterCta } from "../../../components/pre-footer-cta";
import { GoldButton } from "../../../components/gold-button";
import { Check, Sparkles, Sun, Moon, Flame, Utensils, Gamepad2, Hotel, Waves, ShieldCheck } from "lucide-react";

/**
 * Experience page metadata — SEO optimized
 */
export const metadata = {
  title: "The Experience — Black Gold Farmhouse",
  description:
    "Discover world-class amenities at Black Gold Farmhouse: Big adult pool (3.5-5.75 ft) & kids pool with slides, AC snooker room, carrom & foosball, fish pond & wall fountain, BBQ pit, and royal AC suites.",
};

/* ────────────────────────────────────────────────────────────────────
 * Authentic Experience Pillars Data (From site-sample/images & packages.jpeg)
 * ────────────────────────────────────────────────────────────────── */
const EXPERIENCE_PILLARS = [
  {
    id: "aquatic",
    tag: "Pools & Water Features",
    title: "Big Adult & Kids Pool with Slides",
    subtitle: "Crystal-clear adult pool (3.5 - 5.75 ft depth) & kids fun splash slides",
    desc: "Experience pure aquatic indulgence at Black Gold Farmhouse. Our property features a spacious adult swimming pool ranging from 3.5 to 5.75 feet in depth, paired with a dedicated kids pool featuring water slides, a fish pond, wall fountain, and fresh running water with sprinkler showers.",
    bullets: [
      "Big Adult Pool with 3.5 to 5.75 ft depth",
      "Dedicated Kids Pool equipped with fun slides",
      "Fish Pond & Wall Fountain water features",
      "Sprinkler showers & advanced pool filtration system",
      "Poolside lounge & Miami relaxation chairs",
    ],
    img1: "/images/1.jpeg",
    img2: "/images/7.jpeg",
    reverse: false,
  },
  {
    id: "gaming",
    tag: "Indoor & Outdoor Games",
    title: "Snooker, Carrom & Kids Play Area",
    subtitle: "Air-conditioned indoor games room & outdoor activity zones",
    desc: "Whether you crave high-stakes indoor snooker matches or outdoor family game sessions, we have it all. Play on a full-size snooker table in our AC room, try Carrom board, Foosball, and Ludo, or let the kids enjoy swings, slides, merry-go-round, and see-saw.",
    bullets: [
      "Air-conditioned games room with full-size Snooker table",
      "Carrom Board, Foosball (Fuss ball) & Ludo setup",
      "Kids Play Area: Swings, Slides, Merry-Go-Round & See-Saw",
      "Colorful hand-painted cartoon wall murals for kids",
      "Shaded seating for spectators and parents",
    ],
    img1: "/images/4.jpeg",
    img2: "/images/12.jpeg",
    reverse: true,
  },
  {
    id: "culinary",
    tag: "Feast & Pergola Sitting",
    title: "BBQ Station & Pergola Lounges",
    subtitle: "Live grilling pits and 2-3 traditional covered pergolas",
    desc: "Gather your family around our live BBQ pit station. Enjoy sizzling kebabs and grilled delicacies in our 2-3 spacious pergolas outfitted with traditional charpais and comfy seating under shade and night lights.",
    bullets: [
      "Dedicated Live BBQ Pit Station for charcoal grilling",
      "2-3 Pergolas & covered outdoor sitting areas",
      "Traditional charpais & royal cushion seating",
      "Full kitchen access with Stove & Deep Freezer",
      "Spacious dining areas for up to 35+ guests",
    ],
    img1: "/images/5.jpeg",
    img2: "/images/18.jpeg",
    reverse: false,
  },
  {
    id: "suites",
    tag: "Royal Comfort",
    title: "Luxurious AC Bedrooms & Royal Lounge",
    subtitle: "Velvet upholstered bedroom suites & carved gold chair sitting",
    desc: "Unwind in true luxury. Black Gold Farmhouse features 2 spacious Air-Conditioned bedrooms with attached modern bathrooms, velvet geometric upholstered wall panels, gold accents, and a royal lounge area for comfortable family overnight stays.",
    bullets: [
      "2 Air-Conditioned luxury bedrooms with attached bathrooms",
      "Velvet upholstered headboard walls & gold decorative trims",
      "Royal indoor lounge with carved golden armchairs",
      "Heavy duty backup generator & fuel included",
      "High-speed Wi-Fi & modern lighting ambiance",
    ],
    img1: "/images/11.jpeg",
    img2: "/images/8.jpeg",
    reverse: true,
  },
];

/* ────────────────────────────────────────────────────────────────────
 * A Day at Black Gold Timeline Data
 * ────────────────────────────────────────────────────────────────── */
const TIMELINE_STEPS = [
  {
    time: "02:00 PM",
    title: "Check-In & Estate Tour",
    desc: "Arrive at Black Gold Farmhouse and explore the expansive lawn, pool, and AC bedroom suites.",
    icon: Sparkles,
  },
  {
    time: "03:30 PM",
    title: "Pool Fun & Kids Slides",
    desc: "Enjoy the big adult pool (3.5-5.75 ft) or watch kids enjoy the water slides & sprinkler shower.",
    icon: Waves,
  },
  {
    time: "05:30 PM",
    title: "Snooker & Indoor Games",
    desc: "Head inside to the AC games room for snooker, foosball, carrom, or ludo with family.",
    icon: Gamepad2,
  },
  {
    time: "08:30 PM",
    title: "Live BBQ Grill under Pergola Lights",
    desc: "Savor fresh charcoal grilled BBQ in the outdoor pergolas illuminated with ambient purple & gold lights.",
    icon: Flame,
  },
  {
    time: "11:00 PM",
    title: "Starlit Relaxation & AC Comfort",
    desc: "Relax on traditional charpais in the pergola or retreat to our luxurious AC bedrooms for a restful night.",
    icon: Moon,
  },
];

/**
 * ExperiencePage — Luxury Experience overview page.
 */
export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      {/* ── Reusable Hero Banner ─────────────────────────────────── */}
      <PageHero
        title="The Farmhouse"
        highlightTitle="Experience"
        description="Discover all authentic amenities crafted for your family: big adult pool, kids slides, AC snooker lounge, pergolas, BBQ pit, and luxury bedroom suites."
        breadcrumbText="Experience"
        bgImage="/images/9.jpeg"
        bgAlt="Black Gold Farmhouse authentic estate view"
      />

      {/* ── Quick Experience Icons Bar ──────────────────────────── */}
      <section className="py-12 bg-muted/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-3">
                <Waves className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-foreground text-sm">Adult & Kids Pool</h4>
              <p className="text-foreground/60 text-xs mt-1">3.5 - 5.75 ft depth & slides</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-3">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-foreground text-sm">Snooker & Games</h4>
              <p className="text-foreground/60 text-xs mt-1">AC Room, Carrom & Foosball</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-3">
                <Utensils className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-foreground text-sm">BBQ & Kitchen</h4>
              <p className="text-foreground/60 text-xs mt-1">BBQ Pit, Stove & Deep Freezer</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-3">
                <Hotel className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-foreground text-sm">2 AC Bedrooms</h4>
              <p className="text-foreground/60 text-xs mt-1">Royal lounge & attached baths</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience Pillars Sections ─────────────────────────── */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 relative z-10">
          {EXPERIENCE_PILLARS.map((pillar) => (
            <Reveal key={pillar.id}>
              <div
                id={pillar.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  pillar.reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text column */}
                <div
                  className={`lg:col-span-6 ${
                    pillar.reverse ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-3">
                    {pillar.tag}
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-3">
                    {pillar.title}
                  </h2>
                  <p className="text-foreground/80 text-sm font-medium mb-6">
                    {pillar.subtitle}
                  </p>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-8">
                    {pillar.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {pillar.bullets.map((b, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start text-sm text-foreground/80"
                      >
                        <Check className="w-4 h-4 text-gold mr-3 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <GoldButton href="/packages" variant="outline">
                    View Rate List
                  </GoldButton>
                </div>

                {/* Media column (Dual image composition) */}
                <div
                  className={`lg:col-span-6 relative ${
                    pillar.reverse ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative mx-auto max-w-md lg:max-w-none">
                    {/* Primary large image */}
                    <div className="relative rounded-lg overflow-hidden border border-border shadow-2xl aspect-[4/3]">
                      <Image
                        src={pillar.img1}
                        alt={pillar.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Secondary overlapping thumbnail */}
                    <div className="absolute -bottom-8 -right-4 sm:-right-8 w-1/2 aspect-[4/3] rounded-lg overflow-hidden border-2 border-gold shadow-2xl hidden sm:block">
                      <Image
                        src={pillar.img2}
                        alt={`${pillar.title} detail`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Timeline Section: A Day at Black Gold ───────────────── */}
      <section className="py-20 md:py-28 bg-muted/40 border-t border-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-4">
                Sample Itinerary
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
                A Day at Black Gold Farmhouse
              </h2>
              <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
                Here is a glimpse of how your family can spend an unforgettable day at our luxury estate.
              </p>
            </div>
          </Reveal>

          {/* Timeline steps */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center line (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gold/20 -translate-x-1/2" />

            <div className="space-y-12 relative z-10">
              {TIMELINE_STEPS.map((step, idx) => {
                const Icon = step.icon;
                const isEven = idx % 2 === 0;

                return (
                  <Reveal key={idx}>
                    <div
                      className={`flex flex-col md:flex-row items-center ${
                        isEven ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Content box */}
                      <div className="w-full md:w-1/2 p-4">
                        <div
                          className={`bg-card border border-border p-6 rounded-lg shadow-md hover:border-gold/40 transition-all ${
                            isEven ? "md:text-left" : "md:text-right"
                          }`}
                        >
                          <span className="inline-block text-gold text-xs font-semibold uppercase tracking-widest mb-2 px-2.5 py-1 rounded bg-gold/10">
                            {step.time}
                          </span>
                          <h3 className="font-display text-xl text-foreground mb-2">
                            {step.title}
                          </h3>
                          <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      {/* Center icon badge */}
                      <div className="my-4 md:my-0 flex items-center justify-center shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gold text-[#0a0704] flex items-center justify-center shadow-lg border-4 border-background z-20">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Spacer for 50% grid alignment */}
                      <div className="hidden md:block w-1/2" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reusable Pre-Footer CTA ──────────────────────────────── */}
      <PreFooterCta
        tag="Plan Your Stay"
        title="Ready to Experience"
        highlightTitle="Luxury?"
        titleAfter=""
        description="Book your 10-hour or 22-hour stay at Black Gold Farmhouse and enjoy every amenity in complete privacy."
        primaryCtaLabel="Book Now"
        primaryCtaHref="/book-now"
        secondaryCtaLabel="Explore Rates"
        secondaryCtaHref="/packages"
        bgImage="/images/1.jpeg"
      />
    </div>
  );
}
