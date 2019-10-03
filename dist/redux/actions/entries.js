import { FETCH_ENTRIES_REQUEST, FETCH_ENTRIES_SUCCESS, FETCH_ENTRIES_FAILURE } from '../constant/actionTypes';
import { fetchEntriesRequest } from '../../services/apiRequest';
import { getAuthToken } from '../../services/AuthToken';

const fetchEntries = () => (dispatch) => {
  dispatch({
    type: FETCH_ENTRIES_REQUEST,
    payload: {
      message: 'Fetching entries'
    }
  });
  const userToken = getAuthToken();

  const data = {
    token: userToken
  };

  fetchEntriesRequest(data)
    .then((response) => {
      dispatch({
        type: FETCH_ENTRIES_SUCCESS,
        payload: response.data.entries
      });
    })
    .catch((error) => {
      let message;

      if (error.response) {
        ({ message } = error.response.data);
      } else {
        message = 'An unexpected error occured. please check your internet connection and try again';
      }

      dispatch({
        type: FETCH_ENTRIES_FAILURE,
        payload: message,
        error
      });
    });
};

export default fetchEntries;
