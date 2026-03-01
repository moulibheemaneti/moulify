import type { Preview } from '@storybook-vue/nuxt'
// Load icon font and styles so Icon component works in Storybook (path via alias from main.ts)
import '@moulify-assets/generated/fonts/icons.css'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
