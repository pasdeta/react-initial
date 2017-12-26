import i18n from 'i18next';

import EN from '../assets/i18n/en.json';
import TR from '../assets/i18n/tr.json';

i18n
    .init({
        react: {
            wait: false,
            withRef: false,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        },
        resources: {
            en: {
                translation: EN
            },
            tr: {
                translation: TR
            }
        }
    });


export default i18n;