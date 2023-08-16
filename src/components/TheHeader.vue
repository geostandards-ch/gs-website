<template>
  <nav class="bg-slate-600">
    <h1 class="font-display font-bold text-3xl">{{ $t("general.title") }}</h1>
    <p>{{ $t("general.headline") }}</p>
    <div class="lang-dropdown">
      <select v-model="selectedLanguage">
        <option v-for="lang in languages" :key="lang.value" :value="lang.value">
          {{ lang.label }}
        </option>
      </select>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

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
