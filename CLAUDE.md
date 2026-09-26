# CLAUDE.md

## Design system upkeep

`DESIGN.md` is the concise, living design reference: rules, tokens, and a dated decision log. `DESIGN_BIBLE.md` is the long history.

- **Before** any UI, style, font, layout, image or homepage-copy change: read `DESIGN.md` and follow its Rules and Don'ts (especially: no motion, square corners, one down-left shadow per object, 0.05–0.1em tracking on capitals, EB Garamond).
- **In the same change** that alters the design:
  1. Update the affected rule in `DESIGN.md`, and its frontmatter tokens if values changed. They must match `src/styles/global.css`.
  2. Append one line to the **Decision log**: `**YYYY-MM · decision.** why.`
  3. For a change of direction (new concept, new face, new layout), also add a short dated section to `DESIGN_BIBLE.md`.
- If the user asks for something the Don'ts forbid, do it, and log it as a decision with their reason.
- Keep entries short: one line each, no restating the code.
