import React, { Component } from 'react';
import FlexView from 'react-flexview';
import { translate } from 'react-i18next';

import Request from '../../../services/Request';
import Grid, { Column } from "../../../components/Grid";
import Search from '../components/Search';

@translate()
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

    componentDidUpdate() {
        this.grid.gridApi.refreshHeader();
    }


    onGridReady = (grid) => {
        this.grid = grid;
        grid.gridApi.sizeColumnsToFit();
    }

    render() {
        const { t } = this.props;

        return (
            <FlexView grow column>
                <Search />
                <FlexView basis="10" />
                <Grid
                    containerStyle={{
                        height: 315,
                        width: '100%'
                    }}
                    suppressCellSelection
                    rowData={this.state.inventories}
                    isLoading={false}
                    onReady={this.onGridReady}
                >
                    <Column 
                        field="name"
                        minWidth="100" 
                        headerName={t('INVENTORYGRID.NAME')}
                    />
                    <Column 
                        field="code"
                        headerName={t('INVENTORYGRID.CODE')}
                    />
                </Grid>
            </FlexView>
        );
    }

}