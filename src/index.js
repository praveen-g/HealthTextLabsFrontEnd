import React from 'react';
import ReactDOM from 'react-dom';
import './www/index.css';
import {BrowserRouter, Route, IndexRoute} from 'react-router-dom';
import App from './app/App';
import Dashboard from './app/Dashboard/Dashboard'

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)
