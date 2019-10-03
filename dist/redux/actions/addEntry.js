import toastr from 'toastr';
import { NEW_ENTRY_FAILURE, NEW_ENTRY_SUCCESS } from '../constant/actionTypes';
import { newEntryRequest } from '../../services/apiRequest';
import { getAuthToken } from '../../services/AuthToken';

const newEntry = (data, history) => (dispatch) => {
  const userToken = getAuthToken();
  // eslint-disable-next-line no-param-reassign
  data.token = userToken;

  newEntryRequest(data)
    .then((response) => {
      console.log(response.data, 'addentry');
      toastr.success(response.data.message);
      dispatch({
        type: NEW_ENTRY_SUCCESS,
        payload: response.data
      });
      return history.push('/entries');
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
        dispatch({
          type: NEW_ENTRY_FAILURE,
          payload: message,
          error
        });
        toastr.error(message);
      }
    });
};
export default newEntry;
