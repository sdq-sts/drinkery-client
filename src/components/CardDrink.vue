<script setup lang="ts">
import type { Drink } from '@/composables/services/useDrinksQuery';
import useImageLinks from '@/composables/useImageLinks';
import useFormatCurrency from '@/composables/useFormatCurrency';
import CardDrinkIcon from './CardDrinkIcon.vue';
import isAlcoholicIcon from '@/assets/icons/alcoholic.svg';
import nonAlcoholicIcon from '@/assets/icons/non-alcoholic.svg';
import seasonSummerIcon from '@/assets/icons/season-summer.svg';
import seasonWinterIcon from '@/assets/icons/season-winter.svg';
import seasonFallIcon from '@/assets/icons/season-fall.svg';
import seasonSpringIcon from '@/assets/icons/season-spring.svg';
import CardDrinkAddButton from './CardDrinkAddButton.vue';

const seasonIcons = {
  summer: seasonSummerIcon,
  winter: seasonWinterIcon,
  fall: seasonFallIcon,
  spring: seasonSpringIcon,
}

const props = defineProps<{
  drink: Drink;
}>()

const { img, srcset } = useImageLinks(props.drink.images);
const price = useFormatCurrency(props.drink.price);

</script>

<template>
  <article class="grow">
    <div class="bg-white pt-4 px-4 pb-4 rounded-t-[25px]">
      <div>
        <img class="rounded-[16px]" :src="img" :srcset="srcset" :alt="props.drink.name" />
      </div>

      <div>
        <h3 class="text-xl font-bold mt-4">{{ props.drink.name }}</h3>
        <p class="text-sm text-gray-500 min-h-[60px]">{{ props.drink.description }}</p>
      </div>
      <div class="flex mt-2 w-full">
        <CardDrinkIcon class="mr-1">
          <template #icon>
            <img class="icon" :src="props.drink.is_alcoholic ? isAlcoholicIcon : nonAlcoholicIcon">
          </template>
        </CardDrinkIcon>

        <CardDrinkIcon class="mr-1">
          <template #icon>
            <img class="icon" :src="seasonIcons[props.drink.recommended_season]">
          </template>
        </CardDrinkIcon>
      </div>
    </div>

    <div class="flex relative justify-between bg-accent p-5 rounded-b-[25px]">
      <span class="font-bold">
        {{ price }}
      </span>
      <CardDrinkAddButton />
    </div>
  </article>
</template>

<style scoped>
</style>
