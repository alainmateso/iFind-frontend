import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';
import Users from './components/UsersComponent';
import NotFound from './components/NotFound';
// import Users from './components/Users';
import Post from './components/postForm';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component= {App} />
            <Route path="/users" component={Users} />
            <Route path="*" omponent={NotFound} />
            <Route path="/post" component={ Post} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
