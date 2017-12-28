import React, { Component } from 'react';
import FlexView from 'react-flexview';

export default class InventoryDetail extends Component {


    render() {

        return (
            <FlexView column grow>
                <FlexView grow>
                    <FlexView grow className="make-it-card">
                    </FlexView>
                    <FlexView basis="10" />
                    <FlexView grow className="make-it-card">
                    </FlexView>
                    <FlexView basis="10" />
                    <FlexView grow className="make-it-card">
                    </FlexView>
                </FlexView>
                <FlexView basis="10" />
                <FlexView grow>
                    <FlexView grow className="make-it-card">
                    </FlexView>
                    <FlexView basis="10" />
                    <FlexView grow className="make-it-card">
                    </FlexView>
                    <FlexView basis="10" />
                    <FlexView grow className="make-it-card">
                    </FlexView>
                </FlexView>
            </FlexView>
        );
    }
}