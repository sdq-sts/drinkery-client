<script setup lang="ts">
import BaseRadioAsButton from './BaseRadioAsButton.vue';
</script>

<template>
  <div>
    <p class="mb-4">Perfect suitable for</p>
    <BaseRadioAsButton label="Spring" name="season-group" class="mr-2" />
    <BaseRadioAsButton label="Winter" name="season-group" class="mr-2" />
    <BaseRadioAsButton label="Fall" name="season-group" class="mr-2" />
    <BaseRadioAsButton label="Summer" name="season-group" />
  </div>
</template>
