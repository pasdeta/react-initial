import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlexView from 'react-flexview';
import { translate } from 'react-i18next';
import RaisedButton from 'material-ui/RaisedButton';

import AsyncSelect from '../../../components/AsyncSelect';

@translate()
export default class ChooseDepartment extends Component {

    state = {
        selectedDepartment: null
    }

    static propTypes = {
        departments: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })).isRequired
    }

    render() {
        const { t, departments } = this.props;
        return (
            <FlexView column>
                { t('MULTIPLEDEPARTMENTCHOOSE') }
                <AsyncSelect 
                    floatingLabelText={t('INVENTORYGRID.DEPARTMENT')}
                    service={{
                        isLoading: false,
                        data: this.props.departments
                    }}
                    onChange={() => {}}
                    clearable={false}
                    searchable={false}
                    value={departments[0]}
                />
                <RaisedButton 
                    label={t('CHOOSEDEPARTMENTBUTTON')}
                    primary={true} 
                />
            </FlexView>
        );
    }
}