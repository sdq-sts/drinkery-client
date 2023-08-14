<script setup lang="ts">
import profileIcon from '@/assets/icons/profile.svg';
import chevronDownIcon from '@/assets/icons/chevron-down.svg';
</script>

<template>
  <div class="flex justify-end items-center">
    <img :src="profileIcon">
    <span class="mx-2">Maria Clara</span>
    <img :src="chevronDownIcon">
  </div>
</template>
