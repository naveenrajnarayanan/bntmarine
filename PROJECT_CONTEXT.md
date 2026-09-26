# BNT Marine — AI Project Context (single-file brief)

> **How to use:** paste this entire file at the top of any ChatGPT / Claude / Copilot conversation before asking for code. It contains everything needed to continue building this exact codebase without re-exploring it.

---

## 1. What this project is

`bnt-marine-v2` — a **dark, editorial, precision-engineering marketing website for "BNT Marine"**, a marine craft / boat manufacturer.

**The design language** is the single most important thing to preserve:

- Near-black canvas (`#050505`), generous negative space, hairline borders.
- Large, tightly-tracked (negative letter-spacing) display type — quiet luxury, not "techy".
- Everything is *slow* and *precise*: 1.2s opacity fades, `cubic-bezier(0.22, 1, 0.36, 1)`, no bounce, no playful motion.
- Text is the hero. Media is a scrimmed background layer, never a competing focal point.
- A **marine blue-grey** (`#6f8fa3`) is the only accent colour.
- Uppercase, wide-tracked micro-labels ("eyebrows") precede every heading.

**Never** introduce: light mode, gradients as decoration, drop shadows on cards, emoji, rounded-2xl blobs, purple/indigo SaaS palettes, stock-photo-with-rounded-corners, Tailwind's default blue/gray scale, or CSS-in-JS libraries.

---

## 2. Stack (exact versions — do not substitute)

| Package | Version | Role |
|---|---|---|
| `next` | **16.3.6** | Framework (App Router) |
| `react` / `react-dom` | **19.2.8** | Runtime |
| `typescript` | ^5 | Strict mode |
| `tailwindcss` | **^4** | Utility CSS, `@theme inline` config (CSS-first, **no** `tailwind.config.js`) |
| `eslint` / `eslint-config-next` | ^9 / 16.3.6 | `npm run lint` = `eslint` |
| `lucide-react` | ^1.48.0 | Icons — always `strokeWidth={1.25}` |
| `gsap` | ^3.15.0 | Animation (installed, not yet used) |
| `lenis` | ^1.3.26 | Smooth scroll (installed, not yet used) |
| `three`, `@react-three/fiber`, `@react-three/drei` | ^0.186.1 / ^9.8.1 / ^10.7.9 | 3D (installed, not yet used) |
| `postcss.config.mjs` | — | Loads `@tailwindcss/postcss` |

Path alias: `@/*` → `./*` (root-relative, **not** `src/`).

### ⚠️ Next.js 16 breaking changes — this is NOT the Next.js in your training data

**Read `node_modules/next/dist/docs/` before writing any page, layout, route handler, or metadata code.** Heed the deprecation notices. Known-critical for this repo:

1. **Globally-typed route props.** `LayoutProps<"/">`, `PageProps<"/about">` etc. are **global ambient types** generated into `.next/types`. Do **not** import them and do **not** annotate props by hand. See `app/layout.tsx` line 27: `export default function RootLayout({ children }: LayoutProps<"/">)`.
2. **`<video>` / media attributes are stricter.** HeroVideo uses `disablePictureInPicture`, `disableRemotePlayback`, `controls={false}`, `tabIndex={-1}`.
3. `next/font/google` is used for Geist + Geist Mono and exposed as CSS variables `--font-geist-sans` / `--font-geist-mono`.
4. Do not add `"use client"` to server components. Only `Hero`, `SiteHeader`, `NavLinks`, `HeroVideo` are client components today.
5. `next.config.ts` is currently empty. Add options there, not elsewhere.
6. `AGENTS.md` / `CLAUDE.md` contain a `<!-- BEGIN:nextjs-agent-rules -->` block that `next dev` **re-creates automatically**. Never hand-delete it, and commit it alongside your work.

---

## 3. Directory map (complete — this is the whole app)

```
app/
  layout.tsx                    Root layout: fonts, metadata, viewport, body classes
  page.tsx                      Home: skip-link + <Hero/> + <Statement/>
  globals.css                   @import tailwind + tokens; @theme inline; @layer base; @utility
  about/page.tsx                -> <PlaceholderPage title="About"/>
  products/page.tsx             -> <PlaceholderPage title="Products"/>
  gallery/page.tsx              -> <PlaceholderPage title="Gallery"/>
  contact/page.tsx              -> <PlaceholderPage title="Contact"/>

components/
  hero/Hero.tsx                 client; orchestrates header reveal + video + scroll cue
  hero/HeroVideo.tsx            client; manual 16:9 cover-fit, ResizeObserver, autoplay
  hero/ScrollIndicator.tsx      server; links to #statement
  hero/hero.css                 .hero, .hero-media, .hero-scroll (+ reduced-motion)
  navigation/SiteHeader.tsx     client; fixed, mobile panel, Esc-to-close, scroll lock
  navigation/NavLinks.tsx       client; active state via usePathname, stacked variant
  navigation/header.css         .site-header, .site-wordmark, .nav-link, .nav-menu-panel
  sections/Statement.tsx        server; editorial intro on a 12-col grid
  sections/PlaceholderPage.tsx  server; shared shell for the 4 stub pages
  system/Container.tsx          PageShell + PageGrid polymorphic primitives
  system/Text.tsx               Text polymorphic primitive (variant + tone)

lib/
  design-system/index.ts        barrel re-export
  design-system/tokens.ts       TS mirror of the CSS tokens (breakpoints, spacing, grid, color, typography)
  design-system/classes.ts      bg / fg / border / typeClass string maps
  design-system/cn.ts           dependency-free className joiner
  site/nav.ts                   navItems array (single source of truth for nav)

styles/tokens.css               ALL design tokens: palette, semantic colors, spacing, grid, fluid type
public/videos/bnt-hero.mp4      hero background video
```

---

## 4. The design system — how to use it correctly

### 4.1 Two-layer token architecture (never bypass it)

1. **`styles/tokens.css`** — raw CSS custom properties, the single source of truth.
   - `--palette-*` primitives: **never referenced in components.**
   - semantic vars: `--background-primary`, `--text-secondary`, `--border-subtle`, `--brand-primary`, `--space-*`, `--grid-columns`, `--page-margin`, `--section-spacing`, `--font-*`.
2. **`app/globals.css` `@theme inline`** — re-exposes those vars to Tailwind so you get utilities like `text-text-secondary`, `space-space-24`, `text-h2`, `border-border-subtle`.

So: **use the Tailwind utility, not the raw var, in components.** `className="mt-space-24"` ✅ / `style={{ marginTop: "var(--space-24)" }}` ❌

### 4.2 Available utility vocabulary (use these names only)

- **Spacing:** `space-space-{4,8,12,16,24,32,48,64,80,96,128,160}` → `p-space-32`, `mt-space-48`, `gap-space-24`. There is no bare `p-4`; **off-scale values are forbidden.**
- **Colour:** `bg-background-primary|secondary`, `bg-surface-primary|elevated`, `text-text-primary|secondary|tertiary|muted|inverse`, `text-brand-primary`, `border-border-subtle|default|strong`, `bg-overlay-photo`.
- **Type:** `text-display-xl|display-large|h1|h2|h3|h4|body-large|body|body-small|caption|eyebrow|navigation|cta|product-meta|spec-number` (line-height, tracking and weight come free from the theme).
- **Layout:** `page-shell`, `page-grid`, `section-space`, `media-scrim`, `media-scrim-strong`, `media-scrim-bottom`, `type-eyebrow`, `type-spec-number`, `type-product-meta`.
- **Breakpoints:** `md` = 48rem, `lg` = 64rem, `content` = 90rem. (`tablet` 768 / `desktop` 1024 / `content` 1440 in `tokens.ts`.)

### 4.3 Grid model

`page-grid` = max 1440px, auto-centred, responsive side margins, **4 / 8 / 12 columns** at mobile / md / lg.
Span with `col-span-4 md:col-span-6 lg:col-span-7` and offset with `lg:col-start-2`. Full-bleed moments use `page-shell` (no grid) or a deliberately full-width wrapper.

### 4.4 Primitives — always reach for these before writing markup

```tsx
import { PageGrid, PageShell } from "@/components/system/Container";
import { Text } from "@/components/system/Text";

<Text variant="h2" tone="secondary">Heading</Text>          // element inferred from variant
<Text as="h1" variant="h1" className="mt-space-24">…</Text>    // element overridden
<PageShell className="pt-space-128">…</PageShell>
<PageGrid as="section" id="statement">…</PageGrid>
```

- `Text` valid variants: `display-xl, display-large, h1, h2, h3, h4, body-large, body, body-small, caption, eyebrow, navigation, cta, product-meta, spec-number`.
- `Text` valid tones: `primary, secondary, tertiary, muted, brand, inverse`. `caption`/`eyebrow` default to `secondary`; everything else defaults to `primary`.
- Default elements: `h1–h4` → real headings; everything else → `p`; `navigation/cta/product-meta/spec-number` → `span`.
- Both primitives are **polymorphic and server-safe**. `cn()` is a hand-rolled filter-and-join — **do not import `clsx`/`tailwind-merge`.**

### 4.5 Colour values (for reference)

```
black #050505 · near-black #080808 · graphite #0a0a0a · elevated #111111
soft-white #f5f5f7 · white #ffffff
marine #6f8fa3  (hover #7e9cb0, active #5e7d91)   ← the only accent
success #7d9a7c · error #c46b6b · warning #c4a56a
text-secondary 68% · tertiary 45% · muted 28% white
borders 8% / 12% / 18% white
```

### 4.6 Motion rules

- Easing constant: `cubic-bezier(0.22, 1, 0.36, 1)`. Durations: micro 0.4s, reveal 0.7s, media 1.2s.
- Reveal pattern is **class-toggle + CSS transition**, not JS interpolation: `is-visible`, `is-revealed`, `is-open`, `is-active`, `is-static`.
- **`prefers-reduced-motion: reduce` must be honoured in every animated component**, with a JS guard for anything that gates rendering (`Hero` skips the rAF reveal when reduced motion is on).
- `html { scroll-behavior: smooth }` only under `no-preference`.
- Focus ring is global: `outline: 1px solid var(--interactive-focus); outline-offset: 3px` — never remove it.

---

## 5. Conventions every file must follow

1. **`"use client"` only at the top of files that need it** — first line, above imports.
2. **Server components by default.** Reach for `"use client"` only for hooks, event handlers, or browser APIs.
3. **Imports:** `@/`-absolute, external → internal → component order. No barrel-importing components; import the concrete file (`@/lib/design-system/classes`, not the index) — the barrel exists for consumers outside the app.
4. **Props:** `type X = { … }` (not `interface`), one type per file, named `XProps`.
5. **Refs** named `containerRef` / `videoRef`; mutable bookkeeping in a `…Ref`, never state.
6. **`className` merging always through `cn()`.**
7. **Accessibility is non-negotiable:** semantic landmarks, one `h1` per page, `aria-label` on every `nav` and icon-only control, `aria-current="page"` on active links, `aria-expanded` + `aria-controls` on disclosures, `alt`/`aria-hidden` on media, visible focus states.
8. **Content lives in the component** while a page is a placeholder; only promote to `lib/site/*.ts` when 2+ pages consume it (`navItems` is the precedent).
9. **CSS:** co-locate a component's CSS next to it (`hero.css`, `header.css`) and import it from the `.tsx`. Global reset/theme/tokens/utilities stay in `app/globals.css`. Use CSS custom properties from `tokens.css` inside component CSS.
10. **Comments:** only where the *why* is non-obvious (e.g. the autoplay-blocked catch). No narrating comments.
11. **Assets:** `/public/...`, referenced as `/videos/bnt-hero.mp4`. Keep filenames kebab-case and prefixed (`bnt-`).

---

## 6. Copy patterns already in use

```
eyebrow : "BNT Marine"                      // uppercase via type-eyebrow
h2      : "Precision-built marine craft, considered as a complete system."
body    : "Structure, performance, and finish are treated as one discipline."
cta     : "Scroll"                          // with an ArrowDown icon
nav     : Home · About · Products · Gallery · Contact
```

Voice: declarative, short sentences, no exclamation marks, no marketing superlatives, no jargon. "Considered", "precision", "system", "discipline".

---

## 7. Completed / not yet built

**Done:** design tokens + Tailwind theme, `Text`/`PageShell`/`PageGrid`, header with working mobile panel, hero video with cover-fit + reveal choreography, scroll indicator, statement section, 4 stub routes, `lib/site/nav.ts`.

**Not built (likely next asks):** About/Products/Gallery/Contact real content, footer, product/spec data + listing, gallery lightbox, contact form + server action, Lenis smooth scroll, GSAP scroll-driven reveals, three.js hero, `loading.tsx` / `error.tsx` / `not-found.tsx`, sitemap/robots, OG image, real fonts beyond Geist.

---

## 8. Definition of done for any change

```bash
npm run lint     # must be clean
npm run dev      # must render with no console errors
```

Before calling it done:

- [ ] Only tokens/utilities/primitives from §4 are used — no one-off px, no arbitrary Tailwind values like `text-[15px]`.
- [ ] Spacing is on the 4px scale.
- [ ] Type is a `Text` variant, never a raw `text-[…]`/`leading-[…]`.
- [ ] Dark canvas and marine accent intact; no new colours.
- [ ] Responsive at 375px, 768px, 1024px, 1440px.
- [ ] `prefers-reduced-motion` handled for anything that moves.
- [ ] Keyboard reachable, focus visible, ARIA correct.
- [ ] Existing files edited in place — don't rewrite whole files for small changes.
- [ ] The `nextjs-agent-rules` block in `AGENTS.md` is left intact and committed with your work.

---

## 9. Boilerplate to start from (copy-paste skeletons)

**New page (real content, not a placeholder):**
```tsx
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { PageGrid, PageShell } from "@/components/system/Container";
import { Text } from "@/components/system/Text";

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="section-space">
        <PageShell className="pt-space-128">
          <Text variant="eyebrow">BNT Marine</Text>
          <Text as="h1" variant="h1" className="mt-space-24">Products</Text>
        </PageShell>
        <PageGrid as="section" className="mt-space-96">…</PageGrid>
      </main>
    </>
  );
}
```

**New client component with reveal:**
```tsx
"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/design-system/cn";
import "./thing.css";

export function Thing() {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }
    const frame = window.requestAnimationFrame(() => setRevealed(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);
  return <div className={cn("thing", revealed && "is-revealed")} />;
}
```

**Companion CSS (co-located, token-driven):**
```css
.thing { opacity: 0; transform: translateY(8px); transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1); }
.thing.is-revealed { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .thing { transition: none; transform: none; }
}
```
