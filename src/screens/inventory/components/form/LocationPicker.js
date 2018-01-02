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
            locations: {
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
            console.log("response", response)
            await this.setState({
                buildings: {
                    isLoading: false,
                    data: response
                }
            });
        }
    }

    updateValue(key, value, ...clearKeys) {
        console.log("update", key);
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
        const { branches, buildings, floors, stations, locations, values } = this.state;
        console.log("render building", buildings)
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
                        disabled={values.buildingId == null}
                    />
                </FlexView>
                <FlexView basis="10" />
                <FlexView grow>
                    <AsyncSelect 
                        floatingLabelText={t('INVENTORYGRID.STATION')}
                        name="station_id"
                        service={stations}
                        onChange={(c) => this.updateValue("stationId", c, "locationId")}
                        valueSelector={station => station.id}
                        disabled={values.floorId == null}
                    />
                </FlexView>
                <FlexView grow>
                    <AsyncSelect 
                        floatingLabelText={t('INVENTORYGRID.LOCATION')}
                        name="location_id"
                        service={locations}
                        onChange={(c) => this.updateValue("locationId", c)}
                        valueSelector={location => location.id}
                        disabled={values.stationId == null}
                    />
                </FlexView>
            </FlexView>
        );
    }
}