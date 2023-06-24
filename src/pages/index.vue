<template>
  <div class="container full-width full-height">
    <div class="row justify-between">
      <UiInputSearch
        v-model="model"
        class="input-mt-search"
        :dark-mode="props.darkMode"
      />
      <UiSelectRegion class="input-mt-select" :dark-mode="darkMode" />
    </div>
    <div class="q-mt-xl main">
      <UiCardCountryInfo
        v-for="index in 7"
        :key="index"
        country="Brazil"
        :population="206135893"
        region="Americas"
        :dark-mode="darkMode"
        capital="Brasília"
        :img="'https://flagcdn.com/br.svg'"
        class="q-mt-lg"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UiInputSearch from '../core/components/InputSearch/InputSearch.vue';
import UiSelectRegion from '../core/components/SelectRegion/SelectRegion.vue';
import UiCardCountryInfo from '../core/components/CardCountryInfo/CardCountryInfo.vue';

const model = ref<string | undefined>();

const props = defineProps<{
  darkMode: boolean;
}>();
</script>

<style scoped lang="scss">
.input-mt-search,
.input-mt-select {
  margin-top: 48px;
}

.container {
  padding-left: 80px;
  padding-right: 80px;
}

.main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
}
@media (max-width: $breakpoint-sm) {
  .input-mt-select {
    margin-top: 40px;
  }
  .input-mt-search {
    margin-top: 24px;
  }
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }

  .main {
    justify-content: center;
  }
}
</style>
