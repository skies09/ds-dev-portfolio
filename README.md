# DS Developer Portfolio

A responsive, developer portfolio site showcasing my frontend and full‑stack projects, skills, and testimonials. Built with React and Tailwind CSS, it highlights real client work and personal projects with a clean, modern UI.

---

## Features

- **Developer overview**: Intro section with role, focus areas, and a concise personal summary.
- **Project gallery**: Curated list of featured projects with thumbnails, descriptions, tech stack, and links to live demos and GitHub repos.
- **Skills sections**: Grouped skills by languages, specialties, databases, deployment, design tools, and personal interests.
- **Testimonials**: Short quotes from collaborators and clients to add social proof.
- **Responsive layout**: Optimized for desktop and mobile using Tailwind utility classes.

---

## Tech Stack

- **Frontend**: React (Create React App)
- **Styling**: Tailwind CSS
- **Animation & UX**: Framer Motion, React Typing Effect
- **Forms & Validation**: Formik, Yup
- **Email / Contact**: EmailJS (`@emailjs/browser`, `emailjs-com`)
- **Icons**: Font Awesome

---

## Getting Started

### Prerequisites

- **Node.js** (LTS recommended)
- **npm** (comes with Node)

### Installation

```bash
git clone <this-repo-url>
cd ds-dev-portfolio
npm install
```

### Development

```bash
npm start
```

- Starts the app in development mode.
- Open `http://localhost:3000` in your browser.

### Tests

```bash
npm test
```

Runs the test runner in watch mode.

### Production Build

```bash
npm run build
```

- Builds the app for production into the `build` folder.
- Optimizes assets for best performance.

---

## Content & Customization

### Portfolio data

- **Projects, skills, and testimonials** are defined in `src/portfolioData.js`.
- You can update:
  - **`skills` / `skillsData`**: to change skill categories and labels.
  - **`portfolioData`**: to add, remove, or edit projects (title, images, descriptions, tech stack, live links, GitHub links, category).
  - **`testimonials`**: to adjust or add new quotes.

After editing this file, the UI will automatically reflect your changes.

### Styling & Layout

- Tailwind configuration lives in `tailwind.config.js`.
- Global styles and theme choices can be adjusted via Tailwind config and any base CSS files (e.g. `index.css` / `App.css` if present).

---

## Deployment

The app is built as a static SPA and can be deployed to any static hosting provider (e.g. Firebase Hosting, Netlify, Vercel, GitHub Pages).

General steps:

1. Run `npm run build`.
2. Deploy the contents of the `build` folder to your hosting provider of choice.

If you are using Firebase Hosting, configure it with `firebase.json` and `.firebaserc`, then run the usual Firebase CLI deploy commands.

---

## Scripts (Summary)

- **`npm start`**: Run development server.
- **`npm test`**: Run tests in watch mode.
- **`npm run build`**: Create production build.
- **`npm run eject`**: Eject CRA config (not usually necessary).

---

## License

This project is intended as a personal portfolio. If you’d like to reuse or adapt parts of it, please credit the original author (Donna) and review the repository license if added.
