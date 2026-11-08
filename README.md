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

## License

This is a personal portfolio. You're welcome to take inspiration from it — please credit Donna Smith if you reuse substantial parts of the design or code.
