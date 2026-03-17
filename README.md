# Naina Kothari — Portfolio

[![Live Site](https://img.shields.io/badge/Live%20Site-nainakothari.vercel.app-blue?style=flat-square&logo=vercel&logoColor=white)](https://nainakothari.vercel.app)
[![Built with React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-latest-EF008F?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

Modern developer portfolio built to showcase full-stack and backend systems projects, with a focus on performance, smooth animations, and clean UI. Designed for engineers and recruiters who want to see real work quickly.

---

## Preview

![Portfolio Preview](public/project/portfolio-preview.png)

---

## Live Demo

[https://nainakothari.vercel.app](https://nainakothari.vercel.app)

---

## Key Features

- Dark-themed developer portfolio with a minimal, distraction-free layout
- Filterable and searchable project cards with live screenshots, tech stack chips, and highlight points
- Smooth, performant animations powered by Framer Motion
- Fully responsive across desktop, tablet, and mobile
- Centralized content management — all data lives in a single `content.js` file
- Fast build pipeline using Vite with optimized production output
- Deployed on Vercel with automatic deployments on every push to `main`

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Routing | React Router v6 |
| Icons | Lucide React |
| Deployment | Vercel |

---

## Project Structure

```
portfolio/
├── public/
│   └── project/          # Project screenshot images
├── src/
│   ├── data/
│   │   └── content.js    # All site content (projects, skills, education, achievements)
│   ├── lib/
│   │   └── motion.js     # Shared Framer Motion variants
│   ├── sections/
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Achievement.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   └── App.jsx
├── index.html
├── vite.config.cjs
├── tailwind.config.cjs
└── package.json
```

---

## Sections

| Section | Description |
|---|---|
| Hero | Introduction, headline, and quick links to GitHub, LinkedIn, and resume |
| Projects | Filterable cards with screenshots, tech stack, highlights, and live/repo links |
| Skills | Categorized skill groups across frontend, backend, databases, and tooling |
| Education | Academic background with institution details and relevant coursework |
| Achievements | Hackathon placements, paper presentations, and published work |
| Contact | Direct contact links |

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/NainaKothari-14/Portfolio.git

# Navigate into the project directory
cd Portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app will start at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Content Management

All site content is centralized in `src/data/content.js`. To update projects, skills, education, or achievements, edit that file directly — no changes to component files are needed.

### Adding a Project

```js
{
  title: "Project Name",
  tagline: "Short one-line description of what it does.",
  image: "/project/your-image.png",   // place image in public/project/
  stack: ["React", "Node.js"],
  kind: "Full-Stack",                 // "Full-Stack" | "Microservice" | "Real-Time System"
  featured: true,                     // includes in FEATURED export for highlighted display
  links: {
    repo: "https://github.com/...",
    live: "https://...",              // optional
    demo: "https://...",              // optional
  },
  highlights: [
    "What you built and why it matters.",
    "Technical decisions and architecture.",
    "Outcome or impact.",
  ],
}
```

---

## Deployment

The portfolio is deployed on [Vercel](https://vercel.com) with automatic deployments on every push to the `main` branch.

To deploy your own fork:

1. Import the repository into Vercel
2. Set the framework preset to **Vite**
3. Deploy — no additional environment variables or configuration required

---

## Connect

[![GitHub](https://img.shields.io/badge/GitHub-NainaKothari--14-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/NainaKothari-14)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-naina--kothari-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/naina-kothari)
[![Email](https://img.shields.io/badge/Email-nainavasai%40gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:nainavasai@gmail.com)

---

## License

This project is open source and available under the [MIT License](LICENSE).
