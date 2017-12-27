import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlexView from 'react-flexview';
import { Field, reduxForm, Fields, SubmissionError } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { translate } from 'react-i18next';

import i18n from '../../../services/I18n';
import { Authenticate, Data } from '../../../actions';

import { InputField, SelectField, SelectOption, AsyncSelect } from '../../../components/redux-form';


const mapStateToProps = state => ({
    organizations: state.data.organizations
});

const mapDispatchToProps = dispatch => ({
    fetchOrganizations: () => {
        dispatch(Data.Organization.Fetch());
    }
});


@translate()
class LoginForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.fetchOrganizations();
    }

    render() {
        const { valid, submitting, handleSubmit, t, organizations, onSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <FlexView column>
                    <Field 
                        component={InputField}
                        floatingLabelText={t('USERNAME')}
                        name="username"
                        maxLength="20"
                    />
                    <Field 
                        component={InputField}
                        floatingLabelText={t('PASSWORD')}
                        type="password"
                        name="password"
                        maxLength="20"
                    />
                    <Field 
                        component={AsyncSelect}
                        floatingLabelText={t('ORGANIZATION')}
                        name="organization_id"
                        service={organizations}
                        labelExtractor={(data) => data.name}
                        valueSelector={(item) => item.id}
                        clearable={false}
                        searchable={false}
                    />
                    <RaisedButton 
                        label={t('LOGINBUTTON')} 
                        primary={true}
                        disabled={!valid || submitting}
                        type="submit"
                    />
                </FlexView>
            </form>
        );
    }
}


const validate = values => {
    const errors = {};

    if (!values.username) {
        errors.username = i18n.t('VALIDATIONS.REQUIRED');
    } 
    else if (values.username.length < 5) {
        errors.username = 'Must be 5 characters or less'
    }

    if(!values.password) {
        errors.password = i18n.t('VALIDATIONS.REQUIRED');
    }

    if(!values.organization_id || !Number.isInteger(values.organization_id)) {
        errors.organization_id = i18n.t('VALIDATIONS.REQUIRED');
    }

    return errors;
};

let storeConnect = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default reduxForm({
    form: 'loginForm',
    validate
})(storeConnect);