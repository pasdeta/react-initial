import React, { Component } from 'react';
import Select from 'react-select';
import className from 'classnames';

export default class AsyncSelect extends Component {
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
        this.props.input.onChange(selectedOption);
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

        return (
            <div
                className="async-select"
            >
                <Select
                    name="form-field-name"
                    value={this.state.selectedOption ? this.state.selectedOption.value : null}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    isLoading
                    placeholder={null}
                    options={[
                        { value: 'one', label: 'One' },
                        { value: 'two', label: 'Two' },
                        { value: 'three', label: 'Two' },
                        { value: 'a', label: 'Two' },
                        { value: 'b', label: 'Two' },
                        { value: 'c', label: 'Two' },
                    ]}
                />
                <label
                    className={className(
                        "floating-label", 
                        { "selected": this.state.floatingLabelFixed }, 
                        { "has-focus": this.state.focused}
                    )}
                >
                    {this.props.floatingLabelText}
                </label>
                <div>
                    <hr 
                        aria-hidden="true" 
                        className={className({ "selected": this.state.focused})}
                        />
                </div>
            </div>
        );
    }
}