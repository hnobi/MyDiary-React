import {
  UPDATE_ENTRY_SAVE_INPUT,
  UPDATE_ENTRY_REQUEST,
  UPDATE_ENTRY_SUCCESS,
  UPDATE_ENTRY_FAILURE
} from '../constant/actionTypes';
import { updateEntryRequest } from '../../services/apiRequest';
import { getAuthToken } from '../../services/AuthToken';

const updateEntry = data => (dispatch) => {
  dispatch({
    type: UPDATE_ENTRY_REQUEST
  });
  const userToken = getAuthToken();
  // eslint-disable-next-line no-param-reassign
  data.token = userToken;
  updateEntryRequest(data)
    .then((response) => {
      dispatch({
        type: UPDATE_ENTRY_SUCCESS,
        payload: response.data.message
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
        type: UPDATE_ENTRY_FAILURE,
        payload: message,
        error
      });
    });
};

const saveUpdateInput = (field, value) => (dispatch) => {
  dispatch({
    type: UPDATE_ENTRY_SAVE_INPUT,
    payload: { field, value }
  });
};

export { saveUpdateInput, updateEntry };
