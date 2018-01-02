import React, { Component } from 'react';
import FlexView from 'react-flexview';
import FontIcon from 'material-ui/FontIcon';

export default class ActionButton extends Component {


    render() {

        return (
            <FlexView 
                className="make-it-card action-button"
                hAlignContent="center" 
                vAlignContent="center"
                column
            >
                <FontIcon
                    className="fa fa-search"
                />
                <FlexView basis="15" />
                <span className="button-title">New Inventory</span>
            </FlexView>
        );
    }
}