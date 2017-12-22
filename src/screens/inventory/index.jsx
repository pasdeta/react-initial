import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import List from './containers/List';
import Form from './components/Form';

class Inventory extends Component {

    render() {

        return (
            <Switch>
                <Route exact path="/inventories" component={List} />
                <Route exact path="/inventories/new" component={Form} />
            </Switch>
        );
    }
}

export default Inventory;