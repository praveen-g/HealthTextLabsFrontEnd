/*
 * Created by Praveen Gupta
 */
import React, {Component} from 'react';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class Upload extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
        };
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <input type="file" name="name"/>
            ,
            <RaisedButton
                label="Upload"
                primary={true}
                onTouchTap={this.handleClose}
                style={style}
                />,
            <RaisedButton
                label="Cancel"
                secondary={true}
                onTouchTap={this.handleClose}
                style={style}
                />,
            ]

        return (
            <div>
                <RaisedButton label={this.props.label} onTouchTap={this.handleOpen}  primary={true}/>
                <Dialog
                    title="Upload Files"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    >
                    Please select Raw Text files to upload:
                </Dialog>
            </div>
        );
    }
}

export default Upload;
