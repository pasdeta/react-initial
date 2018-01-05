import React, { Component } from 'react';
import FlexView from 'react-flexview';
import { translate } from 'react-i18next';

@translate()
export default class Operations extends Component {

    render() {
        const { t } = this.props;

        return (
            <FlexView grow>
                <FlexView basis="80" className="make-it-card">
                    {t('NEWINVENTORY')}
                </FlexView>
                <FlexView basis="10" />
                <FlexView basis="80" className="make-it-card">
                    {t('CHANGELOCATION')}
                </FlexView>
                <FlexView basis="10" />
                <FlexView basis="80" className="make-it-card">
                    {t('CHANGERESPONSIBLE')}
                </FlexView>
                <FlexView basis="10" />
                <FlexView basis="80" className="make-it-card">
                    {t('EXPORTEXCEL')}
                </FlexView>
                <FlexView basis="10" />
                <FlexView basis="80" className="make-it-card">
                    {t('IMPORTEXCEL')}
                </FlexView>
                <FlexView basis="10" />
                <FlexView basis="80" className="make-it-card">
                    {t('GENERATEBARCODE')}
                </FlexView>
            </FlexView>
        );
    }
}