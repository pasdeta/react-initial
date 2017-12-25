import { take, fork, cancel } from 'redux-saga/effects';

import NavigationSaga from './navigation';

const sagas = [NavigationSaga];

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