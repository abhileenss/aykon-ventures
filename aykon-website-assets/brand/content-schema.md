# Content Schema · deals and theses

The "What we back" page is the soul of the site. Each entry is a Markdown file with frontmatter, lives in a content collection (Astro) or `_content/` (Eleventy). This schema is the contract.

---

## Deal & Thesis entry · frontmatter schema

```yaml
---
# Required
type: deal | thesis | both
title: "A full floor in DIFC"
slug: "difc-floor-may-2026"          # kebab-case, English even on Arabic routes
date: 2026-05-29                      # ISO 8601
status: live | closed | open-to-coinvest | passed
location: "DIFC, Dubai"
hero_image: "deals/2026-05-difc-floor.jpg"

# Aykon's alignment proof — these are the brand's whole story
asset_value_aed: 4200000              # the headline figure
aykon_stake_aed: 250000               # our stake in AED
aykon_stake_pct: 6                    # our stake as % of asset

# RERA partner (the regulated executor)
rera_partner: "[Partner Legal Name]"  # stub until Prachi confirms
rera_license: "[XXXXX]"               # RERA license number (stub)

# Voice / tagline used on this entry (for A/B tracking)
tagline_used: "Name on it."           # one of: "Skin in." | "Same side of the table." | "We back what we sell." | "Name on it."

# Optional
co_invest_window_open: false           # if open, surfaces the co-invest CTA
co_invest_min_aed: 50000               # minimum co-invest cheque (only if open)
related_theses: ["why-business-bay"]   # other thesis slugs
tags: ["DIFC", "office", "core"]

# Banned fields — these MUST NOT exist
# yield_pct: NEVER
# guaranteed_return: NEVER
# roi_promise: NEVER
---

# The thesis body in Markdown.

Editorial register. Plain about alignment.
No promised returns. Show stakes, partners, status.

## Why this asset

(prose here)

## Why now

(prose here)

## What's in it for a co-investor

(structural alignment, NOT yield. Same terms, same risk, executed through [RERA Partner].)
```

---

## Card display (on /what-we-back and home page)

Every card surfaces exactly these fields (no more, no less):

```
┌────────────────────────────────────────┐
│  [HERO IMAGE]                          │
│                                        │
│  [STATUS TAG · emerald or gold]        │
│                                        │
│  Title (Cormorant H2)                  │
│  Location · mono eyebrow               │
│                                        │
│  Asset    AED 4,200,000  ← mono        │
│  Our stake  AED 250,000  (6%)          │
│  RERA partner  [Partner Legal Name]    │
│                                        │
│  [tagline used · italic Cormorant]     │
└────────────────────────────────────────┘
```

**Never on a card:**
- Promised returns
- "Limited offer" / urgency
- "DM for price"
- Anything that doesn't appear in the frontmatter

---

## File structure (Astro content collections)

```
src/content/
├── deals/
│   ├── 2026-05-difc-floor.md
│   ├── 2026-06-marina-walkup.md
│   └── ...
├── theses/
│   ├── why-business-bay.md
│   ├── why-not-marina.md
│   └── ...
└── partners/
    ├── partner-one.md
    └── partner-two.md
```

If using Eleventy: `_content/deals/`, `_content/theses/`, `_content/partners/`.

---

## Three things to remember

1. **Every entry must disclose:** asset value, our stake, RERA partner, status. The "skin in the game" promise is operational, not decorative.
2. **No promised returns, ever.** It's banned by voice and often non-compliant.
3. **RERA partner is named, not implied.** "Partner" alone is a brand voice violation — name them.
