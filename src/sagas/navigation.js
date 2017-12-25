import { put, takeEvery, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { NavigateActions } from '../actions/constants';

function *changeRoute({ type, payload: url }) {
    yield put(push(url));
}

function *rootSaga() {
    yield takeEvery(NavigateActions.GO, changeRoute);
}

export default rootSaga;