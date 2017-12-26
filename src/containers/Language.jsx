import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import 'flag-icon-css/css/flag-icon.css';


const mapStateToProps = state => ({
    ...state.app.i18n
});

class Language extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 1};
    }

    handleChange = (event, index, value) => this.setState({value});

    selectionRenderer = (value, menuItem) => {

        return menuItem.props.children;
    }

    render() {
        console.log(this.props);
        return (
            <DropDownMenu
                style={{
                    width: 100 
                }}
                selectionRenderer={this.selectionRenderer}
                onChange={this.handleChange}
                value={this.state.value}
            >
                <MenuItem value={1}>
                    <span className="flag-icon flag-icon-us"></span>
                </MenuItem>
                <MenuItem value={2}>
                    <span className="flag-icon flag-icon-tr"></span>
                </MenuItem>
            </DropDownMenu>
        );
    }
}

export default connect(mapStateToProps)(Language);