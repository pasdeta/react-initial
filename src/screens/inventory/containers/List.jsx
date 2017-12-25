import React, { Component } from 'react';
import FlexView from 'react-flexview';

import Grid, { Column } from "../../../components/Grid";

export default class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rowData: [
                {
                    make: "Toyota", 
                    model: "Celica", 
                    price: 35000
                },
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Porsche", model: "Boxter", price: 72000}
            ]
        }
    }

    onGridReady = (grid) => {
        grid.gridApi.sizeColumnsToFit();
    }

    render() {

        return (
            <FlexView grow>
                <Grid
                    containerStyle={{
                        height: 115,
                        width: '100%'
                    }}
                    suppressCellSelection
                    rowData={this.state.rowData}
                    isLoading={false}
                    onReady={this.onGridReady}
                >
                    <Column minWidth="100" field="make"  />
                    <Column field="model" />
                    <Column field="price" />
                    <Column field="make"  />
                    <Column field="model" />
                    <Column field="price" />
                </Grid>
            </FlexView>
        );
    }

}