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
        class="q-mb-xl"
        @click="navigate(country.name)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import UiInputSearch from '../core/components/InputSearch/InputSearch.vue';
import UiSelectRegion from '../core/components/SelectRegion/SelectRegion.vue';
import UiCardCountryInfo from '../core/components/CardCountryInfo/CardCountryInfo.vue';
import { useCountries } from '../core/composables/useContries';
import { Country } from '../app/core/model/Country';

const sendCountry = ref<string | undefined>();
const selectRegion = ref<string | undefined>();
const countries = ref<Array<Country> | undefined>();

const { getAll, filterByRegion, filterByName } = useCountries();

const router = useRouter();
const props = defineProps<{
  darkMode: boolean;
}>();

countries.value = await getAll();

watch(selectRegion, async newValue => {
  if (newValue) {
    countries.value = await filterByRegion(newValue);
  }
});

watch(sendCountry, async newValue => {
  if (newValue) countries.value = await filterByName(newValue);
});

const navigate = (countryName: string) => {
  router.push({
    path: './detail',
    query: {
      darkMode: `${props.darkMode}`,
      country: `${countryName}`
    }
  });
};
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
  gap: 45px;
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
