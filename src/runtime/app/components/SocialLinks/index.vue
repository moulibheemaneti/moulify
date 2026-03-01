<template>
  <nav class="moulify-social-links" aria-label="Social links">
    <template v-if="effectiveLinks.length">
      <a v-for="item in effectiveLinks" :key="item.id" class="moulify-social-links__item" :href="item.link"
        target="_blank" rel="noopener noreferrer">
        {{ item.name }}
      </a>
    </template>
  </nav>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import type { MoulifyPublicConfig } from '../../../../types';
import { type SocialLinksProps, SocialPlatform } from './types';

const props = defineProps<SocialLinksProps>()

const config = inject<MoulifyPublicConfig>('moulifyConfig', {})

const effectiveLinks = computed(() =>
  SocialPlatform.fromConfigs(config.socialLinks, props.links),
)
</script>

<style lang="scss">
.moulify-social-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 24px;

  &__item {
    color: var(--moulify-primary-500, #0076ff);
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
