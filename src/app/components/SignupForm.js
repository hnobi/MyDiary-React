import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userSignup from '../redux/actions/signUp';
import Loader from './spinner';
import '../assets/css/main.css';
import '../assets/css/form.css';

export class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      email: '',
      username: '',
    };
  }

  handleInputchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleDSignupSubmit = (e) => {
    e.preventDefault();
    this.props.handleUserSignup(this.state);
  }

  render() {
    const { history } = this.props;
    const {
      fullname, username, email, password
    } = this.state;

    const { loading, status } = this.props.signupData;
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
        <main>
          <h2>Sign up</h2>
          <div className="Sign-in-out">
            <form
              id="signup"
              onSubmit={this.handleDSignupSubmit}
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
                onChange={this.handleInputchange}
                value={fullname}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address..."
                required
                onChange={this.handleInputchange}
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
                onChange={this.handleInputchange}
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
                onChange={this.handleInputchange}
              />

              <button type="submit" className={statusClassName}>
                {loading ? <Loader color = {'#fff'} size = {30} />
                  : 'Signup'}
              </button>
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
  handleUserSignup: PropTypes.func,
  signupData: PropTypes.object,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  signupData: state.signupData
});
const mapDispatchToProps = dispatch => ({
  handleUserSignup: data => dispatch(userSignup(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
