<template>
  <footer class="mt-24">
    <div class="w-full h-24 bg-slate-600"></div>
    <div class="w-full h-40 bg-slate-700">
      <div class="container m-auto px-4 flex flex-col justify-center h-full">
        <p class="font-display text-md text-white text-center">
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
