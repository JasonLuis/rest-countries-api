<template>
  <q-layout view="hHh lpR fFf" class="no-shadow" :class="color">
    <UiBaseHeader @click-action="changeBackgroundColor" />
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UiBaseHeader from '../components/BaseHeader/BaseHeader.vue';

const color = ref<string>('bg-info');

function changeBackgroundColor() {
  color.value = color.value === 'bg-info' ? 'bg-dark-page' : 'bg-info';
}
</script>

<style scoped lang="scss">
.bg-dark-page {
  background-color: $dark-page;
}
</style>
