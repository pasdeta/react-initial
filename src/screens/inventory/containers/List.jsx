import React, { Component } from 'react';
import FlexView from 'react-flexview';

import Request from '../../../services/Request';
import InventoriesGrid from '../components/InventoriesGrid';
import Search from '../components/Search';
import Filters from '../components/Filters';
import ColumnVisibilityFilter from '../components/ColumnVisibilityFilter';
import Operations from '../components/Operations';

export default class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inventories: [],
            pageSize: 100,
            skip: 0,
            sortings: [],
            filters: [],
            pageCount: 0,
            fetching: true,
            search: "",
            filterActive: false,
            columnVisibilityFilterActive: false
        }
    }

    componentDidMount() {
        this.fetchInventories();
    }

    async fetchInventories() {
        await this.setState({ fetching: true });
        const { pageSize, skip, sortings, search } = this.state;
        let response = await Request.post('/inventory/list', {
            page_size: pageSize,
            skip,
            sortings,
            search
        });
        this.setState({ inventories: response, fetching: false });
    }

    handleSearch = (data) => {
        if(data.search != this.state.search) {
            this.setState({ search: data.search, skip: 0 }, this.fetchInventories);
        }
    }

    onSortChanged = async (sort) => {
        this.setState({ sortings: sort }, this.fetchInventories);
    }   

    onPageSizeChanged = (pageSize) => {
        this.setState({ pageSize, skip: 0 }, this.fetchInventories);
    }

    onPageChanged = (page) => {
        const { pageSize } = this.state;
        this.setState({ skip: page * pageSize }, this.fetchInventories);
    }

    handleFilterAreaToggle = () => {
        this.setState({ filterActive: !this.state.filterActive });
    }

    handleColumnVisibilityFilterAreaToggle = () => {
        this.setState({ columnVisibilityFilterActive: !this.state.columnVisibilityFilterActive });
    }

    render() {
        const { t } = this.props;
        const { pageSize, fetching, filterActive, columnVisibilityFilterActive } = this.state;

        return (
            <FlexView grow column>
                <FlexView basis="90">
                    <Search
                        onSearch={this.handleSearch}
                        onFilterAreaToggle={this.handleFilterAreaToggle}
                        filterActive={filterActive}
                        onColumnVisibilityFilterAreaToggle={this.handleColumnVisibilityFilterAreaToggle}
                        columnVisibilityFilterActive={columnVisibilityFilterActive}
                    />
                </FlexView>
                { 
                    filterActive && <FlexView basis="10" /> 
                }
                {
                    filterActive && 
                    <FlexView basis="90">
                        <Filters
                            onSearch={this.handleSearch}
                        />
                    </FlexView>
                }
                { 
                    columnVisibilityFilterActive && <FlexView basis="10" /> 
                }
                {
                    columnVisibilityFilterActive && 
                    <FlexView basis="90">
                        <ColumnVisibilityFilter />
                    </FlexView>
                }
                <FlexView basis="10" />
                <FlexView grow>
                    <InventoriesGrid 
                        data={this.state.inventories}
                        onSortChanged={this.onSortChanged}
                        pageSize={pageSize}
                        onPageSizeChanged={this.onPageSizeChanged}
                        onPageChanged={this.onPageChanged}
                        showLoading={fetching}
                    />
                </FlexView>
                <FlexView basis="10" />
                <FlexView basis="80">
                    <Operations />
                </FlexView>
            </FlexView>
        );
    }

}