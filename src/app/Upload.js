/*
* Created by Praveen Gupta
*/

import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  box: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Upload extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = (
    	<div>
    		<input type="file" type="file" name="name" />
	        <FlatButton
	         label="Ok"
	         primary={true}
	         onTouchTap={this.handleRequestClose}
	       />
	    </div>
    );

    return (
    	<MuiThemeProvider>
		    <div>
		      	<Dialog
			        open={this.state.open}
			        title="Please select raw text file:"
			        actions={standardActions}
			        onRequestClose={this.handleRequestClose}
			      	>
		      	</Dialog>

		      	<div style = {styles.box}>
			      	<h2>Upload Files</h2>
			      	<RaisedButton
			        	label="Browse"
			        	secondary={true}
			        	onTouchTap={this.handleTouchTap}
			      	/>
			 	</div>
		    </div>
		</MuiThemeProvider>
    );
  }
}

export default Upload;
