import React, { Component } from 'react';
import { AgGridReact, AgGridColumn } from "ag-grid-react";

export default class Grid extends Component {

    componentWillReceiveProps(nextProps) {
        if(this.gridApi) {
            if(!this.props.isLoading && nextProps.isLoading) {
                this.gridApi.showLoadingOverlay();
            }
            else if(this.props.isLoading && !nextProps.isLoading) {
                this.gridApi.hideLoadingOverlay();
            }
        }   
    }

    autoSizeAll = () => {
        let allColumnIds = [];
        this.gridColumnApi.getAllColumns().forEach(function(column) {
            allColumnIds.push(column.colId);
        });
        this.gridColumnApi.autoSizeColumns(allColumnIds);
    }

    onGridReady = (params) => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        if(this.props.isLoading) {
            this.gridApi.showLoadingOverlay();
        }

        if(this.props.onReady) {
            this.props.onReady(this); 
        }
    }

    render() {

        return (
            <div style={this.props.containerStyle} className="ag-theme-material">
                <AgGridReact 
                    {...this.props}
                    onGridReady={this.onGridReady}
                >
                    { this.props.children }
                </AgGridReact>
            </div>
        );
    }
}

export {
    AgGridColumn as Column
}