import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importar recursos de idioma
import enTranslations from "./locales/en/translation.json";
import esTranslations from "./locales/es/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    es: {
      translation: esTranslations,
    },
    // Agregar más idiomas aquí
  },
  lng: "en", // idioma inicial
  fallbackLng: "en", // idioma de respaldo
  interpolation: {
    escapeValue: false, // no es necesario para React
  },
});

export default i18n;
