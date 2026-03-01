<template>
  <div class="playground">
    <moulify-header />

    <main class="playground__main">
      <h1>Moulify playground</h1>

      <section class="playground__section">
        <h2>Button</h2>
        <p>Props: size (sm, md, lg), variant (primary, outlined, link), icon-left, icon-right</p>
        <div class="playground__row">
          <moulify-button size="sm" variant="primary">
            Small primary
          </moulify-button>
          <moulify-button size="md" variant="primary" icon-left="heart">
            With left icon
          </moulify-button>
          <moulify-button size="lg" variant="outlined" icon-right="chevron-right">
            Outlined large
          </moulify-button>
          <moulify-button variant="link">
            Link variant
          </moulify-button>
        </div>
      </section>

      <section class="playground__section">
        <h2>Icon</h2>
        <p>Props: name, size (number), color (string)</p>
        <div class="playground__row">
          <moulify-icon name="home-03" :size="24" color="currentColor" />
          <moulify-icon name="heart" :size="32" color="#e11d48" />
          <moulify-icon name="send-02" :size="20" />
        </div>
      </section>

      <section class="playground__section">
        <h2>Social links</h2>
        <p>From nuxt.config (twitter, github). Override via props:</p>
        <moulify-social-links />
        <p>With props override:</p>
        <moulify-social-links :links="{ github: 'https://github.com/nuxt', x: 'https://x.com/nuxt_js' }" />
      </section>

      <section class="playground__section">
        <h2>Header (from config)</h2>
        <p>Config in nuxt.config: left, center, right (each array of &#123; name, url &#125;).</p>
        <p>Override via props: left, center, right.</p>
      </section>

      <section class="playground__section">
        <moulify-footer copyright-text="© Demo — overridden via props"
          :has-links="[{ name: 'Docs', url: '/docs' }, { name: 'API', url: '/api' }]" />
      </section>
    </main>

    <moulify-footer />
  </div>
</template>

<script setup lang="ts">
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.playground {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.playground__main {
  flex: 1;
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
}

.playground__section {
  margin-bottom: 32px;
}

.playground__section h2 {
  font-size: 1.25rem;
  margin-bottom: 12px;
}

.playground__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.playground__row p {
  margin: 0 0 8px;
  width: 100%;
}

.playground__demo-block {
  margin-top: 8px;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
}
</style>
