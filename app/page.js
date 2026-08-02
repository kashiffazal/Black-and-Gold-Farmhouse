import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, Star, Phone, Mail, Play, Film } from "lucide-react";
import { Reveal } from "../components/reveal";
import { GoldButton } from "../components/gold-button";
import { GalleryGrid } from "../components/gallery-lightbox";
import { PreFooterCta } from "../components/pre-footer-cta";
import HomeHero from "../components/page-sections/home-hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 6.2 Hero Section — self-contained slider component */}
      <HomeHero />

      {/* 6.3 About Section — Premium animated background */}
      <section className="py-28 md:py-36 bg-background relative z-10 overflow-hidden">
        {/* Subtle aurora glow */}
        <div className="absolute inset-0 aurora-bg opacity-[0.03] dark:opacity-10 pointer-events-none z-0" />
        {/* Floating gold particles */}
        <div className="absolute inset-0 stars-bg opacity-10 dark:opacity-20 pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left — Image collage */}
            <Reveal>
              <div className="relative">
                {/* Decorative corner frame */}
                <div className="absolute -top-4 -left-4 w-28 h-28 border-t-2 border-l-2 border-gold/50 z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-28 h-28 border-b-2 border-r-2 border-gold/30 z-0"></div>

                {/* Main image */}
                <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-md shadow-2xl">
                  <Image
                    src="/images/9.jpeg"
                    alt="Black Gold Farmhouse luxury exterior estate view"
                    fill
                    className="object-cover slow-pan"
                  />
                  {/* Subtle gold gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Floating stat badge */}
                <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 w-52 bg-card p-6 shadow-2xl z-20 border border-border rounded-md">
                  <p className="font-display text-4xl text-gold mb-1">15+</p>
                  <p className="text-sm text-card-foreground/70 uppercase tracking-wider font-semibold">
                    Premium Amenities
                  </p>
                </div>

                {/* Small secondary image */}
                <div className="hidden md:block absolute -top-6 -right-10 w-36 h-44 rounded-md overflow-hidden shadow-xl border-2 border-background z-20">
                  <Image
                    src="/images/14.jpeg"
                    alt="Black Gold Farmhouse lawn and palms"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>

            {/* Right — Content */}
            <Reveal delay={200}>
              <div className="lg:pl-6">
                {/* Section tag */}
                <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-6">
                  About Black Gold
                </p>

                {/* Heading */}
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-8 leading-tight">
                  A Sanctuary{" "}
                  <span className="italic text-muted-foreground font-light">
                    Beyond the City
                  </span>
                </h2>

                {/* Gold divider */}
                <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-deep mb-8" />

                <p className="text-foreground/70 text-base leading-relaxed mb-6">
                  Nestled just 15 minutes away from the airport, Black Gold
                  Farmhouse stands as Karachi&apos;s premier luxury retreat. We have
                  meticulously designed every inch of our estate to provide
                  families an oasis of privacy, luxury, and unmatched entertainment.
                </p>
                <p className="text-foreground/70 text-base leading-relaxed mb-10">
                  Whether you are seeking a 10-hour daytime splash picnic, a 22-hour
                  overnight weekend getaway, or a grand evening event, our estate
                  features 2 AC bedrooms, big adult & kids pool with slides, indoor snooker lounge, live BBQ pit, and heavy generator power backup.
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                  <div className="text-center lg:text-left">
                    <p className="font-display text-3xl text-gold mb-1">5★</p>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider">
                      Experience Rating
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="font-display text-3xl text-gold mb-1">24/7</p>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider">
                      Concierge Support
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="font-display text-3xl text-gold mb-1">500+</p>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider">
                      Happy Families
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6.4 Cinematic Banner — Updated with Golden Hour Flare Background */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/16.jpeg"
            alt="Black Gold Farmhouse estate lawn at golden hour"
            fill
            className="object-cover slow-pan"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <Reveal>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="w-12 h-[1px] bg-gold mx-auto mb-8 opacity-60" />
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-white leading-tight mb-6">
              Every Moment.{" "}
              <span className="italic gold-gradient">Crafted for You.</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10">
              From intimate family weekends to grand celebrations — we transform
              every occasion into an unforgettable experience at our luxury
              farmhouse estate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldButton href="/experience" variant="fill">
                Explore Our Estate
              </GoldButton>
              <GoldButton href="/packages" variant="outline">
                View Packages
              </GoldButton>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 6.5 Featured Experiences — Linked to /experience page */}
      <section className="py-28 md:py-36 bg-muted relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-6">
              <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-6">
                Amenities & Activities
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
                Featured Experiences
              </h2>
              <p className="text-foreground/60 max-w-2xl mx-auto text-base">
                Everything your family needs for the perfect getaway — from
                splash-filled pool days to cozy bonfire nights under the stars.
              </p>
            </div>
          </Reveal>

          <div className="flex items-center justify-center gap-3 mb-20">
            <div className="w-16 h-[1px] bg-gold/30" />
            <div className="w-2 h-2 rounded-full bg-gold/50" />
            <div className="w-16 h-[1px] bg-gold/30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                num: "01",
                title: "Adult & Kids Pool",
                desc: "Big adult pool (3.5-5.75 ft depth) & kids splash pool with water slides.",
                img: "/images/7.jpeg",
                href: "/experience#aquatic",
              },
              {
                num: "02",
                title: "Outdoor Pergola Lounge",
                desc: "2-3 outdoor pergolas with traditional charpais under ambient purple lighting.",
                img: "/images/18.jpeg",
                href: "/experience#culinary",
              },
              {
                num: "03",
                title: "Luxury AC Suites",
                desc: "Spacious AC bedrooms with velvet upholstered headboard walls & attached baths.",
                img: "/images/11.jpeg",
                href: "/experience#suites",
              },
              {
                num: "04",
                title: "Kids Play Area",
                desc: "Swings, slides, merry-go-round, see-saw & colorful hand-painted cartoon murals.",
                img: "/images/12.jpeg",
                href: "/experience#gaming",
              },
              {
                num: "05",
                title: "Indoor Snooker Lounge",
                desc: "Full-size professional snooker table in an air-conditioned indoor game room.",
                img: "/images/4.jpeg",
                href: "/experience#gaming",
              },
              {
                num: "06",
                title: "Live BBQ Pit & Kitchen",
                desc: "Dedicated BBQ grill station, stove & deep freezer for family feasts.",
                img: "/images/5.jpeg",
                href: "/experience#culinary",
              },
            ].map((exp, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <Link
                  href={exp.href}
                  className="group relative h-[400px] overflow-hidden rounded-md block cursor-pointer border border-border/50 bg-card hover:border-gold/50 transition-all duration-500 shadow-md hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={exp.img}
                      alt={exp.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                    <span className="text-gold font-display text-lg mb-1 block translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                      {exp.num}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl text-white mb-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {exp.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-3 max-w-xs opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {exp.desc}
                    </p>
                    <div className="flex items-center text-gold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-150 font-semibold">
                      Explore Experience <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6.6 Testimonials Marquee */}
      <section className="py-24 bg-background overflow-hidden relative border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-6">
            Guest Stories
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground">
            Words from Our Guests
          </h2>
        </div>
        <div className="w-full relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          <div className="marquee-track space-x-8 px-4 flex">
            {[
              {
                quote:
                  "Absolutely stunning property. The attention to detail made our family reunion unforgettable.",
                name: "Sarah Ahmed",
                event: "Family Reunion",
              },
              {
                quote:
                  "The kids had the time of their lives at the pool while we relaxed. Pure bliss!",
                name: "Usman & Fatima",
                event: "Weekend Getaway",
              },
              {
                quote:
                  "We celebrated our anniversary here. The bonfire and catering were world class.",
                name: "Ali Raza",
                event: "Anniversary",
              },
              {
                quote:
                  "Best corporate retreat we've ever organized. The team loved every minute.",
                name: "Ayesha Khan",
                event: "Corporate Event",
              },
              {
                quote:
                  "Absolutely stunning property. The attention to detail made our family reunion unforgettable.",
                name: "Sarah Ahmed",
                event: "Family Reunion",
              },
              {
                quote:
                  "The kids had the time of their lives at the pool while we relaxed. Pure bliss!",
                name: "Usman & Fatima",
                event: "Weekend Getaway",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="w-[350px] md:w-[450px] shrink-0 bg-card p-8 rounded-md border border-border shadow-sm"
              >
                <div className="flex text-gold mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-card-foreground/80 text-lg italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-card-foreground">{t.name}</p>
                  <p className="text-sm text-card-foreground/50">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.7 Packages Section */}
      <section className="py-28 md:py-36 bg-background relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-[0.03] dark:opacity-10 z-0 pointer-events-none"></div>
        <div className="absolute inset-0 stars-bg opacity-20 z-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="text-center mb-20">
              <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-6">
                Official Rate List (April - July 2026)
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground">
                Featured Packages
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <Reveal delay={0}>
              <div className="bg-card border border-border p-8 rounded-md shadow-sm aura-box">
                <h3 className="font-display text-2xl text-card-foreground mb-2">
                  10 Hours Weekday
                </h3>
                <p className="text-card-foreground/60 text-xs uppercase tracking-wider mb-6">
                  Mon - Thu (8 AM - 6 PM or 8 PM - 6 AM)
                </p>
                <div className="mb-8">
                  <span className="text-3xl font-display text-gold">
                    Rs. 35,000/-
                  </span>
                  <span className="text-card-foreground/50 text-xs block mt-1">
                    Morning Slot (Night Slot: Rs. 45,000)
                  </span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-card-foreground/80">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> 10 Hours exclusive estate access
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> Adult & Kids Pool with slides
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> Snooker, Carrom & Foosball
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> Max 5 Hours AC timing
                  </li>
                </ul>
                <GoldButton href="/packages" variant="outline" size="full">
                  View All Rates
                </GoldButton>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="beam-border p-10 rounded-md shadow-[0_40px_100px_-40px_rgba(200,160,80,0.2)] dark:shadow-[0_40px_100px_-40px_rgba(200,160,80,0.5)] transform lg:-translate-y-4">
                <div className="absolute top-0 right-0 bg-gold text-[#0a0704] text-xs font-bold px-3 py-1 tracking-wider uppercase z-10 rounded-bl-md">
                  Most Popular
                </div>
                <h3 className="font-display text-3xl text-white mb-2 mt-4">
                  22 Hours Weekend
                </h3>
                <p className="text-white/60 text-xs uppercase tracking-wider mb-6">
                  Fri - Sun & Public Holidays (2 PM - 12 PM)
                </p>
                <div className="mb-8">
                  <span className="text-4xl font-display text-gold">
                    Rs. 110,000/-
                  </span>
                  <span className="text-white/50 text-xs block mt-1">
                    Overnight / Full Day Stay
                  </span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-white/80">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> Full 22 Hours weekend exclusive access
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> 2 AC Bedrooms & Royal Lounge
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> Adult & Kids Pool with slides
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> Snooker, Carrom, Foosball & Kids Play
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> Fuel & Heavy Generator Included
                  </li>
                </ul>
                <GoldButton href="/book-now?package=22h-weekend" variant="fill" size="full">
                  Book Weekend Stay
                </GoldButton>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="bg-card border border-border p-8 rounded-md shadow-sm aura-box">
                <h3 className="font-display text-2xl text-card-foreground mb-2">
                  22 Hours Weekday
                </h3>
                <p className="text-card-foreground/60 text-xs uppercase tracking-wider mb-6">
                  Mon - Thu (2 PM - 12 PM)
                </p>
                <div className="mb-8">
                  <span className="text-3xl font-display text-gold">
                    Rs. 85,000/-
                  </span>
                  <span className="text-card-foreground/50 text-xs block mt-1">
                    Overnight Weekday Getaway
                  </span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-card-foreground/80">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> Full 22 Hours exclusive access
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> 2 AC Bedrooms with attached baths
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> 10 Hours Max AC timing
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> BBQ Pit, Lawn & Pergolas
                  </li>
                </ul>
                <GoldButton href="/book-now?package=22h-weekday" variant="outline" size="full">
                  Book Weekday Stay
                </GoldButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6.8 Video Reel Showcase Section */}
      <section className="py-24 bg-muted border-y border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-3 flex items-center gap-2">
                  <Film className="w-4 h-4 text-gold" /> Estate Video Highlights
                </p>
                <h2 className="font-display text-4xl sm:text-5xl text-foreground">
                  Experience Black Gold in Motion
                </h2>
                <p className="text-foreground/60 mt-3 text-sm max-w-md">
                  Watch authentic video walkthroughs of our swimming pool, snooker lounge, and lawns.
                </p>
              </div>
              <Link
                href="/gallery"
                className="text-gold text-sm tracking-wider uppercase font-semibold flex items-center hover:text-gold-soft transition-colors"
              >
                View Full Video Gallery <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Pool & Wall Fountain Ambiance",
                desc: "Night illuminated pool reflection and wall fountain",
                video: "/videos/v2.mp4",
              },
              {
                title: "Expansive Green Lawns & Facade",
                desc: "Daylight estate walkthrough & palm trees",
                video: "/videos/v3.mp4",
              },
              {
                title: "AC Snooker & Games Lounge",
                desc: "Indoor snooker table and gaming atmosphere",
                video: "/videos/v5.mp4",
              },
            ].map((v, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg group aura-box">
                  <div className="relative aspect-[16/10] bg-black">
                    <video
                      src={v.video}
                      controls
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display text-lg text-foreground mb-1">
                      {v.title}
                    </h4>
                    <p className="text-foreground/60 text-xs">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6.9 Booking CTA — Redesigned with Authentic Background Image Overlay */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-background">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/10.jpeg"
            alt="Black Gold Farmhouse night illuminated arches"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="bg-card border border-border/60 rounded-lg shadow-2xl overflow-hidden aura-box">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Left image panel */}
                <div className="hidden lg:block lg:col-span-2 relative min-h-[600px]">
                  <Image
                    src="/images/1.jpeg"
                    alt="Black Gold Farmhouse luxury pool at night"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/90" />
                  <div className="absolute bottom-8 left-8 right-8 bg-black/70 backdrop-blur-md p-6 rounded-md border border-white/10">
                    <p className="text-gold text-xs uppercase tracking-widest mb-3 font-semibold">
                      Why Choose Black Gold?
                    </p>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-gold mr-2 shrink-0" /> 100% Private Exclusive Estate
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-gold mr-2 shrink-0" /> Big Adult & Kids Pool with Slides
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-gold mr-2 shrink-0" /> AC Bedrooms & Heavy Generator
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-gold mr-2 shrink-0" /> 24/7 Dedicated Concierge
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right form panel */}
                <div className="lg:col-span-3 p-8 md:p-12 lg:p-16">
                  <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-4">
                    Start Your Journey
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-3">
                    Book Your Retreat
                  </h2>
                  <p className="text-foreground/60 mb-8 text-sm md:text-base max-w-lg">
                    Fill in the details below and our team will reach out within 2 hours to confirm date availability.
                  </p>

                  <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-border">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mr-3">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-foreground/50 uppercase tracking-wider">
                          Call / WhatsApp
                        </p>
                        <p className="text-foreground font-semibold text-sm">
                          +92 333 2973045
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mr-3">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-foreground/50 uppercase tracking-wider">
                          Email
                        </p>
                        <p className="text-foreground font-semibold text-sm">
                          info@blackgoldfarmhouse.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <form
                    action="https://wa.me/923332973045"
                    target="_blank"
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="Name"
                        placeholder="Full Name *"
                        required
                        className="w-full bg-background border border-border rounded-md py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-foreground"
                      />
                      <input
                        type="text"
                        name="Phone"
                        placeholder="Phone Number *"
                        required
                        className="w-full bg-background border border-border rounded-md py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-foreground"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="date"
                        name="Date"
                        required
                        className="w-full bg-background border border-border rounded-md py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-foreground min-w-0"
                      />
                      <select
                        name="Guests"
                        className="w-full bg-background border border-border rounded-md py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-foreground appearance-none min-w-0"
                      >
                        <option value="">Number of Guests</option>
                        <option value="1-15">1-15 Guests</option>
                        <option value="16-35">16-35 Guests (Standard)</option>
                        <option value="36-45">36-45 Guests (+Rs. 1,000/pax)</option>
                        <option value="45+">45+ Guests (Event Booking)</option>
                      </select>
                    </div>
                    <textarea
                      name="Message"
                      placeholder="Tell us about your occasion — family picnic, overnight stay, or grand event?"
                      rows="3"
                      className="w-full bg-background border border-border rounded-md py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-foreground"
                    ></textarea>
                    <GoldButton
                      type="submit"
                      variant="fill"
                      size="full"
                      className="mt-2"
                    >
                      Submit Reservation Request
                    </GoldButton>
                  </form>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6.10 Photo & Video Gallery Preview Section — Authentic Media */}
      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-4">
                  Glimpses of Luxury
                </p>
                <h2 className="font-display text-4xl sm:text-5xl text-foreground">
                  Photo & Video Gallery
                </h2>
                <p className="text-foreground/60 mt-3 text-sm max-w-md">
                  Click any image or video to view in full screen with our interactive lightbox player.
                </p>
              </div>
              <Link
                href="/gallery"
                className="text-gold text-sm tracking-wider uppercase font-semibold flex items-center hover:text-gold-soft transition-colors"
              >
                View Full Gallery <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <GalleryGrid
              images={[
                {
                  src: "/images/1.jpeg",
                  alt: "Illuminated swimming pool at night with wall fountain reflection",
                  category: "Pool & Water",
                  type: "image",
                },
                {
                  src: "/videos/v1.mp4",
                  alt: "Black Gold Farmhouse Estate Video Walkthrough",
                  category: "Estate Video Reel",
                  type: "video",
                },
                {
                  src: "/images/9.jpeg",
                  alt: "Expansive green lawn and main estate architecture",
                  category: "Exterior",
                  type: "image",
                },
                {
                  src: "/images/4.jpeg",
                  alt: "Air-conditioned indoor games room with snooker table",
                  category: "Indoor Games",
                  type: "image",
                },
                {
                  src: "/images/11.jpeg",
                  alt: "Luxurious AC bedroom suite with velvet headboard",
                  category: "Suites",
                  type: "image",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* 6.11 Pre-Footer CTA Component with Authentic Background Image */}
      <PreFooterCta bgImage="/images/1.jpeg" />
    </div>
  );
}
