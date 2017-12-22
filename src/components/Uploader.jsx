import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionInfo from 'material-ui/svg-icons/action/info';

export default class Uploader extends Component {


    handleChangeFiles = (event) => {
        console.log("handleChangeFiles", event.target.files)
        this.props.isChanged.input.onChange(true);
    }

    render() {

        return (
            <List
                style={{
                    border: 1
                }}
            >
                <Subheader inset={true}>
                    <RaisedButton
                        label="Choose an Image"
                        labelPosition="before"
                        containerElement="label"
                        style={{
                            margin: 12,
                        }}
                    >
                        <input
                            onChange={this.handleChangeFiles}
                            type="file" 
                            multiple
                            style={{
                                cursor: 'pointer',
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                width: '100%',
                                opacity: 0,
                            }}
                        />
                    </RaisedButton>
                </Subheader>
                <ListItem
                    leftAvatar={<Avatar icon={<FileFolder />} />}
                    rightIcon={<ActionInfo />}
                    primaryText="Photos"
                    secondaryText="Jan 9, 2014"
                />
                <ListItem
                    leftAvatar={<Avatar icon={<FileFolder />} />}
                    rightIcon={<ActionInfo />}
                    primaryText="Recipes"
                    secondaryText="Jan 17, 2014"
                />
            </List>
        );
    }
}