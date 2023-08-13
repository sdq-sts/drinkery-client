<script setup lang="ts">
import WelcomeHeroChooseAlcohol from './WelcomeHeroChooseAlcohol.vue';
import WelcomeHeroChooseSeason from './WelcomeHeroChooseSeason.vue';

const emit = defineEmits<{
  (e: 'alkySelection', value: boolean): void
  (e: 'seasonSelection', value: string): void
}>()

const handleAlkySelection = (value: boolean) => {
  emit('alkySelection', value)
}

const handleSeasonSelection = (value: string) => {
  emit('seasonSelection', value)
}
</script>

<template>
  <div class="flex bg-white rounded-[30px] p-10 items-center justify-end">
    <div class="max-w-[160px] mr-auto">
      <h2 class="text-4xl font-bold">Welcome</h2>
      <p class="text-xl mt-4">How will be your drink today?</p>
    </div>

    <WelcomeHeroChooseAlcohol @alky-selection="handleAlkySelection" class="mr-8" />
    <WelcomeHeroChooseSeason @season-selection="handleSeasonSelection" />
  </div>
</template>
