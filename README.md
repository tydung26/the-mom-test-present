# The Mom Test — Presentation

A cinematic 19-slide presentation of [The Mom Test](https://www.momtestbook.com/) by Rob Fitzpatrick. Built for a 30-minute talk to mixed company teams.

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

19 slides covering the core ideas from the book:

| # | Slide | Animation |
|---|-------|-----------|
| 1 | Title | — |
| 2 | The Problem | Typewriter effect |
| 3 | The Story | Staggered narrative |
| 4 | Failing the Mom Test | Bad conversation (chat bubbles) |
| 5 | Passing the Mom Test | Good conversation (chat bubbles) |
| 6 | The 3 Rules | Animated cards |
| 7 | Good vs Bad Questions | Split screen |
| 8 | Rules of Thumb | Cascading quotes |
| 9 | 3 Types of Bad Data | Scale-in cards |
| 10 | Deflecting Compliments | Before/after |
| 11 | Ask Scary Questions | Dramatic zoom |
| 12 | Love Bad News | Counter animation |
| 13 | Keep It Casual | Comparison |
| 14 | Commitment & Advancement | Traffic light |
| 15 | Meeting Outcomes | Flip cards |
| 16 | Finding Conversations | Snowball circles |
| 17 | Choose Your Customers | Blur-to-focus |
| 18 | Cheat Sheet | Rapid grid reveal |
| 19 | Q&A | Pulsing glow |

## Project Structure

```
src/
├── components/       # Shared UI: slide-layout, chat-bubble, quote-block, etc.
├── hooks/            # useSlideNavigation, useCountUp
├── lib/              # slides-data (lazy-loaded registry), animation-variants
├── routes/           # TanStack Router: __root.tsx, index.tsx
├── slides/           # 19 individual slide components (slide-01 … slide-19)
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
