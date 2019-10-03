import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userLogin from '../redux/actions/login';
import Loader from './spinner';
import '../assets/css/main.css';
import '../assets/css/form.css';
import { removeAuthToken } from '../services/AuthToken';

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handlesInputchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleUserSubmit = (e) => {
    e.preventDefault();
    this.props.handleUserLogin(this.state);
  }

  componentDidMount() {
    removeAuthToken();
  }

  render() {
    const { history, loginData } = this.props;
    const { loading, status } = loginData;

    const statusClassName = loading ? 'loading' : '';
    if (status === 'success') {
      setTimeout(() => {
        history.push('/add-entry');
      }, 500);
    }

    return (
      <div>
         <nav>
          <div id="logo">
            <Link to="/signup">Login</Link>
          </div>
        </nav>
        <main>
          <div id="after-click">
            <h3>Invalid username or password</h3>
          </div>
          <h2>Sign in</h2>
          <div className="Sign-in-out">
            <form
              id="signin"
              onSubmit={this.handleUserSubmit}
            >
              <label className='label' htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
                required
                onChange={this.handlesInputchange}
                value={this.state.username}
              />

              <label className='label' htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="secret password"
                required
                onChange={this.handlesInputchange}
                value={this.state.password}
              />
              <button type="submit" className={statusClassName}>
                {loading ? <Loader color={'#fff'} size={30} />
                  : 'Login'}
              </button>
            </form>
            <p>
              dont have an Account ? <Link to="/signup"> Sign up</Link>{' '}
            </p>
          </div>
          <p className="footer">copyright © 2018. MyDiary @ Andela. Hammed Noibi.</p>
        </main>
      </div>
    );
  }
}

LoginForm.propTypes = {
  handleUserLogin: PropTypes.func,
  loginData: PropTypes.any,
  history: PropTypes.any,
};

const mapStateToProps = state => ({
  loginData: state.loginData
});

const mapDispatchToProps = dispatch => ({
  handleUserLogin: (data, history) => dispatch(userLogin(data, history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
