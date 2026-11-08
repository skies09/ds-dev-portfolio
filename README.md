# DS Developer Portfolio

A responsive developer portfolio for Donna Smith — showcasing full-stack projects, services, process, skills, and client feedback. Built with React and Tailwind CSS, with a conversion-focused contact flow.

---

## Features

- **Hero intro**: Name, availability, typing highlights, trust stats, and primary CTAs
- **About**: Bio, highlights, and skill category overview
- **Skills**: Technology stack with icons
- **Services**: New sites, features/integrations, and fixes — each with a CTA
- **Process**: Discovery → scope → build → handover
- **Portfolio**: Tabbed project gallery (websites / apps) with live and GitHub links
- **Testimonials**: Client feedback with ratings
- **FAQ**: Common hiring questions
- **Contact**: Validated form (Formik + Yup) via EmailJS, plus direct phone/email and social links
- **Responsive layout**: Desktop navbar, mobile slide-out menu, floating quote CTA

---

## Tech Stack

- **Frontend**: React (Create React App)
- **Styling**: Tailwind CSS
- **Animation & UX**: Framer Motion, React Typing Effect
- **Forms & Validation**: Formik, Yup
- **Email / Contact**: EmailJS (`@emailjs/browser`)
- **Icons**: Font Awesome (React SVG)
- **Hosting**: Firebase Hosting (optional)

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

### Environment variables

Create a `.env` file in the project root (see EmailJS dashboard for values):

```bash
REACT_APP_EMAIL_SERVICE_KEY=your_service_id
REACT_APP_EMAIL_TEMPLATE_KEY=your_template_id
REACT_APP_EMAIL_KEY=your_public_key
```

Restart the dev server after changing env vars.

### Development

```bash
npm start
```

Opens the app at `http://localhost:3000`.

### Tests

```bash
npm test
```

### Production Build

```bash
npm run build
```

Outputs an optimized build to the `build` folder.

---

## Content & Customization

### Portfolio data

Projects, skills, testimonials, and FAQs live in `src/portfolioData.js`:

- **`skills` / `skillsData`** — stack labels and About skill groups
- **`portfolioData`** — projects (title, images, copy, tech, links, category)
- **`testimonials`** — client quotes and ratings
- **`faqs`** — FAQ questions and answers

### Styling

- Theme colours and fonts: `tailwind.config.js`
- Global styles / hero atmosphere: `src/index.css`

### Images

Static images are served from `public/assets/Images/` and referenced as `/assets/Images/...`.

---

## Deployment

Built as a static SPA. Deploy the `build` folder to Firebase Hosting, Netlify, Vercel, or similar.

With Firebase already configured (`firebase.json`, `.firebaserc`):

```bash
npm run build
firebase deploy
```

---

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Development server |
| `npm test` | Test runner (watch mode) |
| `npm run build` | Production build |
| `npm run eject` | Eject CRA config (rarely needed) |

---

## License

Personal portfolio project. If you reuse or adapt parts of it, please credit Donna Smith and check the repository license if one is added.
