import React, { Component } from 'react';
import FlexView from 'react-flexview';


import ActionButton from '../../../components/ActionButton';

export default class Actions extends Component {

    render() {

        return (
            <FlexView wrap hAlignContent='center' vAlignContent='top'>
                <ActionButton />
                <FlexView  basis="10" />
                <ActionButton />
                <FlexView  basis="10" />
                <ActionButton />
                <FlexView  basis="10" />
                <ActionButton />
                <FlexView  basis="10" />
                <ActionButton />
                <FlexView  basis="10" />
                <ActionButton />
                <FlexView  basis="10" />
                <ActionButton />
                <FlexView  basis="10" />
                <ActionButton />
                <FlexView  basis="10" />
                <ActionButton />
                <FlexView  basis="10" />
                <ActionButton />
            </FlexView>
        );
    }
}