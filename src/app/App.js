import React, { Component } from 'react';
import './../www/App.css';
import Upload from './Upload'
import Header from './Header'
//Import ui components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500} from 'material-ui/styles/colors';




class App extends Component {
    
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <Header/>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
