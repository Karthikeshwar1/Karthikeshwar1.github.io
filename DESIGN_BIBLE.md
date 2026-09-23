# Design Bible — Karthikeshwar.github.io

*A complete record of the design thinking, options explored, user feedback, and final decisions for the personal website redesign.*

---

## 1. Creative Direction & North Star

### The Brief

The site is a **living archive** — not a portfolio performing for recruiters, not a blog chasing traffic. It houses long-form essays, project documentation, book reflections, teaching materials, creative work (acrylic painting, piano), and Kannada-language poetry. The range — AI manifestos to Kannada verse to acrylic paintings — *is* the differentiator.

### North Star: "The Quiet Gallery" → "The Focused Plinth"

The design direction evolved through two named concepts:

- **"The Quiet Gallery"** — The incumbent philosophy. A highly minimal, restrained environment that acts as a silent backdrop for the content. Anchored by the classic Calendas Plus serif font, it prioritizes reading experience over decoration. Gets out of the way entirely.
- **"The Focused Plinth"** — The selected evolution. Takes the quiet gallery and gives it a single, confident focal point: one perfectly framed piece of work (the user's own painting) presented like an artwork on a museum plinth. The entire homepage is devoted to this single moment of presence.

> **Key Insight**: The site is not selling to any particular audience. Best design comes when it's not selling to anyone particular. No persona, just the person.

---

## 2. Homepage Comp Exploration

Three compositional directions were generated from the Focused Plinth surface brief. All shared the same core constraints: high-contrast monochrome, pure white paper-like ground, Calendas Plus serif type, full viewport dedication to a single focal element.

### Comp 1 — "The Poem Plinth"

![Comp 1: Poem centered on white ground, navigation at bottom](file:///C:/Users/karth/.gemini/antigravity/brain/f03fae28-df96-4e50-8e76-4c70e4df5fb4/comp_1.jpg)

**Description**: A stark, ultra-minimal single-focus exhibition. Full viewport dedicated to one perfectly centered poem snippet with a subtle horizontal navigation menu placed *below*. No clutter, no scroll-to-discover on the home view.

**Disposition**: Not selected.

---

### Comp 2 — "The Art Plinth" ✅ SELECTED

![Comp 2: Framed artwork with navigation at top](file:///C:/Users/karth/.gemini/antigravity/brain/f03fae28-df96-4e50-8e76-4c70e4df5fb4/comp_2.jpg)

**Description**: A large, starkly framed art thumbnail taking up significant vertical space, with the subtle horizontal navigation menu placed at the *very top* of the viewport. Caption below the artwork. Clean scroll indicator.

**Disposition**: Selected by the user.

---

### Comp 3 — "The Vertical Nav Poem"

![Comp 3: Poem left-aligned with vertical navigation on far left](file:///C:/Users/karth/.gemini/antigravity/brain/f03fae28-df96-4e50-8e76-4c70e4df5fb4/comp_3.jpg)

**Description**: A short poem or text excerpt aligned to the left edge of an invisible central column, with the navigation menu sitting vertically rotated on the far left edge of the screen.

**Disposition**: Not selected.

---

## 3. User Feedback & Design Decisions (Verbatim)

### On the Comp Selection

The user's verbatim response when asked to choose between the three comps:

> *"art piece (my own art i have in musings page), not poem but something like a poem (like the words i have on musings page) and about me - in poetic words in short, and then where best navigation? top or below?"*

### Key Decisions Extracted from Feedback

| Decision | User Direction | Implementation |
|---|---|---|
| **Hero content** | "art piece (my own art i have in musings page)" | Used the user's *Alegalu (Waves)* acrylic painting from `musings/images/Alegalhu.jpg` |
| **Caption style** | "not poem but something like a poem (like the words i have on musings page)" | Used the actual Kannada verse + English translation from the musings page |
| **Bio text** | "about me - in poetic words in short" | "Living archive of essays, algorithmic experiments, and creative work." |
| **Navigation** | "where best navigation? top or below?" → Comp 2 selected (nav at top) | Navigation bar anchored to the top of the viewport |
| **Nav labels** | User's real pages, not the comp's placeholder labels | Changed from `HOME | WORKS | BIOGRAPHY | SHOP | CONTACT` → `Blog / Projects / Teaching / Musings` |

### On Technology & Architecture

> *"no need to stick to jekyll or whatever. no restrictions. just use whatever's best and just whats required, nothing too fancy. def not react."*

| Decision | User Direction |
|---|---|
| **Ditch Jekyll** | No attachment to the Ruby gem system |
| **No React** | Explicitly ruled out React and heavy SPA frameworks |
| **Stack chosen** | Astro (zero-JS static mode) — outputs pure HTML/CSS, Markdown-native |
| **Simplicity** | "nothing too fancy" — no unnecessary build complexity |

### On Preview Quality

> *"the preview wasn't good enough when i just opened the index.html in the browser, do i need to run any server? do you need to do a better job at the preview? because i couldn't even see the preview before we do the full implementation."*

**Root causes identified**: Broken font paths (CSS referenced `.woff2` files that didn't exist; only `.ttf` was available), artificial 1024×1024 test geometry, encoding corruption, and browser `file:///` CORS restrictions on local font loading.

**Resolution**: Rebuilt the HTML with correct `@font-face` pointing to the actual `.ttf` file, proper semantic layout, and generated high-resolution Puppeteer screenshots for verification before user approval.

---

## 4. Approved Visual Language

### Final Approved Homepage

![Final approved desktop design](file:///C:/Users/karth/.gemini/antigravity/brain/f03fae28-df96-4e50-8e76-4c70e4df5fb4/desktop_preview.png)

### Content Hierarchy (Top → Bottom)

1. **Header Bar**: Brand name `KARTHIKESHWAR` (left) + navigation links (right), separated by a subtle rule
2. **Plinth Frame**: White mat border with layered shadow, containing the artwork image
3. **Caption Stack**: Title in small-caps → Kannada verse → English poem → Bio tagline
4. **Footer Bar**: Copyright (left) + external links (right), separated by a subtle rule

### The User's Content on the Homepage

- **Artwork**: *Alegalu (Waves)* — the user's own acrylic painting (`musings/images/Alegalhu.jpg`)
- **Kannada verse**: ಅಲೆಗಳು; ನಾನಿಲ್ಲಿ ನಡಿಯುವಾಗ, ಸುಮ್ಮನೆ.
- **English translation**: "Waves roll; While I stroll, aimlessly."
- **Tagline**: Living archive of essays, algorithmic experiments, and creative work.

---

## 5. Design Tokens (CSS Custom Properties)

```css
:root {
  --bg: #faf9f6;           /* Warm paper ground */
  --paper: #ffffff;         /* Pure white for plinth mat */
  --ink: #181716;           /* Primary text, near-black */
  --ink-secondary: #5a5753; /* Secondary text, warm gray */
  --ink-tertiary: #8c8882;  /* Tertiary text, muted */
  --border-subtle: #e6e3dc; /* Nav separators, rules */
  --border-mat: #ebe8e1;    /* Plinth frame border */
  --accent: #2c2b29;        /* Accent dark */
  --shadow-plinth: 0 20px 48px -16px rgba(24, 23, 22, 0.12),
                   0 4px 12px -2px rgba(24, 23, 22, 0.04);
}
```

### Color Philosophy

The palette shifted from the predecessor's pure white (`#ffffff`) background and Minima blue links to a warmer, more intentional set:

| Role | Old (Jekyll/Minima) | New (Focused Plinth) | Why |
|---|---|---|---|
| Background | `#ffffff` (clinical white) | `#faf9f6` (warm paper) | Feels like real paper, not a screen |
| Primary text | `#1a1a1a` | `#181716` (warmer near-black) | Ink-like, less harsh |
| Secondary text | `#777777` (neutral gray) | `#5a5753` (warm gray) | Harmonizes with paper tone |
| Links | `#2a7ae2` (Minima blue) | No blue at all — uses `--ink-secondary` | Monochrome consistency; links distinguished by underline animation, not color |
| Borders | `#e8e8e8` (cold gray) | `#e6e3dc` (warm beige) | Matches the paper warmth |

---

## 6. Typography

### Font

**Calendas Plus** — a traditional academic serif. The only custom font in the project. Loaded from `assets/fonts/calendas_plus-webfont.ttf`.

```css
font-family: "Calendas Plus", "Cormorant Garamond", Georgia, "Times New Roman", serif;
```

The fallback chain moves through quality serifs to ensure the manuscript feel is preserved even without the custom font.

### Type Scale

| Element | Size | Weight | Tracking | Transform | Color |
|---|---|---|---|---|---|
| Brand name | `1.05rem` | 400 | `0.08em` | `uppercase` | `--ink` |
| Nav links | `0.8rem` | 400 | `0.16em` | `uppercase` | `--ink-secondary` |
| Artwork title | `0.8rem` | 400 | `0.18em` | `uppercase` | `--ink` |
| Poetry text | `1.05rem` | 400 | — | *italic* | `--ink-secondary` |
| Kannada verse | `0.95rem` | 400 | `0.02em` | — | `--ink-tertiary` |
| Bio / tagline | `0.88rem` | 400 | `0.04em` | — | `--ink-tertiary` |
| Footer text | `0.78rem` | 400 | `0.08em` | — | `--ink-tertiary` |

### Tracking Philosophy

Wide letter-spacing (`0.15em`–`0.18em`) is used only on small-caps and uppercase labels to create a refined, editorial feeling. Body text uses natural spacing.

---

## 7. Layout Architecture

### Homepage — The Focused Plinth

The page is a single full-viewport flex column: `header → stage → footer`, with the stage section expanding to fill available space and centering the artwork vertically.

```
┌─────────────────────────────────────────┐
│  KARTHIKESHWAR          Blog / Projects │ ← Header (max-width: 1120px)
│─────────────────────────────────────────│ ← 1px border-bottom
│                                         │
│          ┌─────────────────┐            │
│          │ ░░░░░░░░░░░░░░░ │            │ ← Plinth frame (max-width: 680px)
│          │ ░░░ ARTWORK ░░░ │            │    18px white mat padding
│          │ ░░░░░░░░░░░░░░░ │            │    Layered box-shadow
│          └─────────────────┘            │
│                                         │
│        ALEGALU (WAVES) — ACRYLIC        │ ← Caption stack
│     ಅಲೆಗಳು; ನಾನಿಲ್ಲಿ ನಡಿಯುವಾಗ, ಸುಮ್ಮನೆ.   │
│    "Waves roll; While I stroll..."      │
│      Living archive of essays...        │
│                                         │
│─────────────────────────────────────────│ ← 1px border-top
│  © 2026 Karthikeshwar    GitHub LinkedIn│ ← Footer
└─────────────────────────────────────────┘
```

### Key Measurements

| Element | Max Width | Padding |
|---|---|---|
| Header / Footer | `1120px` | — |
| Stage (main) | `980px` | `2rem 0` |
| Plinth frame | `680px` | `18px` (mat border) |
| Caption block | `620px` | — |
| Artwork image | `100%` of plinth | `max-height: 52vh` |

---

## 8. Elevation & Shadow

The design uses shadow sparingly. Only the plinth frame has a permanent shadow:

```css
/* Resting state */
box-shadow: 0 20px 48px -16px rgba(24, 23, 22, 0.12),
            0 4px 12px -2px rgba(24, 23, 22, 0.04);

/* Hover state — lifts 4px */
transform: translateY(-4px);
box-shadow: 0 28px 56px -16px rgba(24, 23, 22, 0.16),
            0 8px 16px -4px rgba(24, 23, 22, 0.05);
```

Everything else is flat. Rules (header/footer borders) use `1px solid rgba(230, 227, 220, 0.6)` — translucent warm gray.

---

## 9. Motion Specification

All animations respect `prefers-reduced-motion`. When motion is allowed:

| Element | Animation | Duration | Easing | Delay |
|---|---|---|---|---|
| Header | `fadeIn` (6px translateY → 0) | 0.8s | `ease-out` | 0s |
| Plinth frame | `plinthIn` (scale 0.97 + 12px translateY → 1.0 + 0) | 1.0s | `cubic-bezier(0.16, 1, 0.3, 1)` | 0.1s |
| Caption | `fadeIn` | 1.0s | `ease-out` | 0.3s |
| Footer | `fadeIn` | 0.8s | `ease-out` | 0.4s |

### Interaction Motion

| Element | Trigger | Effect | Duration | Easing |
|---|---|---|---|---|
| Plinth frame | Hover | `translateY(-4px)` + deeper shadow | 0.6s | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Nav links | Hover | Underline grows left→right (`scaleX(0→1)`) | 0.3s | `cubic-bezier(0.2, 0, 0, 1)` |
| Brand name | Hover | `opacity: 0.7` | 0.3s | `ease` |
| All links | Hover | Color shifts from `--ink-secondary` → `--ink` | 0.3s | `ease` |

---

## 10. Responsive Strategy

### Breakpoint: 768px

| Aspect | Desktop (> 768px) | Mobile (≤ 768px) |
|---|---|---|
| Header layout | Horizontal: brand left, nav right | Stacked: brand centered, nav wrapped below |
| Nav separators (`/`) | Visible | Hidden |
| Body padding | `2.25rem 2rem` | `1.5rem 1.25rem` |
| Plinth frame padding | `18px` | `12px` |
| Artwork max-height | `52vh` | `42vh` |
| Footer layout | Horizontal | Stacked, centered |

---

## 11. Product Principles

These are the non-negotiable principles that should guide all future design decisions:

1. **Archive over performance** — The site is a living record, not a conversion funnel. Longevity over trends.
2. **Soul over polish** — The imperfect, human quality of the writing and work is a feature. Don't sand it away.
3. **Structure serves retrieval** — Organization exists so content can be found. Year-folders, search, curated lists are tools, not decoration.
4. **Range is the identity** — AI essays, Kannada poetry, acrylic paintings, game controller apps, book reflections. The breadth is the point.
5. **Phased craft** — Ship in deliberate phases. Nail each one before moving on.

---

## 12. What Was Rejected & Why

| Rejected Option | Why |
|---|---|
| **Comp 1 (Poem Plinth)** | User wanted their own art piece as the focal point, not a poem |
| **Comp 3 (Vertical Nav)** | Too experimental; user gravitated to conventional top navigation |
| **Nav labels: HOME, WORKS, BIOGRAPHY, SHOP, CONTACT** | These were comp placeholders; replaced with the user's actual page names |
| **Jekyll / Ruby gem system** | User explicitly abandoned it — too much friction on Windows |
| **React / SPA frameworks** | User explicitly said "def not react" |
| **Blue link color** | The Minima default blue was dropped in favor of monochrome consistency |
| **Pure white background** | Shifted to warm paper (`#faf9f6`) for a more physical, less clinical feel |

---

## 13. Technical Architecture

### Stack Decision

**Astro (Zero-JS Static Mode)** — selected because:
- Outputs 100% pure HTML and CSS. No client-side framework runtime.
- Markdown-native: consumes all 39 existing blog posts without conversion.
- GitHub Pages deployment via standard GitHub Action.
- Matches the "nothing too fancy, just what's required" directive.

### File Structure (Current)

```
src/
├── components/
│   ├── Header.astro      — Shared nav with active-page highlighting
│   └── Footer.astro      — Copyright + external links
├── layouts/
│   └── BaseLayout.astro   — Shell: html/head/body + Header + slot + Footer
├── pages/
│   ├── index.astro        — The Focused Plinth homepage
│   ├── blog/index.astro
│   ├── projects/index.astro
│   ├── teaching/index.astro
│   └── musings/index.astro
└── styles/
    └── global.css         — Design tokens, reset, base typography
```

### Content Assets

| Asset | Path | Notes |
|---|---|---|
| Custom font | `assets/fonts/calendas_plus-webfont.ttf` | Calendas Plus serif |
| Hero artwork | `assets/images/hero-plate.jpg` | *Alegalu (Waves)* acrylic painting |
| Profile photo | `assets/images/Karthikeshwar_shades_sky.jpg` | |
| Book covers | `assets/images/books/*.jpg` | 52 cover images |
| Favicon | `favicon.ico` | |
| Books data | `_data/books.yml` | 52 entries with categories |
| Blog posts | `blog/2021/` through `blog/2026/` + `blog/timeless/` | 39 Markdown posts |
| Kannada translations | `*_kn.md` suffix pattern | Must be preserved |

---

*This document is the single source of truth for the visual and architectural direction of karthikeshwar1.github.io. All future design work should reference it.*
