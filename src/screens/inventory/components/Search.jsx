import React, { Component } from 'react';
import FlexView from 'react-flexview';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { translate } from 'react-i18next';

@translate()
export default class Search extends Component {


    render() {
        const { t } = this.props;

        return (
            <FlexView 
                grow
                className="make-it-card"
                vAlignContent="center"
            >
                <FlexView basis="40%">
                    <TextField
                        floatingLabelText={t('SEARCH')}
                        style={{
                            width: "100%"
                        }}
                    />
                </FlexView>
                <FlexView basis="10" />
                <RaisedButton 
                    label="Secondary" 
                    secondary={true}
                    style={{
                        marginTop: 20
                    }}
                />
                <FlexView basis="10" />
                <RaisedButton 
                    label="Secondary" 
                    secondary={true}  
                    style={{
                        marginTop: 20
                    }}
                />
            </FlexView>
        );
    }
}