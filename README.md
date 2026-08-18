# 🌐 Bhuvan G M — Personal Portfolio

> **Founder of Jeeviksha · Web Developer · BTech Student**
>
> A minimal, dark-themed portfolio built to showcase 6+ shipped websites, skills, and the public building journey — live at [bhuvan.live](https://bhuvan.live)

---

## ✨ Live Demo

🔗 **[bhuvan.live](https://bhuvan.live)**

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [React 19](https://react.dev) + [Vite 8](https://vitejs.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Smooth Scroll | [Lenis](https://lenis.darkroom.engineering/) |
| Routing | [React Router DOM v7](https://reactrouter.com) |
| Icons | [Lucide React](https://lucide.dev) |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| Deployment | [GitHub Pages](https://pages.github.com) (custom domain) |

---

## 🗂️ Project Structure

```
portpolio/
├── public/
│   └── profile.jpg          # Profile photo
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Landing hero with animated text
│   │   ├── About.jsx         # About section with profile image
│   │   ├── Projects.jsx      # Shipped websites grid
│   │   ├── Skills.jsx        # Technical skill categories
│   │   ├── Contact.jsx       # Contact CTA
│   │   ├── Journey.jsx       # Public building timeline
│   │   ├── Footer.jsx        # Site footer
│   │   ├── Reveal.jsx        # Scroll-reveal wrapper
│   │   ├── Tilt.jsx          # Mouse-tilt effect
│   │   └── magicui/          # Custom MagicUI components (Dock, Meteors, StarField, ShimmerButton)
│   ├── pages/
│   │   ├── Home.jsx          # Main landing page
│   │   ├── JourneyPage.jsx   # Full journey/timeline page
│   │   └── WebsitesPage.jsx  # All projects page
│   ├── App.jsx               # Router + Dock navigation
│   ├── main.jsx              # Entry point
│   ├── index.css             # Global styles + Tailwind theme
│   └── App.css
├── index.html                # HTML entry (SEO meta tags)
├── vite.config.js
├── package.json
└── CNAME                     # Custom domain: bhuvan.live
```

---

## ✅ Features

- ⚡ **Blazing fast** — Vite 8 build, lazy loading, `transform-gpu` on all animated elements
- 🌑 **Dark aesthetic** — Pure black background with glassmorphism cards
- 🌠 **Animated backgrounds** — Star field + meteor shower on the hero
- 🎞️ **Smooth animations** — Framer Motion scroll reveals, stagger effects, spring physics
- 🚢 **Dynamic Island Dock** — Fixed bottom navigation bar with social links
- 📱 **Fully responsive** — Mobile-first layout across all breakpoints
- 🔍 **SEO optimised** — Full Open Graph + Twitter Card meta tags at `bhuvan.live`
- 🧭 **Multi-page routing** — `/`, `/websites`, `/journey`

---

## 🛠️ Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/BhuvanExpo/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The dev server will start at **http://localhost:5173**

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## 🌍 Deployment

This site is deployed via **GitHub Actions** to **GitHub Pages** with a custom domain (`bhuvan.live`).

The `CNAME` file at the root points to `bhuvan.live` and is automatically included in the build output.

---

## 🗺️ Pages & Sections

| Route | Content |
|-------|---------|
| `/` | Hero · About · Skills · Contact |
| `/websites` | Full grid of all shipped websites |
| `/journey` | Public building timeline / milestones |

---

## 📬 Contact

- 📧 Email: [bhuvanexpo@gmail.com](mailto:bhuvanexpo@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/bhuvanexpo](https://www.linkedin.com/in/bhuvanexpo)
- 🐙 GitHub: [github.com/BhuvanExpo](https://github.com/BhuvanExpo)
- 📸 Instagram: [@iambhuvangm](https://www.instagram.com/iambhuvangm)

---

© 2025 Bhuvan G M — Built in public
