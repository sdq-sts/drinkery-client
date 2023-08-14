<script setup lang="ts">
import type { Drink } from '@/composables/services/useDrinksQuery';
import useImageLinks from '@/composables/useImageLinks';
import useFormatCurrency from '@/composables/useFormatCurrency';

const props = defineProps<{
  drink: Drink;
}>()

const { img, srcset } = useImageLinks(props.drink.images);
const price = useFormatCurrency(props.drink.price);

</script>

<template>
  <article class="grow">
    <div class="bg-white pt-4 px-4 pb-6 rounded-t-[25px]">
      <div>
        <img class="rounded-[16px]" :src="img" :srcset="srcset" :alt="props.drink.name" />
      </div>

      <div>
        <h3 class="text-xl font-bold mt-4">{{ props.drink.name }}</h3>
        <p class="text-sm text-gray-500 min-h-[60px]">{{ props.drink.description }}</p>
      </div>
    </div>

    <div class="bg-accent p-5 rounded-b-[25px]">
      <span class="font-bold">
        {{ price }}
      </span>
    </div>
  </article>
</template>
