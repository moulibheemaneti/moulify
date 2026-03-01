<template>
  <footer class="moulify-footer">
    <div class="moulify-footer__inner">
      <p v-if="effectiveCopyright" class="moulify-footer__copyright">
        {{ effectiveCopyright }}
      </p>
      <nav v-if="effectiveLinks.length" class="moulify-footer__links" aria-label="Footer links">
        <template v-for="(link, i) in effectiveLinks" :key="i">
          <a class="moulify-footer__link" :href="link.url" target="_blank" rel="noopener noreferrer">
            {{ link.name }}
          </a>
          <span v-if="i < effectiveLinks.length - 1" class="moulify-footer__separator" aria-hidden="true">
            {{ separator }}
          </span>
        </template>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import type { MoulifyPublicConfig } from '../../../../types';
import type { FooterProps } from './types';

const props = withDefaults(defineProps<FooterProps>(), {
  copyrightText: undefined,
  hasLinks: undefined,
})

const config = inject<MoulifyPublicConfig>('moulifyConfig', {})

const effectiveCopyright = computed(() => props.copyrightText ?? config.footer?.copyrightText ?? '',)

const effectiveLinks = computed(() => props.hasLinks ?? config.footer?.hasLinks ?? [])

const separator = ' · '
</script>

<style lang="scss">
.moulify-footer {
  padding: 24px 16px;
  // background-color: var(--moulify-secondary-100, #f5f5f5);
  // color: var(--moulify-secondary-700, #333);
  border-top: 1px solid var(--moulify-tertiary-200, #ddd);
}

.moulify-footer__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 24px;
}

.moulify-footer__copyright {
  margin: 0;
  font-size: 14px;
}

.moulify-footer__links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px 0;
}

.moulify-footer__link {
  color: var(--moulify-primary-600, #0066dd);
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
}

.moulify-footer__separator {
  margin: 0 8px;
  color: var(--moulify-tertiary-500, #888);
  user-select: none;
}
</style>
