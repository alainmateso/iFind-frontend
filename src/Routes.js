import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.scss';
import AppComponent from './components/AppComponent';
import Users from './components/Users';
import ViewItemComponent from './components/Posts/ViewItemComponent';

const Routes = () => (
  <Router>
    <Switch>
            <Route exact path="/" component={AppComponent} />
            <Route  path="/posts/:id" component={ViewItemComponent} />
            <Route path="/users" component={Users} />
    </Switch>
  </Router>
);

export default Routes;