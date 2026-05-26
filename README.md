# InnoTech Summit — Hackathon Website

Official landing page for **InnoTech Summit**, a 12 + 12 hour hackathon at SSIT College, Tumkur (April 1–2, 2026).

**Live site:** [https://innohacksummit.netlify.app/](https://innohacksummit.netlify.app/)

**Repository:** [github.com/mohithkumar4/hackathonweb](https://github.com/mohithkumar4/hackathonweb)

**License:** [MIT](LICENSE) — free to use, modify, and publish this code and site.

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
- Static export (`output: 'export'`) — deployed on [Netlify](https://innohacksummit.netlify.app/)

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

## Deployment

The production site is hosted on **Netlify:** [innohacksummit.netlify.app](https://innohacksummit.netlify.app/)

After code changes, rebuild and deploy the `out/` folder (Netlify, GitHub Pages, or any static host):

**GitHub Pages (optional):** Settings → Pages → branch `main` → folder `/innotech-summit/out`

After local changes:

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

This project is released under the **MIT License**. You are free to use, copy, modify, merge, publish, distribute, and sublicense the source code and deploy your own version of the site. See [LICENSE](LICENSE) for the full text.
