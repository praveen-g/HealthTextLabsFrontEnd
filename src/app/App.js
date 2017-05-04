import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './../www/App.css';
import './../www/document.css';
import Header from './Header'
import Dashboard from './Dashboard/Dashboard'
import Footer from './Footer'
import DDUpload from './upload/DZUpload.js'

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
    textColor: fullBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: blue400,
    shadowColor: fullBlack,
  },
});


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
                    <Switch>
                        <Route exact path='/' component={DDUpload}/>
                        <Route path='/dash' component={Dashboard}/>
                    </Switch>
                    <Footer/>
                </div>
            </MuiThemeProvider>
        );
    }
}export default App;
