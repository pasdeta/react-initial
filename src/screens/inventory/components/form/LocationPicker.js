import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlexView from 'react-flexview';
import { translate } from 'react-i18next';
import update from 'immutability-helper';

import Request from '../../../../services/Request';
import AsyncSelect from "../../../../components/AsyncSelect";

@translate()
export default class LocationPicker extends Component {

    static propTypes = {
        values: PropTypes.shape({
            branchId: PropTypes.string,
            buildingId: PropTypes.number
        })
    }

    static defaultProps = {
        values: {
            branchId: null,
            buildingId: null
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            values: {
                branchId: null,
                buildingId: null,
            },
            branches: {
                isLoading: true,
                data: []
            },
            buildings: {
                isLoading: false,
                data: []
            },
            floors: {
                isLoading: false,
                data: []
            }
        };
    }


    async componentDidMount() {
        const { values } = this.props;
        this.setState({ values });
        let response = await Request.get('/branches');
        this.setState({
            branches: {
                isLoading: false,
                data: response
            }
        });
        if(values.branchId != null) {
            response = await Request.get('/buildings', { branch_id: values.branchId });
            this.setState({
                buildings: {
                    isLoading: false,
                    data: response
                }
            });
        }
    }

    updateValue(key, value, ...clearKeys) {
        console.log(clearKeys);
        let originalKey = {
            [key]: {
                $set: value
            }
        };
        let clear = {};
        for(let clearKey of clearKeys) {
            clear[clearKey] = {
                $set: null
            }
        }

        const newState = update(this.state.values, {
            ...originalKey,
            ...clear
        });

        this.setState({ values: newState });  
    }

    render() {
        const { t } = this.props;
        const { branches, buildings, floors, values } = this.state;
        console.log(this.state.values);
        return (
            <FlexView grow>
                <FlexView grow>
                    <AsyncSelect 
                        floatingLabelText={t('INVENTORYGRID.BRANCH')}
                        name="branch_id"
                        service={branches}
                        value={values.branchId}
                        onChange={(c) => this.updateValue("branchId", c, "buildingId", "floorId", "stationId", "locationId")}
                        valueSelector={branch => branch.id}
                    />
                </FlexView>
                <FlexView basis="10" />
                <FlexView grow>
                    <AsyncSelect 
                        floatingLabelText={t('INVENTORYGRID.BUILDING')}
                        name="building_id"
                        service={buildings}
                        value={values.buildingId}
                        onChange={(c) => this.updateValue("buildingId", c, "floorId", "stationId", "locationId")}
                        disabled={values.branchId == null}
                        valueSelector={building => building.id}
                    />
                </FlexView>
                <FlexView basis="10" />
                <FlexView grow>
                    <AsyncSelect 
                        floatingLabelText={t('INVENTORYGRID.FLOOR')}
                        name="floor_id"
                        service={floors}
                        value={values.floorId}
                        onChange={(c) => this.updateValue("floorId", c, "stationId", "locationId")}
                        valueSelector={floor => floor.id}
                    />
                </FlexView>
                <FlexView basis="10" />
                <FlexView grow>
                    <AsyncSelect 
                        floatingLabelText={t('INVENTORYGRID.STATION')}
                        name="station"
                        service={{
                            isLoading: true,
                            data: []
                        }}
                        onChange={() => {}}
                    />
                </FlexView>
                <FlexView grow>
                    <AsyncSelect 
                        floatingLabelText={t('INVENTORYGRID.LOCATION')}
                        name="location"
                        service={{
                            isLoading: true,
                            data: []
                        }}
                        onChange={() => {}}
                    />
                </FlexView>
            </FlexView>
        );
    }
}