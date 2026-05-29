# AYKON VENTURES — Website Project

You are building **aykonventures.com** — the marketing & holding house's primary web presence. This file is your starting context. Read it, then read the brand files in `brand/` for the full system.

---

## Read-this-first checklist

Before you write any code, read these four files in this order:

1. **`brand/BRAND_BOOK.md`** — the 37-page master brand book in Markdown. The source of truth for every brand decision. Read top to bottom once.
2. **`brand/voice.md`** — voice principles, sample copy off/on-brand, tagline ladder, banned words. Reference whenever writing UI strings.
3. **`brand/architecture.md`** — full site map, what each page does, bilingual structure, URL conventions.
4. **`brand/content-schema.md`** — deal/thesis content collection schema. Read before scaffolding the content model.

Then import these as design tokens:

5. **`brand/colors.json`** — palette with HEX/RGB and usage discipline. Paste into Tailwind theme.
6. **`brand/typography.json`** — type faces, scale, pairing rules, and a ready-to-paste Tailwind `fontFamily` block.

If you ever need visual reference, open **`brand/BRAND_BOOK.pdf`** (37 pages, designed PDF) or **`brand/BRAND_BOOK.html`** (source HTML).

---

## Project shape (TL;DR)

**Aykon Ventures** is a Dubai marketing + holding house licensed under Meydan Free Zone (LLC, formation 2645134, manager: Prachi Vishesh Manghnani). NOT a developer, NOT a brokerage, NOT a fund. Three licensed activities: social media marketing, own-account investment (club style), marketing management.

**Tagline (default for hero):** *We back what we sell.*

**Architecture:** Aykon Ventures (parent) + Aykon Jewels (jewellery) + Aykon Spaces (architecture).

**Wordmark direction locked:** Route C — Private Institution (upright Roman caps editorial serif). Final cut going to external type designer. **Use Cinzel as placeholder; build a single wordmark component for one-file swap when the custom mark lands.**

---

## Tech stack — recommended

**Use Astro + Tailwind + Markdown content collections + Vercel.**

- **Astro** — static-first, content-heavy, supports MDX, image optimisation, partial hydration.
- **Tailwind** — utility-first CSS with the design tokens from `brand/colors.json` and `brand/typography.json`.
- **Markdown content collections** — deals, theses, partners as Markdown files; non-dev can update content.
- **Vercel** — zero-config deploy, preview environments, free tier covers this scale.

Alternatives if Astro feels heavy: **Eleventy (11ty)**. If the site later grows into authenticated co-investor portals: **Next.js**. Avoid WordPress / Squarespace.

---

## Build order

1. **Scaffold Astro + Tailwind** with the design tokens from `brand/colors.json` and `brand/typography.json` paste-imported into `tailwind.config.js`.
2. **Build the layout shell** — onyx footer, limestone body, gold accents minimal. Smoke-test the type pairing on a sample page.
3. **Build the home page** — hero (Cinzel wordmark + Arabic ايكون فينتشرز in Amiri + tagline) + latest 3 thesis cards + latest 3 deal cards.
4. **Build the content collection schemas** for deals/theses/partners per `brand/content-schema.md`.
5. **Build `/what-we-back` index + `/what-we-back/[slug]` detail page** — the soul of the site.
6. **Build static pages:** `/what-we-do`, `/partners`, `/about`, `/contact`. Voice from `brand/voice.md`.
7. **Build sub-brand pages:** `/jewels`, `/spaces` per `brand/architecture.md`.
8. **Bilingual:** scaffold `/ar/` mirror with RTL + Amiri body. Stub every Arabic string as `// TODO: native Arabic copy lead`.
9. **Deploy** — push to GitHub, connect Vercel, point `aykonventures.com` DNS at Vercel.

---

## Folder map

```
aykon-website/
├── CLAUDE.md                       # This file — you're reading it
├── README.md                       # Quick-start for humans
├── .gitignore
└── brand/
    ├── BRAND_BOOK.md               # ← read first (Markdown, code-interpreter friendly)
    ├── BRAND_BOOK.pdf              # Designed PDF for human reference
    ├── BRAND_BOOK.html             # Source HTML
    ├── voice.md                    # ← read second (voice principles + sample copy + banned)
    ├── architecture.md             # ← read third (site map + page intents + bilingual rules)
    ├── content-schema.md           # ← read fourth (deal/thesis schema before scaffolding content model)
    ├── colors.json                 # Design tokens → paste into Tailwind theme
    ├── typography.json             # Design tokens → paste into Tailwind theme
    ├── images/
    │   ├── three_routes.png        # Three wordmark routes (visual reference)
    │   └── private_institution_reveal.png  # Full locked-direction asset reveal
    └── fonts/
        ├── Cinzel.ttf              # Wordmark / display caps
        ├── Cormorant.ttf           # Editorial (headlines, deks)
        ├── Cormorant-Italic.ttf
        ├── Inter.ttf               # Body / UI
        ├── Amiri-Regular.ttf       # Arabic
        ├── Amiri-Bold.ttf
        └── JetBrainsMono.ttf       # Data / mono
```

---

## Three things NOT to invent

1. **Real Arabic copy.** Stub everything. A native bilingual copy lead writes the final Arabic — never machine-translate.
2. **Promised returns.** Banned by voice. Show stakes, partners, status — never a guaranteed yield. Disqualifying.
3. **RERA partner names.** Leave as `[Partner Legal Name]` placeholder until Prachi confirms the actual contractual partners.

---

## Two open decisions in the brand book

These don't block the site build but note them so they're addressable later:

- **Wordmark final cut** — Cinzel placeholder now; swap when the type designer delivers the custom Roman caps mark. Build a single `<Wordmark />` component for one-file swap.
- **Tagline** — four kept live for A/B testing. Default `We back what we sell.` on hero. Treat as a config value (env var or content collection field) so it can rotate without redeploy.

---

## When you start

Read `brand/BRAND_BOOK.md` end-to-end. Then ask the user one question:

> *"Astro + Tailwind + Vercel? And are we deploying straight to aykonventures.com, or staging first?"*

Then scaffold.

— Edition 02 · Final · 29 May 2026
