import React, { Component } from 'react';
import { translate } from 'react-i18next';

import Grid, { Column } from "../../../components/Grid";

@translate()
export default class LocationHistoryGrid extends Component {


    render() {
        const { t } = this.props;

        return (
            <Grid

            >
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
                    field="user"
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