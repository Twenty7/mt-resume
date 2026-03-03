# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:5173 with HMR
npm run build      # Build for production to dist/
npm run preview    # Preview production build locally
```

No test suite exists in this project.

Node.js requirement: `^20.19.0 || >=22.12.0`

## Architecture

Single-page Vue 3 app (Vite) — a printable personal resume. One route (`/`) rendered through `MainLayout` → `Home`.

**Entry flow:** [index.html](index.html) → [src/main.js](src/main.js) → [src/App.vue](src/App.vue) → [src/layouts/MainLayout.vue](src/layouts/MainLayout.vue) → `<router-view>` → [src/components/Home.vue](src/components/Home.vue)

**Key stack:** Vue 3 (`<script setup>`), Pinia (with `pinia-plugin-persistedstate`), Vue Router, TailwindCSS v4, DaisyUI v5, FontAwesome, VueUse

**Styling:** Global styles in [src/main.scss](src/main.scss). DaisyUI theme is `corporate`. Body font is Calibri; `.subtitle` class uses Noto Serif Georgian (used on all section headers and experience titles). A `@media print` block in `main.scss` handles print layout — preserve it when making layout changes.

**`@` alias** resolves to `src/`. Use `@/components/Foo.vue` over relative imports.

**Global helper:** `$getImageUrl(filename)` resolves images from the `public/images/` directory.

## Key Components

- **[ExpComponent.vue](src/components/ExpComponent.vue)** — Reusable experience/education entry. Props: `company`, `title`, `location`, `date` (all required strings), plus optional `locationClass` (string), `leftWidth`/`rightWidth` (numbers, default `1`) to control the two-column flex split. Uses a default slot for bullet content and tech badge rows.

- **[References.vue](src/components/References.vue)** / **[RefComponent.vue](src/components/RefComponent.vue)** — References section powered by the Pinia `references` store (persisted to localStorage). The store exposes `addReference`, `updateReference`, `deleteReference`, `clearAllReferences`, and `loadSampleReferences`.

- **[Header.vue](src/components/Header.vue)** / **[NavigationMenu.vue](src/components/NavigationMenu.vue)** / **[ContactMenu.vue](src/components/ContactMenu.vue)** — Top navigation with anchor links and contact info flyout.

## Deployment

Pushes to `master` trigger the GitHub Actions workflow ([.github/workflows/pages.yml](.github/workflows/pages.yml)) which builds and deploys to GitHub Pages automatically.

## Conventions

- All components use `<script setup>` (Composition API, no `export default`)
- Props use object syntax with `type` and `required`
- Prefer `<style scoped>` in components; global styles belong in `main.scss`
- FontAwesome icons must be imported and added to the library in [src/main.js](src/main.js) before use
- The `.badge-xxs` utility class is defined in `main.scss` for the small tech badges used throughout
- `page-break-inside: avoid` on `.exp-component` is intentional — keep print layout intact
