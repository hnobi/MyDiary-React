import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import fetchEntries from '../redux/actions/entries';
import { getAuthToken } from '../services/AuthToken';
import '../assets/css/main.css';

class Entries extends Component {
  componentDidMount() {
    const authToken = getAuthToken();
    const { history } = this.props;
    if (!authToken) {
      history.replace('/login');
    } else {
      const { fetchUserEntries } = this.props;
      fetchUserEntries();
    }
  }

  openEntry(entryId) {
    const { history } = this.props;
    history.push(`/entries/${entryId}`);
  }

  render() {
    const { entries } = this.props;
    console.log('#$%$', entries);
    const noEntries = 'There are no entries available';
    const entriesList = entries.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.date}</td>
        <td>{item.title}</td>
        <td>
          {item.entry}
        </td>
        <td>
          <a>
            <button className="view-button" onClick={() => this.openEntry(item.id)}>
              View Entry
            </button>
          </a>
        </td>
      </tr>
    ));
    return (
      <div>
        <nav className="navcolor">
          <div id="logo" className="nav-logo">
            <Link to="/" style={{ display: 'flex' }} className="nav-logo">
              <img src="../assets/img/logo-small2.png" alt="logo" />
              <span> My Diary</span>
            </Link>
          </div>
          <div style={{ margin: 'auto' }} />
          <div className="menu">
            <ul>
              <li>
                <Link to="/entries">View Entries</Link>
              </li>
              <li>
                <Link to="/add-entry">Add Entry</Link>
              </li>
              <li id="logout">
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
          <Link to="user_detail.html" id="user">
            <div className="user">
              <img
                src="../assets/img/default-img.png"
                alt="User"
                width="96"
                height="96"
                id="nav-img"
              />
              <span id="nav-name" />
            </div>
          </Link>
        </nav>
        <section>
          <h2 className="heading">My Entries</h2>
          {entries.length === 0 ? (
            noEntries
          ) : (
            <table id="entries-table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Entry</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="tbody">{entriesList}</tbody>
            </table>
          )}
        </section>
        <div className="push" />
        <p className="footer"> copyright © 2018. MyDiary @ Andela. Hammed Noibi.</p>
      </div>
    );
  }
}

Entries.propTypes = {
  entries: PropTypes.array,
  fetchUserEntries: PropTypes.func,
  openSingleEntry: PropTypes.any,
  history: PropTypes.object
};
const mapStateToProps = state => ({
  entries: state.entries.allEntries
});
const mapDispatchToProps = dispatch => ({
  // openSingleEntry: entryId => dispatch({
  //   type: 'SET_ACTIVE_VIEW_ENTRY',
  //   payload: entryId
  // }),
  fetchUserEntries: () => dispatch(fetchEntries())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entries);
