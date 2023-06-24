<template>
  <q-input
    v-model="input"
    placeholder="Search for a country..."
    class="no-border no-radius"
    outlined
    :class="props.darkMode ? 'dark-mode' : 'light-mode'"
    @update:modelValue="$emit('update:model-value', $event)"
  >
    <template #prepend>
      <q-icon name="search" @click="$emit('clickAction')" />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const input = ref<string | undefined>();
defineEmits(['clickAction', 'update']);

const props = withDefaults(
  defineProps<{
    darkMode: boolean;
  }>(),
  {
    darkMode: false
  }
);
</script>

<style scoped lang="scss">
%text-style {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}

.q-field {
  width: 480px;
  height: 56px;
  border-radius: 5px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  &:deep(.q-field__control) {
    padding-left: 34px;
    &::before {
      border: 0px;
    }
  }
  &:deep(.q-field__native) {
    @extend %text-style;
  }
}

.light-mode {
  background: $white;
  &:deep(.q-field__control) {
    &::after {
      color: $white;
    }
  }
  &:deep(.q-field__native) {
    color: #848484;
  }
  &:deep(.q-icon) {
    width: 17px;
    height: 17px;
    cursor: pointer;
    color: #848484;
  }
}
.dark-mode {
  background: #2b3844;
  &:deep(.q-field__control) {
    &::after {
      color: #2b3844;
    }
  }
  &:deep(.q-field__native) {
    color: $white;
  }
  &:deep(.q-icon) {
    width: 17px;
    height: 17px;
    cursor: pointer;
    color: $white;
  }
}

@media (max-width: $breakpoint-sm) {
  .q-field {
    width: 100%;
    height: 48px;
    &:deep(.q-icon) {
      width: 16px;
      height: 16px;
    }
    &:deep(.q-field__control) {
      height: 48px;
      &::after {
        color: $white;
      }
    }
    &:deep(.q-field__prepend) {
      height: 48px;
    }
  }
  %text-style {
    font-weight: 400;
    font-size: 12px;
  }
}
</style>
