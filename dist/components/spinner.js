import Spinner from 'react-spinner-material';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Loader extends Component {
  render() {
    return (
      <div className='loader'>
        <Spinner
          size={this.props.size}
          spinnerColor={this.props.color}
          spinnerWidth={3}
          visible={true} />
      </div>
    );
  }
}

Loader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};
