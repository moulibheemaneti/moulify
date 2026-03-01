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
    colors: {
      primary: '#0076ff',
      secondary: '#000',
      tertiary: '#888',
    },
    socialLinks: {
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      // instagram, facebook, x are optional — omit or add URLs as needed
    },
    header: {
      left: [{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }],
      center: [{ name: 'Logo', url: '/' }],
      right: [{ name: 'Contact', url: '/contact' }],
    },
    footer: {
      copyrightText: '© 2026 Moulify. All rights reserved.',
      hasLinks: [
        { name: 'Privacy', url: '/privacy' },
        { name: 'Terms', url: '/terms' },
      ],
    },
  },
})
