import type { Preview } from '@storybook-vue/nuxt';
import { type VNode, defineComponent, getCurrentInstance, h } from 'vue';
// Load icon font and styles so Icon component works in Storybook (path via alias from main.ts)
import '@moulify-assets/generated/fonts/icons.css';

const NuxtLinkStub = defineComponent({
  name: 'NuxtLink',
  props: { to: { type: [String, Object], default: '#' } },
  setup(props: { to: string | { path?: string } }, { slots }) {
    const href = typeof props.to === 'string' ? props.to : (props.to?.path ?? '#')
    return (): VNode => h('a', { href, class: 'nuxt-link-stub' }, slots.default?.())
  },
})

const moulifyConfig = {
  colors: undefined as any,
  button: { size: 'md' as const, variant: 'primary' as const },
  icon: { size: 24, color: 'currentColor' },
  socialLinks: {
    twitter: 'https://twitter.com',
    github: 'https://github.com',
  },
  header: {
    left: [{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }],
    center: [{ name: 'Logo', url: '/' }],
    right: [{ name: 'Contact', url: '/contact' }],
  },
  footer: {
    copyrightText: '© Storybook. All rights reserved.',
    hasLinks: [
      { name: 'Privacy', url: '/privacy' },
      { name: 'Terms', url: '/terms' },
    ],
  },
}

const withMoulify = (story: any, context: any): { render: () => VNode, provide: { moulifyConfig: typeof moulifyConfig } } => {
  const Wrapper = {
    setup() {
      const inst = getCurrentInstance()
      const app = inst?.appContext?.app
      if (app && !app._context.components?.NuxtLink) {
        app.component('NuxtLink', NuxtLinkStub)
      }
      return (): VNode => h(story(), context)
    },
  }
  return {
    render: (): VNode => h(Wrapper),
    provide: {
      moulifyConfig,
    },
  }
}

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [withMoulify],
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
