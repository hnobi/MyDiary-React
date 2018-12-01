import React from "react";
import ReactDOM from "react-dom";
import Routes from "./app/Routes";
import store from "./app/redux/store";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
