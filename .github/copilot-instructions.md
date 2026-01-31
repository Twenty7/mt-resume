# AI Coding Instructions for mt-resume

## Project Overview
**mt-resume** is a Vue 3 web application using Vite as the build tool. It's a resume/portfolio showcase built on the official Vue 3 + Vite template. The project requires Node.js 20.19.0+ or 22.12.0+.

## Architecture & Key Patterns

### Component Structure
- **Single File Components (SFCs)**: All Vue components use `.vue` format with `<script setup>` syntax (composition API style)
- **App.vue** ([src/App.vue](src/App.vue)): Root component that imports and composes `HelloWorld` and `TheWelcome` components
- **Components directory** ([src/components/](src/components/)): Contains reusable UI components
  - Props validation required: use TypeScript-style type definitions (e.g., `msg: { type: String, required: true }`)
  - Scoped styles only: use `<style scoped>` to avoid global CSS conflicts

### Path Aliases
- `@` alias resolves to `src/` directory (configured in [jsconfig.json](jsconfig.json) and [vite.config.js](vite.config.js))
- Use `@/components/ComponentName` instead of relative imports

### Styling
- Global styles: [src/assets/main.css](src/assets/main.css)
- Component styles: Always use `<style scoped>` in Vue components
- Responsive design pattern: Components use `@media (min-width: 1024px)` media queries

## Build & Development Workflow

### Essential Commands
```bash
npm install                # Install dependencies
npm run dev               # Start dev server with hot reload (Vite)
npm run build             # Build for production (minified output to dist/)
npm run preview           # Preview production build locally
```

### Key Tools
- **Vite**: Fast build tool with HMR (Hot Module Replacement)
- **@vitejs/plugin-vue**: Official Vue plugin for Vite
- **vite-plugin-vue-devtools**: Vue devtools integration in dev environment
- **Vue.js DevTools browser extension**: Recommended for debugging component state

## Developer Conventions

### Vue Component Conventions
1. Use `<script setup>` (no `export default`)
2. Use `defineProps()` for component props
3. Component names should be PascalCase (e.g., `HelloWorld.vue`)
4. Always add prop type definitions:
   ```javascript
   defineProps({
     msg: { type: String, required: true }
   })
   ```

### File Organization
- Reusable components go in [src/components/](src/components/)
- Sub-component folders allowed (e.g., [src/components/icons/](src/components/icons/) for SVG icon components)
- CSS organized by scope: global in `assets/`, scoped within components

### Vite-Specific Notes
- Entry point: [index.html](index.html) → [src/main.js](src/main.js) → `App.vue`
- Dev server runs at `http://localhost:5173` by default
- Hot reload works automatically on file changes
- Build output goes to `dist/` directory

## Critical Integration Points
- **DOM mount**: Component mounts to `<div id="app">` in [index.html](index.html)
- **CSS import**: Global CSS must be imported in [src/main.js](src/main.js) before Vue app creation
- **Node version constraint**: Enforce Node.js 20.19.0+ or 22.12.0+ (checked in package.json engines field)

## Common Tasks

### Adding New Components
1. Create `.vue` file in `src/components/` (or subdirectory)
2. Use `<script setup>` syntax
3. Use `<style scoped>` for styles
4. Import in parent component: `import ComponentName from '@/components/ComponentName.vue'`

### Modifying Global Styles
- Edit [src/assets/main.css](src/assets/main.css) for project-wide styles
- Consider Vite's CSS HMR: changes apply instantly in dev mode

### Debugging
- Use browser DevTools + Vue.js DevTools extension
- Vite DevTools available in development (imported automatically)
- Check [vite.config.js](vite.config.js) for plugin configuration

## Project-Specific Notes
- This is a template-based project; some boilerplate (HelloWorld, TheWelcome) may be modified or removed
- The project is minimal and focused—keep the component tree shallow
- CSS variables likely used for theming (check [src/assets/main.css](src/assets/main.css) for `--` variable definitions)
