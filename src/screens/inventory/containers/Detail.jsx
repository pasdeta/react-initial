import React, { Component } from 'react';
import FlexView from 'react-flexview';
import { translate } from 'react-i18next';

import Request from '../../../services/Request';

@translate()
export default class InventoryDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inventory: {
                code: 'asdasda',
                serialno: 'sadasdasd',
                deviceclass:'dsavdsvg',
                devicetype:'asdasfasd',
                deviceorderinfotype:'asdasfasd',
                devicestatustype:'asasdasf',
                devicefeaturetype:'asfasdf'
            }
        }
    }


    async componentDidMount() {
        let inventoryId = this.props.match.params.id;
        console.log(inventoryId);
        let response  = await Request.get(`/inventories/${inventoryId}`);
        console.log(response);
    }

    render() {
        const { t } = this.props;
        const { inventory } = this.state;

        return (
            <FlexView column grow>
                <FlexView grow basis="0">
                    <FlexView grow className="make-it-card" basis="0">
                        <table>
                            <tbody>
                                <tr>
                                    <td>{t('INVENTORYGRID.CODE')}</td>
                                    <td>{inventory.code}</td>
                                </tr>
                                <tr>
                                    <td>{t('INVENTORYGRID.SERIALNO')}</td>
                                    <td>{inventory.serialno}</td>
                                </tr>
                                <tr>
                                    <td>{t('INVENTORYGRID.DEVICECLASS')}</td>
                                    <td>{inventory.deviceclass}</td>
                                </tr>
                                <tr>
                                    <td>{t('INVENTORYGRID.DEVICETYPE')}</td>
                                    <td>{inventory.devicetype}</td>
                                </tr>
                                <tr>
                                    <td>{t('INVENTORYGRID.DEVICEORDERINFOTYPE')}</td>
                                    <td>{inventory.deviceorderinfotype}</td>
                                </tr>
                                <tr>
                                    <td>{t('INVENTORYGRID.DEVICESTATUSTYPE')}</td>
                                    <td>{inventory.devicestatustype}</td>
                                </tr>
                                <tr>
                                    <td>{t('INVENTORYGRID.DEVICEFEATURETYPE')}</td>
                                    <td>{inventory.devicefeaturetype}</td>
                                </tr>
                            </tbody>
                        </table>
                    </FlexView>
                    <FlexView basis="10" />
                    <FlexView grow className="make-it-card" basis="0">
                        <table>
                            <tbody>
                                <tr>
                                    <td rowSpan="2" className="title-rotate">Bakim</td>
                                    <td>Son Yapilan Bakim Tarihi</td>
                                    <td>Kasim 2016</td>
                                </tr>
                                <tr>
                                    <td>Gelecek Bakim</td>
                                    <td>Haziran 2017</td>
                                </tr>

                                <tr>
                                    <td rowSpan="2" className="title-rotate">Kalibrasyon</td>
                                    <td>Son Yapilan Kalibrasyon Tarihi</td>
                                    <td>Mart 2016</td>
                                </tr>
                                <tr>
                                    <td>Gelecek Kalibrasyon Tarihi</td>
                                    <td>Haziran 2017</td>
                                </tr>
                            </tbody>
                        </table>
                    </FlexView>
                    <FlexView basis="10" />
                    <FlexView grow className="make-it-card" basis="0">
                    </FlexView>
                </FlexView>
                <FlexView basis="10" />
                <FlexView grow basis="0">
                    <FlexView grow className="make-it-card">
                    </FlexView>
                    <FlexView basis="10" />
                    <FlexView grow className="make-it-card">
                    </FlexView>
                    <FlexView basis="10" />
                    <FlexView grow className="make-it-card">
                    </FlexView>
                </FlexView>
            </FlexView>
        );
    }
}