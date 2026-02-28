import { defineNuxtPlugin } from '#app'
import { useRuntimeConfig } from '#imports'

export default defineNuxtPlugin((_nuxtApp) => {
  const config = useRuntimeConfig()
  const customDomain = config.public.customDomain as string | undefined

  if (!customDomain || typeof window === 'undefined') {
    return
  }

  const host = window.location.host
  const targetHost = customDomain.replace(/^https?:\/\//, '').split('/')[0]

  if (host !== targetHost && (host.endsWith('.github.io') || host === 'github.io')) {
    const protocol = window.location.protocol
    const path = window.location.pathname + window.location.search
    window.location.replace(`${protocol}//${targetHost}${path}`)
  }
})
