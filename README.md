# N. J. Renshaw — official author site

Static source for the official public site of N. J. Renshaw, published at
[njrenshaw.com](https://njrenshaw.com/). The release preserves the
approved Claude design while extending its editorial scope into artificial
intelligence and society.

## Published catalogue

- *Time Leaves by the Side Door* — Practical Stoicism for Ordinary Days
- *The Emperor’s Private Argument* — Stoicism for Power, Duty, Justice and Self-Command
- *Cheap Strength* — Why Counterfeit Discipline Isn’t Enough

Each title links to its Kindle and paperback editions on Amazon. The canonical
published cover files and the selected pen-name portrait are preserved
byte-identically; `asset-manifest.json` records their dimensions, sizes, and
SHA-256 hashes.

## The Machine Witness

`/witness/` is the public home for case files on artificial intelligence,
power, and accountable judgment. The first file, *Nobody Made the Decision*,
was released on 16 August 2026 as a free R3.1 public reader edition. The private
review PDF remains undeployed; the distinct public PDF is delivered to confirmed
subscribers through the EmailOctopus welcome flow. The page includes adjacent
consent language, double opt-in, reCAPTCHA abuse protection, and a public privacy
notice at `/privacy/`.

## Design and implementation

Plain semantic HTML and CSS with a small progressive-enhancement script; no
framework and no build step. The design system lives in `tokens.css` (OKLCH
palette, type, spacing, motion tokens) and `site.css`. The structure is an
“Examination Ledger”: a split evidence docket in the first viewport, then three
individually art-directed book records, the author, and correspondence routes.
Content remains complete and readable when JavaScript is unavailable.

## Privacy

No first-party analytics, advertising pixels, or session replay. Google Fonts
supplies the site's typefaces. The only third-party interactive embed is the
EmailOctopus form on `/witness/`; that form also uses Google reCAPTCHA for abuse
protection. These services are disclosed at `/privacy/`, and the form and
reCAPTCHA are not loaded on the rest of the site. N. J. Renshaw is
identified truthfully as a pen name, without invented credentials or
biography. Reader correspondence uses
`njrenshaw.author@proton.me`.

## Local preview

Serve the folder over HTTP and open its root URL. For example:

```text
python -m http.server 8123 --bind 127.0.0.1
```

The GitHub Pages repository is `njrenshaw/njrenshaw.github.io`.
