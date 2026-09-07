# Sreenandana S — Portfolio

A premium, minimal personal portfolio built with React, Vite, Tailwind CSS,
Framer Motion, and Lucide React.

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/       UI sections (Hero, About, Skills, Projects, Contact, ...)
  data/
    profile.js      Name, headline, contact links, resume path
    skills.js       Skill groups shown in the Skills section
    projects.js     All project content — edit here to add/update projects
  index.css         Tailwind layers + design-system utility classes
  App.jsx           Page composition
public/
  favicon.svg
  resume.pdf        Replace with your real resume (referenced by the Hero button)
```

## Editing content

- **Personal info**: `src/data/profile.js`
- **Projects**: `src/data/projects.js` — each entry supports `github` and/or
  `live` links, a `contribution` list, and a `tech` array.
- **Skills**: `src/data/skills.js`

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.
4. Deploy — no environment variables are required.

## Notes

- Add a real `resume.pdf` to the `public/` folder — the Hero section's
  "Download Resume" button links to `/resume.pdf`.
- Project card visuals are generated gradient placeholders (no external
  images required). Swap in real screenshots by extending `ProjectCard.jsx`.
