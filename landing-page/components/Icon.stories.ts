import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import MoulifyIcon from '../../src/runtime/app/components/Icon/index.vue'

const meta = {
  component: MoulifyIcon,
  argTypes: {
    name: { control: 'text' },
    size: { control: { type: 'number', min: 8, max: 64 } },
    color: { control: 'color' },
  },
  args: {
    name: 'home-03',
    size: 24,
    color: 'currentColor',
  },
} satisfies Meta<typeof MoulifyIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => ({
    components: { MoulifyIcon },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <MoulifyIcon name="home-03" :size="16" />
        <MoulifyIcon name="home-03" :size="24" />
        <MoulifyIcon name="home-03" :size="32" />
        <MoulifyIcon name="home-03" :size="48" />
      </div>
    `,
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { MoulifyIcon },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <MoulifyIcon name="heart" size="32" color="#e11d48" />
        <MoulifyIcon name="heart" size="32" color="#0076ff" />
        <MoulifyIcon name="heart" size="32" color="#22c55e" />
      </div>
    `,
  }),
}
