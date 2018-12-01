import { signUpRequest } from "./../../services/apiRequest";
import {
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_REQUEST
} from "../constant/actionTypes";

const userSignup = data => dispatch => {
  dispatch({
    type: USER_SIGNUP_REQUEST
  });
  signUpRequest(data)
    .then(response => {
      console.log('sss',response.data)
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        // payload: {response:{data}, status:'success'}
        payload: response.data
      })
    })
    .catch(error => {
      let message;
      if(error.response) {
        message = error.response.data.message;
      } else {
        message = 'An unexpected error occured. please check your internet connection and try again';
      }
      
      dispatch({
        type: USER_SIGNUP_FAILURE,
        payload: message,
  
      });
    });
};

export { userSignup };
