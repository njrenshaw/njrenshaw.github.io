# DESIGN — the Examination Ledger

This documents the system as built and verified on 2026-08-14, approved for
publication on 2026-08-15, and extended through 2026-08-19 without changing its
visual direction, from rendered evidence at
320/375/414/640/768/1280/1440/1920 CSS px. It records
what the page does, not what was aspired to. Product truth lives in PRODUCT.md.

## The idea

The page is an elegant intellectual examination room. Renshaw’s opening states
the commercial proposition; the books are the evidence; the reader chooses
which claim to examine. Every visual
device serves that reading: ledger rules, evidence exhibits, examination
designations, a single verdict counterpoint. It is not a courtroom theme: no
gavels, stamps, folders, or faux documents anywhere.

## Structural fingerprint — “Examination Ledger” (bespoke)

1. **Institutional masthead** (N6 family): centred wordmark over a centred
   three-link row (Books · Author · Correspondence), closed by an ink hairline
   with a lighter echo rule 4px beneath — the ledger’s double rule. Not the
   incumbent’s N9 edge-aligned nav.
2. **The docket** (first viewport, 7/5 split at ≥60rem): left — the two-tone
   thesis H1 (muted claim, ink verdict, cobalt underscore), the lede, a quiet
   note line, and a direct launch route beside the wider book ledger. Right —
   the **evidence dock**: three published cover exhibits at three
   deliberate scales (Time Leaves ~5 cols, Emperor ~6 cols offset down,
   The Completion Gap ~4 cols indented), each with a Spline Sans Mono caption over a
   hairline. A vertical hairline separates dock from argument. At 1280×800 the
   whole composition — name, thesis, lede, both actions, all three exhibits with
   captions — reads without scrolling. The smallest exhibit is a deliberate
   glimpse: its cover subtitle strip is not legible at that scale; captions and
   the full-size records below carry the information.
3. **The ledger of records**: a 3px ink rule opens the books section; a small
   muted H2 (“The books”), a Spectral statement, and a support line sit
   left-aligned. Each record begins with a full-width hairline that **resolves
   into place** (scaleX draw + cobalt mark) as the reader reaches it. Record
   compositions share one grammar (title → subtitle → mono designation →
   description → hook → destinations) across four records and three geometries:
   A cover-left
   with the plate extended toward the page edge (the one grid-break); B
   argument-left with the largest cover right; C argument-left with a smaller
   cover right, raised across its own rule; D returns to the cover-left grammar
   for the newest release. B and C share a side by design — variation comes
   from scale and vertical offset, not mirroring. On single
   column widths every record leads with its cover (DOM order), so tab order
   and visual order agree.
4. **The Machine Witness bridge**: a ruled two-column entry after the book
   ledger. The left column names the publication and its honest editorial
   status; the right column gives one Spectral proposition, one exact scope
   paragraph, and one underlined route. It extends the examination metaphor
   without adding cards, icons, dark-neon AI styling, generated imagery, or a
   second design language.
5. **Author**: paper-2 recessed band; display H2 “No spotless heroes.”; a small
   portrait plate (240px, hairline border, neutral caption
   “N. J. Renshaw · Author portrait”) beside the four-paragraph Spectral bio.
   The pen-name disclosure does not appear here — it appears exactly once, in
   the footer, per the author’s direction.
6. **Correspondence**: an ink-ruled routes ledger — label left, destination
   right, hairline per row (Write to Renshaw / Amazon Author Page / Goodreads
   author record / BookBub author profile). External rows carry ↗ and
   screen-reader new-tab notes.
7. **Close + footer** (Ft2): one modest closing line — “Read the record that
   argues back.” — anchored by the page’s single oxidized-red mark, then
   an ink hairline and a single footer line: the pen-name disclosure plus three
   text links. Not the incumbent’s Ft5 statement footer.

## Publication pages

`/witness/`, `/privacy/`, and `/the-completion-gap/` reuse the exact typography, surfaces, ledger rules,
square geometry, masthead, footer, focus treatment, and responsive grid. The
publication page uses a claim/verdict opening, a compact data ledger, a ruled
case-file preview, and one recessed subscription band. The privacy page is a
plain legal ledger. Neither page introduces cards, decorative AI imagery,
gradients, iconography, or an alternative color system. The EmailOctopus form
is the sole third-party interactive surface and is confined to `/witness/`.

The Completion Gap page extends the system as an **Acceptance Ledger**. Its
first viewport pairs the canonical cover and publication record with the exact
title, governing tension, Amazon sample, and Kindle route. Below it, ruled rows
make Produced → Checked → Accepted → Usable inspectable; reader outcomes, the
Sarah/Daniel working-week pressure test, and retailer/community destinations
follow without cards, testimonials, scores, or a second visual language.

## Tokens (tokens.css is the source of truth)

- **Palette (OKLCH only):** paper 98.6% 0.004 250 · paper-2 96.6% · ink 16%
  0.018 262 · ink-2 30% · muted 43% · rules 78%/88% · **cobalt accent 46% 0.19
  262** (thesis underscore, record marks, designations, link hovers, focus) ·
  **oxidized-red counterpoint 54% 0.16 32** (exactly one use: the close mark;
  derived from the covers’ shared red) · focus 52% 0.21 262. No pure black or
  white anywhere.
- **Type:** Schibsted Grotesk (display + UI, 500/700) · Spectral (text, 400/500)
  · Spline Sans Mono (annotation outlier in exactly two slots: dock captions and
  record designations). Loaded via Google Fonts CSS with `display=swap`; robust
  local fallback stacks. 1.25 scale from 16px; display clamp 2.3–3.6rem;
  statement clamp 1.3–1.7rem. No italic display anywhere.
- **Geometry:** square world — radius 0 on every control and plate; 1px hairline
  and 3px strong rules; 4px spacing scale (--space-3xs … --space-4xl);
  page max 78rem; gutter clamp(1.25rem, 4vw, 3.5rem).
- **Motion:** one idea — *evidence resolves into place*. Docket exhibits settle
  once on load (8px rise + fade, 70ms stagger); each record rule draws once on
  entry (IntersectionObserver, threshold 0.12). Transform/opacity only; three
  named easings; 120/220/420ms. Hover carries exactly one signal per element.
  Full `prefers-reduced-motion` fallback (everything static and resolved).
  Rules render resolved by default; `site.js` arms the draw only when its
  observer exists, so script failure leaves the ledger fully drawn. Content is
  complete without JavaScript.

## Interaction states

Every link: default · hover (ink→cobalt shift or single 4px cover lift) ·
`:focus-visible` (3px cobalt outline, offset, never animated) · `:active`.
Pointer targets ≥44px (routes 52px). Skip link is the first focusable.

## Accessibility contract (verified)

One H1; H1→H2→H3 order; landmarks header/nav/main/footer; skip link; descriptive
alt on the three record covers and the portrait; dock exhibits are presentational
duplicates (empty alt) inside a group labelled for screen readers; visible mono
captions name each exhibit. No color-only information; 4.5:1+ on all text pairs;
200% zoom and 200% text-only enlargement hold with no overflow and no label
wrap; reduced motion complete; no positive tabindex.

## What this system refuses

Marquee hero, three equal book cards, N9 nav, Ft5 footer, Manrope/Figtree,
warm-cream/serif/terracotta “literary” default, dark-neon “premium” default,
cards, pills, bento, gradients, glass, eyebrows/section numbers, all-caps
micro-labels, italic display, carousels, parallax, custom cursors, fake chrome,
stock or generated filler imagery, testimonials/ratings/metrics of any kind.

## Known accepted trade-offs

- The smallest dock exhibit trades cover-text legibility for evidentiary
  scale-stagger (documented above; information is redundant elsewhere).
- Records A/B keep generous empty quadrants beside tall covers at ≥60rem —
  museum calm bounded by the ledger rules, by intent.
- Google Fonts is the page’s only third-party dependency. Self-hosting the five
  WOFF2 files in `assets/` would remove the last external request and is the
  recommended next hardening step once approved.
