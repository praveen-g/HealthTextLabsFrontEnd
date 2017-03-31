import React, { Component } from 'react';
import './../www/App.css';
import Header from './Header'
import Dashboard from './Dashboard/Dashboard'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//Import ui components
import {
  blue400, blue800,
  indigo500,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: blue400,
    primary2Color: blue800,
    primary3Color: grey400,
    accent1Color: indigo500,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: blue400,
    shadowColor: fullBlack,
  },
});


class App extends Component {
    
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="App">
                    <Header/>
                    <Dashboard/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
