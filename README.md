# EPCMst demo site

A demo copy of [epcmst.com](https://epcmst.com), built for a university project (ENTR 3360, Mount Royal University). It is the publishing target of the **EPCMst Content Operations hub** ([qafa-17/SEEDA-final-1](https://github.com/qafa-17/SEEDA-final-1)).

Built on [AstroWind](https://github.com/arthelokyo/astrowind) (Astro + Tailwind CSS), the same template as the real site. Search engines are asked not to index it.

## How articles get here

1. An article is written, reviewed and approved in the hub.
2. An approver clicks **Publish**. The hub opens a pull request that adds one file, `src/content/resources/<slug>.md`, and merges it.
3. Vercel rebuilds the site. The article appears at `/resources/<slug>` and in `/sitemap-0.xml`.
4. The hub checks both, then marks the article Published.

Every article file uses the front matter from EPCMst's publishing guide (`src/content.config.ts`):

```yaml
---
title: "…"
description: "…"
publishDate: 2026-10-09
category: "Procurement & Compliance"
tags: ["CAPEX Risk", "EPC Procurement"]
draft: false
author: "EPCMst Team"
---
```

A file that doesn't match fails the build, so a broken article never goes live.

## Commands

| Command           | Does                               |
| ----------------- | ---------------------------------- |
| `npm install`     | Install dependencies               |
| `npm run dev`     | Local site at `localhost:4321`     |
| `npm run build`   | Build to `./dist/`                 |
