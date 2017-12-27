import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

@connect()
export class AuthenticationProvider extends Component {
    
    static childContextTypes = {
        isLoggedIn: PropTypes.func.isRequired
    };

    getChildContext() {

        return { 
            isLoggedIn: () => {

                return true;
            }
        };
    }

    render() {
        const { children } = this.props;

        return Children.only(children);
    }

}



export function auth() {

    return (WrappedComponent) => (
        class WithAuth extends Component {

            static contextTypes = {
                isLoggedIn: PropTypes.func.isRequired
            }

            render() {

                return React.createElement(
                    WrappedComponent,
                    { ...this.props, auth: this.context }
                );
            }
        }
    );

}