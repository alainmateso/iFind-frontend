import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.scss';
import App from './App';
import Users from './components/Users'

const routing = (
    <Router>
        <div>
            <Route exact path="/" component = { App } />
            <Route path="/users" component={ Users } />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

