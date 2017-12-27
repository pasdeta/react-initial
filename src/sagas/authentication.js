import { takeEvery, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { startSubmit, stopSubmit } from 'redux-form';

import Request from '../services/Request';
import { AuthenticationActions } from '../actions/constants';

function *login({ type, payload: data }) {
    yield put(startSubmit("loginForm"));
    
    try {
        const result = yield Request.post('/login', data);
        console.log("login result", result);
    }
    catch(e) {
        yield put(stopSubmit("loginForm", { username: "Invalid" }));
    }
}

function *rootSaga() {
    yield takeEvery(AuthenticationActions.Login, login);
}

export default rootSaga;