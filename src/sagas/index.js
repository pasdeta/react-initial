import { take, fork, cancel } from 'redux-saga/effects';

import DataSaga from './data';
import NavigationSaga from './navigation';
import AuthenticationSaga from './authentication';
import i18n from './i18n';

const sagas = [DataSaga, NavigationSaga, AuthenticationSaga, i18n];

export const CANCEL_SAGAS_HMR = 'CANCEL_SAGAS_HMR';

const createAbortableSaga = (saga) => {
    if(__DEV__) {

        return function *main() {
            const sagaTask = yield fork(saga);
            yield take(CANCEL_SAGAS_HMR);
            yield cancel(sagaTask);
        };
    }
    else {
        return saga;
    }
};

const SagaManager = {
    start(middleware) {
        sagas.map(createAbortableSaga).forEach((saga) => middleware.run(saga));
    },
    cancel(store) {
        store.dispatch({
            type: CANCEL_SAGAS_HMR
        });
    }
};

export default SagaManager;