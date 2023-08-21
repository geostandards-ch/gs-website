<template>
  <footer class="mt-24">
    <div class="w-full flex justify-center">
      <img src="../assets/bee.png" alt="Map switzerland" class="" />
    </div>
    <!-- <div class="w-full h-2 bg-primary-300"></div>
    <div class="w-full h-4 bg-primary-400"></div>
    <div class="w-full h-8 bg-primary-500"></div>
    <div class="w-full h-16 bg-primary-600"></div>
    <div class="w-full h-24 bg-primary-700"></div> -->
    <!-- <div class="w-full h-40 bg-primary-800"> -->
    <div class="w-full h-80 bg-primary-500">
      <div
        class="container m-auto px-4 flex flex-col justify-center h-full text-white text-center"
      >
        <h1 class="font-display font-bold text-4xl mb-2">
          {{ t("general.title") }}
        </h1>
        <p class="font-display text-md">
          Copyright © {{ t("general.title") }} – {{ creditYears() }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const creditYears = () => {
  const currentYear = new Date().getFullYear();
  if (currentYear > 2021) return `2021-${currentYear}`;
  else return currentYear;
};
</script>

<style scoped></style>
