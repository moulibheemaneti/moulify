<!--
Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: moulify
- Description: My new Nuxt module
-->

# moulify

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

**The component library built for Nuxt.**

**[→ Live site & Storybook](https://moulify.moulibheemaneti.com)**

Moulify is an open-source component library delivered as a single Nuxt module. It gives your app a unified set of UI building blocks—buttons, icons, form elements, and more on the way—backed by a consistent design language and a massive icon system. No glue code, no style conflicts, no juggling five different packages. One module, one design system, ready to grow with your product.

A growing collection of production-ready Vue 3 components, 1,000+ type-safe icons, and a theming system—shipped as one Nuxt module. Install it, add one line to your config, and start building.

- [✨ Release Notes](/CHANGELOG.md)
- [📖 Live site & Storybook](https://moulify.moulibheemaneti.com)

---

## Vision

Moulify is building toward a **complete, production-ready component library** for the Nuxt ecosystem. Instead of stitching together headless primitives from different authors, you get a single module with:

- **A cohesive design language** — Every component follows the same tokens and patterns.
- **A growing set of components** — Starting with Button and Icon, with more shipping regularly. The goal: every UI building block your Nuxt app needs, in one package.
- **An ever-expanding icon system** — 1,000+ type-safe icons, all built for Vue 3 and Nuxt from the ground up.

**Open source & community-driven** — MIT licensed, contributions welcome. Shape the library alongside other Nuxt developers.

---

## Features

- **Auto-imports** — Components from the module: `<moulify-button>`, `<moulify-icon>` (or your own prefix).
- **Configurable prefix** — Use your own tag names (e.g. `<nc-button>`).
- **Simple color theming** — Primary, secondary, tertiary via module options; palettes generated or custom.
- **Type-safe icons** — Fantasticon-generated icon font with TypeScript union types; typos caught at build time.
- **Zero setup** — One install, one line in your config. No CSS imports to remember, no global plugin registration, no separate icon package. It just works.

---

## Quick setup

Install the module:

```bash
npx nuxt module add moulify
```

This installs `moulify` and adds it to the `modules` section of your `nuxt.config`.

### Manual installation

```bash
npm install moulify
# or
pnpm add moulify
# or
yarn add moulify
```

Then enable the module in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['moulify'],

  moulify: {
    prefix: 'moulify',
    colors: {
      primary: '#0076ff',
      secondary: '#000000',
      tertiary: '#888888',
    },
  },
})
```

The module will:

- Register a Nuxt plugin that imports the generated icon CSS
- Auto-register all Vue components from the module using the configured `prefix`

---

## Configuration

Module options under the `moulify` key:

```ts
interface ModuleOptions {
  prefix?: string
  colors?: {
    primary?: string | ColorPalette
    secondary?: string | ColorPalette
    tertiary?: string | ColorPalette
  }
}

interface ColorPalette {
  50: string
  100: string
  // ... 200–800
  900: string
}
```

- **`prefix`** (default: `'moulify'`) — Tag names for auto-imported components (e.g. `prefix: 'nc'` → `<nc-button>`).
- **`colors`** — Primary, secondary, tertiary:
  - **Hex string** (e.g. `'#0076ff'`) — Full palette (50–900) generated automatically.
  - **Full palette object** — Your own `{ 50: '#…', …, 900: '#…' }`.

Resolved palettes are exposed as **CSS custom properties** on `:root` (`--moulify-primary-50` … `--moulify-primary-900`, etc.) and via **runtime config** (`useRuntimeConfig().public.moulify.colors`, `$moulifyColors`).

---

## Components

### `<moulify-button>`

Flex-centered button with optional left/right icons.

```vue
<template>
  <moulify-button icon-left="home" icon-right="arrow-right">
    Get started
  </moulify-button>
</template>
```

- `iconLeft?: IconsId` — Icon before content.
- `iconRight?: IconsId` — Icon after content.

### `<moulify-icon>`

Icon component backed by the Fantasticon-generated font.

```vue
<template>
  <moulify-icon name="home" :size="32" color="#00DC82" />
</template>
```

- `name: IconsId` — Required, type-safe icon name.
- `size?: number` (default: `24`) — Font size in pixels.
- `color?: string` (default: `'currentColor'`) — CSS color.

Icon font CSS is injected by the module’s Nuxt plugin; no manual styles needed.

---

## Contribution

<details>
  <summary>Local development</summary>

  ```bash
  npm install
  npm run dev:prepare
  npm run dev
  npm run dev:build
  npm run lint
  npm run test
  npm run test:watch
  npm run release
  ```

</details>

---

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/moulify/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/moulify

[npm-downloads-src]: https://img.shields.io/npm/dm/moulify.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/moulify

[license-src]: https://img.shields.io/npm/l/moulify.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/moulify

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt
[nuxt-href]: https://nuxt.com
