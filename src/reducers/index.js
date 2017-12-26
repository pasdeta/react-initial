import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import appReducer from './app';

export default combineReducers({
    app: appReducer,
    auth,
    form: formReducer,
    router: routerReducer
});