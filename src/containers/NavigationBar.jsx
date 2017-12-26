import React, { Component } from 'react';
import FlexView from 'react-flexview';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import FileFolder from 'material-ui/svg-icons/file/folder';

import { Navigate } from '../actions';
import Language from './Language';

import { auth } from '../providers/Authentication';
import NavFlatButton from '../components/NavFlatButton';

const mapDispathToProps = dispatch => ({
    navigateTo: (url) => {
        dispatch(Navigate.GoTo(url));
    }
});

@auth()
class NavigationBar extends Component {
    
    render() {
        console.log(this.props)
        return (
            <FlexView 
                grow
                className="navigation-bar"
                basis="100%"
                vAlignContent="center"
            >
                <NavFlatButton
                    url="/"
                    label="AStore"
                    secondary={true}
                />
                <FlexView basis="20" />   
                <NavFlatButton
                    url="/inventories"
                    label="Inventories"
                    secondary={true}
                    icon={<FileFolder />}
                />       
                <NavFlatButton
                    url="/inventories/new"
                    label="New Inventory"
                    secondary={true}
                    icon={<FileFolder />}
                />
                <NavFlatButton
                    url="/inventories/12"
                    label="Inventory Detail"
                    secondary={true}
                    icon={<FileFolder />}
                />  
                <FlexView grow /> 
                <NavFlatButton
                    url="/login"
                    label="Login"
                    secondary={true}
                />                 
                <FlatButton label="Logout" secondary={true} />
                <Language />
            </FlexView>
        );
    }
}

export default connect(null, mapDispathToProps)(NavigationBar);