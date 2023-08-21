<template>
  <nav class="bg-slate-600">
    <div class="container m-auto px-4 py-4">
      <div class="flex justify-between">
        <div class="text-white">
          <h1 class="font-display font-bold text-2xl">
            {{ $t("general.title") }}
          </h1>
          <p>{{ $t("general.headline") }}</p>
        </div>

        <LangPicker />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import LangPicker from "../components/LangPicker.vue";

const { locale } = useI18n();
const selectedLanguage = ref(locale.value);

const languages = [
  { label: "English", value: "en" },
  { label: "Français", value: "fr" },
];

watch(selectedLanguage, (newLang) => {
  locale.value = newLang;
});
</script>
