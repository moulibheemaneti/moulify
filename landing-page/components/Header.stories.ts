import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import { type VNode, h } from 'vue'
import MoulifyHeader from '../../src/runtime/app/components/Header/index.vue'

const meta = {
  component: MoulifyHeader,
  argTypes: {
    left: { control: 'object' },
    center: { control: 'object' },
    right: { control: 'object' },
  },
} satisfies Meta<typeof MoulifyHeader>

export default meta
type Story = StoryObj<typeof meta>

export const FromConfig: Story = {
  render: (): VNode => h(MoulifyHeader),
}

export const WithProps: Story = {
  args: {
    left: [
      { name: 'Home', url: '/' },
      { name: 'Docs', url: '/docs' },
    ],
    center: [{ name: 'Moulify', url: '/' }],
    right: [
      { name: 'GitHub', url: 'https://github.com' },
      { name: 'Contact', url: '/contact' },
    ],
  },
  render: (args) => h(MoulifyHeader, args),
}
