<template>
  <div class="relative h-10 w-40 min-w-[200px]">
    <select v-model="selectedLanguage" class="peer lang-picker">
      <option v-for="lang in languages" :key="lang.value" :value="lang.value">
        {{ lang.label }} ({{ lang.value.toUpperCase() }})
      </option>
    </select>
    <label class="lang-picker-label before:content[' '] after:content[' ']">
      {{ $t("general.langPickerLabel") }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const selectedLanguage = ref(locale.value);

const languages = [
  { label: "Deutsch", value: "de" },
  { label: "Français", value: "fr" },
  { label: "English", value: "en" },
];

watch(selectedLanguage, (newLang) => {
  locale.value = newLang;
});
</script>

<style scoped>
.lang-picker {
  @apply h-full w-full rounded-[7px] border border-slate-200 border-t-transparent bg-transparent px-3 py-2.5 text-sm font-normal text-white outline outline-0 transition-all;
  @apply placeholder-shown:border placeholder-shown:border-slate-200 placeholder-shown:border-t-slate-200 empty:!bg-red-500;
  @apply focus:border-2 focus:border-slate-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-slate-50;
}

.lang-picker-label {
  @apply pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px];
  @apply font-normal leading-tight text-white transition-all;
  @apply before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-slate-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-slate-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-slate-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-slate-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-slate-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-slate-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-slate-500;
}
</style>
