import { takeEvery, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { startSubmit, stopSubmit } from 'redux-form';

import Navigate from './utilities/navigate';
import Request, { setAuthParameters } from '../services/Request';
import { AuthenticationActions, AuthenticationNotifier } from '../actions/constants';


function *checkAuthentication() {
    const token = window.localStorage.getItem('token');
    const departmentId = window.localStorage.getItem('department-id');
    if(!token) {
        return;
    }
    setAuthParameters(token, departmentId);
    console.log("Should Check Token")
    yield put({ type: AuthenticationNotifier.SET_LOGGED_IN_STATE });
}

function *login({ type, payload: { data, department } }) {
    window.localStorage.setItem('token', data.token);
    window.localStorage.setItem('department-id', department.id);
    yield put({ type: AuthenticationNotifier.SET_LOGGED_IN_STATE });
    setAuthParameters(data.token, department.id);
    yield Navigate.to('/');
}

function *logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('department-id');
    setAuthParameters(null, null);
    yield put({ type: AuthenticationNotifier.SET_LOGGED_OUT_STATE });
    yield Navigate.to('/login');
}

function *rootSaga() {
    yield call(checkAuthentication);
    yield takeEvery(AuthenticationActions.Login, login);
    yield takeEvery(AuthenticationActions.Logout, logout);
}

export default rootSaga;