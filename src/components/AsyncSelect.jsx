import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import MenuItem from 'material-ui/MenuItem';
import className from 'classnames';

class AsyncSelectOptionField extends Component {

    render() {
        
        return (
            <MenuItem 
                onClick={(e) => { this.props.onSelect(this.props.option, e); }}
                primaryText={this.props.option.name}
            />
        );
    }
}

export default class AsyncSelect extends Component {

    static propTypes = {
        name: PropTypes.string,
        service: PropTypes.shape({
            isLoading: PropTypes.bool.isRequired,
            data: PropTypes.array
        }).isRequired,
        floatingLabelText: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        valueSelector: PropTypes.func,
        searchable: PropTypes.bool,
        clearable: PropTypes.bool,
        error: PropTypes.oneOfType([ PropTypes.string, PropTypes.bool ]),
        disabled: PropTypes.bool
    }

    static defaultProps = {
        valueSelector: (option) => option,
        searchable: true,
        clearable: true,
        disabled: false,
        onBlur: () => {},
        onFocus: () => {},
        error: false
    }

    state = {
        selectedOption: null,
        floatingLabelFixed: false,
        focused: false
    }

    // componentWillReceiveProps(nextProps) {
    //     let value = nextProps.input.value;
    //     if(value == "") {
    //         value = null;
    //     }
    //     this.setState({ 
    //         value,
    //         floatingLabelFixed: value !== null 
    //     });
    // }

    getValue = (option) => {
        if(!option) { 
            return null;
        }
        
        return this.props.valueSelector(option)
    }

    handleChange = (selectedOption) => {
        this.props.onChange(this.getValue(selectedOption));
        this.setState({ selectedOption, floatingLabelFixed: selectedOption != null });
    }

    handleFocus = () => {
        this.props.onFocus();
        this.setState({ floatingLabelFixed: true, focused: true });
    }

    handleBlur = () => {
        this.props.onBlur();
        this.setState({ floatingLabelFixed: this.state.selectedOption != null, focused: false });
    }

    renderOption = (option) => {

        return (<MenuItem 
                primaryText={option.name}
            />)
    }

    renderValue = (option) => {

        return option.name;
    }

    render() {
        const { name, service, disabled, floatingLabelText, error } = this.props;

        return (
            <div
                className={
                    className(
                        "async-select",
                        { "disabled": disabled }
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
                    disabled={service.isLoading || disabled}
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
                        { "has-error": error }
                    )}
                >
                    {floatingLabelText}
                </label>
                <div>
                    <hr 
                        aria-hidden="true"
                        className={
                            className(
                                { "disabled": disabled }
                            )
                        }
                        />
                    <hr 
                        aria-hidden="true" 
                        className={
                            className(
                                "focused", 
                                { "selected": this.state.focused }, 
                                { "has-error": error }
                            )
                        }
                        />
                </div>
                <div 
                    className={
                        className(
                            "error",
                            { "hidden": !(error) }
                        )
                    }
                >
                    {error}
                </div>
            </div>
        );
    }
}