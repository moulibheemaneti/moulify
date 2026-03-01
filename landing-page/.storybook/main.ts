import type { StorybookConfig } from '@storybook/vue3-vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const customDomain = process.env.NUXT_PUBLIC_CUSTOM_DOMAIN || 'https://moulify.moulibheemaneti.com'
const targetHost = customDomain.replace(/^https?:\/\//, '').split('/')[0]

const config: StorybookConfig = {
  stories: [
    '../components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  // Redirect *.github.io to custom domain when Storybook is opened directly (production).
  // The Nuxt app’s redirect.client.ts only runs inside the Nuxt app; Storybook is static HTML.
  managerHead(head) {
    if (!targetHost) {
      return head
    }
    return `${head}<script>
(function(){
  var h=window.location.host,t="${targetHost.replace(/"/g, '\\"')}";
  if(h!==t&&(h.endsWith(".github.io")||h==="github.io"))
    window.location.replace(window.location.protocol+"//"+t+window.location.pathname+window.location.search);
})();
</script>`
  },
  viteFinal: async (config) => {
    config.base = '/storybook/'

    // Alias so preview and stories can import module assets (e.g. icon font CSS)
    const projectRoot = path.resolve(__dirname, '../..')
    config.resolve = config.resolve ?? {}
    config.resolve.alias = {
      ...config.resolve.alias,
      '@moulify-assets': path.join(projectRoot, 'src/assets'),
    }

    // Ensure Vue plugin is registered so `.vue` files outside this
    // project (like the shared `src/runtime` components) are
    // transformed correctly in Storybook's Vite pipeline.
    config.plugins = config.plugins || []
    if (!config.plugins.some((plugin: any) => plugin && plugin.name === 'vite:vue')) {
      config.plugins.push(vue())
    }

    return config
  },
}

export default config
