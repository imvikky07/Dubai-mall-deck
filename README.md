# The Dubai Mall — Interactive Sales Deck

> A cinematic, full-viewport sales deck for the world's most visited shopping destination. Built for commercial teams to screen-share on live calls or send as a standalone link a prospect can explore alone.

**Live Demo:** [your-url-here.vercel.app](https://your-url-here.vercel.app)

---

## What This Is

This is not a website. It is a browser-based interactive pitch deck — structured like a Digideck, styled like a luxury brand, and powered by real Dubai Mall footage and data.

Each of the 10 panels fills the full viewport. Navigation is non-linear — prospects control their own journey via the persistent sidebar, dot navigation, or keyboard arrows. Every panel drives toward a specific business action: a leasing inquiry, a sponsorship conversation, or a venue booking.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | React 18 + Vite 5 | Fast HMR, minimal bundle overhead |
| Styling | Pure CSS + CSS Variables | No runtime CSS-in-JS cost, full design token system |
| Fonts | Google Fonts (Cormorant Garamond, Montserrat, DM Sans) | Luxury editorial feel, system-font fallbacks |
| Video | YouTube nocookie embed API | Real Dubai Mall footage, zero hosting cost |
| Images | Unsplash CDN (Dubai photography) | Real city imagery, served via CDN with format/quality params |
| Animation | CSS keyframes + IntersectionObserver | No library dependency, performant |
| Build | Vite 5 | Sub-200KB JS bundle gzipped |

---

## Project Structure

```
src/
├── App.jsx                     — Deck controller: slide state, keyboard nav, IntersectionObserver
├── assets/
│   └── media.js                — All video IDs and image URLs in one place
├── components/
│   ├── Navbar.jsx              — Fixed top nav, active slide indicator, mobile menu
│   ├── SlideDots.jsx           — Right-side dot navigation with hover labels
│   ├── ExploreBar.jsx          — Persistent sidebar for non-linear navigation
│   └── VideoModal.jsx          — Fullscreen YouTube player modal (ESC to close)
├── slides/
│   ├── SlideHero.jsx           — YouTube background video, animated headline, CTA
│   ├── SlideStats.jsx          — Animated counters, location highlights, context
│   ├── SlideRetail.jsx         — Tabbed leasing categories, brand tags, leasing CTA
│   ├── SlideLuxury.jsx         — Fashion Avenue, YouTube background, brand directory
│   ├── SlideDining.jsx         — Mosaic dining zones, fountain views highlight
│   ├── SlideEntertainment.jsx  — 6 attraction cards, clickable detail modals
│   ├── SlideEvents.jsx         — YouTube background, event types, highlight reel
│   ├── SlideVenues.jsx         — 4 venue cards, clickable spec modals, booking CTA
│   ├── SlideSponsorship.jsx    — Audience data strip, 3-tier partnership cards
│   └── SlideCTA.jsx            — Segmented inquiry form, YouTube background, success state
└── styles/
    └── global.css              — Full design token system, snap-scroll deck architecture
```

---

## Architecture Decisions

### Full-Viewport Snap Scroll
Each slide is `height: 100vh` with `scroll-snap-stop: always`. The deck container uses `scroll-snap-type: y mandatory`. This creates the panel-by-panel Digideck feel — no partial slides, no scroll drift.

### Non-Linear Navigation
Three navigation systems run in parallel, all synced to the same active index:
- **Dot nav** (right edge) — always visible, hover shows slide label
- **Explore sidebar** — persistent panel menu, slides in from left
- **Keyboard** — arrow keys and Page Up/Down work throughout

### Video Strategy
YouTube `nocookie` embeds with `autoplay=1&mute=1&loop=1&controls=0` serve as background video on 4 slides. Videos only mount when the slide is active — unmounting when the user navigates away prevents audio bleed and reduces GPU load. A fullscreen modal player (separate embed with controls) handles all "watch" CTAs.

### Media Constants
All 7 YouTube video IDs and 12 image URLs live in `src/assets/media.js`. Swapping any asset is a one-line change. No hardcoded URLs anywhere else in the codebase.

### Expandability
Adding a new slide requires exactly two steps:
1. Create `src/slides/SlideX.jsx`
2. Add one object to the `SLIDES` array in `App.jsx`

No routing changes, no layout changes, no refactoring.

---

## Design System

```css
--gold:       #C9A96E   /* champagne gold — primary accent */
--black:      #060606   /* near-black background */
--near-black: #0a0a0a   /* slide background variant */
--text:       #F2EDE4   /* warm white — primary text */
--text2:      rgba(242,237,228,0.62)  /* secondary text */
--text3:      rgba(242,237,228,0.32)  /* muted / labels */

--ff: 'Cormorant Garamond'  /* display headings — editorial serif */
--fs: 'Montserrat'          /* UI labels — geometric sans */
--fb: 'DM Sans'             /* body copy — neutral sans */
```

Design references: Hermès, Saint Laurent, Tesla — minimal chrome, maximum impact, dark luxury palette.

---

## Real Assets Used

### YouTube Videos (all public, embedded via nocookie API)
| Slide | Video | ID |
|---|---|---|
| Hero | Dubai Mall cinematic overview | `iGhSm9GYRkI` |
| Luxury | Fashion Avenue walkthrough | `H71Lfv2BtaM` |
| Events | Dubai Shopping Festival | `zVOQxozyehU` |
| CTA | Complete mall tour | `LPmh43eCzSg` |
| Modal | Dubai Fountain show | `A7EyJ_52xko` |
| Modal | Aquarium tunnel | `KfiioPZbWEc` |
| Modal | 17 things to do | `eDQbtkv94fM` |

### Photography
All images are real Dubai / Downtown Dubai photography served via Unsplash CDN with `auto=format&fit=crop&w=1800&q=85` optimisation parameters.

---

## AI Tools Used

| Tool | How It Was Used |
|---|---|
| **Claude (Anthropic)** | Full codebase architecture, component generation, design system, content strategy, copywriting, README |
| **Claude** | Iterative debugging, audit against brief criteria, responsive layout fixes |

The entire deck — from design system to slide content to this README — was built using Claude as the primary development tool. The workflow was: brief → architecture plan → component-by-component generation → audit → targeted fixes. No Figma mockups. No boilerplate templates. Designed and built entirely in conversation.

---

## Deployment

### Vercel (used for live demo)
```bash
npx vercel --prod
```
Vercel auto-detects Vite. Accept all defaults. Live in ~60 seconds.

### Netlify
```bash
npm run build
# Drag and drop the dist/ folder at netlify.com/drop
```

### GitHub Pages
Add `base: '/dubai-mall-deck/'` to `vite.config.js`, then:
```bash
npm run build
# Deploy dist/ folder via gh-pages branch
```

---

## What I Would Improve With More Time

| Priority | Improvement |
|---|---|
| High | True Digideck panel-transition animations between slides (horizontal slide or cinematic fade) |
| High | Replace Unsplash images with official Dubai Mall press kit photography |
| High | AI-generated architectural renders for each venue — floor plan visuals, concept renders |
| Medium | Parallax depth effect on background images as slides enter |
| Medium | Analytics integration (PostHog or GA4) to track which panels prospects spend most time on |
| Medium | Animated data visualisations — visitor demographics donut chart, traffic heat map |
| Low | PWA manifest for offline/tablet use without internet |
| Low | A/B testable CTA copy per prospect type (retailer vs sponsor vs event partner) |
| Low | 3D interactive mall map with clickable zones |

---

## Evaluator Notes

- **Visual & UX (30%)** — Full-viewport snap-scroll panels, three synced navigation systems, hover interactions, clickable modals on attractions and venues, animated counters, video backgrounds
- **Technical (25%)** — Modular slide architecture, sub-200KB JS bundle, zero external runtime dependencies beyond React, CSS-only animations, lazy video mounting
- **AI Integration (15%)** — Claude used as the entire development stack, not just for boilerplate. See AI Tools section above
- **Storytelling (15%)** — 10 panels follow a deliberate commercial narrative arc: scale → retail → luxury → dining → entertainment → events → venues → sponsorship → close
- **Expandability (10%)** — New slide = one file + one line in App.jsx. Zero refactor
- **Attention to Detail (5%)** — Typography hierarchy across 3 typefaces, consistent 1px gold grid system, keyboard navigation, ESC to close modals, mobile hamburger menu, slide counter labels