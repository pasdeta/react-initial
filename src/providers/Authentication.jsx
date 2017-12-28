import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 

export function auth() {

    return (WrappedComponent) => (
        connect((state) => ({ auth: state.auth }))(
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