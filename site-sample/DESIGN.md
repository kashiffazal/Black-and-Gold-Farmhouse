# Black Gold Farmhouse — Design System & Implementation Guide

## 1. Project Overview

**Client:** Black Gold Farmhouse  
**Type:** Luxury farmhouse, entertainment & family vacation retreat  
**Audience:** Families, celebrations, corporate offsites, weekend getaways  
**Developed by:** [Innotech Cloud](http://innotechcloud.com/)  
**Client Website:** https://blackgoldfarmhouse.com/  
**Reference Website:** https://fhuresorts.com/  

**Current Scope:** Home page only. Additional pages (Experience, Galleries, Offers, FAQ, Contact, Book Now) are planned for future sprints.

**Tech Stack:**
- Framework: TanStack Start v1 (React 19, SSR/SSG, Vite 7)
- Styling: Tailwind CSS v4 with custom CSS design tokens
- Animation: CSS keyframes + Intersection Observer reveal component
- Icons: Lucide React
- Theme: Dark default with light toggle

---

## 2. Brand Identity

### Logo
- **Primary Logo:** `src/assets/logo.png` — Gold "BG" monogram with "BLACK GOLD FARM" wordmark
- **Favicon:** `src/assets/fav.png` — Stylized gold BG monogram
- **Usage:** Centered in header, floating on splash screen, brand column in footer

### Visual Direction
Luxury dark theme with gold accents. The aesthetic is "Black Gold Farmhouse" — black backgrounds, warm gold highlights, elegant serif display typography, and cinematic full-bleed imagery. The site should feel premium, immersive, and family-friendly.

### Tone of Voice
- Warm, inviting, premium
- Family-focused but luxury-positioned
- Concierge-level hospitality language

---

## 3. Design Tokens

All tokens live in `src/styles.css` and are exposed as Tailwind-compatible CSS variables via `@theme inline`.

### 3.1 Color Palette

| Token | Dark Value | Light Value | Usage |
|-------|------------|-------------|-------|
| `--background` | `oklch(0.09 0.005 60)` | `oklch(0.985 0.005 90)` | Page background |
| `--foreground` | `oklch(0.96 0.01 85)` | `oklch(0.18 0.01 60)` | Primary text |
| `--card` | `oklch(0.13 0.008 70)` | `oklch(1 0 0)` | Cards, panels |
| `--card-foreground` | `oklch(0.96 0.01 85)` | `oklch(0.18 0.01 60)` | Text on cards |
| `--muted` | `oklch(0.18 0.01 70)` | `oklch(0.94 0.01 85)` | Muted backgrounds |
| `--muted-foreground` | `oklch(0.72 0.02 85)` | `oklch(0.42 0.02 70)` | Secondary text |
| `--primary` | `oklch(0.78 0.13 85)` | `oklch(0.62 0.13 70)` | Primary actions |
| `--primary-foreground` | `oklch(0.12 0.01 60)` | `oklch(0.985 0.005 90)` | Text on primary |
| `--border` | `oklch(0.25 0.02 80 / 60%)` | `oklch(0.88 0.01 85)` | Borders, dividers |
| `--gold` | `oklch(0.82 0.14 85)` | `oklch(0.72 0.14 78)` | Gold accent |
| `--gold-soft` | `oklch(0.88 0.09 88)` | `oklch(0.82 0.1 82)` | Light gold |
| `--gold-deep` | `oklch(0.62 0.13 70)` | `oklch(0.52 0.13 65)` | Deep gold |

### 3.2 Typography

| Token | Font | Usage |
|-------|------|-------|
| `--font-display` | Cormorant Garamond, Playfair Display, ui-serif | Headings, display text, logo adjacency |
| `--font-body` | Inter, ui-sans-serif | Body text, UI labels, navigation |

**Typography Scale:**
- Hero H1: `text-5xl sm:text-7xl md:text-8xl`, `leading-[1.05]`
- Section H2: `text-4xl sm:text-5xl md:text-6xl`, `leading-tight`
- Card H3: `font-display text-2xl` to `text-3xl`
- Overline: `text-xs uppercase tracking-[0.4em]`
- Body: `text-sm` to `text-base`, `leading-relaxed`

### 3.3 Spacing & Radius

- Section vertical padding: `py-28 md:py-36` or `py-28 md:py-40`
- Container max-width: `max-w-7xl` (1280px)
- CTA container: `max-w-6xl`
- Border radius base: `--radius: 0.625rem`
- Cards use `rounded-sm`
- Buttons use sharp/rounded-none for premium feel

### 3.4 Shadows & Effects

- Gold button shadow: `0 10px 30px -12px color-mix(in oklab, var(--gold) 50%, transparent)`
- Highlight package shadow: `shadow-[0_40px_100px_-40px_rgba(200,160,80,0.5)]`
- Backdrop blur: `backdrop-blur-md`, `backdrop-blur-xl`
- Gold gradient text: `.gold-gradient` class

---

## 4. Global Animations

All animations are defined in `src/styles.css`.

| Class | Animation | Duration | Notes |
|-------|-----------|----------|-------|
| `.stars-bg` | `drift` | 60s linear infinite | Animated starfield background |
| `.shimmer` | `shimmer` | 3s ease-in-out infinite | Opacity pulse for gold elements |
| `.float-y` | `float-y` | 6s ease-in-out infinite | Gentle vertical float |
| `.marquee-track` | `slide-x` | 40s linear infinite | Testimonial horizontal scroll |
| `.reveal` | CSS transition | 0.8s | Fade-up on scroll via IntersectionObserver |
| `.aurora-bg` | `aurora` | 18s ease-in-out infinite alternate | Animated gradient orbs |
| `.slow-pan` | `slow-pan` | 24s ease-in-out infinite alternate | Subtle zoom/pan for images |
| `.btn-gold` | hover transition | 0.6s | Gold gradient position shift + lift |

### Reveal Animation
- Component: `src/components/reveal.tsx`
- Initial state: `opacity: 0; transform: translateY(24px)`
- Triggered at `threshold: 0.15` via IntersectionObserver
- Optional `delay` prop for staggered reveals

---

## 5. Component Library

### 5.1 Splash Screen (`src/components/splash.tsx`)
- Full-screen preloader with centered logo
- Dark background `#0a0704` with starfield
- Logo floats with `.float-y`
- Loading bar shimmers
- Text: "LOADING EXPERIENCE"
- Auto-dismiss after ~2.4s (fade at 1.8s, remove at 2.4s)

### 5.2 Site Header (`src/components/site-header.tsx`)
- Fixed position, z-50
- **Utility bar (desktop):** email, phone, social icons, theme toggle
- **Main nav:** centered logo with split left/right links
  - Left: Home, Experience, Galleries
  - Right: Offers, FAQ, Contact
  - Rightmost: "Book Now" gold button
- Transparent when at top; gains `backdrop-blur-md bg-background/80` on scroll
- Mobile hamburger menu with slide-down drawer
- Logo height: `h-20` at top, shrinks to `h-14` on scroll

### 5.3 Theme Toggle (`src/components/theme-toggle.tsx`)
- Sun/Moon icon button
- Toggles `.light` / `.dark` on `<html>`
- Persists preference to `localStorage` key `bgf-theme`
- Default: dark

### 5.4 Reveal (`src/components/reveal.tsx`)
- Wrapper component for scroll-triggered fade-up animations
- Props: `children`, `delay` (ms), `className`

### 5.5 Buttons

**Primary Gold Button (`.btn-gold`)**
- Animated gold gradient background
- Dark text (`#1a1208`)
- Hover: gradient shift + translateY(-2px) + enhanced shadow
- Usage: "Book Now", "Request Booking", "Subscribe"

**Secondary Outline Button**
- `border border-gold/40 text-gold`
- Hover: `hover:bg-gold/10`
- Usage: "Watch Story", package cards

---

## 6. Home Page Structure

File: `src/routes/index.tsx`

### 6.1 SEO / Head
- Title: "Black Gold Farmhouse — Luxury Family Farmhouse Retreat"
- Description: "Karachi's premier luxury farmhouse for families and celebrations..."
- Open Graph title & description included

### 6.2 Hero Section
- Full viewport height (`min-h-[100svh]`)
- **Background:** YouTube embed (autoplay, muted, loop, no controls)
  - Video ID: `LXb3EKWsInQ`
  - Fallback poster image: `hero-farmhouse.jpg`
  - Gradient overlay + starfield
- **Content:**
  - Overline: "A Luxury Family Farmhouse · Karachi"
  - H1: "Where *Luxury* Meets *Family Fun*" (gold gradient italic)
  - Subheadline about the retreat
  - Two CTAs: "Book Your Stay" (gold) + "Watch Story" (outline with play icon)
  - Scroll indicator at bottom

### 6.3 About Section
- Two-column layout (image left, text right)
- Image with gold corner accent
- Overline: "About Black Gold"
- H2: "A Sanctuary *Beyond the City*"
- Body copy about the farmhouse location and experience
- Stats row: "15+ Amenities", "5★ Experience", "24/7 Service"

### 6.4 Cinematic Banner
- Full-width `h-[70vh]` image banner
- Dark overlay
- H2: "Every Moment. *Crafted for You.*"

### 6.5 Featured Experiences Section
- 6 experience cards in 3-column grid
- Each card: image, number badge, title, description, "Explore" link
- Hover: card lifts, image scales 110%, border brightens
- Experiences:
  1. Swimming Pool & Jacuzzi
  2. Outdoor Lounge
  3. Luxury Accommodation
  4. Bonfire Courtyard
  5. Indoor Snooker
  6. Table Tennis & Games

### 6.6 Testimonials Marquee
- Section title centered
- Infinite horizontal marquee of testimonial cards
- Each card: 5 gold stars, quote, name, occasion tag
- 4 testimonials duplicated for seamless loop

### 6.7 Packages Section
- 3 pricing cards in a row
- Middle card highlighted as "Most Popular" with gold styling
- Packages:
  1. **Intimate Escape** — Up to 20 guests — PKR 425,000
  2. **Signature Farmhouse** — Up to 40 guests — PKR 625,000
  3. **Celebration Suite** — Weddings/Corporate/60+ guests — PKR 895,000
- Each includes feature list and "Reserve Package" CTA

### 6.8 Booking CTA Section
- Animated aurora background + starfield
- Two-column card with glassmorphism (`bg-card/70 backdrop-blur-xl`)
- Left: headline, description, contact info
- Right: booking form (name, date, guests, phone, submit)
- Form submits to `mailto:info@blackgoldfarmhouse.com`

### 6.9 Gallery Section
- Masonry-style grid (2 columns mobile, 4 columns desktop)
- First item spans 2x2
- Images scale 125% on hover with gradient overlay
- 8 gallery images from generated assets

### 6.10 Prefooter Video Section
- Full-width `min-h-[70vh]`
- Background: YouTube video + slow-pan fallback image + dark overlay
- Video ID: `LXb3EKWsInQ`
- Content: "Ready for an *Unforgettable* Experience?" + "Book Now" CTA

### 6.11 Footer
- 4-column layout on desktop
- Columns:
  1. **Brand:** logo, description, social icons
  2. **Explore:** page links
  3. **Contact:** address, phone, email, capacity
  4. **Stay in Touch:** newsletter signup
- Gold divider
- Bottom bar: copyright + "Developed by Innotech Cloud" link

---

## 7. Image & Video Assets

### 7.1 Generated Images (AI)
Located in `src/assets/`:
- `logo.png` — Brand logo
- `fav.png` — Favicon
- `hero-farmhouse.jpg` — Hero fallback
- `about-farmhouse.jpg` — About section
- `exp-pool.jpg` — Swimming pool
- `exp-lounge.jpg` — Outdoor lounge
- `exp-room.jpg` — Luxury room
- `exp-bonfire.jpg` — Bonfire courtyard
- `exp-snooker.jpg` — Snooker room
- `exp-games.jpg` — Games lounge
- `gallery-dining.jpg` — Dining area

### 7.2 Videos
- **Hero video:** YouTube embed `LXb3EKWsInQ` (nature/ambient loop)
- **Prefooter video:** YouTube embed `LXb3EKWsInQ` via `youtube-nocookie.com`

---

## 8. Responsive Breakpoints

Tailwind default breakpoints are used:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Key Responsive Behaviors
- Header: utility bar + split nav on `lg+`; hamburger menu below
- Hero text: `text-5xl` mobile → `text-8xl` desktop
- About: single column mobile → 2-column desktop
- Experience cards: 1 col → 2 col → 3 col
- Packages: 1 col → 3 col
- Gallery: 2 col → 4 col with masonry
- Footer: 1 col → 2 col → 4 col

---

## 9. Accessibility Notes

- All images include `alt` text
- Interactive elements have `aria-label` where text is absent
- Form inputs have `required` attributes
- Color contrast maintained for gold-on-dark text
- Animations respect reduced motion via standard CSS (consider adding `@media (prefers-reduced-motion)` enhancements)

---

## 10. Future Pages Roadmap

Planned routes under `src/routes/`:
- `/experience` — Detailed experience categories
- `/galleries` — Full masonry gallery with filters
- `/offers` — All packages and custom inquiries
- `/faq` — Frequently asked questions
- `/contact` — Contact form and location
- `/book-now` — Full booking flow

---

## 11. Development Notes

### Theme Implementation
Default dark theme is applied via `:root`. Light theme is toggled by adding/removing `.light` on `<html>`. The `ThemeToggle` component persists user preference in `localStorage`.

### Server Functions
No backend server functions are currently implemented. Future booking forms should use `createServerFn` from `@tanstack/react-start` or Lovable Cloud for data persistence.

### Performance
- Images use `loading="lazy"` except hero fallback
- YouTube embeds are loaded with `autoplay=1&mute=1` for background playback
- CSS animations are GPU-accelerated (transform, opacity)

### Brand Compliance
- Always use semantic tokens from `src/styles.css`
- Never hardcode colors like `text-white` or `bg-black`
- Gold accents should remain consistent across both themes
- Maintain premium, uncluttered spacing

---

*Document version: 1.0*  
*Last updated: July 2026*  
*Maintained by: Innotech Cloud*
