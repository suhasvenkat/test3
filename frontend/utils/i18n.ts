import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from '../locales/en.json';
import de from '../locales/de.json';

const LANGUAGE_KEY = 'app_language';

const resources = {
  en: { translation: en },
  de: { translation: de },
};

// Get stored language or device language
const getInitialLanguage = async () => {
  try {
    const storedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);
    if (storedLanguage) {
      return storedLanguage;
    }
    // Use device language if German, otherwise default to English
    const deviceLanguage = Localization.getLocales()[0]?.languageCode || 'en';
    return deviceLanguage === 'de' ? 'de' : 'en';
  } catch {
    return 'en';
  }
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en', // default, will be overridden
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

// Initialize language
getInitialLanguage().then((language) => {
  i18n.changeLanguage(language);
});

export const changeLanguage = async (language: string) => {
  await AsyncStorage.setItem(LANGUAGE_KEY, language);
  i18n.changeLanguage(language);
};

export default i18n;
