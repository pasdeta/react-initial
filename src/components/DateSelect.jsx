import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

export default class DateSelect extends Component {

    render() {

        return (
            <div
                style={{
                    position: 'relative'
                }}
            >
                <TextField
                    floatingLabelText={this.props.floatingLabelText}
                />
                 <IconButton 
                    iconClassName="fa fa-calendar"
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 220
                    }} 
                />
            </div>
        );
    }

}