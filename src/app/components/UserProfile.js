import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getUserProfile from '../redux/actions/userProfile';
import { getAuthToken } from '../services/AuthToken';
import '../assets/css/main.css';

class UserProfile extends Component {
  state = {
    user: ''
  }


  componentDidMount() {
    const authToken = getAuthToken();
    const { userProfile, history } = this.props;
    if (!authToken) {
      history.replace('/login');
    } else {
      userProfile();
    }
  }

  componentDidUpdate() {
    const { user, } = this.props;

    if (this.state.user === '') this.setState({ user });
  }

  render() {
    return (
      <div>
        <nav className="navcolor">
          <div id="logo" className="nav-logo">
            <Link to="/" style={{ display: 'flex' }} className="nav-logo">
              <img src="../assets/img/logo-small2.png" alt="logo" />
              <span> My Diary</span>
            </Link>
          </div>
          <div style={{ margin: 'auto' }}>
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to="/add-entry">Add Entry</Link>
              </li>
              <li>
                <Link to="entries">My Entries</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
          <Link to="/profile" id="user">
            <div className="user">
              <img src="./public/img/default-img.png" width="96" height="96" id="nav-img" />
              <span id="nav-name"></span>
            </div>
          </Link>
        </nav>
        <section>
          <div>
            <h2 className="heading">User Account</h2>
            <p>Modify your account details</p>
          </div>
          <main id="user-details">
            <div className="profile_picx" style={{ margin: '30 auto' }}>
              <img alt="profile picture" id="user-image" />

              <form id="update-image">
                <input type="file" id="image" />
              </form>

            </div>
            <div className="container">
              <form id="update-user">
                <label htmlFor="name ">Name</label>
                <input type="text" id="fullname" name="name" value={this.state.user.fullname} />
                <label htmlFor="ename">Email</label>
                <input type="email" id="email" name="email" disabled />
                <label htmlFor=" "> Diarys name</label>
                <input type="text" id="username" name="username" />
                <label>Reminder setting (days)</label>
                <input type="text" id="reminder" name="reminder" />
                <label>Change password</label>
                <input type="password" id="password" name="password" pattern="^((?=.*[0-9])(?=.*[a-zA-Z])).{8,12}$" title="Password must contain atleast one number and one letter and must be between 8 to 12 characters "
                  required placeholder="Type your original password or the new one to change to" />
                <label></label>
                <input type="submit" value="Save changes" />
              </form>
            </div>
          </main>
        </section>
        <div className="push"></div>
        <p className="footer"> copyright © 2018. MyDiary @ Andela. Hammed Noibi.</p>
      </div >
    );
  }
}

UserProfile.propTypes = {
  userProfile: PropTypes.func.isRequired,
  history: PropTypes.object,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.userProfile.data,
});

const mapDispatchToProps = dispatch => ({
  userProfile: () => dispatch(getUserProfile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
