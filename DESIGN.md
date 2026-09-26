---
name: Karthikeshwar — The Focused Plinth
description: A timeless, motionless archive. A framed painting on a paper wall; ink on paper everywhere else.
colors:
  paper-wall: "#faf9f6"
  mat: "#ffffff"
  moulding: "#0e0e0d"
  ink: "#181716"
  ink-secondary: "#5a5753"
  ink-tertiary: "#74706a"
  border-subtle: "#e6e3dc"
  rule-strong: "#cfc9bd"
  underline: "#cbc5b9"
  wash: "#f2efe8"
  highlight: "#ebe4d4"
  night-wall: "#0c0b0a"
  night-mat: "#161513"
  night-ink: "#efece4"
  night-moulding: "#3e3933"
  night-moulding-lit: "#524c45"
  night-moulding-shade: "#2c2824"
typography:
  body:
    fontFamily: '"EB Garamond", "Noto Serif Kannada", Georgia, serif'
    fontSize: "1.1875rem"
    fontWeight: "400"
    lineHeight: "1.72"
  nav:
    fontFamily: '"EB Garamond", serif'
    fontSize: "1.05rem"
    fontWeight: "500"
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  label:
    fontFamily: '"EB Garamond", serif'
    fontSize: "0.75rem"
    fontWeight: "500"
    letterSpacing: "0.08em"
    textTransform: "uppercase"
  meta:
    fontFamily: '"EB Garamond", serif'
    fontSize: "0.875rem"
    fontWeight: "400"
    lineHeight: "1.45"
  h4:
    fontFamily: '"EB Garamond", serif'
    fontSize: "1.3125rem"
    fontWeight: "400"
    lineHeight: "1.25"
  h3:
    fontFamily: '"EB Garamond", serif'
    fontSize: "1.4375rem"
    fontWeight: "400"
    lineHeight: "1.25"
  h2:
    fontFamily: '"EB Garamond", serif'
    fontSize: "1.625rem"
    fontWeight: "400"
    lineHeight: "1.25"
  h1:
    fontFamily: '"EB Garamond", serif'
    fontSize: "1.875rem"
    fontWeight: "400"
    lineHeight: "1.25"
  footer:
    fontFamily: '"EB Garamond", serif'
    fontSize: "1.05rem"
    fontWeight: "500"
    letterSpacing: "0.05em"
rounded:
  none: "0"
spacing:
  measure: "40rem"
  shell: "1120px"
components:
  frame:
    backgroundColor: "{colors.mat}"
    borderColor: "{colors.moulding}"
    mat: "18.7% of the artwork's short side"
    moulding: "3.6% of the artwork's short side (min 3px)"
---

# Design System: The Focused Plinth

The living reference for the site's design. Keep it current: every design change updates the matching rule below and adds one line to the **Decision log**. The full history and reasoning is in `DESIGN_BIBLE.md`.

## The test

Every effect must have a printed or physical equivalent (ink, paper, a hung frame, an album leaf, a book on a shelf). If it has none, such as motion, blur, glow, gradients or grain, it dates the site and is not used. (Rams: good design "avoids being fashionable and therefore never appears antiquated." Vignelli: against any fashion of design.) The homepage English line is the exception: it is the shore in the caption, and the motion is that water.

## Rules

**Colour.** Warm paper, near-black ink. No hue except the painting and book covers. Secondary and tertiary inks meet 4.5:1 on paper. Night is the same wall with the lamps down: lamp-black `#0c0b0a`, ink `#efece4`, mat `#161513`, moulding stained oak `#3e3933`, with the top and right faces `#524c45` where the light lands and the bottom and left `#2c2824`. Bone at 17:1 outlined the painting; the wood stays dark. Pictures are not inverted. One footer word names the mode you enter: `DARK MODE` by day, `LIGHT MODE` at night. It underlines on hover and on the click, like a nav link. The first visit follows the system.

**Type.**
- **Faces:** EB Garamond (400, 400 italic, 500, 700) for Latin; Noto Serif Kannada for Kannada, matched to the Garamond beside it: `size-adjust: 90%` puts its headline at Garamond's cap height, and its 600 cut serves Garamond's 500 (and bold), because Noto's 600 is as dark as Garamond's 500. Kannada is never letterspaced or transformed. Beside small capitals (labels, section heads, ledger meta, year jumps) it scales 1.14em, as in the nav, to meet their cap height. `font-synthesis: none`, so no faked styles.
- **Capitals:** lines set in capitals use weight 500, lining figures and 0.05–0.1em tracking (Bringhurst's 5–10%). Running text uses old-style figures.
- **Reading view:** 1.1875rem / 1.72 (1.125rem on phones) at a 40rem measure. Section breaks are set `*  *  *`. A heading of only emoji is an ornament line at its heading's size, out of the outline and CONTENTS.
- **Scale:** Nav and footer stay 1.05rem. Small capitals never go under the 0.75rem label. Meta (authors, notes, code) is 0.875rem. Inside a post, h4 is 1.3125rem, h3 and the deck are 1.4375rem, h2 is 1.625rem, an in-text h1 is 1.875rem. Each step stays above the one beneath it.

**Motion.** None, except the homepage English verse. It opens on AIMFULLY. Until the painting is clicked, only FULLY/LESSLY sways, and only left–right; the first click wakes the whole line (a later click opens the painting). Crests then travel through every word, including AIM. The suffix alternates FULLY and LESSLY. `prefers-reduced-motion` keeps that exchange as opacity only, and the painting link works immediately. Everywhere else, hover is an instant colour or underline change. Focus is a 1px ink outline, offset 4px.

**Mark.** The favicon is a capital K from EB Garamond 500, ink `#181716` on a paper square `#faf9f6`. Square corners, no border. It is the name reduced to a stamp; the same file serves the tab, the shortcut, and the home-screen icon.

**Shape and depth.**
- Corners are square.
- Only objects cast a shadow, one each, falling down-left, since gallery light comes from above right. The frame's is the museum angle (30° from vertical): a contact `-2s 3s 1.5s` and a soft fall `-6s 16s 14s`, s = art height / 474. Day: ink at .38 and .22. Night: black at .92 and .70, because the wall no longer fills the shadow. Book cover: `-1px 2px 3px rgba(24,23,22,.2)`. Running head (`--shadow-head`): the frame's light on an object that barely stands off the page, a contact `-1px 1px 2px` at .1 and a fall `-3px 6px 12px -4px` at .14; night black at .7 and .6.

**Header (every page).**
- A centred line of capitals, `KARTHIKESHWAR | BLOG | PROJECTS | MUSINGS`, divided by 1px upright rules (`.pipes`). It is the same on every page.
- The name is the home link. The current page has a static underline.
- ≤720px: the name gets its own line, with the three sections beneath.
- **Running head (every page, every width).** Once the nav has scrolled out of view, a paper bar is fixed at the top (`--head-h`: 3.4rem on phones, 3rem wider) over a 1px rule, with the head shadow. Phones: the name in label capitals (home link) over the page title at 1.05rem, cut with an ellipsis; on home, over the three rooms. Wider than 720px: one line on the 1120px shell, the name left, the title centred, BLOG | PROJECTS | MUSINGS right in piped label capitals, the current room underlined. It appears and leaves at once. Where a page's contents are out of sight (posts below 1240px, Books read below 960px) the title carries the 1px plus and hangs the contents beneath the bar; where they show, it is only a title. In-page jumps and the sticky wall label stop clear of it.
- Kannada nav text scales up optically (`1.14em`) to balance the cap height of the English capitals.

**Footer.** One centred line in the same size and capitals as the nav: `© … | (language) | DARK MODE`. The word is the mode you enter, so at night it reads `LIGHT MODE`. A globe marks language and switches `html lang` between English and Kannada (`en` / `kn` in `localStorage`). It underlines on hover and on the click. ≤600px: the © line on its own, the globe and mode word beneath with a pipe between.

**Running foot (posts).** Under a 1px rule after the last paragraph: PREVIOUS and NEXT as labels over the neighbouring titles at h4 size, in the "All writing" order, then `ALL WRITING | MORE FROM <year>` in piped label capitals. A `_kn` post shares its twin's neighbours. A series (one shared title) keeps its own hand-written links and gets no walk; elsewhere it is named by subtitle. ≤600px: the two stack.

**Contents (posts and Books read).** Every post with headings, and the Books read page, carry a contents list: CONTENTS as a label with the 1px plus / minus of "All writing", then its headings (to h3) or shelves (a heading that is only a numeral, such as "1", borrows the first five words of its section: "1. Given, the complexity of nature…") at the meta size in secondary ink. It is open by default; clicking CONTENTS folds it and clicking again opens it, with no motion. The section in view is underlined, as the nav marks the current page (a small script). Posts at 1240px and wider set it fixed in the left margin, level with the title; Books read sets it in the wall label, which no longer carries ALL WRITING (the nav does). Below those widths the running head (see Header) takes its place.

**Skip link.** First in every page, a label-capitals `Skip to content` to `#main`, off the page until a keyboard reaches it, then a paper slip at top left with the usual focus outline.

**Language.**
- Only the chrome changes: nav, name, footer, headings, labels, ledes, the bio, project descriptions, tab titles. Posts, post and book titles and proper names stay as written. A post's Kannada version shows only where a `_kn` file exists.
- Every pair lives in `src/lib/i18n.ts`. Text renders with `<T t={…} />` (both spans in the page, `html lang` shows one); an attribute uses `attr()`. No other inline pairs.
- Same layout, same classes, same sizes. Only the words change.

**Homepage ("the wall", Comp 2), every width.**
- A black moulding (`0.036 × art-h`), an even white mat (`0.187 × art-h`), the painting, then the caption beneath: the Kannada line, then the English in capitals, both at the nav’s 1.05rem and weight 500. A drawn arrow jumps (no smooth scroll) to the about line. The about line is 1.25–1.5rem, larger than essay body, because it is a short statement.
- `--art-h = min((78svh − 8rem) / 1.446, (100vw − 2.5rem) / 1.882, 34rem)`, so the same frame fits the first screen as the width shrinks.
- Each verse is one line until it no longer fits, then it breaks after the semicolon. The two halves stay unbroken.
- The about line is a short bio in his voice: short sentences, key words linked in ink with a resting underline. GitHub and LinkedIn sit beneath it on one centred pipe line, at the nav’s 1.05rem and weight 500 in tertiary ink; underline on hover only.

**Archive pages ("Split Canvas").**
- A sticky wall label on the left and a ruled ledger on the right, within the 1120px shell under the centred nav: a book's running head above a spread.
- ≤960px: stacks.
- ≤600px: the wall label becomes a centred title page.
- Blog: "All writing" is a closed signature. The heading matches the others, with a 1px plus that becomes a minus when open. No motion. A year in the wall label opens it.

**Artwork.** Never crop the painting. Never put a border in the image file (the photographed mat was cropped away; the frame supplies the mat).

## Decision log

One line per decision: date, decision, why. Newest last.

- **2026-09 · Astro, zero-JS static; no React.** User: "nothing too fancy."
- **2026-09 · Comp 2 ("Art Plinth") chosen:** nav at top, framed own painting, verse caption. User's pick.
- **2026-09 · Warm paper #faf9f6, monochrome, no blue links.** Physical and quiet.
- **2026-09 · Homepage rebuilt to Comp 2's measured proportions:** mat 18.7%, moulding 3.6%, one down-left shadow. "Has to match it exactly."
- **2026-09 · All motion removed:** entrance fades, lift on hover, grow-in underline, colour transitions. Each dates the site to an era.
- **2026-09 · Layered soft shadows replaced by one physical shadow per object.** A 2020s UI idiom.
- **2026-09 · Capitals tracking cut from 0.15–0.18em to 0.05–0.1em.** Book typography; the wider spacing read as fashion.
- **2026-09 · Header centred, name as home link, pipes between items.** Comp 2's "HOME | …" line.
- **2026-09 · ALEGALU title removed from the homepage; the verse is the caption.** User request.
- **2026-09 · Verse: ಹರಿಯುವ ಅಲೆಗಳು; ಅರಿತೂ ಅರಿಯದೆ ಅಲೆಯುವ ನಾನು. / Waves roll; while I stroll, aimlessly/aimfully.** He is not "aimless"; the Kannada is his original line, evolved, not a translation.
- **2026-09 · Painting cropped to the canvas (2817×1962).** "No white border for the image."
- **2026-09 · Paper grain from the comp omitted.** Grain overlays are a 2020s trend; plain paper reads the same.
- **2026-09 · Post `<hr>` set as `*  *  *`.** Tschichold's section break.
- **2026-09 · Calendas Plus replaced by EB Garamond, with 500 on capitals.** Closest free match to Comp 2's lettering, heavier as asked, and real italics. Specimen compared against Crimson Pro, Cormorant Garamond and Libre Caslon.
- **2026-09 · Phones get "the leaf" (album folio), not a shrunk wall.** Held, not hung; uses the vertical; verse in its original two-line form.
- **2026-09 · Phone archive heads centred as title pages; footer splits like the nav.** One axis on narrow screens.
- **2026-09 · Nav identical on all pages; content below may be wider.** The "narrow on home, wide elsewhere" bug was a stale dev server. Keep the nav fixed; archive content keeps the 1120px shell.
- **2026-09 · Teaching tucked into Musings, below Piano.** The heading left the nav; `/teaching` redirects to `/musings/#teaching`.
- **2026-09 · Blog "All writing" closed by default.** A signature in the ledger: same heading, a 1px plus, no motion.
- **2026-09 · Homepage keeps the hung frame at every width.** The phone album leaf put the verse inside the frame; the same wall stays, and each verse breaks after the semicolon as the width shrinks.
- **2026-09 · Night lives in the footer as the word NIGHT / DAY.** Lamp-black wall, paper-coloured ink, bone moulding; pictures stay. A reload with no control would hide the choice.
- **2026-09 · Footer modes read DARK MODE | LIGHT MODE, at the nav’s 1.05rem.** The one in use is underlined, as a current nav item is. 0.8rem was caption-sized on Garamond.
- **2026-09 · One footer word, not two.** It names the mode you enter, and the click replaces the word.
- **2026-09 · The English caption is a shoreline: AIM still, one wave through the other words, LESSLY washes to FULLY and back.** He asked for those letters to come and go like waves; he is not only aimless.
- **2026-09 · About line became a short linked bio.** User asked for a minimal bio in his own voice; drawn from his blog's short, plain sentences.
- **2026-09 · Footer globe sets `lang` to kn or en.** One saved choice, like night mode. Chrome and the blog list follow it; a post’s prose changes only when a `_kn` file exists.
- **2026-09 · The shoreline wave is quieter and slower, and AIM rolls with it.** He asked for less motion, a longer cycle, and AIM in the water.
- **2026-09 · The line opens on AIMFULLY; only the suffix sways sideways until the painting is clicked.** The first click wakes the whole wave. A later click still opens the painting.
- **2026-09 · Night moulding is stained oak `#3e3933`, lit faces `#524c45`, shade faces `#2c2824`.** Bone was 17:1 on the lamp-black wall and read as a bright outline. The frame is wood; the light catches the top and right, and the other two sides sink.
- **2026-09 · Frame shadow is the museum angle: contact plus a longer soft fall, down-left.** One light, 30° from vertical, from above right (ERCO). The two layers are that shadow's umbra and penumbra, not a UI stack. Night is blacker because bounce light is gone.
- **2026-09 · Kannada covers all chrome, from one dictionary (`src/lib/i18n.ts`) and one `<T>` component.** User asked for a simple, standard localisation where only the text changes. Pairs had been scattered inline and covered only the nav and footer.
- **2026-09 · Noto Serif Kannada matched to Garamond: 90% size, 600 cut for 500.** User wanted the Kannada to match the English. Measured: at 100% its headline stood about 10% above the cap height, and 400 was lighter than the capitals.
- **2026-09 · Kannada name ಕಾರ್ತಿಕೇಶ್ವರ; mode words ಕತ್ತಲೆ / ಬೆಳಕು.** The Kannada nav had shown the name in Latin letters, and ಗಾಢ ("intense") read oddly next to ಬೆಳಕು.
- **2026-09 · Nav Kannada scaled 1.14em.** Compensates for Garamond's all-caps cap height in the header, keeping Kannada nav items visually balanced.
- **2026-09 · Favicon is an EB Garamond 500 K, ink on paper.** The red rounded K belonged to another palette.
- **2026-09 · Post heads step clear of the body; capitals stay at or above 0.75rem. Nav stays 1.05rem.** h3 and h4 sat on or under 1.1875rem, and a few captions were under 12px.
- **2026-09 · Footer controls keep their glyph; the hit area clears 44px.** The globe was 18px square.
- **2026-09 · No sticky or heavier nav; a running foot and a skip link instead.** A pinned bar has no printed equivalent and costs phones two lines; wayfinding was missing at a post's end, as in a book.
- **2026-09 · Contents on every post and on Books read, with TOP / END; a pinned CONTENTS slip where the margin is too narrow.** User: long pages had no quick way up or down, and a little app chrome is worth it for navigation. The hover-expanding sidebar was rejected: hover is absent on phones and a hidden list hides the book's contents.
- **2026-09 · TOP / END and Books read's ALL WRITING removed; CONTENTS folds, open by default.** User request.
- **2026-09 · Kannada in label capitals scales 1.14em; the phone slip never covers the footer; contents focus ring unclipped.** Polish pass: ಪರಿವಿಡಿ and ನಿಮಿಷದ ಓದು read a size smaller than their English.
- **2026-09 · Numeral-only headings borrow their section's opening words in the contents; the phone footer keeps the pipe between globe and mode.** A list reading 1, 2, 3, 4 named nothing; the globe sat flush against DARK MODE.
- **2026-09 · Running head on narrow screens replaces the floating CONTENTS slip.** User: the site needs something visible on scroll, as Anthropic's blog has; the name over the post title, tapping the title for the contents. Reverses "no sticky nav" only where the margin list cannot show.
- **2026-09 · The running head on every page and width, with its own shadow; the rooms ride along on wide screens.** User wanted a prominent nav everywhere, and a subtle shadow for clarity after the frame's. Blur and fade were declined: translucency without blur muddies text, and blur is glass.
- **2026-09 · Homepage caption matches the nav: 1.05rem, weight 500, both lines.** It had been 16px and the Kannada line was the lighter 400 cut.
- **2026-09 · GitHub and LinkedIn on the homepage about block, pipe line below the bio.** User asked for profile links on the home page without changing the site footer.
- **2026-09 · Audit pass: B&W Alegalu uncropped; footer set in capitals; emoji-only headings become ornament lines; Kannada 1.14em reaches section heads, ledger meta and year jumps; year jumps, ಕನ್ನಡ links and the CONTENTS slip get 44px hit areas.** Each restores a written rule or fixes access without changing the look.
- **2026-09 · The painting's first click still wakes the verse.** The audit flagged that the link swallows its first activation; user kept it as designed.

## Don'ts

- No transitions, animations, hover transforms, `scroll-behavior: smooth`, gradients, blur, glass, grain, pills or rounded corners, except the homepage shoreline under Motion.
- No letter-spacing over 0.1em on capitals; no faked italics or bolds.
- No cropping or re-bordering the artwork.
- No new typeface without a specimen compared against the current one, and a log entry.
