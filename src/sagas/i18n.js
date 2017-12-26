import i18n from '../services/I18n';

function *rootSaga() {
    i18n.changeLanguage('tr');
}

export default rootSaga;