import React, { Component } from 'react';
import Select from 'react-select';

export default class AsyncSelect extends Component {
    state = {
        selectedOption: null,
        floatingLabelFixed: false
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption, floatingLabelFixed: selectedOption != null });
    }

    handleFocus = () => {
        this.setState({ floatingLabelFixed: true });
    }

    handleBlur = () => {
        this.setState({ floatingLabelFixed: this.state.selectedOption != null });
    }

    render() {

        return (
            <div
                style={{
                    position: 'relative',
                    marginTop: 40,
                    width: '100%'
                }}
            >
                <Select
                    name="form-field-name"
                    value={this.state.selectedOption ? this.state.selectedOption.value : null}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
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
                <div
                    className={this.state.floatingLabelFixed ? "floating-label selected" : "floating-label"}
                >
                    {this.props.floatingLabelText}
                </div>
            </div>
        );
    }
}