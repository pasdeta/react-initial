import React, { Component } from 'react';
import FlexView from 'react-flexview';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

import Language from '../../../containers/Language';
import LoginForm from '../components/LoginForm';

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
                    className="make-it-card no-padding login-container"
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
                        <FlexView grow />
                        <Language />
                    </FlexView>
                    <Divider />
                    <LoginForm />
                </FlexView>
            </FlexView>
        );
    }
} 