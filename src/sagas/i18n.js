import { takeEvery, put } from 'redux-saga/effects';

import { i18nActions, i18nNotifier } from '../actions/constants';
import i18n from '../services/I18n';


function findLanguage() {
    let language = navigator.language;
    if(language != 'en' || language != 'tr') {
        language = 'en';
    }

    return language;
}


function *changeLanguage({ type, payload: language }) {
    i18n.changeLanguage(language);
    yield put({
        type: i18nNotifier.SET_CURRENT_LANGUAGE,
        payload: language
    });
}

function *rootSaga() {
   yield takeEvery(i18nActions.CHANGE_LANGUAGE, changeLanguage);

   yield changeLanguage({payload: findLanguage() });
}

export default rootSaga;