/* eslint-disable */

import { NEW_ENTRY_FAILURE, NEW_ENTRY_SUCCESS, NEW_ENTRY_REQUEST } from '../constant/actionTypes';
import { newEntryRequest } from '../../services/apiRequest';
import { getAuthToken } from '../../services/AuthToken';

const newEntry = data => dispatch => {
  dispatch({
    type: NEW_ENTRY_REQUEST
  });

  // get the authToken from local storage
  const userToken = getAuthToken();

  // add to the data send to the request
  data.token = userToken;

  newEntryRequest(data)
    .then(response => {
      dispatch({
        type: NEW_ENTRY_SUCCESS,
        payload: response.data
      });
      // dispatch({
      //   type: SET_STATUS_MESSAGE,
      //   payload: {
      //     message: 'New entry successfully created',
      //     type: 'success'
      //   }
      // });
    })
    .catch(error => {
      let message;
      if (error.response) {
        ({ message } = error.response.data);

        // due to inconsistency in where error messages are available from the api
        // we might have to look else where for error messages
        if (!message) {
          const errorFields = error.response.data.errors;
          const firstField = Object.keys(errorFields)[0];
          message = errorFields[firstField];
        }
      } else {
        message =
          'An unexpected error occured. please check your internet connection and try again';
      }

      // dispatch({
      //   type: SET_STATUS_MESSAGE,
      //   payload: {
      //     message,
      //     type: 'error'
      //   }
      // });

      dispatch({
        type: NEW_ENTRY_FAILURE,
        payload: message,
        error
      });
    });
};
export { newEntry };
