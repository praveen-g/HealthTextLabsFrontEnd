/**
 * Created by sasinda on 3/30/17.
 */
import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import Dropzone from 'react-dropzone';

class DZUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {files:[]};
    }

    onDrop(acceptedFiles, rejectedFiles) {
        this.props.history.push('/dash')
    }


    render() {
        var docuStyle={
            marginTop: '20px',
            marginLeft: '20px',
            margin: 20,
            width: '48%',
            //textAlign: 'center',
            display: 'inline-block',
        }

        return (

            <Paper style={docuStyle} zDepth={1}>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '150px'}}>
                    <Dropzone onDrop={this.onDrop.bind(this)}>
                        <FontIcon className="fa fa-upload" style={{marginTop: '20px'}}></FontIcon>
                        <div
                            style={{marginTop: '20px', marginLeft: '15px', marginRight: '15px',fontSize: '20px'}}>
                            Please drop your patient documents here.
                        </div>
                        <FontIcon className="fa fa-4x fa-file-text-o" style={{marginTop: '20px'}}></FontIcon>
                    </Dropzone>
                </div>
            </Paper>

        );
    }
}
export default DZUpload;





