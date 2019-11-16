import React from 'react';
import { AdminPage } from './components/Admin/AdminPage';
import { HomePage } from './components/Home/HomePage';
import { ContactPage } from './components/Contact/ContactPage';
import { AboutPage } from './components/About/AboutPage';
import { ProgramPage } from './components/Program/ProgramPage';
import { RegisterPage } from './components/Register/RegisterPage';
import { CompetitionPage } from './components/Competition/CompetitionPage';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => (
  <Switch>
    <Route exact path="/" component={ HomePage } />
    <Route path="/admin" component={ AdminPage } />
    <Route path="/about" component={ AboutPage } />
    <Route path="/program" component={ ProgramPage } />
    <Route path="/contact" component={ ContactPage } />
    <Route path="/register" component={ RegisterPage } />
    <Route path="/competition" component={ CompetitionPage } />
    <Redirect to="/" />
  </Switch>
);

export default App;