import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import MenuItem from 'material-ui/MenuItem';
import className from 'classnames';

import AsyncSelectField from '../AsyncSelect';

export default class AsyncSelect extends Component {

    static propTypes = {
        input: PropTypes.object.isRequired,
        floatingLabelText: PropTypes.string.isRequired,
        service: PropTypes.shape({
            isLoading: PropTypes.bool.isRequired,
            data: PropTypes.array
        }).isRequired,
        labelKey: PropTypes.string,
        valueSelector: PropTypes.func,
        searchable: PropTypes.bool,
        clearable: PropTypes.bool,
        disabled: PropTypes.bool
    }

    static defaultProps = {
        labelKey: "label",
        valueSelector: (option) => option,
        searchable: true,
        clearable: true,
        disabled: false
    }

    state = {
        selectedOption: null,
        floatingLabelFixed: false,
        focused: false
    }

    render() {
        const { 
            input: { name, onChange, onFocus, onBlur, value }, 
            meta: { error, touched, submitting },
            service, floatingLabelText, valueSelector, disabled,
            searchable
        } = this.props;

        return (
            <AsyncSelectField 
                name={name}
                service={service}
                floatingLabelText={floatingLabelText}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                error={touched && error}
                valueSelector={valueSelector}
                disabled={disabled || submitting}
                searchable={searchable}
                value={value}
            />
        );
    }
}