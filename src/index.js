import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import App from './containers/App';
import configureStore from './config/store';
let store = configureStore();

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root'),
    )
};

render(App);

if(__DEV__) {
    if (module.hot) {
        module.hot.accept('./containers/App', () => { 
            render(require('./containers/App').default) 
        });
    }
}
