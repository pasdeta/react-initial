import React, { Component } from 'react';
import FlexView from 'react-flexview';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { translate } from 'react-i18next';
import { Field, reduxForm, Fields } from 'redux-form';

import Checkbox from 'material-ui/Checkbox';
import FilterList from 'material-ui/svg-icons/content/filter-list';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';


import { InputField } from '../../../components/redux-form';

@translate()
class Search extends Component {

    render() {
        const { t, handleSubmit, onSearch, submitting, 
            onFilterAreaToggle, filterActive,
            columnVisibilityFilterActive,
            onColumnVisibilityFilterAreaToggle
        } = this.props;

        console.log("filterActive", filterActive)
        return (
            <FlexView 
                grow
                className="make-it-card"
                vAlignContent="center"
            >
                <FlexView basis="40%">
                    <Field
                        component={InputField}
                        name="search"
                        floatingLabelText={t('INVENTORYSEARCH')}
                        style={{
                            width: "100%"
                        }}
                        onKeyPress={(event) => {
                            if(event.key === 'Enter' && !submitting) {
                                handleSubmit(onSearch)();
                            }
                        }}
                    />
                </FlexView>
                <FlexView basis="10" />
                <form onSubmit={handleSubmit(onSearch)}>
                    <RaisedButton 
                        label={t('SEARCH')}
                        secondary={true}
                        style={{
                            marginTop: 20
                        }}
                        type="submit"
                        disabled={submitting}
                    />
                </form>
                <FlexView basis="10" />
                <Checkbox
                    checkedIcon={<FilterList />}
                    uncheckedIcon={<FilterList />}
                    checked={filterActive}
                    style={{
                        marginTop: 20
                    }}
                    onClick={() => onFilterAreaToggle()}
                />
                <Checkbox
                    checkedIcon={<Visibility />}
                    uncheckedIcon={<VisibilityOff />}
                    checked={columnVisibilityFilterActive}
                    onClick={() => { onColumnVisibilityFilterAreaToggle(); }} 
                    style={{
                        marginTop: 20
                    }}
                />
            </FlexView>
        );
    }
}


export default reduxForm({
    form: 'inventorySearchForm'
})(Search);