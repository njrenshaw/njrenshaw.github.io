# N. J. Renshaw — official author site

Static source for the official public page of N. J. Renshaw, published at
[njrenshaw.com](https://njrenshaw.com/). The release preserves the
approved Claude design and the final commercial copy.

## Published catalogue

- *Time Leaves by the Side Door* — Practical Stoicism for Ordinary Days
- *The Emperor’s Private Argument* — Stoicism for Power, Duty, Justice and Self-Command
- *Cheap Strength* — Why Counterfeit Discipline Isn’t Enough

Each title links to its Kindle and paperback editions on Amazon. The canonical
published cover files and the selected pen-name portrait are preserved
byte-identically; `asset-manifest.json` records their dimensions, sizes, and
SHA-256 hashes.

## Design and implementation

Plain semantic HTML and CSS with a small progressive-enhancement script; no
framework and no build step. The design system lives in `tokens.css` (OKLCH
palette, type, spacing, motion tokens) and `site.css`. The structure is an
“Examination Ledger”: a split evidence docket in the first viewport, then three
individually art-directed book records, the author, and correspondence routes.
Content remains complete and readable when JavaScript is unavailable.

## Privacy

No analytics, advertising pixels, cookies, forms, downloads, or tracking
scripts. N. J. Renshaw is identified truthfully as a pen name, without invented
credentials or biography. Reader correspondence uses
`njrenshaw.author@proton.me`.

## Local preview

Serve the folder over HTTP and open its root URL. For example:

```text
python -m http.server 8123 --bind 127.0.0.1
```

The GitHub Pages repository is `njrenshaw/njrenshaw.github.io`.
