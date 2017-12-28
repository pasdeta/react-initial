import React, { Component } from 'react';
import { AgGridReact, AgGridColumn } from "ag-grid-react";


export class Column extends Component {

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.headerName);
    }

    render() {
        console.log("render column")
        return (
            <AgGridColumn {...this.props} />
        );
    }

}

export default class Grid extends Component {

    componentWillReceiveProps(nextProps) {
        if(this.gridApi) {
            if(!this.props.isLoading && nextProps.isLoading) {
                this.gridApi.showLoadingOverlay();
            }
            else if(this.props.isLoading && !nextProps.isLoading) {
                this.gridApi.hideLoadingOverlay();
            }


            if(this.props.children[0].props.headerName != nextProps.children[0].props.headerName) {
                let field = nextProps.children[0].props.field;
                let column = this.gridColumnApi.getColumn(field);
                console.log("column", column)
                column.colDef.headerName=nextProps.children[0].props.headerName;
                this.gridApi.refreshHeader();
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