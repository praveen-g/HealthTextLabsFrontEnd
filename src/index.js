import React from 'react';
import ReactDOM from 'react-dom';
import './www/index.css';
import App from './app/App';
import Document from './app/Document'
//import ReactRouter from './app/ReactRouter'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();




ReactDOM.render(
  <App />,
  document.getElementById('root')
);



//ReactDOM.render(
//
//);