<template>
  <button class="moulify-btn">
    <moulify-icon v-if="props.iconLeft" :name="props.iconLeft" />
    <slot />
    <moulify-icon v-if="props.iconRight" :name="props.iconRight" />
  </button>
</template>

<script setup lang="ts">
// eslint-disable-next-line @stylistic/semi
import type { ButtonProps } from './types';

const props = withDefaults(defineProps<ButtonProps>(), {
  iconLeft: undefined,
  iconRight: undefined,
})
</script>

<style lang="scss">
.moulify-btn {
  background-color: var(--moulify-primary-500, #0076ff);
  align-items: center;
  color: #fff;
  padding: 10px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
</style>
