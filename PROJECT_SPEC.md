# Ahmer Mehmood — portfolio website
Build spec for Claude Code

## What this is

A personal portfolio website for Ahmer Mehmood, showcasing 9+ case studies across SEO,
GTM, and outbound work. Built with Next.js, deployed on Vercel at `ahmermehmood.vercel.app`.

This document is the complete spec. Hand this whole file to Claude Code and it has
everything needed to scaffold the project.

---

## Tech stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel, connected to a GitHub repo, auto-deploys on push
- **Data**: one structured JSON (or TS) file listing all projects — the site reads from
  this rather than having a hand-built page per project. Adding project #10 later means
  adding one entry to this file, not building a new page.
- **Video**: embedded YouTube player per case study
- **Images**: local screenshots, stored in `/public`

---

## Design tokens

Lock these as Tailwind theme values / CSS variables so every page stays consistent.

| Token | Value | Use |
|---|---|---|
| Background | `#faf9f6` | page background |
| Card background | `#ffffff` | cards, stat blocks |
| Card border | `rgba(0,0,0,0.08)` (1px) | all card borders |
| Text primary | `#2c2c2a` | headings, titles |
| Text secondary | `#888780` | body copy, subheadings |
| Text muted | `#5f5e5a` | section body text |
| Accent | `#854F0B` | links, CTAs, stat numbers |
| Accent tag background | `#FAEEDA` | category tag pills |
| Dark block (testimonial, video) | `#2c2c2a` | big testimonial card, video placeholder bg |

**Rules:**
- No gradients, no drop shadows, no glow effects.
- Border radius: 8–14px range, consistently rounded corners, no sharp edges.
- **Sentence case everywhere**, but capitalize the first letter of titles, tags, and nav
  labels (this is normal sentence-case grammar, not Title Case — only the first word
  capitalizes, not every word).
- Serif font (e.g. Georgia or a Google Font serif) reserved only for testimonial quote
  text — italic. Everything else uses a clean sans-serif.
- Two font weights only: regular and semi-bold/bold for headings. Avoid a third weight.

---

## Site structure

### Header (present on every page)

Sticky or static header with:
- Name/logo on the left: "Ahmer Mehmood"
- Nav links on the right: `Work` `Stack` `Story` `Recognition` (anchor links scrolling
  to homepage sections) + `Projects →` (real link to `/projects`, styled in accent color
  to stand out as the primary nav action)
- On the projects index and case study pages, the same nav appears, with anchor links
  pointing back to `/#work`, `/#stack`, etc.

### Page 1: Homepage (`/`)

Single scrolling page with these sections in order:

1. **Hero**
   - Small accent-colored eyebrow line: "SEO · GTM · Outbound"
   - H1: "I help home services and B2B companies grow through SEO, GTM, and outbound"
   - Subtext: short 1–2 sentence summary (15+ years, two agencies, 9+ case studies)
   - Two buttons: "Get in touch" (primary, dark fill) and "See all work" (secondary,
     outline) — both scroll/link appropriately
   - Headshot photo, right-aligned, rounded rectangle frame, roughly 40% width on
     desktop. Use a placeholder image until Ahmer supplies the real photo.

2. **What I do** (`id="work"` anchor target can start here or at Recent work — pick one)
   - 2 short paragraphs, first person, explaining the two agencies and how the work
     splits (hands-on delivery vs. systems/ops)

3. **Recent work** (`id="work"`)
   - Category filter pills: All, SEO, GTM, Outbound, Positioning, Local SEO (multi-select
     — a project can match more than one active filter)
   - Horizontally scrollable row of 4–6 featured project cards (NOT all 9+, this is a
     teaser). Each card: 16:9 thumbnail with centered play-button overlay, category
     tag(s), title, one-line result.
   - Below the row: text link "View all 9 case studies on the projects page" → `/projects`

4. **Testimonial** (big, standalone)
   - Full-width dark card (`#2c2c2a` background), centered serif italic quote, light
     gray attribution line below
   - Pull from your 2–3 strongest overall testimonials (rotate or pick one, your call)

5. **My story** (`id="story"`)
   - Subsection: **Who I am** — based in [city], years of experience, one personal
     detail (e.g. building a GTM personal brand)
   - Subsection: **The journey** — career narrative, in-house → agency → independent
   - Subsection: **How I work** — working philosophy, what makes the diverse background
     an advantage

6. **The stack** (`id="stack"`)
   - Intro line: "What I use day to day. Not exhaustive, updated as the workflow shifts."
   - Grouped tag pills by category. Categories: SEO & local search, Outbound & GTM,
     AI tooling, Project & client management. (Final tool names to be supplied by Ahmer
     — see Content checklist below.)

7. **Recognition** (`id="recognition"`)
   - Vertical timeline list: year (accent color, bold) + one-line description, left
     border accent stripe. Awards, certifications, education combined chronologically
     or grouped — Ahmer's call once content is supplied.

8. **Get in touch**
   - Short line + email link (styled in accent color)

9. **Footer**
   - Left: `© Ahmer Mehmood [current year]`
   - Right: `LinkedIn` `GitHub` — both real links, open in new tab

### Page 2: Projects index (`/projects`)

- Header: "Case studies" + subtext "9 projects across SEO, GTM, and outbound" (count
  should pull dynamically from the data file length, not be hardcoded)
- Same filter pills as homepage (All, SEO, GTM, Outbound, Positioning, Local SEO),
  fully functional — filtering should update the grid live, no page reload
- 3-column responsive grid (collapses to 1 column on mobile) of ALL projects. Each card
  identical in structure to the homepage teaser cards: 16:9 thumbnail + play button,
  tag(s), title, one-line result.
- Each card links to `/projects/[slug]`

### Page 3: Case study template (`/projects/[slug]`)

Dynamic route, one template, reused for every project entry in the data file.

1. `← Back to case studies` link → `/projects`
2. Category tag(s)
3. Title (H1)
4. Subheading: client/company + industry + engagement type (NO duration/time
   references — explicitly excluded per design decision)
5. YouTube video embed, full width, 16:9, dark background while loading
6. **Exactly 2 stat cards**, side by side. Each stat is `{ value: string, label: string }`
   — flexible per project, no fixed metric type, and explicitly NO time-based metric
   (e.g. don't default to "time to result")
7. **The problem** — heading + paragraph
8. **The solution** — heading + paragraph
9. Screenshot image, inline, white card with border
10. **The result** — heading + paragraph
11. Testimonial specific to this project (same dark-card styling component as homepage,
    reused)
12. `Next case study →` link at the bottom, pointing to the next project in the data
    array (wrap around to the first after the last)

---

## Data schema

Create `/data/projects.json` (or `.ts` with a typed interface). Every page reads from
this file. Example shape:

```json
{
  "slug": "b2b-saas-cold-email-rebuild",
  "title": "B2B SaaS cold email rebuild",
  "client": "Series A SaaS company",
  "categories": ["outbound", "gtm"],
  "thumbnail": "/images/projects/saas-cold-email/thumb.jpg",
  "videoUrl": "https://youtube.com/watch?v=XXXXXXXXX",
  "oneLineResult": "Reply rate 1.2% to 4.8%",
  "stats": [
    { "value": "4.8%", "label": "Reply rate" },
    { "value": "3.2x", "label": "Pipeline growth" }
  ],
  "problem": "Their outbound was getting opens but almost no replies...",
  "solution": "Rebuilt the segmentation around buying signals...",
  "result": "Reply rate climbed from 1.2% to 4.8% within the first month...",
  "screenshot": "/images/projects/saas-cold-email/screenshot.jpg",
  "testimonial": {
    "quote": "Ahmer rebuilt our entire outbound motion in three weeks and it actually worked.",
    "attribution": "VP marketing, B2B SaaS client"
  },
  "featured": true
}
```

Notes:
- `categories` is always an array, even for single-category projects (`["seo"]`).
- `stats` is always exactly 2 objects, no more, no fewer, no duration/time field.
- `featured: true` marks which projects show in the homepage teaser row (pick 4–6).
- Category filter values should be derived from the full set of `categories` arrays
  across all projects, deduped — don't hardcode the filter pill list in two places.

---

## Content checklist (Ahmer to supply before/during build)

These are placeholders in the design that need real content:

- [ ] Headshot photo (for hero section)
- [ ] 9+ project entries matching the schema above (problem/solution/result, stats,
      screenshots, video URLs, testimonials)
- [ ] Tech stack tool names, grouped by the 4 categories above
- [ ] Recognition timeline entries (awards, certs, education + years)
- [ ] "Who I am" details — city/country, years of experience, personal detail
- [ ] Contact email
- [ ] LinkedIn and GitHub profile URLs
- [ ] 2–3 strongest overall testimonials for the homepage highlight block

---

## Explicit exclusions (decided during design phase — don't add these back)

- No separate About page — folded into homepage "My story" section
- No separate Testimonials page — testimonials live on homepage + each case study page
- No "time to result" or any duration-based stat anywhere
- No "8 weeks" / duration text in case study subheadings
