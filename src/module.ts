import { defineNuxtModule, addPlugin, createResolver, addComponentsDir } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'moulify',
    configKey: 'moulify',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    addComponentsDir({
      // points to src/runtime/app/components
      path: resolver.resolve('runtime/app/components'),
      // optional: control naming
      pathPrefix: false,
      prefix: 'Moulify', // e.g. <MoulifyHeader>, <MoulifyButton>
      // optional: restrict to .vue files (types.ts will be ignored anyway)
      extensions: ['.vue'],
    })
  },
})
