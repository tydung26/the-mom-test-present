# The Mom Test — Presentation

A cinematic 24-slide presentation of [The Mom Test](https://www.momtestbook.com/) by Rob Fitzpatrick. Built for a 30-minute talk to mixed company teams.

## Quick Start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. Use arrow keys to navigate.

## Navigation

| Key | Action |
|-----|--------|
| `→` `↓` `Space` | Next slide |
| `←` `↑` | Previous slide |
| `Home` | First slide |
| `End` | Last slide |
| Swipe left/right | Touch navigation |

URL hash (`#5`) deep-links to any slide.

## Tech Stack

- **TanStack Start** (SPA mode) + TanStack Router
- **React 19** + TypeScript
- **Framer Motion** — spring animations, AnimatePresence transitions
- **Tailwind CSS v4** — utility-first styling
- **Vite 7** — dev server and build tooling
- **Vitest** — unit testing

## Slides

24 slides covering the core ideas from the book:

| # | Slide | Animation |
|---|-------|-----------|
| 1 | Title | — |
| 2 | The Problem | Typewriter effect |
| 3 | The Story | Staggered narrative |
| 4 | Failing the Mom Test | Bad conversation (chat bubbles, flower shop) |
| 5 | Passing the Mom Test | Good conversation (chat bubbles, flower shop) |
| 6 | The 3 Rules | Animated cards |
| 7 | Good vs Bad Questions | Split screen (flower shop examples) |
| 8 | Rules of Thumb | Cascading quotes |
| 9 | 3 Types of Bad Data | Scale-in cards |
| 10 | Deflecting Compliments | Before/after (flower shop context) |
| 11 | Anchoring Fluff | Three-column reveal (fluff → anchor → fact) |
| 12 | Digging Beneath Ideas | MTV story reveal + dig questions |
| 13 | Embrace the Uncomfortable | Scary questions + bad news merged |
| 14 | Keep It Casual | Comparison |
| 15 | Conferences & Events | Split screen (what to do vs what not to do) |
| 16 | Meeting Framework (VFWPA) | Five-card stack |
| 17 | Commitment & Advancement | Traffic light |
| 18 | Meeting Outcomes | Flip cards |
| 19 | Product vs Market Risk | Two-column comparison |
| 20 | Finding Conversations | Snowball circles |
| 21 | Choose Your Customers | Blur-to-focus (Weddings or Weekends) |
| 22 | Customer Slicing | Funnel narrowing (who-where pairs) |
| 23 | Cheat Sheet | Rapid grid reveal (16 rules, 4 columns) |
| 24 | Q&A | Pulsing glow |

## Project Structure

```
src/
├── components/       # Shared UI: slide-layout, chat-bubble, quote-block, etc.
├── hooks/            # useSlideNavigation, useCountUp
├── lib/              # slides-data (lazy-loaded registry), animation-variants
├── routes/           # TanStack Router: __root.tsx, index.tsx
├── slides/           # 24 individual slide components (slide-01 … slide-24)
└── styles.css        # Global styles + Tailwind imports
```

## Design

- Dark cinematic theme (`#0f0f0f`)
- Book cover pink accent (`#E0527E`)
- 16:9 optimized for projectors
- `prefers-reduced-motion` supported
- Lazy-loaded slides for fast initial load

## Build & Preview

```bash
pnpm build       # Production build
pnpm preview     # Serve the build locally
```

## Testing

```bash
pnpm test        # Run unit tests with Vitest
```
