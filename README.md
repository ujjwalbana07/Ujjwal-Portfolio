# Ujjwal Bana — Portfolio

Personal portfolio highlighting data engineering, distributed systems, applied AI, and professional experience. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Local development

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Validation and production

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## Updating content

- `src/data/portfolio.ts`: biography, project descriptions and links, experience, skills, and contact details.
- `src/components/sections/`: section layouts.
- `src/app/layout.tsx`: page title and social metadata.
- `public/`: photographs and other static assets.

Featured projects include ATLAS, Atlas AI, and Acquisition Intelligence Platform. Additional projects include EventSync, NeuroSync, and PatentMind.
