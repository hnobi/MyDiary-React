import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import fetchEntry from '../redux/actions/viewEntry';
import { getAuthToken } from '../services/AuthToken';
import '../assets/css/main.css';

class SingleEntry extends Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    const authToken = getAuthToken();
    const { history } = this.props;
    if (!authToken) {
      history.replace('/login');
    }
  }

  componentDidMount() {
    const { fetchSingleEntry, match } = this.props;
    const { entryId } = match.params;
    const authToken = getAuthToken();
    if (authToken) {
      fetchSingleEntry(entryId);
    }
  }

  render() {
    const { entry } = this.props;
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
          <h2 className="heading">Entry information</h2>

          <div className="container view-entry">
            <div className="title">
              <h3>Entry title</h3>
              <p id="title">{entry.title}</p>
            </div>
            <h3>Entry</h3>
            <div className="entry">
              <p id="content">{entry.entry}</p>
            </div>
            <div className="date">
              <h3>Posted : </h3>
              <p id="date">{entry.date}</p>
            </div>
            <div
              className="div"
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
                margin: 'auto'
              }}
            >
              <Link to={`/entries/edit/${entry.id}`}>
                <button className="edit edit-btn">edit</button>
              </Link>
              {/* <a id="delete" onClick={() => deleteSingleEntry(entry.id)}>
                <button className="delete  delete-btn">delete</button>
              </a> */}
            </div>
          </div>
        </section>
        <div className="push" />
        <p className="footer "> copyright © 2018. MyDiary @ Andela. Hammed Noibi.</p>
      </div>
    );
  }
}

SingleEntry.propTypes = {
  entries: PropTypes.array,
  selectedEntry: PropTypes.object,
  entry: PropTypes.object,
  history: PropTypes.object,
  fetchSingleEntry: PropTypes.any,
  match: PropTypes.any
};

const mapStateToProps = state => ({
  entries: state.entries,
  selectedEntry: state.selectedEntry || 1,
  entry: state.selectedEntry.data || {}
});
const mapDispatchToProps = dispatch => ({
  fetchSingleEntry: entryId => dispatch(fetchEntry({ entryId }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleEntry);
