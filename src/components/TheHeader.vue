<template>
  <nav class="bg-slate-600">
    <div class="container m-auto px-4 py-4">
      <div class="flex justify-between">
        <div class="text-white">
          <h1 class="font-display font-bold text-2xl">
            {{ t("general.title") }}
          </h1>
          <p>{{ t("general.headline") }}</p>
        </div>

        <LangPicker />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

import LangPicker from "../components/LangPicker.vue";

const { t } = useI18n();
</script>
