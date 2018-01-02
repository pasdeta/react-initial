import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 

import { Authenticate } from '../actions';

export function auth() {

    return (WrappedComponent) => (
        connect(
            state => ({ 
                auth: state.auth 
            }),
            dispatch => ({
                logout: () => {
                    dispatch(Authenticate.Logout());
                }
            })
        )(
            class WithAuth extends Component {

                render() {

                    return React.createElement(
                        WrappedComponent,
                        { ...this.props }
                    );
                }
            }
        )
    );

}