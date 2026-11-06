<template>
  <div
    class="bg-primary-800 text-white"
    role="region"
    :aria-label="t('redirect.label')"
  >
    <div
      class="container m-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3"
    >
      <p class="text-center sm:text-left">
        <strong class="font-display">{{ t("redirect.title") }}</strong>
        {{ t("redirect.text") }}
      </p>
      <a class="banner-button" :href="t('redirect.url')">
        {{ t("redirect.button") }}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <path
            d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped>
.banner-button {
  @apply bg-white text-primary-700 fill-primary-700 font-display whitespace-nowrap;
  @apply px-4 py-2 rounded-lg inline-flex items-center;
  @apply hover:bg-primary-100;
}
.banner-button svg {
  @apply w-5 h-5 ml-2;
}
</style>
