import { fork } from 'redux-saga/effects';

import OrganizationSaga from './organization';

export default function *rootSaga() {
    yield fork(OrganizationSaga);
}

