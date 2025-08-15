<template>
  <div class="row q-mt-xl">
    <div class="col-12 col-md-5 card-img">
      <div v-if="props.country" class="q-mb-md">
        <q-img
          :src="props.country.flag"
          role="country flag"
          style="object-fit: contain !important"
        />
      </div>
    </div>
    <div class="col-12 col-md-6 row items-center">
      <div class="section-info row q-pl-xl">
        <div class="col-12 name-country q-mb-lg">{{ country?.name }}</div>
        <div class="col-12 col-sm-5 col-md-5 q-mb-md">
          <p>
            <strong>Native Name:</strong>
            {{ country?.name }}
          </p>
          <p>
            <strong>Population:</strong>
            {{ country?.population }}
          </p>
          <p>
            <strong>Region:</strong>
            {{ country?.region }}
          </p>
          <p>
            <strong>Sub Region:</strong>
            {{ country?.subregion }}
          </p>
          <p>
            <strong>Capital:</strong>
            {{ country?.capital ?? 'N/A' }}
          </p>
        </div>
        <div class="col-12 col-sm-5 col-md-5">
          <p>
            <span class="font-weight-600">Top Level Domain: </span>
            <UiListWithSeparator :items="country?.topLevelDomain" />
          </p>
          <p>
            <span class="font-weight-600">Currencies: </span>
            <UiListWithSeparator :items="country?.currencies" label="name" />
          </p>
          <p>
            <span class="font-weight-600">Languages: </span>
            <UiListWithSeparator :items="country?.languages" label="name" />
          </p>
        </div>
        <div class="col-12 countries-wrapper">
          <div class="countries-wrapper row items-center">
            <div class="text-bold">Border Countries:</div>
            <div class="countries-box">
              <template v-if="country?.borders !== undefined">
                <div
                  v-for="(border, index) in country?.borders"
                  :key="index"
                  class="mini-box-countries"
                >
                  {{ border }}
                </div>
              </template>
              <template v-else>
                <span>N/A</span>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiListWithSeparator from '@/core/components/ListWithSeparator/ListWithSeparator.vue';
import { Country } from '~~/src/app/core/model/Country';

const props = defineProps<{
  country?: Country;
}>();
</script>

<style scoped lang="scss">
.q-img {
  width: 100%;
  min-width: 350px;
  height: 401px;
  :deep(.q-img__image) {
    object-fit: contain !important;
    object-position: center !important;
  }
}

.name-country {
  font-weight: 800;
  font-size: 32px;
}

p {
  margin-bottom: 8px;
}

.font-weight-600 {
  font-weight: 600;
}

.countries-wrapper {
  margin-top: 30px;
  margin-bottom: 18px;
  display: flex;
  gap: 16px;
}

.countries-box {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.mini-box-countries {
  width: 96px;
  height: 28px;
  box-shadow: 0px 0px 4px 1px #0000001b;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: 14px;
  border-radius: 2px;
}

@media (max-width: $breakpoint-sm) {
  .q-img {
    width: 100%;
    min-width: 320px;
    height: 100%;
    min-height: 229px;
    margin: auto;
    :deep(.q-img__image) {
      object-fit: contain !important;
      object-position: center !important;
      min-height: 229px;
    }
  }

  .card-img {
    display: flex;
    justify-content: center;
  }

  .name-country {
    text-align: left;
  }

  .section-info {
    justify-content: center;
  }

  .countries-wrapper {
    justify-content: center;
  }
}

@media (max-width: $breakpoint-xs) {
  .countries-wrapper {
    justify-content: start;
  }
}
</style>
