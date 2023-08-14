<script setup lang="ts">
import useImageLinks from '@/composables/useImageLinks';
import closeIcon from '@/assets/icons/close-icon.svg';
import useFormatCurrency from '@/composables/useFormatCurrency';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'removeFromCart', value: string): void
}>()

function removeFromCart() {
  emit('removeFromCart', props.item.id);
}

const { img } = useImageLinks([props.item.image]);
const price = useFormatCurrency(props.item.price);
</script>

<template>
  <div class="bg-transparent flex w-96">
    <img class="w-28 rounded-[11px]" :src="img">
    <div class="ml-2 grow">
      <div class="flex justify-end">
        <img @click="removeFromCart" class="cursor-pointer" :src="closeIcon">
      </div>
      <h4 class="font-bold">{{ item.name }}</h4>
      <div class="flex justify-between mt-1">
        <span class="text-primary">{{ item.amount }}x</span>
        <span class="font-bold text-primary">{{ price }}</span>
      </div>
    </div>
  </div>
</template>
