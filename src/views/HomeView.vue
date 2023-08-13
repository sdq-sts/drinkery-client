<script setup lang="ts">
import WelcomeHero from '@/components/WelcomeHero.vue';
import useDrinksQuery from '@/composables/services/useDrinksQuery';
import { useMainStore } from '@/stores';
import { computed, reactive, watch } from 'vue';

const store = useMainStore();

const filters = reactive({
  search: computed(() => store.search),
  alcoholic: false,
  season: '',
  offset: 0
})
const { data } = useDrinksQuery(filters);

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
    {{ data?.map(drink => drink.id).length }}
  </div>
</template>

<style>
</style>
