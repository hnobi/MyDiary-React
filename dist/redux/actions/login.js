import toastr from 'toastr';

import { loginRequest } from '../../services/apiRequest';

import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST
} from '../constant/actionTypes';
import { saveAuthToken } from '../../services/AuthToken';

const userLogin = data => (dispatch) => {
  dispatch({
    type: USER_LOGIN_REQUEST
  });
  return loginRequest(data)
    .then((response) => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: response.data
      });
      toastr.success(response.data.message);
      saveAuthToken(response.data.token);
    })
    .catch((error) => {
      let message;
      if (error.response) {
        ({ message } = error.response.data);
      } else {
        message = 'An unexpected error occured. please check your internet connection and try again';
      }
      dispatch({
        type: USER_LOGIN_FAILURE,
        payload: message
      });
      toastr.error(message);
    });
};

export default userLogin;
