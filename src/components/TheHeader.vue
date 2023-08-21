<template>
  <nav class="bg-primary-500">
    <div class="container m-auto px-4 py-8">
      <div class="flex flex-col sm:flex-row justify-between">
        <div class="text-white">
          <h1 class="font-display font-bold text-2xl sm:text-3xl md:text-4xl">
            {{ t("general.title") }}
          </h1>
          <p class="headline">{{ t("general.headline") }}</p>
        </div>

        <LangPicker class="mt-6 sm:mt-0" />
      </div>
    </div>
  </nav>
  <!-- <div class="w-full h-4 bg-primary-400"></div>
  <div class="w-full h-2 bg-primary-300"></div> -->
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

import LangPicker from "../components/LangPicker.vue";

const { t } = useI18n();
</script>

<style scoped>
.headline {
  letter-spacing: 0.145em;
}
</style>
