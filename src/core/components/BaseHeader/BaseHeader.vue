<template>
  <q-header
    elevated
    class="text-black row items-center q-pl-xl q-pr-xl"
    :class="select ? 'invert' : 'bg-white'"
  >
    <q-toolbar>
      <q-toolbar-title> Where in the world? </q-toolbar-title>
      <q-btn
        flat
        no-caps
        :icon="`img: ${moonIcon}`"
        label="Dark Mode"
        @click="clickAction()"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const emit = defineEmits(['clickAction']);
const select = ref<boolean>(false);

function clickAction() {
  select.value = !select.value;
  emit('clickAction');
}

const moonIcon = computed(() => {
  return !select.value
    ? new URL(`../../assets/images/moon-icon.svg`, import.meta.url).href
    : new URL(`../../assets/images/moon-dark.svg`, import.meta.url).href;
});
</script>
<style scoped lang="scss">
.bg-dark {
  background-color: #2b3844;
}

.q-header {
  height: 80px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  &:deep(.q-layout__shadow) {
    &::after {
      bottom: 0px;
    }
  }
}

.q-pl-xl {
  padding-left: 80px;
}

.q-pr-xl {
  padding-right: 80px;
}
.q-toolbar__title {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
}

.q-btn {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #111517;

  &:deep(.q-icon) {
    width: 15px;
    height: 15px;
  }

  &:deep(.on-left) {
    margin-right: 5px;
  }
}

.invert {
  background-color: $dark;

  &:deep(.q-toolbar .q-toolbar__title) {
    color: $white;
  }
  &:deep(.q-toolbar .q-btn) {
    color: $white;
  }

  &:deep(.q-toolbar .q-btn .q-icon) {
    color: #333;
  }
}

@media (max-width: $breakpoint-sm) {
  .q-btn {
    font-size: 12px;
  }

  .q-pl-xl {
    padding-left: 16px;
  }

  .q-pr-xl {
    padding-right: 16px;
  }

  .q-toolbar__title {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
