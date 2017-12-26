import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import MenuItem from 'material-ui/MenuItem';
import className from 'classnames';

export default class AsyncSelect extends Component {

    static propTypes = {
        service: PropTypes.shape({
            isLoading: PropTypes.bool.isRequired,
            data: PropTypes.arrayOf(PropTypes.shape({
                label: PropTypes.string.isRequired,
                value: PropTypes.any.isRequired
            }))
        }).isRequired
    }

    state = {
        selectedOption: null,
        floatingLabelFixed: false,
        value: null,
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

    handleChange = (selectedOption) => {
        this.props.input.onChange(!selectedOption ? null : selectedOption.value);
        this.setState({ selectedOption, floatingLabelFixed: selectedOption != null });
    }

    handleFocus = () => {
        this.props.input.onFocus();
        this.setState({ floatingLabelFixed: true, focused: true });
    }

    handleBlur = () => {
        this.props.input.onBlur();
        this.setState({ floatingLabelFixed: this.state.selectedOption != null, focused: false });
    }

    render() {
        
        const { service, disabled, meta: { touched, error, submitting } } = this.props;
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
                    options={service.data}
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