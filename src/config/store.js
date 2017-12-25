import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import rootReducer from '../reducers';
import SagaManager from '../sagas';

const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
let middlewareEnhancer = applyMiddleware(sagaMiddleware, routerMiddleware(history));

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
export { history }