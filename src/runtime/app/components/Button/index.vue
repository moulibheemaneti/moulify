<template>
  <button type="button" class="moulify-btn"
    :class="[`moulify-btn--${effectiveSize}`, `moulify-btn--${effectiveVariant}`]">
    <moulify-icon v-if="props.iconLeft" :name="props.iconLeft" />
    <slot />
    <moulify-icon v-if="props.iconRight" :name="props.iconRight" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ButtonProps } from './types';

const props = withDefaults(defineProps<ButtonProps>(), {
  iconLeft: undefined,
  iconRight: undefined,
  size: 'md',
  variant: 'primary',
})

const effectiveSize = computed(() => props.size)

const effectiveVariant = computed(() => props.variant)
</script>

<style lang="scss">
.moulify-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: inherit;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.15s, border-color 0.15s, color 0.15s;

  &--sm {
    padding: 6px 12px;
    font-size: 13px;
  }

  &--md {
    padding: 10px 18px;
    font-size: 14px;
  }

  &--lg {
    padding: 12px 24px;
    font-size: 16px;
  }

  &--primary {
    background-color: var(--moulify-primary-500, #0076ff);
    color: #fff;
    border: 1px solid transparent;

    &:hover {
      background-color: var(--moulify-primary-600, #0066dd);
    }
  }

  &--outlined {
    background-color: transparent;
    color: var(--moulify-primary-500, #0076ff);
    border: 1px solid var(--moulify-primary-500, #0076ff);

    &:hover {
      background-color: var(--moulify-primary-50, rgba(0, 118, 255, 0.08));
    }
  }

  &--link {
    background-color: transparent;
    color: var(--moulify-primary-500, #0076ff);
    border: none;
    border-radius: 0;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
