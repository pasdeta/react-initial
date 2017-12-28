import { takeEvery, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { startSubmit, stopSubmit } from 'redux-form';

import Navigate from './utilities/navigate';
import Request from '../services/Request';
import { AuthenticationActions, AuthenticationNotifier } from '../actions/constants';


function *checkAuthentication() {
    const token = window.localStorage.getItem('token');
    if(!token) {
        return;
    }
    console.log("Should Check Token")
    yield put({ type: AuthenticationNotifier.SET_LOGGED_IN_STATE });
}

function *login({ type, payload: { data, department } }) {
    window.localStorage.setItem('token', data.token);
    window.localStorage.setItem('department', department);

    yield put({ type: AuthenticationNotifier.SET_LOGGED_IN_STATE });
    yield delay(400);
    yield Navigate.to('/');
}

function *logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('department');
}

function *rootSaga() {
    yield call(checkAuthentication);
    yield takeEvery(AuthenticationActions.Login, login);
}

export default rootSaga;