import React, { Component } from 'react';
import FlexView from 'react-flexview';
import { Field, reduxForm, Fields, SubmissionError } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { translate } from 'react-i18next';

import i18n from '../../../services/I18n';
import { Authenticate } from '../../../actions';
import { InputField, SelectField, SelectOption, AsyncSelect } from '../../../components/redux-form';

@translate()
class LoginForm extends Component {

    handleSubmit = (data) => {
        this.props.dispatch(Authenticate.Login(data));
    }

    render() {
        const { valid, submitting, handleSubmit, t } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
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
                        service={{
                            isLoading: false,
                            data: [{ label: "Selam", value: 1}]
                        }}
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
        errors.password = i18n.t('VALIDATIONS.REQUIRED');;
    }

    if(!values.organization_id || !Number.isInteger(values.organization_id)) {
        errors.organization_id = i18n.t('VALIDATIONS.REQUIRED');;
    }

    return errors;
};

export default reduxForm({
    form: 'loginForm',
    validate
})(LoginForm);