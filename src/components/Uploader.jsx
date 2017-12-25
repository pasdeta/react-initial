import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Delete from 'material-ui/svg-icons/action/delete';

export default class Uploader extends Component {

    handleChangeFiles = (event) => {
        const files = event.target.files;
        let newFiles = this.props.files.input.value == "" ? [] : this.props.files.input.value;
        if(files.length > 0) {
            for(let file of files) {
                newFiles.push(file);
            }
            this.props.isChanged.input.onChange(true);
            this.props.files.input.onChange(newFiles);
            this.forceUpdate()
        }
    }

    humanFileSize(size) {
        var i = Math.floor( Math.log(size) / Math.log(1024) );

        return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][i];
    }

    humanTotalFileSize() {
        const { files } = this.props;
        const filesToList = files.input.value == "" ? [] : files.input.value;

        let totalSize = 0;
        for(let file of files.input.value) {
            totalSize = totalSize + file.size;
        }

        return this.humanFileSize(totalSize)
    }

    render() {
        const { files } = this.props;
        const filesToList = files.input.value == "" ? [] : files.input.value;

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
                    <div>
                            {filesToList.length} Dosya, {this.humanTotalFileSize()}
                    </div>
                </Subheader>
                {
                    filesToList.map((file, index) => (
                        <ListItem
                            disabled
                            key={`file${index}`}
                            leftAvatar={<Avatar icon={<FileFolder />} />}
                            rightIcon={<Delete />}
                            primaryText={file.name}
                            secondaryText={this.humanFileSize(file.size)}
                            onClick={null}
                        />
                    ))
                }
            </List>
        );
    }
}