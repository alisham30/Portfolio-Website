<div align="center">

# alisha.dev — v3

#### My personal portfolio, designed in Figma and built with React, Vite, Tailwind CSS and Framer Motion.

[![Made with React](https://img.shields.io/badge/Made_with-React_18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Netlify Status](https://img.shields.io/badge/deploys-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://alishamathiasportfoliowebsite.netlify.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

### 🔗 [alishamathiasportfoliowebsite.netlify.app](https://alishamathiasportfoliowebsite.netlify.app/)

![Demo](./public/image.png)

</div>

---

## 🛠 Built With

- **[React 18](https://react.dev)** — UI library
- **[Vite 5](https://vitejs.dev)** — build tool & dev server
- **[Tailwind CSS 3](https://tailwindcss.com)** — utility-first styling
- **[Framer Motion](https://www.framer.com/motion/)** — animations
- **[Lucide React](https://lucide.dev)** — icons
- **[Fraunces](https://fonts.google.com/specimen/Fraunces)** + **Plus Jakarta Sans** + **Inter** — typography

## ✨ Features

- 🎬 **Cinematic loader** — staggered letter reveal, live 0–100 counter, gradient bar, smooth wipe-up
- 🖱️ **Custom cursor** — mix-blend dot + lerp-tracked outer ring that reacts on hover & click
- ✍️ **Editorial typography** — Fraunces italic name, numbered sections (`01 → 07`), gradient hairlines
- 🌌 **Aurora theme** — drifting blue → violet glows, dot grid, glassmorphism cards
- 📐 **Asymmetric hero** — oversized name, portrait card with corner crops, ghosted marquee text
- 📱 **Fully responsive** with mobile drawer and active-section tracking
- ♿ **Touch-aware** — cursor & hover effects gracefully disable on mobile

## 🚀 Quick Start

```bash
# clone
git clone https://github.com/alisham30/Portfolio-Website.git
cd Portfolio-Website

# install
npm install

# develop → http://localhost:5173
npm run dev

# build for production
npm run build

# preview production build
npm run preview
```

## 📂 Structure

```
src/
├── components/
│   ├── Hero.jsx              # Asymmetric Fraunces hero
│   ├── About.jsx             # SectionHeader lives here
│   ├── Experience.jsx        # DigiKendr timeline
│   ├── Projects.jsx          # RepFlow, Sahaay, HERE Geospatial, ...
│   ├── Skills.jsx
│   ├── Certifications.jsx    # Featured HERE win + cert grid
│   ├── Education.jsx
│   ├── Contact.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── LoadingScreen.jsx     # Fancy reveal sequence
│   └── CustomCursor.jsx      # Lerp-tracked cursor
├── App.jsx
├── index.css                 # Cursor / aurora / glass utilities
└── main.jsx
```

## 🎨 Customizing

Each section's data lives at the top of its component as a plain array — no CMS needed.

| Edit | File |
|---|---|
| Projects | `src/components/Projects.jsx` → `projects` |
| Skills | `src/components/Skills.jsx` → `categories` |
| Experience | `src/components/Experience.jsx` → `experiences` |
| Achievements | `src/components/Certifications.jsx` → `featured`, `items` |
| Education | `src/components/Education.jsx` → `educationData` |
| Resume | replace `public/Alisha_Mathias_Resume.pdf` |
| Palette | `tailwind.config.js` (primary / violet / teal / ink) |

## 🛫 Deployment

This portfolio is deployed on **[Netlify](https://www.netlify.com/)**.

```bash
npm run build
# upload /dist  — or connect the repo:
#   Build command: npm run build
#   Publish dir:   dist
```

Also works out-of-the-box on **Vercel** (auto-detects Vite) and **GitHub Pages** (`gh-pages -d dist`).

## 📄 License

[MIT](LICENSE) — feel free to fork it for your own portfolio. Please replace the personal copy, photos, and resume before deploying.

## 👋 Author

**Alisha Mathias** · Software & AI Developer · Mumbai, India

[![Portfolio](https://img.shields.io/badge/Portfolio-alisha.dev-4f7cff?style=flat-square&logo=safari&logoColor=white)](https://alishamathiasportfoliowebsite.netlify.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Alisha_Mathias-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alisha-mathias-85a44427b)
[![GitHub](https://img.shields.io/badge/GitHub-alisham30-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/alisham30)
[![Email](https://img.shields.io/badge/Email-alishamathias05@gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:alishamathias05@gmail.com)

<div align="center">

⭐ If this design inspired you, a star goes a long way.

</div>
