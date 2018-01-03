import React, { Component } from 'react';
import { translate } from 'react-i18next';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import Grid, { Column } from "../../../components/Grid";

@translate()
export default class InventoriesGrid extends Component {

    onGridReady = (grid) => {
        this.grid = grid;
    }

    renderResponsibleUserCellValue = (responsibleUser) => {
        if(!responsibleUser) {

            return null;
        }

        return responsibleUser.fullname;
    }

    renderOperationsCell = () => {

        return (
            <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
            >
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Send feedback" />
                <MenuItem primaryText="Settings" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" />
            </IconMenu>
        );
    }

    localeGridText = (key, defaultValue) => {
        const { t } = this.props; 

        return defaultValue;
    }

    render() {
        const { t, data } = this.props;

        return (
            <Grid
                rowData={data}
                isLoading={false}
                onReady={this.onGridReady}
                suppressCellSelection
                enableColResize
                pagination
                enableSorting
                autoSizePadding={20}
                enableServerSideSorting
                localeTextFunc={this.localeGridText}
            >
                <Column 
                    field="code"
                    headerName={t('INVENTORYGRID.CODE')}
                />
                <Column 
                    field="device_type"
                    headerName={t('INVENTORYGRID.DEVICETYPE')}
                />
                <Column 
                    field="device_sub_type"
                    headerName={t('INVENTORYGRID.DEVICESUBTYPE')}
                    cellStyle={{
                        minWidth: 200
                    }}
                />
                <Column 
                    field="device_feature_type"
                    headerName={t('INVENTORYGRID.DEVICEFEATURETYPE')}
                />
                <Column 
                    field="device_class"
                    headerName={t('INVENTORYGRID.DEVICECLASS')}
                />
                <Column 
                    field="device_status"
                    headerName={t('INVENTORYGRID.DEVICESTATUSTYPE')}
                />
                <Column 
                    field="brand"
                    headerName={t('INVENTORYGRID.BRAND')}
                />
                <Column 
                    field="model"
                    headerName={t('INVENTORYGRID.MODEL')}
                />
                <Column 
                    field="responsible_user"
                    headerName={t('INVENTORYGRID.RESPONSIBLEUSER')}
                    cellRenderer={({ value }) => this.renderResponsibleUserCellValue(value)}
                />
                <Column 
                    field="medical_service"
                    headerName={t('INVENTORYGRID.MEDICALSERVICECODE')}
                />
                <Column 
                    field="serial_no"
                    headerName={t('INVENTORYGRID.SERIALNO')}
                />
                <Column 
                    field="location.branch"
                    headerName={t('INVENTORYGRID.BRANCH')}
                />
                <Column 
                    field="location.building"
                    headerName={t('INVENTORYGRID.BUILDING')}
                />
                <Column 
                    field="location.floor"
                    headerName={t('INVENTORYGRID.FLOOR')}
                />
                <Column 
                    field="location.station"
                    headerName={t('INVENTORYGRID.STATION')}
                />
                <Column 
                    field="location.location"
                    headerName={t('INVENTORYGRID.LOCATION')}
                />
                <Column 
                    colId="operation"
                    cellRendererFramework={this.renderOperationsCell}
                    pinned="right"
                    width="1"
                />
            </Grid>
        );
    }
}