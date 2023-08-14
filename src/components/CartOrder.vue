<script setup lang="ts">
import useFormatCurrency from '@/composables/useFormatCurrency';
import CartOrderItem from './CartOrderItem.vue';
import { useMainStore } from '@/stores';
import arrowIcon from '@/assets/icons/arrow.svg';
import { computed } from 'vue';

const store = useMainStore();
const total = computed(() => useFormatCurrency(store.cartTotal));
</script>

<template>
  <div class="bg-accent p-6 rounded-[20px] z-[100]">
    <CartOrderItem class="mb-5" v-for="(item, i) in store.cart.items" :item="item" :key="i" />

    <div>
      <div class="font-bold flex justify-between mt-4 px-2 text-lg">
        <span>Subtotal</span>
        <span>{{ total }}</span>
      </div>
      <div class="flex justify-between px-2">
        <span>Taxes</span>
        <span>$0</span>
      </div>
    </div>
    <div class="font-bold flex justify-between mt-4 px-2 text-2xl">
      <span>Total</span>
      <span>{{ total }}</span>
    </div>
    <div class="mt-4">
      <button class="flex justify-between items-center bg-primary w-full px-8 py-3 rounded-[35px]">
        <span class="text-white text-2xl">Checkout</span>
        <span>
          <img :src="arrowIcon">
        </span>
      </button>
    </div>
  </div>
</template>
