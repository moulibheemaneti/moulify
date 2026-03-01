<template>
  <header class="moulify-header">
    <nav class="moulify-header__nav moulify-header__nav--left" aria-label="Left navigation">
      <template v-for="(link, i) in effectiveLeft" :key="`l-${i}`">
        <a v-if="isExternal(link.url)" class="moulify-header__link" :href="link.url" target="_blank"
          rel="noopener noreferrer">
          {{ link.name }}
        </a>
        <NuxtLink v-else class="moulify-header__link" :to="link.url">
          {{ link.name }}
        </NuxtLink>
      </template>
    </nav>
    <nav class="moulify-header__nav moulify-header__nav--center" aria-label="Center navigation">
      <template v-for="(link, i) in effectiveCenter" :key="`c-${i}`">
        <a v-if="isExternal(link.url)" class="moulify-header__link" :href="link.url" target="_blank"
          rel="noopener noreferrer">
          {{ link.name }}
        </a>
        <NuxtLink v-else class="moulify-header__link" :to="link.url">
          {{ link.name }}
        </NuxtLink>
      </template>
    </nav>
    <nav class="moulify-header__nav moulify-header__nav--right" aria-label="Right navigation">
      <template v-for="(link, i) in effectiveRight" :key="`r-${i}`">
        <a v-if="isExternal(link.url)" class="moulify-header__link" :href="link.url" target="_blank"
          rel="noopener noreferrer">
          {{ link.name }}
        </a>
        <NuxtLink v-else class="moulify-header__link" :to="link.url">
          {{ link.name }}
        </NuxtLink>
      </template>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import type { MoulifyPublicConfig } from '../../../../types';
import type { HeaderProps } from './types';

const props = withDefaults(defineProps<HeaderProps>(), {
  left: undefined,
  center: undefined,
  right: undefined,
})

const config = inject<MoulifyPublicConfig>('moulifyConfig', {})

const effectiveLeft = computed(() => props.left ?? config.header?.left ?? [])
const effectiveCenter = computed(() => props.center ?? config.header?.center ?? [])
const effectiveRight = computed(() => props.right ?? config.header?.right ?? [])

const isExternal = (url: string): boolean => /^https?:\/\//i.test(url) || url.startsWith('//')
</script>

<style lang="scss">
.moulify-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 12px 24px;
  background-color: var(--moulify-secondary-900, #000);
  color: #fff;
  border-radius: 0;

  &__nav {
    display: flex;
    align-items: center;
    gap: 8px 24px;

    &--left {
      flex: 0 0 auto;
    }

    &--center {
      flex: 1;
      justify-content: center;
    }

    &--right {
      flex: 0 0 auto;
      justify-content: flex-end;
    }
  }

  &__link {
    color: inherit;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
