# aykon-website

**aykonventures.com** — the marketing & holding house's website.

## Quick start

```bash
cd aykon-website
claude
```

Claude Code auto-loads `CLAUDE.md`. That file points to the brand reference files in `brand/` and gives the agent a build order.

## What's in here

```
aykon-website/
├── CLAUDE.md                 # Agent context — auto-loaded by Claude Code
├── README.md                 # This file
├── .gitignore
└── brand/
    ├── BRAND_BOOK.md         # Brand book in Markdown (the agent reads this)
    ├── BRAND_BOOK.pdf        # Designed PDF (humans read this)
    ├── BRAND_BOOK.html       # Source HTML
    ├── voice.md              # Voice principles + sample copy + banned words
    ├── architecture.md       # Site map + page intents + bilingual rules
    ├── content-schema.md     # Deal/thesis content collection schema
    ├── colors.json           # Design tokens → Tailwind theme
    ├── typography.json       # Design tokens → Tailwind theme
    ├── images/               # Brand reference images
    └── fonts/                # All five typefaces
```

## Recommended stack

Astro + Tailwind + Markdown content collections + Vercel. Reasoning in `CLAUDE.md`.

## Domain

`aykonventures.com` — registered. Point DNS at Vercel (or your host) once the build is ready to ship.

## Git workflow

1. `git init` (if fresh) or drop these files into your existing repo
2. `git add . && git commit -m "chore: seed brand assets, CLAUDE.md, and content schemas"`
3. `git push`
4. `cd` in, run `claude`, scaffold the Astro app, commit and push each working slice

---
*Brand Book · Edition 02 · Final · 29 May 2026*
