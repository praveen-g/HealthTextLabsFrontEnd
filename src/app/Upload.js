/*
* Created by Praveen Gupta
*/

import React, {Component} from 'react';

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
        <button onClick={this.handleRequestClose}> 
          Upload 
        </button>

      </div>
    );

    return (
		    <div>
		      	<dialog open={this.state.open}>
              Please select Raw Text files to upload:
              <div>{standardActions}</div>
		      	</dialog>

		      	<div>
			      	<h2>Upload Files</h2>
			      	<button class="mdl-button mdl-js-button mdl-button--raised" onClick={this.handleTouchTap}>
			        	Browse
			      	</button>
			 	    </div>
		    </div>
    );
  }
}

export default Upload;
