<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: 'Radio',
  },

  name: {
    type: String,
    default: 'radio-group',
  },

  value: {
    type: String,
    default: '',
  },
})

const emit = defineEmits<{
  (e: 'checked', value: string): void
}>()

const checked = (value: string) => {
  emit('checked', value)
}
</script>

<template>
  <label class="inline-flex items-center cursor-pointer">
    <input type="radio" :value="value" @checked="checked" class="peer sr-only" :name="name">
    <span
      class="bg-white rounded-[35px] border-2 border-primary text-primary py-2 px-6 min-w-[10em] text-center transition duration-300 peer-checked:bg-primary peer-checked:text-white">
      {{ label }}
    </span>
  </label>
</template>
