# Changelog

All notable changes to `moulify` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.3] - 2026-03-01

### Changed
- **Documentation** — README rewritten to reflect the project vision: “The component library built for Nuxt,” with a dedicated Vision section, feature highlights (growing component library, 1,000+ type-safe icons, themeable by design, zero setup, open source), and streamlined setup/config/component docs.
- **Package** — Added `homepage` in `package.json` pointing to https://moulify.moulibheemaneti.com so the live site and Storybook link appear on the npm package page.

## [0.0.2] - 2026-03-01

### Added
- **Header**, **Footer**, and **SocialLinks** components with types and runtime integration.
- Custom color palette injection: theme colors are injectable via module options and `useMoulifyColors()`.
- Storybook stories for Button, Footer, Header, Icon, and SocialLinks in the landing page.
- `colorPalette` utility and expanded theme/color types in `src/types.ts`.

### Changed
- Button component extended with additional variants and type definitions.
- Icon component and types updated.
- Module now registers Header, Footer, and SocialLinks; plugin updated for color injection.
- Landing page Storybook preview config and playground app updated to showcase new components.

## [0.0.1] - 2026-02-27

### Added
- Initial release of the `moulify` Nuxt module.
- Basic playground app for local development.
- `Button` and `Icon` components (with associated types).
- Build, lint, and test tooling (Nuxt module builder, ESLint, Vitest, TypeScript).
