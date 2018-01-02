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
            buildingId: PropTypes.number,
            floorId: PropTypes.number,
            stationId: PropTypes.number,
            deviceLocationId: PropTypes.number,
        })
    }

    static defaultProps = {
        values: {
            branchId: null,
            buildingId: null,
            floorId: null,
            stationId: null,
            deviceLocationId: null
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            values: {
                branchId: null,
                buildingId: null,
                floorId: null,
                stationId: null,
                deviceLocationId: null
            },
            branches: {
                isLoading: true,
                data: []
            },
            buildings: {
                isLoading: true,
                data: []
            },
            floors: {
                isLoading: true,
                data: []
            },
            stations: {
                isLoading: true,
                data: []
            },
            deviceLocations: {
                isLoading: true,
                data: []
            }
        };
    }


    async componentDidMount() {
        const { values } = this.props;

        this.setState({ values });
        let response = await Request.get('/branches');
        await this.setState({
            branches: {
                isLoading: false,
                data: response
            }
        });
        if(values.branchId != null) {
            response = await Request.get('/buildings', { branch_id: values.branchId });
            await this.setState({
                buildings: {
                    isLoading: false,
                    data: response
                }
            });
        }
        if(values.floorId != null) {
            response = await Request.get('/floors', { building_id: values.buildingId });
            await this.setState({
                floors: {
                    isLoading: false,
                    data: response
                }
            });
        }
        if(values.stationId != null) {
            response = await Request.get('/stations', { floorId: values.floorId });
            await this.setState({
                stations: {
                    isLoading: false,
                    data: response
                }
            });
        }
        if(values.deviceLocationId != null) {
            response = await Request.get('/devicelocations', { stationId: values.stationId});
            await this.setState({
                deviceLocations: {
                    isLoading: false,
                    data: response
                }
            });
        }
    }

    updateValue(key, value, ...clearKeys) {
        console.log("update value")
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
        const { branches, buildings, floors, stations, deviceLocations, values } = this.state;

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
                        valueSelector={building => building.id}
                        disabled={values.branchId == null}
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
                        disabled={values.buildingId == null}
                    />
                </FlexView>
                <FlexView basis="10" />
                <FlexView grow>
                    <AsyncSelect 
                        floatingLabelText={t('INVENTORYGRID.STATION')}
                        name="station_id"
                        service={stations}
                        value={values.stationId}
                        onChange={(c) => this.updateValue("stationId", c, "locationId")}
                        valueSelector={station => station.id}
                        disabled={values.floorId == null}
                    />
                </FlexView>
                <FlexView basis="10" />
                <FlexView grow>
                    <AsyncSelect 
                        floatingLabelText={t('INVENTORYGRID.LOCATION')}
                        name="device_location_id"
                        service={deviceLocations}
                        value={values.deviceLocationId}
                        onChange={(c) => this.updateValue("deviceLocationId", c)}
                        valueSelector={deviceLocation => deviceLocation.id}
                        disabled={values.stationId == null}
                    />
                </FlexView>
            </FlexView>
        );
    }
}