import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { default as DateSelect } from '../DatePicker';

export default class DatePicker extends Component {

    static propTypes = {
        showYearDropdown: PropTypes.bool,
        showMonthDropdown: PropTypes.bool,
        disabled: PropTypes.bool
    }

    static defaultProps = {
        showYearDropdown: false,
        showMonthDropdown: false,
        disabled: false
    }

    render() {
        const { 
            floatingLabelText, 
            showYearDropdown, showMonthDropdown,
            input: { value, onChange, onBlur, onFocus },
            meta: { submitting },
            disabled
        } = this.props;

        return (
            <DateSelect 
                value={value}
                floatingLabelText={floatingLabelText}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                showYearDropdown={showYearDropdown}
                showMonthDropdown={showMonthDropdown}
                disabled={disabled || submitting}
            />
        );
    }

}