// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxtjs/storybook'],
  ssr: false,
  devtools: { enabled: true },

  // Custom subdomain is at root; no path prefix
  app: {
    baseURL: '/',
  },

  runtimeConfig: {
    public: {
      /** Custom domain for redirect (e.g. www.yourdomain.com). Set NUXT_PUBLIC_CUSTOM_DOMAIN in CI or here. */
      customDomain: process.env.NUXT_PUBLIC_CUSTOM_DOMAIN || 'https://moulify.moulibheemaneti.com',
    },
  },

  devServer: {
    port: 3001,
  },

  compatibilityDate: '2025-07-15',

  nitro: {
    preset: 'github-pages',
  },
})
