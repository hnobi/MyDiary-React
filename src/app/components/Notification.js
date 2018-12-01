import React from "react";

import { ToastContainer, ToastStore } from "react-toasts";

class Alert extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    ToastStore[this.props.status](this.props.message);
  }
  render() {
    return (
      <div>
        <ToastContainer
          store={ToastStore}
          position={ToastContainer.POSITION.TOP_CENTER}
        />
      </div>
    );
  }
}

export default Alert;
