import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import SagaManager from '../sagas';

const sagaMiddleware = createSagaMiddleware();
let middlewareEnhancer = applyMiddleware(sagaMiddleware);

if(__DEV__) {
    const DevTools = require('redux-devtools-extension').composeWithDevTools;
    middlewareEnhancer = DevTools(middlewareEnhancer);
}

const configureStore = () => {
    const store = createStore(
        rootReducer,
        middlewareEnhancer
    );

    SagaManager.start(sagaMiddleware);

    if(__DEV__) {
        if(module.hot) {
            module.hot.accept("../reducers/index", () =>
                store.replaceReducer(require("../reducers/index").default)
            );
        }
    }

    return store;
}

export default configureStore;