import i18n from "i18next";
import "./i18n";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en", // default language
  fallbackLng: "en",
  resources: {
    en: {
      common: require("./locales/en/common.json"),
    },
    id: {
      common: require("./locales/id/common.json"),
    },
  },
});

export default i18n;
