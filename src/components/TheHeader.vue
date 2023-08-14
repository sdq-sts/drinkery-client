<script setup lang="ts">
import SiteLogo from './SiteLogo.vue';
import SearchInput from './SearchInput.vue';
import { useMainStore } from '@/stores';
import TheHeaderProfile from './TheHeaderProfile.vue';
import cartIcon from '@/assets/icons/cart-icon.svg';
import CartOrder from '@/components/CartOrder.vue';
import { ref } from 'vue';

const store = useMainStore()
const showCart = ref(false)

const handleSearch = (value: string) => {
  store.search = value
}

const handleCartStatus = () => {
  showCart.value = !showCart.value
}
</script>

<template>
  <header class="pt-10 flex items-center">
    <SiteLogo class="mr-6" />
    <SearchInput @search="handleSearch" />

    <span class="relative">
      <span @click="handleCartStatus" class="flex ml-5 cursor-pointer">
        <img :src="cartIcon">
        <span class="flex justify-center items-center rounded-full bg-primary text-white w-6 h-6 ml-2 leading-3">
          {{ store.cart.items.length }}
        </span>
      </span>
      <CartOrder v-if="showCart && store.cart.items.length" class="absolute top-10 left-4" />
    </span>

    <div class="flex-grow">
      <TheHeaderProfile />
    </div>
  </header>
</template>
