import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


export default (props) => {
    const { floatingLabelText, touched, error, input } = props;

    return (
        <SelectField
            floatingLabelText={floatingLabelText}
            {...input}
            onChange={(event, key, payload) => { input.onChange(payload); }}
            errorText={(touched && error) ? error : null}
        >
            {props.children}
        </SelectField>
    );
};


export { MenuItem as SelectOption };