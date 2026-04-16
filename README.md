# The Mom Test — Scrolling Story

A cinematic scrolling presentation of [The Mom Test](https://www.momtestbook.com/) by Rob Fitzpatrick. Built as a parallax storytelling website for a 30-minute talk to mixed company teams.

## Quick Start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. Scroll down to read the story.

## Navigation

| Input | Action |
|-------|--------|
| Scroll | Read through sections naturally |
| `↓` `→` | Smooth-scroll to next section |
| `↑` `←` | Smooth-scroll to previous section |
| `Home` | Jump to first section |
| `End` | Jump to last section |
| Dot nav (right edge) | Click to jump to any section |

URL hash (`#section-5`) deep-links to any section. Legacy `#5` format also supported.

### Presenter Mode

For live presentations: use keyboard arrows to advance between sections. The floating dot navigation on the right shows your position and lets you jump to any section.

## Tech Stack

- **TanStack Start** (SPA mode) + TanStack Router
- **React 19** + TypeScript
- **Framer Motion** — scroll-triggered animations (`whileInView`, `useScroll`, `useTransform`)
- **Tailwind CSS v4** — utility-first styling
- **Vite 7** — dev server and build tooling

## Core Messages

Two core messages drive the narrative:

1. **Truth is Uncomfortable** — "If the conversation felt good, the data is probably fake."
2. **Seek Commitment** — "Compliments cost nothing = worth nothing."

## Sections

12 sections in a discovery story arc:

| # | Section | Animation |
|---|---------|-----------|
| 1 | Hook | Typewriter reveal |
| 2 | The Fail | Chat bubbles + internal monologue |
| 3 | Truth is Uncomfortable | Bold text zoom |
| 4 | Why We're Fooled | 3-card reveal |
| 5 | The Fix | Rule cascade |
| 6 | The Pass | Chat bubbles + gold highlights |
| 7 | Seek Commitment | Bold text zoom |
| 8 | The Currencies | Ladder/tier visual |
| 9 | Product vs Market Risk | Two-column comparison |
| 10 | Customer Slicing | Funnel drill-down |
| 11 | Good vs Bad Meeting | Pass/fail flip cards |
| 12 | One Thing Monday | Bold question + Q&A glow |

## Project Structure

```
src/
├── components/       # scroll-container, story-section, floating-nav, parallax-layer, chat-bubble, etc.
├── hooks/            # useStoryNavigation, useCountUp
├── lib/              # sections-data, animation-variants, parallax-presets
├── routes/           # TanStack Router: __root.tsx, index.tsx
├── slides/           # 12 section components (section-01 … section-12)
└── styles.css        # Global styles + Tailwind imports
```

## Design

- Dark cinematic theme (`#0f0f0f`)
- Book cover pink accent (`#E0527E`)
- Immersive full-bleed sections with parallax depth layers
- Floating dot navigation (auto-hides, hidden on mobile)
- Scroll-triggered animations via Framer Motion `whileInView`
- `prefers-reduced-motion` supported (disables parallax + animations)

## Build & Preview

```bash
pnpm build       # Production build
pnpm preview     # Serve the build locally
```
