<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';

const handleSearch = (value: string) => {
  console.log('Submitted!', value);
}
</script>

<template>
  <div class="bg-accent min-h-screen">
    <div class="max-w-screen-2xl mx-auto">
      <TheHeader @search="handleSearch" />

      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
</style>
