import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default (props) => {
    const { 
        meta: { dirty, touched, error, warning, submitting }, 
        input, floatingLabelText, disabled, type,
        maxLength
    } = props;
    
    return (
        <TextField
            {...input}
            type={type || "text"}
            floatingLabelText={floatingLabelText}
            errorText={(touched && error) ? error : null}
            disabled={disabled || submitting}
            maxLength={maxLength}
        />
    );  
};