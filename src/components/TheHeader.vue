<script setup lang="ts">
import SiteLogo from './SiteLogo.vue';
import SearchInput from './SearchInput.vue';

const emit = defineEmits<{
  (e: 'search', value: string): void
}>()

const handleSubmit = (value: string) => {
  emit('search', value)
}
</script>

<template>
  <header class="pt-10 flex items-center">
    <SiteLogo class="mr-6" />
    <SearchInput @submit="handleSubmit" />
  </header>
</template>
