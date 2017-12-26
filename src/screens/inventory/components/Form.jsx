import React, { Component } from 'react';
import FlexView from 'react-flexview';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import { Field, reduxForm, Fields } from 'redux-form';

import { Uploader, AsyncSelect, DateSelect } from '../../../components/redux-form';

class Form extends Component {

    render() {
        
        return (
            <FlexView grow>
                <FlexView basis="10" />
                <FlexView basis="0" column grow className="make-it-card">
                    <Field
                        component={TextField} 
                        floatingLabelText="Floating Label Text"
                        type="text"
                        name="firstName"
                    />
                    <Field
                        component={DateSelect} 
                        floatingLabelText="Uretim Tarihi"
                        type="text"
                        name="issueDate"
                    />
                    <FlexView>
                        <FlexView basis='0' grow>
                            <Field 
                                component={AsyncSelect}
                                floatingLabelText="Uretim Tarihi"
                                name="branch"
                            />
                        </FlexView>
                        <FlexView basis="10" />
                        <FlexView basis='0' grow>
                            <Field 
                                component={AsyncSelect}
                                floatingLabelText="Issue Date"
                                name="building"
                            />
                        </FlexView>
                    </FlexView>
                </FlexView>
                <FlexView basis="10" />
                <FlexView basis="0" column grow className="make-it-card">
                    <FlexView>
                        <FlexView basis='0' grow>
                            <Field 
                                component={AsyncSelect}
                                floatingLabelText="Issue Date"
                                name="brand"
                            />
                        </FlexView>
                        <FlexView basis="10" />
                        <FlexView basis='0' grow>
                            <Field 
                                component={AsyncSelect}
                                floatingLabelText="Issue Date"
                                name="model"
                            />
                        </FlexView>
                        <FlexView basis="10" />
                        <FlexView basis='0' grow>
                            <Field 
                                component={AsyncSelect}
                                floatingLabelText="Issue Date"
                                name="model"
                            />
                        </FlexView>
                        <FlexView basis="10" />
                        <FlexView basis='0' grow>
                            <Field 
                                component={AsyncSelect}
                                floatingLabelText="Issue Date"
                                name="model"
                            />
                        </FlexView>
                        <FlexView basis="10" />
                        <FlexView basis='0' grow>
                            <Field 
                                component={AsyncSelect}
                                floatingLabelText="Issue Date"
                                name="model"
                            />
                        </FlexView>
                    </FlexView>
                    <Fields
                        component={Uploader}
                        names={["files", "isChanged", "changes"]}
                    />
                </FlexView>
                <FlexView basis="10" />
            </FlexView>
        );
    }
}

export default reduxForm({
    form: 'inventoryForm'
})(Form);