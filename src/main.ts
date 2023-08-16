import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createI18n } from "vue-i18n";

import en from "./locales/en.json";
import fr from "./locales/fr.json";

const messages = {
  en: en,
  fr: fr,
};

const i18n = createI18n({
  legacy: false,
  locale: "en", // Default locale
  messages,
});

createApp(App).use(i18n).mount("#app");
