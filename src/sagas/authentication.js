import { takeEvery, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { startSubmit, stopSubmit } from 'redux-form';

import { AuthenticationActions } from '../actions/constants';

function *login({ type, payload: data }) {
    yield put(startSubmit("loginForm"));
    yield delay(2000);
    yield put(stopSubmit("loginForm", { username: "Invalid" }));
}

function *rootSaga() {
    yield takeEvery(AuthenticationActions.Login, login);
}

export default rootSaga;