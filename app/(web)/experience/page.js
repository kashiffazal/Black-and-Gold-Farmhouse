import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../../../components/reveal";
import { PageHero } from "../../../components/page-hero";
import { PreFooterCta } from "../../../components/pre-footer-cta";
import { GoldButton } from "../../../components/gold-button";
import { Check, Sparkles, Sun, Moon, Flame, Utensils, Gamepad2, Hotel } from "lucide-react";

/**
 * Experience page metadata — SEO optimized
 */
export const metadata = {
  title: "The Experience — Black Gold Farmhouse",
  description:
    "Discover world-class amenities at Black Gold Farmhouse: infinity pool, heated jacuzzi, indoor snooker lounge, open-air BBQ dining, bonfire courtyard, and luxury suites.",
};

/* ────────────────────────────────────────────────────────────────────
 * Experience Pillars Data
 * ────────────────────────────────────────────────────────────────── */
const EXPERIENCE_PILLARS = [
  {
    id: "aquatic",
    tag: "Relaxation & Refreshment",
    title: "The Aquatic Sanctuary",
    subtitle: "Crystal-clear pool with a heated jacuzzi & sunken lounge",
    desc: "Dive into pure tranquility in our temperature-regulated infinity pool. Designed with a separate shallow kids splash zone and an adjacent 8-person heated hydrotherapy jacuzzi, it offers the ultimate swimming experience day or night.",
    bullets: [
      "Infinity pool with ambient underwater night lighting",
      "Heated hydrotherapy jacuzzi jets",
      "Sunken poolside lounge with plush sunbeds & umbrellas",
      "Shallow kids splash zone with safety depth indicators",
    ],
    img1: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    img2: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    reverse: false,
  },
  {
    id: "gaming",
    tag: "Indoor Entertainment",
    title: "The Gaming & Snooker Lounge",
    subtitle: "Air-conditioned game room equipped for friendly competition",
    desc: "Step inside our fully air-conditioned game room featuring a full-size professional snooker table, table tennis, and comfortable lounge seating for indoor fun during warm afternoons.",
    bullets: [
      "Full-size tournament-grade snooker table & cues",
      "Indoor table tennis with extra paddles & balls",
      "Board games collection (Chess, Carrom, Scrabble)",
      "Smart TV lounge with Netflix & ambient surround sound",
    ],
    img1: "https://images.unsplash.com/photo-1615117950532-5765cb56a48e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    img2: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    reverse: true,
  },
  {
    id: "culinary",
    tag: "Feast & Flavor",
    title: "Culinary & Open-Air BBQ",
    subtitle: "Live grilling setups and covered outdoor dining pavilion",
    desc: "Gather your family around our custom-built open-air BBQ grill pit. Whether you prefer self-grilling or our live chef service, enjoy dining under the open sky in our covered dining pavilion.",
    bullets: [
      "Built-in charcoal & gas BBQ grill pits",
      "Covered outdoor dining pavilion seating 30+ guests",
      "Fully equipped commercial kitchen with chef appliances",
      "Custom catering packages (BBQ, Karahi, Continental & Hi-Tea)",
    ],
    img1: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    img2: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    reverse: false,
  },
  {
    id: "courtyard",
    tag: "Nighttime Magic",
    title: "Starlit Bonfire Courtyard",
    subtitle: "Magical evenings under twinkling fairy lights",
    desc: "As the sun sets, our bonfire courtyard comes alive. Cozy up around the roaring fire pit with plush seating, warm tea, and marshmallow roasting under the starlit Karachi sky.",
    bullets: [
      "Dedicated stone fire pit with firewood included",
      "Fairy lights & festoon garden illumination",
      "Cozy outdoor circular lounge seating",
      "Freshly brewed Karak Chai & marshmallow kits available",
    ],
    img1: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    img2: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    reverse: true,
  },
];

/* ────────────────────────────────────────────────────────────────────
 * A Day at Black Gold Timeline Data
 * ────────────────────────────────────────────────────────────────── */
const TIMELINE_STEPS = [
  {
    time: "02:00 PM",
    title: "Royal Welcome & Check-In",
    desc: "Arrive at the estate to fresh welcome drinks and a guided tour by your dedicated concierge.",
    icon: Sparkles,
  },
  {
    time: "03:30 PM",
    title: "Poolside Relaxation & Games",
    desc: "Take a refreshing dip in the infinity pool or enjoy a game of snooker in the AC lounge.",
    icon: Sun,
  },
  {
    time: "06:30 PM",
    title: "Sunset Chai & Garden Stroll",
    desc: "Watch the golden sunset over manicured lawn gardens with evening Karak Chai & snacks.",
    icon: Utensils,
  },
  {
    time: "08:30 PM",
    title: "Live BBQ Feast",
    desc: "Savor freshly grilled skewers, kebabs, and warm naan at the illuminated dining pavilion.",
    icon: Flame,
  },
  {
    time: "10:30 PM",
    title: "Starlit Bonfire & Music",
    desc: "Unwind around the roaring courtyard bonfire under twinkling fairy lights and starlit skies.",
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
        title="The Luxury"
        highlightTitle="Experience"
        description="Discover world-class amenities crafted for ultimate family relaxation, recreation, and unforgettable memories."
        breadcrumbText="Experience"
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        bgAlt="Black Gold Farmhouse experience hero"
      />

      {/* ── Quick Experience Icons Bar ──────────────────────────── */}
      <section className="py-10 bg-muted/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-md bg-card/40 border border-border/40 flex flex-col items-center">
              <Sun className="w-6 h-6 text-gold mb-2" />
              <h4 className="font-semibold text-foreground text-sm">Infinity Pool & Jacuzzi</h4>
            </div>
            <div className="p-4 rounded-md bg-card/40 border border-border/40 flex flex-col items-center">
              <Gamepad2 className="w-6 h-6 text-gold mb-2" />
              <h4 className="font-semibold text-foreground text-sm">Indoor Snooker Lounge</h4>
            </div>
            <div className="p-4 rounded-md bg-card/40 border border-border/40 flex flex-col items-center">
              <Utensils className="w-6 h-6 text-gold mb-2" />
              <h4 className="font-semibold text-foreground text-sm">Live BBQ & Dining</h4>
            </div>
            <div className="p-4 rounded-md bg-card/40 border border-border/40 flex flex-col items-center">
              <Flame className="w-6 h-6 text-gold mb-2" />
              <h4 className="font-semibold text-foreground text-sm">Bonfire Courtyard</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience Pillars Deep Dive ─────────────────────────── */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-28 md:space-y-36">
          {EXPERIENCE_PILLARS.map((pillar, idx) => (
            <Reveal key={pillar.id} delay={100}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  pillar.reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text Content */}
                <div className={pillar.reverse ? "lg:order-2" : "lg:order-1"}>
                  <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-4">
                    {pillar.tag}
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
                    {pillar.title}
                  </h2>
                  <p className="text-gold/80 font-medium text-base mb-6">
                    {pillar.subtitle}
                  </p>
                  <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-deep mb-6" />
                  <p className="text-foreground/70 text-base leading-relaxed mb-8">
                    {pillar.desc}
                  </p>
                  <ul className="space-y-3 mb-8 text-sm text-foreground/80">
                    {pillar.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start">
                        <Check className="w-4 h-4 text-gold mr-3 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <GoldButton
                    href="/gallery"
                    variant="outline"
                    className="mt-2"
                  >
                    View Photos
                  </GoldButton>
                </div>

                {/* Image Collage Container */}
                <div className={`relative ${pillar.reverse ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden shadow-2xl border border-border">
                    <Image
                      src={pillar.img1}
                      alt={pillar.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  {/* Floating Overlay Second Image */}
                  <div className="hidden sm:block absolute -bottom-8 -left-6 w-48 h-36 rounded-md overflow-hidden shadow-2xl border-2 border-background z-20">
                    <Image
                      src={pillar.img2}
                      alt={`${pillar.title} detail`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Interactive "A Day at Black Gold" Timeline ───────────── */}
      <section className="py-20 md:py-28 bg-muted relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-4">
                What to Expect
              </p>
              <h2 className="font-display text-3xl sm:text-5xl text-foreground mb-4">
                A Day at Black Gold
              </h2>
              <p className="text-foreground/60 max-w-lg mx-auto text-sm md:text-base">
                Here is a glimpse of how your luxury retreat unfolds from arrival to midnight.
              </p>
            </div>
          </Reveal>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {TIMELINE_STEPS.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="bg-card border border-border p-6 rounded-md h-full flex flex-col hover:border-gold/50 transition-all shadow-sm hover:shadow-md">
                    <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-4 shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-gold font-mono text-xs uppercase tracking-wider mb-2 font-bold block">
                      {step.time}
                    </span>
                    <h3 className="font-display text-lg text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-foreground/60 text-xs leading-relaxed mt-auto">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Reusable Pre-Footer CTA ──────────────────────────────── */}
      <PreFooterCta
        tag="Ready to Experience?"
        title="Reserve Your"
        highlightTitle="Luxury Stay"
        titleAfter="Today"
        description="Book your preferred dates and let our concierge team prepare an unforgettable retreat for your family."
        primaryCtaLabel="Book Now"
        primaryCtaHref="/book-now"
        secondaryCtaLabel="Explore Packages"
        secondaryCtaHref="/packages"
      />
    </div>
  );
}
