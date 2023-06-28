<template>
  <div class="container full-width full-height">
    <div class="row justify-between">
      <q-btn flat :class="buttonDark" @click="navigate">
        <div class="row items-center no-wrap">
          <q-icon left name="keyboard_backspace" />
          <div class="text-center">Back</div>
        </div>
      </q-btn>
    </div>

    <div class="row q-mt-xl">
      <div class="col-12 col-md-5 card-img">
        <q-img :src="`https://flagcdn.com/be.svg`" />
      </div>
      <div class="col-12 col-md-4">.col-12 .col-md-4</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const router = useRouter();
const navigate = () => {
  router.push({
    path: './'
  });
};
const props = defineProps<{
  darkMode: boolean;
}>();

const buttonDark = computed(() => {
  return props.darkMode ? 'menu-dark' : '';
});
</script>

<style scoped lang="scss">
.container {
  padding-left: 80px;
  padding-right: 80px;
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

.q-img {
  width: 560px;
  height: 401px;
}

.menu-dark {
  background: #2b3844;
  color: $white;
}

@media (max-width: $breakpoint-sm) {
  .q-img {
    width: 320px;
    height: 229px;
    margin: auto;
  }

  .container {
    padding-left: 16px;
    padding-right: 16px;
  }

  .card-img {
    display: flex;
    justify-content: center;
  }
}
</style>
