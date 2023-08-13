<script setup lang="ts">
import LogoIcon from '@/assets/icons/logo-icon.svg'
</script>

<template>
  <div class="flex items-center">
    <img :src="LogoIcon" alt="Drinkery Logo" class="mr-1 logo-icon">
    <h1 class="font-bold text-4xl">
      Drinkery
    </h1>
  </div>
</template>

<style scoped>
.logo-icon {
  width: 20px;
  height: 20px;
}
</style>
