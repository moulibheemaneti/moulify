import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import MoulifyIcon from '../../src/runtime/app/components/Icon/index.vue'

const meta = {
  // 👇 The component you're working on
  component: MoulifyIcon,
  args: {
    name: 'home-01',
  },
} satisfies Meta<typeof MoulifyIcon>

export default meta
// 👇 Type helper to reduce boilerplate
type Story = StoryObj<typeof meta>

// 👇 A story named Primary that renders `<Button primary label="Button"><slot /></Button>`
export const Primary: Story = {}
