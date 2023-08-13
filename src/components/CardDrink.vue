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
  <article>
    <main class="bg-white pt-4 px-4 pb-6 rounded-t-[25px]">
      <header>
        <img class="rounded-[16px]" :src="img" :srcset="srcset" :alt="props.drink.name" />
      </header>

      <div>
        <h3 class="text-xl font-bold mt-4">{{ props.drink.name }}</h3>
        <p class="text-sm text-gray-500">{{ props.drink.description }}</p>
      </div>
    </main>

    <div class="bg-accent p-5 rounded-b-[25px]">
      <span class="font-bold">
        {{ price }}
      </span>
    </div>
  </article>
</template>
