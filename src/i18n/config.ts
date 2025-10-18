import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import vi from './locales/vi.json'

const STORAGE_KEY = 'languagePreference'

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: en },
			vi: { translation: vi }
		},
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false
		},
		detection: {
			order: ['localStorage', 'navigator'],
			caches: ['localStorage'],
			lookupLocalStorage: STORAGE_KEY
		}
	})

export default i18n
