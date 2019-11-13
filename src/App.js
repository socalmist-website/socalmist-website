import React from 'react';
import { AdminPage } from './components/Admin/AdminPage';
import { HomePage } from './components/Home/HomePage';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => (
  <Switch>
    <Route exact path="/" component={ HomePage } />
    <Route path="/admin" component={ AdminPage } />
    <Redirect to="/" />
  </Switch>
);

export default App;