import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Inventory from '../screens/inventory';
import NoMatch from '../components/NoMatch';

import '../assets/style.scss';

export default class App extends React.Component {
  render() {

    return (
      <MuiThemeProvider>
        <Router>
          <Switch>
            <Route path='/inventories' component={Inventory}/>
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}