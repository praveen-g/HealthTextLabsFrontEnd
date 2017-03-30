import React from 'react';
import ReactDOM from 'react-dom';
import './www/index.css';
import App from './app/App';
import Document from './app/Document'
import {HashRouter, Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



ReactDOM.render(
    <HashRouter>
      <Route path='/' component={App} />
    </HashRouter>,
  document.getElementById('root')
);



//ReactDOM.render(
//
//);