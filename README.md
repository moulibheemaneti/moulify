<!--
Get your module up and running quickly.

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

moulify is a Nuxt module that provides a small, opinionated UI layer with:

- Auto-registered Vue components (Button, Icon)
- A Fantasticon-generated icon font wired into Nuxt via a plugin
- Simple theming via color configuration and component prefixing

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/moulibheemaneti/moulify?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- Auto-imports components from the module:
  - `<moulify-button>` (or with your own prefix)
  - `<moulify-icon>`
- Configurable prefix for auto-registered components
- Simple color theming exposed as module options
- Icon component backed by a generated icon font with type-safe icon names
- Nuxt plugin that automatically injects the icon CSS

## Quick setup

Install the module to your Nuxt application with:

```bash
npx nuxt module add moulify
```

This will install `moulify` and add it to the `modules` section of your `nuxt.config`.

### Manual installation

If you prefer to wire things up yourself:

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
    // Optional: override defaults
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

## Configuration

Module options are available under the `moulify` key in your `nuxt.config`:

```ts
interface ModuleOptions {
  prefix?: string
  colors?: {
    primary?: string
    secondary?: string
    tertiary?: string
  }
}
```

- `prefix` (default: `'moulify'`): controls the tag names of auto-imported components.
  - For example, with `prefix: 'nc'` you will use `<nc-button>` instead of `<moulify-button>`.
- `colors`: simple color tokens you can use in your own styling or future theme extensions.

## Components

### `<moulify-button>`

A simple, flex-centered button that can render icons on the left and/or right.

With the default prefix:

```vue
<template>
  <moulify-button icon-left="home" icon-right="arrow-right">
    Get started
  </moulify-button>
</template>
```

Props:

- `iconLeft?: IconsId` – optional icon name rendered before the button content.
- `iconRight?: IconsId` – optional icon name rendered after the button content.

These icon names are derived from the generated icon font (`IconsId` union type). The corresponding icons are rendered via `<moulify-icon>`.

### `<moulify-icon>`

A lightweight icon component backed by the Fantasticon-generated font family.

With the default prefix:

```vue
<template>
  <moulify-icon name="home" :size="32" color="#00DC82" />
</template>
```

Props:

- `name: IconsId` – required icon name, type-safe union of all available icons.
- `size?: number` (default: `24`) – font size in pixels.
- `color?: string` (default: `'currentColor'`) – CSS color to apply.

If an invalid icon name is passed, the component will fall back to rendering the `name` as uppercase text so you can easily spot configuration issues in the UI.

The required CSS for the icon font is automatically imported by the module’s Nuxt plugin, so you don’t need to manually include any styles.


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/moulify/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/moulify

[npm-downloads-src]: https://img.shields.io/npm/dm/moulify.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/moulify

[license-src]: https://img.shields.io/npm/l/moulify.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/moulify

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt
[nuxt-href]: https://nuxt.com
