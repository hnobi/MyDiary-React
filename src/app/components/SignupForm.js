import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SIGNUP_SAVE_INPUT } from '../redux/constant/actionTypes';
import userSignup from '../redux/actions/signUp';
import Alert from './Alert';
import '../assets/css/main.css';
import '../assets/css/form.css';

export class SignupForm extends Component {
  render() {
    const { saveInput, handleUserSignup, history } = this.props;
    const {
      fullname, username, email, password
    } = this.props.signupData.input;
    const signupInput = this.props.signupData.input;

    const { loading, message, status } = this.props.signupData;
    const statusClassName = loading ? 'loading' : '';
    if (status === 'success') {
      setTimeout(() => {
        history.push('/login');
      }, 500);
    }
    return (
      <div>
        <nav>
          <div id="logo">
            <Link to="/login">Login</Link>
          </div>
        </nav>
        {loading === false && <Alert message={message} status={status} />}
        <main>
          <h2>Sign up</h2>
          <div className="Sign-in-out">
            <form
              id="signup"
              onSubmit={(e) => {
                e.preventDefault();
                handleUserSignup(signupInput);
              }}
            >
              <p>
                Already have an Account ?<Link to="/login">Sign in</Link>
              </p>
              <label htmlFor="fullname">Fullname</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Your fullname..."
                required
                onChange={e => saveInput(e.target.name, e.target.value)}
                defaultValue={fullname}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address..."
                required
                onChange={e => saveInput(e.target.name, e.target.value)}
                defaultValue={email}
              />

              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder=" username..."
                required
                pattern="^[(A-Za-z)|0-9].{1,15}$"
                title="Username may only contain letters or numbers and must be between 2 and 15 characters"
                onChange={e => saveInput(e.target.name, e.target.value)}
                defaultValue={username}
              />

              <label htmlFor="country">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                pattern="^((?=.*[0-9])(?=.*[a-zA-Z])).{8,12}$"
                title="Password must contain atleast one number and one letter and must be between 8 to 12 characters "
                required
                defaultValue={password}
                onChange={e => saveInput(e.target.name, e.target.value)}
              />

              <input type="submit" value="Sign up" className={statusClassName} />
            </form>
          </div>
          <div className="push" />
        </main>
        <p className="footer">
          {' '}
          copyright © 2018. &nbsp;MyDiary @ Andela.&nbsp; By &nbsp;
          <small>Hammed Noibi.</small>
        </p>
      </div>
    );
  }
}
SignupForm.propTypes = {
  saveInput: PropTypes.func,
  handleUserSignup: PropTypes.func,
  signupData: PropTypes.object,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  signupData: state.signupData
});
const mapDispatchToProps = dispatch => ({
  saveInput: (field, value) => {
    dispatch({
      type: SIGNUP_SAVE_INPUT,
      payload: { field, value }
    });
  },
  handleUserSignup: data => dispatch(userSignup(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
