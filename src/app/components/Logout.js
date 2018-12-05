import React, { Component } from 'react';
import '../assets/css/main.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { removeAuthToken } from '../services/AuthToken';

class Logout extends Component {
  componentDidMount() {
    const { history } = this.props;

    removeAuthToken();

    setTimeout(() => {
      history.replace('/');
    }, 3000);
  }

  render() {
    return (
      <div className="body-image">
        <nav className="navcolor">
          <div id="logo">
            <Link to="/">My Diary</Link>
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to="/login">login</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="banner">
          <div className="banner-text trasparent-bg">
            <h2>Thank you for your time here</h2>
          </div>
        </div>
        <p className="footer ">copyright © 2018. MyDiary @ Andela. Hammed Noibi.</p>
      </div>
    );
  }
}
Logout.propTypes = {
  history: PropTypes.object
};

export default Logout;
