# Design Bible — [Karthikeshwar.github.io](http://Karthikeshwar.github.io)

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


| Decision          | User Direction                                                               | Implementation                                                                        |
| ----------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Hero content**  | "art piece (my own art i have in musings page)"                              | Used the user's *Alegalu (Waves)* acrylic painting from `musings/images/Alegalhu.jpg` |
| **Caption style** | "not poem but something like a poem (like the words i have on musings page)" | Used the actual Kannada verse + English translation from the musings page             |
| **Bio text**      | "about me - in poetic words in short"                                        | "Living archive of essays, algorithmic experiments, and creative work."               |
| **Navigation**    | "where best navigation? top or below?" → Comp 2 selected (nav at top)        | Navigation bar anchored to the top of the viewport                                    |
| **Nav labels**    | User's real pages, not the comp's placeholder labels                         | Changed from `HOME                                                                    |




### On Technology & Architecture

> *"no need to stick to jekyll or whatever. no restrictions. just use whatever's best and just whats required, nothing too fancy. def not react."*


| Decision         | User Direction                                                       |
| ---------------- | -------------------------------------------------------------------- |
| **Ditch Jekyll** | No attachment to the Ruby gem system                                 |
| **No React**     | Explicitly ruled out React and heavy SPA frameworks                  |
| **Stack chosen** | Astro (zero-JS static mode) — outputs pure HTML/CSS, Markdown-native |
| **Simplicity**   | "nothing too fancy" — no unnecessary build complexity                |




### On Preview Quality

> *"the preview wasn't good enough when i just opened the index.html in the browser, do i need to run any server? do you need to do a better job at the preview? because i couldn't even see the preview before we do the full implementation."*

**Root causes identified**: Broken font paths (CSS referenced `.woff2` files that didn't exist; only `.ttf` was available), artificial 1024×1024 test geometry, encoding corruption, and browser `file:///` CORS restrictions on local font loading.

**Resolution**: Rebuilt the HTML with correct `@font-face` pointing to the actual `.ttf` file, proper semantic layout, and generated high-resolution Puppeteer screenshots for verification before user approval.

---



## 4. Approved Visual Language



### Final Approved Homepage

![Final approved desktop design](file:///C:/Users/karth/.gemini/antigravity/brain/f03fae28-df96-4e50-8e76-4c70e4df5fb4/desktop_preview.png)

### Phase 3 — Comp 2, exactly, and timeless

The user's verdict on the build above: *"the design of this website looks not as good as what's in DESIGN_BIBLE. Do a better job of Comp 2. Has to match it exactly."* Added requirements:

- No animations or effects that date the site to any era of web design, including today's (the grow-in hover underline was named as an example). The site should look as if it came from no particular timeline.
- Everything should draw on timeless art and craft; barebones is fine where it makes sense.
- On the homepage: no white border around the image, and no ALEGALU title text.
- Better English and Kannada lines.

Comp 2 was measured pixel by pixel, and the homepage was rebuilt to those proportions:

- a centred nav of serif capitals divided by upright rules;
- a black moulding at 3.6% of the art's short side;
- an even white mat at 18.7%;
- one tight shadow falling down-left;
- the caption, then a thin arrow.

The painting's own photographed mat and vignette were cropped off the source image (3261×2406 → 2817×1962), so the only mat is the frame's.

### Phase 4 — The leaf, the face, one nav

The user's feedback: *"80–90% there, and in the right direction."* Four follow-ups came with it:

- **Phones get their own design, "the leaf".** A desktop screen is a wall and the work hangs on it; a phone is held in the hand, like a page. So on screens ≤600px the homepage becomes a leaf from a Mughal album (muraqqa):
  - the same black moulding and a bottom-weighted white mat;
  - a 3px double rule (the album's jadval) around three ruled panels: the Kannada verse above, the painting, the English verse below;
  - each language set in the poem's original two lines;
  - the composition placed above centre.
  - On phones the archive pages' wall labels become centred title pages, and the footer splits onto two lines like the nav.
- **The face changed to EB Garamond**, with capitals at 500 (§6).
- **"Nav narrow on home, wider elsewhere" was a stale dev server.** A fresh server and the build render the nav identically on every page. The rule now: the nav never changes between pages, and archive content keeps its 1120px shell beneath it, like a centred running head over a book's two-page spread.
- **A living, concise** `DESIGN.md` (rules plus a dated decision log) is now kept current by `.cursor/rules/design-system.mdc` and `CLAUDE.md`.

### 2026-09 — The leaf retired

The phone album folio put the Kannada line above the painting and the English line below it, inside the frame. On a small screen that read as a different object. The hung frame and the caption beneath it stay at every width; only the frame's size and the spacing change. Each verse remains one line until it no longer fits, then breaks after the semicolon.



### Content Hierarchy (Top → Bottom)

1. **Nav**: `KARTHIKESHWAR | BLOG | PROJECTS | TEACHING | MUSINGS`, centred, with the name as the home link
2. **Frame**: black moulding, even white mat, one short shadow, containing the painting (links to its page)
3. **Caption**: the Kannada line, then the English line in capitals
4. **Arrow**: a thin drawn arrow that jumps to the line below
5. **About**: "Living archive of essays, algorithmic experiments, and creative work."
6. **Footer**: one centred line: © 2026 Karthikeshwar | GitHub | LinkedIn | KathaaVerse



### The User's Content on the Homepage

- **Artwork**: *Alegalu (Waves)*, the user's own acrylic painting (`src/assets/art/alegalu.jpg`, cropped to the canvas)
- **Kannada verse**: ಹರಿಯುವ ಅಲೆಗಳು; ಅರಿತೂ ಅರಿಯದೆ ಅಲೆಯುವ ನಾನು.
  - Gloss: "Flowing waves; I, wandering, knowing yet not knowing."
  - This is the user's own original line. Only ಅರಿಯದೆ ("without knowing") became the paradox pair ಅರಿತೂ ಅರಿಯದೆ, which keeps the ಅಲೆ (wave) / ಅಲೆಯುವ (wandering) pun.
- **English**: "Waves roll; while I stroll, Aimlessly."
  - This replaces "aimlessly": he is neither aimless nor always certain.
  - Alternates considered: "…, listening" (ಆಲಿಸುತ್ತ) and "…, unhurried" (ಆತುರವಿಲ್ಲದೆ).
- **Tagline**: Living archive of essays, algorithmic experiments, and creative work.

---



## 5. Design Tokens (CSS Custom Properties)

```css
:root {
  --bg: #faf9f6;           /* Warm paper ground */
  --paper: #ffffff;         /* Pure white for plinth mat */
  --ink: #181716;           /* Primary text, near-black */
  --ink-secondary: #5a5753; /* Secondary text, warm gray */
  --ink-tertiary: #74706a;  /* Tertiary text, muted (was #8c8882, see below) */
  --border-subtle: #e6e3dc; /* Section rules */
  --rule: rgba(230, 227, 220, 0.6); /* Ledger hairlines */
  --rule-strong: #cfc9bd;   /* Input underlines, table heads */
  --underline: #cbc5b9;     /* Resting underline under prose links */
  --wash: #f2efe8;          /* Code blocks */
  --highlight: #ebe4d4;     /* Text selection, search matches */
  --moulding: #0e0e0d;      /* The black picture frame */
  --shadow-object: -1px 2px 3px rgba(24, 23, 22, 0.2); /* Book covers */
  --measure: 40rem;         /* Reading column */
  --radius: 0;              /* Square corners everywhere */
}
```

> **Phase 3:** `--shadow-plinth`, `--shadow-plinth-lift`, `--border-mat`, `--accent` and the easing tokens were removed. The frame's shadow is computed from the painting's size (see §8).

> **Change in Phase 2:** `--ink-tertiary` moved from `#8c8882` (3.3:1 on paper) to `#74706a` (4.7:1) so the small captions, footer and metadata that use it meet WCAG AA. The tone is the same warm gray, one step darker.



### Color Philosophy

The palette shifted from the predecessor's pure white (`#ffffff`) background and Minima blue links to a warmer, more intentional set:


| Role           | Old (Jekyll/Minima)        | New (Focused Plinth)                    | Why                                                                                                                    |
| -------------- | -------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Background     | `#ffffff` (clinical white) | `#faf9f6` (warm paper)                  | Feels like real paper, not a screen                                                                                    |
| Primary text   | `#1a1a1a`                  | `#181716` (warmer near-black)           | Ink-like, less harsh                                                                                                   |
| Secondary text | `#777777` (neutral gray)   | `#5a5753` (warm gray)                   | Harmonizes with paper tone                                                                                             |
| Links          | `#2a7ae2` (Minima blue)    | No blue at all — uses `--ink-secondary` | Monochrome consistency; links shown by a plain underline (static in prose, instant on hover elsewhere), never animated |
| Borders        | `#e8e8e8` (cold gray)      | `#e6e3dc` (warm beige)                  | Matches the paper warmth                                                                                               |


---



## 6. Typography



### Font

**EB Garamond** (Phase 4, replacing Calendas Plus): Georg Duffner's revival of Claude Garamond's 16th-century roman, from the 1592 Egenolff-Berner specimen. It is self-hosted via `@fontsource/eb-garamond` at 400, 400 italic, 500 and 700, and the 400 and 500 Latin files are preloaded.

```css
font-family: "EB Garamond", "Noto Serif Kannada", Georgia, "Times New Roman", serif;
font-synthesis: none;
```

**Why the switch:**

- The user noticed Comp 2's lettering was sturdier than Calendas Plus.
- A specimen set the comp's nav and caption against Calendas Plus, EB Garamond 500, Crimson Pro 400/500, Cormorant Garamond 600 and Libre Caslon Text:
  - EB Garamond 500 matched best: the same capital proportions and the lower contrast;
  - Crimson Pro was too condensed, Cormorant too thin, Caslon too wide.
- Only Calendas Plus Regular was ever available, so every italic had been faked; EB Garamond has a true italic and bold.

**How it's set:** capitals take 500 with lining figures; running text takes 400 with old-style figures. `calendas_plus-webfont.ttf` stays in `public/assets/fonts/` but is no longer loaded.

**Kannada companion:** EB Garamond has no Kannada glyphs, so **Noto Serif Kannada** (400, self-hosted via `@fontsource/noto-serif-kannada`, Kannada subset only) sits second in the stack. Browsers download it only on pages that contain Kannada text. Kannada is never letter-spaced.

### Type Scale


| Element                 | Size                            | Weight | Tracking | Transform   | Color             |
| ----------------------- | ------------------------------- | ------ | -------- | ----------- | ----------------- |
| Nav (name + four rooms) | `1.05rem` (`0.82rem` < 720px)   | 400    | `0.06em` | `uppercase` | `--ink`           |
| Caption, Kannada line   | `1rem`                          | 400    | —        | —           | `--ink`           |
| Caption, English line   | `0.98rem`                       | 400    | `0.06em` | `uppercase` | `--ink`           |
| About line              | `clamp(1.2rem, 2.2vw, 1.45rem)` | 400    | —        | —           | `--ink-secondary` |
| Section headings        | `0.8rem`                        | 400    | `0.1em`  | `uppercase` | `--ink`           |
| Labels / metadata       | `0.72–0.75rem`                  | 400    | `0.08em` | `uppercase` | `--ink-tertiary`  |
| Footer text             | `0.8rem`                        | 400    | `0.04em` | —           | `--ink-tertiary`  |




### Tracking Philosophy

Capitals are letterspaced **5–10% of their size** (Bringhurst, *The Elements of Typographic Style* §2.1.6; Tschichold's Penguin Composition Rules). The earlier 0.15–0.18em was fashion-display tracking and dated the site; it was brought down to 0.06–0.1em in Phase 3. Body text and Kannada use natural spacing.

---



## 7. Layout Architecture



### Homepage — The Focused Plinth (Comp 2)

The first screen (`.first-screen`, `min-height: 100svh`) holds the header and the stage; the about line and footer sit below it. Proportions are Comp 2's, measured from the comp image.

```
┌──────────────────────────────────────────────────────┐
│  KARTHIKESHWAR | BLOG | PROJECTS | TEACHING | MUSINGS │ ← centred, 1px upright rules
│                                                      │
│        ███████████████████████████████████           │ ← black moulding (3.6% of art height)
│        █                                 █           │
│        █     ┌───────────────────────┐   █           │ ← even white mat (18.7% of art height)
│        █     │       ARTWORK         │   █           │
│        █     └───────────────────────┘   █           │
│        █                                 █           │
│        ███████████████████████████████████▖          │ ← one short shadow, down-left
│                                                      │
│      ಹರಿಯುವ ಅಲೆಗಳು; ಅರಿತೂ ಅರಿಯದೆ ಅಲೆಯುವ ನಾನು.           │ ← caption
│        WAVES ROLL; WHILE I STROLL, AIMLESSLY/FULLY.      │
│                         │                            │
│                         ↓                            │ ← drawn arrow → #about
└──────────────────────────────────────────────────────┘
   Living archive of essays, algorithmic experiments, and creative work.
   © 2026 Karthikeshwar | GitHub | LinkedIn | KathaaVerse
```



### Key Measurements


| Element                     | Value                                                          | Comp 2 at 1024px            |
| --------------------------- | -------------------------------------------------------------- | --------------------------- |
| Painting height (`--art-h`) | `min((78svh − 8rem) / 1.446, (100vw − 2.5rem) / 1.882, 34rem)` | 525u of 1024                |
| Mat                         | `0.187 × art-h` on all sides                                   | 67u                         |
| Moulding                    | `max(3px, 0.036 × art-h)`                                      | 13u                         |
| Frame shadow                | contact `-2s 3s 1.5s` plus fall `-6s 16s 14s`, s = art-h / 474 | museum angle, down-left |
| Frame → caption             | `max(1.5rem, 40s)`                                             | 40u                         |
| Caption → arrow             | `max(1.25rem, 32s)`                                            | 35u                         |
| Header top padding          | `clamp(1.75rem, 6svh, 3.25rem)`                                | ~60u                        |


1.446 is the frame's height as a multiple of the painting's height, and 1.882 its width, given the painting's 1.436 aspect ratio.

### Archive pages — "The Split Canvas"

Blog, Books read, Projects, Teaching and Musings share one structure: a **sticky wall label** on the left (page title, one line of context, counts, jump links, and search on the blog) and the **collection** on the right, laid out as a ruled *ledger* (title left, quiet uppercase metadata right, hairline between rows). Below 960px the wall label stacks above the collection and stops being sticky.


| Element           | Value                                                      |
| ----------------- | ---------------------------------------------------------- |
| Wall label column | `minmax(13rem, 17rem)`, `position: sticky; top: 2.5rem`    |
| Collection column | `minmax(0, 44rem)`                                         |
| Page title        | `clamp(2.25rem, 3.4vw, 2.85rem)`                           |
| Section heading   | `0.8rem`, `0.1em` tracking, uppercase, rule beneath        |
| Ledger title      | `1.1rem`, `--ink-secondary` → `--ink` + underline on hover |




### Post reading view

A single centred column at `--measure` (40rem, ~70 characters). Each post's own leading heading is lifted into a consistent title block: title (`clamp(2.05rem, 4.4vw, 2.85rem)`), optional italic subtitle, a metadata line *below* the title (year · reading time · translation link), and a short 2.5rem centred rule. Body text is `1.125rem / 1.72`. The posts' hand-written HTML (`align="center"`, `<br>` pauses, `<details>`) is styled rather than rewritten.

---



## 8. Elevation & Shadow

The site is flat. Only physical objects on the wall cast a shadow, and all of them are lit the same way: from above and slightly to the right, like a gallery spotlight at the 30° museum angle. Each object has one shadow. The frame's is a contact plus the soft fall of that one light (see the 2026-09 note at the end).

```css
/* Framed painting: s = art height / 474. Umbra, then penumbra. */
box-shadow:
  calc(s * -2) calc(s * 3) calc(s * 1.5) rgba(24, 23, 22, 0.38),
  calc(s * -6) calc(s * 16) calc(s * 14) rgba(24, 23, 22, 0.22);

/* Book covers */
box-shadow: -1px 2px 3px rgba(24, 23, 22, 0.2);
```

Nothing lifts on hover. Frames stay square (`--radius: 0`).

---



## 9. Motion Specification

**There is none.** No transitions, keyframes, entrance sequences, hover lifts, or smooth scrolling anywhere on the site. Motion is the quickest way to date a design: fade-ins, grow-in underlines and lift-on-hover each belong to a particular few years of the web. The test for every effect is whether it has a printed or physical equivalent (Rams: good design avoids being fashionable and therefore never appears antiquated; Vignelli: against any fashion of design).


| Element                     | Hover / focus                                                                     |
| --------------------------- | --------------------------------------------------------------------------------- |
| Nav items                   | Plain 1px underline appears instantly; the current page keeps it                  |
| Ledger titles, footer links | Colour steps `--ink-secondary` → `--ink`, plus an underline where the row has one |
| Prose links                 | Underline at rest in `--underline`, darkens to ink on hover                       |
| Frame                       | None. It links to the painting's page.                                            |
| Arrow                       | None. It jumps to the about line (no smooth scroll).                              |
| Focus                       | 1px ink outline, 4px offset                                                       |


---



## 10. Responsive Strategy

Most sizing is fluid (svh/vw `min()`), so there is only one layout breakpoint for the header:


| Aspect          | Desktop (> 720px)                 | Narrow (≤ 720px)                                                 |
| --------------- | --------------------------------- | ---------------------------------------------------------------- |
| Nav             | One line, 1.05rem                 | Name on its own line (1.12em); the four rooms beneath at 0.82rem |
| Frame           | Height-led: fits the first screen | Width-led: `(100vw − 2.5rem) / 1.882`                            |
| English caption | One line, same size as the Kannada | Same; breaks after the semicolon once the line no longer fits |
| Body padding    | `0 2rem 2rem`                     | `0 1.25rem 1.5rem` (≤ 768px)                                     |


Archive pages keep their 960px and 768px breakpoints.

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


| Rejected Option                                                                         | Why                                                                                     |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Comp 1 (Poem Plinth)**                                                                | User wanted their own art piece as the focal point, not a poem                          |
| **Comp 3 (Vertical Nav)**                                                               | Too experimental; user gravitated to conventional top navigation                        |
| **Nav labels: HOME, WORKS, BIOGRAPHY, SHOP, CONTACT**                                   | These were comp placeholders; replaced with the user's actual page names                |
| **Jekyll / Ruby gem system**                                                            | User explicitly abandoned it — too much friction on Windows                             |
| **React / SPA frameworks**                                                              | User explicitly said "def not react"                                                    |
| **Blue link color**                                                                     | The Minima default blue was dropped in favor of monochrome consistency                  |
| **Pure white background**                                                               | Shifted to warm paper (`#faf9f6`) for a more physical, less clinical feel               |
| **All motion** (entrance fades, plinth lift, grow-in nav underline, colour transitions) | Phase 3: each dates the site to an era of web design                                    |
| **Soft layered "elevation" shadows**                                                    | Phase 3: a 2020s UI idiom; replaced by one physical shadow per object                   |
| **Wide 0.15–0.18em tracking on capitals**                                               | Phase 3: fashion-display spacing; book typography uses 5–10%                            |
| **Left brand / right nav header with rules**                                            | Phase 3: Comp 2 centres the nav on the axis of the frame                                |
| **ALEGALU title under the homepage painting**                                           | Phase 3: user asked for the caption to be the verse alone                               |
| **"…, aimlessly" / ಅಲೆಗಳು; ನಾನಿಲ್ಲಿ ನಡಿಯುವಾಗ, ಸುಮ್ಮನೆ.**                                | Phase 3: not true to the user (not aimless), and the Kannada read as a translation      |
| **Paper-grain texture from the comp**                                                   | Grain overlays are a 2020s trend; the plain paper tone reads the same at normal viewing |
| **Phone album leaf (verse inside the frame)**                                           | 2026-09: a different object on small screens; the hung frame and caption stay           |


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
blog/<year>/*.md            — Posts, untouched. The file path is the URL.
_data/books.yml             — The bookshelf (a flat list; `notes:` links a book to its post)
src/
├── content.config.ts       — `blog` (glob over blog/) and `books` (books.yml) collections
├── lib/
│   ├── markdown.mjs        — Rehype plugins: lift post titles, localise self-links,
│   │                         lazy images, scrollable tables
│   └── posts.ts            — Post list: title, year, reading time, translation pairs
├── assets/art/             — The paintings (optimised to WebP at build)
├── components/
│   ├── Header.astro        — Shared nav with active-page highlighting
│   ├── Footer.astro        — Copyright + external links
│   └── Favourite.astro     — The favourite mark (replaces ⭐)
├── layouts/
│   └── BaseLayout.astro    — Shell: html/head/body + Header + slot + Footer
├── pages/
│   ├── index.astro                 — The Focused Plinth homepage (Comp 2)
│   ├── blog/index.astro            — Curated lists, archive by year, search
│   ├── blog/[...slug].astro        — Reading view for every post
│   ├── blog/timeless/books_read.astro — The bookshelf
│   ├── projects/index.astro
│   ├── teaching/index.astro
│   ├── musings/index.astro
│   ├── musings/Alegalhu.astro      — The painting's own page
│   ├── search-index.json.ts        — Full-text search index, built with the site
│   └── 404.astro
└── styles/
    ├── global.css          — Tokens, reset, surfaces, Split Canvas, ledger, plinth
    └── prose.css           — Reading view typography
```



### URLs

`build.format: 'preserve'` keeps every Jekyll-era address working unchanged: `blog/2026/ai-manifesto.md` is served at `/blog/2026/ai-manifesto`, including posts with spaces or apostrophes in their names. `/musings/Alegalhu` and `/blog/timeless/books_read` keep their old paths too. Absolute links to `https://karthikeshwar1.github.io/…` inside posts are rewritten to root-relative at build so they also work in local preview.

### Writing a new post

Drop a Markdown file into `blog/<year>/`. Nothing else is required: the first `# Heading` or `<h1>` becomes the title (a centred `<h2>`/`<h3>` right under it becomes the subtitle), the year comes from the folder, and search picks it up on the next build. Add `_kn` to the filename for a Kannada translation and the two versions link to each other automatically. Images referenced as `./images/x.png` go in `public/blog/<year>/images/`.

### Content Assets


| Asset         | Path                                                | Notes                                                                                          |
| ------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Font          | `@fontsource/eb-garamond`                           | EB Garamond 400/400i/500/700 (Calendas Plus TTF kept in `public/assets/fonts/`, unused)        |
| Kannada font  | `@fontsource/noto-serif-kannada`                    | Kannada subset, 400                                                                            |
| Artwork       | `src/assets/art/alegalu.jpg`, `alegalu-bw.jpg`      | *Alegalu (Waves)*; cropped to the canvas (2817×1962, photographed mat removed) → WebP at build |
| Profile photo | `public/assets/images/Karthikeshwar_shades_sky.jpg` | Not yet used                                                                                   |
| Book covers   | `public/assets/images/books/*.jpg`                  | 50 in use                                                                                      |
| Favicon       | `public/favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | EB Garamond 500 K, ink `#181716` on paper `#faf9f6`                                |
| Books data    | `_data/books.yml`                                   | 50 entries: Cosmos, Society, Human, Micro                                                      |
| Blog posts    | `blog/2021/` through `blog/2026/`                   | 37 Markdown posts (2 in Kannada)                                                               |
| Post images   | `public/blog/<year>/images/`                        | Resolved from `./images/…` in posts                                                            |


---

### 2026-09 · The shoreline caption

The English line is the one place the site moves. It opens on AIMFULLY. Until the painting is clicked, only the suffix sways left and right; that click wakes the whole line, including AIM. FULLY is read first, then the tide goes to LESSLY and keeps alternating. Reduced motion keeps the exchange as a fade, and the painting link works on the first click.

---

*This document is the single source of truth for the visual and architectural direction of karthikeshwar1.github.io. All future design work should reference it.*

---

## 2026-09 — Night

The day wall, with the gallery lamps down. The footer imprint gains one word, `NIGHT` or `DAY`, beside the copyright. The header stays the four rooms. Tokens swap; the painting and the book covers do not. The moulding turns bone, because a black frame on a black wall disappears. The first paint follows a saved choice, or the system if none is saved.

### 2026-09 · The frame at night, and the museum shadow

Bone moulding (`#efece4`) was 16.7:1 against the lamp-black wall. That is headline contrast: the rectangle outlined the painting instead of holding it. A frame is stained wood. It does not go pale when the lamps drop. The night body is `#3e3933`. The same light that casts the shadow catches the top and right faces (`#524c45`) and leaves the bottom and left in the frame's own shade (`#2c2824`). The mat stays `#161513`. On a lamp-black wall a cast shadow has little room to go darker, so the bevel does the work the cream wall does by day.

The cast shadow follows the museum angle: the beam 30° from vertical (ERCO; steeper than that throws the frame's shadow across the wall, flatter throws the viewer's). Light sits right of centre, so the shadow falls down-left. Length is about the frame's depth times cot 30°. What reads as one shadow is its two parts: a sharp contact where the moulding stands off the wall, and a softer penumbra, because a gallery lamp is a small extended source, not a point and not a UI stack. By day the paper wall bounces light back in, so both parts stay ink-tinted and open. At night that fill is gone, so the same geometry is blacker.

## 2026-09 · Wayfinding: running foot, contents, TOP / END

The nav stays a running head and is never pinned. Long pages had no quick way up or down, so every post and Books read gained a contents list with TOP and END: in the left margin of posts on wide screens, in the wall label on Books read, and otherwise behind a small pinned CONTENTS slip. This is the site's first deliberate piece of app chrome. The user accepted it for navigation, on condition that it has no motion and keeps the paper look (square corners, one object shadow). The section in view is underlined, as the nav marks the current page.

## 2026-09 · The running head

On narrow screens the floating CONTENTS slip felt stuck on. It was replaced by a book's running head: once the nav scrolls away, a thin paper bar shows the name in small capitals over the post title, and tapping the title hangs the contents beneath it. The user asked for this after comparing with Anthropic's blog. It stays inside the site's rules: paper, a 1px rule, Garamond at the nav's size, no motion, one shadow on the sheet it opens. Wide screens keep the margin list and have no bar.

## 2026-09 · The running head everywhere

The bar became site-wide: every page and every width, once the nav scrolls away. On wide screens it holds the name, the page title and the three rooms on one line. It casts the frame's shadow, shortened for something that barely stands off the page. The Apple-style blur and fade were considered and declined. A fade with no blur lets text show through the bar, and blur is glass, which the site has rejected. Gradients and shadows used to separate sections were also declined: the ruled ledger already does that, and a shadow on something that is not an object has no physical meaning.
