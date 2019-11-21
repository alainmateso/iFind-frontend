import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import './index.scss';
import App from './App';
import Users from './components/UsersComponent';
import NotFound from './components/NotFound';

const routing = (
    <Router>
        <div>
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/users" component={Users} />
            <Route path="*" component={NotFound} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
