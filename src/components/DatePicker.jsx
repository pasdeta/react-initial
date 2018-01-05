import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import InputMask from 'react-input-mask';
import { default as DateSelect } from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

export default class DatePicker extends Component {

    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        format: PropTypes.string,
        onBlur: PropTypes.func,
        onFocus: PropTypes.func,
        showYearDropdown: PropTypes.bool,
        showMonthDropdown: PropTypes.bool,
        disabled: PropTypes.bool
    }

    static defaultProps = {
        format: "DD/MM/YYYY",
        value: null,
        onBlur: () => {},
        onFocus: () => {},
        showYearDropdown: false,
        showMonthDropdown: false,
        disabled: false
    }

    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.value != nextProps.value) {
            const date = moment(nextProps.value, nextProps.format);
            if(date.isValid()) {
                this.setState({ selected: date });
            }
        }
    }
    
    handleChange = (date) => {
        const { onChange, format } = this.props;
        onChange(date.format(format));
    }

    render() {
        const { floatingLabelText, format, value, onBlur, onFocus, showYearDropdown, showMonthDropdown } = this.props;
        const { selected } = this.state;

        return (
            <DateSelect
                selected={selected}
                onChange={this.handleChange}
                dateFormat={format}
                customInput={
                    <TextField
                        floatingLabelText={floatingLabelText}
                        hintText={format}
                    >
                        <InputMask value={value} mask="99/99/9999" maskChar="_" />
                    </TextField> 
                }
                onBlur={onBlur}
                onFocus={onFocus}
                showYearDropdown={showYearDropdown}
                showMonthDropdown={showMonthDropdown}
            />
        );
    }

}