<template>
  <template v-if="items?.length">
    <span v-for="(item, index) in items" :key="index">
      {{ getLabel(item) }}
      <span v-if="index < items.length - 1">{{ separator }}</span>
    </span>
  </template>
</template>

<script setup lang="ts" generic="T">
interface Props<T> {
  items?: T[];
  label?: ((item: T) => string) | string;
  separator?: string;
}

const props = withDefaults(defineProps<Props<T>>(), {
  separator: ', '
});

const getLabel = (item: T): string => {
  if (typeof props.label === 'function') {
    return props.label(item);
  } else if (typeof props.label === 'string') {
    return String(item[props.label as keyof T]);
  } else {
    return String(item);
  }
};
</script>
