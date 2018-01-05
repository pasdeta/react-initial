import React, { Component } from 'react';
import FlexView from 'react-flexview';

import LocationPicker from './form/LocationPicker';

export default class Filters extends Component {

    render() {

        return (
            <FlexView 
                grow
                className="make-it-card"
                vAlignContent="center"
            >
                <LocationPicker />
            </FlexView>
        );
    }
}