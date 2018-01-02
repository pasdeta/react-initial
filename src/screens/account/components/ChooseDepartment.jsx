import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlexView from 'react-flexview';
import { translate } from 'react-i18next';
import RaisedButton from 'material-ui/RaisedButton';

import AsyncSelect from '../../../components/AsyncSelect';

@translate()
export default class ChooseDepartment extends Component {

    static propTypes = {
        departments: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })).isRequired,
        onChoosed: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedDepartment: null,
            valid: false
        };
    }

    onDepartmentSelected = (department) => {
        this.setState({ selectedDepartment: department, valid: department != null });
    }

    render() {
        const { t, departments, onChoosed } = this.props;
        const { selectedDepartment, valid } = this.state;
        return (
            <FlexView column>
                { t('MULTIPLEDEPARTMENTCHOOSE') }
                <AsyncSelect 
                    floatingLabelText={t('INVENTORYGRID.DEPARTMENT')}
                    service={{
                        isLoading: false,
                        data: this.props.departments
                    }}
                    onChange={this.onDepartmentSelected}
                    clearable={false}
                    searchable={false}
                    value={selectedDepartment}
                />
                <RaisedButton 
                    label={t('CHOOSEDEPARTMENTBUTTON')}
                    primary={true} 
                    disabled={!valid}
                    onClick={() => onChoosed(selectedDepartment)}
                />
            </FlexView>
        );
    }
}