<script setup lang="ts">
import BaseRadioAsButton from './BaseRadioAsButton.vue';
</script>

<template>
  <div>
    <p class="mb-4">I am thinking about having a drink that is</p>
    <BaseRadioAsButton label="Alcoholic" name="alcoholic-group" class="mr-2" />
    <BaseRadioAsButton label="Non-alcoholic" name="alcoholic-group" />
  </div>
</template>
