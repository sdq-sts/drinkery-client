<script setup lang="ts">
import WelcomeHero from '@/components/WelcomeHero.vue';
import useDrinksQuery from '@/composables/services/useDrinksQuery';
import { useMainStore } from '@/stores';
import { computed, reactive, watch } from 'vue';
import CardDrink from '@/components/CardDrink.vue';

const store = useMainStore();

const filters = reactive({
  search: computed(() => store.search),
  alcoholic: false,
  season: '',
  offset: 0
})
const { data, refetch, fetchNextPage, hasNextPage, isFetchingNextPage } = useDrinksQuery(filters);

const handleAlkySelection = (value: boolean) => {
  filters.alcoholic = value;
};

const handleSeasonSelection = (value: string) => {
  filters.season = value;
};

watch(filters, () => refetch())
</script>

<template>
  <div>
    <WelcomeHero @alky-selection="handleAlkySelection" @season-selection="handleSeasonSelection" class="mt-14" />

    <div class="grid grid-cols-4 auto-rows-fr mt-12 gap-10" v-for="(group, index) in data?.pages" :key="index">
      <CardDrink v-for="drink in group.data" :drink="drink" :key="drink.id" />
    </div>

    <button @click="() => fetchNextPage()" :disabled="!hasNextPage || isFetchingNextPage">
      <span v-if="isFetchingNextPage">Loading more...</span>
      <span v-else-if="hasNextPage">Load More</span>
    </button>
  </div>
</template>

<style>
</style>
