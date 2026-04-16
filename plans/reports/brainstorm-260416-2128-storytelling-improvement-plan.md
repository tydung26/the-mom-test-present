# Storytelling Improvement Plan: The Mom Test Present

**Date:** 2026-04-16  
**Current Score:** 7/10  
**Target Score:** 8.5+/10  
**Scope:** 5 high-impact changes with specific rewrites

---

## Executive Summary

The presentation has solid structure but relies too heavily on **telling** rather than **showing**. The 5 changes below address the core weakness: making the audience *feel* the lesson rather than just understand it intellectually.

**Estimated effort:** 2-3 hours  
**Expected impact:** +1.5 points (7→8.5)

---

## High-Impact Change #1: Rewrite Subtext to Be Less Obvious

### Problem
Mom's subtext explains the psychology too explicitly. It reads like a textbook annotation.

**Current (section-02-the-fail.tsx:26-27, 38-39):**
```tsx
subtext: '(Thinking: "As if I need another cookbook at my age")',
// ...
subtext: '(Thinking: "I have rationalised the price outside of a real purchase decision")',
```

### Why It Fails
- Over-explains the insight
- Removes audience's "aha" moment
- Feels academic, not visceral

### Rewrite
```tsx
// section-02-the-fail.tsx - messages array
const messages: Message[] = [
  {
    sender: 'Son',
    message: 'Would you ever buy an app which was like a cookbook for your iPad?',
    side: 'right',
    color: 'amber',
  },
  {
    sender: 'Mom',
    message: 'Hmmm.',
    side: 'left',
    color: 'stone',
    subtext: '(I haven\'t bought a cookbook in 10 years...)',  // SHORTER, implies the lie
  },
  {
    sender: 'Son',
    message: 'And it only costs $40...',
    side: 'right',
    color: 'amber',
  },
  {
    sender: 'Mom',
    message: 'Oh, well yes honey, that sounds amazing.',
    side: 'left',
    color: 'stone',
    subtext: '(He worked so hard on this...)',  // EMOTIONAL, not analytical
  },
]
```

### Impact
- Audience discovers the lie themselves
- Creates empathy for both characters
- More memorable because it's felt, not explained

---

## High-Impact Change #2: Restructure Flow — Move Message After Proof

### Problem
Section 03 (Message One) declares "Opinions are worthless" *before* showing the corrected conversation. This is **telling before showing**.

**Current Flow:**
```
02: The Fail → 03: "Opinions worthless" → 04: Why Fooled → 05: The Fix → 06: The Pass
```

### Why It Fails
- Preachy — you're lecturing before proving
- Audience hasn't earned the insight yet
- Reduces the PASS conversation's impact (they already know the lesson)

### Restructured Flow
```
02: The Fail → 04: Why Fooled → 05: The Fix → 06: The Pass → 03: Message One (now earned)
```

**Implementation:**
1. Rename files or adjust import order in scroll-container
2. Keep Section 03 content, but it now lands *after* the proof

### Alternative: Add Transitional Question
If restructuring is too disruptive, add a **question** between FAIL and Message:

**New section-02b-reflection.tsx:**
```tsx
export default function Section02Reflection() {
  return (
    <div className="max-w-2xl text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl sm:text-4xl font-black text-[#f5f5f5] leading-tight"
      >
        Mom said <span className="text-green-400">yes</span>.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-3xl sm:text-4xl font-black text-[#f5f5f5] leading-tight mt-4"
      >
        She was <span className="text-red-400">lying</span>.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-xl text-stone-400 mt-8 italic"
      >
        Why do people lie to us when they're trying to be nice?
      </motion.p>
    </div>
  )
}
```

### Impact
- Creates curiosity before explanation
- Makes audience *want* the answer
- Lesson lands harder because they asked the question first

---

## High-Impact Change #3: Add Human Stakes — Frame Story Opening

### Problem
No protagonist. The presentation teaches concepts but doesn't give us someone to root for.

### Solution
Add a brief "I made this mistake" frame at the start of the Hook or after the FAIL.

**Option A: Modify Hook Phase 3 (section-01-hook.tsx)**

Replace the "mission" statement with a personal stake:

```tsx
{/* Phase 3: The stakes — now personal */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.6, ease: EASE_OUT_QUINT }}
  className="flex flex-col items-center gap-3"
>
  <p className="text-stone-500 text-xs uppercase tracking-widest">
    The cost
  </p>
  <p className="text-2xl sm:text-3xl font-black text-[#f5f5f5] text-center leading-snug">
    I spent <span className="text-[#E8699A]">6 months</span> building an app my mom said she'd buy.
  </p>
  <p className="text-xl text-stone-400 mt-2">
    She never opened it.
  </p>
</motion.div>
```

**Option B: New micro-section after FAIL**

Add a 10-second slide that personalizes the pain:

```tsx
// section-02c-the-cost.tsx
export default function Section02TheCost() {
  return (
    <div className="max-w-xl text-center">
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="text-5xl sm:text-6xl font-black text-[#f5f5f5]"
      >
        $47,000
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-stone-400 mt-4"
      >
        spent building features customers "loved"
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg text-red-400 mt-2 italic"
      >
        Zero paid users.
      </motion.p>
    </div>
  )
}
```

### Impact
- Creates emotional investment
- Audience now has skin in the game
- Makes the "fix" feel like salvation, not just education

---

## High-Impact Change #4: Rewrite Action Ending for Emotional Payoff

### Problem
"Questions?" is a weak ending. After building tension and providing tools, the close deflates.

**Current (section-12-action.tsx:79):**
```tsx
<p className="text-5xl sm:text-6xl font-black text-[#f5f5f5]">Questions?</p>
```

### Rewrite
Add an emotional beat *before* "Questions?" that reinforces the core message:

```tsx
// section-12-action.tsx — replace Q&A indicator section

{/* Emotional close */}
<motion.div
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={defaultViewport}
  transition={{ delay: 0.9, type: 'spring', stiffness: 200, damping: 20 }}
  className="relative z-10 flex flex-col items-center gap-6"
>
  <div className="text-center">
    <p className="text-2xl sm:text-3xl font-bold text-stone-400">
      The truth hurts.
    </p>
    <p className="text-2xl sm:text-3xl font-bold text-[#f5f5f5] mt-2">
      But lies hurt more —
    </p>
    <p className="text-2xl sm:text-3xl font-black text-[#E8699A]">
      they just take longer.
    </p>
  </div>
  
  <div className="w-12 h-px bg-stone-700 my-4" />
  
  <p className="text-4xl sm:text-5xl font-black text-[#f5f5f5]">Questions?</p>
  <p className="text-[#78716c] text-base">The Mom Test — Rob Fitzpatrick</p>
</motion.div>
```

### Impact
- Lands the emotional core message
- Creates a memorable close
- "Questions?" now follows a moment of reflection

---

## High-Impact Change #5: Transform "3 Types of Bad Data" into Stories

### Problem
Section 04 presents bad data types as **categories** (Compliments, Fluff, Ideas) — educational but not memorable.

**Current (section-04-why-fooled.tsx:4-22):**
```tsx
const CARDS = [
  {
    icon: '👏',
    title: 'Compliments',
    example: '"That\'s so cool!"',
    description: 'Feels great, means nothing',
  },
  // ...
]
```

### Rewrite — Add Consequences
Make each card show the *cost* of believing the bad data:

```tsx
const CARDS = [
  {
    icon: '👏',
    title: 'Compliments',
    example: '"That\'s so cool!"',
    description: 'Feels great, means nothing',
    cost: '→ You build it. Nobody uses it.',  // NEW
  },
  {
    icon: '☁️',
    title: 'Fluff',
    example: '"I would definitely use that..."',
    description: 'Future tense = wishful thinking',
    cost: '→ You quit your job. They forget you exist.',  // NEW
  },
  {
    icon: '💡',
    title: 'Ideas',
    example: '"You should totally add..."',
    description: 'Their solution, not their problem',
    cost: '→ You add 10 features. They wanted something else.',  // NEW
  },
]
```

**Updated card render:**
```tsx
{CARDS.map((card) => (
  <motion.div
    key={card.title}
    variants={scaleSpring}
    className="flex-1 flex flex-col items-center text-center bg-white/5 rounded-2xl p-8"
  >
    <span className="text-4xl mb-4">{card.icon}</span>
    <h3 className="text-xl font-bold text-[#E8699A] mb-3">{card.title}</h3>
    <p className="italic text-[#78716c] mb-3 text-base">{card.example}</p>
    <p className="text-sm text-[#f5f5f5]/70 mb-4">{card.description}</p>
    {/* NEW: consequence line */}
    <p className="text-xs text-red-400/80 font-medium">{card.cost}</p>
  </motion.div>
))}
```

### Impact
- Abstract categories become concrete consequences
- Each card now tells a mini-story
- Audience feels the danger, not just understands it

---

## Implementation Priority

| # | Change | Effort | Impact | Priority |
|---|--------|--------|--------|----------|
| 1 | Rewrite subtext | 15 min | High | **P0** |
| 4 | Emotional ending | 20 min | High | **P0** |
| 5 | Add consequences to cards | 20 min | Medium-High | **P1** |
| 2 | Flow restructure OR add question | 30-45 min | High | **P1** |
| 3 | Add human stakes frame | 30 min | Medium-High | **P2** |

**Recommended order:** 1 → 4 → 5 → 2 → 3

---

## Before/After Summary

| Aspect | Before | After |
|--------|--------|-------|
| Subtext | Explains psychology | Implies emotion |
| Message timing | Before proof | After proof (earned) |
| Stakes | Abstract | Personal ($47K lost) |
| Ending | "Questions?" | Emotional beat → Questions |
| Bad data | Categories | Categories + consequences |

---

## Expected Score Improvement

| Dimension | Before | After | Delta |
|-----------|--------|-------|-------|
| Emotional Resonance | 6 | 8 | +2 |
| Show vs Tell | 6 | 8 | +2 |
| Engagement/Hooks | 7 | 8 | +1 |
| Memorability | 8 | 9 | +1 |
| **Overall** | **7** | **8.5** | **+1.5** |

---

## Files to Modify

1. `src/slides/section-02-the-fail.tsx` — subtext rewrites
2. `src/slides/section-04-why-fooled.tsx` — add consequence lines
3. `src/slides/section-12-action.tsx` — emotional ending
4. `src/slides/section-01-hook.tsx` — personal stakes (optional)
5. `src/components/scroll-container.tsx` — section order (if restructuring)

---

## Unresolved Questions

1. **Authenticity:** Should the "I spent 6 months" story be attributed to Rob Fitzpatrick or kept generic? Book has specific examples that could be used.

2. **Pacing:** Adding micro-sections (02b, 02c) increases runtime. Is 25-30 min acceptable, or should we merge content?

3. **Mobile:** Cost line in cards may truncate on mobile. Consider responsive hide or tooltip.
