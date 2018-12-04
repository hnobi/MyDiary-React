import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LOGIN_SAVE_INPUT } from '../redux/constant/actionTypes';
import userLogin from '../redux/actions/login';
import Alert from './Alert';
import '../assets/css/main.css';
import '../assets/css/form.css';

export class LoginForm extends Component {
  render() {
    const { saveInput, handleUserLogin, history } = this.props;
    const { username, password } = this.props.loginData.input;
    const loginInput = this.props.loginData.input;
    const { loading, message, status } = this.props.loginData;
    const statusClassName = loading ? 'loading' : '';

    if (status === 'success') {
      setTimeout(() => {
        history.push('/add-entry');
      }, 500);
    }
    return (
      <div>
        <main>
          {loading === false && <Alert message={message} status={status} />}
          <div id="after-click">
            <h3>Invalid username or password</h3>
          </div>
          <h2>Sign in</h2>
          <div className="Sign-in-out">
            <form
              id="signin"
              onSubmit={(e) => {
                e.preventDefault();
                handleUserLogin(loginInput);
              }}
            >
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
                required
                onChange={e => saveInput(e.target.name, e.target.value)}
                defaultValue={username}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="secret password"
                required
                onChange={e => saveInput(e.target.name, e.target.value)}
                defaultValue={password}
              />
              <input type="submit" value="Login" className={statusClassName} />
            </form>
            <p>
              dont have an Account ? <Link to="/signup"> Sign up</Link>{' '}
            </p>
            <div className="push" />
          </div>
          <p className="footer">copyright © 2018. MyDiary @ Andela. Hammed Noibi.</p>
        </main>
      </div>
    );
  }
}

LoginForm.propTypes = {
  saveInput: PropTypes.func,
  handleUserLogin: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string,
  history: PropTypes.any,
  loginData: PropTypes.object
};

const mapStateToProps = state => ({
  loginData: state.loginData
});
const mapDispatchToProps = dispatch => ({
  saveInput: (field, value) => {
    dispatch({
      type: LOGIN_SAVE_INPUT,
      payload: { field, value }
    });
  },
  handleUserLogin: (data, history) => dispatch(userLogin(data, history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
