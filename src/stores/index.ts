import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

export type CartItem = {
  image: string,
  name: string,
  price: number,
  amount: number
}

export const useMainStore = defineStore('mainStore', () =>{
  const search = ref('');
  const cart = reactive<{ items: CartItem[] }>({
    items: [],
  })
  const cartTotal = computed(() => {
    const sumItems = (acc: number, curr: number) => acc + curr;

    return cart.items.length
      ? cart.items.map(item => item.price).reduce(sumItems, 0)
      : 0;
  });

  const addToCart = (item: CartItem) => {
    cart.items.push(item);
  }

  return { search, cart, cartTotal, addToCart }
})
