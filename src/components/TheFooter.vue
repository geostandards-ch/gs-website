<template>
  <div>
    <div class="w-full h-40 bg-slate-600"></div>
    <div class="w-full h-40 bg-slate-700">
      <p class="font-display font-bold text-md">{{ $t("general.title") }}</p>
    </div>
  </div>
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
