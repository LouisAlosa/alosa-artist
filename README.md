This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🏗️ Project Folder Structure Overview

This project uses a scalable, modular folder structure designed for a Next.js + TailwindCSS setup.  
It ensures clarity, reusability, and easy scalability as the site grows.

---

### `app/(sections)`
Contains all the main content sections of the homepage and other key pages.  
Each section is self-contained and includes its own component, logic, and optional styling file.

**Includes:**
- `hero/` — Landing section with a strong first impression (image/video, title, CTA).
- `about/` — Personal bio, background, and artistic journey.
- `services/` — List of services offered (e.g., photography, design, commissions).
- `gallery/` — Image or video showcase of work, portfolio grid, and item display logic.
- `contact/` — Contact form, social links, or booking details.

---

### `app/(components)`
Holds reusable UI building blocks used across multiple sections or pages.

**Includes:**
- `navbar/` — Main navigation bar components (`Navbar.tsx`, `NavLink.tsx`).
- `footer/` — Footer component with links, copyright, and social icons.
- `ui/` — Small reusable UI elements like buttons, headings, and containers.
- `icons/` — Centralized custom SVG icon components for consistent styling.

---

### `app/(data)`
Contains static data and configuration arrays used across the app.

**Includes:**
- `services.ts` — List of services and details displayed in the services section.
- `gallery.ts` — Portfolio or gallery data for easy updates.
- Other small data files (e.g., social links, site metadata).

---

### `app/(lib)`
Holds helper logic, reusable utilities, and custom hooks.

**Includes:**
- `utils.ts` — Common helper functions or formatters.
- `constants.ts` — Static values like URLs or site metadata.
- `hooks/` — Custom React hooks such as scroll detection or animation triggers.

---

### `app/(assets)`
Contains static assets imported directly in code (used with `import`).

**Includes:**
- `images/` — Local images used in sections or components.
- `videos/` — Background or hero videos.
- `logos/` — Branding or icon assets.

---

### `app/(styles)`
Contains custom CSS files for global styles, variables, or animations.

**Includes:**
- `variables.css` — Global color variables, font tokens, and design constants.
- `animations.css` — Keyframes or transition styles.
- `typography.css` — Custom font rules and text styles.

---

### `public/`
Holds static files served directly at runtime (accessible via `/filename` URLs).

**Includes:**
- `favicon.ico` — Website favicon.
- `site.webmanifest` — Web app manifest for PWA support.
- `social-banner.png` — Image used for Open Graph / social previews.

---

### `Other Root Files`
- `tailwind.config.js` — Tailwind configuration (if extended or customized).
- `postcss.config.js` — PostCSS setup.
- `tsconfig.json` — TypeScript configuration.
- `pnpm-lock.yaml` — Dependency lock file.
- `components.json` — shadcn-ui configuration (if using it).

---

This modular layout keeps visual components, logic, and static data organized — making the project easy to scale, maintain, and collaborate on.
