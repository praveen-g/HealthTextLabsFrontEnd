import React, { Component } from 'react';
import './../www/App.css';
import './../www/document.css';
import Header from './Header'
import Dashboard from './Dashboard/Dashboard'
import Footer from './Footer'

import injectTapEventPlugin from 'react-tap-event-plugin';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
injectTapEventPlugin();

//Import ui components
import {
  blue400, blue800,
  indigo500,
  grey100, grey300, grey400, grey500,
  white, fullBlack,
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto',
  palette: {
    primary1Color: blue400,
    primary2Color: blue800,
    primary3Color: grey400,
    accent1Color: indigo500,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: blue800,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: blue400,
    shadowColor: fullBlack,
  },
});
//var Dropzone = require('react-dropzone');
//<Paper style={docuStyle} zDepth={1} >
//    <Dashboard/>
//</Paper>
//<div style={{display: 'flex', justifyContent: 'center', marginTop: '150px'}}>
//<Dropzone onDrop={this.onDrop}>
//    <FontIcon className="fa fa-upload" style={{marginTop: '20px'}}></FontIcon>
//    <div style={{marginTop: '20px', marginLeft: '15px', marginRight: '15px',fontSize: '20px', color:muiTheme.palette.accent3Color}}>
//    Try dropping some files here, or click to select files to upload.
//    </div>
//</Dropzone>
//</div>

var docuStyle={
    marginTop: '20px',
    marginLeft: '20px',
    margin: 20,
    width: '48%',
    //textAlign: 'center',
    display: 'inline-block',
}

class App extends Component {
    
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="App">
                    <Header/>
                    <Dashboard/>
                    <Footer/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
