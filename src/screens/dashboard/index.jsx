import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Summary from './components/Summary';

class Dashboard extends Component {

    render() {

        return (
            <Switch>
                <Route exact path="/" component={Summary} />
            </Switch>
        );
    }
}

export default Dashboard;