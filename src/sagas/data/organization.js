import { takeEvery, put, call } from 'redux-saga/effects';

import { OrganizationNotifier } from '../../actions/constants';

import Request from '../../services/Request';

function *fetchOrganization() {
    yield put({
        type: OrganizationNotifier.SET_LOADING,
        payload: true
    });
    const result = yield Request.get('/organizations');  
    yield put({
        type: OrganizationNotifier.SET_DATA,
        payload: result
    });
}

export default function *rootSaga() {
    yield fetchOrganization();
}

