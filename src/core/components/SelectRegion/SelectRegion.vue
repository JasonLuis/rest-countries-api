<!-- eslint-disable vue/v-on-event-hyphenation -->
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <q-select
    v-model="model"
    :class="inputDark"
    :options="options"
    :label="label"
    :popup-content-style="[
      { boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.0532439)' },
      { borderRadius: '5px' }
    ]"
    :options-selected-class="select"
    borderless
    options-dense
    @update:modelValue="$emit('update:cupom', $event)"
  >
    <template #option="{ itemProps, opt }">
      <q-item v-bind="itemProps" :class="menuDark">
        <q-item-section>
          <q-item-label v-html="opt" />
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const model = ref<string | undefined>(undefined);

const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const label = computed(() => {
  return model.value ? undefined : 'Filter by Region';
});

const props = withDefaults(
  defineProps<{
    darkMode: boolean;
  }>(),
  {
    darkMode: false
  }
);

const inputDark = computed(() => {
  return props.darkMode ? 'dark-mode' : undefined;
});
const menuDark = computed(() => {
  return props.darkMode ? 'menu-dark' : undefined;
});
const select = computed(() => {
  return props.darkMode ? 'text-info' : 'text-dark';
});
</script>

<style scoped lang="scss">
%text {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.q-field {
  width: 200px;
  height: 56px;
  background: $white;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  @extend %text;
  &:deep(.q-field__control) {
    padding-left: 24px;
    padding-right: 19px;
    &::before {
      border: 0px;
    }

    &::after {
      color: white;
    }
  }
  &:deep(.q-field__native) {
    @extend %text;
  }
  &:deep(.q-icon) {
    color: #111517;
  }
  &:deep(.q-field__native) {
    @extend %text;
    color: #111517;
  }

  &:deep(.q-field__label) {
    color: #111517;
  }
}

.q-item {
  @extend %text;
  color: #111517;
}

.menu-dark {
  background: #2b3844;
  color: $white;
}

.dark-mode {
  background: #2b3844;
  &:deep(.q-field__control) {
    &::before {
      border: 0px;
    }
    &::after {
      color: #2b3844;
    }
  }
  &:deep(.q-icon) {
    color: $white;
  }
  &:deep(.q-field__native) {
    @extend %text;
    color: white;
  }
  &:deep(.q-field__label) {
    color: $white;
  }
}
</style>
