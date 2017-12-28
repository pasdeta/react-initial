import React, { Component } from 'react';
import FlexView from 'react-flexview';


import Request from '../../../services/Request';

import InventoriesGrid from '../components/InventoriesGrid';
import Search from '../components/Search';
import Operations from '../components/Operations';


export default class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inventories: []
        }
    }

    async componentDidMount() {
        let response = await Request.post('/inventory');
        this.setState({ inventories: response.data });
    }

    render() {
        const { t } = this.props;

        return (
            <FlexView grow column>
                <FlexView basis="90">
                    <Search />
                </FlexView>
                <FlexView basis="10" />
                <FlexView grow>
                    <InventoriesGrid data={this.state.inventories} />
                </FlexView>
                <FlexView basis="10" />
                <FlexView basis="80">
                    <Operations />
                </FlexView>
            </FlexView>
        );
    }

}