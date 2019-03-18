import { NEW_ENTRY_FAILURE, NEW_ENTRY_SUCCESS } from '../constant/actionTypes';
import { newEntryRequest } from '../../services/apiRequest';
import { getAuthToken } from '../../services/AuthToken';

// const aaa = response => (
//   {
//     type: NEW_ENTRY_SUCCESS,
//     payload: response.data
//   });
const newEntry = (data, history) => (dispatch) => {
  const userToken = getAuthToken();
  // eslint-disable-next-line no-param-reassign
  data.token = userToken;

  newEntryRequest(data)
    .then((response) => {
      history.push('/entries');
      dispatch({
        type: NEW_ENTRY_SUCCESS,
        payload: response.data
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
        type: NEW_ENTRY_FAILURE,
        payload: message,
        error
      });
    });
};
export default newEntry;
