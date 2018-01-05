import React, { Component } from 'react';
import { translate } from 'react-i18next';

import Grid, { Column } from "../../../components/Grid";

@translate()
export default class LocationHistoryGrid extends Component {

    render() {
        const { t, data } = this.props;
        console.log(data);
        return (
            <Grid
                data={data}
                suppressRowClickSelection
                suppressCellSelection
                suppressMovableColumns
                autoSizePadding={20}
                enableColResize
                enableSorting
                sizing="fit"
            >
                <Column 
                    field="branch"
                    headerName={t('INVENTORYGRID.BRANCH')}
                />
                <Column 
                    field="building"
                    headerName={t('INVENTORYGRID.BUILDING')}
                />
                <Column 
                    field="floor"
                    headerName={t('INVENTORYGRID.FLOOR')}
                />
                <Column 
                    field="station"
                    headerName={t('INVENTORYGRID.STATION')}
                />
                <Column 
                    field="location"
                    headerName={t('INVENTORYGRID.LOCATION')}
                />
                <Column
                    field="user.fullname"
                    headerName="Belirleyen Kullanici"
                />
                <Column
                    field="inserted_at"
                    headerName="Tarih"
                />
            </Grid>
        );
    }
}