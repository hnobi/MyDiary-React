/* eslint camelcase: ["error", {allow: ["UNSAFE_componentWillMount"]}] */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import newEntry from '../redux/actions/addEntry';
import { getAuthToken } from '../services/AuthToken';
import '../assets/css/main.css';

class AddEntry extends Component {
  state = {
    title: '',
    date: '',
    entry: ''
  };

  componentDidMount() {
    const authToken = getAuthToken();
    const { history } = this.props;
    if (!authToken) {
      history.replace('/login');
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = (event) => {
    const { history, handleAddEntry } = this.props;
    event.preventDefault();
    handleAddEntry(this.state, history);
  };

  render() {
    const { title, entry, date } = this.state;
    // const { loading, message } = this.props.newEntryData;
    // const statusClassName = loading ? 'loading' : '';
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
                <Link to="/logout">Logout</Link>xas
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
        {/* {loading === false && status && <Alert message={message} status={status} />} */}
        {/* {message === 'success' && <Redirect to="/entries" />} */}
        <section>
          <h2 className="heading">Add Entry</h2>
          <div className="container">
            <form id="add-entry" onSubmit={this.handleOnSubmit}>
              <label htmlFor="title">Entry title</label>
              <p id="existed-title">Title already exit in your diary</p>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Your title..."
                required
                onChange={this.handleOnChange}
                defaultValue={title}
              />
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                onChange={this.handleOnChange}
                defaultValue={date}
              />
              <label htmlFor="entry">Entry</label>
              <textarea
                type="text"
                id="entry"
                name="entry"
                placeholder="Your entry..."
                maxLength="500"
                minLength="10"
                required
                onChange={this.handleOnChange}
                defaultValue={entry}
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </section>
        <div className="push" />
      </div>
    );
  }
}

AddEntry.propTypes = {
  // saveInput: PropTypes.func,
  handleAddEntry: PropTypes.func,
  // newEntryData: PropTypes.object,
  history: PropTypes.shape({})
};

// const mapStateToProps = state => ({
//   newEntryData: state.newEntryData,
//   statusMessage: state.statusMessage
// });
const mapDispatchToProps = dispatch => ({
  handleAddEntry: (data, history) => dispatch(newEntry(data, history))
});

export default connect(
  null,
  mapDispatchToProps
)(AddEntry);
