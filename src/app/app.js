import React, { Component } from 'react';
import './../www/App.css';
import Header from './Header'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//Import ui components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




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