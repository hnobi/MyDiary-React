import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE
} from '../constant/actionTypes';

const initialState = {
  data: {}
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { ...state, loading: true };

    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        status: 'success'
      };
    case USER_SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        status: 'error'
      };
    default:
      return state;
  }
};

export default signupReducer;
