import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


export class AuthenticationProvider extends Component {

    static childContextTypes = {
        color: PropTypes.string
    };

    getChildContext() {

        return { color: "purple" };
    }

    render() {
        const { children } = this.props;

        return Children.only(children);
    }

}

export function auth() {

    return (WrappedComponent) => (
        class WithAuth extends Component {
            constructor(props, context) {
                super(props, context);
                console.log("context", context.color, "props", props)
            }

            render() {

                return React.createElement(
                    WrappedComponent,
                    { ...this.props }
                );
            }
        }
    );

}