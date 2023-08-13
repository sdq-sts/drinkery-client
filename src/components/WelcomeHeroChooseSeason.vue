<script setup lang="ts">
import BaseRadioAsButton from './BaseRadioAsButton.vue';
const emit = defineEmits<{
  (e: 'seasonSelection', value: string): void
}>()

const handleRadioChange = (value: string | boolean) => {
  if (typeof value === 'string') {
    emit('seasonSelection', value)
  }
}
</script>

<template>
  <div>
    <p class="mb-4">Perfect suitable for</p>
    <BaseRadioAsButton @change="handleRadioChange" label="Spring" name="season-group" value="spring" class="mr-2" />
    <BaseRadioAsButton @change="handleRadioChange" label="Winter" name="season-group" value="winter" class="mr-2" />
    <BaseRadioAsButton @change="handleRadioChange" label="Fall" name="season-group" value="fall" class="mr-2" />
    <BaseRadioAsButton @change="handleRadioChange" label="Summer" name="season-group" value="summer" />
  </div>
</template>
