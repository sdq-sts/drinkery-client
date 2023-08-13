<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <div class="bg-accent min-h-screen">
    <div class="max-w-screen-2xl mx-auto px-10">
      <TheHeader />

      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
</style>
