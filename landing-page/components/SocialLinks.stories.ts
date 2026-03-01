import type { Meta, StoryObj } from '@storybook-vue/nuxt';
import { type VNode, h } from 'vue';
import MoulifySocialLinks from '../../src/runtime/app/components/SocialLinks/index.vue';

const meta = {
  component: MoulifySocialLinks,
  argTypes: {
    links: { control: 'object' },
  },
} satisfies Meta<typeof MoulifySocialLinks>

export default meta
type Story = StoryObj<typeof meta>

export const FromConfig: Story = {
  render: (): VNode => h(MoulifySocialLinks),
}

export const WithProps: Story = {
  args: {
    links: {
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      instagram: 'https://instagram.com',
      x: 'https://x.com',
    },
  },
  render: (args) => h(MoulifySocialLinks, args),
}

export const SinglePlatform: Story = {
  args: {
    links: { github: 'https://github.com/nuxt' },
  },
  render: (args) => h(MoulifySocialLinks, args),
}
