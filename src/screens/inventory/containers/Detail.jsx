import React, { Component } from 'react';
import FlexView from 'react-flexview';
import { translate } from 'react-i18next';

import Request from '../../../services/Request';

@translate()
export default class InventoryDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inventory: null
        }
    }

    async componentDidMount() {
        let inventoryId = this.props.match.params.id;
        console.log(inventoryId);
        let response  = await Request.get(`/inventory/${inventoryId}`);
        this.setState({ inventory: response });
        console.log(response)
    }

    render() {
        const { t } = this.props;
        const { inventory } = this.state;

        if(!inventory) {
            return null;
        }

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
                                    <td>{inventory.serial_no}</td>
                                </tr>
                                <tr>
                                    <td>{t('INVENTORYGRID.DEVICECLASS')}</td>
                                    <td>{inventory.device_class}</td>
                                </tr>
                                <tr>
                                    <td>{t('INVENTORYGRID.DEVICETYPE')}</td>
                                    <td>{inventory.device_type}</td>
                                </tr>
                                <tr>
                                    <td>{t('INVENTORYGRID.DEVICEORDERINFOTYPE')}</td>
                                    <td>{inventory.order_info_type}</td>
                                </tr>
                                <tr>
                                    <td>{t('INVENTORYGRID.DEVICESTATUSTYPE')}</td>
                                    <td>{inventory.device_status}</td>
                                </tr>
                                <tr>
                                    <td>{t('INVENTORYGRID.DEVICEFEATURETYPE')}</td>
                                    <td>{inventory.device_feature_type}</td>
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