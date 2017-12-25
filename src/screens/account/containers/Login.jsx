import React, { Component } from 'react';
import FlexView from 'react-flexview';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import Language from '../../../containers/Language';

export default class Login extends Component {


    render() {

        return (
            <FlexView
                className="full-height"
                vAlignContent="center"
                hAlignContent="center"
                grow
            >
                <FlexView 
                    basis="90%"
                    className="make-it-card no-padding"
                    column
                    style={{
                        maxWidth: 300
                    }}
                    hAlignContent="center"
                >
                    <FlexView 
                        hAlignContent="left" 
                        vAlignContent="center"
                        grow
                    >
                        Login
                        <FlexView basis grow />
                        <Language />
                    </FlexView>

                    <Divider />
                    
                    <TextField
                        floatingLabelText="Username"
                    />
                    <TextField
                        floatingLabelText="Password"
                        type="password"
                    />
                    <SelectField
                        floatingLabelText="Ready?"
                    >
                        <MenuItem value={false} primaryText="No" />
                        <MenuItem value={true} primaryText="Yes" />
                    </SelectField>
                    <FlexView basis="30" />
                    <RaisedButton 
                        label="Login" 
                        primary={true}
                    />

                </FlexView>
            </FlexView>
        );
    }
} 