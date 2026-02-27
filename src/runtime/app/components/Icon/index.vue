<template>
  <i v-if="isIconValid" :class="`icon icon--${name}`" />

  <!-- Fallback: Showing uppercase text -->
  <span v-else class="icon-fallback"> {{ props.name }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Icons } from '~/src/assets/generated/fonts/icons'
import { ALL_ICONS } from '../../../../utils/constants'
import type { IconProps } from './types'

defineOptions({ name: 'NcIcon' })

const props = withDefaults(defineProps<IconProps>(), {
  size: 24,
  color: 'white',
})

const isIconValid = computed(() => ALL_ICONS.includes(props.name as Icons))

const iconStyle = computed(() => ({
  // fontSize: pixelToRem(props.size),
  fontSize: `${props.size}px`,
  color: props.color,
}))
</script>

<style lang="scss">
.icon {
  display: inline-block;

  // There was an extra space visible bottom of the icon when inspected. So this is not properly aligning with other UI elements.
  line-height: 0;

  color: v-bind('iconStyle.color');
  font-size: v-bind('iconStyle.fontSize');
}

.icon-fallback {
  text-transform: uppercase;
}
</style>
