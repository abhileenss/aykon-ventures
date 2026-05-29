# Brand Architecture & Site Map

## Brand architecture — one house, three names

```
Aykon Ventures                  ← the parent house, marketing + holding
  ├─ Aykon Jewels               ← jewellery vertical (sub-brand)
  └─ Aykon Spaces               ← architecture + interiors vertical (sub-brand)
```

All three locked. Bureau and Studio retired as documented alternates.

### Aykon Ventures (parent)
The Dubai marketing & holding house. Runs all real-estate marketing under its own name. Holds the small own-account investment stakes. Brand voice and the cap table sit here.

### Aykon Jewels
Fine jewellery — **design and provenance**, not gold by weight. Emerald is the natural accent (emerald + gold is the jewellery pairing). Inherits the parent's brand system; voice modulated to be quieter, more sensory.

### Aykon Spaces
Architecture, interiors, and the future development arm when ground breaks. Same parent system; monograph register for content — spatial, slow, considered.

---

## Site map for aykonventures.com

```
/                          Home — hero + skin-in-game pitch + latest 3 theses + latest 3 deals
/what-we-do                The three licensed activities, explained honestly
/what-we-back              Live deals + theses (the content engine)
/what-we-back/[slug]       Individual deal note or thesis post
/partners                  Named RERA-licensed execution partners
/jewels                    Aykon Jewels mini-site
/jewels/[piece-slug]       Individual jewellery piece
/spaces                    Aykon Spaces mini-site
/spaces/[project-slug]     Individual architecture project
/about                     Prachi as founder + brand book PDF download
/contact                   Direct. Email + WhatsApp. No funnel.

/ar/                       Arabic mirror (RTL, Amiri body, native Arabic copy)
```

---

## Each page · what it does

### `/` (Home)
The brand's pitch in 7 seconds. Onyx hero. Cinzel placeholder wordmark + Arabic ايكون فينتشرز. The current tagline (default `We back what we sell.`). Below the fold: latest three theses and latest three backed deals as cards.

### `/what-we-do`
The three licensed activities, named honestly:
1. **Marketing Services Via Social Media** — what we do most. Content, paid social, founder-led narrative.
2. **Own-account investment (VC/club style)** — the proof of belief. Small stakes Aykon puts in itself. Not a fund. No third-party AUM.
3. **Marketing Management** — the strategy layer.

Plus the **execution partner layer** disclosure: every real-estate transaction is executed through a RERA-licensed partner; Aykon markets and aligns, the partner transacts.

### `/what-we-back` (the content engine — the soul of the site)
A reverse-chronological feed of deals and theses. Each entry on a card showing:
- **Asset**
- **Our stake** (the actual AED figure, plus percentage)
- **RERA Partner** (named)
- **Status** (live · closed · open-to-coinvest)

Filterable by status / type. Pagination or infinite scroll.

### `/what-we-back/[slug]`
The detail page. Full thesis in markdown. Asset details, stake disclosure, RERA partner, status, hero image. **Never a promised return.**

### `/partners`
Named RERA-licensed execution partners. Show:
- Partner legal name
- RERA license number
- Short note on what they execute
- The alignment relationship

### `/jewels`
Aykon Jewels mini-site. Aykon parent wordmark + JEWELS descriptor. Quieter voice. Emerald accent more present. A small grid of pieces (when content exists). Each piece links to a detail page.

### `/spaces`
Aykon Spaces mini-site. Aykon parent wordmark + SPACES descriptor. Monograph register — spatial, slow. Project case studies (when content exists).

### `/about`
Prachi as founder. The licensed reality (the licence is public). Link to download the 37-page brand book PDF.

### `/contact`
Direct. Email (`prachi@aykonventures.com`) and WhatsApp (`+971 56 397 1998`). No form, no funnel, no lead capture.

---

## Bilingual structure

`/ar/` is a complete mirror of `/`, with:
- RTL layout
- Amiri for Arabic body
- The Cinzel + Amiri co-equal lockup in the header
- **Native Arabic copy throughout** — never machine-translate; mark every Arabic string as `// TODO: native Arabic copy lead` until a bilingual lead writes it

Language switcher in the navigation. Persistent language preference (cookie or localStorage).

---

## URL conventions

- Slugs: kebab-case, English-only even in Arabic routes (e.g. `/ar/what-we-back/difc-floor-may-2026`)
- Dates in slugs format `YYYY-MM-asset-descriptor`
- No trailing slashes
- All HTTPS, force www → apex (or vice versa, dev's choice — pick one and stick)

---

## Open items in the brand book that affect the site

- **Wordmark final cut** is going to a type designer. Use Cinzel as placeholder. Build a single wordmark component so swap is one file change.
- **Tagline** rotates between four. Build as a config value (env or content collection) so it can change without redeploy.
- **RERA partner names** stub until Prachi confirms.
