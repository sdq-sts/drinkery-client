import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore('mainStore', () =>{
  const search = ref('');

  return { search }
})
