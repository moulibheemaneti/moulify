<template>
  <div>
    <NuxtRouteAnnouncer />

    <button type="button" @click="goToStorybook">
      Open Storybook
    </button>

    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const goToStorybook = () => {
  if (typeof window !== 'undefined') {
    window.location.href = '/storybook'
  }
}
</script>
