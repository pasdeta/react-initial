import React, { Component } from 'react';
import FlexView from 'react-flexview';
import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

export default class ColumnVisibilityFilter extends Component {

    constructor(props) {
        super(props);
        this.state = { filterActive: true }
    }

    render() {
        const { filterActive } = this.state;

        return (
            <FlexView 
                grow
                className="make-it-card"
                vAlignContent="center"
            >
                <Checkbox
                    checkedIcon={<Visibility />}
                    uncheckedIcon={<VisibilityOff />}
                    checked={filterActive}
                    label="Code"
                    style={{
                        width: 'auto'
                    }}
                />
                <Divider />
                <Checkbox
                    checkedIcon={<Visibility />}
                    uncheckedIcon={<VisibilityOff />}
                    checked={filterActive}
                    label="Code"
                    style={{
                        width: 'auto'
                    }}
                />
                <Divider />
                <Checkbox
                    checkedIcon={<Visibility />}
                    uncheckedIcon={<VisibilityOff />}
                    checked={filterActive}
                    label="Code"
                    style={{
                        width: 'auto'
                    }}
                />
                <FlexView basis="10" />
            </FlexView>
        );
    }
}

class Divider extends Component {
    render() {

        return (
            <FlexView basis="20" hAlignContent="center">|</FlexView> 
        );
    }
}