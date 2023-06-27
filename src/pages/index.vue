<template>
  <div class="container full-width full-height">
    <div class="row justify-between">
      <UiInputSearch
        v-model="sendCountry"
        class="input-mt-search"
        :dark-mode="props.darkMode"
      />
      <UiSelectRegion
        v-model="selectRegion"
        class="input-mt-select"
        :dark-mode="darkMode"
      />
    </div>
    <div class="q-mt-xl main">
      <UiCardCountryInfo
        v-for="(country, index) in countries"
        :key="index"
        :country="country.name"
        :population="country.population"
        :region="country.region"
        :dark-mode="darkMode"
        :capital="country.capital"
        :img="country.flag"
        class="q-mt-lg"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import UiInputSearch from '../core/components/InputSearch/InputSearch.vue';
import UiSelectRegion from '../core/components/SelectRegion/SelectRegion.vue';
import UiCardCountryInfo from '../core/components/CardCountryInfo/CardCountryInfo.vue';
import { ServerAPI } from '@/app/server/server';

const sendCountry = ref<string | undefined>();
const selectRegion = ref<string | undefined>();
const countries = ref<Array<any> | undefined>();
const server = new ServerAPI();
const props = defineProps<{
  darkMode: boolean;
}>();

async function getCountrys() {
  const res = await server.getAllCountrys();
  return res;
}

async function getCountrysByRegion(filter: string) {
  const res = await server.filterCountryByRegion(filter);
  return res;
}

async function sendCountryByName(country?: string) {
  const res = await server.filterCountriesByName(country);
  return res;
}
countries.value = await getCountrys();
watch(selectRegion, async newValue => {
  if (newValue) {
    countries.value = await getCountrysByRegion(newValue);
  }
});

watch(sendCountry, async newValue => {
  countries.value = await sendCountryByName(newValue);
});
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
