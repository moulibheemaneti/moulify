export default defineNuxtConfig({
  modules: [
    // if local module
    '../src/module',
    // 'moulify',
  ],
  ssr: false,
  devtools: { enabled: true },
  compatibilityDate: 'latest',

  // Module options (used by the module and merged into runtimeConfig by the module)
  moulify: {
    colors: {
      primary: '#0076ff',
      secondary: '#000',
      tertiary: '#888',
    },
    socialLinks: {
      twitter: 'https://twitter.com',
      github: 'https://github.com',
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

  // Explicit runtimeConfig.public.moulify so footer/header/socialLinks reach the client
  runtimeConfig: {
    public: {
      moulify: {
        footer: {
          copyrightText: '© 2026 Moulify. All rights reserved.',
          hasLinks: [
            { name: 'Privacy', url: '/privacy' },
            { name: 'Terms', url: '/terms' },
          ],
        },
        header: {
          left: [{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }],
          center: [{ name: 'Logo', url: '/' }],
          right: [{ name: 'Contact', url: '/contact' }],
        },
        socialLinks: {
          twitter: 'https://twitter.com',
          github: 'https://github.com',
        },
      },
    },
  },
})
