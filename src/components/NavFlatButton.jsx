import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';

import { Navigate } from '../actions';

const mapStateToProps = state => ({

});

const mapDispathToProps = dispatch => ({
    navigateTo: (url) => {
        dispatch(Navigate.GoTo(url));
    }
});

class NavFlatButton extends Component {

    static propTypes = {
        url: PropTypes.string.isRequired
    }

    render() {

        return (
            <FlatButton
                label={this.props.label}
                secondary={this.props.secondary}
                icon={this.props.icon}
                onClick={() => { this.props.navigateTo(this.props.url); }}
            />
        );
    }

}

export default connect(mapStateToProps, mapDispathToProps)(NavFlatButton);