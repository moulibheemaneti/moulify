import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import { h } from 'vue'
import MoulifyButton from '../../src/runtime/app/components/Button/index.vue'

const meta = {
  // 👇 The component you're working on
  component: MoulifyButton,
} satisfies Meta<typeof MoulifyButton>

export default meta
// 👇 Type helper to reduce boilerplate
type Story = StoryObj<typeof meta>

// 👇 A story named Primary that renders `<Button primary label="Button"><slot /></Button>`
export const Primary: Story = {
  render: (args, { slots }) => h(MoulifyButton, args, {
    default: () => slots?.default ? slots.default() : 'click me',
  }),
}
