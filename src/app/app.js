import React, { Component } from 'react';
import './../www/App.css';
import Upload from './Upload'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Health Text Labs</h2>
        </div>
        <Upload />
      </div>
    );
  }
}

export default App;
