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
            input: { name, onChange, onFocus, onBlur }, 
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
            />
        );
    }


    render2() {
        const { name, service, disabled, meta: { touched, error, submitting } } = this.props;
        const isDisabled = disabled || submitting;

        return (
            <div
                className={
                    className(
                        "async-select",
                        { "disabled": isDisabled }
                    )
                }
            >
                <Select
                    name="form-field-name"
                    value={this.state.selectedOption ? this.state.selectedOption.value : null}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    isLoading={service.isLoading}
                    placeholder={null}
                    disabled={service.isLoading || isDisabled}
                    optionComponent={AsyncSelectOptionField}
                    valueRenderer={this.renderValue}
                    options={service.data}
                    value={this.state.selectedOption}
                    searchable={this.props.searchable}
                    clearable={this.props.clearable}
                />
                <label
                    className={className(
                        "floating-label", 
                        { "selected": this.state.floatingLabelFixed }, 
                        { "has-focus": this.state.focused },
                        { "has-error": (touched && error) }
                    )}
                >
                    {this.props.floatingLabelText}
                </label>
                <div>
                    <hr 
                        aria-hidden="true"
                        className={
                            className(
                                { "disabled": isDisabled }
                            )
                        }
                        />
                    <hr 
                        aria-hidden="true" 
                        className={
                            className(
                                "focused", 
                                { "selected": this.state.focused }, 
                                { "has-error": (touched && error) }
                            )
                        }
                        />
                </div>
                <div 
                    className={
                        className(
                            "error",
                            { "hidden": !(touched && error) }
                        )
                    }
                >
                    {error}
                </div>
            </div>
        );
    }
}