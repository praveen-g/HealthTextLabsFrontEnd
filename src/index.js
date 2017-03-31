import React from 'react';
import ReactDOM from 'react-dom';
import './www/index.css';
import {HashRouter, Route} from 'react-router-dom';
import App from './app/App';

ReactDOM.render(
	  <HashRouter>
	    <Route path='/' component={App} />
	  </HashRouter>,
  document.getElementById('root')
)
