import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createI18n } from "vue-i18n";

import de from "./locales/de.json";
import fr from "./locales/fr.json";
import en from "./locales/en.json";

const messages = {
  de: de,
  fr: fr,
  en: en,
};

const i18n = createI18n({
  legacy: false,
  locale: "de", // Default locale
  messages,
});

createApp(App).use(i18n).mount("#app");
