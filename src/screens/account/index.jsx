import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './containers/Login';

class Account extends Component {

    render() {

        return (
            <Switch>
                <Route exact path="/login" component={Login} />
            </Switch>
        );
    }
}

export default Account;