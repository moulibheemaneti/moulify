import type { Meta, StoryObj } from '@storybook-vue/nuxt'
import { h } from 'vue'
import MoulifyButton from '../../src/runtime/app/components/Button/index.vue'

const meta = {
  component: MoulifyButton,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['primary', 'outlined', 'link'] },
    iconLeft: { control: 'text' },
    iconRight: { control: 'text' },
  },
  args: {
    size: 'md',
    variant: 'primary',
  },
} satisfies Meta<typeof MoulifyButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'primary' },
  render: (args, { slots }) =>
    h(MoulifyButton, args, { default: () => slots?.default?.() ?? 'Button' }),
}

export const Outlined: Story = {
  args: { variant: 'outlined' },
  render: (args, { slots }) =>
    h(MoulifyButton, args, { default: () => slots?.default?.() ?? 'Outlined' }),
}

export const Link: Story = {
  args: { variant: 'link' },
  render: (args, { slots }) =>
    h(MoulifyButton, args, { default: () => slots?.default?.() ?? 'Link' }),
}

export const Sizes: Story = {
  render: () =>
    h('div', { style: 'display: flex; gap: 12px; align-items: center; flex-wrap: wrap;' }, [
      h(MoulifyButton, { size: 'sm', variant: 'primary' }, () => 'Small'),
      h(MoulifyButton, { size: 'md', variant: 'primary' }, () => 'Medium'),
      h(MoulifyButton, { size: 'lg', variant: 'primary' }, () => 'Large'),
    ]),
}

export const WithIcons: Story = {
  render: () =>
    h('div', { style: 'display: flex; gap: 12px; align-items: center; flex-wrap: wrap;' }, [
      h(MoulifyButton, { variant: 'primary', iconLeft: 'heart' }, () => 'Like'),
      h(MoulifyButton, { variant: 'outlined', iconRight: 'chevron-right' }, () => 'Next'),
    ]),
}
