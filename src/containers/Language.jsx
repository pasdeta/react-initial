import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import 'flag-icon-css/css/flag-icon.css';

import { i18n } from '../actions';


const mapStateToProps = state => ({
    ...state.app.i18n
});

const mapDispatchToProps = dispatch => ({
    handleChange: (language) => {
        dispatch(i18n.ChangeLanguage(language));
    } 
});

class Language extends Component {

    handleChange = (event, index, value) => this.props.handleChange(value);

    selectionRenderer = (value, menuItem) => {

        return menuItem.props.children;
    }

    render() {
        const { current } = this.props;

        return (
            <DropDownMenu
                style={{
                    width: 100 
                }}
                selectionRenderer={this.selectionRenderer}
                onChange={this.handleChange}
                value={current}
            >
                <MenuItem value={'en'}>
                    <span className="flag-icon flag-icon-us"></span>
                </MenuItem>
                <MenuItem value={'tr'}>
                    <span className="flag-icon flag-icon-tr"></span>
                </MenuItem>
            </DropDownMenu>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Language);