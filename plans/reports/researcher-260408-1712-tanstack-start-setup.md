# TanStack Start SPA-Only Configuration Research Report

**Date:** 2026-04-08
**Focus:** Client-side SPA setup, scaffolding, routing, styling, and animation integration

---

## 1. Scaffolding & Project Setup

### Latest CLI Command (2026)
```bash
npx @tanstack/cli@latest create
```

**Key Notes:**
- Old command `pnpm create @tanstack/start@latest` is **deprecated**
- Current CLI: `@tanstack/cli v0.61.0+` (as of Mar 2026)
- Interactive prompts guide you through project name, package manager, and integrations (Tailwind, ESLint, auth, DB, etc.)
- Can also specify integrations directly: `npx @tanstack/cli@latest create my-app --integrations tanstack-query,clerk`

**Reference:** [TanStack CLI Overview](https://tanstack.com/cli/latest/docs/overview), [TanStack CLI Quick Start](https://tanstack.com/cli/latest/docs/quick-start)

---

## 2. SPA Mode Configuration (Client-Side Only)

### How SPA Mode Works
- **Disables SSR**: No server-side execution of loaders, beforeLoad, or route component rendering
- **Browser renders everything**: All JS downloads and executes client-side before content appears
- **Shell-only delivery**: Server delivers minimal HTML shell; client hydrates and renders routes
- **Server functions still work**: SPA pairs well with server functions and server routes for backend calls

### Configuration in `vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'

export default defineConfig({
  plugins: [
    tanstackStart({
      spa: {
        enabled: true,
        // Optional: customize shell path (defaults to '/')
        maskPath: '/app',
        // Optional: prerender options
        prerender: {
          outputPath: '/_shell.html',
          crawlLinks: false,
          retryCount: 0,
        },
      },
    }),
  ],
})
```

### Detecting Shell Rendering
```typescript
import { useRouter } from '@tanstack/react-router'

export function MyComponent() {
  const isShell = useRouter().isShell()
  if (isShell) {
    // Render loading skeleton during shell generation
    return <div>Loading app shell...</div>
  }
  return <YourContent />
}
```

**Reference:** [SPA Mode Guide](https://tanstack.com/start/latest/docs/framework/react/guide/spa-mode)

---

## 3. File-Based Routing Structure

### Directory Organization (`src/routes/`)

| File | Maps To | Purpose |
|------|---------|---------|
| `__root.tsx` | Global wrapper | Root route, HTML shell, global layout |
| `index.tsx` | `/` | Home page (exact match) |
| `about.tsx` | `/about` | Static page |
| `posts.tsx` | `/posts` | Layout route (grouping) |
| `posts/index.tsx` | `/posts` | Posts list (inside layout) |
| `posts/$postId.tsx` | `/posts/:postId` | Dynamic param |
| `$.tsx` | `/rest/*` | Catch-all/wildcard |
| `_sideNav.tsx` | Pathless layout | Shared sidebar without URL nesting |

### File Naming Conventions
- `$` = dynamic path parameter (e.g., `$id.tsx` → `/:id`)
- `_` = pathless route (layout without URL segment)
- `__root.tsx` = mandatory root route (always rendered)
- Nested directories = URL nesting (directory name becomes path segment unless prefixed with `_`)

### Auto-Generated Route Tree
TanStack generates `routeTree.gen.ts` automatically with type-safe route utilities.

**Reference:** [File-Based Routing Guide](https://tanstack.com/router/latest/docs/routing/file-based-routing), [Routing Conventions](https://tanstack.com/start/latest/docs/framework/react/guide/routing)

---

## 4. Root Route Structure (`__root.tsx`)

```typescript
import { createRootRoute, Outlet, RootSearchSchema } from '@tanstack/react-router'
import { HeadContent, Scripts } from '@tanstack/react-start'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'My SPA' },
    ],
    links: [
      // CSS imports go here (see Tailwind section)
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-white">
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
```

**Key Components:**
- `<HeadContent />` - Renders meta/title tags
- `<Outlet />` - Renders matched child route
- `<Scripts />` - Loads client-side JS bundle

---

## 5. Tailwind CSS v4 Integration

### Setup Steps

**1. Install Dependencies**
```bash
npm install tailwindcss @tailwindcss/vite
```

**2. Update `vite.config.ts`**
```typescript
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import { viteReact } from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart({
      spa: { enabled: true },
    }),
    viteReact(),
    tsConfigPaths(),
  ],
})
```

**3. Create CSS File (`src/styles/app.css`)**
```css
@import 'tailwindcss' source('../');
```

**4. Import in `src/routes/__root.tsx`**
```typescript
/// <reference types="vite/client" />
import appCss from '../styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: 'stylesheet', href: appCss }],
    // ... other meta
  }),
  // ...
})
```

### Key v4 Differences from v3
- No `tailwind.config.js` needed
- Configuration via CSS `@import` directive
- `@tailwindcss/vite` plugin handles compilation
- Query param `?url` required for Vite integration

**Known Issue:** Tailwind v4.0 beta had CSS file handling issues in production node-server builds (may be fixed in stable release).

**Reference:** [Tailwind CSS + TanStack Start](https://tailwindcss.com/docs/installation/framework-guides/tanstack-start), [TanStack Start Tailwind Guide](https://tanstack.com/start/latest/docs/framework/react/guide/tailwind-integration)

---

## 6. Framer Motion Integration

### Installation
```bash
npm install framer-motion
```

### Basic Pattern with AnimatePresence

```typescript
import { motion, AnimatePresence } from 'framer-motion'
import { Outlet, useRouter } from '@tanstack/react-router'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

export function AnimatedOutlet() {
  const router = useRouter()
  const pathname = router.state.location.pathname

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  )
}
```

### Reusable Animation Variants
```typescript
export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
}

export const fadeSlide = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
}
```

### Compatible Versions
- `@tanstack/react-router` ≥ 1.0.0
- `framer-motion` ≥ 11.0.0
- `react` ≥ 18.0.0

**Known Issues:**
- Exit animations may not trigger properly in standard setup
- Workaround: Capture old DOM node, re-insert as motion.div, animate while new content renders
- HMR code updates can trigger "Hydration failed" errors during development

**Reference:** [Framer Motion Integration Guide](https://tanstack.com/router/latest/docs/framework/react/how-to/integrate-framer-motion), [StackBlitz Example](https://stackblitz.com/github/tanstack/router/tree/main/examples/react/with-framer-motion)

---

## 7. Known Issues & Gotchas

### SPA Mode Specific

| Issue | Impact | Mitigation |
|-------|--------|-----------|
| **Flash of unstyled content (FOUC)** | After hydration, router navigates and isShell() returns false | Render skeleton/loader before hydration completes |
| **Slower initial load** | All JS must download/execute before content appears | Lazy-load route chunks, preload critical JS |
| **Poor SEO/crawler support** | Search bots may not index SPA without JS execution | Use prerendering or selective SSR for critical routes |
| **Bun + Vite 7 hang** | App stuck on loading skeleton, never hydrates | Avoid spa config with Bun; use Node.js or upgrade Vite |
| **HMR hydration mismatch** | Code updates trigger "server HTML didn't match client" | Hard refresh or clear browser cache during dev |
| **Unnecessary SSR code in build** | Server bundle contains unused SSR code | Issue #5059 — low priority, doesn't affect runtime |
| **Global SSR disable hangs app** | Setting `defaultSsr: false` on router causes loading loop | Avoid global disable; use route-level config instead |

### SPA Limitations
- **No server-side rendering** = slower first paint (JS execution required)
- **No static pre-rendering** (unless explicitly configured with `prerender` option)
- **Route loaders run on client** = delayed data fetching (consider server functions)
- **Date/browser-only APIs** may cause hydration errors if accessed in components during server checks

### Framer Motion Caveats
- Exit animations require careful setup with AnimatePresence
- May conflict with SSR hydration (irrelevant in full SPA, but important if mixing SSR routes)
- Link-triggered route changes may skip animations if not keyed by pathname

---

## 8. Project Structure Convention (Recommended)

```
my-app/
├── src/
│   ├── routes/
│   │   ├── __root.tsx          # Root layout, HTML shell
│   │   ├── index.tsx           # Home page /
│   │   ├── about.tsx           # /about
│   │   ├── posts.tsx           # /posts layout
│   │   ├── posts/
│   │   │   ├── index.tsx       # /posts
│   │   │   └── $postId.tsx     # /posts/:postId
│   │   └── $.tsx               # Catch-all 404
│   ├── components/             # Reusable components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── animations/         # Framer Motion variants
│   │   │   └── pageVariants.ts
│   │   └── ui/                 # Tailwind UI components
│   ├── styles/
│   │   └── app.css            # Tailwind config
│   ├── lib/                    # Utilities
│   │   └── api.ts             # Server function calls
│   ├── hooks/                  # Custom React hooks
│   └── main.tsx               # Entry point (Vite)
├── vite.config.ts             # SPA + Tailwind + plugins
├── tsconfig.json
├── package.json
└── routeTree.gen.ts           # Auto-generated route types
```

---

## 9. Implementation Checklist

- [ ] Run `npx @tanstack/cli@latest create my-app`
- [ ] Enable SPA mode in `vite.config.ts`: `spa: { enabled: true }`
- [ ] Install Tailwind: `npm install tailwindcss @tailwindcss/vite`
- [ ] Configure `@tailwindcss/vite` plugin in vite.config.ts
- [ ] Create `src/styles/app.css` with `@import 'tailwindcss'`
- [ ] Import CSS in `__root.tsx` with `?url` query
- [ ] Install Framer Motion: `npm install framer-motion`
- [ ] Create animated outlet wrapper with `AnimatePresence`
- [ ] Set up route structure in `src/routes/`
- [ ] Test SPA hydration: Check `isShell()` returns false after initial load
- [ ] Run `npm run dev` and verify no console errors
- [ ] Test route transitions with Framer Motion animations

---

## Research Metadata

**Sources Consulted:**
- [TanStack Start SPA Mode Docs](https://tanstack.com/start/latest/docs/framework/react/guide/spa-mode)
- [TanStack CLI Overview](https://tanstack.com/cli/latest/docs/overview)
- [TanStack Router File-Based Routing](https://tanstack.com/router/latest/docs/routing/file-based-routing)
- [TanStack Start Routing Guide](https://tanstack.com/start/latest/docs/framework/react/guide/routing)
- [Tailwind CSS + TanStack Start](https://tailwindcss.com/docs/installation/framework-guides/tanstack-start)
- [TanStack Start Tailwind Integration](https://tanstack.com/start/latest/docs/framework/react/guide/tailwind-integration)
- [Framer Motion Integration Guide](https://tanstack.com/router/latest/docs/framework/react/how-to/integrate-framer-motion)
- [GitHub Issue #5059 - SPA Mode Builds](https://github.com/TanStack/router/issues/5059)
- [GitHub Discussion #4616 - Disabling SSR](https://github.com/TanStack/router/discussions/4616)
- [LogRocket: Selective SSR in TanStack Start](https://blog.logrocket.com/selective-ssr-tanstack-start/)

**Knowledge Cutoff:** February 2025 (supplemented with April 2026 web search for latest CLI/tooling)

---

## Unresolved Questions

1. **Prerendering behavior in SPA mode**: Docs mention `prerender` option but unclear if/how to prerender specific routes for SEO without full SSR
2. **Server functions in SPA**: How to structure and call server functions from SPA components? (Brief mention but no detailed example)
3. **Hydration error debugging**: No clear debugging strategy for FOUC or hydration mismatches during development
4. **Framer Motion exit animations**: Documented workaround mentions capturing DOM nodes but lacks concrete example code
5. **Selective SSR with SPA**: Can you mix SPA mode with selective SSR for specific routes? (Docs separate these features)

