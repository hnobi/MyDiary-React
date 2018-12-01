import { loginRequest } from "./../../services/apiRequest";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST
} from "../constant/actionTypes";

const userLogin = (data, history) => dispatch => {
  dispatch({
    type: USER_LOGIN_REQUEST
  });
  loginRequest(data)
    .then(response => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: response.data
      });
      localStorage.setItem('Token', response.data.token);
      history.push("/add-entry");
    })
    .catch(error => {
      let message;
      if (error.response) {
        message = error.response.data.message;
      } else {
        message =
          "An unexpected error occured. please check your internet connection and try again";
      }
      dispatch({
        type: USER_LOGIN_FAILURE,
        payload: message
      });
    });
};

export { userLogin };
