import React, { Component } from 'react';
import FlexView from 'react-flexview';

import Actions from '../containers/Actions';
import Notifications from '../containers/Notifications'

export default class Summary extends Component {

    render() {

        return (
            <FlexView grow>
                <FlexView
                    className="make-it-card"
                    grow
                    basis="0"
                >
                    <Actions />
                </FlexView>
                <FlexView basis="10" />
                <FlexView
                    className="make-it-card"
                    grow
                    basis="0"
                >
                    <Notifications />
                </FlexView>
            </FlexView>
        );
    }
}