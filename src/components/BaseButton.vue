<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: 'Click Me!',
    required: true
  },
})
</script>

<template>
  <span
    class="inline-block cursor-pointer align-middle text-black bg-accent rounded-[35px] py-2 px-6 min-w-[10em] text-center transition duration-300">
    {{ label }}
  </span>
</template>
