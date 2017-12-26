import { i18nActions } from '../constants';

const ChangeLanguage = (language) => ({
    type: i18nActions.CHANGE_LANGUAGE,
    payload: language
});

export default { ChangeLanguage };