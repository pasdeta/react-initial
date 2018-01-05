import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlexView from 'react-flexview';
import RaisedButton from 'material-ui/RaisedButton';

import Request from '../../../services/Request';
import LocationPicker from '../components/form/LocationPicker';
import LocationHistoryGrid from '../components/LocationHistoryGrid';

export default class LocationHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    async componentDidMount() {
        console.log(this.props);
        const { match: { params: { id } } } = this.props;
        let response = await Request.get(`inventory/${id}/history`);
        this.setState({ data: response });
    }

    render() {
        const { data } = this.state;

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
                    <LocationHistoryGrid
                        data={data}
                    />
                </FlexView>
            </FlexView>
        );
    }
}