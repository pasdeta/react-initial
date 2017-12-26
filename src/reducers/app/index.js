import { combineReducers } from 'redux';

import languageReducer from './language';

export default combineReducers({
    i18n: languageReducer
});