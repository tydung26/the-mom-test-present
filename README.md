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

## Slides

19 slides covering the core ideas from the book:

1. Title
2. The Problem — typewriter effect
3. The Story — staggered narrative
4. Failing the Mom Test — bad conversation (chat bubbles)
5. Passing the Mom Test — good conversation (chat bubbles)
6. The 3 Rules — animated cards
7. Good vs Bad Questions — split screen
8. Rules of Thumb — cascading quotes
9. 3 Types of Bad Data — scale-in cards
10. Deflecting Compliments — before/after
11. Ask Scary Questions — dramatic zoom
12. Love Bad News — counter animation
13. Keep It Casual — comparison
14. Commitment & Advancement — traffic light
15. Meeting Outcomes — flip cards
16. Finding Conversations — snowball circles
17. Choose Your Customers — blur-to-focus
18. Cheat Sheet — rapid grid reveal
19. Q&A — pulsing glow

## Design

- Dark cinematic theme (`#0f0f0f`)
- Book cover pink accent (`#E0527E`)
- 16:9 optimized for projectors
- `prefers-reduced-motion` supported

## Build

```bash
pnpm build
pnpm preview
```
