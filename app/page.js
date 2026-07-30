import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, Star, Phone, Mail } from "lucide-react";
import { Reveal } from "../components/reveal";
import { GoldButton } from "../components/gold-button";
import { GalleryGrid } from "../components/gallery-lightbox";
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
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Black Gold Farmhouse luxury exterior"
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
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                    alt="Farmhouse garden detail"
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
                  Nestled just 15 minutes away from the bustling city, Black
                  Gold Farmhouse stands as a testament to luxury and
                  tranquility. We've meticulously designed every inch of our
                  estate to provide families and corporate guests an oasis of
                  unparalleled comfort.
                </p>
                <p className="text-foreground/70 text-base leading-relaxed mb-10">
                  Whether you're looking to host an intimate gathering, a grand
                  celebration, or simply seeking a weekend of pure relaxation,
                  our dedicated staff and world-class facilities ensure your
                  experience is nothing short of extraordinary.
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
                      Concierge Service
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

      {/* 6.4 Cinematic Banner — Professional fullscreen statement */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Luxury farmhouse at golden hour"
            fill
            className="object-cover slow-pan"
          />
          <div className="absolute inset-0 bg-black/55"></div>
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

      {/* 6.5 Featured Experiences — Family-focused */}
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
                title: "Swimming Pool & Jacuzzi",
                desc: "Crystal-clear infinity pool with heated jacuzzi for the whole family.",
                img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                num: "02",
                title: "Outdoor Lounge",
                desc: "Lush garden seating under twinkling lights — perfect for evening chai.",
                img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                num: "03",
                title: "Luxury Accommodation",
                desc: "Spacious en-suite bedrooms with premium linens and modern amenities.",
                img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                num: "04",
                title: "Bonfire Courtyard",
                desc: "Gather the family for marshmallows and stories under starlit skies.",
                img: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                num: "05",
                title: "Indoor Snooker",
                desc: "Professional-grade snooker table in our air-conditioned game room.",
                img: "https://images.unsplash.com/photo-1627257060697-acfbecf5d9a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                num: "06",
                title: "BBQ & Dining",
                desc: "Open-air BBQ pit with covered dining for grand family feasts.",
                img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
            ].map((exp, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="group relative h-[400px] overflow-hidden rounded-md cursor-pointer border border-border/50 bg-card hover:border-gold/50 transition-all duration-500 shadow-md hover:shadow-2xl hover:-translate-y-2">
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
                    <div className="flex items-center text-gold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500 delay-150">
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
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
                Exclusive Offers
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground">
                Tailored For You
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <Reveal delay={0}>
              <div className="bg-card border border-border p-8 rounded-md shadow-sm aura-box">
                <h3 className="font-display text-2xl text-card-foreground mb-2">
                  Intimate Escape
                </h3>
                <p className="text-card-foreground/60 text-sm mb-6">
                  Up to 20 guests
                </p>
                <div className="mb-8">
                  <span className="text-3xl font-display text-foreground">
                    PKR 425,000
                  </span>
                  <span className="text-card-foreground/50 text-sm">
                    {" "}
                    / night
                  </span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-card-foreground/80">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> Full
                    access to main villa
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" />{" "}
                    Private pool & jacuzzi
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> Basic
                    decor & setup
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" />{" "}
                    Standard catering (optional)
                  </li>
                </ul>
                <GoldButton variant="outline" size="full">
                  Reserve Package
                </GoldButton>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="beam-border p-10 rounded-md shadow-[0_40px_100px_-40px_rgba(200,160,80,0.2)] dark:shadow-[0_40px_100px_-40px_rgba(200,160,80,0.5)] transform lg:-translate-y-4">
                <div className="absolute top-0 right-0 bg-gold text-[#0a0704] text-xs font-bold px-3 py-1 tracking-wider uppercase z-10 rounded-bl-md">
                  Most Popular
                </div>
                <h3 className="font-display text-3xl text-white mb-2 mt-4">
                  Signature Farmhouse
                </h3>
                <p className="text-white/60 text-sm mb-6">Up to 40 guests</p>
                <div className="mb-8">
                  <span className="text-4xl font-display text-gold">
                    PKR 625,000
                  </span>
                  <span className="text-white/50 text-sm"> / night</span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-white/80">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> Entire
                    estate access
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> Pool,
                    Jacuzzi, Game Rooms
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" />{" "}
                    Premium BBQ Setup
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" />{" "}
                    Dedicated concierge
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" />{" "}
                    Welcome drinks & snacks
                  </li>
                </ul>
                <GoldButton variant="fill" size="full">
                  Reserve Package
                </GoldButton>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="bg-card border border-border p-8 rounded-md shadow-sm aura-box">
                <h3 className="font-display text-2xl text-card-foreground mb-2">
                  Celebration Suite
                </h3>
                <p className="text-card-foreground/60 text-sm mb-6">
                  Weddings & 60+ guests
                </p>
                <div className="mb-8">
                  <span className="text-3xl font-display text-foreground">
                    PKR 895,000
                  </span>
                  <span className="text-card-foreground/50 text-sm">
                    {" "}
                    / night
                  </span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-card-foreground/80">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> Event
                    lawn access
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> Valet
                    parking service
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" /> Custom
                    stage & lighting
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-gold mr-3 shrink-0" />{" "}
                    Extensive catering support
                  </li>
                </ul>
                <GoldButton variant="outline" size="full">
                  Reserve Package
                </GoldButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6.8 Booking CTA — Redesigned with image panel */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-muted">
        <div className="absolute inset-0 stars-bg opacity-10 dark:opacity-20 pointer-events-none z-0" />
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="bg-card border border-border/50 rounded-lg shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Left image panel */}
                <div className="hidden lg:block lg:col-span-2 relative min-h-[600px]">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Farmhouse pool"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80" />
                  <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md p-6 rounded-md">
                    <p className="text-gold text-xs uppercase tracking-widest mb-2">
                      Why Book With Us?
                    </p>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-gold mr-2 shrink-0" />{" "}
                        Private estate, no shared spaces
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-gold mr-2 shrink-0" />{" "}
                        Dedicated concierge team
                      </li>
                      <li className="flex items-center">
                        <Check className="w-4 h-4 text-gold mr-2 shrink-0" />{" "}
                        Flexible cancellation policy
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
                    Fill in the details below and our concierge team will reach
                    out within 24 hours to tailor the perfect experience.
                  </p>
                  <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-border">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mr-3">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-foreground/50 uppercase tracking-wider">
                          Call
                        </p>
                        <p className="text-foreground font-semibold text-sm">
                          +92 300 123 4567
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
                    action="mailto:info@blackgoldfarmhouse.com"
                    method="post"
                    encType="text/plain"
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="Name"
                        placeholder="Full Name"
                        required
                        className="w-full bg-background border border-border rounded-md py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-foreground"
                      />
                      <input
                        type="text"
                        name="Phone"
                        placeholder="Phone Number"
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
                        <option value="1-10">1-10 Guests</option>
                        <option value="11-20">11-20 Guests</option>
                        <option value="21-40">21-40 Guests</option>
                        <option value="40+">40+ Guests</option>
                      </select>
                    </div>
                    <textarea
                      name="Message"
                      placeholder="Tell us about your occasion — birthday, reunion, corporate retreat?"
                      rows="3"
                      className="w-full bg-background border border-border rounded-md py-3 px-4 text-sm focus:outline-none focus:border-gold transition-colors text-foreground"
                    ></textarea>
                    <GoldButton
                      type="submit"
                      variant="fill"
                      size="full"
                      className="mt-2"
                    >
                      Submit Request
                    </GoldButton>
                  </form>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6.9 Gallery Section — With lightbox */}
      <section className="py-28 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-4">
                  Glimpses
                </p>
                <h2 className="font-display text-4xl sm:text-5xl text-foreground">
                  Photo Gallery
                </h2>
                <p className="text-foreground/60 mt-3 text-sm max-w-md">
                  Click any image to view in full screen with our interactive
                  lightbox.
                </p>
              </div>
              <Link
                href="/gallery"
                className="text-gold text-sm tracking-wider uppercase font-semibold flex items-center hover:text-gold-soft transition-colors"
              >
                View All Images <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <GalleryGrid
              images={[
                {
                  src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                  alt: "Farmhouse exterior with lush garden",
                  category: "Exterior",
                },
                {
                  src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  alt: "Luxury living room interior",
                  category: "Interior",
                },
                {
                  src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  alt: "Garden seating area at dusk",
                  category: "Garden",
                },
                {
                  src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  alt: "Pool area with lounge chairs",
                  category: "Pool",
                },
                {
                  src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                  alt: "Outdoor dining under the stars",
                  category: "Dining",
                },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* 6.10 Pre-Footer CTA */}
      <section className="relative py-32 md:py-40 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Farmhouse at twilight"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="absolute inset-0 stars-bg opacity-40 pointer-events-none z-0" />
        <Reveal>
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-gold/40" />
              <Star className="w-4 h-4 text-gold fill-gold" />
              <div className="w-12 h-[1px] bg-gold/40" />
            </div>
            <p className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-6">
              Your Escape Awaits
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-white mb-6 leading-tight">
              Ready for an{" "}
              <span className="italic gold-gradient">Unforgettable</span>{" "}
              Experience?
            </h2>
            <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto mb-12">
              Whether it&apos;s a family weekend, a milestone celebration, or a
              corporate retreat — create memories that last a lifetime at Black
              Gold Farmhouse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GoldButton
                href="/book-now"
                variant="fill"
                beam
                className="min-w-[220px] shadow-[0_15px_40px_-15px_rgba(200,160,80,0.4)]"
              >
                Book Your Stay
              </GoldButton>
              <GoldButton
                href="/contact"
                variant="outline"
                className="min-w-[220px]"
              >
                Contact Us
              </GoldButton>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-white/10">
              <div className="text-center">
                <p className="font-display text-2xl text-gold">500+</p>
                <p className="text-white/40 text-xs uppercase tracking-wider">
                  Happy Families
                </p>
              </div>
              <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
              <div className="text-center">
                <p className="font-display text-2xl text-gold">5.0</p>
                <p className="text-white/40 text-xs uppercase tracking-wider">
                  Google Rating
                </p>
              </div>
              <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
              <div className="text-center">
                <p className="font-display text-2xl text-gold">24/7</p>
                <p className="text-white/40 text-xs uppercase tracking-wider">
                  Concierge
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
