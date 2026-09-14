import es from './locales/en.json'
import en from './locales/en.json'
import {createI18n} from 'vue-i18n';

/**
 * shared internationalization (i18n) instance for the application.
 * This instance is created default locale, fallback and the translation messages
 *
 */

const i18n = createI18n({
    locale: en,
    fallbackLng: 'en',
    messages: { en , es },
});

export default i18n;