import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import auth from './auth';

export default combineReducers({
    auth,
    form: formReducer,
    router: routerReducer
});