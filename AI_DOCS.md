# 3dotcreatives — AI-Friendly Documentation

## Overview

**3dotcreatives** is a creative digital agency website built with Next.js 16, React 19, Three.js, GSAP animations, and Tailwind CSS v4. It features an immersive scroll-driven 3D experience on the homepage with animated GLB models transitioning between service sections. Deployed on Netlify.

**Tagline:** "IDEA. DESIGN. EXECUTION."
**Location:** Gullberg-III, Lahore, Pakistan (serves clients globally)
**Contact:** +92 305 228 8882 (WhatsApp), 3dotcreativesagency@gmail.com

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.3.3 (App Router) |
| React | 19.2.8 |
| Language | TypeScript 5 (strict mode, ES2017 target) |
| Styling | Tailwind CSS v4 (PostCSS plugin, `@tailwindcss/postcss`) |
| 3D | Three.js 0.185.1, @react-three/fiber 9.7.0, @react-three/drei 10.7.8 |
| Animation | GSAP 3.15.0, @gsap/react 2.1.2 (ScrollTrigger plugin) |
| Smooth Scroll | Lenis 1.3.26 |
| Icons | Lucide React 1.35.0 |
| Email | Resend 6.24.0 |
| Deployment | Netlify (with `@netlify/plugin-nextjs` 5.15.13) |
| Fonts | Geist Sans (body), Outfit (headings) — loaded via `next/font/google` |

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `cream` | `#F4EBDD` | Background, light surfaces |
| `beige` | `#D8C3A5` | Muted text, secondary elements |
| `olive` | `#59613B` | Accent, links, borders |
| `rust-gold` | `#B98245` | CTA highlights, gradients, active states |
| `dark-olive` | `#303522` | Primary text, dark backgrounds, navbar |

Defined in `app/globals.css` as both Tailwind `@theme` tokens and CSS custom properties.

---

## Project Structure

```
3dotcreatives/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (fonts, metadata, body classes)
│   ├── page.tsx                  # Homepage (3D canvas + scroll experience)
│   ├── globals.css               # Global styles, Tailwind config, animations
│   ├── icon.png                  # Favicon
│   ├── about/page.tsx            # About page
│   ├── contact/page.tsx          # Contact page with form
│   ├── services/
│   │   ├── page.tsx              # Services listing page
│   │   ├── web-development/page.tsx
│   │   ├── content-creation/page.tsx
│   │   ├── social-media/page.tsx
│   │   ├── app-development/page.tsx
│   │   ├── product-shoot/page.tsx
│   │   ├── gbp-management/page.tsx
│   │   ├── printing-packaging/page.tsx
│   │   └── digital-marketing/page.tsx
│   ├── portfolio/page.tsx        # Portfolio grid page
│   ├── privacy/page.tsx          # Privacy policy
│   ├── terms/page.tsx            # Terms of service
│   ├── cookies/page.tsx          # Cookie policy
│   └── api/contact/route.ts      # Contact form API endpoint
├── components/
│   ├── SplashScreen.tsx          # Loading splash screen with GSAP animation
│   ├── layout/
│   │   ├── Navbar.tsx            # Fixed top navbar with mobile menu
│   │   └── Footer.tsx            # 4-column footer with social links
│   ├── home/
│   │   ├── ScrollExperience.tsx  # GSAP ScrollTrigger scroll driver
│   │   ├── ScrollSections.tsx    # Text sections synced with 3D (11 sections)
│   │   ├── Hero.tsx              # Hero section component
│   │   ├── Intro.tsx             # Intro section
│   │   ├── ServicesPreview.tsx   # Services preview
│   │   ├── PortfolioPreview.tsx  # Portfolio preview
│   │   ├── Process.tsx           # Process section
│   │   └── CTA.tsx               # Call-to-action section
│   ├── three/
│   │   ├── CreativeScene.tsx     # Main Three.js Canvas wrapper
│   │   ├── ServiceStage.tsx      # 3D model transition system (core logic)
│   │   ├── CameraRig.tsx         # Camera position/lookAt animation
│   │   ├── Lights.tsx            # Scene lighting
│   │   ├── GlbModel.tsx          # GLB model loader/renderer
│   │   ├── SceneObjects.tsx      # ThreeDotsGroup (brand logo dots)
│   │   ├── FloatingParticles.tsx # Particle effects
│   │   └── ThreeDots.tsx         # Individual dot component
│   ├── about/
│   │   ├── AboutHero.tsx
│   │   └── Philosophy.tsx
│   ├── contact/ContactForm.tsx   # Contact form with validation
│   ├── services/ServicesList.tsx # Services listing component
│   ├── portfolio/PortfolioGrid.tsx # Portfolio grid component
│   └── ui/RevealSection.tsx      # Intersection Observer reveal animation
├── data/
│   ├── services.ts               # Service definitions (8 services)
│   └── portfolio.ts              # Portfolio items (6 items)
├── lib/
│   └── resend.ts                 # Resend email client + HTML builder
├── models/                       # Source GLB files (7 models)
│   ├── Camera.glb
│   ├── content creation.glb
│   ├── digital marketing.glb
│   ├── GBP.glb
│   ├── package.glb
│   ├── social media .glb
│   └── web.glb
├── public/
│   ├── models/                   # Served GLB files (copied from models/)
│   ├── logo.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _headers                  # Netlify headers
├── netlify.toml                  # Netlify build config
├── tsconfig.json                 # TypeScript config
├── postcss.config.mjs            # PostCSS config (Tailwind)
├── eslint.config.mjs             # ESLint config
└── package.json
```

---

## Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Page | Homepage with scroll-driven 3D experience |
| `/about` | Page | About the agency (AboutHero + Philosophy) |
| `/services` | Page | All services listing |
| `/services/web-development` | Page | Individual service page |
| `/services/content-creation` | Page | Individual service page |
| `/services/social-media` | Page | Individual service page |
| `/services/app-development` | Page | Individual service page |
| `/services/product-shoot` | Page | Individual service page |
| `/services/gbp-management` | Page | Individual service page |
| `/services/printing-packaging` | Page | Individual service page |
| `/services/digital-marketing` | Page | Individual service page |
| `/portfolio` | Page | Portfolio grid |
| `/contact` | Page | Contact form |
| `/privacy` | Page | Privacy policy |
| `/terms` | Page | Terms of service |
| `/cookies` | Page | Cookie policy |
| `/api/contact` | API POST | Contact form submission endpoint |

---

## Homepage Architecture (Critical)

The homepage is the most complex part of the codebase. It uses a **dual-layer rendering system**:

### Layer 1: Three.js Canvas (z-index: 9999)
- Full-viewport fixed `<Canvas>` from @react-three/fiber
- Renders 3D GLB models that transition based on scroll progress
- Contains: `CameraRig`, `Lights`, `ServiceStage`
- WebGL fallback: shows 3 colored dots if WebGL unavailable

### Layer 2: HTML Content (z-index: 10001)
- `SplashScreen` → animated loading overlay (GSAP timeline, ~3s)
- `Navbar` → fixed top navigation
- `ScrollExperience` → GSAP ScrollTrigger scroll driver
- `ScrollSections` → text content sections synced with 3D
- `Footer`

### Scroll System

**Total sections: 11** (indices 0-10)

| Index | Section | Height | Description |
|-------|---------|--------|-------------|
| 0 | Hero | 100vh | Brand intro, dots → Web model transformation |
| 1-8 | Services | 520vh total | 8 services with sticky text panel + 3D model transitions |
| 9 | All Services | 100vh | "Everything Connects" summary |
| 10 | Selected Work | 100vh | Portfolio preview with CTA |

**Scroll flow:**
1. `ScrollExperience.tsx` uses GSAP ScrollTrigger to track scroll position
2. Raw scroll progress (0→1) is mapped through `mapPhysicalToLogical()` to distribute sections across scroll distance
3. `scrollProgress` (0→1 normalized) and `activeSection` (0-10 index) are passed to both `ScrollSections` (HTML) and `CreativeScene` (3D)
4. Both layers use the **same progress value** to stay perfectly synced

### 3D Model Transition System (ServiceStage.tsx)

This is the core animation engine. It manages 3D GLB models with a phase-based transition system.

**Section models:**

| Section | Model File | Service |
|---------|-----------|---------|
| 1 | web.glb | Web Development |
| 2 | content creation.glb | Content Creation |
| 3 | Camera.glb | Product Shoot |
| 4 | social media.glb | Social Media |
| 5 | digital marketing.glb | Digital Marketing |
| 6 | GBP.glb | GBP Management |
| 7 | packaging.glb | Printing & Packaging |
| 8 | content creation.glb | App Development |

**Transition phases per section (localT 0→1):**

| Phase | Timing | What Happens |
|-------|--------|-------------|
| HOLD | 0.00 - 0.18 | Current model settled at its side position |
| MOVE_TO_CENTER | 0.18 - 0.38 | Current model travels from side to center (X=0) |
| CENTER_TRANSFORM | 0.38 - 0.65 | Both models at X=0, cross-fade with rotation (outgoing fades 1→0, incoming fades 0→1) |
| MOVE_TO_OPPOSITE | 0.65 - 0.95 | New model travels from center to opposite side |
| SETTLE | 0.95 - 1.00 | New model settles at final position |

**Position system:**
- Odd services (1,3,5,7): Model on RIGHT (X = +1.75), text on LEFT
- Even services (2,4,6,8): Model on LEFT (X = -1.75), text on RIGHT
- Mobile: X positions compressed to ±0.40, model moved lower in viewport

**Hero section (secIdx=0) special flow:**
1. ThreeDotsGroup visible and rotating (0→360°)
2. Dots fade out while Web model fades in at center
3. Web model travels from center to its settled position (FINAL_X[1])
4. Dots are permanently gone after hero

**Smoothing:** Frame-rate-independent damping (THREE.MathUtils.damp) with separate damping constants for position (8), rotation (10), opacity (10), scale (8).

**Progressive prefetching:** When 30% into a section, the next model's GLB file begins downloading.

### Camera System (CameraRig.tsx)

- Follows model positions with gentle lean (leanScale = 0.22 on desktop, 0 on mobile)
- Subtle mouse parallax (0.12 on desktop, 0 on mobile)
- Z dolly effect during transitions (±0.15)
- Soft lerp (0.008) for smooth, independent camera movement
- Base Z: 4.8 (desktop), 5.8 (mobile)

---

## Services Data

Defined in `data/services.ts`:

```typescript
interface Service {
  id: string;        // e.g., "web-development"
  slug: string;      // URL slug
  number: string;    // Display number ("01"-"08")
  title: string;     // Display name
  description: string;
  features: string[]; // 4 features per service
}
```

**8 Services:**
1. Web Development — Custom websites, e-commerce, CMS, performance
2. Content Creation — Video, photography, copywriting, brand storytelling
3. Social Media Handling — Strategy, community, analytics, campaigns
4. App Development — iOS/Android, cross-platform, UI/UX, ASO
5. Product Shoots & Management — Studio, lifestyle, catalog, post-processing
6. GBP Management — Profile optimization, reviews, local SEO, scheduling
7. Printing & Packaging — Packaging design, collateral, large format, sustainable
8. Digital Marketing — PPC, SEO, email, conversion optimization

---

## Portfolio Data

Defined in `data/portfolio.ts`:

```typescript
interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;     // Path to image in /public
  video?: string;    // Optional video URL
}
```

**6 Items:** Aurora Brand Identity, NexGen Platform, Verde Sustainability App, Pulse Digital Campaign, Zenith Content Series, Craft Brewing Packaging.

---

## Contact Form & API

### Client-side (`components/contact/ContactForm.tsx`)
- Fields: name*, email*, phone, company, service* (dropdown from services data), message*
- Client-side validation (required fields, email regex, phone format)
- POSTs to `/api/contact` as JSON
- States: idle → loading → success/error

### Server-side (`app/api/contact/route.ts`)
- Validates required fields (name, email, service, message)
- Validates email format
- Sends email via Resend to `CONTACT_EMAIL` env var
- Uses HTML email template from `lib/resend.ts`
- Returns JSON response (200 success, 400 validation, 500 error)

### Email Template
- Inline-styled HTML email with brand colors
- Header: "3DOTCREATIVES — NEW WEBSITE INQUIRY"
- Fields displayed in a clean table layout
- Footer: "Sent from 3dotcreatives contact form"

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | Resend email service API key (prefix: `re_`) |
| `CONTACT_EMAIL` | No | Recipient email (default: `hello@3dotcreatives.com`) |

---

## Global Styles & Animations

### Custom CSS Classes
- `container-shell` / `section-shell` — Max-width containers with responsive padding
- `accent-line` — 64px gradient line accent
- `section-label` — Uppercase olive text label
- `section-title` / `section-title-light` — Display headings
- `splash-panel` — Splash screen split panels
- `service-card` — Hover lift + shadow effect
- `process-step` — Hover scale on number/title
- `cta-glow` — Radial gradient glow on hover
- `pill-hover` — Lift + shadow on hover

### Keyframe Animations
- `dotPulse` — Loading dots pulse
- `fadeInUp` — Fade + slide up
- `revealLine` — Horizontal line grow
- `float` — Gentle vertical float
- `shimmer` — Background shimmer
- `gradientShift` — Background gradient animation
- `scaleIn` — Scale from 0.9 + fade
- `slideInLeft` / `slideInRight` — Horizontal slide
- `orbFloat` — Floating orb movement

### Scroll Behavior
- Lenis smooth scroll integrated (CSS classes in globals.css)
- `prefers-reduced-motion` respected — all animations disabled

---

## Navigation

### Navbar (`components/layout/Navbar.tsx`)
- Fixed top, z-50
- Links: Home, About, Services, Portfolio, Contact
- Social icons: Instagram, Facebook, LinkedIn, WhatsApp
- CTA button: "Start a Project" → /contact
- Mobile: hamburger menu with dropdown
- Scroll-aware: adds backdrop blur + shadow after 15px scroll
- Active state: dark-olive bg with cream text

### Footer (`components/layout/Footer.tsx`)
- 4-column grid (brand, services, company, contact)
- Social links with hover effects
- Contact info: email, phone, addresses
- Bottom bar: copyright, privacy/terms/cookies links
- Tagline: "Idea · Design · Execution"

---

## 3D Models

### GLB Files
Located in `/public/models/` (served with `Cache-Control: public, max-age=31536000, immutable`).

### Model Loading (`components/three/GlbModel.tsx`)
- Uses @react-three/drei's GLTF loader
- Auto-scales to `targetSize` (varies per model: 1.5-1.8)
- Supports custom `position` and `rotation`
- Click handler for navigation to service pages

### ThreeDotsGroup
- Brand identity: 3 dots (olive, rust-gold, olive)
- Animated with continuous rotation in hero section
- Permanently removed after hero transformation

---

## Metadata & SEO

### Root Layout (`app/layout.tsx`)
```typescript
title: "3dotcreatives — Creative Digital Agency"
description: "3dotcreatives creates digital experiences, content, applications, marketing and creative solutions for ambitious brands."
```

### Per-page metadata exported via `Metadata` type from each page component.

### Static Files
- `public/robots.txt` — robots configuration
- `public/sitemap.xml` — sitemap
- `public/_headers` — Netlify custom headers

---

## Build & Deploy

### Scripts
- `npm run dev` — Development server
- `npm run build` — Production build
- `npm run start` — Production server
- `npm run lint` — ESLint

### Netlify Configuration (`netlify.toml`)
- Build command: `npm run build`
- Publish directory: `.next`
- Plugin: `@netlify/plugin-nextjs`
- Custom headers for `/models/*`: immutable cache + `model/gltf-binary` content type

---

## Key Architectural Patterns

1. **Dual-layer rendering**: 3D canvas (z-9999) + HTML content (z-10001) — never re-renders each other
2. **Single progress source**: One `scrollProgress` value drives both 3D animations and HTML text sync
3. **Phase-based 3D transitions**: Each service section has defined animation phases (hold → move → transform → move → settle)
4. **Frame-rate-independent smoothing**: All 3D values use `THREE.MathUtils.damp()` for consistent animation across refresh rates
5. **Progressive enhancement**: WebGL detection → fallback dots, mobile-specific camera/model adjustments
6. **Intersection Observer reveals**: `RevealSection` component for scroll-triggered animations
7. **Component isolation**: Each page composes Navbar + content + Footer independently (no shared layout wrapper beyond root)

---

## File Reference Quick Guide

| What | Where |
|------|-------|
| Color definitions | `app/globals.css` (lines 3-11) |
| Route structure | `app/*/page.tsx` |
| Service data | `data/services.ts` |
| Portfolio data | `data/portfolio.ts` |
| Contact API | `app/api/contact/route.ts` |
| Email templates | `lib/resend.ts` |
| 3D scene setup | `components/three/CreativeScene.tsx` |
| 3D model transitions | `components/three/ServiceStage.tsx` |
| Scroll tracking | `components/home/ScrollExperience.tsx` |
| HTML text sync | `components/home/ScrollSections.tsx` |
| Camera animation | `components/three/CameraRig.tsx` |
| Splash screen | `components/SplashScreen.tsx` |
| Navigation | `components/layout/Navbar.tsx` |
| Footer | `components/layout/Footer.tsx` |
| Contact form | `components/contact/ContactForm.tsx` |
| Reveal animations | `components/ui/RevealSection.tsx` |
| Global animations | `app/globals.css` (lines 188-284) |
| TypeScript config | `tsconfig.json` |
| Netlify config | `netlify.toml` |
| Environment vars | `.env.local.example` |
