<script setup lang="ts">
import BaseRadioAsButton from './BaseRadioAsButton.vue';

const emit = defineEmits<{
  (e: 'alkySelection', value: boolean): void
}>()

const handleRadioChange = (value: string | boolean | null) => {
  if (typeof value === 'boolean') {
    emit('alkySelection', value)
  }
}
</script>

<template>
  <div>
    <p class="mb-4">I am thinking about having a drink that is</p>
    <BaseRadioAsButton @change="handleRadioChange" label="Alcoholic" name="alcoholic-group" :value="true" class="mr-2" />
    <BaseRadioAsButton @change="handleRadioChange" label="Non-alcoholic" name="alcoholic-group" :value="false" />
  </div>
</template>
