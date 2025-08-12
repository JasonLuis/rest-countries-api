<template>
  <div
    class="container full-width full-height"
    :class="darkMode ? 'text-white' : ''"
  >
    <div class="row justify-between">
      <q-btn flat :class="buttonDark" @click="returnHome">
        <div class="row items-center no-wrap">
          <q-icon left name="keyboard_backspace" />
          <div class="text-center">Back</div>
        </div>
      </q-btn>
    </div>

    <UiInfoCountry :country="country" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCountries } from '../core/composables/useContries';
import { Country } from '../app/core/model/Country';
import UiInfoCountry from '@/core/components/InfoCountry/InfoCountry.vue';

const { getByName } = useCountries();

const router = useRouter();
const route = useRoute();
const returnHome = () => {
  router.push({
    path: './'
  });
};
const props = defineProps<{
  darkMode: boolean;
}>();

const country = ref<Country>();
const countryName = ref<string | undefined>();

const buttonDark = computed(() => {
  return props.darkMode ? 'menu-dark' : '';
});

onMounted(async () => {
  countryName.value = route.query.country as string;

  if (countryName) {
    try {
      country.value = await getByName(countryName.value);
    } catch (err) {
      console.error('Error fetching country:', err);
    }
  } else {
    console.warn('countryName query param is empty');
  }
});
</script>

<style scoped lang="scss">
.container {
  padding-left: 80px;
  padding-right: 80px;
  font-family: 'Nunito Sans';
}

.q-btn {
  width: 136px;
  height: 40px;
  margin-top: 80px;
  border-radius: 5px;
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-weight: 900;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
}

.menu-dark {
  background: #2b3844;
  color: $white;
}

@media (max-width: $breakpoint-sm) {
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
