import { addComponentsDir, addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import type { ModuleOptions, MoulifyResolvedColors } from './types'
import { normalizeToPalette } from './utils/colorPalette'

const versionFromPackageJson = (await import('../package.json')).version

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'moulify',
    configKey: 'moulify',
    version: versionFromPackageJson,
  },
  defaults: {
    prefix: 'moulify',
    colors: {
      primary: '#0076ff', // little element plus default blue
      secondary: '#000', // black
      tertiary: '#888', // grey
    },
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Resolve colors to full palettes (50, 100, … 900)
    const resolvedColors: MoulifyResolvedColors = {
      primary: normalizeToPalette(options.colors?.primary),
      secondary: normalizeToPalette(options.colors?.secondary),
      tertiary: normalizeToPalette(options.colors?.tertiary),
    }

    nuxt.options.runtimeConfig.public.moulify = nuxt.options.runtimeConfig.public?.moulify ?? {}
    ;(nuxt.options.runtimeConfig.public as any).moulify = {
      ...(nuxt.options.runtimeConfig.public as any).moulify,
      colors: resolvedColors,
    }

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    addComponentsDir({
      // points to src/runtime/app/components
      path: resolver.resolve('runtime/app/components'),
      // optional: control naming
      pathPrefix: false,
      // prefix controls auto-imported component names, e.g. <nc-button>, <moulify-button>
      prefix: options.prefix,
      // optional: restrict to .vue files (types.ts will be ignored anyway)
      extensions: ['.vue'],
    })
  },
})
