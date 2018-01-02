import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlexView from 'react-flexview';
import RaisedButton from 'material-ui/RaisedButton';

import LocationPicker from '../components/form/LocationPicker';
import LocationHistoryGrid from '../components/LocationHistoryGrid';

export default class LocationHistory extends Component {


    render() {

        return (
            <FlexView grow column>
                <FlexView className="make-it-card">
                    
                </FlexView>
                <FlexView basis="10" />
                <FlexView className="make-it-card horizontal-padding" vAlignContent="center">
                    <LocationPicker />
                    <FlexView basis="20" />
                    <RaisedButton label="Yer Degistir" secondary={true} />
                </FlexView>
                <FlexView basis="10" />
                <FlexView className="make-it-card no-padding" grow>
                    <LocationHistoryGrid />
                </FlexView>
            </FlexView>
        );
    }
}