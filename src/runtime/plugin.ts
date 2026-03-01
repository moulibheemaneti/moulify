import { type NuxtApp, defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'
import type { ColorPalette, MoulifyResolvedColors, MoulifyPublicConfig } from '../types'

declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    moulify?: MoulifyPublicConfig
  }
}

const injectColorPaletteVars = (
  name: string,
  palette: ColorPalette,
  target: { setProperty: (name: string, value: string) => void },
): void => {
  const prefix = `--moulify-${name}`
  target.setProperty(`${prefix}-50`, palette[50])
  target.setProperty(`${prefix}-100`, palette[100])
  target.setProperty(`${prefix}-200`, palette[200])
  target.setProperty(`${prefix}-300`, palette[300])
  target.setProperty(`${prefix}-400`, palette[400])
  target.setProperty(`${prefix}-500`, palette[500])
  target.setProperty(`${prefix}-600`, palette[600])
  target.setProperty(`${prefix}-700`, palette[700])
  target.setProperty(`${prefix}-800`, palette[800])
  target.setProperty(`${prefix}-900`, palette[900])
}

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  const config = useRuntimeConfig()
  const colors = config.public.moulify?.colors as MoulifyResolvedColors | undefined

  if (colors && typeof document !== 'undefined') {
    const root = document.documentElement
    if (colors.primary) {
      injectColorPaletteVars('primary', colors.primary, root.style)
    }
    if (colors.secondary) {
      injectColorPaletteVars('secondary', colors.secondary, root.style)
    }
    if (colors.tertiary) {
      injectColorPaletteVars('tertiary', colors.tertiary, root.style)
    }
  }

  nuxtApp.provide('moulifyColors', colors ?? {})
  nuxtApp.provide('moulifyConfig', config.public.moulify ?? {})
})
