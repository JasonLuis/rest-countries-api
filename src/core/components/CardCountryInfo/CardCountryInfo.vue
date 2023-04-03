<template>
  <q-card class="q-pa-none">
    <!-- https://flagcdn.com/br.svg" class="card-image -->
    <q-img :src="props.img" />

    <q-card-section class="q-pt-lg q-pb-none">
      <div class="text-title">{{ props.country }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none q-mt-md">
      <div class="card-text-info q-pb-sm">
        Population: <span>{{ formatNumberPopulation }}</span>
      </div>
      <div class="card-text-info q-pb-sm">
        Region: <span>{{ props.region }}</span>
      </div>
      <div class="card-text-info q-pb-sm">
        Capital: <span>{{ props.capital }}</span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
  country: string;
  population: number;
  region: string;
  capital: string;
  img: string;
}>();

const formatNumberPopulation = computed(() => {
  const format = props.population.toLocaleString('en-us');
  return format;
});
</script>

<style scoped lang="scss">
.q-card {
  width: 264px;
  height: 336px;

  &:deep(.q-img) {
    width: 264px;
    height: 160px;
  }

  &:deep(.text-title) {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 26px;
    color: #111517;
  }

  &:deep(.q-card__section) {
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    // line-height: 16px;
    color: #111517;
  }
}

.card-text-info {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #111517;
  &:deep(span) {
    font-weight: 300;
  }
}
</style>
