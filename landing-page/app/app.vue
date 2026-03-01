<template>
  <div class="landing">
    <header class="header">
      Moulify
    </header>

    <main>
      <section class="hero">
        <h1 class="hero-title">
          The component library<br>built for Nuxt
        </h1>
        <p class="hero-subtitle">
          A growing collection of production-ready Vue 3 components, 1,000+ type-safe icons, and a theming
          system—shipped as a single Nuxt module. Install it, add one line to your config, and start building.
        </p>
        <div class="hero-actions">
          <a href="/storybook/" class="btn btn-primary" aria-label="View component gallery in Storybook">
            View Storybook
            <moulify-icon name="arrow-right" :size="20" />
          </a>
          <a href="https://www.npmjs.com/package/moulify" target="_blank" rel="noopener noreferrer"
            class="btn btn-secondary" aria-label="View moulify on npm">
            View on npm
            <moulify-icon name="link-external-01" :size="20" />
          </a>
        </div>
      </section>

      <section class="section what">
        <h2 class="section-title">
          The Vision
        </h2>
        <p class="section-lead">
          Moulify is an open-source component library delivered as a Nuxt module. It gives your app a unified set of UI
          building blocks—buttons, icons, form elements, and more on the way—backed by a consistent design language and
          a massive icon system. No glue code, no style conflicts, no juggling five different packages. One module, one
          design system, ready to grow with your product.
        </p>
      </section>

      <section class="section features">
        <h2 class="section-title">
          Built Different
        </h2>
        <p class="section-lead features-intro">
          Moulify is building toward a complete, production-ready component library for the Nuxt ecosystem. Instead of
          stitching together headless primitives from different authors, you get a single module with a cohesive design
          language, growing set of components, and an ever-expanding icon system—all built for Vue 3 and Nuxt from the
          ground up.
        </p>
        <ul class="feature-list">
          <li>
            <strong>A growing component library</strong> — Starting with foundational pieces like Button and Icon, with
            more components shipping regularly. The goal: every UI building block your Nuxt app needs, in one package.
          </li>
          <li>
            <strong>Built for the Nuxt ecosystem</strong> — Not a generic Vue library wrapped in a module. Moulify
            leverages Nuxt auto-imports, plugins, and module hooks so components just work the moment you add the
            module.
          </li>
          <li>
            <strong>1,000+ type-safe icons</strong> — A Fantasticon-generated icon font with TypeScript union types. Use
            any icon by name and let your editor catch typos at build time, not in production.
          </li>
          <li>
            <strong>Themeable by design</strong> — Configure a prefix and color tokens in <code>nuxt.config</code> to
            match your brand. As the library grows, theming will extend to every component.
          </li>
          <li>
            <strong>Zero setup, immediate value</strong> — One install, one line in your config. No CSS imports to
            remember, no global plugin registration, no separate icon package. It just works.
          </li>
          <li>
            <strong>Open source &amp; community-driven</strong> — MIT licensed, contributions welcome. Shape the library
            alongside other Nuxt developers.
          </li>
        </ul>
      </section>

      <section class="section cta">
        <h2 class="section-title">
          Explore the components
        </h2>
        <p class="section-lead">
          See every component and icon in the Storybook gallery. Try variants, copy snippets, and drop them into your
          Nuxt app.
        </p>
        <a href="/storybook/" class="btn btn-primary btn-cta" aria-label="Open Storybook">
          Open Storybook
          <moulify-icon name="arrow-right" :size="20" />
        </a>
      </section>
    </main>

    <footer class="footer">
      <p>
        <a href="https://github.com/moulibheemaneti/moulify" target="_blank" rel="noopener noreferrer">GitHub</a>
        ·
        <a href="https://www.npmjs.com/package/moulify" target="_blank" rel="noopener noreferrer">NPM</a>
        · MIT
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports';

useHead({
  title: 'Moulify — Lightweight UI layer for Nuxt',
  meta: [
    {
      name: 'description',
      content: 'An opinionated Nuxt module with auto-registered components, type-safe icon font, and simple theming. Build consistent interfaces faster.',
    },
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=JetBrains+Mono:wght@400;500&display=swap',
    },
  ],
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  background-color: black;
}

main {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
}

.landing {
  --bg: #0c0c10;
  --surface: #16161c;
  --text: #e4e4e7;
  --text-muted: #a1a1aa;
  --accent: #00dc82;
  --accent-hover: #00f090;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, sans-serif;
  line-height: 1.6;
}

.header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  max-width: 72rem;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--accent);
  text-align: center;
}

.hero {
  padding: 4rem 0 5rem;
  text-align: center;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin: 0 0 1.25rem;
  color: var(--text);
}

.hero-subtitle {
  font-size: 1.125rem;
  color: var(--text-muted);
  max-width: 42rem;
  margin: 0 auto 2.5rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.btn {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s, border-color 0.2s;
  border: 1px solid transparent;
}

.btn-primary {
  background-color: var(--accent);
  color: var(--bg);
}

.btn-primary:hover {
  background-color: var(--accent-hover);
  box-shadow: 0 0 0 3px rgba(0, 220, 130, 0.25);
}

.btn-secondary {
  background-color: transparent;
  color: var(--text);
  border-color: rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.btn-cta {
  padding: 0.875rem 1.75rem;
  font-size: 1.0625rem;
}

.section {
  padding: 3rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  text-align: center;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
  color: var(--text);
}

.section-lead {
  color: var(--text-muted);
  font-size: 1.0625rem;
  margin: 0 auto;
  max-width: 52rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 1.5rem auto 0;
  max-width: 48rem;
  text-align: left;
}

.feature-list li {
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--text-muted);
}

.feature-list li:last-child {
  border-bottom: none;
}

.feature-list code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9em;
  background: var(--surface);
  padding: 0.2em 0.4em;
  border-radius: 4px;
  color: var(--accent);
}

.cta {
  text-align: center;
  padding: 4rem 0;
}

.cta .section-lead {
  margin-bottom: 1.5rem;
}

.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 2rem 1.5rem;
  text-align: center;
}

.footer p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.footer a {
  color: var(--accent);
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
