import type { StorybookConfig } from '@storybook/vue3-vite'
import vue from '@vitejs/plugin-vue'

const config: StorybookConfig = {
  stories: [
    '../components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.base = '/storybook/'

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
