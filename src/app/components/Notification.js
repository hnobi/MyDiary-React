import React from 'react';
import PropTypes from 'prop-types';

import { ToastContainer, ToastStore } from 'react-toasts';

class Alert extends React.Component {
  componentDidMount() {
    ToastStore[this.props.status](this.props.message);
  }

  render() {
    return (
      <div>
        <ToastContainer store={ToastStore} position={ToastContainer.POSITION.TOP_CENTER} />
      </div>
    );
  }
}

Alert.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string
};

export default Alert;
