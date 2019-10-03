/* eslint camelcase: ["error", {allow: ["UNSAFE_componentWillMount"]}] */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import fetchEntry from '../redux/actions/viewEntry';
import { updateEntry, saveUpdateInput } from '../redux/actions/updateEntry';
import { getAuthToken } from '../services/AuthToken';
import '../assets/css/main.css';

class EditEntry extends Component {
  state = {
    title: this.props.entry.title,
    date: this.props.entry.date,
    entry: this.props.entry.entry
  };

  componentDidMount() {
    const authToken = getAuthToken();
    const { history, entry } = this.props;

    if (!authToken) {
      history.replace('/login');
    } else {
      const { fetchSingleEntry, match } = this.props;
      const { entryId } = match.params;
      fetchSingleEntry(entryId);
      // this.setState({
      //   title: updateEntryData.title,
      //   entry: updateEntryData.entry,
      //   date: updateEntryData.date
      // });
      console.log('----------', entry);
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateSingleEntry({ ...this.state, entryId: this.props.match.params.entryId });
  };

  render() {
    // const { updateEntryData, entry } = this.props;
    // const { loading, message, status } = this.props.updateEntryData;
    // const { input } = updateEntryData;
    // const content = input.entry || entry.entry;
    // const title = input.title || entry.title;
    // const date = input.date || entry.date;

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
          <Link to="/profile" id="user">
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
          <h2 className="heading">Modify Entry</h2>

          <div className="container">
            <form id="modify-entry" onSubmit={this.handleSubmit}>
              <label htmlFor="title">Entry title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Your title..."
                required
                onChange={this.handleOnChange}
                value={this.state.title}
              />
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                onChange={this.handleOnChange}
                value={this.state.date}
              />
              <label htmlFor="entry">Entry</label>
              <textarea
                type="text"
                id="entry"
                name="entry"
                placeholder="Your entry..."
                maxLength="500"
                minLength="10"
                rows= "20"
                required
                onChange={this.handleOnChange}
                value={this.state.entry}
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </section>
        <div className="push" />
        <p className="footer"> copyright © 2018. MyDiary @ Andela. Hammed Noibi.</p>
      </div>
    );
  }
}
EditEntry.propTypes = {
  updateEntryData: PropTypes.any,
  entry: PropTypes.object,
  history: PropTypes.object,
  fetchSingleEntry: PropTypes.func,
  match: PropTypes.any,
  saveInput: PropTypes.func,
  updateSingleEntry: PropTypes.func
};

const mapStateToProps = state => ({
  entry: state.selectedEntry.data || {},
  updateEntryData: state.updateEntryData.input || {}
});
const mapDispatchToProps = dispatch => ({
  fetchSingleEntry: entryId => dispatch(fetchEntry({ entryId })),
  updateSingleEntry: data => dispatch(updateEntry(data)),
  saveInput: (field, value) => dispatch(saveUpdateInput(field, value)),
  dispatch
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEntry);
