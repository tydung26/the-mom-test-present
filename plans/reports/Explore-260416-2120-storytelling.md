# The Mom Test Present — Storytelling Structure Report

**Date:** April 16, 2026  
**Project:** The Mom Test — Scrolling Story (Rob Fitzpatrick)  
**Duration:** ~30 minutes live presentation  

---

## Executive Summary

"The Mom Test Present" is a cinematic, scroll-driven interactive presentation built with React/Framer Motion. It adapts the book's core narrative into a 15-section discovery arc that leverages interactive animations, real-world examples, and visual metaphors to teach entrepreneurs how to talk to customers honestly. The storytelling is designed for mixed-audience engagement—educators and founders alike.

---

## 1. Slide/Section Organization & Flow

### Overall Structure: 15 Sections
The presentation follows a **three-act problem-solution-application arc**:

| # | Section Title | Type | Duration | Purpose |
|---|---|---|---|---|
| **0** | The Mom Test (Intro) | Title Slide | 0:30 | Book title, author, subtitle reveal |
| **1** | Hook | Interactive (3-phase) | 1:30 | Problem framing: we do all the right things and still fail |
| **2** | The Fail | Chat Example | 1:00 | Real example: iPad cookbook conversation (false positive) |
| **3** | Truth is Uncomfortable | Bold Statement | 0:45 | 1st core message: "Opinions worthless → Future is lie → Bad data" |
| **4** | Why We're Fooled | 3-Card Grid | 1:15 | Three types of bad data (Compliments, Fluff, Ideas) |
| **5** | The Fix | 3-Rule Cascade | 1:30 | Mom Test rules (1. Life not idea, 2. Past not future, 3. Listen) |
| **6** | The Pass | Chat Example (Pass) | 1:30 | Corrected example: real questions elicit real answers |
| **7** | Seek Commitment | Bold Statement | 0:45 | 2nd core message: "Facts & commitments, not compliments" |
| **8** | The Currencies | 3-Tier Ladder | 2:00 | Commitment tiers (Time → Reputation → Financial) |
| **9** | Product vs Market Risk | 2-Column Risk | 1:45 | How to prioritize what to validate (product vs market) |
| **10** | Startups Drown | Bold + Examples | 1:00 | "Startups drown, don't starve"; serve someone first |
| **11** | Customer Slicing | Interactive Funnel (8-phase) | 2:30 | Narrowing from Students → PhD → Specific segment via who/where |
| **12** | Good vs Bad Meeting | Flip Cards (5 cards) | 2:00 | Verdicts on customer responses (BAD/DANGER/GOOD/GOLD) |
| **13** | Remember | Agenda Recap | 0:45 | Recap: Truth uncomfortable, Seek commitment |
| **14** | One Thing Monday | Bold Q&A | 1:00 | Action prompt: "If this existed, would you pay now?" + Q&A |

**Total estimated runtime:** ~22–25 minutes (assuming reader pace; interactive sections add 2–5 min)

---

## 2. Narrative Arc & Pacing

### Three-Act Story Structure

**ACT I: THE PROBLEM** (Sections 0–2, ~4 min)
- **Exposition:** Title, hook with interactive reveal of the core contradiction
- **Inciting incident:** The iPad cookbook conversation shows why we fail despite trying the "right" things
- **Audience question formed:** "Why do people lie to us when they're being nice?"

**ACT II: THE SOLUTION** (Sections 3–8, ~10 min)
- **Rising action:** Two core messages stack upon each other
  - Message 1: "Truth is uncomfortable" (Section 3) + Why (Section 4)
  - The Mom Test rules (Section 5) + Proof via chat (Section 6)
  - Message 2: "Seek commitment" (Section 7) + Framework (Section 8)
- **Midpoint:** Commitment currencies establish hierarchy of validation strength
- **Climax of understanding:** Product vs Market Risk (Section 9) frames the strategic layer

**ACT III: APPLICATION & CLOSURE** (Sections 9–14, ~8 min)
- **Falling action:** Specific frameworks (Slicing, Meeting verdicts)
- **Resolution:** One Thing Monday — the actionable, memorable takeaway
- **Call to action:** "If it existed, would you pay now?" + Q&A

### Pacing Devices

1. **Section length variation** — Alternates between quick punchy statements (45–60 sec) and deeper interactive dives (2–2.5 min), preventing monotony
2. **Animation timing** — Framer Motion `whileInView` triggers create natural momentum; staggered reveals (0.08–0.15s between items) maintain rhythm
3. **Interactive pauses** — Hook, Slicing, and Meetings sections use Enter key pacing, letting the audience control revelation speed
4. **Visual contrast** — Chat bubbles (conversational), bold text (punchy), grids (systematic), funnel (progressive narrowing)
5. **Color coding** — Pink (#E8699A) accents for key points; red/amber/green for verdict tiers

---

## 3. Content Structure: Hooks, Transitions, Conclusions

### Hooks (Why audiences keep scrolling/engaging)

1. **Section 0 (Intro):** Title with staggered author reveal and divider creates curiosity—what is "The Mom Test"?
2. **Section 1 (Hook):** Interactive three-phase reveal
   - Phase 1: "We talk to customers, validate ideas, listen to feedback" (expected)
   - Phase 2: "...and still build things nobody wants to buy" (tension!)
   - Phase 3: Mission frame ("Learn the truth before you run out of money") — emotional stakes
3. **Section 2 (The Fail):** Real conversation with subtext reveals mom's hidden thoughts ("As if I need another cookbook")—immediate "aha" moment
4. **Section 7 (Seek Commitment):** Repeated core message with italic callout: "A compliment costs them nothing, so it's worth nothing"—simple, memorable

### Transitions (Bridging between ideas)

- **Chat FAIL → Message 1** (Sec 2→3): "Now I see the problem. Here's why..."
- **Why Fooled → The Fix** (Sec 4→5): "Here's how to avoid the three traps"
- **The Fix → The Pass** (Sec 5→6): "Let's see the corrected version in action"
- **The Pass → Message 2** (Sec 6→7): "The underlying principle: seek commitment, not compliments"
- **Currencies → Risk Framework** (Sec 8→9): "Which commitment tier should you prioritize? Depends on your risk profile"
- **Risk → Slicing** (Sec 9→10→11): "Before you validate, you must know who you're talking to"
- **Slicing → Meetings** (Sec 11→12): "In real meetings, here's how to recognize good vs bad signals"

### Conclusions (Reinforcement)

1. **Section 3 (Message 1 Conclusion):** Boxed statement in pink: "If it felt good, the data is probably fake"
2. **Section 5 (Mom Test Rules Conclusion):** "They own the problem. You own the solution." (role clarity)
3. **Section 7 (Message 2 Conclusion):** Italic quote: "A compliment costs them nothing...carries no data"
4. **Section 8 (Currencies Conclusion):** Italic: "Think in terms of currency—what are they giving up for you?"
5. **Section 10 (Slicing Conclusion):** Bold rule: "Good customer segments are a who-where pair"
6. **Section 11 (Meetings Conclusion):** Italic rule: "Push for commitment at the end of every meeting—or you're collecting compliments"
7. **Section 14 (Action Conclusion):** "If this existed, would you pay now?" (the ultimate Mom Test)

---

## 4. Book Quotes & Examples Usage

### Direct Quotes from "The Mom Test" (Verified in Code)

| Quote | Section | Context | Usage |
|---|---|---|---|
| "Truth is uncomfortable" | Agenda (0:13) | Core message framing | Opens the two-message recap |
| "If it felt good, there's no real insight" | Agenda (0:13) | Principle of honest feedback | Subtext under first message |
| "Compliments cost nothing = worth nothing" | Message 1 (Sec 3) | Why opinions are valueless | Central to message structure |
| "A compliment costs them nothing...carries no data" | Message 2 (Sec 7) | Expansion of principle | Italic footer callout |
| "Think in terms of currency—what are they giving up for you?" | Currencies (Sec 8) | Commitment hierarchy logic | Closing italic beneath tiers |
| "If you don't know where to find your customers, keep slicing" | Slicing (Sec 11) | Iterative segmentation | Footer guidance |
| "Good customer segments are a who-where pair" | Slicing (Sec 11) | Slicing outcome definition | Bold rule at end |
| "Push for commitment...or you're collecting compliments" | Meetings (Sec 12) | Meeting verdict principle | Interactive card closing |

### Real-World Examples from the Book

1. **iPad Cookbook Conversation** (Sec 2 FAIL, 6 PASS)
   - **FAIL version:** Mom says "yes" to a $40 cookbook app when framed hypothetically
   - **PASS version:** Real questions reveal she doesn't buy cookbooks, lets dad install apps, found recipes via friends
   - **Pedagogical role:** Concrete before/after showing power of the Mom Test

2. **Three Types of Bad Data** (Sec 4)
   - **Compliments:** "That's so cool!"
   - **Fluff:** "I would definitely use that..." (future tense = wishful thinking)
   - **Ideas:** "You should totally add..." (their solution, not their problem)
   - **Pedagogical role:** Pattern recognition—help audience spot bad signals in real conversations

3. **Startup Examples** (Sec 10)
   - **Google:** PhD students finding code (narrow niche)
   - **eBay:** Pez collectors (niche origin)
   - **Evernote:** Moms saving recipes (niche origin)
   - **Pedagogical role:** "Before you serve everyone, serve someone" principle with social proof

4. **Commitment Currencies** (Sec 8)
   - **Time tier:** "Clear next meeting, Trial usage, Feedback session"
   - **Reputation tier:** "Intro to boss, Public testimonial, Case study"
   - **Financial tier:** "Letter of intent, Pre-order, Deposit, Purchase"
   - **Pedagogical role:** Hierarchy of validation strength (weakest → strongest)

5. **Product vs Market Risk** (Sec 9)
   - **Video games:** Pure product risk (unknown if anyone wants it)
   - **"If you can build it, I'll buy it":** Market risk solved, focus on product
   - **Pedagogical role:** Strategic priority-setting

6. **Meeting Verdicts** (Sec 12) — Five customer statements evaluated
   - **GOLD:** "Can I buy the prototype?" = Real commitment
   - **GOOD:** "What are the next steps?" = Advancement signal
   - **DANGER:** "I would definitely buy that" = $10M false positive
   - **BAD:** "Let me know when it launches" = Stall tactic
   - **BAD:** "That's so cool, I love it!" = Pure compliment
   - **Pedagogical role:** Real-time meeting assessment skill

---

## 5. Visual Storytelling Elements

### Animation Patterns & Their Narrative Function

#### **Reveal Animations** (Fade In, Zoom, Scale)
- **Function:** Creates emphasis and focus
- **Used in:** Titles, key statements, core messages
- **Example:** Section 3 uses 3-part reveal (Opinions → Future → Bad Data) with escalating emphasis
- **Timing:** `ease-out-quint` [0.23, 1, 0.32, 1] for smooth, confident reveals

#### **Stagger Animations** (Sequential Item reveals)
- **Function:** Prevents overwhelming visual noise; guides eye left-to-right, top-to-bottom
- **Used in:** Card grids, rule cascades, currency tiers
- **Delay between items:** 0.08–0.15s for conversational pacing
- **Example:** 3 types of Bad Data (Sec 4) — each card bounces in via spring physics

#### **Interactive Animations** (Phase-based, Enter-key driven)
- **Function:** Audience participation; pacing control
- **Used in:** Hook (3 phases), Slicing (8 tiers), Meetings (5 card flips)
- **Pattern:** Shows hint text "Press Enter" when section is in view; progress counter (1/3, 2/3, etc.)

#### **Chat Bubble Animations** (Directional slide + scale)
- **Function:** Mimics conversation flow; differentiates speakers via side/color
- **Used in:** Fail conversation (amber/stone for son/mom), Pass conversation (green/stone for correct questions)
- **Timing:** Fast (0.25s) to feel natural, snappy

#### **Flip Card Animations** (3D card rotation)
- **Function:** Verdict reveal — anticipation then verdict show
- **Used in:** Meeting verdicts (Section 12)
- **Details:** Cards pulse pink border on hover; 3D rotate on Enter key

#### **Funnel Animations** (Progressive blur + narrowing)
- **Function:** Visual metaphor for slicing/narrowing
- **Used in:** Customer Slicing (Section 11)
- **Pattern:** Each tier blurs and shrinks as you zoom in to next layer

#### **Glow/Pulse Animations** (Subtle emphasis)
- **Function:** Draw attention without jarring
- **Used in:** Action slide Q&A (Section 14) with pulsing pink glow backdrop
- **Timing:** 3-second infinite loop, opacity/scale breathing effect

### Color Language

| Color | Hex | Usage | Narrative Role |
|---|---|---|---|
| **Pink** | #E0527E / #E8699A | Core accent, key words, active states | Book brand; emphasis on key commitments |
| **White/Stone** | #f5f5f5 / #a8a29e | Primary text, neutral backgrounds | Readability; calm, professional tone |
| **Green** | #10b981 | Correct answers, financial commitments, "PASS" verdicts | Success, go, approval |
| **Amber/Gold** | #eab308 / #f59e0b | Product risk, medium signals, "DANGER" zone | Caution, thinking required |
| **Red** | #ef4444 | Bad data, false positives, "BAD" verdicts, broad definitions | Stop, incorrect, trap |
| **Dark background** | #0f0f0f | Full-bleed cinematic backdrop | Immersive, focused attention |

### Typography & Text Hierarchy

1. **H1 / Title text:** `text-5xl–7xl font-black` — Book title, core messages
2. **H2 / Section title:** `text-3xl–4xl font-black` — "Why We're Fooled", "Product vs Market Risk"
3. **H3 / Subsection:** `text-xl–2xl font-bold` — Rule numbers, tier labels
4. **Body copy:** `text-base–lg` — Explanations, chat messages
5. **Callout / italic:** `text-base italic` — Quotes, punchlines, footer wisdom
6. **Labels / uppercase:** `text-xs uppercase tracking-widest` — Section labels, verdicts

### Spatial & Compositional Choices

1. **Center-aligned text:** Focuses attention; creates symmetry and formality
2. **Bordered callouts:** Pink-bordered boxes highlight critical insights (Message 1, Message 2, Phase insights)
3. **Three-column grids:** Bad data types, risk matrix, commitment examples — shows systematic thinking
4. **Left-to-right chat flow:** Mimics natural conversation reading
5. **Ladder/tier visual:** Stacks from weakest (bottom) to strongest (top) commitment — climax structure
6. **Funnel narrowing:** Top-to-bottom visual metaphor for customer segmentation
7. **Full-bleed sections:** Each 100vh viewport creates "chapter break" feeling; scroll is the turn of the page

### Interactive Elements

| Element | Type | Purpose | User Control |
|---|---|---|---|
| **Floating dot nav (right edge)** | Navigation UI | Quick section jump; visual progress indicator | Click dots or hover for tooltip |
| **Enter-key progression** | Input handler | Paced reveal of hidden insights | Keyboard only; visible when section is in view |
| **Flip cards** | Interactive card | Verdict reveal on demand | Enter key to flip each card |
| **Funnel tiers** | Progressive reveal | Audience-paced customer slicing deep dive | Enter key to advance through 8 phases |
| **Scroll position tracking** | Viewport detection | Trigger animations, update active section | Passive (scroll-driven) |
| **Keyboard navigation** | Global shortcut | Jump between sections | Arrow keys (←→) or Home/End |

---

## 6. Narrative Devices & Rhetorical Structure

### The "Before-After" Pattern (Powerful persuasion technique)

Used to show **contrast** and **proof** of the Mom Test method:

1. **Section 2 (The Fail):** Shows the old, broken way
   - Mom says "yes" but doesn't actually buy or care
   - Son asks hypotheticals, gets false positives
   - Subtext reveals the lie

2. **Section 6 (The Pass):** Shows the corrected way
   - Same person, same topic, better questions
   - Real answers emerge (she doesn't buy cookbooks, lets dad install apps)
   - Gold-highlighted annotations explain why each question works

### The "Three Things" Pattern (Cognitive chunking)

Repeated across sections to aid memory:

1. **Three Bad Data Types** (Sec 4): Compliments, Fluff, Ideas
2. **Three Mom Test Rules** (Sec 5): Life not idea, Past not future, Listen more
3. **Three Commitment Tiers** (Sec 8): Time, Reputation, Financial
4. **Three Slicing Questions** (Sec 11): Who wants most, Why, Where to find
5. **Three Product Risk Questions** (Sec 9): Can build, Can grow, Will keep using
6. **Three Market Risk Questions** (Sec 9): Want it, Will pay, Enough of them

### The "Progression" Pattern (Scaffolding understanding)

Each section builds on prior knowledge:

1. **Identify the problem** (Hook, The Fail) → "We're doing it wrong"
2. **Understand why** (Truth Uncomfortable, Why Fooled) → "Here's what we're missing"
3. **Learn the fix** (The Fix, The Pass) → "This is how to do it right"
4. **Deepen commitment principle** (Seek Commitment, Currencies) → "What you're really looking for"
5. **Apply strategically** (Risk, Slicing, Meetings) → "How to deploy this in practice"
6. **Take action** (One Thing Monday) → "Do this on Monday"

### The "Emotional Arc" (Engagement curve)

| Section | Emotion | Tension | Resolution |
|---|---|---|---|
| 0–1 | Curiosity | "What is The Mom Test?" | Hook frames the problem |
| 2–3 | Recognition | "Oh no, we're fooled" | "Here's why" |
| 4–5 | Relief | "We didn't know the fix" | Three clear rules |
| 6–7 | Validation | "The rules actually work" | Second core message |
| 8–9 | Clarity | "What does commitment mean?" | Hierarchy + strategy |
| 10–11 | Empowerment | "How do I find the right customers?" | Slicing method |
| 12 | Confidence | "I can spot good meetings now" | Verdicts framework |
| 14 | Agency | "What do I do with this?" | One Thing Monday actionable |

---

## 7. Key Takeaways for Audience

By end of presentation, audience should retain:

1. **Core principle:** Opinions are worthless; seek commitment instead
2. **Three rules of The Mom Test:** (1) Talk about life, (2) Ask about past, (3) Listen more
3. **Commitment hierarchy:** Time < Reputation < Financial
4. **Strategic distinction:** Validate market risk via conversation, product risk via building
5. **Slicing rule:** Find customers by narrowing to "who-where" pair
6. **Meeting metric:** Look for advancement signals (next steps, commitments) not compliments
7. **Actionable prompt:** "If this existed, would you pay now?" — forces hypothetical → concrete

---

## 8. Technical Storytelling Infrastructure

### Framer Motion Patterns

- **whileInView triggers:** Animations fire only when section scrolls into viewport (creates natural pacing)
- **staggerChildren delays:** 0.08–0.15s between reveals (prevents visual overload)
- **spring physics:** `stiffness: 200–260, damping: 20–24` creates bouncy, organic feel vs. linear tweens
- **keyframe sequences:** Three-phase Hook uses `state` + `animate` for multi-step reveals

### Accessibility Considerations

- `defaultViewport` configuration: `amount: 0.3` fires animation when 30% of element is in view (early detection for smooth reveal)
- Floating nav includes `aria-label` and `aria-current` for screen readers
- Color coding backed by text labels (not color-only communication)
- `prefers-reduced-motion` support (animations disabled for accessibility)

### Performance Optimization

- Lazy-loading slide components via `React.lazy()` — only load section when needed
- Parallax layers use GPU-accelerated transforms
- Scroll event debouncing via Framer Motion's native `useScroll` hook
- Full-bleed sections use `min-h-screen` for viewport sizing (not fixed heights)

---

## 9. Unresolved Questions & Notes

1. **Presenter vs. audience pacing:** Are the interactive sections (Hook, Slicing, Meetings) meant for live presenter control, or does each audience member move at their own pace? The hint text suggests self-paced, but "Presenter Mode" is mentioned in README.

2. **Timing assumptions:** Section durations assume ~2–3 words per second reading pace. Actual live delivery could vary wildly based on speaking style and audience interaction.

3. **Mobile experience:** Floating nav and some interactions are desktop-optimized. How does the story feel on mobile? Are keyboard shortcuts adapted for touch?

4. **Accessibility depth:** Parallax layers have no alt text. How would a screen reader convey the visual metaphors (funnel, ladder, 3D cards)?

5. **Q&A integration:** "One Thing Monday" ends with "Questions?" but no actual Q&A mechanism is coded. Is this a live speaker pause, or a closing screen?

---

## Conclusion

"The Mom Test Present" is a masterclass in interactive storytelling for business education. It takes a dense, principle-heavy book and transforms it into a cinematic, paced experience using:

- **Clear three-act structure** (problem → solution → application)
- **Alternating content types** (statements, examples, frameworks, interactive)
- **Consistent color & animation language** (reinforces brand, paces emotion)
- **Real-world examples** (iPad cookbook, startup origins) that make principles concrete
- **Interactive pauses** (Enter key) that let audiences control revelation speed
- **Progressive complexity** (rules → tiers → risk matrix → slicing funnel)
- **Emotional arc** (confusion → recognition → relief → clarity → confidence → agency)

The presentation succeeds because it respects the audience's intelligence while providing scaffolding. It doesn't just tell; it shows, proves, and lets audiences practice through verdicts and interactive reveals.

