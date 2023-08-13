<script setup lang="ts">
import searchIcon from '@/assets/icons/search-icon.svg'
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'submit', value: string): void
}>()
const searchInput = ref('')

const submit = () => {
  emit('submit', searchInput.value)
}
</script>

<template>
  <div class="relative flex">
    <form @submit.prevent="submit">
      <input placeholder="Search for a drink" v-model="searchInput"
        class="py-4 pl-6 min-w-[700px] rounded-[45px] align-bottom placeholder:align-bottom" type="text" />
      <img class="search-icon absolute right-5" :src="searchIcon">
    </form>
  </div>
</template>

<style scoped>
.search-icon {
  width: 25px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
