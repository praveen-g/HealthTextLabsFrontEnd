/*
 * Created by Praveen Gupta
 */
import React, {Component} from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

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
            <RaisedButton children={<input type="file" type="file" name="name"/>}/>
            ,
            <FlatButton
                label="Upload"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
                />,
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
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

//<div>
//  <dialog open={this.state.open}>
//    Please select Raw Text files to upload:
//    <div>{standardActions}</div>
//  </dialog>
//
//  <div>
//    <h2>Upload Files</h2>
//    <button onClick={this.handleTouchTap}>
//      Browse
//    </button>
//  </div>
//</div>