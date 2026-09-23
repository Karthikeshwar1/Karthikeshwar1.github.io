# Project Handoff: Karthikeshwar.github.io Redesign

## 1. Project Summary & North Star
- **Repository**: `Karthikeshwar1.github.io` (Personal website & living archive)
- **Design North Star**: *"The Focused Plinth"* / *"The Quiet Gallery"*
  - Editorial, manuscript feel with warm paper-like ground (`#faf9f6`), museum mat framing, and refined typography.
  - Font: `assets/fonts/calendas_plus-webfont.ttf` (`Calendas Plus` serif).
  - No flashy widgets or corporate portfolio tropes; an individual's thoughtful archive.

## 2. Completed Work & Current State
- **Homepage (`index.html`)**: **Approved by user.**
  - Central artwork: *Alegalu (Waves)* acrylic painting (`assets/images/hero-plate.jpg`).
  - Poetry caption: Kannada verse (*ಅಲೆಗಳು; ನಾನಿಲ್ಲಿ ನಡಿಯುವಾಗ, ಸುಮ್ಮನೆ.*) + English (*"Waves roll; While I stroll, aimlessly."*).
  - Header navigation: `BLOG`, `PROJECTS`, `TEACHING`, `MUSINGS`.
  - Visual previews captured and verified at `assets/previews/desktop_preview.png` and `assets/previews/mobile_preview.png`.
- **Existing Content Inventory**:
  - `blog/`: 39 long-form Markdown essays organized across years (`2021/` to `2026/`) + Kannada translations (`_kn.md`).
  - `_data/books.yml`: 52 curated books with cover images in `assets/images/books/`.
  - `projects.md`: Main projects (KathaaVerse #1 on HN, RxID, Araam, airPiano) and mini-projects.
  - `teaching.md`: 5 YouTube course playlists.
  - `musings.md`: Acrylic paintings, piano recordings, and poetry.
  - `search_index.json`: Full-text client search index.

## 3. Architecture Constraints & Decisions (From User)
1. **Ditch Jekyll/Ruby**: User confirmed no need to stick to Jekyll or Ruby gems.
2. **Def Not React**: Absolutely NO React, no heavy SPA frameworks, and no client hydration bloat.
3. **Recommended Engine**: **Astro (Zero-JS Mode)**.
   - Outputs 100% static HTML/CSS.
   - Markdown-native (consumes all 39 posts, Kannada translations, and `books.yml` directly without manual rewriting).
   - Deploys effortlessly to GitHub Pages via standard GitHub Action.
4. **Immediate Clean-up Required**:
   - `node_modules/` was staged into local git during earlier test runs; must be untracked (`git rm -r --cached node_modules`) and `.gitignore` added so it stays out of the remote repo.
   - Delete obsolete testing scratch files (`.impeccable/`, `regions.json`).

## 4. Next Steps for the New Chat
1. **Clean Git Index**: Add `.gitignore` (ignoring `node_modules/`, `.impeccable/`, `.DS_Store`), untrack `node_modules/`, and clean history.
2. **Initialize Astro in Zero-JS Mode**:
   - Port the approved `index.html` into the main layout/page.
   - Build unified page layouts for:
     - `/blog`: Curated listing with categories and reading view for the 39 posts.
     - `/projects`: Refined table/cards for KathaaVerse, RxID, and mini-projects.
     - `/books`: 52-book gallery grid with cover artwork.
     - `/teaching` & `/musings`: YouTube and creative works.
3. **GitHub Pages Deployment**: Add `.github/workflows/deploy.yml` for automated static deployment.
