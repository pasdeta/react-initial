import React, { Component } from 'react';
import FlexView from 'react-flexview';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { Field, reduxForm } from 'redux-form';

import AsyncSelect from '../../../components/AsyncSelect';


class Form extends Component {

    render() {
        
        return (
            <FlexView grow>
                <FlexView basis="10" />
                <FlexView column grow className="make-it-card">
                    <Field
                        component={TextField} 
                        floatingLabelText="Floating Label Text"
                        type="text"
                        name="firstName" 
                    />
                    <Field
                        component={DatePicker} 
                        floatingLabelText="Issue Date"
                        type="text"
                        name="issueDate"
                        autoOk
                        container="inline" 
                        mode="landscape"
                    />
                    <FlexView>
                        <FlexView basis='50%'>
                            <Field 
                                component={AsyncSelect}
                                floatingLabelText="Issue Date"
                                name="brand"
                            />
                        </FlexView>
                        <FlexView basis='50%'>
                            <Field 
                                component={AsyncSelect}
                                floatingLabelText="Issue Date"
                                name="model"
                            />
                        </FlexView>
                    </FlexView>
                </FlexView>
                <FlexView basis="10" />
                <FlexView column grow className="make-it-card">
                <FlexView>
                    <FlexView basis='50%'>
                        <Field 
                            component={AsyncSelect}
                            floatingLabelText="Issue Date"
                            name="brand"
                        />
                    </FlexView>
                    <FlexView basis='50%'>
                        <Field 
                            component={AsyncSelect}
                            floatingLabelText="Issue Date"
                            name="model"
                        />
                    </FlexView>
                    </FlexView>
                </FlexView>
                <FlexView basis="10" />
            </FlexView>
        );
    }
}

export default reduxForm({
    form: 'inventoryForm'
})(Form);