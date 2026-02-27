export default defineNuxtConfig({
  modules: [
    // if local module
    '../src/module',
    // 'moulify',
  ],
  ssr: false,
  devtools: { enabled: true },
  compatibilityDate: 'latest',
  moulify: {
    // prefix: "nc",
  },
})
