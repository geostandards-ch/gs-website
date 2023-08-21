<template>
  <nav class="bg-primary-500">
    <div class="container m-auto px-4 py-8">
      <div class="flex justify-between">
        <div class="text-white">
          <h1 class="font-display font-bold text-4xl">
            {{ t("general.title") }}
          </h1>
          <p>{{ t("general.headline") }}</p>
        </div>

        <LangPicker />
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
