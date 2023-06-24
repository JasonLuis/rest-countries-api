<template>
  <q-layout view="hHh lpR fFf" class="no-shadow" :class="color">
    <UiBaseHeader :dark-mode="darkMode" @click-action="changeBackgroundColor" />
    <q-page-container class="row justify-center full-width full-height">
      <router-view :dark-mode="darkMode" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UiBaseHeader from '../components/BaseHeader/BaseHeader.vue';

const color = ref<string>('bg-info');
const darkMode = ref<boolean>(false);
function changeBackgroundColor() {
  color.value = color.value === 'bg-info' ? 'bg-dark-page' : 'bg-info';
  darkMode.value = !darkMode.value;
}
</script>

<style scoped lang="scss">
.bg-dark-page {
  background-color: $dark-page;
}
</style>
