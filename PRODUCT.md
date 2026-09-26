# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro — static-first, Markdown-native, GitHub Pages deploy. Selected by the user from recommendation. Islands architecture for interactive elements (search, etc.) where needed.

## Users

Karthikeshwar himself, first. A personal archive of thinking, building, and creating. The public sees it too — peers, fellow builders, thinkers, the curious — but the site is not optimized to sell to any particular audience. Best design comes when it's not selling to anyone particular.

## Product Purpose

Personal website and intellectual home for Karthikeshwar — a computer science enthusiast and AI practitioner. Houses long-form essays, project documentation, book reflections, teaching materials, creative work (painting, music), and Kannada-language translations. The site exists to hold and organize a body of thought and work that spans years, with no end date.

## Positioning

An individual's living archive — not a portfolio performing for recruiters, not a blog chasing traffic. The writing has soul behind it (explicitly: "No AI is used in writing my blogs. So there is soul behind every imperfect word, and meaning behind every suboptimal sentence."). The projects speak for themselves (KathaaVerse reached #1 on Hacker News). The range — from AI manifestos to Kannada poetry to acrylic paintings — is the differentiator. No persona, just the person.

## Operating Context

- Blog posts are organized in year-based subdirectories (`blog/2021/`, `blog/2022/`, ..., `blog/timeless/`). This structure must survive.
- 39 existing blog posts, mostly without frontmatter (raw HTML headings). Can be reformatted with frontmatter and normalized headings to improve search/listing.
- Mixed naming conventions across posts (kebab-case, snake_case, spaces). Can be normalized.
- Kannada translations use `_kn.md` suffix (e.g., `Truth_in_Myths_kn.md`). Must be preserved.
- Client-side full-text search over `search_index.json`, auto-generated via GitHub Actions. Functionality must survive; implementation can improve.
- Books collection: 52 books in `_data/books.yml` with 52 cover images. Grid display with card components. Must survive.
- Curated blog listing on `/blog/` with editorial sections (top clicks, books, resources, etc.).
- Teaching page: 5 YouTube playlist links. Can be reorganized.
- Musings page: painting (with Kannada poetry) and piano playlist. Can be reorganized.
- Projects page: table format with main and mini projects. Has a stale Gatsby artifact (`projects/index.html` from 2021) that should be removed.
- Custom serif font: Calendas Plus (`calendas_plus-webfont.ttf`).
- Hosted on GitHub Pages. CI/CD workflow for search index generation exists.
- Phased rollout preferred — nail each phase before moving to the next.

## Capabilities and Constraints

- Must work excellently on mobile and desktop.
- Must deploy to GitHub Pages (static output).
- Must preserve the year-based blog folder structure.
- Blog posts can be lightly reformatted (frontmatter, heading normalization) but content must not change.
- All existing content (blogs, books, projects, teaching, musings, Kannada translations) must survive. Organization and presentation can improve.
- Search must remain client-side and full-text.
- No requirement for CMS, comments, analytics, or authentication.
- Performance: must be smooth and fast. Astro's static-first approach and minimal JS align with this.

## Evidence on Hand

- 39 blog posts with substantial long-form content spanning 2021–2026.
- 52 book entries with cover images and categorization (Cosmos, Society, Human, Micro).
- Profile photo: `assets/images/Karthikeshwar_shades_sky.jpg`.
- Favicon: `favicon.svg` (EB Garamond K on paper), with `favicon.ico` and `apple-touch-icon.png`.
- Custom font: `assets/fonts/calendas_plus-webfont.ttf`.
- Painting: `musings/images/Alegalhu.jpg` and `Alegalhu BW.jpg`.
- Teaching content: 5 YouTube playlist URLs.
- GitHub Actions workflow for search index.
- No testimonials, case studies, or press clippings to fabricate.

## Product Principles

1. **Archive over performance** — The site is a living record of thought and work, not a conversion funnel. Longevity over trends.
2. **Soul over polish** — The imperfect, human quality of the writing and work is a feature. Don't sand it away.
3. **Structure serves retrieval** — Organization exists so Karthikeshwar (and readers) can find things. Year-folders, search, curated lists — these are tools, not decoration.
4. **Range is the identity** — AI essays, Kannada poetry, acrylic paintings, game controller apps, book reflections. The breadth is the point.
5. **Phased craft** — Ship in deliberate phases. Nail each one before moving on.
