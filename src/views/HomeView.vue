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
const { data: drinks } = useDrinksQuery(filters);

const handleAlkySelection = (value: boolean) => {
  filters.alcoholic = value;
};

const handleSeasonSelection = (value: string) => {
  filters.season = value;
};

watch(filters, () => {
  console.log('WATCH', filters.search)
})
</script>

<template>
  <div>
    <WelcomeHero @alky-selection="handleAlkySelection" @season-selection="handleSeasonSelection" class="mt-14" />

    <div class="grid grid-cols-4 mt-12 gap-10">
      <CardDrink v-for="drink in drinks" :drink="drink" :key="drink.id" />
    </div>
  </div>
</template>

<style>
</style>
