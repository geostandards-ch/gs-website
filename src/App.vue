<template>
  <TheHeader />

  <div class="container m-auto px-4">
    <!-- Intro -->
    <section>
      <h2 class="font-display font-bold text-3xl">
        {{ t("introduction.title") }}
      </h2>
      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-2/3 pr-0 lg:pr-16">
          <p>{{ t("introduction.description") }}</p>
          <a
            class="button"
            :href="t('introduction.button.link')"
            target="_blank"
            >{{ t("introduction.button.label") }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <path
                d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"
              ></path>
            </svg>
          </a>
        </div>
        <div class="w-full lg:w-1/3">
          <img
            src="./assets/cover.png"
            alt="Map switzerland"
            class="rounded-3xl mt-6 lg:mt-0"
          />
        </div>
      </div>
    </section>
    <!-- Strategy -->
    <section>
      <h2 class="font-display font-bold text-3xl">
        {{ t("strategy.title") }}
      </h2>
      <p>{{ t("strategy.description") }}</p>
      <a class="button" :href="t('strategy.button.link')" target="_blank"
        >{{ t("strategy.button.label") }}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <path
            d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"
          ></path>
        </svg>
      </a>
    </section>
    <!-- Organization -->
    <section>
      <h2 class="font-display font-bold text-3xl">
        {{ t("organization.title") }}
      </h2>
      <p>{{ t("organization.description") }}</p>
      <a class="button" :href="t('organization.button.link')" target="_blank"
        >{{ t("organization.button.label") }}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <path
            d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"
          ></path>
        </svg>
      </a>
    </section>
    <!-- Team -->
    <section>
      <h2 class="font-display font-bold text-3xl">
        {{ t("team.title") }}
      </h2>
      <p>{{ t("team.description") }}</p>
      <!-- Marketing -->
      <div class="team-axis">
        <h3>{{ t("team.marketing.title") }}</h3>
        <p>
          {{ t("team.marketing.holders.holder-1") }},
          {{ t("team.marketing.holders.holder-2") }}
        </p>
        <a
          class="button"
          :href="`mailto:${t('team.marketing.contact.full')}`"
          target="_blank"
          >{{ t("team.marketing.contact.label") }}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <path
              d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"
            ></path>
          </svg>
        </a>
      </div>
      <!-- Training -->
      <div class="team-axis">
        <h3>{{ t("team.training.title") }}</h3>
        <p>
          {{ t("team.training.holders.holder-1") }},
          {{ t("team.training.holders.holder-2") }}
        </p>
        <a
          class="button"
          :href="`mailto:${t('team.training.contact.full')}`"
          target="_blank"
          >{{ t("team.training.contact.label") }}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <path
              d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"
            ></path>
          </svg>
        </a>
      </div>
      <!-- Standardisation -->
      <div class="team-axis">
        <h3>{{ t("team.standardisation.title") }}</h3>
        <p>
          {{ t("team.standardisation.holders.holder-1") }},
          {{ t("team.standardisation.holders.holder-2") }}
        </p>
        <a
          class="button"
          :href="`mailto:${t('team.standardisation.contact.full')}`"
          target="_blank"
          >{{ t("team.standardisation.contact.label") }}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <path
              d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"
            ></path>
          </svg>
        </a>
      </div>
      <!-- Tools -->
      <div class="team-axis">
        <h3>{{ t("team.tools.title") }}</h3>
        <p>
          {{ t("team.tools.holders.holder-1") }},
          {{ t("team.tools.holders.holder-2") }}
        </p>
        <a class="button" :href="testMail" target="_blank"
          >{{ t("team.tools.contact.label") }}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <path
              d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  </div>

  <TheFooter />
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

const { t } = useI18n();

// const testMail = "mailto:test@toto.ch";
const testMail = "mailto:" + t("team.tools.contact.full");
console.log(testMail);
</script>

<style scoped>
section {
  @apply my-16;
}

.button {
  @apply bg-white px-6 py-4 rounded-lg inline-block font-display inline-flex;
  @apply border border-red-600 text-red-600 fill-red-600;
  @apply mt-3;
  @apply hover:bg-red-600 hover:text-white hover:fill-white;
}

.button svg {
  @apply w-6 h-6 ml-3;
}

section h2 {
  @apply mb-3;
}
section h3 {
  @apply font-display font-bold text-xl;
}
section p {
  @apply text-slate-800;
}

.team-axis {
  @apply mt-8;
}
</style>
