import React, { Component } from "react";
import "./assets/css/root.css";
import home from './components/home'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";


export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/signup" component={SignupForm} />

        </Switch>
      </BrowserRouter>
    );
  }
}
