---
name: Karthikeshwar (Current System)
description: The incumbent minimal, classic manuscript design before the revamp.
colors:
  text-main: "#1a1a1a"
  text-secondary: "#777777"
  text-tertiary: "#999999"
  neutral-bg: "#ffffff"
  border-light: "#e8e8e8"
  brand-link: "#2a7ae2"
typography:
  body:
    fontFamily: '"calendas_plusregular", serif'
    fontWeight: "400"
    lineHeight: "1.5"
rounded:
  sm: "3px"
  md: "6px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "30px"
components:
  book-card:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.text-main}"
    rounded: "{rounded.md}"
    padding: "12px 10px 14px"
---

# Design System: Karthikeshwar (Current System)

## Overview

**Creative North Star: "The Quiet Gallery"**

The current design is a highly minimal, restrained environment that acts as a silent backdrop for the content. Anchored by the classic Calendas Plus serif font, it prioritizes reading experience and content structure over decoration. It serves as a utilitarian but elegant starting point that gets out of the way entirely.

**Key Characteristics:**
- Content-first and highly minimal.
- Classic, printed-book typography feel.
- Generous use of whitespace and simple borders.

## Colors

Ink and Paper: A high-contrast monochrome palette with subtle grays for hierarchy.

### Neutral
- **Text Main** (#1a1a1a): Used for headings and primary content.
- **Text Secondary** (#777777): Used for metadata like author names.
- **Text Tertiary** (#999999): Used for subtle notes and italicized context.
- **Background** (#ffffff): Pure white for the page and card backgrounds.
- **Border Light** (#e8e8e8): Used for subtle definition on cards and dividers.

### Primary
- **Brand Link** (#2a7ae2): The default Minima blue used for text links.

## Typography

**Body Font:** "calendas_plusregular", serif
**Code Font:** "Menlo", "Inconsolata", monospace

**Character:** A traditional, academic serif that gives the site the feel of a classic manuscript or printed book.

### Hierarchy
- **Body** (400, 1rem, 1.5): The primary reading text.
- **Title** (300, 1.625rem): Used for the site title and main page headings.

## Layout

The site uses a single-column reading layout that is centered on the page. The content wrapper has a maximum width that scales down on larger screens (from 96% on mobile to 72% on ultra-wide screens) to maintain a comfortable reading line length.

## Elevation & Depth

The site is mostly flat and grounded, but uses depth sparingly to give physical presence to specific elements like book covers.

### Shadow Vocabulary
- **Card Shadow** (`box-shadow: 0 1px 4px rgba(0,0,0,0.06)`): A very subtle baseline shadow for book cards.
- **Card Hover** (`box-shadow: 0 4px 14px rgba(0,0,0,0.11)`): A deeper, lifted shadow when interacting with a card.
- **Image Shadow** (`box-shadow: 2px 3px 8px rgba(0,0,0,0.15)`): A permanent, directional shadow on book cover images to make them feel like physical objects.

## Shapes

Forms are simple and geometric, utilizing very subtle rounding (`3px` for images, `6px` for cards) to soften the edges without looking overly modern or bubbly.

## Components

### Book Card
- **Shape:** Softly rounded corners (6px radius).
- **Background:** Pure white with a delicate 1px border (#e8e8e8).
- **Hover:** The card lifts slightly (`translateY(-2px)`) and the shadow deepens.
- **Internal Padding:** 12px 10px 14px.

### Book Image
- **Shape:** 3px border radius.
- **Depth:** Permanent drop shadow to simulate a physical book resting on the page.

## Do's and Don'ts

### Do:
- **Do** use the Calendas Plus font for all primary reading material to maintain the classic manuscript feel.
- **Do** rely on generous whitespace and simple borders rather than heavy background colors to separate content.

### Don't:
- **Don't** use heavy shadows on text or structural layout elements; reserve depth for interactive components like cards.
