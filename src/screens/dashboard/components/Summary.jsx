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
                >
                    <Actions />
                </FlexView>
                <FlexView basis="10" />
                <FlexView
                    className="make-it-card"
                    grow
                >
                    <Notifications />
                </FlexView>
            </FlexView>
        );
    }
}