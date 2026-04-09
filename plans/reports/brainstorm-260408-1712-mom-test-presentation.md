---
name: The Mom Test Presentation Website
description: Brainstorm report for cinematic slide presentation of The Mom Test book using TanStack Start
type: brainstorm
date: 2026-04-08
status: approved
---

# The Mom Test - Presentation Website Brainstorm

## Problem Statement

Create a 30-minute cinematic presentation website for "The Mom Test" by Rob Fitzpatrick. Target audience: mixed company teams (tech, sales, marketing, HR). Must be engaging, visual, and memorable.

## Audience

Mixed tech company — developers, sales, marketing, HR. Content framing must be universal: everyone talks to customers/users/candidates in some capacity.

## Tech Stack (Approved)

- **TanStack Start** — full-stack React meta-framework (SPA mode, client-side only)
- **React + TypeScript**
- **Framer Motion** — spring physics, layout animations, gesture support
- **Tailwind CSS v4** — utility-first styling
- **Vinxi/Vite** — build tooling (comes with TanStack Start)
- Zero backend, hardcoded content

## Visual Design (Approved)

- **Theme**: Dark cinematic — storytelling/narrative feel
- **Palette**: Dark bg (#0f0f0f), off-white text (#f5f5f5), amber accent (#f59e0b), stone secondary (#78716c)
- Full-bleed 16:9 slides, one idea per screen
- Large typography, quotes fill the screen
- Conversation dialogues as chat bubbles with staggered reveals
- Dramatic scene transitions (fade, slide, zoom)
- Progress bar at bottom + slide counter

## Navigation

- Arrow keys (Left/Right) for slide advancement
- Home/End for first/last slide
- Swipe support for touch devices
- Slide counter display

## Slide Structure (19 slides, ~1.5 min each)

| # | Title | Content | Animation |
|---|-------|---------|-----------|
| 1 | Title | "The Mom Test" - Rob Fitzpatrick | Cinematic zoom text reveal |
| 2 | The Problem | "We talk to customers... still build stuff nobody buys" | Typewriter effect |
| 3 | The Story | Rob's 3 years at Habit wasted | Fade-in narrative blocks |
| 4 | Failing the Mom Test | Bad iPad cookbook conversation (son/mom dialogue) | Chat bubbles one-by-one |
| 5 | Passing the Mom Test | Same convo done right | Chat bubbles with green highlights |
| 6 | The 3 Rules | Talk about their life / Specifics in past / Talk less, listen more | Staggered card reveals |
| 7 | Good vs Bad Questions | Side-by-side comparison | Split screen slide-in |
| 8 | Rules of Thumb | Key aphorisms from Ch1 | Quote cascade |
| 9 | 3 Types of Bad Data | Compliments / Fluff / Ideas | Animated icons + descriptions |
| 10 | Deflecting Compliments | Bad meeting → fix | Before/after transition |
| 11 | Ask Scary Questions | "Be terrified of at least one question" | Dramatic zoom + shake |
| 12 | Love Bad News | $50k analogy — spend $5k to learn | Counter animation |
| 13 | Keep It Casual | Skip formality, 5-10 min chats | Relaxed scene transition |
| 14 | Commitment & Advancement | Zombie leads, meetings succeed or fail | Traffic light metaphor |
| 15 | Meeting Outcomes | "That's so cool" vs "When can we start?" | Card flip reveals |
| 16 | Finding Conversations | Cold → warm intros, serendipity | Snowball animation |
| 17 | Choose Your Customers | Segmentation — "Babies or bodybuilders?" | Focus lens effect |
| 18 | Cheat Sheet | All rules of thumb summarized | Grid reveal |
| 19 | Q&A | Questions & Discussion | Pulse animation |

## Key Design Decisions

1. **No bullet-point-heavy slides** — cinematic = one idea per screen
2. **Conversation examples are the star** — book's greatest strength is dialogues
3. **Each "Rule of Thumb" gets visual treatment** — memorable takeaways
4. **Universal framing** — sales sees bad meetings, tech sees building wrong things, marketing sees bad signals, HR sees bad interview patterns
5. **TanStack Start in SPA mode** — no SSR needed, pure client-side rendering

## Implementation Considerations

- Each slide = React component, managed by a central slide deck controller
- TanStack Router handles slide routing (`/slide/1`, `/slide/2`, etc.)
- Framer Motion `AnimatePresence` for enter/exit transitions between slides
- Keyboard event listener at app level for arrow navigation
- Tailwind for all styling — no separate CSS files needed
- Preload adjacent slides for smooth transitions

## Risks

- **Framer Motion bundle size** — mitigated by tree-shaking, only import needed
- **TanStack Start SPA mode setup** — need to configure correctly for client-only
- **Animation performance** — keep GPU-accelerated (transform, opacity only)

## Success Criteria

- Smooth 60fps animations on presenter's machine
- All 19 slides render correctly
- Keyboard navigation works flawlessly
- Looks great on projector (16:9, high contrast dark theme)
- Presentable within 30 minutes

## Next Steps

Create implementation plan with phased approach.
