import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import FlexView from 'react-flexview';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export { AgGridColumn as Column };

export default class Grid extends Component {
    static propTypes = {
        onSortChanged: PropTypes.func,
        pagination: PropTypes.bool,
        suppressCellSelection: PropTypes.bool,
        enableColResize: PropTypes.bool,
        rowSelection: PropTypes.string,
        suppressMovableColumns: PropTypes.bool,
        suppressRowClickSelection: PropTypes.bool,
        data: PropTypes.array,
        autoSizePadding: PropTypes.number,
        enableSorting: PropTypes.bool,
        pageSize: PropTypes.number,
        onPageSizeChanged: PropTypes.func,
        pageCount: PropTypes.number,
        currentPage: PropTypes.number,
        onPageChanged: PropTypes.func,
        showLoading: PropTypes.bool,
        sizing: PropTypes.oneOf(['auto', 'fit'])
    }

    static defaultProps = {
        onSortChanged: () => {},
        pagination: false,
        suppressCellSelection: false,
        autoSizePadding: 4,
        enableSorting: false,
        pageSize: 50,
        pageCount: 0,
        currentPage: 1,
        onPageSizeChanged: (pageSize) => {},
        onPageChanged: (page) => {},
        showLoading: false,
        sizing: 'auto'
    }

    componentWillReceiveProps(nextProps) {
        if(this.gridApi) {
            if(!this.props.showLoading && nextProps.showLoading) {
                this.gridApi.showLoadingOverlay();
            }
            else if(this.props.showLoading && !nextProps.showLoading) {
               this.gridApi.hideOverlay();
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
                    this._gridResize();
                }
            }
        );
        this._gridResize();
    }

    _gridResize() {
        const { sizing } = this.props;

        if(sizing == 'auto') {
            this.autoSizeAll();
        }
        else if(sizing == 'fit') {
            this.gridApi.sizeColumnsToFit();
        }
    }

    onSelectionChanged = () => {
        var selectedRows = this.gridApi.getSelectedRows();
        console.log(selectedRows)
    }

    handleSortChanged = () => {
        const { onSortChanged } = this.props;
        const sort = this.gridApi.getSortModel();
        onSortChanged(sort);
    }

    render() {
        const { 
            pagination, rowSelection,
            suppressCellSelection, data, enableColResize,
            suppressMovableColumns, suppressRowClickSelection,
            autoSizePadding, enableSorting, pageSize, 
            onPageSizeChanged, pageCount, currentPage, onPageChanged
        } = this.props;

        return (
            <FlexView column grow className="make-it-card no-padding">
                <FlexView grow className="ag-theme-material">
                    <div style={{ width: '100%' }}>
                        <AgGridReact 
                            rowData={data}
                            suppressCellSelection={suppressCellSelection}
                            suppressMovableColumns={suppressMovableColumns}
                            suppressRowClickSelection={suppressRowClickSelection}
                            enableColResize={enableColResize}
                            onGridReady={this.onGridReady}
                            pagination={false}
                            onSelectionChanged={this.onSelectionChanged}
                            onSortChanged={this.handleSortChanged}
                            rowSelection={rowSelection}
                            autoSizePadding={autoSizePadding}
                            enableSorting={enableSorting}
                            loadingOverlayComponent="customLoadingOverlay"
                            frameworkComponents={{
                                customLoadingOverlay: LoadingOverlay
                            }}
                        >
                            { 
                                this.props.children.map(c => c)
                            }
                        </AgGridReact>
                    </div>
                </FlexView>
                {
                    pagination && 
                    <FlexView 
                        basis="45" 
                        style={{ borderTop: '1px solid #e0e0e0'}}
                    >
                        <FlexView basis="10" />
                        <FlexView
                            hAlignContent="left" 
                        >
                            <SelectField 
                                value={pageSize}
                                onChange={(event, index, value) => { onPageSizeChanged(value); }}
                                style={{
                                    width: '70'
                                }}
                            >
                                <MenuItem value={25} primaryText="25" />
                                <MenuItem value={50} primaryText="50" />
                                <MenuItem value={100} primaryText="100" />
                                <MenuItem value={500} primaryText="500" />
                                <MenuItem value={1000} primaryText="1000" />
                            </SelectField>
                        </FlexView>
                        <FlexView 
                            vAlignContent="center"
                            hAlignContent="right" 
                            grow
                        >  
                            <GridPagination 
                                pageCount={pageCount}
                                currentPage={currentPage}
                                onPageChanged={onPageChanged}
                            />
                        </FlexView>
                        <FlexView basis="10" />
                    </FlexView>
                }
            </FlexView>
        );
    }
}


class GridPagination extends Component {
    static propTypes = {
        pageCount: PropTypes.number,
        currentPage: PropTypes.number,
        onPageChanged: PropTypes.func
    }

    static defaultProps = {
        pageCount: 0,
        currentPage: 1,
        onPageChanged: (page) => {}
    }

    constructor(props) {
        super(props);
        this._paginationButtonStyle= {
            minWidth: 'auto',
            margin: 3
        };
    }

    handleBack = () => {
        const { currentPage, onPageChanged } = this.props;
        if(currentPage > 1) {
            onPageChanged(currentPage - 2);
        } 
    }

    handleForward = () => {
        const { currentPage, onPageChanged, pageCount } = this.props;
        if(currentPage < pageCount) {
            onPageChanged(currentPage);
        } 
    }

    handleGoFirst = () => {
        const { currentPage, onPageChanged } = this.props;
        if(currentPage > 1) {
            onPageChanged(0);
        } 
    }

    handleGoLast = () => {
        const { currentPage, pageCount, onPageChanged } = this.props;
        if(currentPage !== pageCount) {
            onPageChanged(pageCount - 1);
        } 
    }

    renderPageNumbers() {
        const { pageCount, currentPage, onPageChanged } = this.props;
        const limit = 10;
        let children = [];
        let startIndex = 0;
        let endIndex = 0;
        let prefix = [];
        let suffix = [];
        if(pageCount <= limit) {
            endIndex = pageCount;
        }
        else if(currentPage <= limit) {
            endIndex = limit;
            suffix.push((
                <RaisedButton
                    key={`PageSuffix`}
                    label="..." 
                    secondary={true}
                    style={this._paginationButtonStyle}
                    onClick={() => { onPageChanged(limit); }}
                />
            ));
        }
        else if(currentPage > limit) {
            let sectionIndex = Math.ceil(currentPage / limit) - 1;
            startIndex = (limit * sectionIndex);
            endIndex = startIndex + limit;
            endIndex = endIndex > pageCount ? pageCount : endIndex;


            prefix.push((
                <RaisedButton
                    key={`PagePrefix`}
                    label="..." 
                    secondary={true}
                    style={this._paginationButtonStyle}
                    onClick={() => { onPageChanged(limit * (sectionIndex - 1)); }}
                />
            ));
            if(endIndex < pageCount) {
                suffix.push((
                    <RaisedButton
                        key={`PageSuffix`}
                        label="..." 
                        secondary={true}
                        style={this._paginationButtonStyle}
                        onClick={() => { onPageChanged(limit * (sectionIndex + 1)); }}
                    />
                ));
            }
        }


        for(let i = startIndex; i < endIndex; ++i) {
            children.push((
                <RaisedButton
                    key={`Page${i+1}`}
                    label={`${i+1}`} 
                    secondary={true}
                    style={this._paginationButtonStyle} 
                    disabled={(i + 1) == currentPage}
                    onClick={() => { onPageChanged(i); }}
                />
            ));
        }


        return [...prefix, ...children, ...suffix];
    }

    render() {
        const { pageCount, currentPage, onPageChanged } = this.props;
        
        let startCount = 0;
        let endCount = 10

        if(isNaN(currentPage)) {

            return null;
        }

        return (
            <FlexView>
                <RaisedButton
                    label="<<"
                    secondary={true}
                    style={this._paginationButtonStyle} 
                    disabled={currentPage == 1}
                    onClick={() => { this.handleGoFirst(); } }
                />
                <RaisedButton
                    label="<"
                    secondary={true}
                    style={this._paginationButtonStyle} 
                    disabled={currentPage == 1}
                    onClick={() => { this.handleBack(); } }
                />
                {this.renderPageNumbers()}
                <RaisedButton
                    label=">"
                    secondary={true}
                    style={this._paginationButtonStyle} 
                    disabled={currentPage == pageCount}
                    onClick={() => { this.handleForward(); } }
                />
                <RaisedButton
                    label=">>"
                    secondary={true}
                    style={this._paginationButtonStyle} 
                    disabled={currentPage == pageCount}
                    onClick={() => { this.handleGoLast(); } }
                />
            </FlexView>
        );
    }
}

class LoadingOverlay extends Component {
    render() {
        return (
            <FlexView
                style={{backgroundColor: 'lightsteelblue'}}
                vAlignContent="center"
                grow
            >
                <i className="fa fa-hourglass-1"> One moment please...</i>
            </FlexView>
        );
    }
}
