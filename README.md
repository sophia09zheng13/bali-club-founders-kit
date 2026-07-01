# BALI Club Founder's Kit — Website

A self-contained website that helps students launch and run their own **BALI Club** chapter,
supporting children's education in Tulamben, Bali. It runs entirely in the browser — there is
no server, no API key, and no backend to maintain.

Built with **Vite + React**. The whole app lives in `src/FoundersKit.jsx` (all styles, copy, and
images are inside that one file).

---

## 1. Requirements

- **Node.js 18 or newer** (includes `npm`). Check with `node -v`.
  - Don't have it? Install from https://nodejs.org (LTS).

## 2. Run it locally

From this folder:

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173). Edits to `src/FoundersKit.jsx`
hot-reload instantly.

## 3. Build for production

```bash
npm run build
```

This creates a `dist/` folder containing plain static files (HTML/JS/CSS). That folder **is**
your website — it can be hosted anywhere. To preview the built version locally:

```bash
npm run preview
```

## 4. Put it online (pick one)

**Vercel (easiest, free)**
1. Create a free account at https://vercel.com.
2. Either drag-and-drop the `dist/` folder into a new project, or connect a GitHub repo and
   Vercel auto-detects Vite (build command `npm run build`, output `dist`).
3. You get a live URL like `bali-club.vercel.app`.

**Netlify (also easy, free)**
1. Sign up at https://app.netlify.com.
2. Drag the `dist/` folder onto the "deploy" area, or connect a repo (build `npm run build`,
   publish directory `dist`).

**Any static host / your own domain**
- Upload the contents of `dist/` to any static host (Cloudflare Pages, GitHub Pages, S3, your
  school's web space, etc.).
- **GitHub Pages note:** if the site lives at `username.github.io/repo-name/`, open
  `vite.config.js` and set `base: "/repo-name/"`, then rebuild.

**Embed on the Suwandi Foundation site**
- Host it as above and drop it into a page with an `<iframe>`, or serve the `dist/` files from a
  sub-folder of the foundation's site.

---

## Good to know

- **Data storage:** Founders' fundraising entries and setup are saved in the browser via
  `localStorage`. That means data is per-device / per-browser and is **not** shared between
  people or synced across devices — which is exactly right for a self-serve kit where each
  founder manages their own chapter. The built-in import/export (spreadsheet) lets them move
  data or back it up.
- **Fonts:** Headings use *Fraunces* and body text uses *Inter*, loaded from Google Fonts, so the
  page needs an internet connection to look its best (it degrades gracefully to system fonts
  offline).
- **Images:** The Mount Agung photo and the club emblem are embedded directly in the code
  (as data URIs), so there are no separate image files to manage or upload.
- **Editing the words:** Near the top of `src/FoundersKit.jsx` there's a `CONTENT` object marked
  `EDIT YOUR WORDS HERE` — change titles, the mission text, links, and FAQ there without touching
  the layout.
- **Spreadsheet features** use the `xlsx` library (installed automatically by `npm install`).

---

## Project structure

```
bali-club-website/
├─ index.html            # page shell + <div id="root">
├─ package.json          # dependencies and scripts
├─ vite.config.js        # build config (set base here for sub-path hosting)
├─ src/
│  ├─ main.jsx           # mounts the app
│  ├─ index.css          # page backdrop only
│  └─ FoundersKit.jsx    # the entire app (edit CONTENT here)
└─ README.md
```
