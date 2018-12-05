import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from './components/home';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import AddEntry from './components/AddEntry';
import Entries from './components/Entries';
import SingleEntry from './components/SingleEntry';

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={home} />
          <Route exact path='/signup' component={SignupForm} />
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/add-entry' component={AddEntry} />
          <Route exact path='/entries' component={Entries} />
          <Route exact path='/entries/:entryId' component={SingleEntry} />
        </Switch>
      </BrowserRouter>
    );
  }
}
