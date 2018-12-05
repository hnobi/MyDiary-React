import {
  FETCH_ENTRY_REQUEST,
  FETCH_ENTRY_SUCCESS,
  FETCH_ENTRY_FAILURE
} from '../constant/actionTypes';
import { fetchEntryRequest } from '../../services/apiRequest';
import { getAuthToken } from '../../services/AuthToken';

const fetchEntry = data => (dispatch) => {
  dispatch({
    type: FETCH_ENTRY_REQUEST,
    payload: data
  });
  const userToken = getAuthToken();
  // eslint-disable-next-line no-param-reassign
  data.token = userToken;

  fetchEntryRequest(data)
    .then((response) => {
      dispatch({
        type: FETCH_ENTRY_SUCCESS,
        payload: response.data.data
      });
    })
    .catch((error) => {
      let message;
      if (error.response) {
        ({ message } = error.response.data);
        if (!message) {
          const errorFields = error.response.data.errors;
          const firstField = Object.keys(errorFields)[0];
          message = errorFields[firstField];
        }
      } else {
        message = 'An unexpected error occured. please check your internet connection and try again';
      }
      dispatch({
        type: FETCH_ENTRY_FAILURE,
        payload: message,
        error
      });
    });
};
export default fetchEntry;
