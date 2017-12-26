import React, { Component } from 'react';
import FlexView from 'react-flexview';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import FileFolder from 'material-ui/svg-icons/file/folder';

import { Navigate } from '../actions';
import Language from './Language';

const mapDispathToProps = dispatch => ({
    navigateTo: (url) => {
        dispatch(Navigate.GoTo(url));
    }
});

class NavigationBar extends Component {
    
    render() {
        
        return (
            <FlexView 
                grow
                className="navigation-bar"
                basis="100%"
                vAlignContent="center"
            >
                <FlatButton
                    onClick={() => { this.props.navigateTo("/"); }}
                    label="AStore"
                    secondary={true}
                />
                <FlexView basis="20" />   
                <FlatButton
                    onClick={() => { this.props.navigateTo("/inventories"); }}
                    label="Inventories"
                    secondary={true}
                    icon={<FileFolder />}
                />       
                <FlatButton
                    onClick={() => { this.props.navigateTo("/inventories/new"); }}
                    label="New Inventory"
                    secondary={true}
                    icon={<FileFolder />}
                />
                <FlatButton
                    onClick={() => { this.props.navigateTo("/inventories/12"); }}
                    label="Inventory Detail"
                    secondary={true}
                    icon={<FileFolder />}
                />  
                <FlexView grow /> 
                <FlatButton
                    onClick={() => { this.props.navigateTo("/login"); }}
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