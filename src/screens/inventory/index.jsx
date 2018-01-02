import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import List from './containers/List';
import Form from './components/form';
import InventoryDetail from './containers/Detail';
import LocationHistory from './containers/LocationHistory';

class Inventory extends Component {

    render() {

        return (
            <Switch>
                <Route exact path="/inventories" component={List} />
                <Route exact path="/inventories/new" component={Form} />
                <Route exact path="/inventories/:id/history" component={LocationHistory} />
                <Route exact path="/inventories/:id" component={InventoryDetail} />
            </Switch>
        );
    }
}

export default Inventory;