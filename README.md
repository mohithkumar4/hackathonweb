# InnoTech Summit — Hackathon Website

Official landing page for **InnoTech Summit**, a 12 + 12 hour hackathon at SSIT College, Tumkur (April 1–2, 2026).

**Live site (GitHub Pages):** Configure Pages to serve from `/innotech-summit/out` after enabling GitHub Pages on this repository.

**Repository:** [github.com/mohithkumar4/hackathonweb](https://github.com/mohithkumar4/hackathonweb)

---

## About the event

| | |
|---|---|
| **Date** | April 1–2, 2026 |
| **Venue** | SSIT College, Tumkur |
| **Format** | 12 + 12 hour hackathon |
| **Prize pool** | ₹20,000 (1st ₹15K · 2nd ₹10K · 3rd ₹5K) |
| **Entry fee** | ₹449 per team |
| **Registration** | [Google Form](https://forms.gle/qMn9jiUL3578XmC78) |

**Tracks:** AI/ML · Social Impact · HealthTech · Web3/Blockchain · Sustainability · Open Innovation

---

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- Static export (`output: 'export'`) for GitHub Pages

---

## Project structure

```
Hackathon/
├── README.md
├── .gitignore
└── innotech-summit/
    ├── app/              # Pages & global styles
    ├── components/       # UI sections (Hero, Tracks, Team, etc.)
    ├── data/event.ts     # Event copy, timeline, prizes
    ├── public/           # Images & static assets
    ├── out/              # Production build (static HTML)
    ├── package.json
    └── next.config.mjs
```

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

### Install & run locally

```bash
cd innotech-summit
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
cd innotech-summit
npm run build
```

Static files are written to `innotech-summit/out/`. Commit and push `out/` after each build if you deploy via GitHub Pages from that folder.

### Lint

```bash
npm run lint
```

---

## Deploy on GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. **Source:** Deploy from a branch.
4. **Branch:** `main`
5. **Folder:** `/innotech-summit/out`
6. Save. Your site will be available at `https://<username>.github.io/hackathonweb/` (paths may include the repo name depending on your Pages URL).

After code changes, rebuild and push:

```bash
cd innotech-summit
npm run build
cd ..
git add .
git commit -m "Rebuild static site"
git push
```

---

## What's not in git

These are generated locally and listed in `.gitignore`:

- `innotech-summit/node_modules/` — install with `npm install`
- `innotech-summit/.next/` — created by `npm run dev` / `npm run build`

---

## Team

Built for InnoTech Summit by the organizing team. Team photos and details are on the site under **Team**.

---

## License

Private hackathon project. All rights reserved unless otherwise noted by the organizers.
