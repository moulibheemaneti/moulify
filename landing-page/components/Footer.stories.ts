import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import { type VNode, h } from 'vue'
import MoulifyFooter from '../../src/runtime/app/components/Footer/index.vue'

const meta = {
  component: MoulifyFooter,
  argTypes: {
    copyrightText: { control: 'text' },
    hasLinks: { control: 'object' },
  },
} satisfies Meta<typeof MoulifyFooter>

export default meta
type Story = StoryObj<typeof meta>

export const FromConfig: Story = {
  render: (): VNode => h(MoulifyFooter),
}

export const WithProps: Story = {
  args: {
    copyrightText: '© 2026 Moulify. All rights reserved.',
    hasLinks: [
      { name: 'Privacy', url: '/privacy' },
      { name: 'Terms', url: '/terms' },
      { name: 'Docs', url: '/docs' },
    ],
  },
  render: (args) => h(MoulifyFooter, args),
}

export const CopyrightOnly: Story = {
  args: {
    copyrightText: '© Demo. No links.',
  },
  render: (args) => h(MoulifyFooter, args),
}
