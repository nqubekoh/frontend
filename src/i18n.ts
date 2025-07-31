import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enKE from './locales/kenya.json';
import enBW from './locales/botswana.json';

const country = process.env.REACT_APP_COUNTRY?.toLowerCase();
const lngMap: Record<string, string> = {
    ke: 'en-KE',
    bw: 'en-BW',
};

const defaultLng = country && lngMap[country] ? lngMap[country] : 'en-KE';
i18n
    .use(initReactI18next)
    .init({
        resources: {
            'en-KE': { translation: enKE },
            'en-BW': { translation: enBW },
        },
        lng: defaultLng, // Set based on .env
        fallbackLng: 'en-KE',
        supportedLngs: ['en-KE', 'en-BW'],
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
