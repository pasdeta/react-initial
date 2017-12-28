import React, { Component } from 'react';
import FlexView from 'react-flexview';
import { translate } from 'react-i18next';

@translate()
export default class Operations extends Component {



    render() {

        return (
            <FlexView grow>
                <FlexView basis="80" className="make-it-card">

                </FlexView>
                <FlexView basis="10" />
                <FlexView basis="80" className="make-it-card">
                
                </FlexView>
                <FlexView basis="10" />
                <FlexView basis="80" className="make-it-card">
                
                </FlexView>
                <FlexView basis="10" />
                <FlexView basis="80" className="make-it-card">
                
                </FlexView>
            </FlexView>
        );
    }
}