<template>
  <div>
    {{ props.darkMode }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  darkMode: boolean;
}>();
</script>
