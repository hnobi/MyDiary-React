import React, { Component } from "react";
// import "./assets/css/root.css";
import home from './components/home'
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
