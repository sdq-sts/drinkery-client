<script setup lang="ts">
import SiteLogo from './SiteLogo.vue';
import SearchInput from './SearchInput.vue';
import { useMainStore } from '@/stores';
import TheHeaderProfile from './TheHeaderProfile.vue';

const store = useMainStore()

const handleSearch = (value: string) => {
  store.search = value
}
</script>

<template>
  <header class="pt-10 flex items-center">
    <SiteLogo class="mr-6" />
    <SearchInput @search="handleSearch" />

    <div class="flex-grow">

      <TheHeaderProfile />
    </div>
  </header>
</template>
