import React, { Component } from 'react';
import { AgGridReact, AgGridColumn } from "ag-grid-react";

export { AgGridColumn as Column };

export default class Grid extends Component {

    componentWillReceiveProps(nextProps) {
        if(this.gridApi) {
            if(!this.props.isLoading && nextProps.isLoading) {
                this.gridApi.showLoadingOverlay();
            }
            else if(this.props.isLoading && !nextProps.isLoading) {
                this.gridApi.hideLoadingOverlay();
            }
            if(this.shouldRefreshHeaderForNextProps(nextProps)) {
                this.gridApi.refreshHeader();
            }
        }
    }

    getColumnHeaderName(field) {
        let column = this.gridColumnApi.getColumn(field);
        if(!column) {

            return column.colDef.headerName;
        }

        return null;
    }
    shouldRefreshHeaderForNextProps(nextProps) {
        let shouldRefresh = false;
        let columns = nextProps.children;
        for(let { props: { field: fieldId, colId, headerName } } of columns) {
            let id = fieldId || colId;
            if(this.getColumnHeaderName(id) !== headerName) {
                this.changeHeaderForField(id, headerName);
                shouldRefresh = true;
            } 
        }

        return shouldRefresh;
    }
    changeHeaderForField(field, newHeader) {
        let column = this.gridColumnApi.getColumn(field);
        if(column != null) {
            column.colDef.headerName = newHeader;
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

        this.gridApi.addGlobalListener(
            (event) => {
                if(event === 'gridSizeChanged' || event === 'rowDataChanged') {
                    this.gridApi.checkGridSize();
                    this.autoSizeAll();
                }
            }
        );
        //this.autoSizeAll();
    }

    render() {

        return (
            <div style={{
                width: '100%'
            }} className="ag-theme-material make-it-card no-padding">
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