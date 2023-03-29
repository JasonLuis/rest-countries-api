<template>
  <q-header
    elevated
    class="bg-white text-black row items-center q-pl-xl q-pr-xl"
  >
    <q-toolbar>
      <q-toolbar-title> Where in the world? </q-toolbar-title>
      <q-btn flat no-caps :icon="`img: ${moonIcon}`" label="Dark Mode" />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
const moonIcon = new URL(`../../assets/images/moon-icon.svg`, import.meta.url)
  .href;
</script>
<style scoped lang="scss">
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
</style>
