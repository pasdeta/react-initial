import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { I18nextProvider } from 'react-i18next';
import FlexView from 'react-flexview';

import i18n from '../services/I18n';
import Inventory from '../screens/inventory';
import Account from '../screens/account';
import Dashboard from '../screens/dashboard';
import NoMatch from '../components/NoMatch';
import NavigationBar from '../containers/NavigationBar';
import { history } from '../config/store';

import '../assets/style.scss';

import { AuthenticationProvider } from '../providers/Authentication';

export default class App extends React.Component {

  render() {

    return (
      <I18nextProvider i18n={ i18n }>
        <AuthenticationProvider>
          <MuiThemeProvider>
            <ConnectedRouter history={history}>
              <FlexView grow>
                <NavigationBar test />
                <FlexView basis="10" />
                <FlexView grow>
                  <Switch>
                    <Route path='/inventories' component={Inventory}/>
                    <Route exact path='/' component={Dashboard} />
                    <Route exact path='/login' component={Account} />
                    <Route component={NoMatch} />
                  </Switch>
                </FlexView>
                <FlexView basis="10" />
              </FlexView>
            </ConnectedRouter>
          </MuiThemeProvider>
        </AuthenticationProvider>
      </I18nextProvider>
    );
  }
}