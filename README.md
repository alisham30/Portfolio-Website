# Alisha Mathias — Portfolio

A cinematic, dark-mode portfolio website built with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion** — featuring a custom cursor, an animated reveal loader, a Fraunces serif name treatment, and editorial numbered sections.

> **Live:** [alishamathiasportfoliowebsite.netlify.app](https://alishamathiasportfoliowebsite.netlify.app/)
> **Author:** Alisha Mathias · B.Tech CSE (Data Science), DJ Sanghvi College of Engineering

---

## ✨ Highlights

- **Cinematic loader** — staggered letter reveal of the name with a live 0–100 counter, gradient progress bar, vertical edge accents, and a smooth wipe-up transition into the site.
- **Custom cursor** — small mix-blend dot tracking the mouse precisely, paired with a lagging outer ring that grows on hover and shrinks on click. Auto-disabled on touch devices.
- **Editorial typography** — name set in **Fraunces** (variable italic serif). Sections numbered `01 — 07` with gradient hairlines.
- **Aurora theme** — deep midnight base with drifting blue → violet glow blobs, dot grid texture, and glassmorphism cards.
- **Asymmetric hero** — oversized italic name, portrait card with corner crops, ghosted marquee text drifting in the background, vertical "Building → RepFlow" caption.
- **Fully responsive** with mobile drawer navigation and active-section highlighting.
- **Project showcase** with status badges (`Shipped` / `In Development` / `1st Runner-Up`), flagship markers, and gradient accent stripes.
- **Working contact form** that opens the visitor's email client with a prefilled message.

---

## 🧰 Tech Stack

| Layer | Tools |
|---|---|
| Framework | React 18, Vite 5 |
| Styling | Tailwind CSS 3, custom CSS utilities, glassmorphism |
| Animation | Framer Motion, custom `requestAnimationFrame` cursor |
| Fonts | Fraunces (serif italic), Plus Jakarta Sans (display), Inter (body), Instrument Serif |
| Icons | Lucide React |
| Deployment | Netlify |

---

## 📁 Project Structure

```
Portfolio-Website/
├── public/
│   ├── Alisha_Mathias_Resume.pdf
│   ├── final.jpg              # Hero portrait
│   ├── here-win.jpg           # HERE Geospatial Hackathon win
│   └── win.jpg                # CodeCraft UI/UX win
├── src/
│   ├── components/
│   │   ├── About.jsx          # Includes the reusable SectionHeader
│   │   ├── Certifications.jsx # Featured HERE win + grid of certs
│   │   ├── Contact.jsx
│   │   ├── CustomCursor.jsx   # Lerp-tracked cursor
│   │   ├── Education.jsx
│   │   ├── Experience.jsx     # DigiKendr timeline
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx           # Asymmetric Fraunces hero
│   │   ├── LoadingScreen.jsx  # Fancy reveal sequence
│   │   ├── Navbar.jsx         # Active-section underline
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── ThemeProvider.jsx
│   ├── App.jsx
│   ├── index.css              # Cursor styles, aurora, glass utils
│   └── main.jsx
├── index.html
├── tailwind.config.js         # Blue/violet/teal palette
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18
- **npm** (or yarn / pnpm)

### Install & Run

```bash
# Clone
git clone https://github.com/alisham30/Portfolio-Website.git
cd Portfolio-Website

# Install
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview the production build locally
npm run preview
```

---

## 📑 Sections

| # | Section | Content |
|---|---|---|
| 00 | **Hero** | Fraunces italic name, status pill, achievement badges, portrait card |
| 01 | **About** | Bio + four focus areas (Full-Stack, AI/CV, Data Eng, Cloud/DevOps) |
| 02 | **Experience** | DigiKendr internship (Oct 2025 – Jan 2026) on a timeline |
| 03 | **Projects** | RepFlow, Sahaay, HERE Geospatial, MLOps Login Anomaly, Who Lies Tonight, NIFTY |
| 04 | **Skills** | Eight categories — Software, Backend, Data Eng, Cloud, DBs, AI/ML, Tools, BI |
| 05 | **Achievements** | Featured HERE Hackathon win + IBM Data Eng cert, AWS Academy, etc. |
| 06 | **Education** | DJ Sanghvi (CGPA 9.17) + HSC Maharashtra Board (82.33%) |
| 07 | **Contact** | Email / phone / LinkedIn / GitHub + mailto form |

---

## 🎨 Customizing

### Update content
Each section's data lives at the top of its component as a plain array — no CMS needed:
- **Projects:** `src/components/Projects.jsx` → `projects`
- **Skills:** `src/components/Skills.jsx` → `categories`
- **Experience:** `src/components/Experience.jsx` → `experiences`
- **Achievements:** `src/components/Certifications.jsx` → `featured` + `items`
- **Education:** `src/components/Education.jsx` → `educationData`

### Theme & palette
Tweak `tailwind.config.js` — the active palette is `primary` (blue), `violet`, `teal`, and a neutral `ink` ramp.

### Resume
Replace `public/Alisha_Mathias_Resume.pdf` with your own (keep the filename to avoid touching the download button).

### Photos
- `public/final.jpg` — hero portrait
- `public/here-win.jpg` — featured award card
- `public/win.jpg` — secondary achievement card

### Custom cursor
Tune lerp speed (`0.18`) and hover ring size in `src/components/CustomCursor.jsx` and `src/index.css` (`.cursor-ring.is-hover`).

### Loading screen
Adjust total duration (`duration = 2200`) and counter speed in `src/components/LoadingScreen.jsx`.

---

## 🛫 Deployment

### Netlify (current)
```bash
npm run build
# Drag /dist into Netlify, or connect the repo:
#   Build command:  npm run build
#   Publish dir:    dist
```

### Vercel
Import the repo — Vercel auto-detects Vite. No config needed.

### GitHub Pages
```bash
npm i -D gh-pages
# package.json:
#   "scripts": { "deploy": "gh-pages -d dist" }
npm run build && npm run deploy
```

---

## 🧠 Design Decisions

- **Dark-only.** A developer/AI portfolio reads cleaner in a single dark aesthetic — the theme toggle was removed to keep visuals consistent.
- **Serif name.** Fraunces italic at extreme display sizes gives the page personality without leaning on tired sans-serif tropes.
- **No code/terminal vibes.** Avoids the cliché "developer in a console" look — the design feels editorial, like a fashion-magazine spread for engineering work.
- **One real flagship.** Every project card is honest about whether it's shipped, in development, or an award winner — no fake demo links.

---

## 📜 License

MIT — free to fork and adapt for your own portfolio. Please don't keep the personal copy or photos.

---

## 👋 Author

**Alisha Mathias** · Mumbai, India
- 🌐 [Portfolio](https://alishamathiasportfoliowebsite.netlify.app/)
- 💼 [LinkedIn](https://www.linkedin.com/in/alisha-mathias-85a44427b)
- 💻 [GitHub](https://github.com/alisham30)
- ✉️ alishamathias05@gmail.com

> ⭐ If this design inspired you, a star on the repo goes a long way.
