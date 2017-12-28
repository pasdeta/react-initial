import { put, takeEvery, all } from 'redux-saga/effects';

import Navigate from './utilities/navigate';
import { NavigateActions } from '../actions/constants';

function *changeRoute({ type, payload: url }) {
    yield Navigate.to(url);
}

function *rootSaga() {
    yield takeEvery(NavigateActions.GO, changeRoute);
}

export default rootSaga;